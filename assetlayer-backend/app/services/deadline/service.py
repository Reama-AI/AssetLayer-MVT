from app.services.deadline.analyzer import DocumentAnalyzer
from app.schemas.deadline import (
    DocumentAnalysisResponse, 
    DocumentInfo, 
    DeadlineInfo, 
    DocumentMetadata
)

class DeadlineService:
    def __init__(self):
        self.analyzer = DocumentAnalyzer()

    async def analyze_document(self, document_content: str) -> DocumentAnalysisResponse:
        """
        Analyze document and return structured information
        """
        try:
            # Get analysis from analyzer
            analysis_result = self.analyzer.analyze_document(document_content)
            
            if not analysis_result:
                raise ValueError("Failed to analyze document")

            # Convert the analysis result to proper schema objects
            document_info = DocumentInfo(
                type=analysis_result["document_info"]["type"],
                company=analysis_result["document_info"]["company"],
                registration_number=analysis_result["document_info"]["registration_number"]
            )

            deadline_info = DeadlineInfo(
                issue_date=analysis_result["deadline_info"]["issue_date"],
                expiry_date=analysis_result["deadline_info"]["expiry_date"],
                has_explicit_deadline=analysis_result["deadline_info"]["has_explicit_deadline"],
                renewal_period=analysis_result["deadline_info"]["renewal_period"],
                related_dates=analysis_result["deadline_info"]["related_dates"]
            )

            metadata = DocumentMetadata(
                confidence_score=analysis_result["metadata"]["confidence_score"],
                verification_agency=analysis_result["metadata"]["verification_agency"],
                bbbee_level=str(analysis_result["metadata"]["bbbee_level"])  # Convert to string
            )

            # Create and return the response object
            return DocumentAnalysisResponse(
                document_info=document_info,
                deadline_info=deadline_info,
                metadata=metadata
            )

        except Exception as e:
            raise ValueError(f"Error analyzing document: {str(e)}")