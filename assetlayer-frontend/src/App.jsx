import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import Dashboard from './app/page'
import DeadlineInfo from './app/deadline-info/page'
import DocumentAnalysis from './app/document-analysis/page'
import PresentationBuilder from './app/presentation-builder/page'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/deadline-info" element={<DeadlineInfo />} />
          <Route path="/deadlines" element={<DocumentAnalysis />} />
          <Route path="/presentations" element={<PresentationBuilder />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App