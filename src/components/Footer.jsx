import React from 'react';
import admarkLogo from '../assets/admarklogo.png';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-300 py-8 sm:py-10 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6">
          {/* Adymize Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img 
              src={admarkLogo} 
              alt="Admark Logo" 
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
            />
            <span className="text-xl sm:text-2xl font-bold text-gray-800">Adymize</span>
          </div>
          
          {/* Footer Content */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl space-y-4 sm:space-y-0">
            {/* Copyright and Privacy Policy */}
            <div className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
              © 2025 Adymize Private Limited | 
              <a 
                href="#" 
                className="text-blue-600 hover:underline ml-1"
              >
                Privacy Policy
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* LinkedIn */}
              <a 
                href="#" 
                className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a 
                href="#" 
                className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348 0-1.297 1.051-2.348 2.348-2.348 1.297 0 2.348 1.051 2.348 2.348 0 1.297-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348 0-1.297 1.051-2.348 2.348-2.348 1.297 0 2.348 1.051 2.348 2.348 0 1.297-1.051 2.348-2.348 2.348z"/>
                </svg>
              </a>
              
              {/* Twitter */}
              <a 
                href="#" 
                className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-400 rounded-md flex items-center justify-center hover:bg-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}