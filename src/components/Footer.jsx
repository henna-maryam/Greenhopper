import React from 'react'
import logo from '../assets/logo-white.png'

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white py-16">
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

        {/* Social media links: icons on mobile, text on desktop */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {/* Mobile icons */}
          <div className="flex sm:hidden items-center gap-4">
            <a aria-label="Twitter" href="#" className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M8.29 20c7.55 0 11.68-6.15 11.68-11.48 0-.17 0-.35-.01-.52A8.24 8.24 0 0 0 22 5.92a8.36 8.36 0 0 1-2.36.64 4.06 4.06 0 0 0 1.81-2.23 8.19 8.19 0 0 1-2.6.98A4.1 4.1 0 0 0 16.1 4c-2.26 0-4.1 1.82-4.1 4.06 0 .32.04.64.11.94A11.64 11.64 0 0 1 3.1 4.87 4.02 4.02 0 0 0 2.6 6.92c0 1.4.73 2.64 1.84 3.36a4.14 4.14 0 0 1-1.86-.5v.05c0 1.95 1.4 3.58 3.25 3.95-.34.09-.7.14-1.07.14-.26 0-.52-.02-.77-.07.52 1.6 2.03 2.77 3.82 2.8A8.24 8.24 0 0 1 2 18.57 11.62 11.62 0 0 0 8.29 20z"/></svg>
            </a>
            <a aria-label="Instagram" href="#" className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM18 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
            </a>
            <a aria-label="YouTube" href="#" className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 0 0-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.6 15.5V8.5l6.4 3.5-6.4 3.5z"/></svg>
            </a>
            <a aria-label="Facebook" href="#" className="p-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7H7.9V12h2.6V9.7c0-2.6 1.6-4 3.9-4 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"/></svg>
            </a>
          </div>
          {/* Desktop labels */}
          <div className="hidden sm:flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white px-4 py-2 rounded-full bg-gray-800">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white px-4 py-2 rounded-full bg-gray-800">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white px-4 py-2 rounded-full bg-gray-800">Youtube</a>
            <a href="#" className="text-gray-400 hover:text-white px-4 py-2 rounded-full bg-gray-800">Facebook</a>
          </div>
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
