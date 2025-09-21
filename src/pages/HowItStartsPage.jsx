import React from 'react';

const HowItStartsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* White Container */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 sm:p-12">
            
            {/* Header Section */}
            <div className="text-center mb-16">
              <div className="bg-purple-200 px-6 py-2 rounded-full inline-block mb-8">
                <span className="text-sm font-bold text-purple-800 uppercase tracking-wide">
                  ONBOARDING • ONBOARDING • ONBOARDING
                </span>
              </div>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
                How it starts?
              </h1>
            </div>

            {/* Process Steps */}
            <div className="flex items-start gap-16">
              
              {/* Left Side - Steps */}
              <div className="flex-1 space-y-12">
                
                {/* Step 1 */}
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Plan Your Growth</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Dream big, strategize with us, and turn plans into profits.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Handover the project</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      We're your project navigators, turning plans into reality. Smooth sailing guaranteed.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Count the profit</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Sit back, relax, and let the profits set sail. Your success story starts with us!
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Dashboard Mockup */}
              <div className="flex-1">
                <div className="bg-gray-50 rounded-2xl shadow-lg p-8 max-w-md mx-auto">
                  
                  {/* Daily Payments Card */}
                  <div className="mb-8">
                    <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-700 font-medium">Daily Payments</span>
                        <button className="bg-gray-800 text-white px-3 py-1 rounded text-sm font-medium">
                          Publish
                        </button>
                      </div>
                      <div className="h-8 bg-gray-200 rounded"></div>
                    </div>
                  </div>

                  {/* Analytics Chart */}
                  <div>
                    <div className="bg-gray-800 text-white px-3 py-2 rounded-lg inline-block mb-4">
                      <span className="text-sm font-medium">Avg: 3K</span>
                      <div className="text-xs text-gray-300">Daily avg 1k</div>
                    </div>
                    
                    {/* Bar Chart */}
                    <div className="flex items-end justify-center space-x-2 h-32 mb-4">
                      {[40, 60, 80, 70, 90, 65].map((height, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div 
                            className="bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-sm w-8"
                            style={{ height: `${height}%` }}
                          ></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Chart Labels */}
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>28</span>
                      <span>30</span>
                      <span>32</span>
                      <span>40</span>
                      <span>45</span>
                      <span>50+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItStartsPage;