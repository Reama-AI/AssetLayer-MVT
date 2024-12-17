import React, { useState } from 'react' 
import { motion } from 'framer-motion'
import { Button } from '../../components/ui/button'
import { PresentationIllustration } from '../../components/presentation-illustration'
import { EmailSignupForm } from '../../components/email-signup-form'

export default function PresentationBuilder() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <main className="container mx-auto px-4 py-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Presentation Builder - Coming Soon
        </h1>
        <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
          Create stunning presentations with AI-powered tools and templates. 
          Elevate your storytelling and captivate your audience.
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12"
      >
        <PresentationIllustration />
      </motion.div>

      {isSubmitted ? (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg text-primary font-semibold"
        >
          Thank you for your interest! We'll notify you when the feature launches.
        </motion.p>
      ) : (
        <EmailSignupForm onSubmit={() => setIsSubmitted(true)} />
      )}
    </main>
  )
}