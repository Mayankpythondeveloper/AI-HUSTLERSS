'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function ResourcesPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const isLightMode = !isDarkMode;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light-mode');
  };

  const surfaceStyle = {
    background: 'var(--card-bg)',
    border: 'var(--card-border)',
    boxShadow: isLightMode ? '0 4px 12px rgba(15, 23, 42, 0.06)' : '0 10px 30px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s ease-in-out',
    color: 'var(--text-color)'
  };

  const mutedText = 'var(--text-color)';
  const tagBg = isLightMode ? 'rgba(15, 23, 42, 0.04)' : 'rgba(255, 255, 255, 0.08)';
  const cardShadow = isLightMode ? '0 4px 12px rgba(15, 23, 42, 0.06)' : '0 10px 30px rgba(0, 0, 0, 0.3)';
  const softBorder = isLightMode ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.1)';

  const [openFaq, setOpenFaq] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const faqs = [
    {
      q: "Do I need deep Python or coding experience to join?",
      a: "No. The accelerator is intentionally designed with dual tracks: **Builders/Operators Track** (leveraging Manus, Cursor vibe-coding, no-code integrations, and multimodal tools) and the **Engineering Track** (cloud GPU orchestration, API pipelines, and NVIDIA NIM). Whether you are a product manager, marketer, or senior developer, you will build production-grade workflows tailored to your level."
    },
    {
      q: "How does the 24/7 Weekday Live Chat support operate?",
      a: "Our dedicated technical mentors are available round-the-clock on weekdays via private channels to triage errors, debug APIs, review system prompts, and guide you through roadblocks with an average response time of under 15 minutes."
    },
    {
      q: "What if I cannot attend one of the live weekend sessions?",
      a: "All live weekend sprints are recorded in high-definition and uploaded to your dashboard within 4 hours. You also retain direct access to mentors through weekday chat and code reviews to catch up seamlessly."
    },
    {
      q: "What happens during the 1-Day Live Networking Finale?",
      a: "You will pitch your capstone agent or app to peers and industry leaders, participate in co-founder speed matching, and receive your official verified AI Hustlers™ Fellow Certificate."
    }
  ];
  return (
    <div style={{ 
  backgroundColor: 'var(--bg-color)', 
  color: 'var(--text-color)', 
  minHeight: '100vh',
  fontFamily: 'sans-serif',
  transition: 'background-color 0.4s ease, color 0.4s ease'
}}>
      
      {/* Custom CSS for Sliding Marquee Animation */}
      <style>{`
        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container {
          display: flex;
          width: max-content;
          animation: scrollMarquee 25s linear infinite;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Navbar */}
      <header style={{ 
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'center', 
  padding: '20px 40px', 
  borderBottom: isLightMode ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.08)',
  position: 'fixed',
  top: '0',
  left: '0',
  zIndex: 1000,
  backgroundColor: isLightMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(12, 12, 16, 0.9)',
  backdropFilter: 'blur(10px)',
  width: '100%',
  transition: 'all 0.3s ease-in-out'
}}>
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1' }}>
      <div style={{ fontSize: '18px', fontWeight: '900', color: '#ff5722', letterSpacing: '-1px' }}>AI</div>
      <div style={{ fontSize: '6px', color: 'var(--text-color)', letterSpacing: '0.5px', fontWeight: 'bold' }}>HUSTLERSS</div>
           
    </div>
    <div>
      <span style={{ backgroundColor: '#1e293b', color: '#ff5722', fontSize: '12px', padding: '2px 6px', borderRadius: '4px', marginLeft: '6px', fontWeight: 'bold' }}>PRO⚡</span>
    </div>
  </div>

  <nav style={{ display: 'flex', gap: '25px', fontSize: '14px', color: 'var(--text-color)' }}>
    <a href="#curriculum" style={{ textDecoration: 'none', color: 'inherit' }}>Curriculum</a>
    <a href="#tech-stack" style={{ textDecoration: 'none', color: 'inherit' }}>AI Tech Stack</a>
    <a href="#support" style={{ textDecoration: 'none', color: 'inherit' }}>Experience & Support</a>
    <a href="#finale" style={{ textDecoration: 'none', color: 'inherit' }}>Live Finale</a>
    <a href="#faq" style={{ textDecoration: 'none', color: 'inherit' }}>FAQ</a>
  </nav>

  <a href="#pricing" style={{ backgroundColor: '#ff5722', color: '#fff', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px', boxShadow: isLightMode ? '0 8px 18px rgba(255, 87, 34, 0.18)' : '0 4px 16px rgba(255, 87, 34, 0.2)' }}>
    Enroll for Cohort 14
  </a>

  <button 
  onClick={toggleTheme}
  style={{
    background: isLightMode ? 'rgba(15, 23, 42, 0.04)' : 'rgba(255, 255, 255, 0.08)',
    border: isLightMode ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '50px',
    width: '38px',
    height: '38px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: isLightMode ? '#111827' : '#fff',
    fontSize: '16px',
    marginLeft: '15px',
    transition: 'all 0.3s ease-in-out'
  }}
  title="Toggle Light/Dark Mode"
>
  {isDarkMode ? '☀️' : '🌙'}
</button>
</header>

      {/* Hero Section */}
      <section style={{ 
  textAlign: 'center', 
  padding: '60px 20px 80px 20px', 
  marginTop: '70px', // Navbar ke peeche chupne se bachane ke liye proper margin
  maxWidth: '1000px', 
  marginInline: 'auto' 
}}>
  
  {/* Animation wali pill line */}
  {/* Breathing Dot wala Pill */}
<div className="animated-pill">
  <span className="breathing-dot"></span>
  <span>Cohort 14 Application Window &bull; Starts Saturday, 10:00 AM EST</span>
</div>

  {/* Main Headline */}
  <h1 style={{ fontSize: '37px', fontWeight: '800', lineHeight: '1.15', marginBottom: '20px' }}>
    Stop Watching AI Demos.<br />
    <span style={{ color: '#ff5722', fontsize: '37' }}>Build Production-Grade AI</span> In 4 Weekends.
  </h1>

  {/* Description */}
  <p style={{ color: 'var(--text-color)', maxWidth: '650px', margin: '0 auto 30px', fontSize: '16px', lineHeight: '1.5' }}>
    The high-tempo accelerator for builders, operators, and engineers. Master autonomous agents, cloud GPU deployment, and vibe-coding with 24/7 weekday technical support.
  </p>

  {/* 2 Main Action Buttons (Orange & Dark) */}
  <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px' }}>
    <a href="#pricing" style={{ 
      backgroundColor: '#ff5722', 
      color: '#fff', 
      padding: '14px 28px', 
      borderRadius: '10px', 
      textDecoration: 'none', 
      fontWeight: 'bold', 
      fontSize: '15px',
      boxShadow: '0 4px 20px rgba(255, 87, 34, 0.4)'
    }}>
      Claim Your Cohort Seat →
    </a>
    <a href="#curriculum" style={{ 
      background: 'var(--card-bg)', 
      color: 'var(--text-color)', 
      border: 'var(--card-border)',
      padding: '14px 28px', 
      borderRadius: '10px', 
      textDecoration: 'none', 
      fontWeight: 'bold', 
      fontSize: '15px' 
    }}>
      View 4-Week Plan
    </a>
  </div>

  {/* 4 Feature Cards with Icons */}
  <div style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(4, 1fr)', 
    gap: '12px', 
    maxWidth: '900px', 
    margin: '0 auto' 
  }}>
    <div className="feature-card" style={{ display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left', padding: '15px', background: 'var(--card-bg)', border: 'var(--card-border)', borderRadius: '10px', color: 'var(--text-color)' }}>
      <span style={{ fontSize: '20px' }}>💬</span>
      <div>
        <div style={{ fontWeight: 'bold', fontSize: '13px', color: 'var(--text-color)' }}>24/7 Weekday Chat</div>
        <div style={{ fontSize: '10px', color: 'var(--text-color)' }}>Continuous Support</div>
      </div>
    </div>

    <div className="feature-card" style={{ ...surfaceStyle, display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left', padding: '15px', borderRadius: '10px' }}>
      <span style={{ fontSize: '20px' }}>🚀</span>
      <div>
        <div style={{ fontWeight: 'bold', fontSize: '13px', color: 'var(--text-color)' }}>4 Weekend Sprints</div>
        <div style={{ fontSize: '10px', color: mutedText }}>Live & Interactive</div>
      </div>
    </div>

    <div className="feature-card" style={{ ...surfaceStyle, display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left', padding: '15px', borderRadius: '10px' }}>
      <span style={{ fontSize: '20px' }}>🛡️</span>
      <div>
        <div style={{ fontWeight: 'bold', fontSize: '13px', color: 'var(--text-color)' }}>Discord + Slack VIP</div>
        <div style={{ fontSize: '10px', color: mutedText }}>Private Inner Circle</div>
      </div>
    </div>

    <div className="feature-card" style={{ ...surfaceStyle, display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left', padding: '15px', borderRadius: '10px' }}>
      <span style={{ fontSize: '20px' }}>🎤</span>
      <div>
        <div style={{ fontWeight: 'bold', fontSize: '13px', color: 'var(--text-color)' }}>1-Day Networking</div>
        <div style={{ fontSize: '10px', color: mutedText }}>Capstone Demo Day</div>
      </div>
    </div>
  </div>
</section>

      {/* Sliding Tech Stack Marquee Section */}
      <section id="tech-stack" style={{ 
        borderTop: isLightMode ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.08)', 
        borderBottom: isLightMode ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.08)', 
        padding: '25px 0', 
        backgroundColor: isLightMode ? '#f8fafc' : '#0b0f17', 
        overflow: 'hidden', 
        position: 'relative',
        transition: 'all 0.3s ease-in-out'
      }}>
        <div style={{ fontSize: '11px', color: isLightMode ? '#1e293b' : 'var(--text-color)', letterSpacing: '1.5px', marginBottom: '15px', fontWeight: 'bold', textAlign: 'center', opacity: isLightMode ? 0.7 : 0.8, transition: 'color 0.3s ease-in-out' }}>
          LEARN, DEPLOY, & SCALE WITH BLEEDING-EDGE PRODUCTION TOOLS
        </div>
        
        <div style={{ display: 'flex', width: '100%', overflow: 'hidden' }}>
          <div className="marquee-container">
            {/* First Set */}
            <div style={{ display: 'flex', gap: '60px', alignItems: 'center', paddingRight: '60px', whiteSpace: 'nowrap', color: isLightMode ? '#1e293b' : 'var(--text-color)', fontSize: '15px', fontWeight: '600', transition: 'color 0.3s ease-in-out' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>✨ Runway Gen-3 Alpha</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>🤖 Manus Autonomous Agents</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>💬 ChatGPT &amp; GPT-4o</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>☁️ Cloud GPU Orchestration</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>⚡ Claude 3.7 Sonnet</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>🎙️ ElevenLabs Voice Agents</span>
            </div>
            {/* Duplicate Set for Infinite Seamless Loop */}
            <div style={{ display: 'flex', gap: '60px', alignItems: 'center', paddingRight: '60px', whiteSpace: 'nowrap', color: isLightMode ? '#1e293b' : 'var(--text-color)', fontSize: '15px', fontWeight: '600', transition: 'color 0.3s ease-in-out' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>✨ Runway Gen-3 Alpha</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>🤖 Manus Autonomous Agents</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>💬 ChatGPT &amp; GPT-4o</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>☁️ Cloud GPU Orchestration</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>⚡ Claude 3.7 Sonnet</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>🎙️ ElevenLabs Voice Agents</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      {/* Comparison Section */}
<section style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
  <div style={{ textAlign: 'center', marginBottom: '50px' }}>
    <div style={{ display: 'inline-block', fontSize: '11px', color: '#ff5722', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '15px', textTransform: 'uppercase' }}>
      No More Shelfware Courses
    </div>
    <h2 style={{ fontSize: '38px', fontWeight: '900', color: 'var(--text-color)', letterSpacing: '-1px', lineHeight: '1.2' }}>
      Designed For Action, Not Passive Video <br />Watching.
    </h2>
  </div>

  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
    
    {/* Left Box: Traditional AI Courses */}
    <div 
      onMouseEnter={() => setHoveredCard('left')}
      onMouseLeave={() => setHoveredCard(null)}
      style={{ 
        background: 'var(--card-bg)', 
        border: 'var(--card-border)', 
        borderRadius: '24px', 
        padding: '40px',
        boxShadow: isLightMode ? (hoveredCard === 'left' ? '0 10px 20px rgba(15, 23, 42, 0.08)' : '0 4px 12px rgba(0, 0, 0, 0.06)') : (hoveredCard === 'left' ? '0 20px 40px rgba(0, 0, 0, 0.6)' : '0 10px 30px rgba(0,0,0,0.3)'),
        transform: hoveredCard === 'left' ? 'translateY(-6px)' : 'translateY(0px)',
        transition: 'all 0.3s ease-in-out',
        position: 'relative',
        overflow: 'hidden',
        color: 'var(--text-color)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px' }}>
        <span style={{ fontSize: '18px', color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '8px', borderRadius: '10px' }}>❌</span>
        <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-color)', margin: 0 }}>Traditional AI Courses</h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '13.5px', color: 'var(--text-color)', lineHeight: '1.6' }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <span style={{ color: '#ef4444', fontWeight: 'bold' }}>✕</span>
          <span>Outdated 2023 pre-recorded video lectures explaining how to write basic text prompts.</span>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <span style={{ color: '#ef4444', fontWeight: 'bold' }}>✕</span>
          <span>Dead community message boards where your code questions sit unanswered for weeks.</span>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <span style={{ color: '#ef4444', fontWeight: 'bold' }}>✕</span>
          <span>Academic math derivations with zero connection to real business ROI or working products.</span>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <span style={{ color: '#ef4444', fontWeight: 'bold' }}>✕</span>
          <span>Isolated solo learning with no real peer network, feedback, or demo accountability.</span>
        </div>
      </div>
    </div>

    {/* Right Box: The AI Hustlers Accelerator */}
    <div 
      onMouseEnter={() => setHoveredCard('right')}
      onMouseLeave={() => setHoveredCard(null)}
      style={{ 
        background: 'var(--card-bg)', 
        border: 'var(--card-border)', 
        borderRadius: '24px', 
        padding: '40px',
        boxShadow: isLightMode ? (hoveredCard === 'right' ? '0 10px 18px rgba(255, 87, 34, 0.12)' : '0 4px 12px rgba(0, 0, 0, 0.06)') : (hoveredCard === 'right' ? '0 20px 40px rgba(255, 87, 34, 0.25)' : '0 10px 30px rgba(0,0,0,0.3)'),
        transform: hoveredCard === 'right' ? 'translateY(-6px)' : 'translateY(0px)',
        transition: 'all 0.3s ease-in-out',
        position: 'relative',
        overflow: 'hidden',
        color: 'var(--text-color)'
      }}
    >
      <div style={{ position: 'absolute', top: '25px', right: '25px', backgroundColor: '#ff5722', color: '#fff', fontSize: '10px', fontWeight: '800', padding: '5px 12px', borderRadius: '20px', letterSpacing: '0.5px' }}>
        THE NEW STANDARD
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px' }}>
        <span style={{ fontSize: '18px', color: '#ff5722', backgroundColor: 'rgba(255, 87, 34, 0.15)', padding: '8px', borderRadius: '10px' }}>⚡</span>
        <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-color)', margin: 0 }}>The AI Hustlers Accelerator</h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '13.5px', color: 'var(--text-color)', lineHeight: '1.6' }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <span style={{ color: '#ff5722', fontWeight: 'bold' }}>✓</span>
          <span>Real-time tools: Weekly refreshed workflows covering Manus, Runway Gen-3, Claude 3.7, and NVIDIA cloud stacks.</span>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <span style={{ color: '#ff5722', fontWeight: 'bold' }}>✓</span>
          <span>24/7 Weekday Live Chat: Dedicated technical mentors triage your prompts, APIs, and builds instantly.</span>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <span style={{ color: '#ff5722', fontWeight: 'bold' }}>✓</span>
          <span>Practical Vibe-Coding: Build and ship usable apps, automated agents, and revenue-generating workflows.</span>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <span style={{ color: '#ff5722', fontWeight: 'bold' }}>✓</span>
          <span>1-Day Live Networking Summit: Real connections, co-founder matchmaking, and portfolio pitch day.</span>
        </div>
      </div>
    </div>

  </div>
</section>

      {/* 4-Weekend Roadmap Section */}
      <section id="roadmap" style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#ff5722', fontWeight: 'bold', border: '1px solid rgba(255, 87, 34, 0.25)', backgroundColor: isLightMode ? 'rgba(255, 87, 34, 0.08)' : 'rgba(255, 87, 34, 0.08)', padding: '5px 14px', borderRadius: '20px', marginBottom: '15px', boxShadow: isLightMode ? '0 4px 10px rgba(255, 87, 34, 0.06)' : 'none' }}>
            <span>🚀 4-WEEKEND ROADMAP</span>
          </div>
          <h2 style={{ fontSize: '40px', fontWeight: '900', color: 'var(--text-color)', letterSpacing: '-1px', marginBottom: '15px' }}>
            Master the Full Generative &amp; <span style={{ color: '#ff5722' }}>Agentic Spectrum</span>
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-color)', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>
            Every weekend is structured as an interactive 4-hour live sprint followed by targeted building challenges and weekday mentor support.
          </p>
        </div>

        {/* 2x2 Grid Layout for Roadmap Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
          
          {/* Weekend 01 */}
          <div 
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{ 
              background: 'var(--card-bg)', 
              border: 'var(--card-border)', 
              borderRadius: '24px', 
              padding: '35px',
              boxShadow: isLightMode ? (hoveredCard === 1 ? '0 10px 20px rgba(15, 23, 42, 0.08)' : '0 4px 12px rgba(0, 0, 0, 0.06)') : (hoveredCard === 1 ? '0 15px 35px rgba(255, 87, 34, 0.2)' : '0 10px 30px rgba(0,0,0,0.4)'),
              transform: hoveredCard === 1 ? 'translateY(-5px)' : 'translateY(0px)',
              transition: 'all 0.3s ease-in-out',
              position: 'relative',
              overflow: 'hidden',
              color: 'var(--text-color)'
            }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', background: 'linear-gradient(90deg, #ff5722, transparent)' }}></div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#ff5722', letterSpacing: '1px' }}>WEEK 01 • LIVE SPRINT</span>
              <span style={{ fontSize: '11px', fontWeight: '600', color: '#38bdf8', backgroundColor: isLightMode ? 'rgba(56, 189, 248, 0.08)' : 'rgba(56, 189, 248, 0.1)', padding: '4px 10px', borderRadius: '8px', border: isLightMode ? '1px solid rgba(56, 189, 248, 0.1)' : '1px solid rgba(56, 189, 248, 0.2)' }}>4 Hours Live + Q&amp;A</span>
            </div>

            <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-color)', marginBottom: '12px' }}>Agentic Systems &amp; Multi-Model Orchestration</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-color)', lineHeight: '1.6', marginBottom: '20px' }}>
              Move beyond static prompts. Build autonomous task agents with Manus, Claude 3.7 Sonnet, and OpenAI Codex with structured memory, tool execution, and guardrails.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '25px', fontSize: '12px', color: 'var(--text-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#ff5722' }}>➜</span> Autonomous multi-step research &amp; web-scraping agents</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#ff5722' }}>➜</span> Context-caching &amp; advanced prompt frameworks</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#ff5722' }}>➜</span> Codex automation for operational workflow triggers</div>
            </div>

            <div style={{ borderTop: 'var(--card-border)', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', color: 'var(--text-color)', opacity: 0.7, fontWeight: '600' }}>Sprint Deliverable:</span>
              <span style={{ fontSize: '12px', color: '#ff5722', fontWeight: 'bold' }}>Custom Autonomous Workflow Agent</span>
            </div>
          </div>

          {/* Weekend 02 */}
          <div 
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{ 
              background: 'var(--card-bg)', 
              border: 'var(--card-border)', 
              borderRadius: '24px', 
              padding: '35px',
              boxShadow: isLightMode ? (hoveredCard === 2 ? '0 10px 20px rgba(56, 189, 248, 0.12)' : '0 4px 12px rgba(0, 0, 0, 0.06)') : (hoveredCard === 2 ? '0 15px 35px rgba(56, 189, 248, 0.2)' : '0 10px 30px rgba(0,0,0,0.4)'),
              transform: hoveredCard === 2 ? 'translateY(-5px)' : 'translateY(0px)',
              transition: 'all 0.3s ease-in-out',
              position: 'relative',
              overflow: 'hidden',
              color: 'var(--text-color)'
            }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', background: 'linear-gradient(90deg, #38bdf8, transparent)' }}></div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#38bdf8', letterSpacing: '1px' }}>WEEK 02 • LIVE SPRINT</span>
              <span style={{ fontSize: '11px', fontWeight: '600', color: '#38bdf8', backgroundColor: isLightMode ? 'rgba(56, 189, 248, 0.08)' : 'rgba(56, 189, 248, 0.1)', padding: '4px 10px', borderRadius: '8px', border: isLightMode ? '1px solid rgba(56, 189, 248, 0.1)' : '1px solid rgba(56, 189, 248, 0.2)' }}>4 Hours Live + Q&amp;A</span>
            </div>

            <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-color)', marginBottom: '12px' }}>Cinema-Grade Visual &amp; Multimodal Pipelines</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-color)', lineHeight: '1.6', marginBottom: '20px' }}>
              Build professional visual creative pipelines. Master Runway Gen-3 Alpha, Midjourney consistency seeds, and ElevenLabs synthetic voice engines for viral media.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '25px', fontSize: '12px', color: 'var(--text-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#38bdf8' }}>➜</span> Runway camera motion controls and multi-pass video generation</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#38bdf8' }}>➜</span> Dynamic voice clone agents and dynamic localized dubbing</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#38bdf8' }}>➜</span> End-to-end commercial ad creation from script to render</div>
            </div>

            <div style={{ borderTop: 'var(--card-border)', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', color: 'var(--text-color)', opacity: 0.7, fontWeight: '600' }}>Sprint Deliverable:</span>
              <span style={{ fontSize: '12px', color: '#38bdf8', fontWeight: 'bold' }}>Broadcast-Ready Multimodal Campaign</span>
            </div>
          </div>

          {/* Weekend 03 */}
          <div 
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{ 
              background: 'var(--card-bg)', 
              border: 'var(--card-border)', 
              borderRadius: '24px', 
              padding: '35px',
              boxShadow: isLightMode ? (hoveredCard === 3 ? '0 10px 20px rgba(16, 185, 129, 0.1)' : '0 4px 12px rgba(0, 0, 0, 0.06)') : (hoveredCard === 3 ? '0 15px 35px rgba(16, 185, 129, 0.2)' : '0 10px 30px rgba(0,0,0,0.4)'),
              transform: hoveredCard === 3 ? 'translateY(-5px)' : 'translateY(0px)',
              transition: 'all 0.3s ease-in-out',
              position: 'relative',
              overflow: 'hidden',
              color: 'var(--text-color)'
            }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', background: 'linear-gradient(90deg, #10b981, transparent)' }}></div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#10b981', letterSpacing: '1px' }}>WEEK 03 • LIVE SPRINT</span>
              <span style={{ fontSize: '11px', fontWeight: '600', color: '#38bdf8', backgroundColor: isLightMode ? 'rgba(56, 189, 248, 0.08)' : 'rgba(56, 189, 248, 0.1)', padding: '4px 10px', borderRadius: '8px', border: isLightMode ? '1px solid rgba(56, 189, 248, 0.1)' : '1px solid rgba(56, 189, 248, 0.2)' }}>4 Hours Live + Q&amp;A</span>
            </div>

            <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-color)', marginBottom: '12px' }}>Cloud AI, NVIDIA NIM &amp; Enterprise RAG</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-color)', lineHeight: '1.6', marginBottom: '20px' }}>
              Deploy open-weights models (DeepSeek, Llama 3) onto cloud GPUs with NVIDIA NIM. Build production vector search pipelines without hallucination.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '25px', fontSize: '12px', color: 'var(--text-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#10b981' }}>➜</span> Cloud GPU spin-up, serverless inference, and cost optimization</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#10b981' }}>➜</span> Hybrid RAG with Vector DBs + knowledge graph rerankers</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#10b981' }}>➜</span> NVIDIA TensorRT acceleration for low-latency queries</div>
            </div>

            <div style={{ borderTop: 'var(--card-border)', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', color: 'var(--text-color)', opacity: 0.7, fontWeight: '600' }}>Sprint Deliverable:</span>
              <span style={{ fontSize: '12px', color: '#10b981', fontWeight: 'bold' }}>Self-Hosted Enterprise RAG API</span>
            </div>
          </div>

          {/* Weekend 04 */}
          <div 
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{ 
              background: 'var(--card-bg)', 
              border: 'var(--card-border)', 
              borderRadius: '24px', 
              padding: '35px',
              boxShadow: isLightMode ? (hoveredCard === 4 ? '0 10px 20px rgba(245, 158, 11, 0.12)' : '0 4px 12px rgba(0, 0, 0, 0.06)') : (hoveredCard === 4 ? '0 15px 35px rgba(245, 158, 11, 0.2)' : '0 10px 30px rgba(0,0,0,0.4)'),
              transform: hoveredCard === 4 ? 'translateY(-5px)' : 'translateY(0px)',
              transition: 'all 0.3s ease-in-out',
              position: 'relative',
              overflow: 'hidden',
              color: 'var(--text-color)'
            }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', background: 'linear-gradient(90deg, #f59e0b, transparent)' }}></div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#f59e0b', letterSpacing: '1px' }}>WEEK 04 • LIVE SPRINT</span>
              <span style={{ fontSize: '11px', fontWeight: '600', color: '#38bdf8', backgroundColor: isLightMode ? 'rgba(56, 189, 248, 0.08)' : 'rgba(56, 189, 248, 0.1)', padding: '4px 10px', borderRadius: '8px', border: isLightMode ? '1px solid rgba(56, 189, 248, 0.1)' : '1px solid rgba(56, 189, 248, 0.2)' }}>4 Hours Live + Q&amp;A</span>
            </div>

            <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-color)', marginBottom: '12px' }}>Full-Stack Vibe-Coding &amp; Product Launch</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-color)', lineHeight: '1.6', marginBottom: '20px' }}>
              Turn your AI engines into customer-facing SaaS applications. Code at 10x speed with Cursor, v0, and Supabase without getting stuck in boilerplate.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '25px', fontSize: '12px', color: 'var(--text-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#f59e0b' }}>➜</span> Rapid front-end scaffolding and authentication pairing</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#f59e0b' }}>➜</span> Live payment integration, token gating, and usage throttling</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#f59e0b' }}>➜</span> Production deployment to Vercel/Fly.io in minutes</div>
            </div>

            <div style={{ borderTop: 'var(--card-border)', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', color: 'var(--text-color)', opacity: 0.7, fontWeight: '600' }}>Sprint Deliverable:</span>
              <span style={{ fontSize: '12px', color: '#f59e0b', fontWeight: 'bold' }}>Live Monitized AI Web Application</span>
            </div>
          </div>

        </div>
      </section>

      {/* Support Section */}
      <section id="support" style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'inline-block', fontSize: '12px', fontWeight: '800', color: '#ff5722', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>
            Support That Never Sleeps
          </div>
          <h2 style={{ fontSize: '40px', fontWeight: '900', color: 'var(--text-color)', letterSpacing: '-1px' }}>
            How You Are Supported Every Single Day
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' }}>
          
          {[
            { icon: '💬', title: '24/7 Weekday Live Chat', desc: 'Stuck on an API error, CORS issue, or model hallucination at 11:00 PM? Our mentors debug code snippets live within 15 minutes.', tag: '⚡ < 15 min response' },
            { icon: '🛡️', title: 'Private Discord & Slack VIP', desc: 'Direct access to private channels segmented by role: Founders, Engineers, and Growth Hackers. Share alpha, early drops, and requests.', tag: '✅ Lifetime Access' },
            { icon: '📝', title: 'Live Code Reviews', desc: 'Submit your agent architecture and system prompts for 1-on-1 asynchronous video feedback from practitioners building pipelines at scale.', tag: '🚀 Production Best Practices' }
          ].map((item, index) => (
            <div key={index} style={{ 
              background: 'var(--card-bg)',
              border: 'var(--card-border)',
              borderRadius: '24px',
              padding: '35px',
              position: 'relative',
              transition: 'all 0.3s ease-in-out',
              cursor: 'pointer',
              boxShadow: isLightMode ? '0 4px 12px rgba(0, 0, 0, 0.06)' : '0 10px 30px rgba(0,0,0,0.3)',
              color: 'var(--text-color)'
            }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = isLightMode ? 'rgba(255, 87, 34, 0.25)' : 'var(--card-border)'; e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = isLightMode ? '0 12px 22px rgba(0, 0, 0, 0.08)' : '0 10px 30px rgba(0,0,0,0.3)'; }}
            onMouseOut={(e) => { e.currentTarget.style.borderColor = isLightMode ? 'rgba(15, 23, 42, 0.08)' : 'var(--card-border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = isLightMode ? '0 4px 12px rgba(0, 0, 0, 0.06)' : '0 10px 30px rgba(0,0,0,0.3)'; }}
            >
              {/* Glowing Icon Container */}
              <div style={{ 
                width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(255, 87, 34, 0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '25px',
                boxShadow: '0 0 20px rgba(255, 87, 34, 0.2)'
              }}>
                {item.icon}
              </div>

              <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-color)', marginBottom: '15px' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-color)', lineHeight: '1.7', marginBottom: '25px' }}>{item.desc}</p>
              
              <div style={{ 
                display: 'inline-block', fontSize: '12px', fontWeight: '600', color: '#ff5722', 
                padding: '6px 12px', borderRadius: '8px', background: isLightMode ? 'rgba(255, 87, 34, 0.08)' : 'rgba(255, 87, 34, 0.08)', border: isLightMode ? '1px solid rgba(255, 87, 34, 0.12)' : '1px solid rgba(255, 87, 34, 0.15)'
              }}>
                {item.tag}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capstone Section */}
      <section id="finale" style={{ padding: '40px 20px 80px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ 
          background: 'var(--card-bg)', 
          border: 'var(--card-border)', 
          boxShadow: isLightMode ? '0 8px 20px rgba(15, 23, 42, 0.06)' : '0 0 30px rgba(255, 87, 34, 0.1)',
          borderRadius: '24px', 
          padding: '45px', 
          display: 'grid', 
          gridTemplateColumns: '1.4fr 1fr', 
          gap: '35px', 
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          color: 'var(--text-color)',
          transition: 'all 0.3s ease-in-out'
        }}>
          
          {/* Background Glow Effect */}
          <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', backgroundColor: 'rgba(255, 87, 34, 0.15)', filter: 'blur(50px)', borderRadius: '50%', pointerEvents: 'none' }}></div>

          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#ff5722', fontWeight: 'bold', border: '1px solid rgba(255, 87, 34, 0.5)', backgroundColor: 'rgba(255, 87, 34, 0.08)', padding: '5px 14px', borderRadius: '20px', marginBottom: '20px' }}>
              <span>✨ Capstone Graduation Summit</span>
            </div>
            
            <h2 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '15px', letterSpacing: '-0.5px', lineHeight: '1.2' }}>
              The 1-Day Live Networking &amp; <span style={{ color: '#ff5722' }}>Demo Day Experience</span>
            </h2>
            
            <p style={{ color: 'var(--text-color)', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
              Learning online is efficient, but lasting career leaps happen when you build real connections. At the conclusion of Cohort 14, join our high-energy 1-Day Capstone Summit.
            </p>

            {/* Rich Content Grid with 4 Detailed Points */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: '#22c55e', fontSize: '15px', fontWeight: 'bold' }}>✓</span>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--text-color)' }}>Demo Your Build</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-color)', lineHeight: '1.4' }}>Pitch your agent or product to tech leaders, investors, and peers.</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: '#22c55e', fontSize: '15px', fontWeight: 'bold' }}>✓</span>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--text-color)' }}>Co-Founder Speed Match</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-color)', lineHeight: '1.4' }}>Meet builders who complement your technical or business skills.</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: '#22c55e', fontSize: '15px', fontWeight: 'bold' }}>✓</span>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--text-color)' }}>Hybrid Global Access</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-color)', lineHeight: '1.4' }}>Attend in-person at hub meetups or via dynamic virtual breakout stages.</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: '#22c55e', fontSize: '15px', fontWeight: 'bold' }}>✓</span>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--text-color)' }}>Exclusive Talent Directory</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-color)', lineHeight: '1.4' }}>Get featured in our vetted hiring directory sent to top startups.</div>
                </div>
              </div>
            </div>

            {/* Extra Bottom Link */}
            <div>
              <a href="#schedule" style={{ color: '#ff5722', fontSize: '13px', fontWeight: '600', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                Explore the Demo Day Schedule &amp; Pitch Formats &rarr;
              </a>
            </div>
          </div>

          <div style={{ 
            background: 'var(--card-bg)', 
            border: 'var(--card-border)', 
            borderRadius: '18px', 
            padding: '25px', 
            textAlign: 'center',
            boxShadow: isLightMode ? '0 4px 12px rgba(0, 0, 0, 0.06)' : '0 10px 25px rgba(0,0,0,0.5)',
            color: 'var(--text-color)',
            transition: 'all 0.3s ease-in-out'
          }}>
            <div style={{ fontSize: '36px', marginBottom: '10px' }}>🎓</div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '6px', color: 'var(--text-color)' }}>AI Hustlers™ Fellow Certificate</h3>
            <p style={{ color: 'var(--text-color)', fontSize: '12px', lineHeight: '1.5', marginBottom: '20px' }}>Verified credential showcasing 4 production-grade projects &amp; agent builds.</p>
            
            <div style={{ background: 'var(--card-bg)', border: 'var(--card-border)', padding: '12px', borderRadius: '10px', fontSize: '11px', textAlign: 'left', color: 'var(--text-color)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ color: 'var(--text-color)', opacity: 0.75 }}>Credential ID:</span>
                <span style={{ color: 'var(--text-color)', fontWeight: '600' }}>AIH-2026-C14</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: 'var(--text-color)', opacity: 0.75 }}>Status:</span>
                <span style={{ color: '#22c55e', fontWeight: 'bold' }}>● Accredited Peer Network</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ display: 'inline-block', fontSize: '12px', fontWeight: '800', color: '#ff5722', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>
            Real Builders. Real Numbers.
          </div>
          <h2 style={{ fontSize: '38px', fontWeight: '900', letterSpacing: '-0.5px', color: 'var(--text-color)' }}>
            What Happens When You Actually Ship
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' }}>
          
          {/* Card 1 */}
          <div style={{ 
            background: 'var(--card-bg)', 
            border: 'var(--card-border)', 
            borderRadius: '20px', 
            padding: '30px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            position: 'relative',
            overflow: 'hidden',
            color: 'var(--text-color)'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', background: 'linear-gradient(90deg, #ff5722, transparent)' }}></div>
            <div>
              <div style={{ color: '#f59e0b', fontSize: '16px', letterSpacing: '3px', marginBottom: '18px' }}>★★★★★</div>
              <p style={{ color: 'var(--text-color)', fontSize: '14px', lineHeight: '1.7', marginBottom: '25px', fontStyle: 'italic' }}>
                "We replaced our entire $15k/mo video agency retainer with an internal Runway Gen-3 and ElevenLabs pipeline. The 24/7 Slack support helped us solve our character consistency issues on day 2."
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: 'var(--card-border)', paddingTop: '15px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#ff5722', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#fff', fontSize: '14px' }}>SK</div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '13px', color: 'var(--text-color)' }}>Sarah K.</div>
                <div style={{ fontSize: '11px', color: 'var(--text-color)' }}>Head of Growth, Nexa Media</div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div style={{ 
            background: 'var(--card-bg)', 
            border: 'var(--card-border)', 
            borderRadius: '20px', 
            padding: '30px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            boxShadow: '0 15px 35px rgba(255, 87, 34, 0.08)',
            position: 'relative',
            overflow: 'hidden',
            color: 'var(--text-color)'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', background: 'linear-gradient(90deg, #ff5722, #f59e0b)' }}></div>
            <div>
              <div style={{ color: '#f59e0b', fontSize: '16px', letterSpacing: '3px', marginBottom: '18px' }}>★★★★★</div>
              <p style={{ color: 'var(--text-color)', fontSize: '14px', lineHeight: '1.7', marginBottom: '25px', fontStyle: 'italic' }}>
                "The cloud AI and NVIDIA NIM session alone was worth 10x the price. I went from struggling with basic API rate limits to self-hosting fine-tuned models for our fintech clients."
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: 'var(--card-border)', paddingTop: '15px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#fff', fontSize: '14px' }}>RM</div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '13px', color: 'var(--text-color)' }}>Rohit Mehta</div>
                <div style={{ fontSize: '11px', color: 'var(--text-color)' }}>AI Architect &amp; Founder</div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div style={{ 
            background: 'var(--card-bg)', 
            border: 'var(--card-border)', 
            borderRadius: '20px', 
            padding: '30px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            position: 'relative',
            overflow: 'hidden',
            color: 'var(--text-color)'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', background: 'linear-gradient(90deg, transparent, #ff5722)' }}></div>
            <div>
              <div style={{ color: '#f59e0b', fontSize: '16px', letterSpacing: '3px', marginBottom: '18px' }}>★★★★★</div>
              <p style={{ color: 'var(--text-color)', fontSize: '14px', lineHeight: '1.7', marginBottom: '25px', fontStyle: 'italic' }}>
                "The 1-Day networking finale is where I met my current technical co-founder. We pitched our multi-agent customer support platform and secured our pre-seed angel commitment within 10 days."
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: 'var(--card-border)', paddingTop: '15px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#fff', fontSize: '14px' }}>AT</div>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '13px', color: 'var(--text-color)' }}>Alex Turner</div>
                <div style={{ fontSize: '11px', color: 'var(--text-color)' }}>Co-Founder, Synthelix AI</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section id="faq" style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ fontSize: '12px', color: '#ff5722', fontWeight: 'bold', letterSpacing: '1px' }}>CLEAR ANSWERS</span>
          <h2 style={{ fontSize: '38px', fontWeight: '800', marginTop: '10px' }}>Frequently Asked Questions</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div 
                key={i} 
                onClick={() => setOpenFaq(isOpen ? null : i)}
                style={{ 
                  background: 'var(--card-bg)', 
                  border: isOpen ? '1px solid #ff5722' : 'var(--card-border)', 
                  borderRadius: '12px', 
                  padding: '20px 25px', 
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  boxShadow: isLightMode ? '0 4px 12px rgba(0, 0, 0, 0.05)' : 'none',
                  color: 'var(--text-color)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '15px', fontWeight: '600' }}>{faq.q}</span>
                  <span style={{ color: '#ff5722', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease', fontSize: '18px' }}>
                    ⌄
                  </span>
                </div>
                {isOpen && (
                  <div style={{ marginTop: '15px', color: 'var(--text-color)', fontSize: '14px', lineHeight: '1.6', borderTop: 'var(--card-border)', paddingTop: '15px' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing / CTA Section */}
      <section id="pricing" style={{ padding: '80px 20px 100px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', border: 'var(--card-border)', borderRadius: '24px', padding: '60px 40px', background: 'var(--card-bg)', boxShadow: isLightMode ? '0 8px 20px rgba(15, 23, 42, 0.06)' : '0 10px 30px rgba(0,0,0,0.3)', transition: 'all 0.3s ease-in-out' }}>
          
          <div style={{ display: 'inline-block', backgroundColor: '#1e293b', color: '#ff5722', fontSize: '12px', padding: '6px 14px', borderRadius: '20px', marginBottom: '20px', fontWeight: 'bold' }}>
            ⚡ Cohort 14 &bull; 75 Total Seats (Strict Cap)
          </div>

          <h2 style={{ fontSize: '42px', fontWeight: '900', marginBottom: '15px', lineHeight: '1.2' }}>
            Stop Observing the AI Boom.<br />Start Engineering It.
          </h2>
          
          <p style={{ color: 'var(--text-color)', fontSize: '15px', lineHeight: '1.6', marginBottom: '35px' }}>
            Join the elite community of modern builders. 4 weekends of hands-on builds, continuous 24/7 weekday chat debugging, private Slack/Discord, and the live graduation summit.
          </p>

          <div style={{ background: 'var(--card-bg)', border: 'var(--card-border)', borderRadius: '16px', padding: '30px', maxWidth: '500px', margin: '0 auto', color: 'var(--text-color)', boxShadow: isLightMode ? '0 4px 12px rgba(0, 0, 0, 0.06)' : 'none', transition: 'all 0.3s ease-in-out' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '15px', marginBottom: '15px' }}>
              <span style={{ fontSize: '38px', fontWeight: '900', color: 'var(--text-color)' }}>$497</span>
              <span style={{ fontSize: '16px', color: 'var(--text-color)', opacity: 0.6, textDecoration: 'line-through' }}>$997</span>
              <span style={{ backgroundColor: '#431407', color: '#ff5722', fontSize: '11px', fontWeight: 'bold', padding: '3px 8px', borderRadius: '6px' }}>SAVE 50%</span>
            </div>
            
            <p style={{ color: 'var(--text-color)', fontSize: '13px', marginBottom: '25px' }}>
              Includes all 4 Live Sprints + 24/7 Support + $500 in AI Tool Credits
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input 
                type="email" 
                placeholder="Enter your work or primary email" 
                style={{ background: 'var(--card-bg)', border: 'var(--card-border)', borderRadius: '10px', padding: '14px 16px', color: 'var(--text-color)', fontSize: '14px', outline: 'none', width: '100%', boxSizing: 'border-box' }}
              />
              <button style={{ backgroundColor: '#ff5722', color: '#fff', border: 'none', borderRadius: '10px', padding: '14px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}>
                Secure Your Cohort 14 Seat &rarr;
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Footer Section */}
      <footer style={{ 
  borderTop: 'var(--card-border)', 
  background: 'var(--card-bg)', 
  padding: '50px 20px 30px 20px', 
  color: 'var(--text-color)',
  marginTop: '60px'
}}>
  <div style={{ 
    maxWidth: '1100px', 
    margin: '0 auto', 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'flex-start', 
    flexWrap: 'wrap', 
    gap: '30px',
    marginBottom: '40px'
  }}>
    
    {/* Left: Brand Info */}
    <div style={{ maxWidth: '300px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
        <span style={{ background: '#ff5722', width: '10px', height: '10px', borderRadius: '50%', display: 'inline-block' }}></span>
        <span style={{ color: 'var(--text-color)', fontWeight: 'bold', fontSize: '16px', letterSpacing: '0.5px' }}>AI HUSTLERSS PRO</span>
      </div>
      <p style={{ fontSize: '13px', lineHeight: '1.5', color: 'var(--text-color)' }}>
        The high-tempo accelerator for builders, operators, and engineers mastering production-grade AI.
      </p>
    </div>
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

    {/* Right: Links Columns */}
    <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
      <div>
        <div style={{ color: 'var(--text-color)', fontWeight: 'bold', fontSize: '14px', marginBottom: '12px' }}>Navigation</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
          <li><a href="#curriculum" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>Curriculum</a></li>
          <li><a href="#tech-stack" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>AI Tech Stack</a></li>
          <li><a href="#support" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>Experience & Support</a></li>
        </ul>
      </div>

      <div>
        <div style={{ color: 'var(--text-color)', fontWeight: 'bold', fontSize: '14px', marginBottom: '12px' }}>Connect</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
          <li><a href="https://discord.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>Discord Community</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>Twitter / X</a></li>
          <li><a href="https://www.instagram.com/aihustlerrs?igsi=MTM5YnFyb2xudW10Ng==" target="_blank" rel="noreferrer" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>instagram</a></li>
          <li><a href="https://www.facebook.com/profile.php?fb_profile_edit_entry_point=%7B%22click_point%22%3A%22edit_profile_button%22%2C%22feature%22%3A%22profile_header%22%7D&id=61593797930185&sk=about" target="_blank" rel="noreferrer" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>facebook</a></li>
          <li><a href="mailto:support@aihustlers.pro" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>Support Desk</a></li>
        </ul>
      </div>
    </div>

  </div>

  {/* Bottom Copyright Bar */}
  <div style={{ 
    maxWidth: '1100px', 
    margin: '0 auto', 
    borderTop: 'var(--card-border)', 
    paddingTop: '20px', 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    fontSize: '12px',
    flexWrap: 'wrap',
    gap: '10px'
  }}>
    <div>© 2026 AI Hustlerss Pro. All rights reserved.</div>
    <div style={{ color: '#ff5722' }}>Built with high-tempo execution.</div>
  </div>
</footer>

    </div>
  );
}