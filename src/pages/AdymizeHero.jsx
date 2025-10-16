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
      <main className="relative z-10 flex items-center justify-center min-h-screen pointer-events-none">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div ref={heroRef} className="space-y-16">
            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light leading-tight text-white drop-shadow-lg" style={{ fontFamily: "'Inter', 'Roboto', sans-serif" }}>
                <span className="block mb-2" style={{ fontFamily: "'Roboto', sans-serif" }}>Tech solutions for</span>
                <span className="block font-medium bg-gradient-to-r py-4 from-white to-gray-200 bg-clip-text text-transparent" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>
                  modern businesses.
                </span>
              </h1>
            </div>

            {/* Statistics */}
            <div
              ref={statsRef}
              className="rounded-2xl max-w-4xl mx-auto pointer-events-auto"
             
            >
              <div className="rounded-xl relative py-4 md:py-6 bg-gradient-to-b from-white via-gray-50 to-white">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto px-4 md:px-6">
    
    {/* Years of Excellence */}
    <div className="text-center">
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-2 tracking-tight">
        {yearsCount}<span className="text-indigo-500">+</span>
      </div>
      <div className="text-xs sm:text-sm uppercase tracking-widest text-gray-600 font-medium">
        Years of Excellence
      </div>
    </div>

    {/* Active Clients */}
    <div className="text-center border-t md:border-t-0 md:border-x border-gray-200 py-6 md:py-0">
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-2 tracking-tight">
        {clientsCount}<span className="text-indigo-500">+</span>
      </div>
      <div className="text-xs sm:text-sm uppercase tracking-widest text-gray-600 font-medium">
        Active Clients
      </div>
    </div>

    {/* Projects Completed */}
    <div className="text-center">
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-2 tracking-tight">
        {projectsCount}<span className="text-gray-900">+</span>
      </div>
      <div className="text-xs sm:text-sm uppercase tracking-widest text-gray-600 font-medium">
        Projects Completed
      </div>
    </div>
  </div>

  {/* Optional subtle glow background */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-indigo-50 via-transparent to-purple-50 blur-2xl opacity-40"></div>
</div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdymizeHero;