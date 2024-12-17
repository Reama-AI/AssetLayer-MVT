from fastapi import APIRouter, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
from app.schemas.deadline import DocumentAnalysisRequest, DocumentAnalysisResponse
from app.services.deadline.service import DeadlineService
from app.utils.errors import DocumentAnalysisError, handle_analysis_error
from app.utils.helpers import validate_document_content

router = APIRouter()
deadline_service = DeadlineService()

@router.post("/analyze", response_model=DocumentAnalysisResponse)
async def analyze_document(document: DocumentAnalysisRequest):
    """Analyze document content for deadlines"""
    try:
        if not validate_document_content(document.document_content):
            raise DocumentAnalysisError("Invalid document content")

        result = await deadline_service.analyze_document(document.document_content)
        return JSONResponse(
            content=result.dict(),
            status_code=200,
            headers={
                "Access-Control-Allow-Origin": "http://localhost:5173",
                "Access-Control-Allow-Credentials": "true"
            }
        )
    except Exception as e:
        return JSONResponse(
            content={"detail": str(e)},
            status_code=400,
            headers={
                "Access-Control-Allow-Origin": "http://localhost:5173",
                "Access-Control-Allow-Credentials": "true"
            }
        )

@router.post("/analyze/file", response_model=DocumentAnalysisResponse)
async def analyze_document_file(file: UploadFile = File(...)):
    """Analyze document from file upload"""
    try:
        content = await file.read()
        document_content = content.decode()
        
        if not validate_document_content(document_content):
            raise DocumentAnalysisError("Invalid document content")

        result = await deadline_service.analyze_document(document_content)
        print("Backend Result:", result)
        return JSONResponse(
            content=result.dict(),
            status_code=200,
            headers={
                "Access-Control-Allow-Origin": "http://localhost:5173",
                "Access-Control-Allow-Credentials": "true"
            }
        )
    except Exception as e:
        print("Backend Error:", str(e))
        return JSONResponse(
            content={"detail": str(e)},
            status_code=400,
            headers={
                "Access-Control-Allow-Origin": "http://localhost:5173",
                "Access-Control-Allow-Credentials": "true"
            }
        )

@router.options("/analyze/file")
async def analyze_file_options():
    """Handle preflight requests for file upload"""
    return JSONResponse(
        content={},
        headers={
            "Access-Control-Allow-Origin": "http://localhost:5173",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Credentials": "true",
        }
    )