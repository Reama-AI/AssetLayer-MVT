import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Reama AI</h3>
            <p className="text-sm text-gray-600">
              Empowering businesses with intelligent document management and presentation solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-primary">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/deadlines" className="text-sm text-gray-600 hover:text-primary">
                  Deadline Manager
                </Link>
              </li>
              <li>
                <Link to="/presentations" className="text-sm text-gray-600 hover:text-primary">
                  Presentation Builder
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Contact</h4>
            <p className="text-sm text-gray-600">
              Have questions? Reach out to our team.
            </p>
            <a 
              href="mailto:contact@example.com" 
              className="inline-block text-sm text-primary hover:text-primary/80"
            >
              contact@example.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t text-center sm:flex sm:justify-between sm:text-left">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Reama AI. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <a href="#" className="text-sm text-gray-600 hover:text-primary mx-3">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-primary mx-3">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}