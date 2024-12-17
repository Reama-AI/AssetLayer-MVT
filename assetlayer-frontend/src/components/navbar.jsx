import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-sm">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          Reama AI
        </Link>
      </div>
      
      <div className="flex items-center space-x-6">
        <Link 
          to="/" 
          className="text-gray-600 hover:text-primary transition-colors"
        >
          Dashboard
        </Link>
        <Link 
          to="/deadline-info" 
          className="text-gray-600 hover:text-primary transition-colors"
        >
          Deadlines
        </Link>
        <Link 
          to="/presentations" 
          className="text-gray-600 hover:text-primary transition-colors"
        >
          Presentations
        </Link>
        
        <button 
          className="px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-md transition-colors"
        >
          Sign Out
        </button>
      </div>
    </nav>
  )
}