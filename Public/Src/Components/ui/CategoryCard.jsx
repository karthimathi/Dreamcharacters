import React from 'react'
import { motion } from 'framer-motion'

const CategoryCard = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="glass-card p-6 text-center cursor-pointer group relative overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
      <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
      <h3 className="text-lg font-orbitron font-semibold">{category.name}</h3>
      <p className="text-xs text-gray-500 mt-1">24 characters</p>
    </motion.div>
  )
}

export default CategoryCard
