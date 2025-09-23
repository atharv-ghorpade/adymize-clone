import React from 'react';
import { Minus, Check } from 'lucide-react';
import Footer from '../components/Footer';

export default function WhatMakesUsUnique() {
  return (
    <div id="reviews" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* White Container */}
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          {/* Special Badge */}
          <div className="text-center mb-6">
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide">
              SPECIAL • SPECIAL • SPECIAL
            </div>
          </div>
          
          {/* Main Title */}
          <div className="text-center mb-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent leading-tight">
              What makes us unique?
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="text-center mb-12">
            <p className="text-lg text-gray-500 font-medium">
              Advmize V/S Others
            </p>
          </div>
          
          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-8 items-start">
            {/* Others Column */}
            <div className="text-left">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-8 pb-3 border-b-2 border-gray-200">
                OTHERS
              </div>
              <ul className="space-y-6">
                <li className="flex items-center text-base font-medium">
                  <Minus className="w-5 h-5 text-gray-400 mr-4 flex-shrink-0" />
                  <span className="text-gray-400">Longer turnaround time</span>
                </li>
                <li className="flex items-center text-base font-medium">
                  <Minus className="w-5 h-5 text-gray-400 mr-4 flex-shrink-0" />
                  <span className="text-gray-400">Mediocre methods</span>
                </li>
                <li className="flex items-center text-base font-medium">
                  <Minus className="w-5 h-5 text-gray-400 mr-4 flex-shrink-0" />
                  <span className="text-gray-400">Lack of timely reporting</span>
                </li>
                <li className="flex items-center text-base font-medium">
                  <Minus className="w-5 h-5 text-gray-400 mr-4 flex-shrink-0" />
                  <span className="text-gray-400">No prompt answers</span>
                </li>
              </ul>
            </div>
            
            {/* Advmize Column */}
            <div className="text-left">
              <div className="mb-8">
                <span className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                  ADVMIZE
                </span>
              </div>
              <ul className="space-y-6">
                <li className="flex items-center text-base font-medium">
                  <Check className="w-5 h-5 text-purple-600 mr-4 flex-shrink-0" />
                  <span className="text-gray-700">Faster and quick responses</span>
                </li>
                <li className="flex items-center text-base font-medium">
                  <Check className="w-5 h-5 text-purple-600 mr-4 flex-shrink-0" />
                  <span className="text-gray-700">Ethical Approach</span>
                </li>
                <li className="flex items-center text-base font-medium">
                  <Check className="w-5 h-5 text-purple-600 mr-4 flex-shrink-0" />
                  <span className="text-gray-700">Accurate Reporting</span>
                </li>
                <li className="flex items-center text-base font-medium">
                  <Check className="w-5 h-5 text-purple-600 mr-4 flex-shrink-0" />
                  <span className="text-gray-700">Precise Resolutions</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center">
            <div className="inline-block bg-gray-50 border border-gray-300 rounded-md px-5 py-3 mt-8">
              <span className="text-gray-500 text-sm">
                Still have a question?{' '}
                <a 
                  href="#" 
                  className="text-purple-600 font-semibold hover:underline"
                >
                  Chat with our experts
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}