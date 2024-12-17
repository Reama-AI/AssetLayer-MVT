import { motion } from 'framer-motion'
import { FileText, Clock, ChevronRight, CheckCircle, AlertTriangle, Upload } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function DeadlineInfo() {
  const features = [
    {
      icon: Upload,
      title: "Easy Document Upload",
      description: "Simply drag and drop your documents or click to upload. We support various document formats."
    },
    {
      icon: Clock,
      title: "Automatic Deadline Detection",
      description: "Our AI system automatically identifies and extracts important dates and deadlines from your documents."
    },
    {
      icon: AlertTriangle,
      title: "Smart Notifications",
      description: "Stay informed about upcoming deadlines with our intelligent notification system."
    }
  ];

  const supportedDocuments = [
    "BBBEE Certificates",
    "Environmental Authorizations",
    "Safety Certifications",
    "Compliance Documents"
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI-Powered Document Deadline Management
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Never miss another deadline with our intelligent document analysis system. 
              Upload your documents and let our AI handle the rest.
            </p>
            <Link 
              to="/deadlines"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get Started
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Supported Document Types
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {supportedDocuments.map((doc, index) => (
                <div 
                  key={index}
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span className="text-gray-700">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Start managing your document deadlines efficiently with our AI-powered system. 
              Upload your first document and see the magic happen.
            </p>
            <Link 
              to="/deadlines"
              className="inline-flex items-center px-8 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors"
            >
              Try Deadline Analyzer
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}