'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Cpu, Rocket, ShieldCheck, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';
import image from "next/image";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [titleCount, setTitleCount] = useState(0);
  const [subtitleCount, setSubtitleCount] = useState(0);

  const [emailInput, setEmailInput] = useState('');
const [statusMessage, setStatusMessage] = useState('');
const [loading, setLoading] = useState(false);

const handleSubscribe = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatusMessage('');

  try {
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: emailInput }),
    });

    const data = await res.json();
    if (res.ok) {
      setStatusMessage('🎉 Redirecting...');
      setTimeout(() => {
        router.push('/thank-you');
      }, 1000);
    } else {
      setStatusMessage(data.error || 'Something went wrong.');
    }
  } catch (err) {
    setStatusMessage('Network error. Please try again.');
  } finally {
    setLoading(false);
  }
};

  const mainText = "AI HUSTLERSS";
  const subText = "AUTONOMOUS AI NEWSLETTER ⚡ 2026";

  useEffect(() => {
    // 1. Type main title letter by letter
    const titleInterval = setInterval(() => {
      setTitleCount((prev) => {
        if (prev < mainText.length) {
          return prev + 1;
        } else {
          clearInterval(titleInterval);
          return prev;
        }
      });
    }, 90);

    // 2. Type subtitle after main title finishes
    const subTimeout = setTimeout(() => {
      const subInterval = setInterval(() => {
        setSubtitleCount((prev) => {
          if (prev < subText.length) {
            return prev + 1;
          } else {
            clearInterval(subInterval);
            return prev;
          }
        });
      }, 45);
      return () => clearInterval(subInterval);
    }, mainText.length * 90 + 300);

    // 3. Finish intro and reveal main website completely after 4.5 seconds
    const timer = setTimeout(() => {
      setIntroDone(true);
    }, 4500);

    if (window.location.hostname.includes('newsletter')) {
      const ctaSection = document.getElementById('tools');
      if (ctaSection) {
        ctaSection.scrollIntoView({ behavior: 'smooth' });
      }
    }

    return () => {
      clearInterval(titleInterval);
      clearTimeout(subTimeout);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500 selection:text-black relative overflow-x-hidden">
      
      {/* CINEMATIC INTRO SCREEN WITH NEON LASER & PARTICLE EXPLOSION */}
{!introDone && (
  <div className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center overflow-hidden">
    
    {/* Global Keyframes for Laser and Particle Animation */}
    <style dangerouslySetInnerHTML={{ __html: `
      @keyframes laserDrop {
        0% { transform: translateY(-100vh); opacity: 1; height: 150px; }
        70% { transform: translateY(0); opacity: 1; height: 80px; }
        85% { transform: translateY(0); opacity: 0.8; height: 20px; }
        100% { transform: translateY(0); opacity: 0; height: 0px; }
      }
      @keyframes particleBurst {
        0% { transform: scale(0.1); opacity: 1; }
        50% { transform: scale(1.8); opacity: 0.8; filter: blur(2px); }
        100% { transform: scale(3.5); opacity: 0; filter: blur(8px); }
      }
      @keyframes logoReveal {
        0% { transform: scale(0.3); opacity: 0; filter: brightness(2); }
        70% { transform: scale(1.05); opacity: 1; filter: brightness(1.2); }
        100% { transform: scale(1); opacity: 1; filter: brightness(1); }
      }
      .animate-laser {
        animation: laserDrop 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
      }
      .animate-burst {
        animation: particleBurst 0.7s ease-out 0.7s forwards;
      }
      .animate-logo-reveal {
        animation: logoReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
      }
    `}} />

    {/* Neon Laser Beam falling from top */}
    <div className="absolute top-0 w-1 bg-gradient-to-b from-transparent via-orange-400 to-orange-600 shadow-[0_0_25px_#ff5722] animate-laser pointer-events-none z-10"></div>

    {/* Logo Container with Particle Explosion & Reveal */}
    <div className="relative mb-8 flex flex-col items-center">
      
      {/* Particle Explosion Ring on Impact */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 animate-burst"></div>
        <div className="absolute w-36 h-36 rounded-full border-2 border-orange-400 opacity-0 animate-burst" style={{ animationDelay: '0.65s' }}></div>
      </div>

      {/* Glowing Logo emerging from the explosion */}
      <img 
        src="/logo.jpeg" 
        alt="AI HUSTLERSS Logo" 
        className="h-28 md:h-36 w-auto object-contain rounded-2xl shadow-[0_0_50px_rgba(255,87,34,0.8)] border border-orange-500/30 opacity-0 animate-logo-reveal"
      />
    </div>

    {/* Main Title Typing Effect */}
    <div className="text-3xl md:text-5xl font-extrabold tracking-widest text-white font-mono min-h-[45px] flex items-center">
      <span>{mainText.slice(0, titleCount)}</span>
      {titleCount < mainText.length && (
        <span className="animate-ping ml-1 w-2.5 h-6 bg-orange-500 inline-block"></span>
      )}
    </div>

    {/* Subtitle Typing Effect */}
    <div className="mt-4 text-xs md:text-sm tracking-[0.3em] text-orange-500 font-semibold uppercase font-mono min-h-[24px] flex items-center">
      <span>{subText.slice(0, subtitleCount)}</span>
      {titleCount >= mainText.length && subtitleCount < subText.length && (
        <span className="animate-ping ml-1 w-2 h-4 bg-orange-500 inline-block"></span>
      )}
    </div>

  </div>
)}
      
      {/* HEADER / NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
  <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
    
    {/* Original Logo Size & Position */}
    <div className="flex items-center space-x-2">
      <img src="/logo.jpeg" alt="AI HUSTLERSS Logo" className="h-20 w-auto rounded-md" />
    </div>

    {/* Desktop Navigation Links */}
    <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
      <a href="/newsletters-list" className="hover:text-orange-500 transition-colors">Newsletters</a>
      <a href="/explore" className="hover:text-orange-500 transition-colors">Archieve</a>
      <a href="/resources" target="_blank" className="hover:text-orange-500 transition-colors">Resources</a>
    </nav>

    {/* Desktop Subscribe Button */}
    <div className="hidden md:block">
      <a href="subscribe" target="_blank" className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-5 py-2.5 rounded-full transition-all shadow-[0_0_20px_rgba(255,87,34,0.4)]">
        Subscribe for free
      </a>
    </div>

    {/* Mobile Menu Toggle Button (Appears only on small screens) */}
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
      <a 
        href="/newsletters-list" 
        onClick={() => setMobileMenuOpen(false)}
        className="text-gray-300 hover:text-orange-500 font-medium text-base py-2 border-b border-white/5"
      >
        Newsletters
      </a>
      <a 
        href="/explore" 
        onClick={() => setMobileMenuOpen(false)}
        className="text-gray-300 hover:text-orange-500 font-medium text-base py-2 border-b border-white/5"
      >
        Archieve
      </a>
      <a 
        href="/resources" 
        target="_blank"
        onClick={() => setMobileMenuOpen(false)}
        className="text-gray-300 hover:text-orange-500 font-medium text-base py-2 border-b border-white/5"
      >
        Resources
      </a>
      <div className="pt-2">
        <a 
          href="subscribe" 
          target="_blank"
          onClick={() => setMobileMenuOpen(false)}
          className="block text-center bg-orange-500 hover:bg-orange-600 text-black font-bold px-5 py-3 rounded-full transition-all shadow-[0_0_20px_rgba(255,87,34,0.4)]"
        >
          Subscribe for free
        </a>
      </div>
    </div>
  )}
</header>

      {/* HERO SECTION WITH BEEHIIV EMBED CONTAINER */}
<section className="pt-24 pb-20 md:pt-36 md:pb-32 px-6 relative overflow-hidden">
  
  {/* Background Logo Watermark */}
  <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none z-0">
    <img src="/logo.jpeg" alt="Watermark" className="w-[1100px] h-auto object-contain blur-[2px]" />
  </div>

  <div className="max-w-5xl mx-auto text-center relative z-10">
    
    {/* Top Badge */}
    <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-orange-400 mb-6 shadow-[0_0_15px_rgba(255,87,34,0.2)]">
      <Zap size={14} />
      <span>POWERING THE NEXT-GEN AI REVOLUTION</span>
    </div>

    {/* Main Heading */}
    <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
      Build, Scale and Monetize with <span className="text-orange-500">AI HUSTLERSS</span>
    </h1>

    {/* Subtitle */}
    <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-medium drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
      Get the sharpest AI insights, cutting-edge workflows, and growth blueprints delivered straight to your inbox.
    </p>

    {/* CUSTOM DESIGNED HERO EMAIL BOX CONNECTED TO BACKEND */}
<div className="max-w-xl mx-auto mb-4">
  <form onSubmit={handleSubscribe} className="p-2 bg-white/5 border border-white/15 rounded-2xl backdrop-blur-xl shadow-[0_0_30px_rgba(255,87,34,0.2)] flex flex-col sm:flex-row gap-3">
    <input 
      type="email" 
      required
      value={emailInput}
      onChange={(e) => setEmailInput(e.target.value)}
      placeholder="Enter your email address..." 
      className="bg-black/60 border border-white/10 px-5 py-4 rounded-xl text-white outline-none focus:border-orange-500 w-full placeholder:text-gray-500 text-sm md:text-base"
    />
    <button 
      type="submit"
      disabled={loading}
      className="bg-orange-500 hover:bg-orange-600 text-black font-extrabold px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(255,87,34,0.4)] hover:scale-105 whitespace-nowrap text-sm md:text-base flex items-center justify-center space-x-2"
    >
      <span>{loading ? 'Subscribing...' : 'Subscribe'}</span>
      <Zap size={16} />
    </button>
  </form>

  {/* Status Message Display */}
  {statusMessage && (
    <p className={`mt-3 text-sm font-semibold ${statusMessage.includes('Success') ? 'text-green-400' : 'text-orange-400'}`}>
      {statusMessage}
    </p>
  )}
</div>

    {/* Preserved Buttons Container */}
    <div className="flex flex-col items-center justify-center gap-4 mt-4">
      
      {/* Explore AI Tools & Join the Hustle */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
        
        <a href="/resources" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:scale-105 flex items-center justify-center space-x-2">
          <span>Explore AI Tools</span>
          <ArrowRight size={18} />
        </a>

        <a href="#tools" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/15 flex items-center justify-center">
          Join the Hustle
        </a>
      </div>

      {/* Follow on LinkedIn Button */}
      <a 
        href="https://www.linkedin.com/company/ai-hustlerrss/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-[#0A66C2] hover:bg-[#095196] text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 shadow-lg hover:scale-105 inline-flex items-center justify-center space-x-2"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.95h2.79v8.37H6.46v-8.37M7.85 6.25a1.62 1.62 0 1 0 1.62 1.62c-.01-.9-.73-1.61-1.62-1.62z"/>
        </svg>
        <span>Follow on LinkedIn</span>
      </a>

    </div>
  </div>
</section>    
    
      {/* SLIDING STACK MARQUEE SECTION */}
      <div style={{ fontSize: '11px', letterSpacing: '1.5px', marginBottom: '15px', fontWeight: 'bold', textAlign: 'center', transition: 'color 0.3s ease-in-out' }}>
          LEARN, DEPLOY, & SCALE WITH BLEEDING-EDGE PRODUCTION TOOLS
      </div>
      <div className="w-full bg-black py-6 border-y border-white/10 overflow-hidden relative">
        <div className="flex animate-marquee space-x-8 items-center text-gray-300 text-sm font-medium tracking-wide">
          <div className="flex items-center space-x-8 shrink-0">
            <span className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"><span>🔥</span> <span>ChatGPT & GPT-4o</span></span>
            <span className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"><span>⚡</span> <span>Cloud GPU Orchestration</span></span>
            <span className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"><span>🚀</span> <span>Claude 3.7 Sonnet</span></span>
            <span className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"><span>🤖</span> <span>ElevenLabs Voice Agents</span></span>
            <span className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"><span>✨</span> <span>Runway Gen-3 Alpha</span></span>
            <span className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"><span>🌐</span> <span>Manus Autonomous Agents</span></span>
          </div>
          <div className="flex items-center space-x-8 shrink-0" aria-hidden="true">
            <span className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"><span>🔥</span> <span>ChatGPT & GPT-4o</span></span>
            <span className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"><span>⚡</span> <span>Cloud GPU Orchestration</span></span>
            <span className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"><span>🚀</span> <span>Claude 3.7 Sonnet</span></span>
            <span className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"><span>🤖</span> <span>ElevenLabs Voice Agents</span></span>
            <span className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"><span>✨</span> <span>Runway Gen-3 Alpha</span></span>
            <span className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"><span>🌐</span> <span>Manus Autonomous Agents</span></span>
          </div>
        </div>
      </div>
      

      {/* NEWSLETTER ARCHIVE & SUBSCRIPTION SECTION */}
      <section id="tools" className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The AI Hustlers Newsletter</h2>
          </div>

          

          

          {/* Past Newsletters Archive List */}
          <div className="mt-12">
            <div className="w-full mb-8">
              <img 
                src="/newsletter-banner.jpg" 
                alt="AI Moves Fast - We Keep You Ahead" 
                className="w-full h-auto rounded-2xl shadow-lg border border-white/10 object-cover"
              />

              {/* SEARCH POSTS & CATEGORY TAGS SECTION */}
              <div className="max-w-5xl mx-auto mb-12 px-4 mt-8">
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search posts..."
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-900/80 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-all shadow-inner text-sm md:text-base"
                  />
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {['All', 'LLMs', 'Make Money with AI', 'Premium AI Deals', 'AI Tools', 'AI Jobs', 'Prompt Engineering', 'AI Researches', 'AI Reports', 'AI Books', 'AI Startups', 'Open-Source', 'AI Automations', 'AI Workflows'].map((tag, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 border ${
                        index === 0 
                          ? 'bg-orange-600 border-orange-500 text-white shadow-lg shadow-orange-600/20' 
                          : 'bg-gray-900/60 border-white/10 text-gray-300 hover:border-orange-500/40 hover:text-white hover:bg-gray-900'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div> 

            <div className="space-y-4">       
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginTop: '20px' }}>
                
                {/* Newsletter Item 1 */}
                <div style={{ backgroundColor: 'var(--card-bg, #ffffff)', border: 'var(--card-border, 1px solid rgba(15, 23, 42, 0.08))', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--soft-shadow, 0 4px 12px rgba(15, 23, 42, 0.06))', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '100%', height: '160px', backgroundColor: '#0f172a', position: 'relative' }}>
                    <img src="/multiagent2.jpeg" alt="Edition 01" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: '#ff5722', fontWeight: 'bold', textTransform: 'uppercase' }}>Edition #01 • August 2026</span>
                      <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-color)', margin: '8px 0' }}>Mastering Multi-Agent AI Workflows for Solopreneurs</h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-color)', opacity: 0.8 }}>How to automate 80% of your digital business using autonomous agents.</p>
                    </div>
                    <a href="/newsletter/edition-4" style={{ display: 'inline-block', marginTop: '16px', padding: '8px 16px', backgroundColor: 'rgba(255, 87, 34, 0.1)', color: '#ff5722', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none', width: 'fit-content' }}>Read Issue →</a>
                  </div>
                </div>

                {/* Newsletter Item 2 */}
                <div style={{ backgroundColor: 'var(--card-bg, #ffffff)', border: 'var(--card-border, 1px solid rgba(15, 23, 42, 0.08))', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--soft-shadow, 0 4px 12px rgba(15, 23, 42, 0.06))', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '100%', height: '160px', backgroundColor: '#0f172a', position: 'relative' }}>
                    <img src="/Cyber-security.jpeg" alt="Edition 02" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: '#ff5722', fontWeight: 'bold', textTransform: 'uppercase' }}>Edition #02 • July 2026</span>
                      <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-color)', margin: '8px 0' }}>Coreum Bridge Exploit: 200K XRP Stolen & Price Slips Below $1.</h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-color)', opacity: 0.8 }}>Copy-paste prompts that scale your content creation and marketing funnels.</p>
                    </div>
                    <a href="/newsletter/edition-3" style={{ display: 'inline-block', marginTop: '16px', padding: '8px 16px', backgroundColor: 'rgba(255, 87, 34, 0.1)', color: '#ff5722', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none', width: 'fit-content' }}>Read Issue →</a>
                  </div>
                </div>

                {/* Newsletter Item 3 */}
                <div style={{ backgroundColor: 'var(--card-bg, #ffffff)', border: 'var(--card-border, 1px solid rgba(15, 23, 42, 0.08))', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--soft-shadow, 0 4px 12px rgba(15, 23, 42, 0.06))', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '100%', height: '160px', backgroundColor: '#0f172a', position: 'relative' }}>
                    <img src="/nextjs.jpeg" alt="Edition 03" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: '#ff5722', fontWeight: 'bold', textTransform: 'uppercase' }}>Edition #03 • July 2026</span>
                      <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-color)', margin: '8px 0' }}>Building Modern Web Apps with Next.js & Tailwind</h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-color)', opacity: 0.8 }}>A complete architectural blueprint for launching fast developer tools.</p>
                    </div>
                    <a href="/newsletter/edition-2" style={{ display: 'inline-block', marginTop: '16px', padding: '8px 16px', backgroundColor: 'rgba(255, 87, 34, 0.1)', color: '#ff5722', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none', width: 'fit-content' }}>Read Issue →</a>
                  </div>
                </div>

                {/* Newsletter Item 4 */}
                <div style={{ backgroundColor: 'var(--card-bg, #ffffff)', border: 'var(--card-border, 1px solid rgba(15, 23, 42, 0.08))', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--soft-shadow, 0 4px 12px rgba(15, 23, 42, 0.06))', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '100%', height: '160px', backgroundColor: '#0f172a', position: 'relative' }}>
                    <img src="/Edition5.jpeg" alt="Edition 04" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: '#ff5722', fontWeight: 'bold', textTransform: 'uppercase' }}>Edition #04 • August 2026</span>
                      <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-color)', margin: '8px 0' }}>AI FIRE | SPARK INTRO OFFER | 2026 PERFORMANCE KICKOFF</h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-color)', opacity: 0.8 }}>The Super Bowl is over, now it's time for your MVP season. Introducing the "Spark" Tier for a sensitive economic climate.</p>
                    </div>
                    <a href="/newsletter/edition-5" style={{ display: 'inline-block', marginTop: '16px', padding: '8px 16px', backgroundColor: 'rgba(255, 87, 34, 0.1)', color: '#ff5722', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none', width: 'fit-content' }}>Read Issue →</a>
                  </div>
                </div>

                {/* Newsletter Item 5 */}
                <div style={{ backgroundColor: 'var(--card-bg, #ffffff)', border: 'var(--card-border, 1px solid rgba(15, 23, 42, 0.08))', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--soft-shadow, 0 4px 12px rgba(15, 23, 42, 0.06))', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '100%', height: '160px', backgroundColor: '#0f172a', position: 'relative' }}>
                    <img src="/kimmik3.jpeg" alt="Edition 05" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: '#ff5722', fontWeight: 'bold', textTransform: 'uppercase' }}>Edition #05 • August 2026</span>
                      <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-color)', margin: '8px 0' }}>🧠 Everyone Says Kimi K3 is 'Open'. I Checked What It Truly Takes to Run It</h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-color)', opacity: 0.8 }}>“Open” sounds simple right? After looking deeper, I found what it truly takes.</p>
                    </div>
                    <a href="/newsletter/edition-6" style={{ display: 'inline-block', marginTop: '16px', padding: '8px 16px', backgroundColor: 'rgba(255, 87, 34, 0.1)', color: '#ff5722', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none', width: 'fit-content' }}>Read Issue →</a>
                  </div>
                </div>

                {/* Newsletter Item 6 */}
                <div style={{ backgroundColor: 'var(--card-bg, #ffffff)', border: 'var(--card-border, 1px solid rgba(15, 23, 42, 0.08))', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--soft-shadow, 0 4px 12px rgba(15, 23, 42, 0.06))', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '100%', height: '160px', backgroundColor: '#0f172a', position: 'relative' }}>
                    <img src="/aimarket.jpeg" alt="Edition 06" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: '#ff5722', fontWeight: 'bold', textTransform: 'uppercase' }}>Edition #06 • August 2026</span>
                      <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-color)', margin: '8px 0' }}>📉 "Entry-Level" is Lying to You. Here's What the AI Job Market Looks Like</h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-color)', opacity: 0.8 }}>AI split the job market into 2 tracks. Find out where companies are investing now.</p>
                    </div>
                    <a href="/newsletter/edition-7" style={{ display: 'inline-block', marginTop: '16px', padding: '8px 16px', backgroundColor: 'rgba(255, 87, 34, 0.1)', color: '#ff5722', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none', width: 'fit-content' }}>Read Issue →</a>
                  </div>
                </div>

                {/* Newsletter Item 7 */}
                <div style={{ backgroundColor: 'var(--card-bg, #ffffff)', border: 'var(--card-border, 1px solid rgba(15, 23, 42, 0.08))', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--soft-shadow, 0 4px 12px rgba(15, 23, 42, 0.06))', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '100%', height: '160px', backgroundColor: '#0f172a', position: 'relative' }}>
                    <img src="/hiddenaibills.jpeg" alt="Edition 07" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: '#ff5722', fontWeight: 'bold', textTransform: 'uppercase' }}>Edition #07 • August 2026</span>
                      <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-color)', margin: '8px 0' }}>💸 Big Tech’s Hidden $3T AI Bill</h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-color)', opacity: 0.8 }}>D-DAY ALERT: Live AI Agent Team workshop today!</p>
                    </div>
                    <a href="/newsletter/edition-8" style={{ display: 'inline-block', marginTop: '16px', padding: '8px 16px', backgroundColor: 'rgba(255, 87, 34, 0.1)', color: '#ff5722', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none', width: 'fit-content' }}>Read Issue →</a>
                  </div>
                </div>

                {/* Newsletter Item 8 */}
                <div style={{ backgroundColor: 'var(--card-bg, #ffffff)', border: 'var(--card-border, 1px solid rgba(15, 23, 42, 0.08))', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--soft-shadow, 0 4px 12px rgba(15, 23, 42, 0.06))', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '100%', height: '160px', backgroundColor: '#0f172a', position: 'relative' }}>
                    <img src="/flow2.jpeg" alt="Edition 08" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: '#ff5722', fontWeight: 'bold', textTransform: 'uppercase' }}>Edition #08 • August 2026</span>
                      <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-color)', margin: '8px 0' }}>🎥 FREE Claude Prompt That AUTO Turns Any Idea Into a VOX-Style Video</h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-color)', opacity: 0.8 }}>This workflow turns one idea into a Vox-style animated video using 4 tools easily.</p>
                    </div>
                    <a href="/newsletter/edition-9" style={{ display: 'inline-block', marginTop: '16px', padding: '8px 16px', backgroundColor: 'rgba(255, 87, 34, 0.1)', color: '#ff5722', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none', width: 'fit-content' }}>Read Issue →</a>
                  </div>
                </div>

                {/* Newsletter Item 9 */}
                <div style={{ backgroundColor: 'var(--card-bg, #ffffff)', border: 'var(--card-border, 1px solid rgba(15, 23, 42, 0.08))', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--soft-shadow, 0 4px 12px rgba(15, 23, 42, 0.06))', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '100%', height: '160px', backgroundColor: '#0f172a', position: 'relative' }}>
                    <img src="/chatgptupdate2.jpeg" alt="Edition 09" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: '#ff5722', fontWeight: 'bold', textTransform: 'uppercase' }}>Edition #09 • August 2026</span>
                      <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-color)', margin: '8px 0' }}>🚀 ChatGPT Just Got a New Superpower? (Computer History & More Updates)</h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-color)', opacity: 0.8 }}>For years, ChatGPT lived inside a chat box. New updates give users full control.</p>
                    </div>
                    <a href="/newsletter/edition-10" style={{ display: 'inline-block', marginTop: '16px', padding: '8px 16px', backgroundColor: 'rgba(255, 87, 34, 0.1)', color: '#ff5722', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none', width: 'fit-content' }}>Read Issue →</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>



      {/* HIGH-CONVERSION MODERN FAQ SECTION */}
<section className="py-28 px-6 max-w-4xl mx-auto relative">
  {/* Background Glow Effect */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>

  <div className="text-center mb-16 relative z-10">
    <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/30 px-4 py-1.5 rounded-full text-xs font-semibold text-orange-400 mb-4 tracking-wider uppercase shadow-[0_0_15px_rgba(255,87,34,0.2)]">
      <span>💡 Got Questions? We've Got Answers</span>
    </div>
    <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
      Frequently Asked <span className="text-orange-500">Questions</span>
    </h2>
    <p className="text-gray-400 text-base mt-3 max-w-xl mx-auto">
      Everything you need to know about AI Hustlers, our editions, and resources.
    </p>
  </div>

  <div className="space-y-4 relative z-10">
    {[
      {
        q: "What is AI Hustlers all about?",
        a: "AI Hustlers is your ultimate destination for cutting-edge AI insights, autonomous workflows, prompt engineering guides, and digital scaling blueprints designed for modern creators, developers, and solopreneurs."
      },
      {
        q: "Are the newsletters completely free to read?",
        a: "Yes! All our standard weekly editions and core AI workflows are 100% free. Just drop your email in the subscription box to get them delivered straight to your inbox."
      },
      {
        q: "How can I access past editions and archives?",
        a: "You can scroll up to the 'Newsletters Archive' section on this page to explore all past issues covering LLMs, multi-agent systems, security alerts, and tech breakdowns."
      },
      {
        q: "Can I collaborate or partner with AI Hustlers?",
        a: "Absolutely! If you're building an AI tool, startup, or want to sponsor an edition, you can connect with us via our LinkedIn page or reach out directly through our channels."
      }
    ].map((faq, index) => (
      <details 
        key={index}
        className="group border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 cursor-pointer backdrop-blur-xl bg-gray-950/60 open:bg-gradient-to-r open:from-orange-950/20 open:via-gray-900/90 open:to-gray-900/90 open:border-orange-500/60 open:shadow-[0_0_25px_rgba(255,87,34,0.15)]"
      >
        <summary className="flex justify-between items-center list-none select-none">
          <h3 className="font-bold text-base md:text-lg text-white group-open:text-orange-400 transition-colors">
            {faq.q}
          </h3>
          <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ml-4 bg-white/5 text-gray-400 border border-white/10 group-open:bg-orange-500 group-open:text-black group-open:rotate-180 group-open:shadow-[0_0_10px_rgba(255,87,34,0.5)]">
            <span className="font-extrabold text-sm group-open:hidden">+</span>
            <span className="font-extrabold text-sm hidden group-open:inline">−</span>
          </div>
        </summary>
        
        <p className="text-gray-300 text-sm md:text-base mt-4 leading-relaxed font-normal pt-3 border-t border-white/10 animate-fade-in">
          {faq.a}
        </p>
      </details>
    ))}
  </div>
</section>


      {/* FOOTER */}
      <footer className="bg-black text-gray-400 py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-left">
          
          <div className="flex flex-col items-start space-y-4">
            <img src="/logo.jpeg" alt="AI HUSTLERSS Logo" className="h-12 w-auto object-contain rounded-md" />
            <p className="text-sm text-gray-400">
              Empowering the next generation with cutting-edge AI insights and tools.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/newsletters-list" className="hover:text-white transition-colors">Newsletter</a></li>
              <li><a href="/explore" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-900 p-2.5 rounded-full hover:bg-orange-500 hover:text-black text-gray-300 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="https://x.com/AIHustlerrs" target="_blank" rel="noopener noreferrer" className="bg-gray-900 p-2.5 rounded-full hover:bg-orange-500 hover:text-black text-gray-300 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.instagram.com/aihustlerrs" target="_blank" rel="noopener noreferrer" className="bg-gray-900 p-2.5 rounded-full hover:bg-orange-500 hover:text-black text-gray-300 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/ai-hustlerrss/" target="_blank" rel="noopener noreferrer" className="bg-gray-900 p-2.5 rounded-full hover:bg-orange-500 hover:text-black text-gray-300 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© 2026 AI Hustlerss. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            <a href="https://www.beehiiv.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Powered by beehiiv
            </a>
          </p>
        </div>
      </footer>

      {/* FLOATING CHATBOT WIDGET */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => {
            const chatWin = document.getElementById('chat-window');
            chatWin.classList.toggle('hidden');
          }}
          className="w-14 h-14 bg-orange-500 hover:bg-orange-600 text-black rounded-full flex items-center justify-center shadow-2xl transition-all cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>

        <div id="chat-window" className="hidden absolute bottom-20 right-0 w-80 bg-black/90 border border-white/15 rounded-2xl shadow-2xl p-4 text-white backdrop-blur-xl flex flex-col">
          <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-3">
            <h4 className="font-bold text-orange-500 text-sm">AI Hustlerss Assistant</h4>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Online
            </span>
          </div>

          <div id="chat-messages" className="space-y-3 text-xs text-gray-300 mb-3 max-h-60 overflow-y-auto pr-1">
            <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
              Hey there! 👋 How can I help you scale with our AI newsletters today?
            </div>
          </div>

          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const inputElem = document.getElementById('chat-input');
              const msgContainer = document.getElementById('chat-messages');
              if (!inputElem.value.trim()) return;

              msgContainer.innerHTML += `<div class="bg-orange-600 text-white p-2.5 rounded-xl ml-auto max-w-[85%]">${inputElem.value}</div>`;
              inputElem.value = '';
              msgContainer.scrollTop = msgContainer.scrollHeight;

              setTimeout(() => {
                msgContainer.innerHTML += `<div class="bg-white/10 text-gray-200 p-2.5 rounded-xl mr-auto max-w-[85%]">Thanks for your message! Explore our latest AI editions above to get started.</div>`;
                msgContainer.scrollTop = msgContainer.scrollHeight;
              }, 1000);
            }}
            className="flex gap-2"
          >
            <input
              id="chat-input"
              type="text"
              placeholder="Type a message..."
              className="w-full bg-black/50 border border-white/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-orange-500"
            />
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-3 py-2 rounded-xl text-xs transition-all">
              Send
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}

