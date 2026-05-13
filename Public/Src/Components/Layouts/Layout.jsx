import React from 'react'
import { motion } from 'framer-motion'

const Layout = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-x-hidden"
    >
      <div className="grid-bg fixed inset-0 pointer-events-none opacity-30" />
      {children}
    </motion.div>
  )
}

export default Layout
