import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.webp'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="bg-[#111111] text-white relative">
      {/* Top Call-to-Action Section */}
      <div className="bg-[#1a1a1a] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* 24/7 Support Block */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#5B8424] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">24</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Need Any Support For Tour & Travels ?</h3>
                </div>
              </div>
              <button className="w-10 h-10 bg-[#5B8424] rounded-full flex items-center justify-center hover:bg-[#4a6b1f] transition-colors">
                <FaArrowUp className="w-4 h-4 text-white transform rotate-45" />
              </button>
            </div>

            {/* Ready to Get Started Block */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Ready to Get Started With GreenHopper!</h3>
                </div>
              </div>
              <button className="w-10 h-10 bg-[#5B8424] rounded-full flex items-center justify-center hover:bg-[#4a6b1f] transition-colors">
                <FaArrowUp className="w-4 h-4 text-white transform rotate-45" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="border-t border-gray-800"></div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Brand Information */}
            <div className="space-y-6">
              <div className="space-y-4">
                <img src={logo} alt="GreenHopper" className="h-30 w-auto" />
                <div className="text-sm text-gray-300">
                  <p>Welcome you to enjoy fabulous and unique experience on Greenhopper holiday packages.</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-white font-bold text-lg">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <a href="/about" className="block text-gray-400 hover:text-white transition-colors">About GreenHopper</a>
                  <a href="#packages" className="block text-gray-400 hover:text-white transition-colors">Destinations</a>
                  <a href="#packages" className="block text-gray-400 hover:text-white transition-colors">Packages</a>
                  <a href="#home" className="block text-gray-400 hover:text-white transition-colors">Blogs</a>
                  <a href="#home" className="block text-gray-400 hover:text-white transition-colors">Gallery</a>
                </div>
                <div className="space-y-3">
                  <a href="#packages" className="block text-gray-400 hover:text-white transition-colors">Kerala Packages</a>
                  <a href="#packages" className="block text-gray-400 hover:text-white transition-colors">Srilanka Packages</a>
                  <a href="#packages" className="block text-gray-400 hover:text-white transition-colors">Malaysia Packages</a>
                </div>
              </div>
            </div>

            {/* Reach Us */}
            <div className="space-y-6">
              <h3 className="text-white font-bold text-lg">Reach Us</h3>
              <div className="space-y-6">
                {/* UAE Contact */}
                <div>
                  <h4 className="text-white font-semibold mb-2">UAE</h4>
                  <p className="text-gray-400 text-sm mb-1">3rd Floor, Room No:328, R.K.M Building, Al Qiyadah, Metro Exit 2, Dubai, UAE</p>
                  <p className="text-gray-400 text-sm">Ph: 00 91 81579 01999</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">SAUDI ARABIA</h4>
                  <p className="text-gray-400 text-sm mb-1">KING FAHAD BIN ABDULAZIZ ST., AL AMAMRA DAMMAM 32415, KINGDOM OF SAUDI ARABIA</p>
                  <p className="text-gray-400 text-sm">Ph: +966 50 745 4255</p>
                </div>
                
                {/* India Contact */}
                <div>
                  <h4 className="text-white font-semibold mb-2">India</h4>
                  <p className="text-gray-400 text-sm mb-1">KM4/812- Smart Trade City, Kottakkal, Malappuram Dt. 676553</p>
                  <p className="text-gray-400 text-sm mb-3">Ph: +91 7902277575</p>

                  <div>
                  <p className="text-gray-400 text-sm mb-1">Greenhopper Holidays Pvt Ltd 
                  4/461, Second Floor, Suite #1855 Valamkottil Towers, Judgemukku,  Kakkanad, Kochi, Kerala India, PIN 682021</p>
                  <p className="text-gray-400 text-sm mb-3">Ph: +91 7902277575</p>

                  <p className="text-gray-400 text-sm mb-1">Ph: +91 8156901999 , +91 8157901999</p>
                  <p className="text-gray-400 text-sm mb-3">Email: info@greenhopperholidays.com </p>
                </div>
                  
                  {/* Social Media Icons */}
                  <div className="flex space-x-3">
                    <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#5B8424] transition-colors">
                      <FaFacebook className="w-4 h-4 text-white" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#5B8424] transition-colors">
                      <FaTwitter className="w-4 h-4 text-white" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#5B8424] transition-colors">
                      <FaLinkedin className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="border-t border-gray-800"></div>

      {/* Bottom Section */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Setting & privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Faqs</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Support</a>
            </div>
            <p className="text-gray-400 text-sm">2023 GreenHopper Holidays. All Rights Reserved</p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-[#5B8424] rounded-full flex items-center justify-center hover:bg-[#4a6b1f] transition-all duration-300 shadow-lg z-50"
        >
          <FaArrowUp className="w-5 h-5 text-white" />
        </button>
      )}
    </footer>
  )
}

export default Footer
