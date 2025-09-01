import React from 'react';
import Navbar from './components/Navbar'
import TopIntro from './components/TopIntro'
import Header from './components/Header'
import Packages from './components/Packages'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import AnimatedSection from './components/AnimatedSection'
import StaggeredAnimation from './components/StaggeredAnimation'
import sl from './assets/srilanka.webp'
import kl from './assets/kerala.webp'
import ml from './assets/malaysia.webp'

function App() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    nationality: '',
    destination: '',
    preferredDate: '',
    additionalNotes: ''
  })

  const packages = [
    {
      title: 'Kerala',
      description: 'From tranquil houseboat cruises to vibrant cultural traditions, Kerala offers a perfect blend of relaxation, adventure, and timeless charm.',
      image: kl,
      price: '35000 INR /-'
    },
    {
      title: 'Sri Lanka',
      description: 'Experience the pearl of Indian Ocean with ancient temples, pristine beaches, and exotic wildlife.',
      image: sl,
      price: '53777 INR /-'
    },
    {
      title: 'Malaysia',
      description: 'From the iconic Petronas Towers to tranquil islands and vibrant street markets, Malaysia offers a perfect blend of nature, culture, and unforgettable experiences',
      image: ml,
      price: '54692 INR /-'
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
          nationality: formData.nationality,
          destination: formData.destination,
          preferredDate: formData.preferredDate,
          additionalNotes: formData.additionalNotes
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
        nationality: '',
        destination: '',
        preferredDate: '',
        additionalNotes: ''
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
      
      {/* TopIntro - Always visible, no animation needed */}
      <TopIntro packages={packages} />
      
      {/* Header - Fade up animation */}
      <AnimatedSection 
        animationType="fadeUp" 
        delay={0.2} 
        duration={1}
        yOffset={80}
      >
        <Header />
      </AnimatedSection>
      

      
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
              document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })
              setFormData(prev => ({ ...prev, destination }))
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
          <AboutUs />
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
            onSubmit={handleSubmit}
            onChange={handleChange}
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
  )
}

export default App
