import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import logo from '../assets/logo-white.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleSectionClick = (sectionId) => {
    if (location.pathname === '/') {
      // If already on home page, just scroll to section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on different page, navigate to home and then scroll
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsOpen(false); // Close mobile menu
  };

  const links = [
    { label: 'Home', href: '/', isRoute: true },
    { label: 'About Us', href: 'about', isRoute: false, isSection: true },
    { label: 'Contact Us', href: 'contact', isRoute: false, isSection: true },
  ]

  const destinationLinks = [
    { label: 'Kerala', href: '/kerala' },
    { label: 'Malaysia', href: '/malaysia' },
    { label: 'Sri Lanka', href: '/srilanka' },
  ]

  return (
    <header className="bg-transparent text-white w-full absolute top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mt-5">
            <Link to="/">
              <img src={logo} alt="GreenHopper" className="h-20 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm">
            {links.map((l) => (
              <li key={l.label}>
                {l.isRoute ? (
                  <Link
                    to={l.href}
                    className={`transition-colors font-medium ${
                      location.pathname === l.href 
                        ? 'text-white' 
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {l.label}
                  </Link>
                ) : l.isSection ? (
                  <button
                    onClick={() => handleSectionClick(l.href)}
                    className="text-white/80 hover:text-white transition-colors font-medium"
                  >
                    {l.label}
                  </button>
                ) : (
                  <a
                    href={l.href}
                    className="text-white/80 hover:text-white transition-colors font-medium"
                  >
                    {l.label}
                  </a>
                )}
              </li>
            ))}
            
            {/* Destination Links */}
            <li className="relative group">
              <span className="text-white/80 hover:text-white transition-colors font-medium cursor-pointer">
                Destinations
              </span>
              <ul className="absolute top-full left-0 mt-2 w-48 bg-[#1F2937] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {destinationLinks.map((dest) => (
                  <li key={dest.label}>
                    <Link
                      to={dest.href}
                      className={`block px-4 py-3 text-sm transition-colors ${
                        location.pathname === dest.href 
                          ? 'text-[#5B8424] bg-[#5B8424]/10' 
                          : 'text-white/80 hover:text-white hover:bg-[#5B8424]/10'
                      }`}
                    >
                      {dest.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/+918157901999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full p-2 bg-green-500 text-white hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a>
            
            {/* Quick Book (Desktop only) */}
            <button
              onClick={() => handleSectionClick('booking')}
              className="hidden sm:inline-flex items-center justify-center rounded-xl border-2 border-[#5B8424] bg-[#5B8424] px-6 py-3 text-sm font-semibold text-white hover:bg-[#5B8424]/80 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Quick Book
            </button>

            

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center rounded-md border border-white/20 px-3 py-2 text-sm"
            >
              {isOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 bg-black/80 p-4 rounded-xl shadow-lg">
            <ul className="space-y-4">
              {links.map((l) => (
                <li key={l.label}>
                  {l.isRoute ? (
                    <Link
                      to={l.href}
                      onClick={() => setIsOpen(false)}
                      className={`block transition-colors font-medium ${
                        location.pathname === l.href 
                          ? 'text-white' 
                          : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {l.label}
                    </Link>
                  ) : l.isSection ? (
                    <button
                      onClick={() => handleSectionClick(l.href)}
                      className="block text-white/80 hover:text-white transition-colors font-medium w-full text-left"
                    >
                      {l.label}
                    </button>
                  ) : (
                    <a
                      href={l.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-white/80 hover:text-white transition-colors font-medium"
                    >
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
              
              {/* Destination Links (Mobile) */}
              <li className="pt-2">
                <span className="block text-white/80 font-medium mb-2">Destinations</span>
                <ul className="ml-4 space-y-2">
                  {destinationLinks.map((dest) => (
                    <li key={dest.label}>
                      <Link
                        to={dest.href}
                        onClick={() => setIsOpen(false)}
                        className={`block text-sm transition-colors ${
                          location.pathname === dest.href 
                            ? 'text-[#5B8424]' 
                            : 'text-white/60 hover:text-white'
                        }`}
                      >
                        {dest.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>

            {/* Quick Book (Mobile menu) */}
            <div className="pt-4 border-t border-white/20">
              <button
                onClick={() => handleSectionClick('booking')}
                className="block w-full text-center rounded-xl border-2 border-[#5B8424] bg-[#5B8424] px-6 py-3 text-sm font-semibold text-white hover:bg-[#5B8424]/80 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Quick Book
              </button>
              
              {/* WhatsApp Button (Mobile) */}
              <a 
                href="https://wa.me/+918157901999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 w-full text-center rounded-xl border-2 border-green-500 bg-green-500 px-6 py-3 text-sm font-semibold text-white hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
