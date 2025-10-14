import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Target, BarChart3, Users, Search, Megaphone, Sparkles, ArrowRight, ArrowLeft, Zap } from 'lucide-react';

const DigitalMarketing = () => {
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
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
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
      icon: <Search className="w-6 h-6" />,
      title: "SEO & SEM",
      description: "Dominate search results organically and paid",
      color: "from-slate-600 to-slate-700"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Social Media",
      description: "Build communities and drive engagement",
      color: "from-slate-500 to-slate-600"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics",
      description: "Data-driven insights and optimization",
      color: "from-slate-700 to-slate-800"
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Brand Awareness",
      description: "Amplify your reach and recognition",
      color: "from-slate-600 to-slate-700"
    }
  ];

  const process = [
    {
      phase: "01",
      title: "Research",
      description: "Deep market analysis and competitor research to identify opportunities and define strategy.",
      icon: <Target className="w-8 h-8" />,
      color: "bg-slate-600"
    },
    {
      phase: "02",
      title: "Execute",
      description: "Multi-channel campaigns across SEO, SEM, social media, and content marketing.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "bg-slate-700"
    },
    {
      phase: "03",
      title: "Analyze",
      description: "Track performance metrics and ROI to optimize campaigns for maximum results.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "bg-slate-600"
    },
    {
      phase: "04",
      title: "Scale",
      description: "Expand successful strategies and explore new growth opportunities.",
      icon: <Zap className="w-8 h-8" />,
      color: "bg-slate-700"
    }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your Digital Marketing services. Can we discuss my project?");
    const whatsappUrl = `https://wa.me/1234567890?text=${message}`;
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
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-slate-300 font-semibold tracking-wider text-sm uppercase">
              Digital Marketing
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-white">
              Growth-Driven
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400">
              Marketing Power
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mb-12 leading-relaxed">
            Accelerate your business growth with data-driven digital marketing strategies 
            that deliver measurable results and maximize your return on investment.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={handleWhatsAppClick}
              className="group px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-slate-500/30 transition-all hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Get Started Today
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
                Marketing Strategy
              </span>
            </h2>
            <p className="text-xl text-white/60">Data-driven approach to accelerate growth</p>
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
                <div className={`absolute inset-0 rounded-3xl ${step.color === 'bg-slate-600' ? 'bg-gradient-to-br from-slate-600/20' : 'bg-gradient-to-br from-slate-700/20'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
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
                  <Target className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white mb-4">How It Starts</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    We begin by analyzing your business goals, target audience, and current online presence. Through a discovery session, we identify the best digital channels and strategies—such as SEO, SEM, social media, or paid advertising—to reach and engage your ideal customers. From there, we create a customized marketing plan with clear objectives and performance metrics.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Execute */}
            <div className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 hover:border-white/40 transition-all duration-500">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white mb-4">How We Execute</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Our marketing experts design and implement data-driven campaigns that align with your goals. We optimize your content, manage ad placements, and monitor performance using advanced analytics tools. Regular reports and insights help us refine strategies in real time to ensure maximum ROI and continuous growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Why It's Important */}
            <div className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 hover:border-white/40 transition-all duration-500">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white mb-4">Why It's Important</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Digital marketing is essential for building brand visibility, attracting new customers, and driving sales in today's competitive landscape. A well-executed strategy not only increases traffic and leads but also strengthens your brand's online reputation and long-term success.
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
                <span className="font-semibold">Growth Guaranteed</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                Ready to Grow Your Business?
              </h2>

              <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Let's create marketing campaigns that deliver real results and drive sustainable growth. 
                Transform your digital presence and reach your target audience effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-white/40">
          <p>© 2024 Your Company. Driving digital growth.</p>
        </div>
      </footer>
    </div>
  );
};

export default DigitalMarketing;