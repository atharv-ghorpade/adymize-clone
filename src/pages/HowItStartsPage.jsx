import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HowItStartsPage = () => {
  const headerRef = useRef(null);
  const stepsContainerRef = useRef(null);
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const dashboardRef = useRef(null);
  const dailyPaymentsRef = useRef(null);
  const analyticsRef = useRef(null);
  const chartBarsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current, 
        {
          opacity: 0,
          y: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Steps animations with stagger
      gsap.fromTo([step1Ref.current, step2Ref.current, step3Ref.current],
        {
          opacity: 0,
          x: -60,
          scale: 0.9
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: stepsContainerRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Dashboard container animation
      gsap.fromTo(dashboardRef.current,
        {
          opacity: 0,
          x: 60,
          rotation: 5,
          scale: 0.8
        },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: dashboardRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Daily payments card animation
      gsap.fromTo(dailyPaymentsRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 0.3,
          scrollTrigger: {
            trigger: dailyPaymentsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Analytics section animation
      gsap.fromTo(analyticsRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.5,
          scrollTrigger: {
            trigger: analyticsRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Chart bars animation with stagger
      gsap.fromTo(chartBarsRef.current,
        {
          scaleY: 0,
          opacity: 0,
          transformOrigin: "bottom"
        },
        {
          scaleY: 1,
          opacity: 1,
          duration: 0.6,
          ease: "bounce.out",
          stagger: 0.1,
          delay: 0.8,
          scrollTrigger: {
            trigger: analyticsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const addToChartBarsRef = (el) => {
    if (el && !chartBarsRef.current.includes(el)) {
      chartBarsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-purple-50/30 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="p-6 sm:p-8 lg:p-12">
            
            {/* Header Section */}
            <div ref={headerRef} className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 px-8 py-3 rounded-full mb-8">
                <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-wide">
                  ONBOARDING  ONBOARDING  ONBOARDING
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4 leading-tight">
                How it starts?
              </h1>
            </div>

            {/* Process Steps */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Left Side - Steps */}
              <div ref={stepsContainerRef} className="space-y-10">
                
                {/* Step 1 */}
                <div ref={step1Ref} className="group">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-4">Plan Your Growth</h3>
                      <p className="text-slate-600 text-lg leading-relaxed">
                        Dream big, strategize with us, and turn plans into profits.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div ref={step2Ref} className="group">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
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
                <div ref={step3Ref} className="group">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
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

              {/* Right Side - Dashboard Mockup */}
              <div className="flex justify-center lg:justify-end">
                <div ref={dashboardRef} className="bg-gradient-to-br from-slate-50 to-purple-50/50 rounded-3xl shadow-2xl p-6 max-w-sm w-full border border-white/20">
                  
                  {/* Daily Payments Card */}
                  <div ref={dailyPaymentsRef} className="mb-8">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-slate-700 font-semibold text-lg">Daily Payments</span>
                        <button className="bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-semibold">
                          Publish
                        </button>
                      </div>
                      <div className="h-3 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full"></div>
                    </div>
                  </div>

                  {/* Analytics Chart */}
                  <div ref={analyticsRef}>
                    <div className="bg-slate-800 text-white px-4 py-3 rounded-2xl inline-block mb-6 shadow-lg">
                      <div className="text-lg font-bold">Avg: 3K</div>
                      <div className="text-sm text-slate-300">Daily avg 1k</div>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                      <div className="flex items-end justify-center space-x-3 h-40 mb-6">
                        <div ref={addToChartBarsRef} className="w-8 h-8 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-lg"></div>
                        <div ref={addToChartBarsRef} className="w-8 h-16 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg"></div>
                        <div ref={addToChartBarsRef} className="w-8 h-24 bg-gradient-to-t from-purple-600 to-purple-500 rounded-t-lg"></div>
                        <div ref={addToChartBarsRef} className="w-8 h-12 bg-gradient-to-t from-blue-600 to-blue-500 rounded-t-lg"></div>
                        <div ref={addToChartBarsRef} className="w-8 h-20 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-lg"></div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-2xl font-bold text-slate-800 mb-2">Analytics Overview</div>
                        <div className="text-sm text-slate-500">Revenue Growth</div>
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
