import React, { useState, useEffect } from 'react';
import logo from '../assets/logo-white.png';
import { GooeyNav } from './ui/gooey-nav';

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Packages", href: "#packages" },
  { label: "Quick Booking", href: "#booking" },
  { label: "About Us", href: "#about" },
];

const Navbar = () => {
  // Initialize with dark mode for black background
  const [isDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <header className="bg-[#111111] text-white w-full border-b border-[#1F2937]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <img src={logo} alt="GreenHopper" className="h-20 w-32" />
          <GooeyNav
            items={navItems}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0} // Home is at index 0
            animationTime={400}
            timeVariance={300}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
