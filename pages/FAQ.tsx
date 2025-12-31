import React, { useState } from 'react';
import { Plus, Minus, Search } from 'lucide-react';

const FaqItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4 md:py-8">
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between text-left group min-h-[44px]"
      >
        <span className={`font-display text-xl md:text-3xl uppercase transition-colors duration-300 ${isOpen ? 'text-neuera-orange' : 'text-slate-900 group-hover:text-neuera-orange'}`}>
          {question}
        </span>
        <div className={`
          w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-300 min-w-[32px] min-h-[32px] md:min-w-[40px] md:min-h-[40px]
          ${isOpen ? 'bg-neuera-dark text-white rotate-180 border-transparent' : 'bg-transparent text-slate-900 group-hover:bg-gray-100'}
        `}>
          {isOpen ? <Minus size={14} className="md:w-[18px] md:h-[18px]" /> : <Plus size={14} className="md:w-[18px] md:h-[18px]" />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'max-h-96 opacity-100 mt-4 md:mt-6' : 'max-h-0 opacity-0 mt-0'}`}>
        <p className="text-slate-600 text-sm md:text-lg leading-relaxed max-w-3xl font-light">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What makes Neuera different?",
      answer: "We don't just follow trends; we set them. Our approach combines data-driven strategy with high-end aesthetic execution. We treat every client as a unique partner, tailoring our digital solutions to fit your specific DNA rather than applying a cookie-cutter template."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and tailored to the scope and requirements of your specific needs. We offer a free initial consultation to understand your goals, after which we provide a detailed proposal with transparent pricing. No hidden fees, ever."
    },
    {
      question: "How long does a typical project take?",
      answer: "Timelines vary depending on complexity. A comprehensive branding and web project typically spans 6-10 weeks. Smaller campaigns may take 2-4 weeks. We prioritize quality and impact over rushing, but we always hit our agreed deadlines."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Absolutely. Digital growth is a marathon, not a sprint. We offer various retainer packages for ongoing SEO, content creation, and technical maintenance to ensure your brand continues to thrive long after the initial launch."
    },
    {
      question: "Can you work with international clients?",
      answer: "Yes, we are a global agency. We have worked with clients across Europe, North America, and Asia. Our team is accustomed to working across time zones and cultural nuances to deliver world-class results regardless of geography."
    },
     {
      question: "What industries do you specialize in?",
      answer: "While we are industry-agnostic, we have deep expertise in Tech, Fashion, Luxury Real Estate, and Lifestyle brands. Our adaptability allows us to bring fresh perspectives to any sector we touch."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="mb-12 md:mb-20">
           <p className="text-neuera-orange font-bold tracking-widest text-[10px] md:text-xs uppercase mb-3 md:mb-4 flex items-center gap-2">
              <span className="w-6 md:w-8 h-[1px] bg-neuera-orange"></span> Support Center
            </p>
             <h1 className="text-neuera-dark font-display text-4xl md:text-8xl uppercase leading-[0.9] mb-6 md:mb-8">
             How can we <br/> <span className="text-gray-400">help you?</span>
           </h1>
           
           {/* Search Bar */}
           <div className="relative max-w-xl group">
             <input 
               type="text" 
               placeholder="Search for a question..." 
               className="w-full bg-white border-b-2 border-gray-300 py-3 md:py-4 pl-0 pr-10 md:pr-12 text-base md:text-xl outline-none focus:border-neuera-orange transition-all duration-300 placeholder:text-gray-500 text-neuera-dark"
             />
             <Search className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-neuera-orange transition-colors md:w-6 md:h-6" size={18} />
           </div>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <FaqItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 md:mt-24 bg-gray-50 rounded-2xl md:rounded-[3rem] p-6 md:p-12 text-center border border-gray-100">
           <h3 className="font-display text-2xl md:text-3xl uppercase text-slate-900 mb-3 md:mb-4">Still have questions?</h3>
           <p className="text-slate-600 mb-6 md:mb-8 max-w-md mx-auto text-sm md:text-base">Can't find the answer you're looking for? Please chat to our friendly team.</p>
           <button className="bg-neuera-dark text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-bold uppercase text-xs md:text-sm hover:bg-neuera-orange hover:text-neuera-dark transition-colors min-h-[44px]">
             Get in Touch
           </button>
        </div>

      </div>
    </div>
  );
};

export default FAQ;