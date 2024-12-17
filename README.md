# Asset Layer MVT

Asset Layer is an automated document management system designed specifically for renewable energy asset teams. The system leverages advanced machine learning capabilities to streamline document handling, deadline management, and presentation assistance.

## Overview

Asset Layer provides two main features:
- **Document Deadline Manager**: AI-powered system for analyzing documents and tracking deadlines
- **Presentation Builder**: (Coming Soon) Tool for creating presentations from document content

## Features

### Document Deadline Manager
- Automated document analysis using LLaMA 3.1
- Intelligent deadline extraction and tracking
- Confidence scoring for extracted information
- Support for multiple document types:
  - BBBEE Certificates
  - Environmental Authorizations
  - Safety Certifications

### Presentation Builder (Coming Soon)
- AI-assisted presentation creation
- Document content extraction
- Template-based generation

## Tech Stack

### Frontend
- React 18
- Tailwind CSS
- Framer Motion
- React Router

### Backend
- FastAPI
- LLaMA 3.1-8b (via Cerebrus API)
- PostgreSQL with pgvector
- Python 3.10+

## Getting Started

For detailed setup instructions, please refer to:
- [Frontend Setup Guide](frontend/README.md)
- [Backend Setup Guide](backend/README.md)

