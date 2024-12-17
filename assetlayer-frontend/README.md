# Asset Layer Frontend

The frontend application for Asset Layer, built with React and Tailwind CSS. This application provides a modern interface for document analysis and deadline management.

## Features

### Dashboard
- Overview of Asset Layer features
- Quick access to Document Manager and Presentations
- Responsive design for all screen sizes

### Document Deadline Manager
- Document upload and analysis
- Real-time deadline tracking
- Filtering options:
  - All deadlines
  - Upcoming deadlines
  - Expired deadlines
- Confidence level indicators
- Document type classification

### Presentations (Coming Soon)
- AI-assisted presentation creation
- Template-based generation
- Email notification signup

## Tech Stack

- **React 18** - Frontend framework
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Radix UI** - Accessible components

## Prerequisites

- Node.js 16+
- npm or yarn
- Backend service running (see backend README)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a .env file in the root directory:
```bash
VITE_API_URL=http://localhost:8000/api
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at http://localhost:5173