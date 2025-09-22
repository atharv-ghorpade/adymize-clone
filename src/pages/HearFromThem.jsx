import React from 'react';

export default function HearFromThem() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 p-8 flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-lg p-12 max-w-5xl w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
            <span>REVIEWS • REVIEWS • REVIEWS</span>
          </div>
          
          {/* Title with Avatar */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">👨‍💼</span>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-indigo-400">
              Hear from them
            </h2>
          </div>
        </div>
        
        {/* Testimonial Cards */}
        <div className="grid grid-cols-2 gap-8 mb-16">
          {/* Left Testimonial */}
          <div className="relative">
            <div className="bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl p-1">
              <div className="bg-white rounded-2xl p-6 h-full flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-200 flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-white font-bold">👨</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-blue-50 rounded-lg p-4 relative">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      "It was much effortlessly Done to transform a major event in the location"
                    </p>
                    <div className="absolute -bottom-2 left-4 w-4 h-4 bg-blue-50 transform rotate-45"></div>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-2">advmize</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Testimonial */}
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl p-1">
              <div className="bg-white rounded-2xl p-6 h-full flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-200 flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-white font-bold">👨‍💼</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-blue-50 rounded-lg p-4 relative">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      "Had the best guidance with right touch ups with"
                    </p>
                    <div className="absolute -bottom-2 left-4 w-4 h-4 bg-blue-50 transform rotate-45"></div>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-2">advmize</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-200 my-12"></div>
        
        {/* Company Logos Grid */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-5 gap-6 items-center justify-items-center">
            {/* Row 1 */}
            <div className="bg-white rounded-lg p-4 shadow-sm w-28 h-20 flex items-center justify-center">
              <div className="text-green-600 font-bold text-base">myntra</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm w-28 h-20 flex items-center justify-center">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">☕</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm w-28 h-20 flex items-center justify-center">
              <div className="text-red-500 font-semibold text-sm text-center">
                <span>Techo</span>
                <div className="text-blue-600 text-xs">Geniuses</div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm w-28 h-20 flex items-center justify-center">
              <div className="text-gray-800 font-bold text-xs text-center">
                DIGITAL<br/>MARKETER
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm w-28 h-20 flex items-center justify-center">
              <div className="bg-blue-500 text-white px-3 py-1 rounded text-sm font-bold">
                Analytic
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="bg-white rounded-lg p-4 shadow-sm w-28 h-20 flex items-center justify-center">
              <div className="text-orange-500 font-semibold text-sm flex items-center gap-1">
                <span className="text-lg">🌈</span>
                <span>adv</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm w-28 h-20 flex items-center justify-center">
              <div className="text-green-600 font-bold text-sm text-center">
                GROW
                <div className="text-xs font-normal">PARTNER</div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm w-28 h-20 flex items-center justify-center">
              <div className="w-8 h-8 bg-black rounded-full"></div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm w-28 h-20 flex items-center justify-center">
              <div className="text-gray-600 font-semibold text-sm">SASTRA</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm w-28 h-20 flex items-center justify-center">
              <div className="bg-black text-white px-3 py-1 text-sm font-bold">
                PIXELS
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}