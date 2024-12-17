import { motion } from 'framer-motion'

export function PresentationIllustration() {
  return (
    <div className="relative w-64 h-64 mx-auto">
      <motion.div
        className="absolute inset-0 bg-primary rounded-lg shadow-lg"
        initial={{ rotate: -5 }}
        animate={{ rotate: 5 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute inset-0 bg-white rounded-lg shadow-lg"
        initial={{ rotate: 5 }}
        animate={{ rotate: -5 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="p-4">
          <div className="w-full h-4 bg-gray-200 rounded mb-2" />
          <div className="w-3/4 h-4 bg-gray-200 rounded mb-4" />
          <div className="w-full h-24 bg-gray-200 rounded mb-4" />
          <div className="w-full h-4 bg-gray-200 rounded mb-2" />
          <div className="w-5/6 h-4 bg-gray-200 rounded" />
        </div>
      </motion.div>
    </div>
  )
}