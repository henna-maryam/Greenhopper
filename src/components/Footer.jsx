import React from 'react'
import logo from '../assets/logo-white.png'

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white py-16 flex items-center justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section with logo and description */}
        <div className="flex flex-col items-start space-y-6 mb-12">
          <div className="space-x-2">
            <img src={logo} alt="GreenHopper" className="h-20 w-32" />
          </div>
          <p className="text-gray-300 max-w-2xl">
            At GreenHopper, we make every stay unique. From cozy homes to luxury retreats, 
            find your perfect escape and create unforgettable memories.
          </p>
          {/* <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
            Browse Special Deals
          </button> */}
        </div>

        {/* Social media links */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <a href="#" className="text-gray-400 hover:text-white px-4 py-2 rounded-full bg-gray-800">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white px-4 py-2 rounded-full bg-gray-800">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-white px-4 py-2 rounded-full bg-gray-800">Youtube</a>
          <a href="#" className="text-gray-400 hover:text-white px-4 py-2 rounded-full bg-gray-800">Facebook</a>
        </div>

        {/* Bottom section with links */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a>
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
          </div>
          <p className="text-gray-400">© {new Date().getFullYear()} GreenHopper. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
