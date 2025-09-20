import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AdymizeHero from './pages/AdymizeHero';
import ServicesPage from './pages/ServicePage';
import AdymizeServiceCards from './pages/AdymizeServiceCards';
import HowItStartsPage from './pages/HowItStartsPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
  {/* Always render hero to avoid empty screen during routing issues */}
  <AdymizeHero />
  <AdymizeServiceCards />
  <ServicesPage />
  {/*There is client page here*/ }
  <HowItStartsPage />
        <Routes>
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;