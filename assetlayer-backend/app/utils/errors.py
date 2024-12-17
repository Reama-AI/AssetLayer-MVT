from fastapi import HTTPException
from typing import Dict, Any

class DocumentAnalysisError(HTTPException):
    def __init__(self, detail: str):
        super().__init__(status_code=400, detail=detail)

class ServiceError(HTTPException):
    def __init__(self, detail: str):
        super().__init__(status_code=500, detail=detail)

def handle_analysis_error(error: Exception) -> Dict[str, Any]:
    """Convert exceptions to API responses"""
    return {
        "error": str(error),
        "success": False
    }