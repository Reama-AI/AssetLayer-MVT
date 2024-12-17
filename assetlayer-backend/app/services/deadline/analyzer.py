from cerebras.cloud.sdk import Cerebras
import json
from app.core.config import settings

class DocumentAnalyzer:
    """Document analysis service"""
    _instance = None

    def __new__(cls):
        """Singleton pattern to reuse client instance"""
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance._initialized = False
        return cls._instance

    def __init__(self):
        """Initialize the Cerebrus client"""
        if self._initialized:
            return
        
        self.client = Cerebras(api_key=settings.CEREBRUS_API_KEY)
        self._initialized = True

    def _create_extraction_prompt(self, document_content: str) -> str:
        """Create a prompt for extracting relevant fields from document"""
        return """You are a document analysis assistant specializing in deadline extraction. Your task is to extract information from the given document and return it in a strict JSON format.

        IMPORTANT: 
        1. For deadlines:
            - First, look for explicit expiry/deadline dates
            - If no explicit deadline, look for:
                a) Creation/Issue/Assessment date (any date indicating when the document starts being valid)
                b) Validity period mentions (e.g., "valid for 12 months", "Certificate Duration", "Twelve months from assessment")
            - If both creation date and validity period are found, calculate the expiry date
            - Set has_explicit_deadline to true only if deadline is directly stated
            - Include both calculated and found dates in related_dates

        2. Format dates as YYYY-MM-DD, converting formats like:
            - "First Quarter 2024" → Treat as start of quarter (2024-01-01)
            - "Mar-24" → Convert to full date (2024-03-01)
            - "13-Mar-24" → Convert to (2024-03-13)

        3. Return ONLY a valid JSON object with this exact structure:
        {
            "document_type": "<type>",
            "company_name": "<name>",
            "registration_number": "<number>",
            "issue_date": "<YYYY-MM-DD>",
            "expiry_date": "<YYYY-MM-DD>",
            "bbbee_level": "<number>",
            "verification_agency": "<name>",
            "has_explicit_deadline": true/false,
            "renewal_period": "<period>",
            "related_dates": ["<YYYY-MM-DD>"]
        }

        Look for creation dates under terms like:
        - Issue Date
        - Assessment Completion
        - Certificate Generated
        - Initial Assessment
        - Verification Date

        Look for validity period under terms like:
        - Certificate Duration
        - Valid for
        - Validity Period
        - Assessment Cycle
        - Renewal Period
        - Certificate Period

        Here is the document to analyze:

        """ + document_content

    def extract_fields(self, document_content: str) -> dict:
        """Extract fields from document content"""
        try:
            prompt = self._create_extraction_prompt(document_content)
            
            # Get response from Cerebrus API
            response = self.client.chat.completions.create(
                model="llama3.1-8b",
                messages=[
                    {"role": "system", "content": "You are a precise document analyzer that outputs only valid JSON."},
                    {"role": "user", "content": prompt}
                ],
                temperature=0  # Add this for more consistent outputs
            )

            # Clean and parse the response
            response_text = response.choices[0].message.content.strip()
            
            # Try to find JSON in the response if there's any extra text
            try:
                start_idx = response_text.find('{')
                end_idx = response_text.rfind('}') + 1
                if start_idx != -1 and end_idx != -1:
                    json_str = response_text[start_idx:end_idx]
                else:
                    raise ValueError("No JSON structure found in response")
                
                result = json.loads(json_str)
                
                # Validate required fields
                required_fields = [
                    'document_type', 'company_name', 'registration_number',
                    'issue_date', 'expiry_date', 'bbbee_level',
                    'verification_agency', 'has_explicit_deadline',
                    'renewal_period', 'related_dates'
                ]
                
                for field in required_fields:
                    if field not in result:
                        result[field] = None if field != 'related_dates' else []
                
                # Add confidence score
                result['extraction_confidence'] = self._calculate_confidence(result)
                
                return result

            except json.JSONDecodeError as e:
                print(f"JSON Parsing Error: {e}")
                print(f"Attempted to parse: {response_text}")
                return None

        except Exception as e:
            print(f"API Error: {str(e)}")
            return None

    def _calculate_confidence(self, extracted_data: dict) -> float:
        """Calculate confidence score based on extracted fields"""
        required_fields = [
            'document_type', 'company_name', 'issue_date', 
            'expiry_date', 'bbbee_level'
        ]
        
        filled_fields = sum(1 for field in required_fields 
                          if field in extracted_data 
                          and extracted_data.get(field))
        
        confidence = (filled_fields / len(required_fields)) * 100
        
        if extracted_data.get('has_explicit_deadline'):
            confidence = min(confidence + 10, 100)
            
        return round(confidence, 2)

    def analyze_document(self, document_content: str) -> dict:
        """Main method to analyze document and return structured information"""
        extracted_fields = self.extract_fields(document_content)
        
        if not extracted_fields:
            return None

        return {
            "document_info": {
                "type": extracted_fields.get('document_type'),
                "company": extracted_fields.get('company_name'),
                "registration_number": extracted_fields.get('registration_number')
            },
            "deadline_info": {
                "issue_date": extracted_fields.get('issue_date'),
                "expiry_date": extracted_fields.get('expiry_date'),
                "has_explicit_deadline": extracted_fields.get('has_explicit_deadline'),
                "renewal_period": extracted_fields.get('renewal_period'),
                "related_dates": extracted_fields.get('related_dates', [])
            },
            "metadata": {
                "confidence_score": extracted_fields.get('extraction_confidence'),
                "verification_agency": extracted_fields.get('verification_agency'),
                "bbbee_level": extracted_fields.get('bbbee_level')
            }
        }