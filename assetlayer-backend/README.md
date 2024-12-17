# Asset Layer Backend

FastAPI backend service for Asset Layer, providing document analysis and deadline management functionality using LLaMA 3.1 via the Cerebrus API.

## Features

### Document Analysis
- AI-powered document content extraction
- Deadline detection and validation
- Document type classification
- Confidence scoring
- Support for multiple document types:
 - BBBEE Certificates
 - Environmental Authorizations
 - Safety Certifications

### API Endpoints
- Document analysis endpoints
- Deadline management endpoints
- File upload handling

## Tech Stack

- **FastAPI** - Web framework
- **LLaMA 3.1-8b** - Language model (via Cerebrus API)
- **PostgreSQL** - Database
- **pgvector** - Vector storage
- **Python 3.10+** - Programming language

## Prerequisites

- Python 3.10+
- PostgreSQL
- Cerebrus API key

## Installation

1. Create and activate virtual environment:
```bash
python -m venv env
source env/bin/activate  # Linux/Mac
.\env\Scripts\activate  # Windows
```

2. Install required packages:
```bash
pip install -r requirements.txt
```

3. Create .env file in root directory:
```env
CEREBRUS_API_KEY=your_api_key_here
```

## Running the Application

### Development Setup

1. Clone the repository:
```bash
git clone [repository-url]
cd assetlayer-mvt
```

2. Setup Backend:
```bash
# Navigate to backend directory
cd assetlayer-backend

# Create virtual environment
python -m venv env

# Activate virtual environment
source env/bin/activate  # Linux/Mac
.\env\Scripts\activate  # Windows

# Install dependencies
pip install -r requirements.txt

# Create .env file and add your Cerebrus API key
echo "CEREBRUS_API_KEY=your_key_here" > .env

# Start backend server
uvicorn main:app --reload --port 8000
```

## API Documentation

The Asset Layer API provides endpoints for document analysis and deadline management. All responses are in JSON format.
