import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Star } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neonPurple/20 via-background to-electricBlue/20 animate-gradient-shift" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center space-x-2 px-4 py-2 glass-card mb-6"
            >
              <Sparkles size={16} className="text-neonPurple" />
              <span className="text-sm">Premium Digital Characters</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-orbitron font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-neonPurple via-electricBlue to-neonPink bg-clip-text text-transparent">
                Discover Legendary
              </span>
              <br />
              Digital Characters
            </h1>
            
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              Explore the most exclusive collection of premium anime characters. 
              Own, trade, and showcase legendary digital assets in the NEONVERSE.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-gradient-to-r from-neonPurple to-electricBlue rounded-full font-semibold shadow-2xl shadow-neonPurple/50 flex items-center gap-2"
              >
                Explore Now <ArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 glass-card border border-white/20 rounded-full font-semibold"
              >
                Watch Trailer
              </motion.button>
            </div>

            {/* Floating Stats */}
            <div className="flex gap-8 mt-12">
              {[
                { value: '10K+', label: 'Characters' },
                { value: '500+', label: 'Creators' },
                { value: '50K+', label: 'Collectors' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] lg:h-[600px]">
              {/* Anime Character Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-neonPurple/30 to-electricBlue/30 rounded-3xl animate-float" />
              <div className="absolute inset-4 bg-gradient-to-tr from-neonPink/20 to-transparent rounded-3xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-64 h-64 mx-auto bg-gradient-to-r from-neonPurple to-electricBlue rounded-full opacity-20 animate-pulse" />
                  <p className="mt-8 text-neonPurple font-orbitron">✦ Premium Character Art ✦</p>
                </div>
              </div>
              
              {/* Floating Holographic Cards */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 right-10 glass-card p-3"
              >
                <Star size={24} className="text-neonPurple" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
