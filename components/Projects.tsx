import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProjectCard: React.FC<{ 
  title: string; 
  subtitle: string; 
  date: string; 
  image: string; 
  overlayColor: string;
  isLarge?: boolean;
  className?: string;
}> = ({ title, subtitle, date, image, overlayColor, isLarge, className = '' }) => (
  <div className={`group relative rounded-2xl md:rounded-[2.5rem] overflow-hidden cursor-pointer ${isLarge ? 'aspect-[3/2] md:aspect-[16/9]' : 'aspect-[4/3] md:aspect-[4/3]'} ${className}`}>
    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
    <div className={`absolute inset-0 bg-gradient-to-t ${overlayColor} to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
    
    <div className="absolute inset-0 p-4 md:p-12 flex flex-col justify-between">
      <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
         <div className="w-10 h-10 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
            <ArrowRight className="text-neuera-dark md:w-5 md:h-5" size={16} />
         </div>
      </div>
      
      <div>
        <h3 className="font-display text-2xl md:text-5xl lg:text-6xl text-white uppercase mb-2 md:mb-4 leading-[0.9]">{title}</h3>
        <div className="flex justify-between items-center border-t border-white/30 pt-3 md:pt-6">
          <p className="text-white/90 font-medium tracking-wide uppercase text-[10px] md:text-sm">{subtitle}</p>
          <p className="text-white/70 font-mono text-[9px] md:text-xs">{date}</p>
        </div>
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <div className="bg-slate-50 pb-16 md:pb-32 pt-8 md:pt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-4 md:gap-8">
          <div>
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <span className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-neuera-orange animate-pulse"></span>
              <p className="text-slate-900 font-bold tracking-widest text-[10px] md:text-xs uppercase">Recent Work</p>
            </div>
            <h2 className="text-slate-900 font-display text-fluid-h2 uppercase leading-[0.9] max-w-2xl">
              EXPLORE OUR MOST <span className="italic font-serif text-neuera-red">SUCCESSFUL</span> PROJECTS
            </h2>
          </div>
           <div className="max-w-xs text-right md:text-left">
            <a href="#" className="group inline-flex items-center gap-2 md:gap-4 px-4 md:px-8 py-2 md:py-4 bg-neuera-dark text-white rounded-full font-bold uppercase text-xs md:text-sm hover:bg-neuera-red transition-all hover:scale-105 shadow-xl min-h-[44px]">
              All Projects <ArrowRight size={14} className="md:w-4 md:h-4 group-hover:translate-x-1 transition-transform"/>
            </a>
          </div>
        </div>

        {/* Bento Grid Layout for Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-8">
          {/* Large card - spans 2 columns on mobile */}
          <ProjectCard 
            title="iPhone XR" 
            subtitle="Digital Marketing Campaign" 
            date="2024" 
            image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop"
            overlayColor="from-black/80"
            isLarge={true}
            className="col-span-2 md:col-span-1"
          />
          {/* Smaller card - spans 2 columns on mobile, 1 column on desktop */}
          <ProjectCard 
            title="Tesla Motors" 
            subtitle="Branding & Identity" 
            date="2024" 
            image="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1000&auto=format&fit=crop"
            overlayColor="from-neuera-red/90"
            className="col-span-2 md:col-span-1"
          />
        </div>

      </div>
    </div>
  );
};

export default Projects;