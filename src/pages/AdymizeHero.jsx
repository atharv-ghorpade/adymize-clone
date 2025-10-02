import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import facebookLogo from '../assets/facebook-logo.png';
import googleLogo from '../assets/google-logo.png';

const AdymizeHero = () => {
  const heroRef = useRef(null);
  const facebookLogoRef = useRef(null);
  const googleLogoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero content animation (no ScrollTrigger for hero)
      gsap.fromTo(heroRef.current.children,
        {
          y: 50,
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.2
        }
      );

      // Logo animations (no ScrollTrigger)
      gsap.fromTo([facebookLogoRef.current, googleLogoRef.current],
        {
          scale: 0,
          rotation: 180,
          opacity: 0
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "back.out(1.7)",
          delay: 1
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-tr from-cyan-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/20 via-purple-100/20 to-cyan-100/20 rounded-full blur-3xl"></div>
      </div>
      {/* Hero Section */}
      <main className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
          <div ref={heroRef} className="text-center relative">
            {/* Main Headline */}
            <div className="mb-6 sm:mb-8 lg:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-relaxed px-2">
                <span className="block text-slate-800 mb-2 sm:mb-3">Creative Thinking,</span>
                <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent relative pb-4">
                  Strategic Action, Real Results.
                  {/* Underline decoration */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-80 sm:w-96 md:w-[28rem] lg:w-[32rem] xl:w-[36rem] h-1">
                    <svg viewBox="0 0 300 10" className="w-full h-full">
                      <path
                        d="M5 5 Q150 0 295 5"
                        stroke="url(#gradient)"
                        strokeWidth="3"
                        fill="none"
                        className="opacity-70"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="50%" stopColor="#2563eb" />
                          <stop offset="100%" stopColor="#0891b2" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  {/* Sparkle icon for emphasis */}
                  <div className="absolute -top-2 -right-6 sm:-right-10 w-6 h-6 sm:w-8 sm:h-8 hidden sm:block">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-yellow-400" fill="currentColor">
                      <path d="M12 1L14.5 8.5L22 11L14.5 13.5L12 21L9.5 13.5L2 11L9.5 8.5L12 1Z"/>
                    </svg>
                  </div>
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed px-2">
                We build lasting partnerships by fusing creativity, technology, and strategy — ensuring your
                business doesn't just exist online, but thrives. Our proven strategies have generated 
                <span className="font-bold text-green-600"> ₹5+ Crores in revenue </span> 
                for <span className="font-bold text-green-600"> 500+ brands</span> worldwide.
              </p>
            </div>

            {/* Statistics */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 lg:mb-12 shadow-lg border border-white/20 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-2">4+</div>
                  <div className="text-xs sm:text-sm lg:text-base text-slate-600 font-medium">Years of Excellence</div>
                </div>
                <div className="text-center border-t sm:border-t-0 sm:border-l sm:border-r border-slate-200 pt-4 sm:pt-0">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-2">31+</div>
                  <div className="text-xs sm:text-sm lg:text-base text-slate-600 font-medium">Active Clinets</div>
                </div>
                <div className="text-center border-t sm:border-t-0 border-slate-200 pt-4 sm:pt-0">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-2">240+</div>
                  <div className="text-xs sm:text-sm lg:text-base text-slate-600 font-medium">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8 sm:mb-12">
              <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
                <div className="flex -space-x-1">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm font-medium text-slate-700">500+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2 bg-yellow-50 px-4 py-2 rounded-full">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium text-slate-700">4.9/5 Rating</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="space-y-3 sm:space-y-4 px-4">
              <button className="group bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-xl text-base sm:text-lg lg:text-xl font-bold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform hover:scale-105 relative overflow-hidden w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Book Your Free Strategy Call</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <p className="text-xs sm:text-sm text-slate-500 mx-auto leading-relaxed text-center whitespace-nowrap">
                🔒 No commitment required • 💡 Get actionable insights • ⚡ 30-minute session
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Partners Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white/60 backdrop-blur-sm border-t border-white/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-slate-700 text-base sm:text-lg lg:text-xl mb-2 font-medium px-2">
              Trusted & Certified By Industry Leaders
            </p>
            <p className="text-slate-500 text-xs sm:text-sm px-2">
              Our expertise is validated by the world's top platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Meta Business Partner */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-slate-100">
                  <img 
                    ref={facebookLogoRef}
                    src={facebookLogo} 
                    alt="Meta/Facebook Logo" 
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Meta</div>
                  <div className="text-sm text-slate-600 font-medium">Business Partner</div>
                  <div className="mt-1 px-2 py-1 bg-blue-50 rounded-full">
                    <span className="text-xs text-blue-600 font-semibold">VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Partner */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-slate-100">
                  <img 
                    ref={googleLogoRef}
                    src={googleLogo} 
                    alt="Google Logo" 
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800 group-hover:text-red-600 transition-colors">Google</div>
                  <div className="text-sm text-slate-600 font-medium">Partner</div>
                  <div className="mt-1 px-2 py-1 bg-red-50 rounded-full">
                    <span className="text-xs text-red-600 font-semibold">PREMIER</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Trust Indicators */}
          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdymizeHero;