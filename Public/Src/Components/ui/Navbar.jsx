import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ShoppingBag, LogIn } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['Marketplace', 'Characters', 'Creators', 'Pricing']

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card backdrop-blur-xl bg-background/80 border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-neonPurple to-electricBlue rounded-lg" />
            <span className="font-orbitron text-xl font-bold bg-gradient-to-r from-neonPurple via-electricBlue to-neonPink bg-clip-text text-transparent">
              NEONVERSE
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link}
                whileHover={{ scale: 1.05 }}
                className="text-gray-300 hover:text-neonPurple transition-colors cursor-pointer font-medium"
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition"
            >
              <LogIn size={18} />
              <span>Login</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-5 py-2 bg-gradient-to-r from-neonPurple to-electricBlue rounded-full font-semibold shadow-lg shadow-neonPurple/50"
            >
              Marketplace
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-card backdrop-blur-xl border-t border-white/10"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a key={link} className="block text-gray-300 hover:text-neonPurple py-2">
                {link}
              </a>
            ))}
            <button className="w-full px-4 py-2 bg-neonPurple/20 rounded-lg">Login</button>
            <button className="w-full px-4 py-2 bg-gradient-to-r from-neonPurple to-electricBlue rounded-full">
              Marketplace
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
