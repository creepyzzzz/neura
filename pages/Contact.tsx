import React from 'react';
import { ArrowUpRight, MapPin, Mail, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
      {/* Background Ambience - Matching Landing Page */}
      <div className="absolute top-0 right-0 w-[240px] md:w-[600px] h-[240px] md:h-[600px] bg-purple-300/30 rounded-full blur-[48px] md:blur-[120px] mix-blend-multiply pointer-events-none translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-blue-300/30 rounded-full blur-[40px] md:blur-[100px] mix-blend-multiply pointer-events-none -translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] md:w-[800px] h-[320px] md:h-[800px] bg-pink-100/40 rounded-full blur-[52px] md:blur-[130px] mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-24 gap-8 md:gap-12">
           <div className="max-w-3xl">
             <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <span className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-neuera-orange animate-pulse"></span>
                <p className="text-neuera-orange font-bold tracking-widest text-[10px] md:text-xs uppercase">Get in Touch</p>
             </div>
             <h1 className="font-display text-4xl md:text-8xl uppercase leading-[0.9] text-slate-900 tracking-tight">
               Let's <span className="text-slate-400">Start</span> A <br/>
               <span className="text-neuera-orange">Project</span> Together
             </h1>
           </div>
           
           <div className="max-w-sm">
             <p className="text-slate-600 text-sm md:text-lg font-light leading-relaxed">
               We help ambitious brands define their future. Tell us about your goals and let's build something extraordinary.
             </p>
           </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-24">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 md:p-12 rounded-2xl md:rounded-[2.5rem] shadow-xl border border-slate-100 relative overflow-hidden group">
             {/* Subtle hover gradient for the form card */}
             <div className="absolute top-0 left-0 w-full h-1 md:h-2 bg-gradient-to-r from-neuera-orange via-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
             <form className="space-y-6 md:space-y-10">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                 <div className="relative group/input">
                   <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within/input:text-neuera-orange transition-colors">Your Name</label>
                   <input type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-slate-300 py-3 md:py-4 text-base md:text-xl text-slate-900 placeholder:text-slate-400 outline-none focus:border-neuera-orange transition-all duration-300" />
                 </div>
                 <div className="relative group/input">
                   <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within/input:text-neuera-orange transition-colors">Your Email</label>
                   <input type="email" placeholder="john@example.com" className="w-full bg-transparent border-b border-slate-300 py-3 md:py-4 text-base md:text-xl text-slate-900 placeholder:text-slate-400 outline-none focus:border-neuera-orange transition-all duration-300" />
                 </div>
               </div>

               <div className="relative group/input">
                 <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within/input:text-neuera-orange transition-colors">Organization</label>
                 <input type="text" placeholder="Company Name" className="w-full bg-transparent border-b border-slate-300 py-3 md:py-4 text-base md:text-xl text-slate-900 placeholder:text-slate-400 outline-none focus:border-neuera-orange transition-all duration-300" />
               </div>

               <div className="relative group/input">
                 <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 group-focus-within/input:text-neuera-orange transition-colors">Tell us about your project</label>
                 <textarea rows={4} placeholder="We are looking to rebrand..." className="w-full bg-transparent border-b border-slate-300 py-3 md:py-4 text-base md:text-xl text-slate-900 placeholder:text-slate-400 outline-none focus:border-neuera-orange transition-all duration-300 resize-none"></textarea>
               </div>

               <div className="pt-4 md:pt-6">
                 <button className="bg-neuera-dark text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-sm md:text-lg tracking-wide hover:bg-neuera-orange hover:text-neuera-dark transition-all duration-300 flex items-center gap-3 md:gap-4 group/btn shadow-lg hover:shadow-neuera-orange/20 hover:-translate-y-1 min-h-[44px]">
                   Send Message
                   <Send size={16} className="md:w-[18px] md:h-[18px] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                 </button>
               </div>
             </form>
          </div>

          {/* Info Sidebar */}
          <div className="lg:col-span-5 flex flex-col justify-between py-6 md:py-8">
             
             <div className="space-y-8 md:space-y-12">
               <div>
                 <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm mb-4 md:mb-6 text-neuera-orange border border-slate-100">
                    <Mail size={20} className="md:w-6 md:h-6"/>
                 </div>
                 <h4 className="font-display text-xl md:text-2xl uppercase mb-3 md:mb-4 text-slate-900">
                   Contact Details
                 </h4>
                 <div className="space-y-3 md:space-y-4">
                    <div>
                        <p className="text-slate-500 text-xs md:text-sm font-medium uppercase tracking-wider mb-1">General inquiries</p>
                        <a href="mailto:hello@neuera.com" className="text-sm md:text-xl font-medium text-slate-900 hover:text-neuera-orange transition-colors">hello@neuera.com</a>
                    </div>
                    <div>
                        <p className="text-slate-500 text-xs md:text-sm font-medium uppercase tracking-wider mb-1">Work with us</p>
                        <a href="mailto:newbiz@neuera.com" className="text-sm md:text-xl font-medium text-slate-900 hover:text-neuera-orange transition-colors">newbiz@neuera.com</a>
                    </div>
                 </div>
               </div>

               <div>
                 <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm mb-4 md:mb-6 text-neuera-orange border border-slate-100">
                    <MapPin size={20} className="md:w-6 md:h-6"/>
                 </div>
                 <h4 className="font-display text-xl md:text-2xl uppercase mb-3 md:mb-4 text-slate-900">
                   Location
                 </h4>
                 <p className="text-sm md:text-lg text-slate-700 font-light leading-relaxed">
                   123 Innovation Drive, <br/>
                   Silicon Beach, CA 90210 <br/>
                   United States
                 </p>
               </div>

               <div>
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm mb-4 md:mb-6 text-neuera-orange border border-slate-100">
                    <Phone size={20} className="md:w-6 md:h-6"/>
                 </div>
                 <h4 className="font-display text-xl md:text-2xl uppercase mb-3 md:mb-4 text-slate-900">
                   Call Us
                 </h4>
                 <a href="tel:+15551234567" className="text-sm md:text-xl font-medium text-slate-900 hover:text-neuera-orange transition-colors">+1 (555) 123-4567</a>
               </div>
             </div>

             <div className="mt-8 md:mt-12 lg:mt-0 p-4 md:p-6 bg-[#BFA1F8]/20 rounded-2xl md:rounded-3xl border border-[#BFA1F8]/30">
                <h5 className="font-bold text-neuera-dark mb-1 md:mb-2 text-sm md:text-base">Need a quick answer?</h5>
                <p className="text-slate-700 text-xs md:text-sm mb-3 md:mb-4">Check our FAQ section for common questions about our services and process.</p>
                <a href="/faq" className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-neuera-dark hover:text-neuera-orange transition-colors">
                    Visit FAQ <ArrowUpRight size={14} className="md:w-4 md:h-4" />
                </a>
             </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
