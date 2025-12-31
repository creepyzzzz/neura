import React from 'react';
import { Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <div className="bg-slate-50 py-12 md:py-32 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-4 md:gap-8 border-b border-slate-200 pb-6 md:pb-12">
           <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                 <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-neuera-red rounded-full"></div>
                 <span className="text-neuera-red font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase">Our Leadership</span>
              </div>
              <h2 className="text-slate-900 font-display text-fluid-h2 uppercase leading-[0.9]">
                  THE MINDS BEHIND <br/> <span className="text-neuera-orange">THE MAGIC</span>
              </h2>
           </div>
           <p className="text-slate-600 max-w-sm text-xs md:text-sm font-medium leading-relaxed pb-2">
              A diverse collective of creative visionaries, strategic thinkers, and technical wizards dedicated to elevating your brand.
           </p>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[320px] gap-3 md:gap-6">
            
            {/* Card 1: CEO - Large Square (2x2) */}
            <div className="group relative md:col-span-2 md:row-span-2 rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-gray-100">
               <img 
                 src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=80" 
                 alt="John Smith" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-neuera-dark/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
               <div className="absolute bottom-0 left-0 p-4 md:p-10 w-full">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     <p className="text-neuera-orange font-bold tracking-widest text-[9px] md:text-xs uppercase mb-1 md:mb-2">CEO & Founder</p>
                     <h3 className="text-white font-display text-xl md:text-5xl uppercase leading-none">John Smith</h3>
                  </div>
                  <div className="flex gap-3 md:gap-4 mt-4 md:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden md:flex">
                     <button className="bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-neuera-dark p-2 md:p-3 rounded-full transition-all"><Linkedin size={16} className="md:w-5 md:h-5"/></button>
                     <button className="bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-neuera-dark p-2 md:p-3 rounded-full transition-all"><Twitter size={16} className="md:w-5 md:h-5"/></button>
                  </div>
               </div>
            </div>

            {/* Card 2: Creative Director - Tall Vertical (1x2) */}
            <div className="group relative md:col-span-1 md:row-span-2 rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-neuera-purple">
                <img 
                 src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=80" 
                 alt="Jane Doe" 
                 className="w-full h-full object-cover mix-blend-overlay opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end">
                  <h3 className="text-neuera-dark font-display text-xl md:text-3xl uppercase leading-none mb-0.5 md:mb-1">Jane Doe</h3>
                  <p className="text-neuera-dark/70 text-[9px] md:text-xs font-bold uppercase tracking-wider">Chief Creative</p>
               </div>
               <div className="absolute top-3 right-3 md:top-6 md:right-6 w-7 h-7 md:w-10 md:h-10 bg-white/30 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <ArrowUpRight size={14} className="md:w-[18px] md:h-[18px] text-neuera-dark"/>
               </div>
            </div>

            {/* Card 3: Strategy Lead - Standard (1x1) */}
            <div className="group relative md:col-span-1 md:row-span-1 rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-gray-100">
               <img 
                 src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80" 
                 alt="Emily Davis" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
               />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
               <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                  <h3 className="text-white font-display text-xl md:text-2xl uppercase">Emily Davis</h3>
                  <p className="text-white/80 text-[9px] md:text-[10px] font-bold uppercase tracking-wider">Strategy Lead</p>
               </div>
            </div>

            {/* Card 4: Join The Team - Standard (1x1) */}
            <div className="group relative md:col-span-1 md:row-span-1 rounded-2xl md:rounded-[2.5rem] bg-neuera-dark flex flex-col items-center justify-center text-center p-4 md:p-8 cursor-pointer hover:bg-neuera-red transition-colors duration-300">
               <div className="w-10 h-10 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform bg-white/5">
                  <ArrowUpRight size={18} className="md:w-8 md:h-8 text-neuera-orange"/>
               </div>
               <h3 className="text-white font-display text-xl md:text-2xl uppercase mb-1 md:mb-2">Join The Team</h3>
               <p className="text-white/50 text-[10px] md:text-xs leading-relaxed">We are always looking for exceptional talent.</p>
            </div>

            {/* Card 5: Tech Lead - Wide (2x1) */}
            <div className="group relative md:col-span-2 md:row-span-1 rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-gray-200">
               <img 
                 src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80" 
                 alt="David Kim" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 object-top"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-neuera-dark/80 to-transparent p-4 md:p-10 flex flex-col justify-center">
                  <p className="text-neuera-orange text-[9px] md:text-xs font-bold uppercase tracking-wider mb-1 md:mb-2">Tech Lead</p>
                  <h3 className="text-white font-display text-xl md:text-4xl uppercase">David Kim</h3>
                  <p className="text-white/70 text-xs md:text-sm mt-1 md:mt-2 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">Architecting scalable solutions for the digital age.</p>
               </div>
            </div>

            {/* Card 6: Brand Design - Standard (1x1) */}
             <div className="group relative md:col-span-1 md:row-span-1 rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-gray-100">
               <img 
                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80" 
                 alt="Liam Mitchell" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
               />
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                  <h3 className="text-white font-display text-xl md:text-2xl uppercase drop-shadow-md">Liam Mitchell</h3>
                  <p className="text-white text-[9px] md:text-[10px] font-bold uppercase tracking-wider drop-shadow-md">Brand Design</p>
               </div>
            </div>

             {/* Card 7: Video - Standard (1x1) */}
             <div className="group relative md:col-span-1 md:row-span-1 rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-[#FAE4AA]">
               <img 
                 src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=80" 
                 alt="Bella Torres" 
                 className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-110 transition-transform duration-700"
               />
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-neuera-dark">
                  <h3 className="font-display text-xl md:text-2xl uppercase">Bella Torres</h3>
                  <p className="text-neuera-dark/70 text-[9px] md:text-[10px] font-bold uppercase tracking-wider">Production</p>
               </div>
            </div>

        </div>

      </div>
    </div>
  );
};

export default Team;