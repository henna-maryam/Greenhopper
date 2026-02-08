import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Malaysia from '../components/Malaysia';

const MalaysiaPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <Malaysia />
      <Footer />
    </div>
  );
};

export default MalaysiaPage;
