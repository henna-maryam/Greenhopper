import React from 'react'
import { CircularTestimonials } from '../components/ui/circular-testimonials'
import { FaRoute, FaHotel, FaCar, FaUserTie, FaMapMarkedAlt, FaHeadset, FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa'
import badge from '../assets/badge-removebg-preview.png'
import Footer from './Footer';
import AnimatedSection from './AnimatedSection'


// const testimonials = [
//   {
//     quote: "GreenHopper made our Sri Lankan adventure unforgettable! The attention to detail and local expertise was outstanding.",
//     name: "Sarah Johnson",
//     designation: "Adventure Enthusiast",
//     src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
//   },
//   {
//     quote: "The Kerala backwaters tour was beyond our expectations. Every moment was perfectly planned and authentic.",
//     name: "Michael Chen",
//     designation: "Travel Blogger",
//     src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
//   },
//   {
//     quote: "Our Maldives honeymoon was a dream come true. GreenHopper's service was exceptional from start to finish.",
//     name: "Emily & David",
//     designation: "Newlyweds",
//     src: "https://images.unsplash.com/photo-1623091410901-00e2d268901f?auto=format&fit=crop&q=80"
//   }
// ];

const AboutUs = () => {
  return (
    <div id='about' className="bg-[#111111] text-white">
      {/* Hero Section */}
      <AnimatedSection animationType="fadeUp">
        <section className="py-20 bg-[#1F2937] border-t border-[#5B8424]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
              <div>
                <h2 className="text-4xl font-bold text-[#5B8424] mb-6">About Greenhopper Holidays</h2>
                <h3 className="text-2xl font-semibold mb-4 text-white">Changing The Horizons Of Travel & Hospitality</h3>
                <p className="text-gray-300 mb-6 text-lg text-justify">
                  Welcome to the enchanting world of destination management where genuine, customized holidays become reality. At Greenhopper Holidays, we believe that <span className="italic text-[#5B8424]">life is too small not to be happy, so we encourage everyone to <b>EXPLORE, CHERISH & TRAVEL YOUR DREAMS</b></span>.
                </p>
                <div className="grid grid-cols-3 gap-6 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#5B8424] mb-2">10+</h3>
                    <p className="text-gray-400">Years Expertise</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#5B8424] mb-2">5</h3>
                    <p className="text-gray-400">Years in Business</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#5B8424] mb-2">24/7</h3>
                    <p className="text-gray-400">Support</p>
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
      </AnimatedSection>

      {/* Our Story */}
      <AnimatedSection animationType="fadeUp" delay={0.1}>
        <section className="py-12 bg-[#111111] border-t border-[#5B8424]/10">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-3xl font-bold mb-4 text-[#5B8424]">Our Story</h3>
            <p className="text-gray-300 mb-4 text-lg text-justify">
              Within a short span of 5 years, Greenhopper Holidays has been pioneered by industry experts with more than 20 years of experience in diverse fields. We are all set to disrupt the conventional tourism industry with our sole vision of catering to the needs of every traveler, irrespective of the cause of their travel.
            </p>
            <p className="text-gray-300 mb-4 text-lg text-justify">
              Headquartered in <span className="italic">Cochin</span> (Queen of Arabian Sea), in <span className="italic">God's Own Country - Kerala</span>, with our corporate office strategically located in <span className="italic">Kottakkal</span> (Hub of Ayurveda) in North Kerala, we are positioned to service our esteemed guests anywhere in the Indian Subcontinent.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Philosophy */}
      <AnimatedSection animationType="fadeUp" delay={0.2}>
        <section className="py-12 bg-[#1F2937] border-t border-[#5B8424]/10">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-3xl font-bold mb-4 text-[#5B8424]">Our Philosophy</h3>
            <p className="text-gray-300 mb-4 text-lg text-justify">
              Our specialty lies in our commitment to authenticity – <span className="italic">we would not offer any accommodation, travel plan, or food to our esteemed clients which our experts would not have cherished themselves</span>. We blend professionalism with Indian culture, ensuring that every experience we curate meets our highest standards.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* What Makes Us Unique */}
      <AnimatedSection animationType="fadeUp" delay={0.3}>
        <section className="py-12 bg-[#111111] border-t border-[#5B8424]/10">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-3xl font-bold mb-4 text-[#5B8424]">What Makes Us Unique</h3>
            <ul className="list-disc pl-6 text-gray-300 mb-4 text-lg">
              <li className="mb-2"><b>Strategic Location Advantage:</b> Corporate office just 1 km from Kottakkal Aryavaidyasala, direct contacts with Ayurvedic companies and medical consultants, and prime access to Kerala's treasures.</li>
              <li className="mb-2"><b>Comprehensive Service Network:</b> 24x7 customer service, strong hotel associations, partnerships with hospitals, schools, airlines, and professional multilingual guide services.</li>
              <li className="mb-2"><b>Responsible Tourism Leadership:</b> Proud part of Kerala's Responsible Tourism initiative, awarded by UNWTO for excellence and innovation in sustainable tourism.</li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      {/* Expertise */}
      <AnimatedSection animationType="fadeUp" delay={0.4}>
        <section className="py-12 bg-[#1F2937] border-t border-[#5B8424]/10">
          <div className="max-w-5xl mx-auto px-4">
            <h3 className="text-3xl font-bold mb-4 text-[#5B8424]">Our Expertise</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">Cultural & Heritage Tours</h4>
                <ul className="list-disc pl-6 text-gray-300 mb-4">
                  <li>Authentic cultural experiences including Kathakali performances</li>
                  <li>Heritage site visits (Taj Mahal, Qutub Minar, etc.)</li>
                  <li>Immersive experiences in India's cultural tapestry</li>
                </ul>
                <h4 className="text-xl font-semibold mb-2 text-white">Medical & Wellness Tours</h4>
                <ul className="list-disc pl-6 text-gray-300 mb-4">
                  <li>Comprehensive Ayurvedic treatment packages</li>
                  <li>Access to renowned medical facilities</li>
                  <li>Rejuvenation and wellness programs</li>
                </ul>
                <h4 className="text-xl font-semibold mb-2 text-white">Adventure & Nature Tours</h4>
                <ul className="list-disc pl-6 text-gray-300 mb-4">
                  <li>Wildlife expeditions and nature exploration</li>
                  <li>Trekking and mountain adventures</li>
                  <li>Eco-friendly travel experiences</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">Spiritual Journeys</h4>
                <ul className="list-disc pl-6 text-gray-300 mb-4">
                  <li>Visits to renowned spiritual centers</li>
                  <li>Customized pilgrimage experiences</li>
                  <li>Meditation and wellness retreats</li>
                </ul>
                <h4 className="text-xl font-semibold mb-2 text-white">Recreational Holidays</h4>
                <ul className="list-disc pl-6 text-gray-300 mb-4">
                  <li>Beach holidays and backwater experiences</li>
                  <li>Hill station retreats and plantation visits</li>
                  <li>Family and leisure travel packages</li>
                </ul>
                <h4 className="text-xl font-semibold mb-2 text-white">Study & Educational Tours</h4>
                <ul className="list-disc pl-6 text-gray-300 mb-4">
                  <li>Educational programs for students and professionals</li>
                  <li>Cultural immersion experiences</li>
                  <li>Academic and research travel support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services Provided */}
      <AnimatedSection animationType="fadeUp" delay={0.5}>
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
      </AnimatedSection>

      {/* Destinations */}
      <AnimatedSection animationType="fadeUp" delay={0.6}>
        <section className="py-12 bg-[#1F2937] border-t border-[#5B8424]/10">
          <div className="max-w-5xl mx-auto px-4">
            <h3 className="text-3xl font-bold mb-4 text-[#5B8424]">Our Destinations</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">Kerala Specialization</h4>
                <ul className="list-disc pl-6 text-gray-300 mb-4">
                  <li>Munnar – Hill stations and tea plantations</li>
                  <li>Kumarakom – Backwater experiences and bird watching</li>
                  <li>Alappuzha – Venice of the East with boat races</li>
                  <li>Kovalam – World-class beaches</li>
                  <li>Fort Kochi – Historical heritage</li>
                  <li>Thekkady – Wildlife reserves</li>
                  <li>Wayanad – Adventure trails</li>
                  <li>Varkkala – Spiritual beaches</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">Beyond Kerala</h4>
                <ul className="list-disc pl-6 text-gray-300 mb-4">
                  <li>All-Indian destinations</li>
                  <li>International destinations</li>
                  <li>Sri Lanka – Specialized packages</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Vision & Commitment */}
      <AnimatedSection animationType="fadeUp" delay={0.7}>
        <section className="py-12 bg-[#111111] border-t border-[#5B8424]/10">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-3xl font-bold mb-4 text-[#5B8424]">Our Vision & Commitment</h3>
            <p className="text-gray-300 mb-4 text-lg text-justify">
              <b>Customer satisfaction is our sole objective</b>, helping us build a strong network with travelers from the farthest corners of the world. We believe this can only be achieved through sheer quality and dedication to our travelers' needs.
            </p>
            <p className="text-gray-300 mb-4 text-lg text-justify">
              Whether you're planning an individual family tour, organizing a business congregation, arranging school children's educational tours, or seeking medical tourism, <span className="italic">we at Greenhopper would be more than willing to manage your destination and plan according to every budgetary requirement</span>.
            </p>
            <p className="text-gray-300 mb-4 text-lg text-justify">
              We customize your holidays with the <b>fusion of Nature, Heritage, and Cultural tourism</b> while maintaining the ethos of sustainable development and Responsible tourism. Our packages are planned to suit even the most eccentrically wishful traveler, with quality being our obsessive concern.
            </p>
            <p className="text-[#5B8424] font-semibold italic mb-2">
              "The long wait for sincere & genuine customized holidays is over. Greenhopper Holidays offers you exactly the same."
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer (not animated) */}
      <Footer />
    </div>
  )
}

export default AboutUs
