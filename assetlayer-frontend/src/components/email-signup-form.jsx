import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "../components/ui/button"

export function EmailSignupForm({ onSubmit }) {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(email)
    setEmail('')
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Get notified when this feature launches
      </h2>
      <form 
        onSubmit={handleSubmit} 
        className="flex justify-center items-center space-x-2 max-w-md mx-auto"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow px-4 py-2 rounded-md border border-gray-300 
                     focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <Button type="submit" variant="primary">
          Notify Me
        </Button>
      </form>
    </div>
  )
}