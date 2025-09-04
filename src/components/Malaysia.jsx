import React from 'react';
import { FaMapMarkerAlt, FaCity, FaUmbrellaBeach, FaMountain, FaLandmark, FaMosque } from 'react-icons/fa';
import malaysia from '../assets/malaysia.webp';
import langkawi from '../assets/Langkawi.webp';

const DestinationCard = ({ title, description, icon, image }) => {
  return (
    <div className="bg-[#1F2937] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#5B8424]/20 flex flex-col h-full transform hover:-translate-y-1">
      {image && (
        <div className="relative h-56 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <h3 className="text-2xl font-bold text-white p-4">{title}</h3>
          </div>
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-[#5B8424]/10 rounded-full flex items-center justify-center mr-3">
            {icon}
          </div>
          {!image && <h3 className="text-2xl font-bold text-white">{title}</h3>}
        </div>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="mt-auto">
          <button className="text-white px-4 py-2 rounded-lg hover:bg-[#5B8424]/80 transition-colors shadow-md border border-[#5B8424] w-full">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

const Malaysia = () => {
  const destinations = [
    {
      title: "Kuala Lumpur City Centre (KLCC) & Petronas Twin Towers",
      description: "The iconic Petronas Twin Towers stand tall as the symbol of Malaysia's modern spirit. Enjoy breathtaking skyline views, luxury shopping, and vibrant nightlife at KLCC. A must-visit landmark blending culture, leisure, and world-class architecture.",
      icon: <FaCity className="text-2xl text-[#5B8424]" />,
      image: malaysia
    },
    {
      title: "Langkawi",
      description: "An island paradise of turquoise waters, white sandy beaches, and lush rainforests. Explore the breathtaking Langkawi Sky Bridge, thrilling cable car rides, and duty-free shopping havens. A perfect blend of adventure, relaxation, and natural beauty.",
      icon: <FaUmbrellaBeach className="text-2xl text-[#5B8424]" />,
      image: langkawi
    },
    {
      title: "Genting Highlands",
      description: "A cool hilltop retreat just outside Kuala Lumpur, famous for its casinos, theme parks, and shopping. Enjoy breathtaking views, cable car rides, and endless entertainment. A perfect escape from the city heat.",
      icon: <FaMountain className="text-2xl text-[#5B8424]" />,
      image: null
    },
    {
      title: "King's Palace (Istana Negara)",
      description: "A majestic symbol of Malaysia's monarchy, with stunning architecture and manicured grounds. Visitors can admire the grandeur from outside the gates. A must-see landmark showcasing royal heritage.",
      icon: <FaLandmark className="text-2xl text-[#5B8424]" />,
      image: null
    },
    {
      title: "National Mosque (Masjid Negara)",
      description: "An architectural masterpiece blending modern design with Islamic artistry. Its striking blue dome and 73-meter minaret dominate the skyline. A peaceful sanctuary welcoming visitors with grace.",
      icon: <FaMosque className="text-2xl text-[#5B8424]" />,
      image: null
    },
    {
      title: "Saloma Bridge",
      description: "A dazzling pedestrian bridge connecting Kampung Baru and KLCC. Its colorful LED lights create a spectacular view after dark. A perfect spot for photos with the city skyline.",
    //   icon: <FaBridge className="text-2xl text-[#5B8424]" />,
      image: null
    }
  ];

  return (
    <div id="malaysia" className="bg-[#111111]">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={malaysia} 
          alt="Malaysia Landscape" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Discover <span className="text-[#5B8424]">Malaysia</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Truly Asia - Where Cultures, Cuisines, and Natural Wonders Converge
            </p>
            <button className="bg-[#5B8424] text-white px-8 py-3 rounded-lg hover:bg-[#5B8424]/80 transition-colors shadow-lg text-lg font-medium">
              Plan Your Trip
            </button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-[#1F2937] border-t border-[#5B8424]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Experience Malaysia</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Malaysia is a vibrant tapestry of cultures, landscapes, and experiences. From gleaming 
              skyscrapers to pristine islands, ancient rainforests to colonial heritage, Malaysia 
              offers an incredible diversity of attractions for every traveler.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[#111111] rounded-lg border border-[#5B8424]/20">
              <div className="w-16 h-16 bg-[#5B8424]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCity className="text-3xl text-[#5B8424]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Modern Metropolis</h3>
              <p className="text-gray-400">
                Explore vibrant cities with stunning architecture, world-class shopping, and a fusion of traditional and contemporary experiences.
              </p>
            </div>
            <div className="text-center p-6 bg-[#111111] rounded-lg border border-[#5B8424]/20">
              <div className="w-16 h-16 bg-[#5B8424]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUmbrellaBeach className="text-3xl text-[#5B8424]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Tropical Paradise</h3>
              <p className="text-gray-400">
                Discover pristine beaches, crystal-clear waters, and lush islands offering the perfect setting for relaxation and adventure.
              </p>
            </div>
            <div className="text-center p-6 bg-[#111111] rounded-lg border border-[#5B8424]/20">
              <div className="w-16 h-16 bg-[#5B8424]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLandmark className="text-3xl text-[#5B8424]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Cultural Heritage</h3>
              <p className="text-gray-400">
                Experience the rich tapestry of Malay, Chinese, Indian, and indigenous cultures through architecture, festivals, and cuisine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Top Destinations in Malaysia
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={index}
                title={destination.title}
                description={destination.description}
                icon={destination.icon}
                image={destination.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#1F2937] border-t border-[#5B8424]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience Malaysia?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us create your perfect Malaysian adventure. From bustling cities to tranquil islands, 
            we'll handle all the details for an unforgettable journey through this diverse nation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#5B8424] text-white px-6 py-3 rounded-lg hover:bg-[#5B8424]/80 transition-colors shadow-md">
              Book Your Malaysia Adventure
            </button>
            <button className="border border-[#5B8424] text-white px-6 py-3 rounded-lg hover:bg-[#5B8424]/10 transition-colors shadow-md">
              View All Packages
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Malaysia;