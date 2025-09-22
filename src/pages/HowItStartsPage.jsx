import React from 'react';

const HowItStartsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-purple-50/30 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* White Container */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="p-6 sm:p-8 lg:p-12">
            
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 px-8 py-3 rounded-full mb-8">
                <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-wide">
                  ONBOARDING • ONBOARDING • ONBOARDING
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4 leading-tight">
                How it starts?
              </h1>
            </div>

            {/* Process Steps */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Left Side - Steps */}
              <div className="space-y-10">
                
                {/* Step 1 */}
                <div className="group">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-800">Plan Your Growth</h3>
                        {/* Mobile app icon */}
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"/>
                          </svg>
                        </div>
                      </div>
                      <p className="text-slate-600 text-lg leading-relaxed">
                        Dream big, strategize with us, and turn plans into profits.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="group">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-4">Handover the project</h3>
                      <p className="text-slate-600 text-lg leading-relaxed">
                        We're your project navigators, turning plans into reality. Smooth sailing guaranteed.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="group">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-4">Count the profit</h3>
                      <p className="text-slate-600 text-lg leading-relaxed">
                        Sit back, relax, and let the profits set sail. Your success story starts with us!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Enhanced Dashboard Mockup */}
              <div className="flex justify-center lg:justify-end">
                <div className="bg-gradient-to-br from-slate-50 to-purple-50/50 rounded-3xl shadow-2xl p-6 max-w-sm w-full border border-white/20">
                  
                  {/* Daily Payments Card */}
                  <div className="mb-8">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-slate-700 font-semibold text-lg">Daily Payments</span>
                        <button className="bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-200 shadow-lg">
                          Publish
                        </button>
                      </div>
                      <div className="h-3 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full"></div>
                    </div>
                  </div>

                  {/* Analytics Chart */}
                  <div>
                    {/* Chart Header */}
                    <div className="bg-slate-800 text-white px-4 py-3 rounded-2xl inline-block mb-6 shadow-lg">
                      <div className="text-lg font-bold">Avg: 3K</div>
                      <div className="text-sm text-slate-300">Daily avg 1k</div>
                    </div>
                    
                    {/* Enhanced Purple Bar Chart */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                      <div className="flex items-end justify-center space-x-3 h-40 mb-6">
                        {[
                          { height: 35, value: 28 },
                          { height: 55, value: 42 },
                          { height: 45, value: 35 },
                          { height: 85, value: 67 },
                          { height: 75, value: 58 },
                          { height: 100, value: 82 },
                          { height: 65, value: 51 }
                        ].map((bar, index) => (
                          <div key={index} className="flex flex-col items-center group">
                            <div 
                              className="w-8 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-lg transition-all duration-300 group-hover:from-purple-600 group-hover:to-purple-500 shadow-sm"
                              style={{ height: `${bar.height}%` }}
                            ></div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Days of the week */}
                      <div className="flex justify-center space-x-3">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                          <div key={index} className="text-xs text-slate-500 font-medium w-8 text-center">
                            {day}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Growth Indicator */}
                    <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-xl flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-green-800">+78% Growth</div>
                        <div className="text-xs text-green-600">Compared to last month</div>
                      </div>
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