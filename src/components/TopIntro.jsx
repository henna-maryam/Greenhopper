import React from 'react'
import bg from '../assets/bg.jpg'

const TopIntro = ({ packages = [] }) => {
  const topPackages = packages.slice(0, 3)

  return (
    <section
      id="home"
      className="relative text-white min-h-[640px] sm:min-h-[700px] md:min-h-[760px]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex flex-col justify-end h-full">
        <div className="flex flex-col gap-4 max-w-xl mb-8">
          <div className="mb-2">
            <p className="uppercase tracking-widest text-sm text-white/80 mb-2 pt-55">Mountains | Plains | Beaches</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow">
              Spend your vacation
              <br className="hidden sm:block" /> with our activities
            </h2>
          </div>

          <div>
            <p className="text-white/90 font-medium mb-3">Most Popular</p>
            <div className="flex items-stretch gap-4">
              {topPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className="w-40 sm:w-44 bg-white/10 border border-white/20 rounded-2xl overflow-hidden backdrop-blur-[2px] hover:bg-white/15 transition-colors shadow-lg"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-2.5">
                    <h3 className="text-sm font-semibold leading-tight">{pkg.title}</h3>
                    <p className="text-[10px] text-white/80">Featured destination</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopIntro


