import React, { useState, useEffect } from 'react';
import { ArrowRight, Lock, Mail, User, Eye, EyeOff, Sparkles, Zap, Shield, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LoginProps {
  isSignup?: boolean;
}

const Login: React.FC<LoginProps> = ({ isSignup = false }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    { icon: <Zap size={24} />, text: "Lightning Fast" },
    { icon: <Shield size={24} />, text: "Secure & Safe" },
    { icon: <Rocket size={24} />, text: "Scale Instantly" },
  ];

  return (
    <div className="min-h-screen flex overflow-hidden bg-slate-50">
      {/* Left Side: Premium Visual Experience */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated Background Orbs with Parallax */}
        <div 
          className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-purple-500/30 rounded-full blur-[150px] mix-blend-screen transition-transform duration-100 ease-out"
          style={{ transform: `translate(${mousePosition.x * -1.5}px, ${mousePosition.y * -1.5}px)` }}
        />
        <div 
          className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-500/30 rounded-full blur-[140px] mix-blend-screen transition-transform duration-100 ease-out"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-400/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/10 rounded-3xl rotate-12 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-32 right-32 w-24 h-24 border-2 border-neuera-orange/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-neuera-orange/20 rounded-2xl rotate-45 animate-float" style={{ animationDelay: '4s' }} />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-16 w-full">
          {/* Top Section */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3 mb-16 group">
              <div className="w-12 h-12 bg-neuera-orange rounded-xl flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-500 shadow-lg">
                <Sparkles className="text-slate-900" size={24} />
              </div>
              <span className="font-display text-2xl tracking-wider text-white">NEUERA</span>
            </Link>

            <div className="space-y-8">
              <div>
                <h1 className="text-white font-display text-7xl uppercase leading-[0.9] mb-6">
                  {isSignup ? "Start Your" : "Welcome"}
                  <br />
                  <span className="text-neuera-orange">{isSignup ? "Journey" : "Back"}</span>
                </h1>
                <p className="text-white/70 text-xl font-light leading-relaxed max-w-md">
                  {isSignup 
                    ? "Join thousands of innovators transforming their digital presence with Neuera's cutting-edge solutions."
                    : "Continue your journey with Neuera. Access your dashboard and unlock unlimited possibilities."}
                </p>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-4">
                {features.map((feature, idx) => (
                  <div 
                    key={idx}
                    className="group px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-neuera-orange group-hover:scale-110 transition-transform">
                        {feature.icon}
                      </div>
                      <span className="text-white font-medium text-sm">{feature.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="space-y-6">
            <div className="flex gap-4">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white text-xl font-bold hover:scale-110 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest">
              © 2024 Neuera Inc. All rights reserved.
            </p>
          </div>
        </div>

        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Right Side: Modern Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-12 lg:p-20 bg-slate-50 relative overflow-hidden">
        {/* Subtle Background Effects */}
        <div className="absolute top-0 right-0 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-purple-200/20 rounded-full blur-[48px] md:blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[160px] md:w-[400px] h-[160px] md:h-[400px] bg-blue-200/20 rounded-full blur-[40px] md:blur-[100px] pointer-events-none" />

        <div className="w-full max-w-md relative z-10">
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-neuera-orange animate-pulse"></div>
              <span className="text-neuera-orange font-bold tracking-widest text-[10px] md:text-xs uppercase">
                {isSignup ? "Create Account" : "Sign In"}
              </span>
            </div>
            <h2 className="text-slate-900 font-display text-3xl md:text-6xl uppercase leading-[0.9] mb-3 md:mb-4">
              {isSignup ? "Join Us" : "Welcome"}
              <br />
              <span className="text-slate-400">Today</span>
            </h2>
            <p className="text-slate-600 font-medium text-sm md:text-base">
              {isSignup 
                ? "Enter your details to create your account and get started."
                : "Enter your credentials to access your account."}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4 md:space-y-6">
            {isSignup && (
              <div className="group">
                <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-900 mb-2 md:mb-3 ml-1">
                  Full Name
                </label>
                <div className="relative">
                  <div className={`absolute left-3 md:left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                    isFocused === 'name' ? 'text-neuera-orange scale-110' : 'text-slate-400'
                  }`}>
                    <User size={18} className="md:w-5 md:h-5" />
                  </div>
                  <input 
                    type="text" 
                    onFocus={() => setIsFocused('name')}
                    onBlur={() => setIsFocused(null)}
                    className="w-full bg-white border-2 border-slate-200 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 pl-11 md:pl-14 outline-none focus:border-neuera-orange focus:bg-slate-50 transition-all duration-300 font-medium text-sm md:text-base text-slate-900 placeholder:text-slate-400 hover:border-slate-300"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            )}

            <div className="group">
              <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-900 mb-2 md:mb-3 ml-1">
                Email Address
              </label>
              <div className="relative">
                <div className={`absolute left-3 md:left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isFocused === 'email' ? 'text-neuera-orange scale-110' : 'text-slate-400'
                }`}>
                  <Mail size={18} className="md:w-5 md:h-5" />
                </div>
                <input 
                  type="email" 
                  onFocus={() => setIsFocused('email')}
                  onBlur={() => setIsFocused(null)}
                  className="w-full bg-white border-2 border-slate-200 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 pl-11 md:pl-14 outline-none focus:border-neuera-orange focus:bg-slate-50 transition-all duration-300 font-medium text-sm md:text-base text-slate-900 placeholder:text-slate-400 hover:border-slate-300"
                  placeholder="hello@neuera.com"
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-900 mb-2 md:mb-3 ml-1">
                Password
              </label>
              <div className="relative">
                <div className={`absolute left-3 md:left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isFocused === 'password' ? 'text-neuera-orange scale-110' : 'text-slate-400'
                }`}>
                  <Lock size={18} className="md:w-5 md:h-5" />
                </div>
                <input 
                  type={showPassword ? "text" : "password"}
                  onFocus={() => setIsFocused('password')}
                  onBlur={() => setIsFocused(null)}
                  className="w-full bg-white border-2 border-slate-200 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 pl-11 md:pl-14 pr-11 md:pr-14 outline-none focus:border-neuera-orange focus:bg-slate-50 transition-all duration-300 font-medium text-sm md:text-base text-slate-900 placeholder:text-slate-400 hover:border-slate-300"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 transition-colors min-w-[32px] min-h-[32px] flex items-center justify-center"
                >
                  {showPassword ? <EyeOff size={18} className="md:w-5 md:h-5" /> : <Eye size={18} className="md:w-5 md:h-5" />}
                </button>
              </div>
            </div>

            {!isSignup && (
              <div className="flex justify-end">
                <a href="#" className="text-xs md:text-sm font-bold text-slate-600 hover:text-neuera-orange transition-colors">
                  Forgot Password?
                </a>
              </div>
            )}

            <button 
              type="submit"
              className="w-full bg-slate-900 text-white rounded-xl md:rounded-2xl py-4 md:py-5 font-bold uppercase tracking-wide text-sm hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl flex items-center justify-center gap-2 md:gap-3 group relative overflow-hidden min-h-[44px]"
            >
              <span className="relative z-10 flex items-center gap-2 md:gap-3">
                {isSignup ? "Create Account" : "Sign In"}
                <ArrowRight size={16} className="md:w-[18px] md:h-[18px] group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neuera-orange to-neuera-orange/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-slate-200"></div>
            <span className="text-slate-500 text-xs font-medium uppercase">Or</span>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
            <button className="px-4 md:px-6 py-2 md:py-3 bg-white border-2 border-slate-200 rounded-lg md:rounded-xl font-medium text-xs md:text-sm text-slate-900 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-1.5 md:gap-2 min-h-[44px]">
              <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button className="px-4 md:px-6 py-2 md:py-3 bg-white border-2 border-slate-200 rounded-lg md:rounded-xl font-medium text-xs md:text-sm text-slate-900 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-1.5 md:gap-2 min-h-[44px]">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </button>
          </div>

          {/* Footer Link */}
          <div className="text-center">
            <p className="text-slate-600 font-medium text-xs md:text-sm">
              {isSignup ? "Already have an account?" : "Don't have an account?"}{' '}
              <Link 
                to={isSignup ? "/login" : "/signup"} 
                className="text-slate-900 font-bold hover:text-neuera-orange transition-colors underline decoration-2 decoration-neuera-orange underline-offset-4"
              >
                {isSignup ? "Sign In" : "Sign Up"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
