import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Monitor, Zap, Palette, Rocket, Code2, Sparkles, ArrowRight, ArrowLeft, Globe } from 'lucide-react';

const WebDesignDevelopment = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animated background canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 116, 139, ${particle.opacity})`;
        ctx.fill();

        // Connect particles
        particles.forEach((particle2, j) => {
          if (i !== j) {
            const dx = particle.x - particle2.x;
            const dy = particle.y - particle2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(100, 116, 139, ${0.1 * (1 - distance / 100)})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(particle2.x, particle2.y);
              ctx.stroke();
            }
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const services = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Intuitive interfaces that users love",
      color: "from-slate-600 to-slate-700"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Development",
      description: "Clean, scalable, performant code",
      color: "from-slate-500 to-slate-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Lightning-fast load times",
      color: "from-slate-700 to-slate-800"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "SEO Ready",
      description: "Built to rank and be discovered",
      color: "from-slate-600 to-slate-700"
    }
  ];

  const process = [
    {
      phase: "01",
      title: "Discover",
      description: "We dive deep into your brand, audience, and goals to create a strategic foundation.",
      icon: <Sparkles className="w-8 h-8" />,
      color: "bg-slate-600"
    },
    {
      phase: "02",
      title: "Design",
      description: "Crafting pixel-perfect interfaces that blend aesthetics with functionality.",
      icon: <Palette className="w-8 h-8" />,
      color: "bg-slate-700"
    },
    {
      phase: "03",
      title: "Develop",
      description: "Building robust, scalable solutions with cutting-edge technologies.",
      icon: <Code2 className="w-8 h-8" />,
      color: "bg-slate-600"
    },
    {
      phase: "04",
      title: "Deploy",
      description: "Launching your site with ongoing optimization and support.",
      icon: <Rocket className="w-8 h-8" />,
      color: "bg-slate-700"
    }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your Web Design & Development services. Can we discuss my project?");
    const whatsappUrl = `https://wa.me/7058277558?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none opacity-40"
      />

      {/* Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-slate-600/20 rounded-full blur-3xl"
          style={{
            top: '20%',
            left: '10%',
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-slate-500/10 rounded-full blur-3xl"
          style={{
            bottom: '20%',
            right: '10%',
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <button 
          onClick={() => navigate('/')}
          className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back</span>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center">
              <Monitor className="w-6 h-6" />
            </div>
            <span className="text-slate-300 font-semibold tracking-wider text-sm uppercase">
              Web Design & Development
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-white">
              Websites That
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400">
              Convert & Captivate
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mb-12 leading-relaxed">
            We craft digital experiences that don't just look stunning—they drive growth, 
            engagement, and real business results.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={handleWhatsAppClick}
              className="group px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-slate-500/30 transition-all hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Let's Build Something Amazing
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.description}</p>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
                Our Process
              </span>
            </h2>
            <p className="text-xl text-white/60">Four phases to digital excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-10 hover:border-white/40 transition-all duration-500 cursor-pointer overflow-hidden"
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Phase Number Background */}
                <div className="absolute top-0 right-0 text-9xl font-black text-white/5 leading-none transform translate-x-8 -translate-y-4">
                  {step.phase}
                </div>

                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-300 mb-2">PHASE {step.phase}</div>
                      <h3 className="text-3xl font-black">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-white/70 text-lg leading-relaxed">{step.description}</p>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color === 'bg-slate-600' ? 'from-slate-600/20' : 'from-slate-700/20'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process Explanation */}
      <section className="relative z-10 px-6 py-20 bg-gradient-to-br from-slate-900/50 to-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
                Behind the Process
              </span>
            </h2>
            <p className="text-lg text-white/60">Understanding how we deliver exceptional results</p>
          </div>

          <div className="space-y-16">
            {/* How It Starts */}
            <div className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 hover:border-white/40 transition-all duration-500">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white mb-4">How It Starts</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Our process begins with understanding your vision, audience, and goals. We start with a detailed consultation to identify your brand's unique needs, user expectations, and design preferences. Based on this, we create a strategic plan and wireframes that outline your website's structure, functionality, and user journey.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Execute */}
            <div className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 hover:border-white/40 transition-all duration-500">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Code2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white mb-4">How We Execute</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Once the plan is finalized, our designers craft visually engaging, user-friendly interfaces while our developers build responsive and high-performing websites using the latest technologies. We test every feature to ensure flawless functionality, speed, and accessibility across all devices before going live.
                  </p>
                </div>
              </div>
            </div>

            {/* Why It's Important */}
            <div className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 hover:border-white/40 transition-all duration-500">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white mb-4">Why It's Important</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Your website is often the first impression of your brand. A well-designed, responsive site not only attracts visitors but also builds trust, enhances user experience, and drives conversions. Investing in professional web design and development ensures your business stands out and performs effectively in the digital space.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-slate-700 via-slate-800 to-slate-700 rounded-[3rem] p-12 md:p-20 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">Limited Spots Available</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                Ready to Transform Your Online Presence?
              </h2>

              <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Let's create something extraordinary together. Book a free consultation and discover 
                how we can elevate your digital experience.
              </p>

              <button 
                onClick={handleWhatsAppClick}
                className="group px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-green-500/30 transition-all hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Start Your Project on WhatsApp
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            1
          </span>
        </button>
      </div>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-white/40">
          <p>© 2025 Admark Tech. Crafting digital excellence.</p>
        </div>
      </footer>
    </div>
  );
};

export default WebDesignDevelopment;