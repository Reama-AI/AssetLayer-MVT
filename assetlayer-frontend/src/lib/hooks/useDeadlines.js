import { useState, useCallback } from 'react';
import { DeadlineService } from '@/services/api';

function formatDocumentData(analysisResult) {
  return {
    document_id: Math.random().toString(36).substr(2, 9),
    document_name: analysisResult.document_info.company,
    document_type: analysisResult.document_info.type,
    deadline_date: analysisResult.deadline_info.expiry_date,
    deadline_source: analysisResult.deadline_info.has_explicit_deadline ? 'explicit' : 'inferred',
    confidence_level: analysisResult.metadata.confidence_score > 90 ? 'high' : 
                     analysisResult.metadata.confidence_score > 70 ? 'medium' : 'low'
  };
}

export function useDeadlines() {
  const [deadlines, setDeadlines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDeadlines = useCallback(async (type = 'all') => {
    setLoading(true);
    setError(null);
    try {
      const data = await DeadlineService.getDeadlines(type);
      setDeadlines(data.map(formatDocumentData));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const analyzeDocument = useCallback(async (file) => {
    setLoading(true);
    setError(null);
    try {
      const response = await DeadlineService.analyzeDocument(file);
      if (response.success) {
        // Format data for table
        const formattedData = formatDocumentData(response.data);
        setDeadlines(prevDeadlines => [...prevDeadlines, formattedData]);
        
        // Return original analysis data for preview
        return response.data;
      }
      throw new Error('Analysis failed');
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    deadlines,
    loading,
    error,
    fetchDeadlines,
    analyzeDocument
  };
}