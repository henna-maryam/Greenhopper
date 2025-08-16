import React from 'react'
import logo from '../assets/logo-white.png'

const Navbar = () => {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Premium', href: '#packages' },
    { label: 'Blogs', href: '#packages' },
  ]

  return (
    <header className="bg-transparent text-white w-full absolute top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="GreenHopper" className="h-12 w-auto" />
          </div>
          <ul className="hidden md:flex items-center gap-8 text-sm">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-white/80 hover:text-white transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a
              href="#packages"
              className="hidden sm:inline-flex items-center justify-center rounded-xl border border-white/40 px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Explore
            </a>
            <button className="md:hidden inline-flex items-center justify-center rounded-md border border-white/20 px-3 py-2 text-sm">
              Menu
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
