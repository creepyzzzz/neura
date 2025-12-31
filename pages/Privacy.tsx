import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FCF9] pt-20 md:pt-32 pb-16 md:pb-24 text-neuera-dark">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        
        <header className="mb-12 md:mb-20 border-b border-gray-200 pb-8 md:pb-12">
           <p className="text-neuera-red font-bold tracking-widest text-[10px] md:text-xs uppercase mb-3 md:mb-4">Last Updated: October 24, 2024</p>
           <h1 className="font-display text-4xl md:text-8xl uppercase leading-[0.9]">
             Privacy <br/> Policy
           </h1>
        </header>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
           {/* Sidebar Navigation (Sticky) */}
           <div className="hidden md:block w-64 shrink-0">
              <div className="sticky top-32">
                 <p className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-400">Contents</p>
                 <ul className="space-y-4 text-sm font-medium text-gray-500">
                    <li><a href="#collection" className="hover:text-neuera-dark transition-colors">1. Data Collection</a></li>
                    <li><a href="#usage" className="hover:text-neuera-dark transition-colors">2. How We Use Data</a></li>
                    <li><a href="#sharing" className="hover:text-neuera-dark transition-colors">3. Data Sharing</a></li>
                    <li><a href="#security" className="hover:text-neuera-dark transition-colors">4. Security</a></li>
                    <li><a href="#cookies" className="hover:text-neuera-dark transition-colors">5. Cookies</a></li>
                 </ul>
              </div>
           </div>

           {/* Content */}
           <div className="prose prose-sm md:prose-lg prose-headings:font-display prose-headings:uppercase prose-headings:text-neuera-dark prose-p:text-gray-600 prose-p:font-light prose-p:leading-relaxed max-w-none">
              
              <p className="lead text-base md:text-xl text-neuera-dark font-medium">
                 At Neuera, we value your privacy and are committed to protecting your personal data. This policy outlines our practices regarding the collection, use, and disclosure of your information.
              </p>

              <div id="collection" className="mt-8 md:mt-16">
                 <h2 className="text-2xl md:text-3xl mb-4 md:mb-6">1. Data Collection</h2>
                 <p className="text-sm md:text-lg">
                    We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or request customer support. This may include your name, email address, phone number, and any other information you choose to provide.
                 </p>
                 <p className="text-sm md:text-lg">
                    We also automatically collect certain information when you access our services, including your IP address, browser type, operating system, and usage data.
                 </p>
              </div>

              <div id="usage" className="mt-8 md:mt-16">
                 <h2 className="text-2xl md:text-3xl mb-4 md:mb-6">2. How We Use Data</h2>
                 <p className="text-sm md:text-lg">
                    We use the information we collect to provide, maintain, and improve our services. Specifically, we use your data to:
                 </p>
                 <ul className="list-disc pl-4 md:pl-5 space-y-1.5 md:space-y-2 mt-3 md:mt-4 text-sm md:text-lg text-gray-600 font-light">
                    <li>Process transactions and send related information.</li>
                    <li>Send you technical notices, updates, security alerts, and support messages.</li>
                    <li>Respond to your comments, questions, and requests.</li>
                    <li>Communicate with you about products, services, offers, and events.</li>
                 </ul>
              </div>

               <div id="sharing" className="mt-8 md:mt-16">
                 <h2 className="text-2xl md:text-3xl mb-4 md:mb-6">3. Data Sharing</h2>
                 <p className="text-sm md:text-lg">
                    We do not share your personal information with third parties except as described in this policy. We may share your information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.
                 </p>
              </div>

              <div id="security" className="mt-8 md:mt-16">
                 <h2 className="text-2xl md:text-3xl mb-4 md:mb-6">4. Security</h2>
                 <p className="text-sm md:text-lg">
                    We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no internet transmission is completely secure, and we cannot guarantee the security of your data.
                 </p>
              </div>

               <div id="cookies" className="mt-8 md:mt-16">
                 <h2 className="text-2xl md:text-3xl mb-4 md:mb-6">5. Cookies</h2>
                 <p className="text-sm md:text-lg">
                    We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                 </p>
              </div>

           </div>
        </div>

      </div>
    </div>
  );
};

export default Privacy;