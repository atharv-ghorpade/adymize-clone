import React, { useEffect, useRef, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import GradientBlinds from '../components/GradientBlinds';

const AdymizeHero = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  
  // Counter states
  const [yearsCount, setYearsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  
  // Counter animation function
  const animateCounter = (start, end, duration, setValue) => {
    const startTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(start + (end - start) * progress);
      setValue(current);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  // Loop counter animation
  const startCounterLoop = () => {
    // Reset counters
    setYearsCount(0);
    setClientsCount(0);
    setProjectsCount(0);
    
    // Start animations
    setTimeout(() => animateCounter(0, 4, 2000, setYearsCount), 100);
    setTimeout(() => animateCounter(0, 31, 2000, setClientsCount), 300);
    setTimeout(() => animateCounter(0, 240, 2000, setProjectsCount), 500);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero content animation
      gsap.fromTo(heroRef.current.children,
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.3,
          ease: "power2.out",
          delay: 0.5
        }
      );

      // Start initial counter animation
      setTimeout(startCounterLoop, 1500);
    }, heroRef);

    // Set up counter loop interval
    const interval = setInterval(() => {
      startCounterLoop();
    }, 6000);

    return () => {
      ctx.revert();
      clearInterval(interval);
    };
  }, []);

  // Memoize GradientBlinds to prevent re-creation on counter changes
  const gradientBlinds = useMemo(() => (
    <GradientBlinds
      gradientColors={['#6366f1', '#8b5cf6', '#ec4899']}
      angle={45}
      noise={0.1}
      blindCount={20}
      mouseDampening={0.2}
      spotlightRadius={0.8}
      spotlightOpacity={0.3}
      mixBlendMode="multiply"
    />
  ), []); // Empty dependency array means this will never re-create

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* GradientBlinds background */}
      <div className="absolute inset-0 z-0">
        {gradientBlinds}
      </div>

      {/* Hero Content */}
      <main className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div ref={heroRef} className="space-y-16">
            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light leading-tight text-white drop-shadow-lg">
                <span className="block mb-2">Creative Thinking,</span>
                <span className="block font-medium bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  Strategic Action, Real Results.
                </span>
              </h1>
            </div>

            {/* Statistics */}
            <div
              ref={statsRef}
              className=" backdrop-blur-sm rounded-2xl p-12 shadow-xl border border-white/20 max-w-4xl mx-auto bg-white/0"
              style={{
                background: 'rgba(255, 241, 241, 0.42)', // subtle glass effect, but still lets pointer events through
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="text-5xl lg:text-6xl font-light text-gray-800 mb-3">
                    {yearsCount}+
                  </div>
                  <div className="text-sm uppercase tracking-wider text-gray-600 font-medium">Years of Excellence</div>
                </div>
                <div className="text-center border-t md:border-t-0 md:border-l md:border-r border-gray-200 pt-12 md:pt-0">
                  <div className="text-5xl lg:text-6xl font-light text-gray-800 mb-3">
                    {clientsCount}+
                  </div>
                  <div className="text-sm uppercase tracking-wider text-gray-600 font-medium">Active Clients</div>
                </div>
                <div className="text-center border-t md:border-t-0 border-gray-200 pt-12 md:pt-0">
                  <div className="text-5xl lg:text-6xl font-light text-indigo-600 mb-3">
                    {projectsCount}+
                  </div>
                  <div className="text-sm uppercase tracking-wider text-gray-600 font-medium">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdymizeHero;