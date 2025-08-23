import React from 'react'

const PackageCard = ({ pkg, onBookNow }) => {
  return (
    <div className="bg-[#1F2937] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-[#5B8424]/20">
      <img src={pkg.image} alt={pkg.title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-white">{pkg.title}</h3>
        <p className="text-gray-400 mb-4">{pkg.description}</p>
        <div className="flex justify-between items-center">
          {/* <span className="text-[#5B8424] font-bold text-xl">{pkg.price}</span> */}
          <button
            onClick={() => onBookNow(pkg.title)}
            className="bg-[#5B8424] text-white px-4 py-2 rounded hover:bg-[#5B8424]/80 transition-colors"
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
    <section id="packages" className="py-20 bg-[#111111] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Travel Packages</h2>
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
