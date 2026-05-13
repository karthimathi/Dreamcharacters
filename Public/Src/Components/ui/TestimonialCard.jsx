import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card p-6"
    >
      <Quote size={32} className="text-neonPurple mb-4 opacity-50" />
      <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
      
      <div className="flex items-center gap-3 mt-4">
        <div className="w-12 h-12 bg-gradient-to-br from-neonPurple to-electricBlue rounded-full flex items-center justify-center text-xl">
          {testimonial.avatar}
        </div>
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-xs text-neonPurple">{testimonial.role}</p>
        </div>
        <div className="ml-auto flex gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
