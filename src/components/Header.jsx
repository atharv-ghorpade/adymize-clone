import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import admarkLogo from '../assets/admarklogo.png';
import mainLogo from '../assets/logo.png';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Clients', href: '#clients' },
  { name: 'Why Choose Us?', href: '#why-choose-us' },
  { name: 'Reviews', href: '#hear-from-them' },
  { name: 'Contact', href: '#contact' },
];

// Smooth scroll function with offset for fixed header
const smoothScrollTo = (elementId) => {
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

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Check if we're on home page
  const isHomePage = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 w-full z-30 overflow-hidden">
      <div className="w-full flex justify-center px-2 sm:px-4">
        <div className="mt-1 sm:mt-1 lg:mt-2 w-full max-w-[calc(100vw-16px)] sm:max-w-[calc(100vw-32px)] lg:max-w-5xl pointer-events-auto rounded-xl sm:rounded-2xl backdrop-blur-md shadow-lg overflow-hidden" style={{background: 'linear-gradient(90deg, #6D28D9, #2563EB)', opacity: '0.9'}}>
        {/* Desktop/Mobile Header */}
        <div className="flex items-center justify-between px-2 sm:px-3 lg:px-4 py-0">
          {/* Logo */}
          <button onClick={() => navigate('/')} className="flex items-center flex-shrink-0">
            <img 
              src={admarkLogo} 
              alt="Admark Logo" 
              className="w-20 h-10 sm:w-24 sm:h-14 lg:w-28 lg:h-16 object-contain"
            />
          </button>

          {/* Desktop Nav Links - Hidden on mobile */}
          <div className="hidden lg:flex flex-1 justify-center items-center mx-4">
            <div className="flex space-x-4 xl:space-x-6">
              {navLinks.map(link => (
                <button
                  key={link.name}
                  onClick={() => {
                    if (isHomePage) {
                      smoothScrollTo(link.href.replace('#', ''));
                    } else {
                      navigate('/' + link.href);
                    }
                  }}
                  className="text-sm xl:text-base text-gray-100 hover:text-white font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button - Hidden on mobile */}
          <button
            onClick={() => {
              if (isHomePage) {
                smoothScrollTo('contact');
              } else {
                navigate('/#contact');
              }
            }}
            className="hidden lg:block bg-white text-purple-700 px-3 xl:px-4 py-2 xl:py-2.5 rounded-xl font-semibold shadow hover:bg-gray-50 transition-all duration-200 text-xs xl:text-sm whitespace-nowrap flex-shrink-0 border border-white/20"
          >
            Chat Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 flex-shrink-0"
            aria-label="Toggle mobile menu"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center items-center">
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-5 sm:w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-5 sm:w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-5 sm:w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu - Dropdown */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-3 sm:px-4 py-2 border-t border-white/20">
            {navLinks.map(link => (
              <button
                key={link.name}
                onClick={() => {
                  if (isHomePage) {
                    smoothScrollTo(link.href.replace('#', ''));
                  } else {
                    navigate('/' + link.href);
                  }
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left py-2.5 sm:py-3 text-gray-100 hover:text-white font-medium transition-colors duration-200 border-b border-white/20 last:border-b-0 text-sm sm:text-base"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => {
                if (isHomePage) {
                  smoothScrollTo('contact');
                } else {
                  navigate('/#contact');
                }
                setIsMobileMenuOpen(false);
              }}
              className="block w-full mt-3 sm:mt-4 mb-2 bg-white text-purple-700 px-4 py-2.5 sm:py-3 rounded-xl font-semibold text-center hover:bg-gray-50 transition-all duration-200 text-sm sm:text-base border border-white/20"
            >
              Chat Now
            </button>
          </div>
        </div>
        </div>
      </div>
    </header>
  );
}