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

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
  {/* Always render hero to avoid empty screen during routing issues */}
  <AdymizeHero />
  <ServicesPage />
  <AdymizeServiceCards />
  {/*There is client page here*/ }
  <HowItStartsPage />
  <WhatMakesUsUnique />
  <HearFromThem />
  <NeedHelpFAQ />
        <Routes>
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;