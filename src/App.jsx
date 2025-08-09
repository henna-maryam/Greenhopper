import React from 'react';
import Header from './components/Navbar'
import Hero from './components/Header'
import Packages from './components/Packages'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'

function App() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    destination: 'Sri Lanka',
    date: '',
    notes: ''
  })

  const packages = [
    {
      title: 'Sri Lanka',
      description: 'Experience the pearl of Indian Ocean with ancient temples, pristine beaches, and exotic wildlife.',
      image: 'https://images.unsplash.com/photo-1588258524141-df48a8c1cf3c?auto=format&fit=crop&q=80',
      price: '$999'
    },
    {
      title: 'Kerala',
      description: 'Discover God\'s own country with backwaters, tea plantations, and ayurvedic traditions.',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80',
      price: '$899'
    },
    {
      title: 'Maldives',
      description: 'Escape to paradise with overwater bungalows, crystal clear waters, and white sand beaches.',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80',
      price: '$1499'
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your booking request! Our team will contact you soon.')
    setFormData({
      name: '',
      email: '',
      destination: 'Sri Lanka',
      date: '',
      notes: ''
    })
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
      <Header />
      <Hero />
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
