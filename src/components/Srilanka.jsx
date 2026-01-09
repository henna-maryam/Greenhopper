import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  FaWater, FaMountain, FaGem, FaCity, FaUmbrellaBeach, FaLeaf } from 'react-icons/fa';
import { GiByzantinTemple } from "react-icons/gi";
import srilanka from '../assets/srilanka.webp';
import kandy from '../assets/Kandy.webp';
import bentota from '../assets/bentota.webp';
import sembwatte from '../assets/sembuwatte.webp';
import nuwara from '../assets/nuwara_eliya.webp';
import golden from '../assets/golden_beaches.webp';
import colombo from '../assets/colombo.webp';

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
      </div>
    </div>
  );
};

const Srilanka = () => {
  const navigate = useNavigate();

  const handlePlanTrip = () => {
    // Scroll to the destinations section within the same page
    const destinationsSection = document.getElementById('destinations');
    if (destinationsSection) {
      destinationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookAdventure = () => {
    // Navigate to home page and scroll to booking form
    navigate('/');
    setTimeout(() => {
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleViewPackages = () => {
    // Navigate to home page and scroll to packages section
    navigate('/');
    setTimeout(() => {
      const packagesSection = document.getElementById('packages');
      if (packagesSection) {
        packagesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const destinations = [
    {
      title: "Kandy",
      description: "A city steeped in history, Kandy is the heart of Sri Lanka's cultural heritage. The Temple of the Tooth and scenic Kandy Lake make it both spiritual and serene. Its vibrant traditions and hill-country charm captivate every traveler.",
      icon: <GiByzantinTemple className="text-2xl text-[#5B8424]" />,
      image: kandy
    },
    {
      title: "Bentota & Madu River Safari",
      description: "Bentota invites you with its golden sands and turquoise waters. Cruise the Madu River through tangled mangroves, spotting birds and river life along the way. End your journey at the Turtle Hatchery, where conservation meets wonder.",
      icon: <FaWater className="text-2xl text-[#5B8424]" />,
      image: bentota
    },
    {
      title: "Sembuwatte Lake",
      description: "A hidden gem nestled in the misty hills of Matale. This man-made lake surrounded by tea plantations offers breathtaking scenery and cool mountain air. Perfect for picnics, boating, and peaceful getaways.",
      icon: <FaWater className="text-2xl text-[#5B8424]" />,
      image: sembwatte
    },
    // {
    //   title: "Gem Museum",
    //   description: "Discover Sri Lanka's world-famous treasures at the Gem Museum. Learn about the island's dazzling sapphires and precious stones through fascinating displays. A sparkling journey into the country's rich heritage.",
    //   icon: <FaGem className="text-2xl text-[#5B8424]" />,
    //   image: null
    // },
    {
      title: "Nuwara Eliya (Little England)",
      description: "A charming hill station with colonial-era architecture and lush tea gardens. Cool climate, flower-filled parks, and cozy cottages give it an old English feel. A must-visit for relaxation and scenic beauty.",
      icon: <FaMountain className="text-2xl text-[#5B8424]" />,
      image: nuwara
    },
    {
      title: "Golden Beach",
      description: "Stretching sands kissed by turquoise waters create a tropical paradise. Relax under swaying palms or dive into thrilling water sports. A dream destination for sun, sea, and serenity.",
      icon: <FaUmbrellaBeach className="text-2xl text-[#5B8424]" />,
      image: golden
    },
    {
      title: "Colombo",
      description: "Sri Lanka's vibrant capital blends modern life with colonial charm. Explore bustling streets, seaside promenades, and cultural landmarks. A city alive with shopping, dining, and rich history.",
      icon: <FaCity className="text-2xl text-[#5B8424]" />,
      image: colombo
    }
  ];

  return (
    <div id="srilanka" className="bg-[#111111]">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={srilanka} 
          alt="Sri Lanka Landscape" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Explore <span className="text-[#5B8424]">Sri Lanka</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              The Pearl of the Indian Ocean - A Tapestry of Culture, Nature and Adventure
            </p>
            <button 
              onClick={handlePlanTrip}
              className="bg-[#5B8424] text-white px-8 py-3 rounded-lg hover:bg-[#5B8424]/80 transition-colors shadow-lg text-lg font-medium"
            >
              Plan Your Trip
            </button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-[#1F2937] border-t border-[#5B8424]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Experience Sri Lanka</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Sri Lanka, known as the "Pearl of the Indian Ocean," is a tropical island paradise with a rich cultural heritage, 
              stunning landscapes, and warm hospitality. From ancient temples to pristine beaches, 
              this compact island offers diverse experiences for every traveler.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[#111111] rounded-lg border border-[#5B8424]/20">
              <div className="w-16 h-16 bg-[#5B8424]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GiByzantinTemple className="text-3xl text-[#5B8424]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Rich Heritage</h3>
              <p className="text-gray-400">
                Discover ancient temples, colonial architecture, and vibrant cultural traditions that span over 2,500 years of history.
              </p>
            </div>
            <div className="text-center p-6 bg-[#111111] rounded-lg border border-[#5B8424]/20">
              <div className="w-16 h-16 bg-[#5B8424]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUmbrellaBeach className="text-3xl text-[#5B8424]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Pristine Beaches</h3>
              <p className="text-gray-400">
                Relax on golden shores with crystal-clear waters, perfect for swimming, surfing, and unforgettable sunsets.
              </p>
            </div>
            <div className="text-center p-6 bg-[#111111] rounded-lg border border-[#5B8424]/20">
              <div className="w-16 h-16 bg-[#5B8424]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-3xl text-[#5B8424]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Ceylon Tea</h3>
              <p className="text-gray-400">
                Explore lush tea plantations in misty highlands and sample the world's finest Ceylon tea straight from its source.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Top Destinations in Sri Lanka
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience Sri Lanka?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us create your perfect Sri Lankan adventure. From ancient temples to pristine beaches, 
            we'll handle all the details for an unforgettable journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleBookAdventure}
              className="bg-[#5B8424] text-white px-6 py-3 rounded-lg hover:bg-[#5B8424]/80 transition-colors shadow-md"
            >
              Book Your Sri Lanka Adventure
            </button>
            <button 
              onClick={handleViewPackages}
              className="border border-[#5B8424] text-white px-6 py-3 rounded-lg hover:bg-[#5B8424]/10 transition-colors shadow-md"
            >
              View All Packages
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Srilanka;