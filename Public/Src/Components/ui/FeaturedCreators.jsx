import React from 'react'
import CreatorCard from './CreatorCard'

const creators = [
  { name: 'Akira Studio', followers: '125K', verified: true, avatar: '🎨', specialty: 'Cyberpunk' },
  { name: 'Neon Manga', followers: '89K', verified: true, avatar: '✏️', specialty: 'Fantasy' },
  { name: 'Void Artist', followers: '234K', verified: true, avatar: '🎭', specialty: 'Sci-Fi' },
  { name: 'Sakura Draws', followers: '67K', verified: false, avatar: '🌸', specialty: 'Chibi' },
]

const FeaturedCreators = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-neonPurple/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 bg-gradient-to-r from-neonPurple to-neonPink bg-clip-text text-transparent">
            Featured Creators
          </h2>
          <p className="text-gray-400">Meet the legends behind the art</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {creators.map((creator, index) => (
            <CreatorCard key={creator.name} creator={creator} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCreators
