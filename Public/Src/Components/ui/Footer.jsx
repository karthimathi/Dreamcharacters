import React from 'react'
import { motion } from 'framer-motion'
import { Twitter, Instagram, Youtube, Github, Mail, Send } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative bg-background/95 border-t border-white/10 pt-16 pb-8">
      <div className="absolute inset-0 bg-gradient-to-t from-neonPurple/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-orbitron font-bold bg-gradient-to-r from-neonPurple to-electricBlue bg-clip-text text-transparent mb-4">
              NEONVERSE
            </h3>
            <p className="text-gray-400 text-sm">Premium digital character marketplace for the next generation of collectors.</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-neonPurple transition">Marketplace</a></li>
              <li><a href="#" className="hover:text-neonPurple transition">Characters</a></li>
              <li><a href="#" className="hover:text-neonPurple transition">Creators</a></li>
              <li><a href="#" className="hover:text-neonPurple transition">Pricing</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-orbitron font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-neonPurple transition">Help Center</a></li>
              <li><a href="#" className="hover:text-neonPurple transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-neonPurple transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-neonPurple transition">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-orbitron font-semibold mb-4">Newsletter</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 glass-card rounded-lg text-sm focus:outline-none focus:border-neonPurple"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="p-2 bg-gradient-to-r from-neonPurple to-electricBlue rounded-lg"
              >
                <Send size={18} />
              </motion.button>
            </div>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 pt-8 border-t border-white/10">
          <motion.a whileHover={{ scale: 1.1, y: -3 }} href="#" className="text-gray-400 hover:text-neonPurple transition">
            <Twitter size={20} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.1, y: -3 }} href="#" className="text-gray-400 hover:text-neonPurple transition">
            <Instagram size={20} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.1, y: -3 }} href="#" className="text-gray-400 hover:text-neonPurple transition">
            <Youtube size={20} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.1, y: -3 }} href="#" className="text-gray-400 hover:text-neonPurple transition">
            <Github size={20} />
          </motion.a>
        </div>
        
        <div className="text-center text-gray-500 text-xs mt-8">
          © 2024 NEONVERSE. All rights reserved. Enter the future of digital characters.
        </div>
      </div>
    </footer>
  )
}

export default Footer
