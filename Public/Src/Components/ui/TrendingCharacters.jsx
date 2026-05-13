import React from 'react'
import { motion } from 'framer-motion'
import CharacterCard from './CharacterCard'

const trendingCharacters = [
  { id: 1, name: 'Shadow Ronin', price: '2.5 ETH', image: '🎭', category: 'Cyberpunk', likes: 1234 },
  { id: 2, name: 'Neon Sakura', price: '1.8 ETH', image: '🌸', category: 'Fantasy', likes: 2345 },
  { id: 3, name: 'Cyber Phoenix', price: '3.2 ETH', image: '🔥', category: 'Sci-Fi', likes: 3456 },
  { id: 4, name: 'Void Assassin', price: '2.1 ETH', image: '🗡️', category: 'RPG Heroes', likes: 4567 },
  { id: 5, name: 'Electric Mage', price: '1.5 ETH', image: '⚡', category: 'Fantasy', likes: 5678 },
]

const TrendingCharacters = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="bg-gradient-to-r from-neonPurple to-electricBlue bg-clip-text text-transparent">
              Trending Characters
            </span>
          </h2>
          <p className="text-gray-400">Most sought-after digital assets this week</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {trendingCharacters.map((character, index) => (
            <CharacterCard key={character.id} character={character} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendingCharacters
