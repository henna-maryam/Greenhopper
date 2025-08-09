import React from 'react'
import { CircularTestimonials } from '../components/ui/circular-testimonials'

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
                At GreenHopper, we believe in creating more than just trips - we craft experiences that last a lifetime. 
                Founded with a passion for sustainable travel and authentic cultural experiences, we specialize in 
                curating unique journeys across South Asia's most breathtaking destinations.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#5B8424] mb-2">10+</h3>
                  <p className="text-gray-400">Years of Experience</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#5B8424] mb-2">5000+</h3>
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
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[#1F2937] rounded-lg border border-[#5B8424]/20">
              <div className="w-16 h-16 bg-[#5B8424]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Sustainable Travel</h3>
              <p className="text-gray-400">
                We're committed to eco-friendly practices and supporting local communities in all our destinations.
              </p>
            </div>
            <div className="text-center p-6 bg-[#1F2937] rounded-lg border border-[#5B8424]/20">
              <div className="w-16 h-16 bg-[#5B8424]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Personal Touch</h3>
              <p className="text-gray-400">
                Every journey is tailored to your preferences, ensuring a unique and memorable experience.
              </p>
            </div>
            <div className="text-center p-6 bg-[#1F2937] rounded-lg border border-[#5B8424]/20">
              <div className="w-16 h-16 bg-[#5B8424]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Excellence</h3>
              <p className="text-gray-400">
                We maintain the highest standards in service, safety, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#1F2937] border-t border-[#5B8424]/20">
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
      </section>
    </div>
  )
}

export default AboutUs
