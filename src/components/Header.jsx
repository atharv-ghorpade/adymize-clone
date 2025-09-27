import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Clients', href: '/clients' },
  { name: 'Why Adymize?', href: '/why-adymize' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'FAQs', href: '/faqs' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-30 overflow-hidden">
      <div className="w-full flex justify-center px-2 sm:px-4">
        <div className="mt-1 sm:mt-2 lg:mt-6 w-full max-w-[calc(100vw-16px)] sm:max-w-[calc(100vw-32px)] lg:max-w-5xl pointer-events-auto rounded-xl sm:rounded-2xl bg-white/70 backdrop-blur-md shadow-lg overflow-hidden">
        {/* Desktop/Mobile Header */}
        <div className="flex items-center justify-between px-3 sm:px-4 lg:px-6 py-2 sm:py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center -rotate-12">
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 bg-white rounded-sm"></div>
            </div>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 tracking-tight">Adymize</span>
          </Link>

          {/* Desktop Nav Links - Hidden on mobile */}
          <div className="hidden lg:flex flex-1 justify-center items-center mx-4">
            <div className="flex space-x-4 xl:space-x-6">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm xl:text-base text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button - Hidden on mobile */}
          <Link
            to="/faqs"
            className="hidden lg:block bg-gray-900 text-white px-3 xl:px-4 py-2 xl:py-2.5 rounded-xl font-semibold shadow hover:bg-gray-800 transition-all duration-200 text-xs xl:text-sm whitespace-nowrap flex-shrink-0"
          >
            Chat Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex-shrink-0"
            aria-label="Toggle mobile menu"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-5 sm:w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-5 sm:w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-5 sm:w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu - Dropdown */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-3 sm:px-4 py-2 border-t border-gray-200/50">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.href}
                className="block py-2.5 sm:py-3 text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 border-b border-gray-100 last:border-b-0 text-sm sm:text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/faqs"
              className="block mt-3 sm:mt-4 mb-2 bg-gray-900 text-white px-4 py-2.5 sm:py-3 rounded-xl font-semibold text-center hover:bg-gray-800 transition-all duration-200 text-sm sm:text-base"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Chat Now
            </Link>
          </div>
        </div>
        </div>
      </div>
    </header>
  );
}