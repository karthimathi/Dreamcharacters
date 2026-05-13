import React from 'react'
import { motion } from 'framer-motion'
import { Check, Crown } from 'lucide-react'

const PricingCard = ({ plan, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`glass-card p-8 relative overflow-hidden ${plan.popular ? 'border-neonPurple border-2 shadow-2xl shadow-neonPurple/20' : ''}`}
    >
      {plan.popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-gradient-to-r from-neonPurple to-electricBlue px-4 py-1 rounded-bl-2xl text-sm font-semibold flex items-center gap-1">
            <Crown size={14} /> POPULAR
          </div>
        </div>
      )}
      
      <h3 className="text-2xl font-orbitron font-bold">{plan.name}</h3>
      <div className="mt-4 mb-6">
        <span className="text-4xl font-bold">${plan.price}</span>
        <span className="text-gray-400">/month</span>
      </div>
      
      <div className="space-y-3">
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-center gap-2">
            <Check size={18} className="text-neonPurple" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full mt-8 py-3 rounded-full font-semibold transition ${
          plan.popular 
            ? 'bg-gradient-to-r from-neonPurple to-electricBlue shadow-lg shadow-neonPurple/50' 
            : 'glass-card border border-white/20 hover:border-neonPurple'
        }`}
      >
        Get Started
      </motion.button>
    </motion.div>
  )
}

export default PricingCard
