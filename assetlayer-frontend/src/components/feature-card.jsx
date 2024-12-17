import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function FeatureCard({ title, description, icon: Icon, route }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="w-full bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
    >
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="p-4 bg-primary/10 rounded-xl">
          <Icon className="w-12 h-12 text-primary" />
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>

        <Link 
          to={route}
          className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors w-full max-w-xs"
        >
          Get Started
        </Link>
      </div>
    </motion.div>
  )
}