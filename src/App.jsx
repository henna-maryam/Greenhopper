import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import KeralaPage from './pages/KeralaPage';
import MalaysiaPage from './pages/MalaysiaPage';
import SriLankaPage from './pages/SriLankaPage';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kerala" element={<KeralaPage />} />
        <Route path="/malaysia" element={<MalaysiaPage />} />
        <Route path="/srilanka" element={<SriLankaPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
