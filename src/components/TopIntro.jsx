import React, { useState, useEffect } from 'react'
import bg1 from '../assets/bg1.webp'
import bg2 from '../assets/bg2.webp'
import bg3 from '../assets/bg3.webp'
import bg4 from '../assets/bg4.webp'
import bg5 from '../assets/bg5.webp'
import bg7 from '../assets/bg7.webp'
import bg8 from '../assets/bg8.webp'
import bg10 from '../assets/bg10.webp'

const TopIntro = ({ packages = [] }) => {
    // const topPackages = packages.slice(0, 3)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [ bg1, bg2, bg3, bg4, bg5, bg7, bg8, bg10]

  // Preload images to prevent loading gaps
  useEffect(() => {
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };

    // Preload all images
    images.forEach(image => {
      preloadImage(image);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative text-white min-h-[340px] sm:min-h-[400px] md:min-h-[580px]"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex flex-col justify-end h-full">
        <div className="flex flex-col gap-4 max-w-xl mb-8">
          <div className="mb-2">
            <p className="uppercase tracking-widest text-sm text-white/80 mb-2 pt-55">Heritage City | Hill Station | Wild Life | Backwater | Beach</p>
            <p className="text-6xl sm:text-4xl md:text-6xl font-normal leading-tight drop-shadow"
            style={{ fontFamily: '"Story Script", sans-serif' }}>
              From God's Own Country to Tropical Wonders
            </p>
            <p className="text-5xl font-bold leading-tight drop-shadow"
            style={{ fontFamily: '"Oswald", sans-serif' }}>
              Your Journey Begins Here
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopIntro