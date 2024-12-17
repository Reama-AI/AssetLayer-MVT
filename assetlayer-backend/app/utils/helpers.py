from typing import Dict, Any
import json

def validate_document_content(content: str) -> bool:
    """Validate document content"""
    if not content or len(content.strip()) < 10:
        return False
    return True

def format_analysis_response(analysis_result: Dict[str, Any]) -> Dict[str, Any]:
    """Format analysis result for API response"""
    return {
        "success": True,
        "data": analysis_result
    }