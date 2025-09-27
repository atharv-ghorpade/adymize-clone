import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdymizeHero from './pages/AdymizeHero';
import ServicesPage from './pages/ServicePage';
import AdymizeServiceCards from './pages/AdymizeServiceCards';
import HowItStartsPage from './pages/HowItStartsPage';
import Header from './components/Header';
import WhatMakesUsUnique from './pages/WhatMakesUsUnique';
import HearFromThem from './pages/HearFromThem';
import NeedHelpFAQ from './pages/NeedHelpFAQ';
import Footer from './components/Footer';

// Create a Home component that renders all sections
function Home() {
  return (
    <>
      <AdymizeHero />
      <ServicesPage />
      <AdymizeServiceCards />
      <HowItStartsPage />
      <WhatMakesUsUnique />
      <HearFromThem />
      <NeedHelpFAQ />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/clients" element={<AdymizeServiceCards />} />
          <Route path="/why-adymize" element={<HowItStartsPage />} />
          <Route path="/reviews" element={<WhatMakesUsUnique />} />
          <Route path="/faqs" element={<NeedHelpFAQ />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;