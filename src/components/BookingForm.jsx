import React, { useState, useEffect } from 'react'

const API_BASE_URL = import.meta.env.VITE_API_URL

const BookingForm = ({ formData, onSubmit, onChange }) => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        console.log('Fetching destinations from:', `${API_BASE_URL}/bookings/destinations`);
        const response = await fetch(`${API_BASE_URL}/bookings/destinations`);
        console.log('Response status:', response.status);
        if (response.ok) {
          const data = await response.json();
          console.log('Destinations data:', data);
          setDestinations(data);
        } else {
          console.error('Failed to fetch destinations, status:', response.status);
          const errorText = await response.text();
          console.error('Error response:', errorText);
        }
      } catch (error) {
        console.error('Error fetching destinations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  return (
    <section id="booking" className="py-20 w-full bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Quick Booking</h2>
        <div className="max-w-2xl mx-auto bg-[#1F2937] p-8 rounded-lg border border-[#5B8424]/20">
          <form onSubmit={onSubmit} className="space-y-6">
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
              <input
                type="text"
                name="nationality"
                value={formData.nationality || ''}
                onChange={onChange}
                required
                className="w-full px-4 py-2 bg-[#111111] border border-[#1F2937] rounded-lg focus:outline-none focus:border-[#5B8424] text-white"
              />
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
      <hr className='mt-5 border border-[#5B8424]/20'/>
    </section>
  )
}

export default BookingForm
