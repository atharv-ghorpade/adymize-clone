import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const testimonials = [
  {
    name: 'Amol Kokate',
    title: 'Founder, Green Vision Optical',
    quote: 'Hum aapki social media aur digital marketing services se kaafi khush hain. Aapki team ne hamari online presence improve karne mein bahut help ki. Ab zyada log ham tak reach kar rahe hain. Thank you for your great support!',
    avatar: 'AK'
  },
  {
    name: 'Dr. Puja',
    title: 'Cosmetologist and Dermatologist',
    quote: 'I am really happy with the services from AdmarkTech. The team is very professional, responsive, and helped me grow my business digitally. Highly recommended!',
    avatar: 'DP'
  },
  {
    name: 'Nanda Holistic Healing Center',
    title: 'Healing and Therapy Center',
    quote: 'Amchya startup sathi AD Mark Tech ni uttam strategies ani marketing services dilya. Content development pasun social media marketing ani startup strategies paryant pratyek goshtimule amchya business la changli pragati jhali.',
    avatar: 'NH'
  }
];

const TestimonialCarousel = () => {
  const [active, setActive] = useState(0);
  const cardRefs = useRef([]);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  const radius = 200; // Radius of the circle

  // Calculate position for each testimonial in the circle
  const getCircularPosition = (index, total, activeIndex) => {
    const angle = (index - activeIndex) * (360 / total) * (Math.PI / 180);
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;
    const scale = index === activeIndex ? 1 : 0.7;
    const opacity = index === activeIndex ? 1 : 0.6;
    
    return { x, z, scale, opacity, angle };
  };

  useEffect(() => {
    // Animate all cards to their new positions
    testimonials.forEach((_, idx) => {
      if (cardRefs.current[idx]) {
        const position = getCircularPosition(idx, testimonials.length, active);
        
        gsap.to(cardRefs.current[idx], {
          x: position.x,
          z: position.z,
          scale: position.scale,
          opacity: position.opacity,
          duration: 0.8,
          ease: 'power3.out',
          rotationY: -position.angle * (180 / Math.PI) * 0.3, // Slight 3D rotation
        });
      }
    });
  }, [active]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="relative py-24 px-10 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-16 text-gray-900">What Our Customers Say About Us</h2>
        
        {/* Circular Testimonials Container */}
        <div 
          ref={containerRef}
          className="relative h-96 mx-auto"
          style={{ 
            perspective: '1000px',
            perspectiveOrigin: '50% 50%'
          }}
        >
          {testimonials.map((testimonial, idx) => {
            const position = getCircularPosition(idx, testimonials.length, active);
            return (
              <div
                key={idx}
                ref={el => (cardRefs.current[idx] = el)}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{
                  transformStyle: 'preserve-3d',
                  zIndex: idx === active ? 20 : 10,
                }}
                onClick={() => setActive(idx)}
              >
                <div className={`bg-white rounded-2xl shadow-lg p-6 border border-gray-100 transition-all duration-500 w-80 ${
                  idx === active ? 'shadow-2xl ring-2 ring-indigo-200' : 'shadow-md hover:shadow-lg'
                }`}>
                  {/* Avatar */}
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                      idx === active 
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600' 
                        : 'bg-gradient-to-r from-gray-400 to-gray-500'
                    }`}>
                      {testimonial.avatar}
                    </div>
                  </div>
                  
                  {/* Quote */}
                  <p className={`text-gray-700 mb-4 ${
                    idx === active ? 'text-base font-medium' : 'text-sm'
                  }`}>
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Name and Title */}
                  <div className="text-center">
                    <div className={`font-semibold text-indigo-600 ${
                      idx === active ? 'text-lg' : 'text-base'
                    }`}>
                      {testimonial.name}
                    </div>
                    <div className={`text-gray-500 ${
                      idx === active ? 'text-sm' : 'text-xs'
                    }`}>
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform ${
                active === idx 
                  ? 'bg-indigo-500 scale-125 shadow-lg' 
                  : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;