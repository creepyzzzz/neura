import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';

const BoldCTA: React.FC = () => {
  return (
    <div className="bg-slate-50 py-16 md:py-32 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[180px] md:w-[600px] h-[180px] md:h-[600px] bg-purple-300/30 rounded-full blur-[36px] md:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[150px] md:w-[500px] h-[150px] md:h-[500px] bg-blue-300/30 rounded-full blur-[30px] md:blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center relative z-10">
        
        <h2 className="text-slate-900 font-display text-3xl md:text-[8rem] leading-[0.9] uppercase flex flex-col items-center gap-2 md:gap-4">
          <span className="flex items-center gap-2 md:gap-4">
            BE 
            <div className="w-12 h-12 md:w-24 md:h-24 bg-neuera-orange rounded-full flex items-center justify-center animate-pulse">
                <Star className="text-neuera-dark w-6 h-6 md:w-12 md:h-12" fill="currentColor" />
            </div>
            BOLD
          </span>
          <span className="text-neuera-purple">BE BRILLIANT</span>
          <span>WITH NEUERA</span>
        </h2>

        <div className="mt-8 md:mt-12">
            <button className="bg-neuera-dark text-white px-6 md:px-8 py-2 md:py-3 rounded-full inline-flex items-center gap-2 md:gap-3 font-bold text-sm md:text-lg hover:scale-105 transition-transform group shadow-lg min-h-[44px]">
                Start Now!
                <div className="w-7 h-7 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center text-neuera-dark group-hover:rotate-45 transition-transform">
                    <ArrowUpRight size={14} className="md:w-4 md:h-4" />
                </div>
            </button>
        </div>
      </div>
    </div>
  );
};

export default BoldCTA;