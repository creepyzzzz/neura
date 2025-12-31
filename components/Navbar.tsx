import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // Ensure navbar is visible/styled correctly on other pages where there is no hero bg
  const navbarStyle = !isHome || isScrolled
    ? 'w-full max-w-5xl bg-white/80 backdrop-blur-xl rounded-full px-2 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20'
    : 'w-full max-w-7xl bg-transparent px-6 py-4';

  const textColor = !isHome || isScrolled ? 'text-slate-900' : 'text-slate-900';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div className={`relative flex justify-between items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${navbarStyle}`}>
        
        {/* Logo */}
        <Link to="/" className={`flex items-center gap-2 group cursor-pointer ${isScrolled || !isHome ? 'pl-2 md:pl-4' : ''}`}>
          <div className="w-6 h-6 md:w-8 md:h-8 bg-neuera-red text-white flex items-center justify-center rounded-lg transition-transform duration-500 group-hover:rotate-180 shadow-md">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="w-3 h-3 md:w-4 md:h-4">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className={`font-display text-lg md:text-xl tracking-wider transition-colors duration-300 ${textColor}`}>NEUERA</span>
        </Link>

        {/* Desktop Links - Pill Layout (Always visible on scroll or inner pages) */}
        <div className={`hidden md:flex items-center gap-1 bg-slate-200/50 p-1 rounded-full backdrop-blur-sm transition-opacity duration-300 ${!isHome || isScrolled ? 'opacity-100' : 'opacity-100'}`}>
          {[
            { name: 'Home', path: '/' },
            { name: 'Articles', path: '/articles' },
            { name: 'Services', path: '/#services' },
            { name: 'FAQ', path: '/faq' }
          ].map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className="px-5 py-2 rounded-full text-sm font-medium text-slate-900/80 hover:bg-white hover:text-slate-900 hover:shadow-sm transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-2">
           <Link to="/contact" className="px-6 py-2.5 bg-neuera-dark text-white rounded-full transition-all duration-300 font-medium text-sm border border-transparent hover:bg-slate-800 hover:scale-105 shadow-md">
            Let's Talk
          </Link>
           <Link to="/login" className="px-6 py-2.5 text-slate-900 hover:text-slate-700 rounded-full transition-all duration-300 font-medium text-sm border">
            Login
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 rounded-full transition-colors text-slate-900 hover:bg-slate-200/50 active:scale-95 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={20} className="md:w-6 md:h-6" /> : <Menu size={20} className="md:w-6 md:h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 bg-slate-50 z-40 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden
        ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col h-full p-4 md:p-6 pt-20 md:pt-24 gap-4 md:gap-6 relative">
           <button 
            className="absolute top-4 right-4 md:top-6 md:right-6 text-slate-900 p-2 md:p-3 hover:bg-slate-200 rounded-full transition-colors active:scale-95 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
           >
             <X size={24} className="md:w-7 md:h-7" />
           </button>
           
           <div className="flex flex-col gap-1 md:gap-2 mt-2 md:mt-4">
             {[
               { name: 'Home', path: '/' },
               { name: 'Articles', path: '/articles' },
               { name: 'FAQ', path: '/faq' },
               { name: "Let's Talk", path: '/contact' }
             ].map((item, idx) => (
               <Link 
                 key={item.name} 
                 to={item.path} 
                 className="text-slate-900 font-display text-3xl md:text-5xl sm:text-6xl uppercase hover:text-neuera-orange transition-colors opacity-0 animate-fade-in-up origin-left transform active:translate-x-2 duration-300 py-2 min-h-[44px] flex items-center"
                 style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'forwards' }}
                 onClick={() => setMobileMenuOpen(false)}
               >
                 {item.name}
               </Link>
             ))}
           </div>

           <div className="mt-auto flex flex-col gap-3 md:gap-4 pb-6 md:pb-8">
             <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full text-center px-4 md:px-6 py-4 md:py-5 rounded-full bg-neuera-orange text-neuera-dark font-bold text-base md:text-lg hover:bg-white transition-colors shadow-lg active:scale-[0.98] min-h-[44px] flex items-center justify-center">Start Project</Link>
             <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="w-full text-center px-4 md:px-6 py-3 md:py-4 rounded-full border border-slate-300 text-slate-900 font-bold text-base md:text-lg hover:bg-slate-100 transition-colors min-h-[44px] flex items-center justify-center">Login</Link>
           </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;