import { useState } from 'react'
import { FileUploader } from '@/components/file-uploader'
import { DeadlineTabs } from '@/components/deadline-tabs'
import { DocumentTable } from '@/components/document-table'
import { useDeadlines } from '@/lib/hooks/useDeadlines'
import { FileText, Calendar, BadgeCheck } from 'lucide-react'

export default function DocumentAnalysis() {
  const [activeTab, setActiveTab] = useState('all')
  const { deadlines, loading, error, analyzeDocument } = useDeadlines()
  const [latestAnalysis, setLatestAnalysis] = useState(null)

  const handleFileUpload = async (file) => {
    try {
      const result = await analyzeDocument(file)
      setLatestAnalysis(result)
    } catch (err) {
      console.error('Error analyzing document:', err)
    }
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Document Analysis Dashboard</h1>
      
      <FileUploader onFileUpload={handleFileUpload} />
      
      {error && (
        <div className="my-4 p-4 bg-red-50 text-red-600 rounded-md">
          {error}
        </div>
      )}

      {/* Analysis Preview Card */}
      <div className="my-8 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="border-b border-gray-100 bg-gray-50 px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            <FileText className="w-5 h-5 mr-2 text-primary" />
            {latestAnalysis ? 'Latest Document Analysis' : 'Document Analysis Preview'}
          </h2>
        </div>
        
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Document Info */}
            <div className="space-y-4">
              <h3 className="font-medium text-gray-700">Document Information</h3>
              <div className="space-y-2">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Type</span>
                  <span className={`font-medium ${latestAnalysis ? 'text-gray-900' : 'text-gray-400'}`}>
                    {latestAnalysis?.document_info?.type || 'Pending analysis...'}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Company</span>
                  <span className={`font-medium ${latestAnalysis ? 'text-gray-900' : 'text-gray-400'}`}>
                    {latestAnalysis?.document_info?.company || 'Pending analysis...'}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Registration</span>
                  <span className={`font-medium ${latestAnalysis ? 'text-gray-900' : 'text-gray-400'}`}>
                    {latestAnalysis?.document_info?.registration_number || 'Pending analysis...'}
                  </span>
                </div>
              </div>
            </div>

            {/* Deadline Info */}
            <div className="space-y-4">
              <h3 className="font-medium text-gray-700">Deadline Information</h3>
              <div className="space-y-2">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Issue Date</span>
                  <span className={`font-medium ${latestAnalysis ? 'text-gray-900' : 'text-gray-400'}`}>
                    {latestAnalysis?.deadline_info?.issue_date || 'Pending analysis...'}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Expiry Date</span>
                  <span className={`font-medium ${latestAnalysis ? 'text-gray-900' : 'text-gray-400'}`}>
                    {latestAnalysis?.deadline_info?.expiry_date || 'Pending analysis...'}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Renewal Period</span>
                  <span className={`font-medium ${latestAnalysis ? 'text-gray-900' : 'text-gray-400'}`}>
                    {latestAnalysis?.deadline_info?.renewal_period || 'Pending analysis...'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Metadata Footer */}
          <div className="mt-6 flex items-center justify-between bg-gray-50 -mx-6 -mb-6 px-6 py-4">
            <div className="flex items-center space-x-4">
              <span className="flex items-center text-sm text-gray-600">
                <BadgeCheck className="w-4 h-4 mr-1 text-primary" />
                Confidence: {latestAnalysis?.metadata?.confidence_score || '0'}%
              </span>
              <span className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-1 text-primary" />
                Deadline Source: {latestAnalysis?.deadline_info?.has_explicit_deadline ? 'Explicit' : 'Pending'}
              </span>
            </div>
            <span className="flex items-center text-sm font-medium text-primary">
              BBBEE Level: {latestAnalysis?.metadata?.bbbee_level || 'Pending'}
            </span>
          </div>
        </div>
      </div>
      
      <DeadlineTabs 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
      
      <DocumentTable 
        deadlines={deadlines}
        loading={loading}
        activeTab={activeTab}
      />
    </main>
  )
}