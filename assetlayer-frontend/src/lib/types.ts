export interface DeadlineDocument {
    document_id: string;
    document_name: string;
    document_type: string;
    deadline_date: string;
    deadline_source: 'explicit' | 'inferred' | 'unknown';
    confidence_level: 'high' | 'medium' | 'low';
  }
  
  export interface AnalysisResponse {
    success: boolean;
    deadlines: DeadlineDocument[];
  }