import React from 'react'
import { FocusCardsDemo } from './ui/focus-cards-demo'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className="relative w-full bg-[#111111]" id="#hero">
      {/* Hero Section - Discover in Depth */}
      <div className="w-full">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Discover in Depth</h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed">
              Experience the beauty of South Asia with our Curated Journeys Through kerala, Sri Lanka, and Malaysia.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#packages"
              className="bg-[#10B981] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#059669] transition-colors inline-block text-lg"
            >
              Explore Packages
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Focus Cards Section - Separate section */}
      <div className="w-full border-t border-gray-800">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Destinations</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Explore our handpicked destinations that showcase the diverse beauty of South Asia
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FocusCardsDemo />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Header
