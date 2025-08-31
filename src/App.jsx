import React from 'react';
import Navbar from './components/Navbar'
import TopIntro from './components/TopIntro'
import Header from './components/Header'
import Packages from './components/Packages'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import sl from './assets/sl.png'
import kl from './assets/kl.png'
import ml from './assets/ml.png'

function App() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    nationality: '',
    destination: 'Sri Lanka',
    date: '',
    notes: ''
  })

  const packages = [
    {
      title: 'Sri Lanka',
      description: 'Experience the pearl of Indian Ocean with ancient temples, pristine beaches, and exotic wildlife.',
      image: sl,
      price: '$999'
    },
    {
      title: 'Kerala',
      description: 'Discover God\'s own country with backwaters, tea plantations, and ayurvedic traditions.',
      image: kl,
      price: '$899'
    },
    {
      title: 'Malaysia',
      description: 'Escape to paradise with overwater bungalows, crystal clear waters, and white sand beaches.',
      image: ml,
      price: '$1499'
    }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    const API_BASE_URL = import.meta.env.VITE_API_URL
    try {
      const res = await fetch(`${API_BASE_URL}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          destination: formData.destination,
          preferredDate: formData.date,
          additionalNotes: formData.notes
        })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.message || 'Failed to submit request')

      // show success toast
      const banner = document.createElement('div')
      banner.className = 'fixed top-4 left-1/2 -translate-x-1/2 bg-[#5B8424] text-white px-6 py-3 rounded-lg shadow-lg border border-[#5B8424]/50 z-50'
      banner.textContent = 'Booking request submitted successfully!'
      document.body.appendChild(banner)
      setTimeout(() => banner.remove(), 3000)

      setFormData({
        name: '',
        email: '',
        destination: 'Sri Lanka',
        date: '',
        notes: ''
      })
    } catch (err) {
      const banner = document.createElement('div')
      banner.className = 'fixed top-4 left-1/2 -translate-x-1/2 bg-red-700 text-white px-6 py-3 rounded-lg shadow-lg border border-red-500/50 z-50'
      banner.textContent = err.message
      document.body.appendChild(banner)
      setTimeout(() => banner.remove(), 3000)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <TopIntro packages={packages} />
      <Header />
      <div id="packages">
        <Packages 
          packages={packages} 
          onBookNow={(destination) => {
            document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })
            setFormData(prev => ({ ...prev, destination }))
          }} 
        />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="booking">
        <BookingForm 
          formData={formData}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App
