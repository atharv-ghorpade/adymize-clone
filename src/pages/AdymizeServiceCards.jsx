import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gif1 from '../assets/gif/1.mp4';
import gif2 from '../assets/gif/2.mp4';
import gif3 from '../assets/gif/3.mp4';
import gif4 from '../assets/gif/4.mp4';
import gif5 from '../assets/gif/5.mp4';
import gif6 from '../assets/gif/6.mp4';


gsap.registerPlugin(ScrollTrigger);

const AdymizeServiceCards = () => {
  const containerRef = useRef(null);
  
  // Individual refs for each section
  const section1Ref = useRef(null);
  const gif1Ref = useRef(null);
  const content1Ref = useRef(null);
  
  const section2Ref = useRef(null);
  const gif2Ref = useRef(null);
  const content2Ref = useRef(null);
  
  const section3Ref = useRef(null);
  const gif3Ref = useRef(null);
  const content3Ref = useRef(null);
  
  const section4Ref = useRef(null);
  const gif4Ref = useRef(null);
  const content4Ref = useRef(null);
  
  const section5Ref = useRef(null);
  const gif5Ref = useRef(null);
  const content5Ref = useRef(null);
  
  const section6Ref = useRef(null);
  const gif6Ref = useRef(null);
  const content6Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section 1 animations
      gsap.fromTo(gif1Ref.current,
        {
          x: -100,
          opacity: 0,
          scale: 0.8
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section1Ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(content1Ref.current,
        {
          x: 100,
          opacity: 0,
          scale: 0.9
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section1Ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Section 2 animations
      gsap.fromTo(content2Ref.current,
        {
          x: -100,
          opacity: 0,
          scale: 0.9
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section2Ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(gif2Ref.current,
        {
          x: 100,
          opacity: 0,
          scale: 0.8
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section2Ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Section 3 animations
      gsap.fromTo(gif3Ref.current,
        {
          x: -100,
          opacity: 0,
          scale: 0.8
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section3Ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(content3Ref.current,
        {
          x: 100,
          opacity: 0,
          scale: 0.9
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section3Ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Section 4 animations
      gsap.fromTo(content4Ref.current,
        {
          x: -100,
          opacity: 0,
          scale: 0.9
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section4Ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(gif4Ref.current,
        {
          x: 100,
          opacity: 0,
          scale: 0.8
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section4Ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Section 5 animations
      gsap.fromTo(gif5Ref.current,
        {
          x: -100,
          opacity: 0,
          scale: 0.8
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section5Ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(content5Ref.current,
        {
          x: 100,
          opacity: 0,
          scale: 0.9
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section5Ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Section 6 animations
      gsap.fromTo(content6Ref.current,
        {
          x: -100,
          opacity: 0,
          scale: 0.9
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section6Ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(gif6Ref.current,
        {
          x: 100,
          opacity: 0,
          scale: 0.8
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section6Ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} id="clients" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 overflow-x-hidden">
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
        
        {/* Strategic Marketing */}
        <div ref={section1Ref} className="group bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            
            {/* Left side - Video */}
            <div ref={gif1Ref} className="relative mockup-container order-2 lg:order-1">
              <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
                {/* Floating decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-200/50 to-pink-200/50 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-br from-blue-200/50 to-cyan-200/50 rounded-full blur-xl"></div>
                
                <div className="bg-white rounded-2xl p-2 relative z-10 shadow-lg">
                  <video 
                    className="w-full h-64 object-cover rounded-xl" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source src={gif1} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div ref={content1Ref} className="space-y-4 sm:space-y-6 content-container order-1 lg:order-2">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 px-4 sm:px-6 py-2 rounded-full">
                <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  ADS • ADS • ADS
                </span>
              </div>
              
              <h2 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
                Strategic Marketing
              </h2>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                Ready to give your brand the spotlight it deserves? Dive into our Paid Ads extravaganza and let your message shine in the digital universe!
              </p>
              
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="bg-white/80 backdrop-blur-sm border border-blue-200 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-blue-700 font-medium hover:bg-blue-50 transition-colors duration-200 text-sm">
                  Facebook Ads
                </span>
                <span className="bg-white/80 backdrop-blur-sm border border-green-200 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-green-700 font-medium hover:bg-green-50 transition-colors duration-200 text-sm">
                  Google Ads
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Eye-catchy Designs */}
        <div ref={section2Ref} className="group bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            
            {/* Left side - Content (reversed layout) */}
            <div ref={content2Ref} className="space-y-4 sm:space-y-6 lg:order-1 content-container">
              <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-purple-100 px-6 py-2 rounded-full">
                <span className="text-sm font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  DESIGN • DESIGN • DESIGN
                </span>
              </div>
              
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                Eye-catchy Designs
              </h2>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                We craft visuals that speak to your ideal customers. Ready for an extraordinary brand transformation?
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/80 backdrop-blur-sm border border-pink-200 px-5 py-2 rounded-full text-pink-700 font-medium hover:bg-pink-50 transition-colors duration-200">
                  Social Media
                </span>
                <span className="bg-white/80 backdrop-blur-sm border border-purple-200 px-5 py-2 rounded-full text-purple-700 font-medium hover:bg-purple-50 transition-colors duration-200">
                  Ads
                </span>
                <span className="bg-white/80 backdrop-blur-sm border border-blue-200 px-5 py-2 rounded-full text-blue-700 font-medium hover:bg-blue-50 transition-colors duration-200">
                  Videos
                </span>
              </div>
            </div>
            
            {/* Right side - Video (reversed layout) */}
            <div ref={gif2Ref} className="relative lg:order-2 mockup-container">
              <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-3xl p-8 relative overflow-hidden">
                {/* Floating decorative elements */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-pink-200/50 to-purple-200/50 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-br from-purple-200/50 to-blue-200/50 rounded-full blur-xl"></div>
                
                <div className="bg-white rounded-2xl p-2 relative z-10 shadow-lg">
                  <video 
                    className="w-full h-64 object-cover rounded-xl" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source src={gif2} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div ref={section3Ref} className="group bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            
            {/* Left side - Video */}
            <div ref={gif3Ref} className="relative mockup-container">
              <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-3xl p-8 relative overflow-hidden">
                {/* Floating decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-br from-purple-200/50 to-pink-200/50 rounded-full blur-xl"></div>
                
                <div className="bg-white rounded-2xl p-2 relative z-10 shadow-lg">
                  <video 
                    className="w-full h-64 object-cover rounded-xl" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source src={gif3} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div ref={content3Ref} className="space-y-6 content-container">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-2 rounded-full">
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SOCIAL • SOCIAL • SOCIAL
                </span>
              </div>
              
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                Social Media
              </h2>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                Ready to make your brand the talk of the social town? Dive into our Social Media Management expertise and let your brand resonate across digital platforms!
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/80 backdrop-blur-sm border border-blue-200 px-5 py-2 rounded-full text-blue-700 font-medium hover:bg-blue-50 transition-colors duration-200">
                  Facebook Ads
                </span>
                <span className="bg-white/80 backdrop-blur-sm border border-purple-200 px-5 py-2 rounded-full text-purple-700 font-medium hover:bg-purple-50 transition-colors duration-200">
                  Instagram Marketing
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Automation */}
        <div ref={section4Ref} className="group bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            
            {/* Left side - Content (reversed layout) */}
            <div ref={content4Ref} className="space-y-6 lg:order-1 content-container">
              <div className="inline-flex items-center bg-gradient-to-r from-cyan-100 to-blue-100 px-6 py-2 rounded-full">
                <span className="text-sm font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  AUTOMATE • AUTOMATE • AUTOMATE
                </span>
              </div>
              
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                Automation
              </h2>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                Automate the manual task, Save the time and energy, Only focus on delivering quality
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/80 backdrop-blur-sm border border-cyan-200 px-5 py-2 rounded-full text-cyan-700 font-medium hover:bg-cyan-50 transition-colors duration-200">
                  CRM
                </span>
                <span className="bg-white/80 backdrop-blur-sm border border-blue-200 px-5 py-2 rounded-full text-blue-700 font-medium hover:bg-blue-50 transition-colors duration-200">
                  Lead Gen
                </span>
                <span className="bg-white/80 backdrop-blur-sm border border-purple-200 px-5 py-2 rounded-full text-purple-700 font-medium hover:bg-purple-50 transition-colors duration-200">
                  Business Flows
                </span>
              </div>
            </div>
            
            {/* Right side - Video (reversed layout) */}
            <div ref={gif4Ref} className="relative lg:order-2 mockup-container">
              <div className="bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100 rounded-3xl p-8 relative overflow-hidden">
                {/* Floating decorative elements */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-cyan-200/50 to-blue-200/50 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-full blur-xl"></div>
                
                <div className="bg-white rounded-2xl p-2 relative z-10 shadow-lg">
                  <video 
                    className="w-full h-64 object-cover rounded-xl" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source src={gif4} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Web Development */}
        <div ref={section5Ref} className="group bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            
            {/* Left side - Video */}
            <div ref={gif5Ref} className="relative mockup-container">
              <div className="bg-gradient-to-br from-emerald-100 via-blue-100 to-purple-100 rounded-3xl p-8 relative overflow-hidden">
                {/* Floating decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-emerald-200/50 to-blue-200/50 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-full blur-xl"></div>
                
                <div className="bg-white rounded-2xl p-2 relative z-10 shadow-lg">
                  <video 
                    className="w-full h-64 object-cover rounded-xl" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source src={gif5} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div ref={content5Ref} className="space-y-6 content-container">
              <div className="inline-flex items-center bg-gradient-to-r from-emerald-100 to-blue-100 px-6 py-2 rounded-full">
                <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  WEB • WEB • WEB
                </span>
              </div>
              
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                Web Development
              </h2>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                From tech wizardry to seamless online experiences – enter the world of Technical Solutions. We transform digital hiccups into high-fives for your users.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/80 backdrop-blur-sm border border-emerald-200 px-5 py-2 rounded-full text-emerald-700 font-medium hover:bg-emerald-50 transition-colors duration-200">
                  Website Development
                </span>
                <span className="bg-white/80 backdrop-blur-sm border border-blue-200 px-5 py-2 rounded-full text-blue-700 font-medium hover:bg-blue-50 transition-colors duration-200">
                  Landing Pages
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Robust SEO */}
        <div ref={section6Ref} className="group bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            
            {/* Left side - Content (reversed layout) */}
            <div ref={content6Ref} className="space-y-6 lg:order-1 content-container">
              <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 px-6 py-2 rounded-full">
                <span className="text-sm font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  SEO • SEO • SEO
                </span>
              </div>
              
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent leading-tight">
                Robust SEO
              </h2>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                Elevate your online presence, automate workflows, and define digital brilliance with hassle-free SEO
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/80 backdrop-blur-sm border border-green-200 px-5 py-2 rounded-full text-green-700 font-medium hover:bg-green-50 transition-colors duration-200">
                  Keyword Research
                </span>
                <span className="bg-white/80 backdrop-blur-sm border border-emerald-200 px-5 py-2 rounded-full text-emerald-700 font-medium hover:bg-emerald-50 transition-colors duration-200">
                  Content Optimization
                </span>
                <span className="bg-white/80 backdrop-blur-sm border border-teal-200 px-5 py-2 rounded-full text-teal-700 font-medium hover:bg-teal-50 transition-colors duration-200">
                  Link Building
                </span>
              </div>
            </div>
            
            {/* Right side - Video (reversed layout) */}
            <div ref={gif6Ref} className="relative lg:order-2 mockup-container">
              <div className="bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 rounded-3xl p-8 relative overflow-hidden">
                {/* Floating decorative elements */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-green-200/50 to-emerald-200/50 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-br from-emerald-200/50 to-teal-200/50 rounded-full blur-xl"></div>
                
                <div className="bg-white rounded-2xl p-2 relative z-10 shadow-lg">
                  <video 
                    className="w-full h-64 object-cover rounded-xl" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source src={gif6} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdymizeServiceCards;