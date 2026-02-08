import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Srilanka from '../components/Srilanka';

const SriLankaPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <Srilanka />
      <Footer />
    </div>
  );
};

export default SriLankaPage;
