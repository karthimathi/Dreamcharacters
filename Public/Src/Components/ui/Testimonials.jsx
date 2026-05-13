import React from 'react'
import TestimonialCard from './TestimonialCard'

const testimonials = [
  { name: 'Alex Chen', role: 'Collector', avatar: '👤', text: 'NEONVERSE has completely changed how I collect digital art. The quality is unmatched!', rating: 5 },
  { name: 'Sarah Williams', role: 'Creator', avatar: '🎨', text: 'The best marketplace for anime characters. Premium experience from start to finish.', rating: 5 },
  { name: 'Marcus Lee', role: 'Investor', avatar: '💎', text: 'Revolutionary platform with incredible potential. The UI is absolutely stunning.', rating: 5 },
]

const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-neonPurple/5 to-electricBlue/5 blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 bg-gradient-to-r from-neonPink to-electricBlue bg-clip-text text-transparent">
            Creator Testimonials
          </h2>
          <p className="text-gray-400">What our community says</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
