import React from 'react';
import { ArrowRight, Star, Hexagon, Circle, Triangle } from 'lucide-react';

interface ProcessItemProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

const ProcessItem: React.FC<ProcessItemProps> = ({ number, title, description, icon, isActive = false }) => (
  <div className={`
    group relative flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:p-10 rounded-xl md:rounded-[2.5rem] transition-all duration-500 cursor-pointer border border-slate-200
    ${isActive 
      ? 'bg-neuera-orange text-neuera-dark scale-[1.02] shadow-2xl' 
      : 'bg-white text-slate-900 hover:bg-[#BFA1F8] hover:shadow-lg'}
  `}>
    
    <div className="flex items-center gap-4 md:gap-8 w-full md:w-auto mb-3 md:mb-0">
      <span className={`font-display text-2xl md:text-4xl opacity-50 transition-colors duration-500 ${isActive ? 'text-neuera-dark' : 'text-slate-900 group-hover:text-neuera-dark'}`}>{number}</span>
      <div className={`w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center transition-colors duration-500 ${isActive ? 'bg-white text-neuera-dark' : 'bg-neuera-dark text-white group-hover:bg-white group-hover:text-neuera-dark'}`}>
        {React.cloneElement(icon as React.ReactElement, { size: 20, className: 'md:w-7 md:h-7' })}
      </div>
      <h3 className={`font-display text-xl md:text-3xl uppercase tracking-wide transition-colors duration-500 ${isActive ? 'text-neuera-dark' : 'text-slate-900 group-hover:text-neuera-dark'}`}>{title}</h3>
    </div>

    <p className={`text-xs md:text-base max-w-md mt-2 md:mt-0 font-light leading-relaxed transition-colors duration-500 ${isActive ? 'text-neuera-dark/80 font-medium' : 'text-slate-600 group-hover:text-neuera-dark/80'}`}>
      {description}
    </p>

    <div className={`
      absolute top-4 right-4 md:top-6 md:right-6 md:static w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 min-w-[32px] min-h-[32px] md:min-w-[48px] md:min-h-[48px]
      ${isActive 
        ? 'bg-neuera-dark text-white rotate-0' 
        : 'bg-white border border-slate-300 text-slate-900 rotate-[-45deg] group-hover:bg-white group-hover:border-white group-hover:text-slate-900 group-hover:rotate-0'}
    `}>
      <ArrowRight size={14} className="md:w-5 md:h-5" />
    </div>
  </div>
);

const Process: React.FC = () => {
  return (
    <div className="bg-slate-50 py-10 md:py-28 relative overflow-hidden">
      {/* Decorative BG elements */}
      <div className="absolute top-0 right-0 w-[120px] md:w-[600px] h-[120px] md:h-[600px] bg-purple-300/40 rounded-full blur-[40px] md:blur-[150px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[120px] md:w-[500px] h-[120px] md:h-[500px] bg-blue-300/30 rounded-full blur-[32px] md:blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-20 gap-4 md:gap-8">
          <div>
            <p className="text-neuera-orange font-bold tracking-widest text-[10px] md:text-xs uppercase mb-3 md:mb-4 flex items-center gap-2">
              <span className="w-6 md:w-8 h-[1px] bg-neuera-orange"></span> Process
            </p>
            <h2 className="text-slate-900 font-display text-fluid-h2 uppercase leading-[0.9] max-w-3xl">
              HOW WE DRIVE YOUR <span className="text-neuera-orange">BRAND</span> TO NEW HEIGHTS
            </h2>
          </div>
          <p className="text-slate-600 max-w-sm text-xs md:text-sm font-light leading-relaxed">
            We transform innovative ideas into captivating and memorable digital experiences that engage and inspire audiences worldwide.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:gap-6">
          <ProcessItem 
            number="01"
            title="Discovery" 
            description="We assess your business goals, challenges, and opportunities to understand your unique needs and develop a tailored strategy."
            icon={<Star size={28} fill="currentColor"/>}
          />
          <ProcessItem 
            number="02"
            title="Strategy" 
            description="Our team implements the strategy with meticulous precision, leveraging best practices and innovative techniques."
            icon={<Hexagon size={28} />}
          />
          <ProcessItem 
            number="03"
            title="Execution" 
            description="We execute the plan with creativity and technical excellence, ensuring every touchpoint resonates with your audience."
            icon={<Triangle size={28} />}
          />
          <ProcessItem 
            number="04"
            title="Analysis" 
            description="Receive comprehensive, detailed reports and insights that allow you to track progress and measure success effectively."
            icon={<Circle size={28} />}
          />
        </div>

      </div>
    </div>
  );
};

export default Process;