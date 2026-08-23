'use client';
import Link from 'next/link';
import { ArrowRight, Cpu, Rocket, ShieldCheck, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500 selection:text-black">
      
      {/* HEADER / NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/logo.jpeg" alt="AI HUSTLERSS Logo" className="h-20 w-auto rounded-md" />
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
            <a href="/newsletters-list" className="hover:text-orange-500 transition-colors">Newsletters</a>
            <a href="#tools" className="hover:text-orange-500 transition-colors">Archieve</a>
            <a href="/resources" className="hover:text-orange-500 transition-colors">Resources</a>
          </nav>
          <div>
            <a href="#tools" className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-5 py-2.5 rounded-full transition-all shadow-[0_0_20px_rgba(255,87,34,0.4)]">
              Subscribe for free
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden">
        {/* Background Logo Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none z-0">
          <img src="/logo.jpeg" alt="Watermark" className="w-[1100px] h-auto object-contain blur-[2px]" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-orange-400 mb-6">
            <Zap size={14} />
            <span>POWERING THE NEXT-GEN AI REVOLUTION</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-8">
             Build, Scale and Monetize with <span className="text-orange-500">AI HUSTLERSS</span>
          </h1>
           <p className="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
            Get the sharpest AI insights, cutting-edge workflows, and growth blueprints delivered straight to your inbox.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-col items-center justify-center gap-4 mt-6">
  
          {/* Explore AI Tools */}
           <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
           <a href="/resources" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:scale-105 flex items-center justify-center space-x-2">
           <span>Explore AI Tools</span>
         <ArrowRight size={18} />
          </a>

         {/* Join the Hustle Button */}
         <a href="#cta" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center">
           Join the Hustle
         </a>
         </div>

           {/* LinkedIn Button */}
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
    {/* First Set of Items */}
    <div className="flex items-center space-x-8 shrink-0">
      <span className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
        <span>🔥</span> <span>ChatGPT & GPT-4o</span>
      </span>
      <span className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
        <span>⚡</span> <span>Cloud GPU Orchestration</span>
      </span>
      <span className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
        <span>🚀</span> <span>Claude 3.7 Sonnet</span>
      </span>
      <span className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
        <span>🤖</span> <span>ElevenLabs Voice Agents</span>
      </span>
      <span className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
        <span>✨</span> <span>Runway Gen-3 Alpha</span>
      </span>
      <span className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
        <span>🌐</span> <span>Manus Autonomous Agents</span>
      </span>
    </div>

    {/* Duplicate Set for Seamless Infinite Loop */}
    <div className="flex items-center space-x-8 shrink-0" aria-hidden="true">
      <span className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
        <span>🔥</span> <span>ChatGPT & GPT-4o</span>
      </span>
      <span className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
        <span>⚡</span> <span>Cloud GPU Orchestration</span>
      </span>
      <span className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
        <span>🚀</span> <span>Claude 3.7 Sonnet</span>
      </span>
      <span className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
        <span>🤖</span> <span>ElevenLabs Voice Agents</span>
      </span>
      <span className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
        <span>✨</span> <span>Runway Gen-3 Alpha</span>
      </span>
      <span className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
        <span>🌐</span> <span>Manus Autonomous Agents</span>
      </span>
    </div>
  </div>
</div>
      

        {/* NEWSLETTER ARCHIVE & SUBSCRIPTION SECTION */}
<section id="tools" className="py-24 px-6 relative">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">The AI Hustlerss Newsletter</h2>
      <p className="text-gray-400 max-w-xl mx-auto">
        Get cutting-edge AI workflows, automated prompts, and digital scaling blueprints delivered straight to your inbox.
      </p>
    </div>

    {/* Email Subscription Box */}
<div className="bg-gradient-to-b from-gray-900/80 to-black border border-white/10 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto text-center shadow-2xl relative overflow-hidden backdrop-blur-xl">
  
  {/* Subtle glow background */}
  <div className="absolute -top-24 -left-24 w-48 h-48 bg-orange-600/20 rounded-full blur-3xl pointer-events-none"></div>
  <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

  <h3 className="text-3xl font-extrabold mb-3 text-white tracking-tight">Join 5,000+ AI Hustlers</h3>
  <p className="text-gray-400 text-sm md:text-base mb-8">
    Enter your email below to subscribe and receive our latest editions instantly.
  </p>

  {/* Brevo Form Container with Dark Filter Blend */}
  <div className="relative w-full overflow-hidden rounded-xl flex justify-center items-center bg-transparent">
    <iframe
      src="https://8cb09a41.sibforms.com/v2/serve/MUIFAEhaudA5PuDnUwLnQmqzbGTP6kb9AlUQ0W_zM204J1syDYuue9Srp97SDnq6boGgXs6bmFczQkuRTCFMEcVSyzCojhCtB9F5102IFJI4kRuTRdzRN_CRuL_CdWxOafQuxw5oDLDmtajh8uJfPGz2sswiKs8bGBirpSjAewzeKT6j8tUtpuLX6RM6fuv81L8tS8nb8pNKGixrAA=="
      className="w-full"
      width="100%"
      height="300"
      frameBorder="0"
      scrolling="no"
      allowFullScreen
      style={{
        display: 'block',
        background: 'transparent',
        colorScheme: 'dark',
        filter: 'invert(1) hue-rotate(130deg) brightness(1.1) contrast(1.1)',
        mixBlendMode: 'screen',
        paddingTop: '0px',
      }}
    />
  </div>
</div>

    {/* Past Newsletters Archive List */}
    <div className="mt-12">
    {/* Newsletter Banner Image */}
<div className="w-full mb-8">
  <img 
    src="/newsletter-banner.jpg" 
    alt="AI Moves Fast - We Keep You Ahead" 
    className="w-full h-auto rounded-2xl shadow-lg border border-white/10 object-cover"
  />

        {/* SEARCH POSTS & CATEGORY TAGS SECTION */}
<div className="max-w-5xl mx-auto mb-12 px-4">
  
  {/* Search Bar */}
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

  {/* Category Filter Pills */}
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
  <div style={{
    backgroundColor: 'var(--card-bg, #ffffff)',
    border: 'var(--card-border, 1px solid rgba(15, 23, 42, 0.08))',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: 'var(--soft-shadow, 0 4px 12px rgba(15, 23, 42, 0.06))',
    display: 'flex',
    flexDirection: 'column'
  }}>
    <div style={{ width: '100%', height: '160px', backgroundColor: '#0f172a', position: 'relative' }}>
      <img src="/multiagent2.jpeg" alt="Edition 04" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
      <div>
        <span style={{ fontSize: '11px', color: '#ff5722', fontWeight: 'bold', textTransform: 'uppercase' }}>Edition #01 • August 2026</span>
        <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-color)', margin: '8px 0' }}>Mastering Multi-Agent AI Workflows for Solopreneurs</h4>
        <p style={{ fontSize: '13px', color: 'var(--text-color)', opacity: 0.8 }}>How to automate 80% of your digital business using autonomous agents.</p>
      </div>
      <a href="/newsletter/edition-4" style={{ display: 'inline-block', marginTop: '16px', padding: '8px 16px', backgroundColor: 'rgba(255, 87, 34, 0.1)', color: '#ff5722', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none', width: 'fit-content' }}>
        Read Issue →
      </a>
    </div>
  </div>

  {/* Newsletter Item 2 */}
  <div style={{
    backgroundColor: 'var(--card-bg, #ffffff)',
    border: 'var(--card-border, 1px solid rgba(15, 23, 42, 0.08))',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: 'var(--soft-shadow, 0 4px 12px rgba(15, 23, 42, 0.06))',
    display: 'flex',
    flexDirection: 'column'
  }}>
    <div style={{ width: '100%', height: '160px', backgroundColor: '#0f172a', position: 'relative' }}>
      <img src="/Cyber-security.jpeg" alt="Edition 03" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
      <div>
        <span style={{ fontSize: '11px', color: '#ff5722', fontWeight: 'bold', textTransform: 'uppercase' }}>Edition #02 • July 2026</span>
        <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-color)', margin: '8px 0' }}>Coreum Bridge Exploit: 200K XRP Stolen & Price Slips Below $1.</h4>
        <p style={{ fontSize: '13px', color: 'var(--text-color)', opacity: 0.8 }}>Copy-paste prompts that scale your content creation and marketing funnels.</p>
      </div>
      <a href="/newsletter/edition-3" style={{ display: 'inline-block', marginTop: '16px', padding: '8px 16px', backgroundColor: 'rgba(255, 87, 34, 0.1)', color: '#ff5722', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none', width: 'fit-content' }}>
        Read Issue →
      </a>
    </div>
  </div>

  {/* Newsletter Item 3 */}
  <div style={{
    backgroundColor: 'var(--card-bg, #ffffff)',
    border: 'var(--card-border, 1px solid rgba(15, 23, 42, 0.08))',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: 'var(--soft-shadow, 0 4px 12px rgba(15, 23, 42, 0.06))',
    display: 'flex',
    flexDirection: 'column'
  }}>
    <div style={{ width: '100%', height: '160px', backgroundColor: '#0f172a', position: 'relative' }}>
      <img src="/nextjs.jpeg" alt="Edition 02" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
      <div>
        <span style={{ fontSize: '11px', color: '#ff5722', fontWeight: 'bold', textTransform: 'uppercase' }}>Edition #03 • July 2026</span>
        <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-color)', margin: '8px 0' }}>Building Modern Web Apps with Next.js & Tailwind</h4>
        <p style={{ fontSize: '13px', color: 'var(--text-color)', opacity: 0.8 }}>A complete architectural blueprint for launching fast developer tools.</p>
      </div>
      <a href="/newsletter/edition-2" style={{ display: 'inline-block', marginTop: '16px', padding: '8px 16px', backgroundColor: 'rgba(255, 87, 34, 0.1)', color: '#ff5722', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none', width: 'fit-content' }}>
        Read Issue →
      </a>
    </div>
  </div>

  {/* Newsletter Item 4 */}
  <div style={{
    backgroundColor: 'var(--card-bg, #ffffff)',
    border: 'var(--card-border, 1px solid rgba(15, 23, 42, 0.08))',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: 'var(--soft-shadow, 0 4px 12px rgba(15, 23, 42, 0.06))',
    display: 'flex',
    flexDirection: 'column'
  }}>
    <div style={{ width: '100%', height: '160px', backgroundColor: '#0f172a', position: 'relative' }}>
      <img src="/Edition5.jpeg" alt="Edition 04" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
      <div>
        <span style={{ fontSize: '11px', color: '#ff5722', fontWeight: 'bold', textTransform: 'uppercase' }}>Edition #04 • August 2026</span>
        <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-color)', margin: '8px 0' }}>AI FIRE | SPARK INTRO OFFER | 2026 PERFORMANCE KICKOFF</h4>
        <p style={{ fontSize: '13px', color: 'var(--text-color)', opacity: 0.8 }}>he Super Bowl is over, now it's time for your MVP season. Introducing the "Spark" Tier for a sensitive economic climate. ​2026....</p>
      </div>
      <a href="/newsletter/edition-5" style={{ display: 'inline-block', marginTop: '16px', padding: '8px 16px', backgroundColor: 'rgba(255, 87, 34, 0.1)', color: '#ff5722', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none', width: 'fit-content' }}>
        Read Issue →
      </a>
    </div>
  </div>

  {/* Newsletter Item 5 */}
  <div style={{
    backgroundColor: 'var(--card-bg, #ffffff)',
    border: 'var(--card-border, 1px solid rgba(15, 23, 42, 0.08))',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: 'var(--soft-shadow, 0 4px 12px rgba(15, 23, 42, 0.06))',
    display: 'flex',
    flexDirection: 'column'
  }}>
    <div style={{ width: '100%', height: '160px', backgroundColor: '#0f172a', position: 'relative' }}>
      <img src="/kimmik3.jpeg" alt="Edition 03" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
      <div>
        <span style={{ fontSize: '11px', color: '#ff5722', fontWeight: 'bold', textTransform: 'uppercase' }}>Edition #05 • August 2026</span>
        <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-color)', margin: '8px 0' }}>🧠 Everyone Says Kimi K3 is 'Open'. I Checked What It Truly Takes to Run It (What to Use Instead)</h4>
        <p style={{ fontSize: '13px', color: 'var(--text-color)', opacity: 0.8 }}>“Open” sounds simple right? After looking deeper, I found the hardw....</p>
      </div>
      <a href="/newsletter/edition-6" style={{ display: 'inline-block', marginTop: '16px', padding: '8px 16px', backgroundColor: 'rgba(255, 87, 34, 0.1)', color: '#ff5722', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none', width: 'fit-content' }}>
        Read Issue →
      </a>
    </div>
  </div>
  {/* Newsletter Item 6 */}
  <div style={{
    backgroundColor: 'var(--card-bg, #ffffff)',
    border: 'var(--card-border, 1px solid rgba(15, 23, 42, 0.08))',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: 'var(--soft-shadow, 0 4px 12px rgba(15, 23, 42, 0.06))',
    display: 'flex',
    flexDirection: 'column'
  }}>
    <div style={{ width: '100%', height: '160px', backgroundColor: '#0f172a', position: 'relative' }}>
      <img src="/aimarket.jpeg" alt="Edition 02" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
      <div>
        <span style={{ fontSize: '11px', color: '#ff5722', fontWeight: 'bold', textTransform: 'uppercase' }}>Edition #06 • August 2026</span>
        <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-color)', margin: '8px 0' }}>📉 "Entry-Level" is Lying to You. Here's What the AI Job Market Actually Looks Like Now</h4>
        <p style={{ fontSize: '13px', color: 'var(--text-color)', opacity: 0.8 }}>AI split the job market into 2 tracks. I'll show you where the job market is moving, what companies actually value now, and how to stay ahead.</p>
      </div>
      <a href="/newsletter/edition-7" style={{ display: 'inline-block', marginTop: '16px', padding: '8px 16px', backgroundColor: 'rgba(255, 87, 34, 0.1)', color: '#ff5722', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none', width: 'fit-content' }}>
        Read Issue →
      </a>
    </div>
  </div>
          {/* Newsletter Item 7 */}
  <div style={{
    backgroundColor: 'var(--card-bg, #ffffff)',
    border: 'var(--card-border, 1px solid rgba(15, 23, 42, 0.08))',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: 'var(--soft-shadow, 0 4px 12px rgba(15, 23, 42, 0.06))',
    display: 'flex',
    flexDirection: 'column'
  }}>
    <div style={{ width: '100%', height: '160px', backgroundColor: '#0f172a', position: 'relative' }}>
      <img src="/hiddenaibills.jpeg" alt="Edition 04" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
      <div>
        <span style={{ fontSize: '11px', color: '#ff5722', fontWeight: 'bold', textTransform: 'uppercase' }}>Edition #07 • August 2026</span>
        <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-color)', margin: '8px 0' }}>💸 Big Tech’s Hidden $3T AI Bill</h4>
        <p style={{ fontSize: '13px', color: 'var(--text-color)', opacity: 0.8 }}>D-DAY ALERT: Live AI Agent Team workshop today!</p>
      </div>
      <a href="/newsletter/edition-8" style={{ display: 'inline-block', marginTop: '16px', padding: '8px 16px', backgroundColor: 'rgba(255, 87, 34, 0.1)', color: '#ff5722', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none', width: 'fit-content' }}>
        Read Issue →
      </a>
    </div>
  </div>
          {/* Newsletter Item 8 */}
  <div style={{
    backgroundColor: 'var(--card-bg, #ffffff)',
    border: 'var(--card-border, 1px solid rgba(15, 23, 42, 0.08))',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: 'var(--soft-shadow, 0 4px 12px rgba(15, 23, 42, 0.06))',
    display: 'flex',
    flexDirection: 'column'
  }}>
    <div style={{ width: '100%', height: '160px', backgroundColor: '#0f172a', position: 'relative' }}>
      <img src="/flow.jpeg" alt="Edition 08" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
      <div>
        <span style={{ fontSize: '11px', color: '#ff5722', fontWeight: 'bold', textTransform: 'uppercase' }}>Edition #08 • August 2026</span>
        <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-color)', margin: '8px 0' }}>🎥 FREE Claude Prompt That AUTO Turns Any Idea Into a VOX-Style Video (Full Guide)</h4>
        <p style={{ fontSize: '13px', color: 'var(--text-color)', opacity: 0.8 }}>This workflow turns one idea into a Vox-style animated video using 4 tools: Claude, ZAPI Flow, Google Flow, and CapCut. No coding required. No After Effects.</p>
      </div>
      <a href="/newsletter/edition-9" style={{ display: 'inline-block', marginTop: '16px', padding: '8px 16px', backgroundColor: 'rgba(255, 87, 34, 0.1)', color: '#ff5722', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none', width: 'fit-content' }}>
        Read Issue →
      </a>
    </div>
  </div>
                  {/* Newsletter Item 9 */}
  <div style={{
    backgroundColor: 'var(--card-bg, #ffffff)',
    border: 'var(--card-border, 1px solid rgba(15, 23, 42, 0.08))',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: 'var(--soft-shadow, 0 4px 12px rgba(15, 23, 42, 0.06))',
    display: 'flex',
    flexDirection: 'column'
  }}>
    <div style={{ width: '100%', height: '160px', backgroundColor: '#0f172a', position: 'relative' }}>
      <img src="/chatgptupdate.jpeg" alt="Edition 09" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
      <div>
        <span style={{ fontSize: '11px', color: '#ff5722', fontWeight: 'bold', textTransform: 'uppercase' }}>Edition #09 • August 2026</span>
        <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-color)', margin: '8px 0' }}>🚀 ChatGPT Just Got a New Superpower? (Computer History & More Updates)</h4>
        <p style={{ fontSize: '13px', color: 'var(--text-color)', opacity: 0.8 }}>For years, ChatGPT lived inside a chat box. New tools are giving users more control, more automation, and a completely different way to work with AI.</p>
      </div>
      <a href="/newsletter/edition-10" style={{ display: 'inline-block', marginTop: '16px', padding: '8px 16px', backgroundColor: 'rgba(255, 87, 34, 0.1)', color: '#ff5722', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none', width: 'fit-content' }}>
        Read Issue →
      </a>
    </div>
  </div>
  </div>
  </div>
  </div>
  </div>
</section>

      {/* FOOTER */}
<footer className="bg-black text-gray-400 py-12 px-6 border-t border-white/10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-left">
    
    {/* Column 1: Logo & Bio */}
    <div className="flex flex-col items-start space-y-4">
      <img src="/logo.jpeg" alt="AI HUSTLERSS Logo" className="h-12 w-auto object-contain rounded-md" />
      <p className="text-sm text-gray-400">
        Empowering the next generation with cutting-edge AI insights and tools.
      </p>
    </div>

    {/* Column 2: Quick Links */}
    <div>
      <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
        <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
        <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
      </ul>
    </div>

    {/* Column 3: Legal */}
    <div>
      <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
      </ul>
    </div>

    {/* Column 4: Social Media */}
    <div>
      <h3 className="text-white font-semibold text-lg mb-4">Connect With Us</h3>
      <div className="flex space-x-4">
        {/* Facebook */}
        <a href="https://www.facebook.com/profile.php?fb_profile_edit_entry_point=%7B%22click_point%22%3A%22edit_profile_button%22%2C%22feature%22%3A%22profile_header%22%7D&id=61593797930185&sk=about" target="_blank" rel="noopener noreferrer" className="bg-gray-900 p-2.5 rounded-full hover:bg-orange-500 hover:text-black text-gray-300 transition-all">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
        </a>
        {/* Twitter / X */}
        <a href="https://x.com/AIHustlerrs" target="_blank" rel="noopener noreferrer" className="bg-gray-900 p-2.5 rounded-full hover:bg-orange-500 hover:text-black text-gray-300 transition-all">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        {/* Instagram */}
        <a href="https://www.instagram.com/aihustlerrs?igsi=MTM5YnFyb2xudW10Ng==" target="_blank" rel="noopener noreferrer" className="bg-gray-900 p-2.5 rounded-full hover:bg-orange-500 hover:text-black text-gray-300 transition-all">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/company/ai-hustlerrss/" target="_blank" rel="noopener noreferrer" className="bg-gray-900 p-2.5 rounded-full hover:bg-orange-500 hover:text-black text-gray-300 transition-all">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
      </div>
    </div>

  </div>

  {/* Copyright Bottom Bar */}
  <div className="max-w-7xl mx-auto pt-6 border-t border-white/10 text-center text-xs text-gray-500">
    <p>© 2026 AI Hustlerss. All rights reserved.</p>
  </div>
</footer>


{/* FLOATING CHATBOT WIDGET */}
<div className="fixed bottom-6 right-6 z-50">
  
  {/* Chat Toggle Button */}
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

  {/* Chat Window Box (Initially Hidden) */}
  <div id="chat-window" className="hidden absolute bottom-20 right-0 w-80 bg-black/90 border border-white/15 rounded-2xl shadow-2xl p-4 text-white backdrop-blur-xl flex flex-col">
    
    {/* Header */}
    <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-3">
      <h4 className="font-bold text-orange-500 text-sm">AI Hustlerss Assistant</h4>
      <span className="text-xs text-gray-400 flex items-center gap-1">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Online
      </span>
    </div>

    {/* Message Display Area */}
    <div id="chat-messages" className="space-y-3 text-xs text-gray-300 mb-3 max-h-60 overflow-y-auto pr-1">
      <div className="bg-white/5 p-2.5 rounded-xl border border-white/5">
        Hey there! 👋 How can I help you scale with our AI newsletters today?
      </div>
    </div>

    {/* Input Form */}
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        const inputElem = document.getElementById('chat-input');
        const msgContainer = document.getElementById('chat-messages');
        if (!inputElem.value.trim()) return;

        // User message add karein
        msgContainer.innerHTML += `<div class="bg-orange-600 text-white p-2.5 rounded-xl ml-auto max-w-[85%]">${inputElem.value}</div>`;
        
        const userText = inputElem.value;
        inputElem.value = '';
        msgContainer.scrollTop = msgContainer.scrollHeight;

        // Bot reply simulate karein
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
      <button 
        type="submit" 
        className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-3 py-2 rounded-xl text-xs transition-all"
      >
        Send
      </button>
    </form>

  </div>

</div>

  
</div>
  );
}