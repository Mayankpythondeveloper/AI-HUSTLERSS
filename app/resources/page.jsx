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

  const cardShadow = isLightMode ? '0 4px 12px rgba(15, 23, 42, 0.06)' : '0 10px 30px rgba(0, 0, 0, 0.3)';
  const softBorder = isLightMode ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(255, 255, 255, 0.08)';

  const [openFaq, setOpenFaq] = useState(0);

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
      transition: 'background-color 0.4s ease, color 0.4s ease',
      overflowX: 'hidden'
    }}>
      
      {/* Responsive Custom CSS, Animations & Glow/Popup Effects */}
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

        /* Hover Glow & Popup Effect for Cards */
        .hover-card-effect {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease !important;
        }
        .hover-card-effect:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 12px 35px rgba(255, 87, 34, 0.25) !important;
          border-color: rgba(255, 87, 34, 0.5) !important;
        }

        /* Global Responsive Breakpoints */
        @media (max-width: 1024px) {
          .responsive-grid-4 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .responsive-grid-3 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .responsive-grid-2 {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          header {
            padding: 15px 20px !important;
          }
          header nav {
            display: none !important;
          }
          .responsive-grid-4, 
          .responsive-grid-3, 
          .responsive-grid-2 {
            grid-template-columns: 1fr !important;
          }
          .hero-title {
            font-size: 28px !important;
          }
          .footer-container {
            flex-direction: column !important;
            gap: 30px !important;
          }
        }
      `}</style>

      {/* Navbar */}
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '20px 40px', 
        borderBottom: softBorder,
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: 1000,
        backgroundColor: isLightMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(12, 12, 16, 0.9)',
        backdropFilter: 'blur(10px)',
        width: '100%',
        boxSizing: 'border-box',
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
          <a href="#roadmap" style={{ textDecoration: 'none', color: 'inherit' }}>Curriculum</a>
          <a href="#tech-stack" style={{ textDecoration: 'none', color: 'inherit' }}>AI Tech Stack</a>
          <a href="#support" style={{ textDecoration: 'none', color: 'inherit' }}>Experience & Support</a>
          <a href="#finale" style={{ textDecoration: 'none', color: 'inherit' }}>Live Finale</a>
          <a href="#faq" style={{ textDecoration: 'none', color: 'inherit' }}>FAQ</a>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a href="#pricing" style={{ backgroundColor: '#ff5722', color: '#fff', padding: '10px 16px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '13px', boxShadow: isLightMode ? '0 8px 18px rgba(255, 87, 34, 0.18)' : '0 4px 16px rgba(255, 87, 34, 0.2)' }}>
            Enroll
          </a>

          <button 
            onClick={toggleTheme}
            style={{
              background: isLightMode ? 'rgba(15, 23, 42, 0.04)' : 'rgba(255, 255, 255, 0.08)',
              border: softBorder,
              borderRadius: '50px',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: isLightMode ? '#111827' : '#fff',
              fontSize: '16px',
              transition: 'all 0.3s ease-in-out'
            }}
            title="Toggle Light/Dark Mode"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ 
        textAlign: 'center', 
        padding: '60px 20px 80px 20px', 
        marginTop: '80px', 
        maxWidth: '1000px', 
        marginInline: 'auto' 
      }}>
        
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: isLightMode ? 'rgba(255, 87, 34, 0.08)' : 'rgba(255, 87, 34, 0.12)', border: '1px solid rgba(255, 87, 34, 0.3)', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: '600', color: '#ff5722', marginBottom: '25px' }}>
          <span style={{ width: '8px', height: '8px', backgroundColor: '#ff5722', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 8px #ff5722' }}></span>
          <span>Cohort 14 Application Window &bull; Starts Saturday, 10:00 AM EST</span>
        </div>

        <h1 className="hero-title" style={{ fontSize: '37px', fontWeight: '800', lineHeight: '1.15', marginBottom: '20px' }}>
          Stop Watching AI Demos.<br />
          <span style={{ color: '#ff5722' }}>Build Production-Grade AI</span> In 4 Weekends.
        </h1>

        <p style={{ color: 'var(--text-color)', maxWidth: '650px', margin: '0 auto 30px', fontSize: '16px', lineHeight: '1.5' }}>
          The high-tempo accelerator for builders, operators, and engineers. Master autonomous agents, cloud GPU deployment, and vibe-coding with 24/7 weekday technical support.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' }}>
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
          <a href="#roadmap" style={{ 
            background: 'var(--card-bg)', 
            color: 'var(--text-color)', 
            border: softBorder,
            padding: '14px 28px', 
            borderRadius: '10px', 
            textDecoration: 'none', 
            fontWeight: 'bold', 
            fontSize: '15px' 
          }}>
            View 4-Week Plan
          </a>
        </div>

        <div className="responsive-grid-4" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '12px', 
          maxWidth: '900px', 
          margin: '0 auto' 
        }}>
          <div className="hover-card-effect" style={{ display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left', padding: '15px', background: 'var(--card-bg)', border: softBorder, borderRadius: '10px' }}>
            <span style={{ fontSize: '20px' }}>💬</span>
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '13px' }}>24/7 Weekday Chat</div>
              <div style={{ fontSize: '10px', opacity: 0.8 }}>Continuous Support</div>
            </div>
          </div>

          <div className="hover-card-effect" style={{ ...surfaceStyle, display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left', padding: '15px', borderRadius: '10px' }}>
            <span style={{ fontSize: '20px' }}>🚀</span>
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '13px' }}>4 Weekend Sprints</div>
              <div style={{ fontSize: '10px', opacity: 0.8 }}>Live & Interactive</div>
            </div>
          </div>

          <div className="hover-card-effect" style={{ ...surfaceStyle, display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left', padding: '15px', borderRadius: '10px' }}>
            <span style={{ fontSize: '20px' }}>🛡️</span>
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '13px' }}>Discord + Slack VIP</div>
              <div style={{ fontSize: '10px', opacity: 0.8 }}>Private Inner Circle</div>
            </div>
          </div>

          <div className="hover-card-effect" style={{ ...surfaceStyle, display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left', padding: '15px', borderRadius: '10px' }}>
            <span style={{ fontSize: '20px' }}>🎤</span>
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '13px' }}>1-Day Networking</div>
              <div style={{ fontSize: '10px', opacity: 0.8 }}>Capstone Demo Day</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sliding Tech Stack Marquee Section */}
      <section id="tech-stack" style={{ 
        borderTop: softBorder, 
        borderBottom: softBorder, 
        padding: '25px 0', 
        backgroundColor: isLightMode ? '#f8fafc' : '#0b0f17', 
        overflow: 'hidden', 
        position: 'relative'
      }}>
        <div style={{ fontSize: '11px', color: 'var(--text-color)', letterSpacing: '1.5px', marginBottom: '15px', fontWeight: 'bold', textAlign: 'center', opacity: 0.8 }}>
          LEARN, DEPLOY, & SCALE WITH BLEEDING-EDGE PRODUCTION TOOLS
        </div>
        
        <div style={{ display: 'flex', width: '100%', overflow: 'hidden' }}>
          <div className="marquee-container">
            <div style={{ display: 'flex', gap: '60px', alignItems: 'center', paddingRight: '60px', whiteSpace: 'nowrap', fontSize: '15px', fontWeight: '600' }}>
              <span>✨ Runway Gen-3 Alpha</span>
              <span>🤖 Manus Autonomous Agents</span>
              <span>💬 ChatGPT &amp; GPT-4o</span>
              <span>☁️ Cloud GPU Orchestration</span>
              <span>⚡ Claude 3.7 Sonnet</span>
              <span>🎙️ ElevenLabs Voice Agents</span>
            </div>
            <div style={{ display: 'flex', gap: '60px', alignItems: 'center', paddingRight: '60px', whiteSpace: 'nowrap', fontSize: '15px', fontWeight: '600' }}>
              <span>✨ Runway Gen-3 Alpha</span>
              <span>🤖 Manus Autonomous Agents</span>
              <span>💬 ChatGPT &amp; GPT-4o</span>
              <span>☁️ Cloud GPU Orchestration</span>
              <span>⚡ Claude 3.7 Sonnet</span>
              <span>🎙️ ElevenLabs Voice Agents</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ display: 'inline-block', fontSize: '11px', color: '#ff5722', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '15px', textTransform: 'uppercase' }}>
            No More Shelfware Courses
          </div>
          <h2 style={{ fontSize: '38px', fontWeight: '900', letterSpacing: '-1px', lineHeight: '1.2' }}>
            Designed For Action, Not Passive Video <br />Watching.
          </h2>
        </div>

        <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
          <div className="hover-card-effect" style={{ background: 'var(--card-bg)', border: softBorder, borderRadius: '24px', padding: '40px', boxShadow: cardShadow }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px' }}>
              <span style={{ fontSize: '18px', color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '8px', borderRadius: '10px' }}>❌</span>
              <h3 style={{ fontSize: '20px', fontWeight: '800', margin: 0 }}>Traditional AI Courses</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '13.5px', lineHeight: '1.6' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><span style={{ color: '#ef4444', fontWeight: 'bold' }}>✕</span><span>Outdated pre-recorded video lectures explaining basic text prompts.</span></div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><span style={{ color: '#ef4444', fontWeight: 'bold' }}>✕</span><span>Dead community message boards where questions sit unanswered.</span></div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><span style={{ color: '#ef4444', fontWeight: 'bold' }}>✕</span><span>Academic math derivations with zero connection to real business ROI.</span></div>
            </div>
          </div>

          <div className="hover-card-effect" style={{ background: 'var(--card-bg)', border: softBorder, borderRadius: '24px', padding: '40px', boxShadow: cardShadow, position: 'relative' }}>
            <div style={{ position: 'absolute', top: '25px', right: '25px', backgroundColor: '#ff5722', color: '#fff', fontSize: '10px', fontWeight: '800', padding: '5px 12px', borderRadius: '20px' }}>THE NEW STANDARD</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px' }}>
              <span style={{ fontSize: '18px', color: '#ff5722', backgroundColor: 'rgba(255, 87, 34, 0.15)', padding: '8px', borderRadius: '10px' }}>⚡</span>
              <h3 style={{ fontSize: '20px', fontWeight: '800', margin: 0 }}>The AI Hustlers Accelerator</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '13.5px', lineHeight: '1.6' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><span style={{ color: '#ff5722', fontWeight: 'bold' }}>✓</span><span>Real-time refreshed workflows covering Manus, Runway, & Claude.</span></div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><span style={{ color: '#ff5722', fontWeight: 'bold' }}>✓</span><span>24/7 Weekday Live Chat with dedicated technical mentors.</span></div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}><span style={{ color: '#ff5722', fontWeight: 'bold' }}>✓</span><span>Practical Vibe-Coding to ship real, revenue-generating apps.</span></div>
            </div>
          </div>
        </div>
      </section>

        {/* 3D Rotating Cube (Bada Size & Cleaned) */}
    <div className="cube-container">
      <div className="cube">
        <div className="cube-face cube-face-front">
          <img src="/logo.jpeg" alt="AI Hustlers Logo" />
        </div>
        <div className="cube-face cube-face-back">
          <img src="/logo.jpeg" alt="AI Hustlers Logo" />
        </div>
        <div className="cube-face cube-face-right">
          <img src="/logo.jpeg" alt="AI Hustlers Logo" />
        </div>
        <div className="cube-face cube-face-left">
          <img src="/logo.jpeg" alt="AI Hustlers Logo" />
        </div>
      </div>
    </div>

      {/* 4-Weekend Roadmap Section */}
      <section id="roadmap" style={{ padding: '80px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#ff5722', fontWeight: 'bold', border: '1px solid rgba(255, 87, 34, 0.25)', backgroundColor: 'rgba(255, 87, 34, 0.08)', padding: '5px 14px', borderRadius: '20px', marginBottom: '15px' }}>
            <span>🚀 4-WEEKEND ROADMAP</span>
          </div>
          <h2 style={{ fontSize: '40px', fontWeight: '900', letterSpacing: '-1px', marginBottom: '15px' }}>
            Master the Full Generative &amp; <span style={{ color: '#ff5722' }}>Agentic Spectrum</span>
          </h2>
        </div>

        <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
          <div className="hover-card-effect" style={{ background: 'var(--card-bg)', border: softBorder, borderRadius: '24px', padding: '35px', boxShadow: cardShadow }}>
            <span style={{ fontSize: '11px', fontWeight: '800', color: '#ff5722', letterSpacing: '1px' }}>WEEK 01 • LIVE SPRINT</span>
            <h3 style={{ fontSize: '22px', fontWeight: '800', margin: '12px 0' }}>Agentic Systems &amp; Multi-Model Orchestration</h3>
            <p style={{ fontSize: '13px', lineHeight: '1.6', opacity: 0.9, marginBottom: '20px' }}>Build autonomous task agents with Manus, Claude 3.7 Sonnet, and OpenAI Codex with memory and tool execution.</p>
            <div style={{ borderTop: softBorder, paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', opacity: 0.7 }}>Deliverable:</span>
              <span style={{ fontSize: '12px', color: '#ff5722', fontWeight: 'bold' }}>Custom Autonomous Agent</span>
            </div>
          </div>

          <div className="hover-card-effect" style={{ background: 'var(--card-bg)', border: softBorder, borderRadius: '24px', padding: '35px', boxShadow: cardShadow }}>
            <span style={{ fontSize: '11px', fontWeight: '800', color: '#38bdf8', letterSpacing: '1px' }}>WEEK 02 • LIVE SPRINT</span>
            <h3 style={{ fontSize: '22px', fontWeight: '800', margin: '12px 0' }}>Cinema-Grade Visual &amp; Multimodal Pipelines</h3>
            <p style={{ fontSize: '13px', lineHeight: '1.6', opacity: 0.9, marginBottom: '20px' }}>Master Runway Gen-3 Alpha, Midjourney consistency seeds, and ElevenLabs synthetic voice engines.</p>
            <div style={{ borderTop: softBorder, paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', opacity: 0.7 }}>Deliverable:</span>
              <span style={{ fontSize: '12px', color: '#38bdf8', fontWeight: 'bold' }}>Broadcast Multimodal Campaign</span>
            </div>
          </div>

          <div className="hover-card-effect" style={{ background: 'var(--card-bg)', border: softBorder, borderRadius: '24px', padding: '35px', boxShadow: cardShadow }}>
            <span style={{ fontSize: '11px', fontWeight: '800', color: '#10b981', letterSpacing: '1px' }}>WEEK 03 • LIVE SPRINT</span>
            <h3 style={{ fontSize: '22px', fontWeight: '800', margin: '12px 0' }}>Cloud AI, NVIDIA NIM &amp; Enterprise RAG</h3>
            <p style={{ fontSize: '13px', lineHeight: '1.6', opacity: 0.9, marginBottom: '20px' }}>Deploy open-weights models onto cloud GPUs with NVIDIA NIM and build vector search pipelines.</p>
            <div style={{ borderTop: softBorder, paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', opacity: 0.7 }}>Deliverable:</span>
              <span style={{ fontSize: '12px', color: '#10b981', fontWeight: 'bold' }}>Self-Hosted Enterprise RAG</span>
            </div>
          </div>

          <div className="hover-card-effect" style={{ background: 'var(--card-bg)', border: softBorder, borderRadius: '24px', padding: '35px', boxShadow: cardShadow }}>
            <span style={{ fontSize: '11px', fontWeight: '800', color: '#f59e0b', letterSpacing: '1px' }}>WEEK 04 • LIVE SPRINT</span>
            <h3 style={{ fontSize: '22px', fontWeight: '800', margin: '12px 0' }}>Full-Stack Vibe-Coding &amp; Product Launch</h3>
            <p style={{ fontSize: '13px', lineHeight: '1.6', opacity: 0.9, marginBottom: '20px' }}>Turn AI engines into customer SaaS apps. Code at 10x speed with Cursor, v0, and Supabase.</p>
            <div style={{ borderTop: softBorder, paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', opacity: 0.7 }}>Deliverable:</span>
              <span style={{ fontSize: '12px', color: '#f59e0b', fontWeight: 'bold' }}>Monitized AI Web App</span>
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
          <h2 style={{ fontSize: '40px', fontWeight: '900', letterSpacing: '-1px' }}>
            How You Are Supported Every Single Day
          </h2>
        </div>

        <div className="responsive-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' }}>
          {[
            { icon: '💬', title: '24/7 Weekday Live Chat', desc: 'Stuck on an API error or model hallucination at 11:00 PM? Mentors debug code live within 15 minutes.', tag: '⚡ < 15 min response' },
            { icon: '🛡️', title: 'Private Discord & Slack VIP', desc: 'Direct access to private channels segmented by role: Founders, Engineers, and Growth Hackers.', tag: '✅ Lifetime Access' },
            { icon: '📝', title: 'Live Code Reviews', desc: 'Submit your agent architecture and system prompts for 1-on-1 asynchronous video feedback.', tag: '🚀 Production Best Practices' }
          ].map((item, index) => (
            <div key={index} className="hover-card-effect" style={{ background: 'var(--card-bg)', border: softBorder, borderRadius: '24px', padding: '35px', boxShadow: cardShadow }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(255, 87, 34, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '25px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.7', marginBottom: '25px', opacity: 0.9 }}>{item.desc}</p>
              <div style={{ display: 'inline-block', fontSize: '12px', fontWeight: '600', color: '#ff5722', padding: '6px 12px', borderRadius: '8px', background: 'rgba(255, 87, 34, 0.08)', border: '1px solid rgba(255, 87, 34, 0.15)' }}>{item.tag}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Capstone Section */}
      <section id="finale" style={{ padding: '40px 20px 80px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div className="responsive-grid-2 hover-card-effect" style={{ 
          background: 'var(--card-bg)', border: softBorder, boxShadow: cardShadow,
          borderRadius: '24px', padding: '45px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '35px', alignItems: 'center'
        }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#ff5722', fontWeight: 'bold', border: '1px solid rgba(255, 87, 34, 0.5)', backgroundColor: 'rgba(255, 87, 34, 0.08)', padding: '5px 14px', borderRadius: '20px', marginBottom: '20px' }}>
              <span>✨ Capstone Graduation Summit</span>
            </div>
            <h2 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '15px', lineHeight: '1.2' }}>
              The 1-Day Live Networking &amp; <span style={{ color: '#ff5722' }}>Demo Day Experience</span>
            </h2>
            <p style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '20px', opacity: 0.9 }}>
              Join our high-energy 1-Day Capstone Summit to showcase your builds, network with peers, and match with co-founders.
            </p>
          </div>

          <div style={{ background: 'var(--card-bg)', border: softBorder, borderRadius: '18px', padding: '25px', textAlign: 'center', boxShadow: cardShadow }}>
            <div style={{ fontSize: '36px', marginBottom: '10px' }}>🎓</div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '6px' }}>AI Hustlers™ Fellow Certificate</h3>
            <p style={{ fontSize: '12px', lineHeight: '1.5', marginBottom: '20px', opacity: 0.8 }}>Verified credential showcasing 4 production-grade projects.</p>
            <div style={{ background: 'var(--card-bg)', border: softBorder, padding: '12px', borderRadius: '10px', fontSize: '11px', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}><span style={{ opacity: 0.75 }}>ID:</span><span style={{ fontWeight: '600' }}>AIH-2026-C14</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ opacity: 0.75 }}>Status:</span><span style={{ color: '#22c55e', fontWeight: 'bold' }}>● Accredited</span></div>
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
          <h2 style={{ fontSize: '38px', fontWeight: '900' }}>What Happens When You Actually Ship</h2>
        </div>

        <div className="responsive-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' }}>
          {[
            { quote: "We replaced our entire video agency retainer with an internal Runway Gen-3 and ElevenLabs pipeline.", name: "Sarah K.", role: "Head of Growth, Nexa Media", color: '#ff5722' },
            { quote: "The cloud AI and NVIDIA NIM session was worth 10x the price. I went from API limits to self-hosting fine-tuned models.", name: "Rohit Mehta", role: "AI Architect & Founder", color: '#3b82f6' },
            { quote: "The networking finale is where I met my technical co-founder. We secured our pre-seed angel commitment within 10 days.", name: "Alex Turner", role: "Co-Founder, Synthelix AI", color: '#10b981' }
          ].map((t, idx) => (
            <div key={idx} className="hover-card-effect" style={{ background: 'var(--card-bg)', border: softBorder, borderRadius: '20px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: cardShadow }}>
              <div>
                <div style={{ color: '#f59e0b', fontSize: '16px', letterSpacing: '3px', marginBottom: '18px' }}>★★★★★</div>
                <p style={{ fontSize: '14px', lineHeight: '1.7', marginBottom: '25px', fontStyle: 'italic', opacity: 0.9 }}>"{t.quote}"</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: softBorder, paddingTop: '15px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#fff', fontSize: '14px' }}>{t.name[0]}</div>
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '13px' }}>{t.name}</div>
                  <div style={{ fontSize: '11px', opacity: 0.75 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
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
                className="hover-card-effect"
                style={{ background: 'var(--card-bg)', border: isOpen ? '1px solid #ff5722' : softBorder, borderRadius: '12px', padding: '20px 25px', cursor: 'pointer', boxShadow: cardShadow }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '15px', fontWeight: '600' }}>{faq.q}</span>
                  <span style={{ color: '#ff5722', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease', fontSize: '18px' }}>⌄</span>
                </div>
                {isOpen && (
                  <div style={{ marginTop: '15px', fontSize: '14px', lineHeight: '1.6', borderTop: softBorder, paddingTop: '15px', opacity: 0.9 }}>
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
        <div className="hover-card-effect" style={{ maxWidth: '700px', margin: '0 auto', border: softBorder, borderRadius: '24px', padding: '40px 20px', background: 'var(--card-bg)', boxShadow: cardShadow }}>
          
          <div style={{ display: 'inline-block', backgroundColor: '#1e293b', color: '#ff5722', fontSize: '12px', padding: '6px 14px', borderRadius: '20px', marginBottom: '20px', fontWeight: 'bold' }}>
            ⚡ Cohort 14 &bull; 75 Total Seats (Strict Cap)
          </div>

          <h2 style={{ fontSize: '36px', fontWeight: '900', marginBottom: '15px', lineHeight: '1.2' }}>
            Stop Observing the AI Boom.<br />Start Engineering It.
          </h2>
          
          <p style={{ fontSize: '15px', lineHeight: '1.6', marginBottom: '35px', opacity: 0.9 }}>
            Join the elite community of modern builders. 4 weekends of hands-on builds, continuous 24/7 weekday chat debugging, and private channels.
          </p>

          <div style={{ background: 'var(--card-bg)', border: softBorder, borderRadius: '16px', padding: '25px', maxWidth: '500px', margin: '0 auto', boxShadow: cardShadow }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '15px', marginBottom: '15px' }}>
              <span style={{ fontSize: '38px', fontWeight: '900' }}>$497</span>
              <span style={{ fontSize: '16px', opacity: 0.6, textDecoration: 'line-through' }}>$997</span>
              <span style={{ backgroundColor: '#431407', color: '#ff5722', fontSize: '11px', fontWeight: 'bold', padding: '3px 8px', borderRadius: '6px' }}>SAVE 50%</span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input 
                type="email" 
                placeholder="Enter your work or primary email" 
                style={{ background: 'var(--card-bg)', border: softBorder, borderRadius: '10px', padding: '14px 16px', color: 'var(--text-color)', fontSize: '14px', outline: 'none', width: '100%', boxSizing: 'border-box' }}
              />
              <button style={{ backgroundColor: '#ff5722', color: '#fff', border: 'none', borderRadius: '10px', padding: '14px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}>
                Secure Your Cohort 14 Seat &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={{ borderTop: softBorder, background: 'var(--card-bg)', padding: '50px 20px 30px 20px', marginTop: '60px' }}>
        <div className="footer-container" style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '30px', marginBottom: '40px' }}>
          
          <div style={{ maxWidth: '300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span style={{ background: '#ff5722', width: '10px', height: '10px', borderRadius: '50%', display: 'inline-block' }}></span>
              <span style={{ fontWeight: 'bold', fontSize: '16px' }}>AI HUSTLERSS PRO</span>
            </div>
            <p style={{ fontSize: '13px', lineHeight: '1.5', opacity: 0.8 }}>
              The high-tempo accelerator for builders, operators, and engineers mastering production-grade AI.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '12px' }}>Navigation</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
                <li><a href="#roadmap" style={{ color: 'inherit', textDecoration: 'none' }}>Curriculum</a></li>
                <li><a href="#tech-stack" style={{ color: 'inherit', textDecoration: 'none' }}>AI Tech Stack</a></li>
                <li><a href="#support" style={{ color: 'inherit', textDecoration: 'none' }}>Support</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '1100px', margin: '0 auto', borderTop: softBorder, paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', flexWrap: 'wrap', gap: '10px', opacity: 0.8 }}>
          <div>© 2026 AI Hustlerss Pro. All rights reserved.</div>
          <div style={{ color: '#ff5722' }}>Built with high-tempo execution.</div>
        </div>
      </footer>

    </div>
  );
}
