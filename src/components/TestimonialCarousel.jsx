import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import nanda from '../assets/hearfromthem/10.webp';
import greenvision from '../assets/hearfromthem/9.webp';
import derma from '../assets/hearfromthem/7.webp';

const testimonials = [
  {
    name: 'Amol Kokate',
    title: 'Founder, Green Vision Optical',
    quote: 'Hum aapki social media aur digital marketing services se kaafi khush hain. Aapki team ne hamari online presence improve karne mein bahut help ki. Ab zyada log ham tak reach kar rahe hain. Thank you for your great support!',
    logo: greenvision
  },
  {
    name: 'Dr. Puja',
    title: 'Cosmetologist and Dermatologist',
    quote: 'I am really happy with the services from AdmarkTech. The team is very professional, responsive, and helped me grow my business digitally. Highly recommended!',
    logo: derma
  },
  {
    name: 'Nanda Holistic Healing Center',
    title: 'Healing and Therapy Center',
    quote: 'Amchya startup sathi AD Mark Tech ni uttam strategies ani marketing services dilya. Content development pasun social media marketing ani startup strategies paryant pratyek goshtimule amchya business la changli pragati jhali.',
    logo: nanda
  }
];

const TestimonialCarousel = () => {
  const [active, setActive] = useState(0);
  const cardRefs = useRef([]);
  const containerRef = useRef(null);
  const positionRef = useRef(0);
  const timelineRef = useRef(null);

  const cardWidth = 320;
  // Create duplicated array for infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  const updatePositions = () => {
    duplicatedTestimonials.forEach((_, idx) => {
      if (cardRefs.current[idx]) {
        const x = (idx * cardWidth) - positionRef.current;
        const containerCenter = 0; // Center of container
        const distanceFromCenter = Math.abs(x - containerCenter);
        
        // Determine if card is in the center viewport
        const isInView = x > -cardWidth && x < cardWidth;
        const isActive = distanceFromCenter < cardWidth / 2 && isInView;
        
        const scale = isActive ? 1 : 0.8;
        const opacity = isActive ? 1 : 0.7;
        
        gsap.set(cardRefs.current[idx], {
          x: x,
          scale: scale,
          opacity: opacity,
          zIndex: isActive ? 20 : 10
        });

        // Update active state based on original testimonials index
        const originalIndex = idx % testimonials.length;
        if (isActive && active !== originalIndex) {
          setActive(originalIndex);
        }
      }
    });
  };

  useEffect(() => {
    // Initialize positions
    updatePositions();

    // Create infinite horizontal movement
    timelineRef.current = gsap.timeline({ repeat: -1 });
    
    timelineRef.current.to(positionRef, {
      current: testimonials.length * cardWidth,
      duration: testimonials.length * 4,
      ease: "none",
      onUpdate: updatePositions,
      onComplete: () => {
        // Reset position to create seamless loop
        positionRef.current = 0;
      }
    });

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  const handleCardClick = (idx) => {
    const originalIndex = idx % testimonials.length;
    
    // Find the closest instance of this testimonial to center
    let targetIdx = idx;
    let minDistance = Infinity;
    
    for (let i = 0; i < duplicatedTestimonials.length; i++) {
      if (i % testimonials.length === originalIndex) {
        const x = (i * cardWidth) - positionRef.current;
        const distance = Math.abs(x);
        if (distance < minDistance) {
          minDistance = distance;
          targetIdx = i;
        }
      }
    }
    
    const targetPosition = targetIdx * cardWidth;
    
    timelineRef.current.pause();
    
    gsap.to(positionRef, {
      current: targetPosition,
      duration: 0.8,
      ease: 'power3.out',
      onUpdate: updatePositions,
      onComplete: () => {
        timelineRef.current.resume();
      }
    });
    
    setActive(originalIndex);
  };

  return (
    <section className="relative py-24 px-10 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-16 text-gray-900">What Our Customers Say About Us</h2>
        
        <div 
          ref={containerRef}
          className="relative h-96 mx-auto overflow-hidden"
          style={{ width: '100%' }}
        >
          {duplicatedTestimonials.map((testimonial, idx) => (
            <div
              key={`${idx}-${testimonial.name}`}
              ref={el => (cardRefs.current[idx] = el)}
              className=" absolute top-1/2 transform -translate-y-1/2 cursor-pointer"
              style={{
                left: '50%',
                marginLeft: `-${cardWidth / 2}px`,
              }}
              onClick={() => handleCardClick(idx)}
            >
              <div className={` bg-white rounded-2xl shadow-lg p-6 border border-gray-100 transition-all duration-500 ${
                (idx % testimonials.length) === active ? 'shadow-2xl ring-2 ring-indigo-200' : 'shadow-md hover:shadow-lg'
              }`}
              style={{ width: `${cardWidth - 40}px` }}
              >
                {/* Avatar */}
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center overflow-hidden border-2 transition-all duration-300 ${
                    (idx % testimonials.length) === active 
                      ? 'border-indigo-500 shadow-lg' 
                      : 'border-gray-300'
                  }`}>
                    <img
                      src={testimonial.logo}
                      alt={`${testimonial.name} logo`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div 
                      className={`w-full h-full rounded-full hidden items-center justify-center text-white font-bold text-lg ${
                        (idx % testimonials.length) === active 
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-600' 
                          : 'bg-gradient-to-r from-gray-400 to-gray-500'
                      }`}
                    >
                      {testimonial.name.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                </div>
                
                {/* Quote */}
                <p className={`text-gray-700 mb-4 ${
                  (idx % testimonials.length) === active ? 'text-base font-medium' : 'text-sm'
                }`}>
                  "{testimonial.quote}"
                </p>
                
                {/* Name and Title */}
                <div className="text-center">
                  <div className={`font-semibold text-indigo-600 ${
                    (idx % testimonials.length) === active ? 'text-lg' : 'text-base'
                  }`}>
                    {testimonial.name}
                  </div>
                  <div className={`text-gray-500 ${
                    (idx % testimonials.length) === active ? 'text-sm' : 'text-xs'
                  }`}>
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleCardClick(idx)}
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