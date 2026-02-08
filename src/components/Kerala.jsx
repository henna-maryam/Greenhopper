import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaLeaf, FaUmbrellaBeach, FaTree, FaWater, FaMountain } from 'react-icons/fa';
import kerala from '../assets/kerala.webp';
import alleppey from '../assets/Alleppey.webp';
import munnar from '../assets/munnar.webp';
import kochi from '../assets/kochi.webp';
import thekkady from '../assets/thekkady.webp';
import athirapally from '../assets/athirapally.webp';
import kumarakom from '../assets/kumarakom.webp';

const DestinationCard = ({ title, description, icon, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#5B8424]/20 flex flex-col h-full transform hover:-translate-y-1">
      {image && (
        <div className="relative h-56 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t to-transparent flex items-end">
            <h3 className="text-2xl font-bold text-white p-4">{title}</h3>
          </div>
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-[#5B8424]/10 rounded-full flex items-center justify-center mr-3">
            {icon}
          </div>
          {!image && <h3 className="text-2xl font-bold text-black">{title}</h3>}
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
      </div>
    </div>
  );
};

const Kerala = () => {
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
      title: "Kochi",
      description: "The cultural port city with colonial charm, spice markets, and Chinese fishing nets. Fort Kochi, Mattancherry Palace, and vibrant art scenes attract visitors. A perfect mix of heritage and modern life.",
      icon: <FaMapMarkerAlt className="text-2xl text-[#5B8424]" />,
      image: kochi
    },
    {
      title: "Munnar",
      description: "Nestled in the Western Ghats, Munnar is a dreamy hill station carpeted with emerald tea plantations. Cool mist, cascading waterfalls, and rolling hills make it a nature lover's paradise. An ideal retreat for peace and romance.",
      icon: <FaMountain className="text-2xl text-[#5B8424]" />,
      image: munnar
    },
    {
      title: "Alleppey",
      description: "Known as the \"Venice of the East,\" Alleppey offers serene backwaters and iconic houseboat cruises. Glide past lush paddy fields and coconut groves as life unfolds on the banks. Perfect for relaxation and an authentic Kerala experience.",
      icon: <FaWater className="text-2xl text-[#5B8424]" />,
      image: alleppey
    },
    {
      title: "Thekkady",
      description: "Home to Periyar Wildlife Sanctuary, rich with elephants, bison, and birdlife. Tourists enjoy boat safaris, trekking, and spice plantation tours. A hotspot for adventure and eco-tourism.",
      icon: <FaTree className="text-2xl text-[#5B8424]" />,
      image: thekkady
    },
    {
      title: "Kumarakom",
      description: "A tranquil village on Vembanad Lake, ideal for houseboat stays and birdwatching. The Kumarakom Bird Sanctuary hosts migratory species. Perfect for relaxation and Ayurveda retreats.",
      icon: <FaLeaf className="text-2xl text-[#5B8424]" />,
      image: kumarakom
    },
    {
      title: "Athirapally",
      description: "Kerala's \"Niagara Falls,\" surrounded by lush greenery and forests. A favorite spot for nature photography and film shoots. Majestic waterfalls create a breathtaking view in monsoon.",
      icon: <FaUmbrellaBeach className="text-2xl text-[#5B8424]" />,
      image: athirapally
    }
  ];

  return (
    <div id="kerala" className="bg-[#f1f8f4]">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={kerala} 
          alt="Kerala Landscape" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Discover <span className="text-[#5B8424]">Kerala</span>
            </h1>
            <p className="text-xl mb-8">
              God's Own Country - Where Nature and Culture Create Paradise
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
      <section className="py-20 bg-white border-t border-[#5B8424]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Explore Kerala The Right Way</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Kerala, known as "God's Own Country," is a tropical paradise on India's southwestern Malabar Coast. 
              With its emerald backwaters, misty hill stations, pristine beaches, and vibrant culture, 
              Kerala offers an enchanting escape for every traveler.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg border border-[#5B8424]/20">
              <div className="w-16 h-16 bg-[#5B8424]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaWater className="text-3xl text-[#5B8424]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Serene Backwaters</h3>
              <p className="text-gray-700">
                Cruise through tranquil lagoons and canals on traditional houseboats, experiencing the unique backwater ecosystem.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-[#5B8424]/20">
              <div className="w-16 h-16 bg-[#5B8424]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMountain className="text-3xl text-[#5B8424]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Lush Hill Stations</h3>
              <p className="text-gray-700">
                Explore misty mountains, tea plantations, and cool retreats offering breathtaking views and refreshing climate.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border border-[#5B8424]/20">
              <div className="w-16 h-16 bg-[#5B8424]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-3xl text-[#5B8424]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Ayurvedic Wellness</h3>
              <p className="text-gray-700">
                Rejuvenate with traditional Ayurvedic treatments and therapies in the land where this ancient science flourishes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-20 bg-[#f1f8f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">
            Top Destinations in Kerala
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
      <section className="py-16 bg-white border-t border-[#5B8424]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">Ready to Experience Kerala?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Let us create your perfect Kerala itinerary. From serene backwaters to misty mountains, 
            we'll handle all the details for an unforgettable journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleBookAdventure}
              className="bg-[#5B8424] text-white px-6 py-3 rounded-lg hover:bg-[#5B8424]/80 transition-colors shadow-md"
            >
              Book Your Kerala Adventure
            </button>
            <button 
              onClick={handleViewPackages}
              className="border border-[#5B8424] text-black px-6 py-3 rounded-lg hover:bg-[#5B8424]/10 transition-colors shadow-md"
            >
              View All Packages
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kerala;