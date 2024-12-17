from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import Settings
from app.routers import deadline
# Future imports for other functionality
# from app.routers import presentation
# from app.routers import rag

def create_application() -> FastAPI:
    """Create and configure the FastAPI application"""
    settings = Settings()
    
    application = FastAPI(
        title="AssetLayer API",
        description="API for document analysis and management",
        version="1.0.0"
    )

    # Configure CORS
    application.add_middleware(
        CORSMiddleware,
        allow_origins=settings.CORS_ORIGINS,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Include routers
    application.include_router(
        deadline.router,
        prefix="/api/deadline",
        tags=["deadline"]
    )
    
    # Future router includes
    # application.include_router(presentation.router, prefix="/api/presentation", tags=["presentation"])
    # application.include_router(rag.router, prefix="/api/rag", tags=["rag"])

    @application.on_event("startup")
    async def startup_event():
        """Initialize services on startup"""
        # Initialize any required services
        pass

    @application.on_event("shutdown")
    async def shutdown_event():
        """Cleanup on shutdown"""
        # Cleanup any resources
        pass

    @application.get("/")
    async def root():
        """Root endpoint"""
        return {
            "message": "AssetLayer API",
            "version": "1.0.0",
            "status": "running"
        }

    return application

app = create_application()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)