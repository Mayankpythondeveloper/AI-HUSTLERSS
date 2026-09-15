'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500 selection:text-black">
      
      {/* Navbar with Original Logo & Mobile Menu Support */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo linking back to Home */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.jpeg" alt="AI HUSTLERSS Logo" className="h-20 w-auto rounded-md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
            <Link href="/newsletters-list" className="hover:text-orange-500 transition-colors">Newsletters</Link>
            <Link href="/about" className="hover:text-orange-500 transition-colors">Archieve</Link>
            <Link href="/resources" className="hover:text-orange-500 transition-colors">Resources</Link>
          </nav>

          {/* Desktop Subscribe Button */}
          <div className="hidden md:block">
            <Link href="/#tools" className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-5 py-2.5 rounded-full transition-all shadow-[0_0_20px_rgba(255,87,34,0.4)]">
              Subscribe for free
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none bg-white/5 border border-white/10 p-2 rounded-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/95 border-b border-white/10 py-6 px-6 flex flex-col space-y-4 md:hidden backdrop-blur-xl shadow-2xl">
            <Link 
              href="/newsletters-list" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-orange-500 font-medium text-base py-2 border-b border-white/5"
            >
              Newsletters
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-orange-500 font-medium text-base py-2 border-b border-white/5"
            >
              Archieve
            </Link>
            <Link 
              href="/resources" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-orange-500 font-medium text-base py-2 border-b border-white/5"
            >
              Resources
            </Link>
            <div className="pt-2">
              <Link 
                href="/#tools" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-orange-500 hover:bg-orange-600 text-black font-bold px-5 py-3 rounded-full transition-all shadow-[0_0_20px_rgba(255,87,34,0.4)]"
              >
                Subscribe for free
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Privacy Policy Content Section */}
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Privacy Policy</h1>
        <p className="text-gray-400 mb-8 text-sm">Last updated: September 15, 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">1. Introduction</h2>
            <p>
              Welcome to AI Hustlerss. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">2. Data We Collect</h2>
            <p className="mb-2">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li><strong className="text-gray-200">Identity Data:</strong> Includes email address when you subscribe to our newsletters.</li>
              <li><strong className="text-gray-200">Technical Data:</strong> Includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
              <li><strong className="text-gray-200">Usage Data:</strong> Includes information about how you use our website, products and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400 mt-2">
              <li>To send you our weekly AI newsletters and updates.</li>
              <li>To manage our relationship with you and notify you about changes to our terms.</li>
              <li>To improve our website, services, and user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-3">4. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please feel free to reach out to us through our platform.
            </p>
          </section>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} AI Hustlerss. All rights reserved.</p>
      </footer>
    </div>
  );
}