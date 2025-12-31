import React from 'react';
import { Target, User, Users, Megaphone, ArrowRight } from 'lucide-react';

const ServiceCard: React.FC<{ 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  theme: 'dark' | 'light' | 'orange' | 'purple';
  className?: string;
  image?: string;
}> = ({ title, description, icon, theme, className = '', image }) => {
  
  const getThemeStyles = () => {
    switch(theme) {
      case 'dark': return 'bg-slate-900 text-white border-slate-800';
      case 'orange': return 'bg-neuera-orange text-neuera-dark border-neuera-dark/5';
      case 'purple': return 'bg-[#BFA1F8] text-neuera-dark border-neuera-dark/5';
      default: return 'bg-white text-slate-900 border-slate-200';
    }
  };

  return (
    <div className={`
      relative rounded-2xl md:rounded-[2.5rem] p-4 md:p-10 flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-all duration-300 border
      ${getThemeStyles()} ${className}
    `}>
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-0 overflow-hidden rounded-bl-2xl md:rounded-bl-[3rem] bg-white/10 backdrop-blur-sm z-10">
         <div className={`p-3 md:p-5 ${theme === 'dark' ? 'text-white' : 'text-neuera-dark'}`}>
            {React.cloneElement(icon as React.ReactElement, { size: 20, className: 'md:w-8 md:h-8' })}
         </div>
      </div>

      {image && (
        <div className="absolute inset-0 z-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
          <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-neuera-dark/80' : 'bg-white/80'}`}></div>
        </div>
      )}

      <div className="relative z-10 mt-4 md:mt-0">
        <h3 className="font-display text-2xl md:text-5xl uppercase mb-3 md:mb-4 leading-[0.9] max-w-[90%]">
          {title}
        </h3>
      </div>
      
      <div className="relative z-10 flex items-end justify-between mt-6 md:mt-12">
        <p className={`text-xs md:text-base leading-relaxed max-w-xs font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-neuera-dark/70'}`}>
          {description}
        </p>
        <button className={`
          w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-45deg] group-hover:scale-110 min-w-[32px] min-h-[32px] md:min-w-[48px] md:min-h-[48px]
          ${theme === 'dark' ? 'bg-white text-neuera-dark' : 'bg-neuera-dark text-white'}
        `}>
          <ArrowRight size={14} className="md:w-5 md:h-5" />
        </button>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="bg-slate-50 py-12 md:py-32" id="services">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-20 gap-6 md:gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <span className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-neuera-red animate-pulse"></span>
              <p className="text-slate-900 font-bold tracking-widest text-[10px] md:text-xs uppercase">Our Expertise</p>
            </div>
            <h2 className="text-slate-900 font-display text-fluid-h2 uppercase leading-[0.9]">
              WE DESIGN <span className="text-slate-400">MEANINGFUL</span> <br/>
              EXPERIENCES, NOT JUST <br/>
              <span className="relative inline-block">
                QUICK IMPRESSIONS
                <svg className="absolute w-full h-1.5 md:h-3 -bottom-1 left-0 text-neuera-orange" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h2>
          </div>
          
          <div className="max-w-xs">
            <p className="text-xs md:text-sm font-medium text-slate-600 mb-4 md:mb-6 leading-relaxed">
              We connect your brand with the right influencers, forging authentic partners that amplify your message.
            </p>
            <a href="#" className="group inline-flex items-center gap-2 font-bold text-slate-900 uppercase text-xs md:text-sm border-b border-slate-900 pb-1 hover:text-neuera-red hover:border-neuera-red transition-colors">
              See all services <ArrowRight size={14} className="md:w-4 md:h-4 group-hover:translate-x-1 transition-transform"/>
            </a>
          </div>
        </div>

        {/* Bento Grid Layout - 2 columns on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 auto-rows-[minmax(180px,auto)] md:auto-rows-[minmax(300px,auto)]">
          
          {/* Card 1: Wide - Spans 2 columns on mobile (full width) */}
          <ServiceCard 
            title="Social Strategy" 
            description="Developing customized plans that align seamlessly with your brand's goals and target audience." 
            icon={<Target />}
            theme="light"
            className="col-span-2 md:col-span-2 min-h-[180px] md:min-h-[380px]"
            image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
          />

          {/* Card 2: Tall Vertical - Spans 1 column, 2 rows on mobile */}
          <ServiceCard 
            title="Creator Management" 
            description="Empowering influencers to thrive in their creative endeavors with strategic guidance." 
            icon={<User />}
            theme="orange"
            className="col-span-1 row-span-2 md:col-span-1 md:row-span-2 bg-[#E8F5D6] min-h-[180px]"
          />

          {/* Card 3: Standard - Top right on mobile */}
          <ServiceCard 
            title="Influencer Partnerships" 
            description="Forging authentic partnerships that amplify your message and expand your reach." 
            icon={<Users />}
            theme="light"
            className="col-span-1 md:col-span-1 min-h-[180px]"
          />

           {/* Card 4: Standard - Bottom right on mobile */}
           <ServiceCard 
            title="Social Publishing" 
            description="Streamlining content delivery ensuring your brand's voice is consistently heard." 
            icon={<Megaphone />}
            theme="purple"
            className="col-span-1 md:col-span-1 min-h-[180px]"
          />
        </div>

      </div>
    </div>
  );
};

export default Services;