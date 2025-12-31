import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ArticleCard: React.FC<{ 
  category: string; 
  date: string; 
  title: string; 
  image: string;
  size?: 'large' | 'regular';
}> = ({ category, date, title, image, size = 'regular' }) => {
  return (
    <div className={`group cursor-pointer flex flex-col gap-3 md:gap-4 ${size === 'large' ? 'md:col-span-2' : ''}`}>
      <div className={`
        relative overflow-hidden rounded-2xl md:rounded-[2rem] bg-gray-100
        ${size === 'large' ? 'aspect-[3/2] md:aspect-[2/1]' : 'aspect-[3/2] md:aspect-[4/3]'}
      `}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight className="text-white md:w-5 md:h-5" size={16} />
        </div>
      </div>
      
      <div className="mt-1 md:mt-2">
        <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
          <span className="text-neuera-red font-bold uppercase text-[9px] md:text-[10px] tracking-widest">{category}</span>
          <span className="w-0.5 md:w-1 h-0.5 md:h-1 rounded-full bg-gray-300"></span>
          <span className="text-gray-400 text-[9px] md:text-xs font-medium uppercase tracking-wide">{date}</span>
        </div>
        <h3 className={`font-display uppercase text-neuera-dark leading-[0.95] group-hover:text-neuera-red transition-colors duration-300 ${size === 'large' ? 'text-xl md:text-5xl' : 'text-xl md:text-3xl'}`}>
          {title}
        </h3>
      </div>
    </div>
  );
};

const Articles: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 border-b border-gray-100 pb-8 md:pb-12">
           <h1 className="text-neuera-dark font-display text-4xl md:text-9xl uppercase leading-[0.85]">
             News & <br/> <span className="text-neuera-orange">Insights</span>
           </h1>
           <div className="max-w-sm mt-6 md:mt-0">
             <p className="text-gray-500 font-medium leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
               Deep dives into design, technology, and culture. We share our thoughts on the shifting digital landscape.
             </p>
             <div className="flex gap-1.5 md:gap-2 flex-wrap">
               {['All', 'Design', 'Tech', 'Culture'].map((tag, i) => (
                 <button key={tag} className={`px-3 md:px-4 py-1 md:py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wide border transition-all min-h-[32px] md:min-h-[36px] ${i === 0 ? 'bg-neuera-dark text-white border-neuera-dark' : 'bg-white text-neuera-dark border-gray-200 hover:border-neuera-dark'}`}>
                   {tag}
                 </button>
               ))}
             </div>
           </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-16">
          
          <ArticleCard 
            size="large"
            category="Design Thinking"
            date="Oct 12, 2024"
            title="The Future of Web Design is Invisible"
            image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
          />

          <ArticleCard 
            category="Technology"
            date="Oct 08, 2024"
            title="AI: The Creative Partner You Didn't Know You Needed"
            image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"
          />

          <ArticleCard 
            category="Culture"
            date="Sep 28, 2024"
            title="Building Brands in the Age of Authenticity"
            image="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1000&auto=format&fit=crop"
          />

          <ArticleCard 
            category="Strategy"
            date="Sep 15, 2024"
            title="Why Micro-Influencers Are Taking Over"
            image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop"
          />

          <ArticleCard 
            category="Design"
            date="Sep 02, 2024"
            title="Typography Trends to Watch in 2025"
            image="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop"
          />

        </div>

        {/* Pagination / Load More */}
        <div className="mt-16 md:mt-24 flex justify-center">
           <button className="group flex items-center gap-3 md:gap-4 text-neuera-dark font-bold uppercase tracking-widest text-xs md:text-sm hover:text-neuera-red transition-colors min-h-[44px]">
             Load More Articles
             <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-neuera-dark group-hover:text-white group-hover:border-transparent transition-all">
               <ArrowUpRight size={12} className="md:w-[14px] md:h-[14px]" />
             </div>
           </button>
        </div>

      </div>
    </div>
  );
};

export default Articles;