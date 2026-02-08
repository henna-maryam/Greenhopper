import React from 'react'
import { useNavigate } from 'react-router-dom'

const PackageCard = ({ pkg, onBookNow }) => {
  const navigate = useNavigate()

  const handleExplore = () => {
    // Navigate to the destination page based on the package id
    navigate(`/${pkg.id}`)
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-[#5B8424]/20 flex flex-col">
      {/* Image */}
      <img src={pkg.image} alt={pkg.title} className="w-full h-64 object-cover" />

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-black mb-2">{pkg.title}</h3>
        <p className="text-gray-700 mb-4 flex-grow">{pkg.description}</p>
        <div className="mt-2">
          <button 
            onClick={handleExplore}
            className="text-black px-2 py-2 rounded-md hover:bg-[#5B8424]/80 transition-colors shadow-md border border-[#5B8424]"
          >
            Explore
          </button>
        </div>

        {/* Price + Button Row */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-[#5B8424] font-bold text-xl">{pkg.price}</span>
          <button
            onClick={() => onBookNow(pkg.title)}
            className="bg-[#5B8424] text-white px-4 py-2 rounded-lg hover:bg-[#5B8424]/80 transition-colors shadow-md"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

const Packages = ({ packages, onBookNow }) => {
  return (
    <section id="packages" className="py-20 bg-[#f1f8f4] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          Our Travel Packages
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} onBookNow={onBookNow} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages
