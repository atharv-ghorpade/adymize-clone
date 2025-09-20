import React from 'react';
import { Minus, Check } from 'lucide-react';

export default function WhatMakesUsUnique() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-10 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-12 max-w-4xl w-full text-center">
        {/* Special Badge */}
        <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
          SPECIAL • SPECIAL • SPECIAL
        </div>
        
        {/* Main Title */}
        <h1 className="text-5xl font-bold text-indigo-400 mb-4 leading-tight">
          What makes us unique?
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg text-gray-500 font-medium mb-12">
          Advmize V/S Others
        </p>
        
        {/* Comparison Grid */}
        <div className="grid grid-cols-2 gap-16 mb-8 items-start">
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
  );
}