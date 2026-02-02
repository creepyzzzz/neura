import React from 'react';
import { ArrowUpRight, Heart, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-50 text-slate-900 pt-8 md:pt-20">
            {/* Main CTA Box */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12 md:mb-24">
                <Link to="/contact" className="block bg-[#BFA1F8] rounded-2xl md:rounded-[3.5rem] p-6 md:p-24 flex flex-col md:flex-row justify-between items-center relative overflow-hidden group transition-colors duration-500 hover:shadow-2xl">

                    {/* Text Content */}
                    <div className="relative z-10 max-w-3xl w-full text-center md:text-left">
                        <h2 className="text-neuera-dark font-display text-2xl md:text-[5.5rem] uppercase leading-[0.9] tracking-tight">
                            READY TO
                            <span className="inline-block align-middle mx-1 md:mx-4 transform -translate-y-0.5 md:-translate-y-2">
                                <div className="bg-white text-neuera-dark w-12 h-8 md:w-24 md:h-16 rounded-lg md:rounded-2xl rotate-[-6deg] flex items-center justify-center relative hover:rotate-0 hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg">
                                    <span className="text-base md:text-3xl">💬</span>
                                    <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 p-0.5 md:p-1 bg-white rounded-full">
                                        <Heart size={8} className="text-neuera-red fill-neuera-red md:w-[14px] md:h-[14px]" />
                                    </div>
                                </div>
                            </span>
                            BOOST YOUR BRAND'S <span className="text-neuera-orange italic font-serif">IMPACT</span> AND
                            ACHIEVE SIGNIFICANT GROWTH?
                        </h2>
                    </div>

                    {/* Big Button - Extraordinary Interaction */}
                    <div className="mt-8 md:mt-0 relative z-10 md:pl-12">
                        <button className="w-16 h-16 md:w-32 md:h-32 bg-neuera-orange rounded-full flex items-center justify-center transition-all duration-500 shadow-lg group-hover/btn:scale-105 hover:shadow-xl relative overflow-hidden min-w-[64px] min-h-[64px] md:min-w-[128px] md:min-h-[128px]">
                            <ArrowUpRight size={24} className="md:w-12 md:h-12 text-neuera-dark group-hover:rotate-45 transition-transform duration-500 stroke-[1.5]" />
                        </button>
                    </div>
                </Link>
            </div>

            {/* Links Section */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 pb-6 md:pb-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 mb-8 md:mb-20 border-b border-slate-200 pb-8 md:pb-16">

                    <div className="col-span-1 md:col-span-4 md:pr-8">
                        <Link to="/" className="flex items-center gap-2 font-display text-2xl md:text-3xl tracking-wider mb-4 md:mb-8 text-slate-900">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-neuera-red text-white flex items-center justify-center rounded-lg shadow-md">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="w-4 h-4 md:w-6 md:h-6">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            NEUERA
                        </Link>
                        <p className="text-xs md:text-base text-slate-600 leading-relaxed max-w-sm">
                            Follow us on social media to stay updated with the latest tips, trends, and insights in digital marketing.
                        </p>
                        <a href="mailto:hello@neuera.com" className="text-sm md:text-lg font-bold mt-4 md:mt-8 inline-block text-slate-900 hover:text-neuera-red transition-colors border-b-2 border-neuera-red/20 pb-1">hello@neuera.com</a>
                    </div>

                    <div className="col-span-1 md:col-span-2 md:col-start-7">
                        <h4 className="font-bold mb-3 md:mb-6 text-[10px] md:text-sm uppercase tracking-widest text-slate-900">Company</h4>
                        <ul className="space-y-2 md:space-y-4 text-xs md:text-sm text-slate-600 font-medium">
                            <li><Link to="/#services" className="hover:text-neuera-red transition-colors">Services</Link></li>
                            <li><Link to="/articles" className="hover:text-neuera-red transition-colors">Articles</Link></li>
                            <li><Link to="/contact" className="hover:text-neuera-red transition-colors">Contact Us</Link></li>
                            <li><Link to="/login" className="hover:text-neuera-red transition-colors">Login</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <h4 className="font-bold mb-3 md:mb-6 text-[10px] md:text-sm uppercase tracking-widest text-slate-900">Support</h4>
                        <ul className="space-y-2 md:space-y-4 text-xs md:text-sm text-slate-600 font-medium">
                            <li><Link to="/faq" className="hover:text-neuera-red transition-colors">FAQ</Link></li>
                            <li><Link to="/privacy" className="hover:text-neuera-red transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/contact" className="hover:text-neuera-red transition-colors">Help Center</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2 mt-4 md:mt-0">
                        <h4 className="font-bold mb-3 md:mb-6 text-[10px] md:text-sm uppercase tracking-widest text-slate-900">Connect</h4>
                        <ul className="space-y-2 md:space-y-4 text-xs md:text-sm text-slate-600 font-medium flex flex-row md:flex-col gap-4 md:gap-0">
                            <li><a href="#" className="hover:text-neuera-red transition-colors flex items-center gap-1 md:gap-2">Instagram <ArrowUpRight size={10} className="md:w-3 md:h-3" /></a></li>
                            <li><a href="#" className="hover:text-neuera-red transition-colors flex items-center gap-1 md:gap-2">Behance <ArrowUpRight size={10} className="md:w-3 md:h-3" /></a></li>
                            <li><a href="#" className="hover:text-neuera-red transition-colors flex items-center gap-1 md:gap-2">LinkedIn <ArrowUpRight size={10} className="md:w-3 md:h-3" /></a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-[9px] md:text-xs font-bold text-slate-500 uppercase tracking-wider gap-3 md:gap-0">
                    <p>© 2026 NEUERA AGENCY. INC</p>
                    <div className="flex gap-4 md:gap-8">
                        <Link to="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
                        <Link to="/privacy" className="hover:text-slate-900 transition-colors">Terms</Link>
                        <Link to="/" className="hover:text-slate-900 transition-colors">Sitemap</Link>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-slate-200/60 text-center">
                    <p className="text-[8px] md:text-[10px] text-slate-400 tracking-wide">
                        Disclaimer: Site Contents designed, developed, maintained and updated by{' '}
                        <a
                            href="https://epplicon.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neuera-red hover:text-neuera-orange transition-colors font-semibold hover:underline"
                        >
                            Epplicon Technologies
                        </a>
                        .
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;