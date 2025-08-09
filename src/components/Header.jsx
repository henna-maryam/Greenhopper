import React from 'react'
import { ThreeDPhotoCarousel } from './ui/3d-carousel'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className="relative h-[600px] w-full bg-[#111111]" id='#home'>
      <div className="absolute inset-0 w-full">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white max-w-2xl pr-60 z-10"
          >
            <h1 className="text-5xl font-bold mb-4">Discover Your Next Adventure</h1>
            <p className="text-xl mb-8">Experience the beauty of South Asia with our carefully curated travel packages.</p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#packages"
              className="bg-[#10B981] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#059669] transition-colors inline-block"
            >
              Explore Packages
            </motion.a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute right-0 top-0 w-3/4 h-full"
          >
            <ThreeDPhotoCarousel />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Header
