import React from 'react'

const BookingForm = ({ formData, onSubmit, onChange }) => {
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
                value={formData.name}
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
                value={formData.email}
                onChange={onChange}
                required
                className="w-full px-4 py-2 bg-[#111111] border border-[#1F2937] rounded-lg focus:outline-none focus:border-[#5B8424] text-white"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Destination</label>
              <select
                name="destination"
                value={formData.destination}
                onChange={onChange}
                className="w-full px-4 py-2 bg-[#111111] border border-[#1F2937] rounded-lg focus:outline-none focus:border-[#5B8424] text-white"
              >
                <option>Sri Lanka</option>
                <option>Kerala</option>
                <option>Malaysia</option>
              </select>
            </div>
            <div>
              <label className="block text-white mb-2">Preferred Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={onChange}
                required
                className="w-full px-4 py-2 bg-[#111111] border border-[#1F2937] rounded-lg focus:outline-none focus:border-[#5B8424] text-white"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Additional Notes</label>
              <textarea
                name="notes"
                value={formData.notes}
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
