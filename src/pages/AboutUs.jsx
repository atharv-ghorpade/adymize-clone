import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const containerRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const gif1Ref = useRef(null);
  const gif2Ref = useRef(null);
  const content1Ref = useRef(null);
  const content2Ref = useRef(null);

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
      gsap.fromTo(gif2Ref.current,
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
            trigger: section2Ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(content2Ref.current,
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
            trigger: section2Ref.current,
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
    <div ref={containerRef} id="about" className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 py-8 sm:py-12 lg:py-16 overflow-x-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-32 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-32 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-purple-100/15 via-blue-100/15 to-purple-100/15 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <main className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          
          {/* Google & Meta Ads Section */}
          <section ref={section1Ref} className="mb-20 lg:mb-32">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl border border-white/20">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                {/* Left Side - GIF */}
                <div ref={gif1Ref} className="order-2 lg:order-1">
                  <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 shadow-lg">
                    <div className="aspect-square bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                      {/* Replace with your actual GIF */}
                      <div className="w-full h-full bg-white/20 rounded-xl flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">ADS GIF</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div ref={content1Ref} className="order-1 lg:order-2">
                  <div className="space-y-6">
                    <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 px-6 py-2 rounded-full">
                      <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-wide">
                        Digital Marketing
                      </span>
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                      <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 bg-clip-text text-transparent">
                        Google & Meta Ads
                      </span>
                    </h2>
                    
                    <p className="text-lg text-slate-600 leading-relaxed">
                      Maximize your ROI with our expert Google and Meta advertising campaigns. We create data-driven strategies 
                      that target the right audience at the right time, ensuring your marketing budget delivers exceptional results.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <p className="text-slate-600 font-medium">Advanced audience targeting and segmentation</p>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <p className="text-slate-600 font-medium">Real-time campaign optimization and monitoring</p>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <p className="text-slate-600 font-medium">Comprehensive analytics and performance reporting</p>
                      </div>
                    </div>
                    
                    <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Get Started Today
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Web Development Section */}
          <section ref={section2Ref}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl border border-white/20">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                {/* Left Side - GIF */}
                <div ref={gif2Ref}>
                  <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-lg">
                    <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      {/* Replace with your actual GIF */}
                      <div className="w-full h-full bg-white/20 rounded-xl flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">WEB DEV GIF</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div ref={content2Ref}>
                  <div className="space-y-6">
                    <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-2 rounded-full">
                      <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent uppercase tracking-wide">
                        Development
                      </span>
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                      <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                        Web Development
                      </span>
                    </h2>
                    
                    <p className="text-lg text-slate-600 leading-relaxed">
                      Transform your digital presence with cutting-edge web solutions. We build responsive, 
                      high-performance websites and applications that engage users and drive business growth.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <p className="text-slate-600 font-medium">Modern, responsive design for all devices</p>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <p className="text-slate-600 font-medium">Fast loading times and SEO optimization</p>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <p className="text-slate-600 font-medium">Custom functionality tailored to your needs</p>
                      </div>
                    </div>
                    
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      View Our Work
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;