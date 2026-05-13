import React from 'react'
import { motion } from 'framer-motion'
import { Twitter, Instagram, Globe, Verified } from 'lucide-react'

const CreatorCard = ({ creator, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="glass-card p-6 text-center"
    >
      <div className="relative inline-block">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neonPurple to-electricBlue animate-pulse" />
        <div className="relative w-24 h-24 mx-auto bg-gradient-to-br from-neonPurple/30 to-electricBlue/30 rounded-full flex items-center justify-center text-4xl">
          {creator.avatar}
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-center gap-2">
        <h3 className="text-xl font-orbitron font-semibold">{creator.name}</h3>
        {creator.verified && <Verified size={18} className="fill-electricBlue text-electricBlue" />}
      </div>
      
      <p className="text-sm text-neonPurple mt-1">{creator.specialty}</p>
      <p className="text-2xl font-bold mt-2">{creator.followers}</p>
      <p className="text-xs text-gray-500">followers</p>
      
      <div className="flex justify-center gap-4 mt-4">
        <Twitter size={18} className="text-gray-400 hover:text-electricBlue cursor-pointer transition" />
        <Instagram size={18} className="text-gray-400 hover:text-neonPink cursor-pointer transition" />
        <Globe size={18} className="text-gray-400 hover:text-neonPurple cursor-pointer transition" />
      </div>
    </motion.div>
  )
}

export default CreatorCard
