import React, { useState, useEffect } from 'react'

const API_BASE_URL = import.meta.env.VITE_API_URL

const BookingForm = ({ formData, onSubmit, onChange, onSuccess }) => {
  const [destinations, setDestinations] = useState([]);
  const [nationalities, setNationalities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/bookings/destinations`);
        if (response.ok) {
          const data = await response.json();
          setDestinations(data);
        } else {
        }
      } catch (error) {
      }
    };

    const fetchNationalities = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,demonyms');
        
        if (response.ok) {
          const data = await response.json();
          const nationalityList = data.map(country => ({
            name: country.name.common,
            demonym: country.demonyms?.eng?.m || country.name.common
          })).sort((a, b) => a.demonym.localeCompare(b.demonym));
          setNationalities(nationalityList);
        } else {
          throw new Error(`HTTP ${response.status}`);
        }
      } catch (error) {
        // Fallback to common nationalities if API fails
        setNationalities([
          { name: 'United States', demonym: 'American' },
          { name: 'United Kingdom', demonym: 'British' },
          { name: 'Canada', demonym: 'Canadian' },
          { name: 'Australia', demonym: 'Australian' },
          { name: 'Germany', demonym: 'German' },
          { name: 'France', demonym: 'French' },
          { name: 'Japan', demonym: 'Japanese' },
          { name: 'China', demonym: 'Chinese' },
          { name: 'India', demonym: 'Indian' },
          { name: 'Brazil', demonym: 'Brazilian' },
          { name: 'Italy', demonym: 'Italian' },
          { name: 'Spain', demonym: 'Spanish' },
          { name: 'Netherlands', demonym: 'Dutch' },
          { name: 'Sweden', demonym: 'Swedish' },
          { name: 'Norway', demonym: 'Norwegian' },
          { name: 'Denmark', demonym: 'Danish' },
          { name: 'Finland', demonym: 'Finnish' },
          { name: 'Switzerland', demonym: 'Swiss' },
          { name: 'Austria', demonym: 'Austrian' },
          { name: 'Belgium', demonym: 'Belgian' },
          { name: 'Portugal', demonym: 'Portuguese' },
          { name: 'Greece', demonym: 'Greek' },
          { name: 'Turkey', demonym: 'Turkish' },
          { name: 'Russia', demonym: 'Russian' },
          { name: 'Poland', demonym: 'Polish' },
          { name: 'Czech Republic', demonym: 'Czech' },
          { name: 'Hungary', demonym: 'Hungarian' },
          { name: 'Romania', demonym: 'Romanian' },
          { name: 'Bulgaria', demonym: 'Bulgarian' },
          { name: 'Croatia', demonym: 'Croatian' },
          { name: 'Serbia', demonym: 'Serbian' },
          { name: 'Slovenia', demonym: 'Slovenian' },
          { name: 'Slovakia', demonym: 'Slovak' },
          { name: 'Estonia', demonym: 'Estonian' },
          { name: 'Latvia', demonym: 'Latvian' },
          { name: 'Lithuania', demonym: 'Lithuanian' },
          { name: 'Ireland', demonym: 'Irish' },
          { name: 'Iceland', demonym: 'Icelandic' },
          { name: 'Luxembourg', demonym: 'Luxembourgish' },
          { name: 'Malta', demonym: 'Maltese' },
          { name: 'Cyprus', demonym: 'Cypriot' },
          { name: 'South Korea', demonym: 'South Korean' },
          { name: 'Thailand', demonym: 'Thai' },
          { name: 'Singapore', demonym: 'Singaporean' },
          { name: 'Malaysia', demonym: 'Malaysian' },
          { name: 'Indonesia', demonym: 'Indonesian' },
          { name: 'Philippines', demonym: 'Filipino' },
          { name: 'Vietnam', demonym: 'Vietnamese' },
          { name: 'New Zealand', demonym: 'New Zealander' },
          { name: 'South Africa', demonym: 'South African' },
          { name: 'Egypt', demonym: 'Egyptian' },
          { name: 'Morocco', demonym: 'Moroccan' },
          { name: 'Nigeria', demonym: 'Nigerian' },
          { name: 'Kenya', demonym: 'Kenyan' },
          { name: 'Ghana', demonym: 'Ghanaian' },
          { name: 'Ethiopia', demonym: 'Ethiopian' },
          { name: 'Tanzania', demonym: 'Tanzanian' },
          { name: 'Uganda', demonym: 'Ugandan' },
          { name: 'Rwanda', demonym: 'Rwandan' },
          { name: 'Senegal', demonym: 'Senegalese' },
          { name: 'Ivory Coast', demonym: 'Ivorian' },
          { name: 'Cameroon', demonym: 'Cameroonian' },
          { name: 'Algeria', demonym: 'Algerian' },
          { name: 'Tunisia', demonym: 'Tunisian' },
          { name: 'Libya', demonym: 'Libyan' },
          { name: 'Sudan', demonym: 'Sudanese' },
          { name: 'Chad', demonym: 'Chadian' },
          { name: 'Niger', demonym: 'Nigerien' },
          { name: 'Mali', demonym: 'Malian' },
          { name: 'Burkina Faso', demonym: 'Burkinabé' },
          { name: 'Guinea', demonym: 'Guinean' },
          { name: 'Sierra Leone', demonym: 'Sierra Leonean' },
          { name: 'Liberia', demonym: 'Liberian' },
          { name: 'Gambia', demonym: 'Gambian' },
          { name: 'Guinea-Bissau', demonym: 'Guinea-Bissauan' },
          { name: 'Cape Verde', demonym: 'Cape Verdean' },
          { name: 'São Tomé and Príncipe', demonym: 'São Toméan' },
          { name: 'Equatorial Guinea', demonym: 'Equatorial Guinean' },
          { name: 'Gabon', demonym: 'Gabonese' },
          { name: 'Republic of the Congo', demonym: 'Congolese' },
          { name: 'Democratic Republic of the Congo', demonym: 'Congolese' },
          { name: 'Central African Republic', demonym: 'Central African' },
          { name: 'Angola', demonym: 'Angolan' },
          { name: 'Zambia', demonym: 'Zambian' },
          { name: 'Zimbabwe', demonym: 'Zimbabwean' },
          { name: 'Botswana', demonym: 'Botswanan' },
          { name: 'Namibia', demonym: 'Namibian' },
          { name: 'Lesotho', demonym: 'Basotho' },
          { name: 'Swaziland', demonym: 'Swazi' },
          { name: 'Madagascar', demonym: 'Malagasy' },
          { name: 'Mauritius', demonym: 'Mauritian' },
          { name: 'Seychelles', demonym: 'Seychellois' },
          { name: 'Comoros', demonym: 'Comorian' },
          { name: 'Djibouti', demonym: 'Djiboutian' },
          { name: 'Somalia', demonym: 'Somali' },
          { name: 'Eritrea', demonym: 'Eritrean' },
          { name: 'Burundi', demonym: 'Burundian' },
          { name: 'Malawi', demonym: 'Malawian' },
          { name: 'Mozambique', demonym: 'Mozambican' },
          { name: 'Mauritania', demonym: 'Mauritanian' },
          { name: 'Benin', demonym: 'Beninese' },
          { name: 'Togo', demonym: 'Togolese' },
          { name: 'Argentina', demonym: 'Argentine' },
          { name: 'Chile', demonym: 'Chilean' },
          { name: 'Peru', demonym: 'Peruvian' },
          { name: 'Colombia', demonym: 'Colombian' },
          { name: 'Venezuela', demonym: 'Venezuelan' },
          { name: 'Ecuador', demonym: 'Ecuadorian' },
          { name: 'Bolivia', demonym: 'Bolivian' },
          { name: 'Paraguay', demonym: 'Paraguayan' },
          { name: 'Uruguay', demonym: 'Uruguayan' },
          { name: 'Guyana', demonym: 'Guyanese' },
          { name: 'Suriname', demonym: 'Surinamese' },
          { name: 'French Guiana', demonym: 'French Guianese' },
          { name: 'Mexico', demonym: 'Mexican' },
          { name: 'Guatemala', demonym: 'Guatemalan' },
          { name: 'Belize', demonym: 'Belizean' },
          { name: 'El Salvador', demonym: 'Salvadoran' },
          { name: 'Honduras', demonym: 'Honduran' },
          { name: 'Nicaragua', demonym: 'Nicaraguan' },
          { name: 'Costa Rica', demonym: 'Costa Rican' },
          { name: 'Panama', demonym: 'Panamanian' },
          { name: 'Cuba', demonym: 'Cuban' },
          { name: 'Jamaica', demonym: 'Jamaican' },
          { name: 'Haiti', demonym: 'Haitian' },
          { name: 'Dominican Republic', demonym: 'Dominican' },
          { name: 'Puerto Rico', demonym: 'Puerto Rican' },
          { name: 'Trinidad and Tobago', demonym: 'Trinidadian' },
          { name: 'Barbados', demonym: 'Barbadian' },
          { name: 'Saint Lucia', demonym: 'Saint Lucian' },
          { name: 'Saint Vincent and the Grenadines', demonym: 'Vincentian' },
          { name: 'Grenada', demonym: 'Grenadian' },
          { name: 'Antigua and Barbuda', demonym: 'Antiguan' },
          { name: 'Saint Kitts and Nevis', demonym: 'Kittitian' },
          { name: 'Dominica', demonym: 'Dominican' },
          { name: 'Bahamas', demonym: 'Bahamian' },
          { name: 'Belarus', demonym: 'Belarusian' },
          { name: 'Ukraine', demonym: 'Ukrainian' },
          { name: 'Moldova', demonym: 'Moldovan' },
          { name: 'Georgia', demonym: 'Georgian' },
          { name: 'Armenia', demonym: 'Armenian' },
          { name: 'Azerbaijan', demonym: 'Azerbaijani' },
          { name: 'Kazakhstan', demonym: 'Kazakhstani' },
          { name: 'Uzbekistan', demonym: 'Uzbekistani' },
          { name: 'Kyrgyzstan', demonym: 'Kyrgyzstani' },
          { name: 'Tajikistan', demonym: 'Tajikistani' },
          { name: 'Turkmenistan', demonym: 'Turkmen' },
          { name: 'Afghanistan', demonym: 'Afghan' },
          { name: 'Pakistan', demonym: 'Pakistani' },
          { name: 'Bangladesh', demonym: 'Bangladeshi' },
          { name: 'Sri Lanka', demonym: 'Sri Lankan' },
          { name: 'Nepal', demonym: 'Nepalese' },
          { name: 'Bhutan', demonym: 'Bhutanese' },
          { name: 'Maldives', demonym: 'Maldivian' },
          { name: 'Myanmar', demonym: 'Burmese' },
          { name: 'Laos', demonym: 'Lao' },
          { name: 'Cambodia', demonym: 'Cambodian' },
          { name: 'Brunei', demonym: 'Bruneian' },
          { name: 'East Timor', demonym: 'Timorese' },
          { name: 'Papua New Guinea', demonym: 'Papua New Guinean' },
          { name: 'Fiji', demonym: 'Fijian' },
          { name: 'Solomon Islands', demonym: 'Solomon Islander' },
          { name: 'Vanuatu', demonym: 'Vanuatuan' },
          { name: 'Samoa', demonym: 'Samoan' },
          { name: 'Tonga', demonym: 'Tongan' },
          { name: 'Kiribati', demonym: 'I-Kiribati' },
          { name: 'Tuvalu', demonym: 'Tuvaluan' },
          { name: 'Nauru', demonym: 'Nauruan' },
          { name: 'Palau', demonym: 'Palauan' },
          { name: 'Marshall Islands', demonym: 'Marshallese' },
          { name: 'Micronesia', demonym: 'Micronesian' },
          { name: 'Israel', demonym: 'Israeli' },
          { name: 'Palestine', demonym: 'Palestinian' },
          { name: 'Jordan', demonym: 'Jordanian' },
          { name: 'Lebanon', demonym: 'Lebanese' },
          { name: 'Syria', demonym: 'Syrian' },
          { name: 'Iraq', demonym: 'Iraqi' },
          { name: 'Iran', demonym: 'Iranian' },
          { name: 'Kuwait', demonym: 'Kuwaiti' },
          { name: 'Saudi Arabia', demonym: 'Saudi' },
          { name: 'United Arab Emirates', demonym: 'Emirati' },
          { name: 'Qatar', demonym: 'Qatari' },
          { name: 'Bahrain', demonym: 'Bahraini' },
          { name: 'Oman', demonym: 'Omani' },
          { name: 'Yemen', demonym: 'Yemeni' },
          { name: 'Mongolia', demonym: 'Mongolian' },
          { name: 'North Korea', demonym: 'North Korean' },
          { name: 'Taiwan', demonym: 'Taiwanese' },
          { name: 'Hong Kong', demonym: 'Hong Konger' },
          { name: 'Macau', demonym: 'Macanese' }
        ]);
      }
    };

    const fetchData = async () => {
      await Promise.all([fetchDestinations(), fetchNationalities()]);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleBookingSuccess = (booking) => {
    setBookingData(booking);
    setShowSuccessModal(true);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setBookingData(null);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const API_BASE_URL = import.meta.env.VITE_API_URL;
      const res = await fetch(`${API_BASE_URL}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          nationality: formData.nationality,
          destination: formData.destination,
          preferredDate: formData.preferredDate,
          numberOfDays: formData.numberOfDays,
          additionalNotes: formData.additionalNotes
        })
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Failed to submit request');

      // Show success modal with booking data
      handleBookingSuccess(data.booking);
      
      // Call the parent's onSuccess callback to reset form
      if (onSuccess) {
        onSuccess();
      }
      
    } catch (err) {
      // Show error message
      const banner = document.createElement('div');
      banner.className = 'fixed top-4 left-1/2 -translate-x-1/2 bg-red-700 text-white px-6 py-3 rounded-lg shadow-lg border border-red-500/50 z-50';
      banner.textContent = err.message;
      document.body.appendChild(banner);
      setTimeout(() => banner.remove(), 3000);
    }
  };

  return (
    <>
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(30px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes checkmark {
          0% { 
            stroke-dasharray: 0 24; 
            stroke-dashoffset: 24; 
          }
          100% { 
            stroke-dasharray: 24 24; 
            stroke-dashoffset: 0; 
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }
        
        .animate-checkmark {
          animation: checkmark 0.6s ease-out 0.3s forwards;
          stroke-dasharray: 0 24;
          stroke-dashoffset: 24;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
      
    <section id="booking" className="py-20 w-full bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Quick Booking</h2>
        <div className="max-w-2xl mx-auto bg-[#1F2937] p-8 rounded-lg border border-[#5B8424]/20">
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label className="block text-white mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name || ''}
                onChange={onChange}
                required
                className="w-full px-4 py-2 bg-[#111111] border border-[#1F2937] rounded-lg focus:outline-none focus:border-[#5B8424] text-white"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email || ''}
                onChange={onChange}
                required
                className="w-full px-4 py-2 bg-[#111111] border border-[#1F2937] rounded-lg focus:outline-none focus:border-[#5B8424] text-white"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Nationality</label>
              <select
                name="nationality"
                value={formData.nationality || ''}
                onChange={onChange}
                required
                className="w-full px-4 py-2 bg-[#111111] border border-[#1F2937] rounded-lg focus:outline-none focus:border-[#5B8424] text-white"
              >
                <option value="">Select your nationality</option>
                {loading ? (
                  <option disabled>Loading nationalities...</option>
                ) : nationalities.length > 0 ? (
                  nationalities.map((nationality) => (
                    <option key={nationality.name} value={nationality.demonym}>
                      {nationality.demonym}
                    </option>
                  ))
                ) : (
                  <option disabled>No nationalities available</option>
                )}
              </select>
            </div>
            <div>
              <label className="block text-white mb-2">Destination</label>
              <select
                name="destination"
                value={formData.destination || ''}
                onChange={onChange}
                required
                className="w-full px-4 py-2 bg-[#111111] border border-[#1F2937] rounded-lg focus:outline-none focus:border-[#5B8424] text-white"
              >
                <option value="">Select a destination</option>
                {loading ? (
                  <option disabled>Loading destinations...</option>
                ) : (
                  destinations.map((dest) => (
                    <option key={dest._id} value={dest.destinationName}>
                      {dest.destinationName}, {dest.country}
                    </option>
                  ))
                )}
              </select>
            </div>
            <div>
              <label className="block text-white mb-2">Preferred Date</label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate || ''}
                onChange={onChange}
                required
                className="w-full px-4 py-2 bg-[#111111] border border-[#1F2937] rounded-lg focus:outline-none focus:border-[#5B8424] text-white"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Number of Days</label>
              <input
                type="number"
                name="numberOfDays"
                value={formData.numberOfDays || ''}
                onChange={onChange}
                required
                min="1"
                max="365"
                placeholder="Enter number of days"
                className="w-full px-4 py-2 bg-[#111111] border border-[#1F2937] rounded-lg focus:outline-none focus:border-[#5B8424] text-white"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Additional Notes</label>
              <textarea
                name="additionalNotes"
                value={formData.additionalNotes || ''}
                onChange={onChange}
                rows="4"
                className="w-full px-4 py-2 bg-[#111111] border border-[#1F2937] rounded-lg focus:outline-none focus:border-[#5B8424] text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#5B8424] text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Submit Booking Request
            </button>
          </form>
        </div>
      </div>
      
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-gradient-to-br from-[#1F2937] to-[#111111] border border-[#5B8424]/30 rounded-2xl max-w-md w-full mx-4 shadow-2xl animate-slideUp">
            {/* Success Icon with Animation */}
            <div className="flex flex-col items-center p-8 text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                    <svg className="w-8 h-8 text-white animate-checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#5B8424] rounded-full flex items-center justify-center animate-ping">
                  <div className="w-4 h-4 bg-[#5B8424] rounded-full"></div>
                </div>
              </div>
              
              {/* Success Message */}
              <h3 className="text-2xl font-bold text-white mb-2 animate-fadeInUp">
                Booking Submitted Successfully!
              </h3>
              <p className="text-gray-300 mb-6 animate-fadeInUp animation-delay-200">
                Thank you for choosing GreenHopper Holidays. We'll get back to you soon with your travel details.
              </p>
              
              {/* Booking Details */}
              {bookingData && (
                <div className="bg-[#0f1310] border border-[#5B8424]/20 rounded-xl p-4 w-full mb-6 animate-fadeInUp animation-delay-400">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Booking ID:</span>
                      <span className="text-white font-mono">{bookingData.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Destination:</span>
                      <span className="text-white">{bookingData.destination}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white">{bookingData.numberOfDays} day{bookingData.numberOfDays !== 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Status:</span>
                      <span className="text-yellow-400 font-medium">Pending Review</span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Action Buttons */}
              <div className="flex gap-3 w-full animate-fadeInUp animation-delay-600">
                <button
                  onClick={closeSuccessModal}
                  className="flex-1 bg-[#5B8424] text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Continue
                </button>
                <button
                  onClick={() => {
                    closeSuccessModal();
                    // Scroll to top of page
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex-1 bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <hr className='mt-5 border border-[#5B8424]/20'/>
    </section>
    </>
  )
}

export default BookingForm
