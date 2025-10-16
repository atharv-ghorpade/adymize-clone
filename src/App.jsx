import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AdymizeHero from './pages/AdymizeHero';
import AboutUs from './pages/AboutUs';
import ServicesPage from './pages/ServicePage';
import AdymizeServiceCards from './pages/AdymizeServiceCards';
import HowItStartsPage from './pages/HowItStartsPage';
import Blog from './pages/Blog';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import Header from './components/Header';
import WhatMakesUsUnique from './pages/WhatMakesUsUnique';
import HearFromThem from './pages/HearFromThem';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import TestimonialCarousel from './components/TestimonialCarousel';
import { 
  BrandingDesign, 
  WebDesignDevelopment, 
  MobileAppDevelopment, 
  DigitalMarketing 
} from './pages/services';

// Create a Home component that renders all sections
function Home() {
  return (
    <>
      <AdymizeHero />
      <TestimonialCarousel />
      <AboutUs />
      <ServicesPage />
      <AdymizeServiceCards />
      <HowItStartsPage />
      <WhatMakesUsUnique />
      <HearFromThem />
      <Blog />
      <ContactUs />
      <Footer />
    </>
  );
}

// Layout component for service pages
function ServiceLayout({ children }) {
  return (
    <div className="App overflow-x-hidden">
      {children}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App overflow-x-hidden">
        <Routes>
          {/* Home route */}
          <Route path="/" element={
            <>
              <Header />
              <Home />
            </>
          } />
          
          {/* Service routes */}
          <Route path="/services/branding-design" element={
            <ServiceLayout>
              <BrandingDesign />
            </ServiceLayout>
          } />
          
          <Route path="/services/web-design-development" element={
            <ServiceLayout>
              <WebDesignDevelopment />
            </ServiceLayout>
          } />
          
          <Route path="/services/mobile-app-development" element={
            <ServiceLayout>
              <MobileAppDevelopment />
            </ServiceLayout>
          } />
          
          <Route path="/services/digital-marketing" element={
            <ServiceLayout>
              <DigitalMarketing />
            </ServiceLayout>
          } />
          
          {/* Blog routes */}
          <Route path="/blog" element={
            <ServiceLayout>
              <BlogList />
            </ServiceLayout>
          } />
          
          <Route path="/blog/:id" element={
            <ServiceLayout>
              <BlogPost />
            </ServiceLayout>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;