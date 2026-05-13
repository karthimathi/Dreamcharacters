import React, { useEffect } from 'react'
import Layout from './components/layout/Layout'
import Navbar from './components/ui/Navbar'
import Hero from './components/ui/Hero'
import TrendingCharacters from './components/ui/TrendingCharacters'
import Categories from './components/ui/Categories'
import FeaturedCreators from './components/ui/FeaturedCreators'
import Pricing from './components/ui/Pricing'
import Testimonials from './components/ui/Testimonials'
import Footer from './components/ui/Footer'
import ParticlesBackground from './components/effects/ParticlesBackground'
import CursorGlow from './components/effects/CursorGlow'
import ScrollAnimations from './components/effects/ScrollAnimations'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div 
          className="fixed inset-0 bg-background flex items-center justify-center z-50"
          exit={{ opacity: 0 }}
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 rounded-full border-4 border-neonPurple border-t-electricBlue"
            />
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-3xl font-orbitron mt-8 bg-gradient-to-r from-neonPurple via-electricBlue to-neonPink bg-clip-text text-transparent"
            >
              NEONVERSE
            </motion.h1>
            <p className="text-gray-400 mt-2">Loading the future...</p>
          </div>
        </motion.div>
      ) : (
        <Layout>
          <CursorGlow />
          <ParticlesBackground />
          <ScrollAnimations />
          <Navbar />
          <Hero />
          <TrendingCharacters />
          <Categories />
          <FeaturedCreators />
          <Pricing />
          <Testimonials />
          <Footer />
        </Layout>
      )}
    </AnimatePresence>
  )
}

export default App
