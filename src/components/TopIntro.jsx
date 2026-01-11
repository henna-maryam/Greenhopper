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
    <section id="home" className="relative text-white bg-[#050505] py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-stretch">
          {/* Visual Panel - 60% on desktop */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl flex-1 md:basis-3/5 min-h-[260px] md:min-h-[520px] mt-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${images[currentImageIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 0.5s ease-in-out',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>

          {/* Content Panel - 40% on desktop */}
          <div className="flex-1 md:basis-2/5 flex items-start">
            <div className="flex flex-col gap-4 max-w-xl">

              <p className="uppercase tracking-widest text-sm text-white/80 font-medium pt-55">
                Heritage City | Hill Station | Wild Life | Backwater | Beach
              </p>
              <p
                className="uppercase text-6xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight drop-shadow"
                style={{
                  fontFamily: '"Alfa Slab One", serif',
                  color: 'transparent',
                  WebkitTextStroke: '2px rgba(255, 255, 255, 0.8)',
                }}
              >
                Travel With Soul, Return With Stories
              </p>
              <p
                className="uppercase text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow"
                style={{
                  fontFamily: '"Oswald", sans-serif',
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(255, 255, 255, 0.8)',
                }}
              >
                Your Journey Begins Here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopIntro