import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, ShoppingCart, Star } from 'lucide-react'

const CharacterCard = ({ character, index }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="glass-card p-4 cursor-pointer group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-neonPurple/0 via-neonPurple/10 to-electricBlue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Image Placeholder */}
      <div className="relative h-48 rounded-xl bg-gradient-to-br from-neonPurple/20 to-electricBlue/20 flex items-center justify-center text-6xl mb-4 overflow-hidden">
        {character.image}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/50 flex items-center justify-center"
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="px-4 py-2 bg-neonPurple rounded-full text-sm font-semibold"
            >
              Quick View
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-orbitron font-semibold">{character.name}</h3>
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart size={20} className={isLiked ? 'fill-neonPink text-neonPink' : 'text-gray-400'} />
          </motion.button>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-neonPurple">{character.category}</span>
          <div className="flex items-center gap-1">
            <Star size={14} className="fill-yellow-500 text-yellow-500" />
            <span className="text-sm">{character.likes}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-2 border-t border-white/10">
          <span className="text-xl font-bold text-electricBlue">{character.price}</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-neonPurple/20 hover:bg-neonPurple/40 transition"
          >
            <ShoppingCart size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default CharacterCard
