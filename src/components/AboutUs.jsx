import React from 'react'
import { CircularTestimonials } from '../components/ui/circular-testimonials'
import { FaRoute, FaHotel, FaCar, FaUserTie, FaMapMarkedAlt, FaHeadset } from 'react-icons/fa'

const testimonials = [
  {
    quote: "GreenHopper made our Sri Lankan adventure unforgettable! The attention to detail and local expertise was outstanding.",
    name: "Sarah Johnson",
    designation: "Adventure Enthusiast",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    quote: "The Kerala backwaters tour was beyond our expectations. Every moment was perfectly planned and authentic.",
    name: "Michael Chen",
    designation: "Travel Blogger",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    quote: "Our Maldives honeymoon was a dream come true. GreenHopper's service was exceptional from start to finish.",
    name: "Emily & David",
    designation: "Newlyweds",
    src: "https://images.unsplash.com/photo-1623091410901-00e2d268901f?auto=format&fit=crop&q=80"
  }
];

const AboutUs = () => {
  return (
    <div className="bg-[#111111]">
      {/* Company Overview Section */}
      <section id='about' className="py-20 bg-[#1F2937] border-t border-[#5B8424]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Your Gateway to Extraordinary Adventures</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Greenhopper Holidays is your gateway to unforgettable travel experiences across India. Founded by industry experts with over 20 years of expertise, we specialize in adventure, cultural, religious, natural, and wildlife tours. With offices in Cochin and Kottakal, we blend professional service with authentic Indian hospitality. Our 24/7 team handles every detail—travel planning, itinerary design, hotel bookings, ticketing, transport, and personalized holiday packages—so you can enjoy a seamless journey. Whether it’s trekking the Himalayas, relaxing on serene beaches, or exploring India’s spiritual and cultural richness, Greenhopper promises journeys that are personalized, professional, and truly memorable.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#5B8424] mb-2">10+</h3>
                  <p className="text-gray-400">Years of Experience</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#5B8424] mb-2">430+</h3>
                  <p className="text-gray-400">Happy Travelers</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#5B8424] mb-2">100%</h3>
                  <p className="text-gray-400">Satisfaction Rate</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#5B8424] mb-2">24/7</h3>
                  <p className="text-gray-400">Support Available</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=80" 
                alt="Travel Experience" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#5B8424] text-white p-6 rounded-lg">
                <p className="text-lg font-semibold">Trusted by thousands of travelers worldwide</p>
              </div>
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

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-[#1F2937] border-t border-[#5B8424]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">What Our Travelers Say</h2>
          <div className="flex justify-center">
            <CircularTestimonials
              testimonials={testimonials}
              autoplay={true}
              colors={{
                name: "#ffffff",
                designation: "#a3a3a3",
                testimony: "#e5e5e5",
                arrowBackground: "#5B8424",
                arrowForeground: "#ffffff",
                arrowHoverBackground: "#059669"
              }}
              fontSizes={{
                name: "24px",
                designation: "16px",
                quote: "18px"
              }}
            />
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default AboutUs
