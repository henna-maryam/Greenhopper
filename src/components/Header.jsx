import React from 'react'
import { ThreeDPhotoCarousel } from './ui/3d-carousel'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className="relative w-full bg-[#111111]" id="#hero">
      <div className="w-full">
        {/* Desktop: side-by-side. Mobile: stacked with carousel below CTA */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col md:flex-row items-center md:items-center justify-between lg:justify-start lg:gap-8 py-10 md:py-0 md:h-[600px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white max-w-2xl lg:max-w-3xl md:pr-60 lg:pr-16 xl:pr-20 z-10"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Discover Your Next Adventure</h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8">Experience the beauty of South Asia with our carefully curated travel packages.</p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#packages"
              className="bg-[#10B981] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#059669] transition-colors inline-block"
            >
              Explore Packages
            </motion.a>
          </motion.div>

          {/* Carousel wrapper: absolute on desktop (right side), natural flow below on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-3/4 h-[360px] sm:h-[420px] md:h-[600px] md:relative md:mt-0 mt-8"
          >
            <ThreeDPhotoCarousel />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Header
