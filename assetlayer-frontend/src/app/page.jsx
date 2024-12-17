import { Hero } from '../components/hero'
import { FeatureCard } from '../components/feature-card'
import { Clock, PresentationIcon, CheckCircle, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Dashboard() {
  const benefits = [
    {
      title: "Smart Document Analysis",
      description: "Our AI analyzes your documents to automatically detect and track important deadlines.",
      icon: CheckCircle
    },
    {
      title: "Automated Tracking",
      description: "Never miss a deadline with our intelligent tracking and notification system.",
      icon: CheckCircle
    },
    {
      title: "AI-Powered Presentations",
      description: "Transform your documents into professional presentations with just a few clicks.",
      icon: CheckCircle
    }
  ];

  return (
    <>
      <Hero />
    
      <main className="container mx-auto px-4 py-12">
        {/* Main Features */}
        <div className="mt-8 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful tools designed to streamline your document management workflow
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FeatureCard 
              title="Deadline Manager" 
              description="Never miss a deadline again. Our AI-powered system tracks and manages all your document due dates."
              icon={Clock}
              route="/deadline-info"
            />
            <FeatureCard 
              title="Presentation Builder" 
              description="Create stunning presentations in minutes with our AI-assisted design tools and templates."
              icon={PresentationIcon}
              route="/presentations"
            />
          </div>
        </div>

        {/* About Section */}
        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Revolutionizing Document Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Asset Layer combines advanced AI technology with intuitive design to transform 
            how renewable energy teams handle their documentation and presentations.
          </p>
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mt-24">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Perfect for Renewable Energy Teams
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Document Management</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Track BBBEE certificates and renewal dates</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Monitor environmental authorization deadlines</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Manage safety certification timelines</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Presentation Creation</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Generate professional slides from your documents</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">AI-powered content extraction and formatting</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Customizable templates for different needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="mt-24 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Deadline Compliance</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">75%</div>
              <div className="text-gray-600">Time Saved</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Document Monitoring</div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}