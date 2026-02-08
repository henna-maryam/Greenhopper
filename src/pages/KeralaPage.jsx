import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Kerala from '../components/Kerala';

const KeralaPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <Kerala />
      <Footer />
    </div>
  );
};

export default KeralaPage;
