import React from 'react';
import AdymizeHero from './pages/AdymizeHero';
import AboutUs from './pages/AboutUs';
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
      <AboutUs />
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
    <div className="App overflow-x-hidden">
      <Header />
      <Home />
    </div>
  );
}

export default App;