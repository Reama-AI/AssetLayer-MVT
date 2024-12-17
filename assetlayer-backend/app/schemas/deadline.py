from pydantic import BaseModel
from typing import List, Optional, Dict

class DocumentAnalysisRequest(BaseModel):
    """Request schema for document analysis"""
    document_content: str

class DocumentInfo(BaseModel):
    """Document information schema"""
    type: Optional[str] = None
    company: Optional[str] = None
    registration_number: Optional[str] = None

class DeadlineInfo(BaseModel):
    """Deadline information schema"""
    issue_date: Optional[str] = None
    expiry_date: Optional[str] = None
    has_explicit_deadline: Optional[bool] = False
    renewal_period: Optional[str] = None
    related_dates: List[str] = []

class DocumentMetadata(BaseModel):
    """Document metadata schema"""
    confidence_score: float
    verification_agency: Optional[str] = None
    bbbee_level: Optional[str] = None

class DocumentAnalysisResponse(BaseModel):
    """Response schema for document analysis"""
    document_info: DocumentInfo
    deadline_info: DeadlineInfo
    metadata: DocumentMetadata