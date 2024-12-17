import requests
import json

def test_deadline_analyzer():
    """Test script for deadline analyzer endpoints"""
    BASE_URL = "http://localhost:8000/api/deadline"
    
    # Test data - using your example BBBEE certificate
    test_document = """BROAD-BASED BLACK ECONOMIC EMPOWERMENT CERTIFICATE
Certificate Number: BEE123/2024
Issue Date: January 15, 2024

This certifies that:
COMPANY: Sunrise Energy Solutions (Pty) Ltd
Registration Number: 2020/123456/07
VAT Number: 4120234567

Has been evaluated and certified as a:
LEVEL 2 B-BBEE CONTRIBUTOR

B-BBEE STATUS: Level 2 Contributor
TOTAL POINTS SCORED: 95.82 points
BLACK OWNERSHIP: 51%
BLACK WOMEN OWNERSHIP: 30%

This certificate is valid for a period of 12 months from date of issue.
Expiry Date: January 14, 2025

Verification Agency: BEE Verify Pro
Accreditation Number: SANAS-BV-0123"""

    print("\n1. Testing /analyze endpoint with direct text...")
    try:
        response = requests.post(
            f"{BASE_URL}/analyze",
            json={"document_content": test_document}
        )
        print(f"Status Code: {response.status_code}")
        print("Response:")
        print(json.dumps(response.json(), indent=2))
    except Exception as e:
        print(f"Error testing /analyze: {str(e)}")

    print("\n2. Testing /analyze/file endpoint...")
    try:
        # Create a temporary file
        with open("test_document.txt", "w") as f:
            f.write(test_document)
        
        # Send file
        with open("test_document.txt", "rb") as f:
            files = {"file": ("test_document.txt", f, "text/plain")}
            response = requests.post(
                f"{BASE_URL}/analyze/file",
                files=files
            )
        print(f"Status Code: {response.status_code}")
        print("Response:")
        print(json.dumps(response.json(), indent=2))
    except Exception as e:
        print(f"Error testing /analyze/file: {str(e)}")

if __name__ == "__main__":
    test_deadline_analyzer()