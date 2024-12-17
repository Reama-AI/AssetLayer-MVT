from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    """Application settings"""
    # API Configuration
    API_PREFIX: str = "/api"
    DEBUG: bool = True
    
    # CORS Configuration
    CORS_ORIGINS: List[str] = ["http://localhost:3000"]  # Add your frontend URLs
    
    # Model Configuration
    MODEL_PATH: str = "microsoft/Phi-3-mini-128k-instruct"
    
    # Cerebrus API Key
    CEREBRUS_API_KEY: str = "csk-tn856ndcdnhvxfkyr6w9tjm669ern4y55xj4v5pme3h9tchh"
    
    class Config:
        env_file = ".env"

settings = Settings()