import React, { useRef, useEffect } from 'react';
import { ArrowUpRight, Camera } from 'lucide-react';

// Logo Components using SVG images (no text)
const BrandLogos = {
  Netflix: ({ className }: { className?: string }) => (
    <img 
      src="/images/netflix.svg" 
      alt="Netflix" 
      className={`h-4 md:h-8 w-auto ${className || ''}`}
    />
  ),
  Nike: ({ className }: { className?: string }) => (
    <img 
      src="/images/nike.svg" 
      alt="Nike" 
      className={`h-4 md:h-8 w-auto ${className || ''}`}
    />
  ),
  Apple: ({ className }: { className?: string }) => (
    <img 
      src="/images/apple.svg" 
      alt="Apple" 
      className={`h-4 md:h-8 w-auto ${className || ''}`}
    />
  ),
  Adidas: ({ className }: { className?: string }) => (
    <img 
      src="/images/adidas.svg" 
      alt="Adidas" 
      className={`h-4 md:h-8 w-auto ${className || ''}`}
    />
  ),
  Amazon: ({ className }: { className?: string }) => (
    <img 
      src="/images/amazon.svg" 
      alt="Amazon" 
      className={`h-4 md:h-8 w-auto ${className || ''}`}
    />
  ),
};

const LOGO_LIST = [
  { Component: BrandLogos.Netflix },
  { Component: BrandLogos.Nike },
  { Component: BrandLogos.Apple },
  { Component: BrandLogos.Adidas },
  { Component: BrandLogos.Amazon },
];

const VelocityMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const position = useRef(0);
  const animationFrameId = useRef<number>(0);

  useEffect(() => {
    position.current = 0;

    const animate = () => {
      if (!containerRef.current) {
        animationFrameId.current = requestAnimationFrame(animate);
        return;
      }

      // Constant speed - completely independent of scroll or any external factors
      const speed = 1.0;
      position.current -= speed;

      const contentWidth = containerRef.current.scrollWidth / 2;
      
      // Reset position seamlessly when it reaches the duplicate point
      if (Math.abs(position.current) >= contentWidth) {
        position.current += contentWidth;
      }
      
      containerRef.current.style.transform = `translate3d(${position.current}px, 0, 0)`;
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <div className="w-full py-4 md:py-10 overflow-hidden relative z-20 mt-auto">
      <div className="flex w-max" ref={containerRef} style={{ willChange: 'transform' }}>
        {[...Array(4)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center gap-6 md:gap-32 px-4 md:px-16 shrink-0">
             {LOGO_LIST.map((Logo, i) => (
               <div key={i} className="group flex items-center justify-center transition-opacity duration-500 opacity-70 hover:opacity-100 cursor-pointer">
                 <Logo.Component className="h-4 md:h-8" />
               </div>
             ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// Standard Hero Text Component
const HeroText: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <h1 
      className={`text-slate-900 cursor-default select-none font-bold ${className}`}
      style={{ fontFamily: "'Oswald', 'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700 }}
    >
      {children}
    </h1>
  );
};

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const targetPosition = useRef({ x: 50, y: 50 });
  const currentPosition = useRef({ x: 50, y: 50 });
  const animationFrameId = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
      
      // Calculate cursor position as percentage for gradient
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
        const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
        targetPosition.current = { x, y };
      }
    };

    // Ultra-smooth animation using requestAnimationFrame with easing
    const animateGradient = () => {
      // Smooth interpolation (easing factor ~0.08 for very smooth movement)
      const ease = 0.08;
      const dx = targetPosition.current.x - currentPosition.current.x;
      const dy = targetPosition.current.y - currentPosition.current.y;
      
      // Only update if there's meaningful change (prevents unnecessary updates)
      if (Math.abs(dx) > 0.01 || Math.abs(dy) > 0.01) {
        currentPosition.current.x += dx * ease;
        currentPosition.current.y += dy * ease;
        
        if (gradientRef.current) {
          gradientRef.current.style.background = `radial-gradient(circle at ${currentPosition.current.x}% ${currentPosition.current.y}%, 
            rgba(255, 255, 255, 1) 0%, 
            rgba(248, 250, 252, 0.95) 15%, 
            rgba(241, 245, 249, 0.85) 35%, 
            rgba(226, 232, 240, 0.75) 55%, 
            rgba(203, 213, 225, 0.65) 75%, 
            rgba(148, 163, 184, 0.5) 100%)`;
        }
      }

      animationFrameId.current = requestAnimationFrame(animateGradient);
    };

    animationFrameId.current = requestAnimationFrame(animateGradient);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="pt-16 md:pt-32 pb-0 relative overflow-hidden min-h-screen flex flex-col justify-between group bg-slate-50"
    >
      {/* Smooth gradient background layer */}
      <div
        ref={gradientRef}
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, 
            rgba(255, 255, 255, 1) 0%, 
            rgba(248, 250, 252, 0.95) 15%, 
            rgba(241, 245, 249, 0.85) 35%, 
            rgba(226, 232, 240, 0.75) 55%, 
            rgba(203, 213, 225, 0.65) 75%, 
            rgba(148, 163, 184, 0.5) 100%)`,
          willChange: 'background',
        }}
      />
      
      {/* Background Ambience with Parallax */}
      <div 
        className="absolute top-0 left-1/4 w-[120px] md:w-[600px] h-[120px] md:h-[600px] bg-purple-300/40 rounded-full blur-[32px] md:blur-[120px] mix-blend-multiply transition-transform duration-100 ease-out"
        style={{ transform: `translate(${mousePosition.x * -1.5}px, ${mousePosition.y * -1.5}px)` }}
      />
      <div 
        className="absolute bottom-0 right-0 w-[100px] md:w-[500px] h-[100px] md:h-[500px] bg-blue-300/40 rounded-full blur-[24px] md:blur-[100px] mix-blend-multiply transition-transform duration-100 ease-out"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] md:w-[800px] h-[160px] md:h-[800px] bg-pink-200/30 rounded-full blur-[36px] md:blur-[130px] mix-blend-multiply animate-pulse pointer-events-none" 
      />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full flex flex-col justify-center flex-grow mb-6 md:mb-8 mt-2 md:mt-0">
        
        {/* Main Headline Area */}
        <div className="flex flex-col gap-2 md:gap-0 mb-6 md:mb-12">
          
          {/* Row 1: WE CRAFT [Image] */}
          <div className="flex flex-wrap items-center justify-start w-full gap-2 md:gap-6 animate-fade-in-up delay-100">
            <HeroText className="font-display text-fluid-hero leading-[0.9] uppercase tracking-[-0.04em]">
              WE CRAFT
            </HeroText>
            {/* Ripple Image - Visible on mobile now, scaled down */}
            <div className="h-8 w-16 md:h-20 md:w-56 rounded-full overflow-hidden border-2 md:border-[3px] border-neuera-dark bg-lime-200 relative group shadow-xl">
               <img 
                 src="/images/ripple.png" 
                 alt="Ripple" 
                 className="w-full h-full object-cover"
               />
            </div>
          </div>

          {/* Row 2: [Camera Icon] THE [Abstract Icon] DIGITAL */}
          <div className="flex flex-wrap items-center justify-start w-full gap-2 md:gap-6 animate-fade-in-up delay-200">
            <div className="relative group cursor-pointer block">
                <div className="w-8 h-8 md:w-20 md:h-20 bg-neuera-dark rounded-xl md:rounded-[1.5rem] flex items-center justify-center shadow-lg">
                   <Camera className="text-white w-4 h-4 md:w-8 md:h-8" />
                </div>
            </div>
            <HeroText className="font-display text-fluid-hero leading-[0.9] uppercase tracking-[-0.04em]">
              THE
            </HeroText>
            <div className="w-6 h-6 md:w-16 md:h-16 flex items-center justify-center cursor-pointer flex">
               <img 
                 src="/images/shape.png" 
                 alt="Shape" 
                 className="w-full h-full object-contain"
               />
            </div>
            <HeroText className="font-display text-fluid-hero leading-[0.9] uppercase tracking-[-0.04em]">
              DIGITAL
            </HeroText>
          </div>

          {/* Row 3: EXPERIENCE [Stats Cards] */}
          <div className="flex flex-wrap items-center justify-start w-full gap-3 md:gap-6 animate-fade-in-up delay-300 mt-2 md:mt-0">
             <HeroText className="font-display text-fluid-hero leading-[0.9] uppercase tracking-[-0.04em]">
              EXPERIENCE
            </HeroText>

            {/* Stats Cards - Now visible on mobile in a row */}
            <div className="flex gap-2 md:gap-3 transform translate-y-0 md:translate-y-4 ml-0 md:ml-8 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <div className="bg-neuera-orange p-2 md:p-4 w-20 h-20 md:w-28 md:h-28 rounded-xl md:rounded-2xl flex flex-col justify-between cursor-pointer border border-slate-900/10 shrink-0">
                <div className="w-full flex justify-end"><ArrowUpRight className="text-neuera-dark w-3 h-3 md:w-5 md:h-5" /></div>
                <div>
                  <div className="font-display text-xl md:text-3xl text-neuera-dark mb-0.5 md:mb-1">120M+</div>
                  <div className="text-[7px] md:text-[9px] font-bold uppercase tracking-wider text-neuera-dark/70 leading-tight">Audience<br/>Engagement</div>
                </div>
              </div>
              <div className="bg-[#BFA1F8] p-2 md:p-4 w-20 h-20 md:w-28 md:h-28 rounded-xl md:rounded-2xl flex flex-col justify-between cursor-pointer border border-slate-900/10 shrink-0">
                <div className="w-full flex justify-end"><ArrowUpRight className="text-neuera-dark w-3 h-3 md:w-5 md:h-5" /></div>
                <div>
                  <div className="font-display text-xl md:text-3xl text-neuera-dark mb-0.5 md:mb-1">320+</div>
                  <div className="text-[7px] md:text-[9px] font-bold uppercase tracking-wider text-neuera-dark/70 leading-tight">Global<br/>Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA and Description */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-start animate-fade-in-up delay-400 gap-4 md:gap-6 mt-6 md:mt-4">
          <button className="bg-neuera-dark text-white pl-4 md:pl-8 pr-2 py-2 md:py-2 rounded-full flex items-center gap-3 md:gap-6 shadow-lg active:scale-95 transition-transform min-h-[44px]">
            <span className="font-bold text-sm md:text-lg tracking-wide">Get Started</span>
            <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-neuera-dark">
              <ArrowUpRight size={16} className="md:w-6 md:h-6" />
            </div>
          </button>

          <p className="text-slate-600 max-w-md text-xs md:text-sm leading-relaxed font-normal tracking-wide text-left">
            Neuera exists to revolutionize the way brands connect and engage with their audiences in the digital era by leveraging innovative strategies.
          </p>
        </div>
      </div>

      <VelocityMarquee />
    </div>
  );
};

export default Hero;