import React from 'react';
import instagramLogo from '../assets/instagram.png';
import linkedinLogo from '../assets/linkedin.png';
import whatsappLogo from '../assets/whatsapp.png';

// Smooth scroll function for navigation
const smoothScrollTo = (elementId) => {
  if (elementId === 'home') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    return;
  }
  
  const element = document.getElementById(elementId);
  if (element) {
    const headerOffset = 80; // Account for fixed header height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-blue-600 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center items-center gap-1 text-sm sm:text-base">
            <button 
              onClick={() => smoothScrollTo('home')}
              className="text-white hover:text-gray-200 transition-colors duration-300 px-3 py-1 rounded font-medium"
            >
              Home
            </button>
            <span className="text-gray-200">|</span>
            <button 
              onClick={() => smoothScrollTo('about')}
              className="text-white hover:text-gray-200 transition-colors duration-300 px-3 py-1 rounded font-medium"
            >
              About
            </button>
            <span className="text-gray-200">|</span>
            <button 
              onClick={() => smoothScrollTo('services')}
              className="text-white hover:text-gray-200 transition-colors duration-300 px-3 py-1 rounded font-medium"
            >
              Services
            </button>
            <span className="text-gray-200">|</span>
            <button 
              onClick={() => smoothScrollTo('blog')}
              className="text-white hover:text-gray-200 transition-colors duration-300 px-3 py-1 rounded font-medium"
            >
              Blog
            </button>
            <span className="text-gray-200">|</span>
            <button 
              onClick={() => smoothScrollTo('contact')}
              className="text-white hover:text-gray-200 transition-colors duration-300 px-3 py-1 rounded font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Social Media Links */}
          <div className="flex justify-center gap-4">
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
            >
              <img src={whatsappLogo} alt="WhatsApp" className="w-5 h-5 object-contain" />
            </a>
            <a 
              href="https://instagram.com/adymize" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
            >
              <img src={instagramLogo} alt="Instagram" className="w-5 h-5 object-contain" />
            </a>
            <a 
              href="https://linkedin.com/company/adymize" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
            >
              <img src={linkedinLogo} alt="LinkedIn" className="w-5 h-5 object-contain" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-white text-sm text-center font-medium">
            © 2025 Adymize. All rights reserved.
          </div>
          
        </div>
      </div>
    </footer>
  );
}