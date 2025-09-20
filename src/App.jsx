import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AdymizeHero from './pages/AdymizeHero';
import ServicesPage from './pages/ServicePage';
import AdymizeServiceCards from './pages/AdymizeServiceCards';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* Always render hero to avoid empty screen during routing issues */}
        <AdymizeHero />
        <ServicesPage />
        <AdymizeServiceCards />
        <Routes>
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/" element={<AdymizeServiceCards />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;