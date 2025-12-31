import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialCard: React.FC<{ 
  color: string; 
  text: string; 
  name: string; 
  role: string; 
  image: string;
  textColor?: string;
  className?: string;
}> = ({ color, text, name, role, image, textColor = 'text-white', className = '' }) => (
  <div className={`${color} ${textColor} p-4 md:p-10 rounded-2xl md:rounded-[2rem] flex flex-col justify-between h-full min-h-[200px] md:min-h-[300px] shadow-lg ${className}`}>
    <div>
      <Quote size={24} className="md:w-10 md:h-10 mb-3 md:mb-6 opacity-60" fill="currentColor" />
      <p className="text-xs md:text-base font-medium leading-relaxed mb-4 md:mb-8">
        {text}
      </p>
    </div>
    
    <div className="flex items-center gap-3 md:gap-4">
      <img src={image} alt={name} className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover border-2 border-white/20" />
      <div>
        <h4 className="font-display uppercase text-sm md:text-lg leading-none">{name}</h4>
        <p className="text-[10px] md:text-xs opacity-70 mt-0.5 md:mt-1">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <div className="bg-slate-50 pb-12 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="mb-8 md:mb-16">
          <p className="text-neuera-red font-bold tracking-widest text-xs md:text-sm mb-2 italic uppercase">
            *Spoiler: They love it!
          </p>
          <h2 className="text-slate-900 font-display text-fluid-h2 uppercase leading-none max-w-2xl">
            HERE'S WHAT PEOPLE SAY ABOUT OUR WORK
          </h2>
        </div>

        {/* Bento Grid Layout for Mobile - 2 columns on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 auto-rows-[minmax(180px,auto)] md:auto-rows-[minmax(300px,auto)]">
          {/* Large card - spans 2 columns on mobile (full width) */}
          <TestimonialCard 
            color="bg-neuera-salmon"
            textColor="text-neuera-dark"
            text="Partnering with Neuera revolutionized our online presence. Their expert SEO strategies significantly improved our search engine rankings, resulting in a remarkable 40% increase in organic traffic within just three months."
            name="Samantha R"
            role="PureFit Health"
            image="https://randomuser.me/api/portraits/women/44.jpg"
            className="col-span-2 md:col-span-1 min-h-[180px] md:min-h-[300px]"
          />
          {/* Smaller cards - span 1 column each on mobile, stacked vertically */}
          <TestimonialCard 
            color="bg-neuera-orange"
            textColor="text-neuera-dark"
            text="Working with Neuera has completely transformed our online presence and visibility. Their sophisticated SEO strategies effectively boosted our search rankings."
            name="Jack Black"
            role="GreenTech Innovations"
            image="https://randomuser.me/api/portraits/men/32.jpg"
            className="col-span-1 md:col-span-1 min-h-[180px] md:min-h-[300px]"
          />
          <TestimonialCard 
            color="bg-slate-900"
            textColor="text-white"
            text="Neuera's partnership has been transformative for our online presence. Their innovative SEO strategies led to a dramatic increase in our search engine rankings."
            name="Rachel Donna"
            role="FreshFarm Organics"
            image="https://randomuser.me/api/portraits/women/65.jpg"
            className="col-span-1 md:col-span-1 min-h-[180px] md:min-h-[300px]"
          />
        </div>

      </div>
    </div>
  );
};

export default Testimonials;