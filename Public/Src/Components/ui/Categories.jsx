import React from 'react'
import CategoryCard from './CategoryCard'

const categories = [
  { name: 'Fantasy', icon: '🐉', color: 'from-purple-500 to-pink-500' },
  { name: 'Cyberpunk', icon: '🤖', color: 'from-cyan-500 to-blue-500' },
  { name: 'Chibi', icon: '🌟', color: 'from-pink-400 to-orange-400' },
  { name: 'RPG Heroes', icon: '⚔️', color: 'from-red-500 to-yellow-500' },
  { name: 'Sci-Fi', icon: '🚀', color: 'from-indigo-500 to-purple-500' },
]

const Categories = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 bg-gradient-to-r from-neonPurple to-electricBlue bg-clip-text text-transparent">
            Character Categories
          </h2>
          <p className="text-gray-400">Explore by genre and style</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.name} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
