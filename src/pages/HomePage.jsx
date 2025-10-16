import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import TopIntro from '../components/TopIntro';
import Header from '../components/Header';
import Packages from '../components/Packages';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import AnimatedSection from '../components/AnimatedSection';
import StaggeredAnimation from '../components/StaggeredAnimation';
import sl from '../assets/srilanka.webp';
import kl from '../assets/kerala.webp';
import ml from '../assets/malaysia.webp';
import { FaRoute, FaHotel, FaCar, FaUserTie, FaMapMarkedAlt, FaHeadset } from 'react-icons/fa'
import badge from '../assets/badge-removebg-preview.png'


const HomePage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    nationality: '',
    destination: '',
    preferredDate: '',
    numberOfDays: '',
    additionalNotes: ''
  });

  const packages = [
    {
      title: 'Kerala',
      description: 'From tranquil houseboat cruises to vibrant cultural traditions, Kerala offers a perfect blend of relaxation, adventure, and timeless charm.',
      image: kl,
      price: '35000 INR /-',
      id: 'kerala'
    },
    {
      title: 'Sri Lanka',
      description: 'Experience the pearl of Indian Ocean with ancient temples, pristine beaches, and exotic wildlife.',
      image: sl,
      price: '53777 INR /-',
      id: 'srilanka'
    },
    {
      title: 'Malaysia',
      description: 'From the iconic Petronas Towers to tranquil islands and vibrant street markets, Malaysia offers a perfect blend of nature, culture, and unforgettable experiences',
      image: ml,
      price: '54692 INR /-',
      id: 'malaysia'
    }
  ];

  const handleBookingSuccess = () => {
    // Reset form data after successful booking
    setFormData({
      name: '',
      email: '',
      nationality: '',
      destination: '',
      preferredDate: '',
      numberOfDays: '',
      additionalNotes: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* TopIntro - Always visible, no animation needed */}
      <TopIntro packages={packages} />
      
      {/* Header - Fade up animation */}
      {/* <AnimatedSection 
        animationType="fadeUp" 
        delay={0.2} 
        duration={1}
        yOffset={80}
      >
        <Header />
      </AnimatedSection> */}
      
      {/* Packages - Staggered animation for individual package cards */}
      <StaggeredAnimation 
        delay={0.4} 
        duration={1}
        yOffset={80}
        threshold={0.2}
        staggerDelay={0.2}
      >
        <div id="packages">
          <Packages 
            packages={packages} 
            onBookNow={(destination) => {
              document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
              setFormData(prev => ({ ...prev, destination }));
            }} 
          />
        </div>
      </StaggeredAnimation>
      
      {/* AboutUs - Slide in from right */}
      <AnimatedSection 
        animationType="slideInRight" 
        delay={0.2} 
        duration={1.1}
        yOffset={70}
        threshold={0.15}
      >
        <div id="about">
          {/* Company Overview Section */}
                <section id='about' className="py-20 bg-[#1F2937] border-t border-[#5B8424]/20">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
                      <div>
                        <h2 className="text-4xl font-bold text-white mb-6">Your Gateway to Extraordinary Adventures</h2>
                        <p className="text-gray-300 mb-8 text-lg text-justify">
                          Greenhopper Holidays is your gateway to unforgettable travel experiences across India. Founded by industry experts with over 20 years of expertise, we specialize in adventure, cultural, religious, natural, and wildlife tours. With offices in Cochin and Kottakal, we blend professional service with authentic Indian hospitality. Our 24/7 team handles every detail—travel planning, itinerary design, hotel bookings, ticketing, transport, and personalized holiday packages—so you can enjoy a seamless journey. Whether it’s trekking the Himalayas, relaxing on serene beaches, or exploring India’s spiritual and cultural richness, Greenhopper promises journeys that are personalized, professional, and truly memorable.
                        </p>
                        <div className="grid grid-cols-3 gap-6">
                          <div>
                            <h3 className="text-2xl font-bold text-[#5B8424] mb-2">10+</h3>
                            <p className="text-gray-400">Years of Experience</p>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-[#5B8424] mb-2">430+</h3>
                            <p className="text-gray-400">Happy Travelers</p>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-[#5B8424] mb-2">24/7</h3>
                            <p className="text-gray-400">Support Available</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center ml-8 sm:ml-16 md:ml-48">
                        <img
                          src={badge}
                          alt="10 Years of Trust and Experience Badge"
                          className="w-72 h-72 sm:w-48 sm:h-48 md:w-10/12 md:h-10/12 lg:w-80 lg:h-80 drop-shadow-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </section>
          
                {/* Values Section */}
                <section className="py-20 bg-[#111111]">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white">Services Provided</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="text-center p-6 bg-[#1F2937] rounded-lg border border-[#5B8424]/20">
                        <div className="w-16 h-16 bg-[#5B8424]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaRoute className="text-3xl text-[#5B8424]" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Personalized Itineraries</h3>
                        <p className="text-gray-400">
                          Custom-tailored travel plans designed to match your interests and preferences perfectly.
                        </p>
                      </div>
                      <div className="text-center p-6 bg-[#1F2937] rounded-lg border border-[#5B8424]/20">
                        <div className="w-16 h-16 bg-[#5B8424]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaHotel className="text-3xl text-[#5B8424]" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Hotel Booking</h3>
                        <p className="text-gray-400">
                          Carefully selected accommodations that ensure comfort and quality throughout your stay.
                        </p>
                      </div>
                      <div className="text-center p-6 bg-[#1F2937] rounded-lg border border-[#5B8424]/20">
                        <div className="w-16 h-16 bg-[#5B8424]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaCar className="text-3xl text-[#5B8424]" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Transportation</h3>
                        <p className="text-gray-400">
                          Reliable and comfortable transfer services for all your travel needs.
                        </p>
                      </div>
                      <div className="text-center p-6 bg-[#1F2937] rounded-lg border border-[#5B8424]/20">
                        <div className="w-16 h-16 bg-[#5B8424]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaUserTie className="text-3xl text-[#5B8424]" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Expert Guides</h3>
                        <p className="text-gray-400">
                          Professional and knowledgeable local guides to enhance your travel experience.
                        </p>
                      </div>
                      <div className="text-center p-6 bg-[#1F2937] rounded-lg border border-[#5B8424]/20">
                        <div className="w-16 h-16 bg-[#5B8424]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaMapMarkedAlt className="text-3xl text-[#5B8424]" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Tour Planning</h3>
                        <p className="text-gray-400">
                          Comprehensive tour planning and coordination for seamless travel experiences.
                        </p>
                      </div>
                      <div className="text-center p-6 bg-[#1F2937] rounded-lg border border-[#5B8424]/20">
                        <div className="w-16 h-16 bg-[#5B8424]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FaHeadset className="text-3xl text-[#5B8424]" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">24/7 Support</h3>
                        <p className="text-gray-400">
                          Round-the-clock assistance and support throughout your journey.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
        </div>
      </AnimatedSection>
      
      {/* BookingForm - Fade up with longer delay */}
      <AnimatedSection 
        animationType="fadeUp" 
        delay={0.5} 
        duration={1.3}
        yOffset={90}
        threshold={0.1}
      >
        <div id="booking">
          <BookingForm 
            formData={formData}
            onChange={handleChange}
            onSuccess={handleBookingSuccess}
          />
        </div>
      </AnimatedSection>
      
      {/* Footer - Fade in */}
      <AnimatedSection 
        animationType="fadeIn" 
        delay={0.3} 
        duration={0.8}
        threshold={0.05}
      >
        <Footer />
      </AnimatedSection>
    </div>
  );
};

export default HomePage;
