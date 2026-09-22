'use client';
import { useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            // Optional: remove active class if you want animation to replay on scroll up/down again
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.15 }
    );

    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-orange-600 selection:text-white overflow-x-hidden relative">
      
      {/* Scroll Animation Styles */}
      <style jsx global>{`
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-top {
          opacity: 0;
          animation: fadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-left {
          opacity: 0;
          transform: translateX(-70px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-left.active {
          opacity: 1;
          transform: translateX(0);
        }
        .animate-right {
          opacity: 0;
          transform: translateX(70px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-right.active {
          opacity: 1;
          transform: translateX(0);
        }
        .animate-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-up.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Background High-Tech Grid & Glow Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f12_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f12_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-600/10 blur-[180px] pointer-events-none rounded-full z-0"></div>

      {/* ==========================================
          FLOATING MINIMALIST COMMAND BAR (Top Animation)
          ================================---------- */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl animate-top">
        <header className="flex justify-between items-center px-6 py-3.5 rounded-2xl bg-neutral-950/80 backdrop-blur-2xl border border-neutral-800/80 shadow-[0_0_40px_rgba(255,87,34,0.15)] transition-all duration-300 hover:border-orange-500/40">
          
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden rounded-xl p-0.5 bg-gradient-to-br from-orange-500 to-neutral-800 shadow-[0_0_15px_rgba(255,87,34,0.4)]">
              <Image 
                src="/logo.jpeg" 
                alt="Logo" 
                width={32} 
                height={32} 
                className="rounded-[10px] object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
            <span className="font-black text-sm tracking-wider bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              <span className="text-orange-500">AI HUSTLERS</span>
            </span>
          </Link>

          {/* Minimalist Command Status / Pill */}
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-mono text-neutral-400 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
            <span className="text-orange-400 font-bold">SECURE_NODE</span> // PRIVACY_SYS
          </div>

          {/* Action Button */}
          <Link 
            href="/" 
            className="bg-orange-600 hover:bg-orange-500 text-white px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(255,87,34,0.4)] hover:scale-105 border border-orange-500/30"
          >
            Back Home
          </Link>
        </header>
      </div>

      {/* ==========================================
          PRIVACY POLICY HEADER SECTION (Left Animation)
          ================================---------- */}
      <section className="max-w-4xl mx-auto px-6 pt-44 pb-12 relative z-10 animate-on-scroll animate-left">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(255,87,34,0.15)]">
          <ShieldCheck size={14} className="text-orange-400" />
          Data Protection Protocol
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
          Privacy <span className="text-orange-500 drop-shadow-[0_0_25px_rgba(255,87,34,0.5)]">Policy</span>
        </h1>
        <p className="text-neutral-400 mt-4 text-sm font-mono">Last updated: September 15, 2026 // AI Hustlerss Engineering</p>
      </section>

      {/* ==========================================
          PRIVACY POLICY CONTENT CARDS (Alternating Left & Right Animations)
          ================================---------- */}
      <main className="max-w-4xl mx-auto px-6 pb-24 relative z-10 space-y-8">
        
        {/* Card 1: Introduction (Right Animation) */}
        <div className="p-8 rounded-[28px] bg-gradient-to-br from-neutral-900/80 via-neutral-950 to-neutral-900 border border-neutral-800/80 shadow-xl backdrop-blur-md relative overflow-hidden group hover:border-orange-500/40 transition duration-300 animate-on-scroll animate-right">
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/5 blur-[80px] pointer-events-none"></div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
              <FileText size={20} />
            </div>
            <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
          </div>
          <p className="text-neutral-300 leading-relaxed text-base">
            Welcome to AI Hustlerss. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>
        </div>

        {/* Card 2: Data We Collect (Left Animation) */}
        <div className="p-8 rounded-[28px] bg-gradient-to-br from-neutral-900/80 via-neutral-950 to-neutral-900 border border-neutral-800/80 shadow-xl backdrop-blur-md relative overflow-hidden group hover:border-orange-500/40 transition duration-300 animate-on-scroll animate-left">
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/5 blur-[80px] pointer-events-none"></div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
              <Lock size={20} />
            </div>
            <h2 className="text-2xl font-bold text-white">2. Data We Collect</h2>
          </div>
          <p className="text-neutral-300 leading-relaxed text-base mb-4">
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="space-y-3 text-neutral-300 text-sm md:text-base font-medium">
            <li className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-900 flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
              <span><strong className="text-white font-bold">Identity Data:</strong> Includes your email address when you subscribe to our newsletters or join the hustle list.</span>
            </li>
            <li className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-900 flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
              <span><strong className="text-white font-bold">Technical Data:</strong> Includes internet protocol (IP) address, browser type and version, time zone setting, and geographic region.</span>
            </li>
            <li className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-900 flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
              <span><strong className="text-white font-bold">Usage Data:</strong> Includes information about how you interact with our website, automation resources, and editions.</span>
            </li>
          </ul>
        </div>

        {/* Card 3: How We Use Your Data (Right Animation) */}
        <div className="p-8 rounded-[28px] bg-gradient-to-br from-neutral-900/80 via-neutral-950 to-neutral-900 border border-neutral-800/80 shadow-xl backdrop-blur-md relative overflow-hidden group hover:border-orange-500/40 transition duration-300 animate-on-scroll animate-right">
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/5 blur-[80px] pointer-events-none"></div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
              <Eye size={20} />
            </div>
            <h2 className="text-2xl font-bold text-white">3. How We Use Your Data</h2>
          </div>
          <p className="text-neutral-300 leading-relaxed text-base mb-4">
            We will only use your personal data when the law allows us to. Most commonly, we use your data in the following circumstances:
          </p>
          <ul className="space-y-3 text-neutral-300 text-sm md:text-base font-medium">
            <li className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-900 flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
              <span>To dispatch our weekly AI newsletters, prompts, and updates directly to your inbox.</span>
            </li>
            <li className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-900 flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
              <span>To manage our ecosystem relationship and notify you about changes to our terms or security protocols.</span>
            </li>
            <li className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-900 flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
              <span>To continuously optimize our website performance, automation tools, and user experience.</span>
            </li>
          </ul>
        </div>

        {/* Card 4: Contact & Support (Left Animation) */}
        <div className="p-8 rounded-[28px] bg-gradient-to-br from-neutral-900/80 via-neutral-950 to-neutral-900 border border-neutral-800/80 shadow-xl backdrop-blur-md relative overflow-hidden group hover:border-orange-500/40 transition duration-300 animate-on-scroll animate-left">
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/5 blur-[80px] pointer-events-none"></div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
              <ShieldCheck size={20} />
            </div>
            <h2 className="text-2xl font-bold text-white">4. Contact & Support</h2>
          </div>
          <p className="text-neutral-300 leading-relaxed text-base">
            If you have any questions about this privacy policy, your personal data practices, or wish to exercise your rights, please feel free to reach out to our engineering team at <span className="text-orange-400 font-mono">info@aihustlerss.com</span>.
          </p>
        </div>

      </main>

      {/* ==========================================
          ATTRACTIVE FOOTER (Up Animation)
          ================================---------- */}
      <footer className="border-t border-neutral-800/80 bg-[#020202] py-12 px-6 relative z-10 animate-on-scroll animate-up">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-neutral-400 gap-6">
          <p>© {new Date().getFullYear()} AI Hustlerss Pro. All rights reserved.</p>
          <div className="flex items-center gap-2 font-mono text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Privacy Protocol: 100% Secure & Encrypted
          </div>
        </div>
      </footer>

    </div>
  );
}
