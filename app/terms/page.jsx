'use client';
import Image from "next/image";
import Link from "next/link";
import { FileText, CheckCircle2, AlertTriangle, Scale, Mail } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-orange-600 selection:text-white overflow-x-hidden relative">
      
      {/* Background High-Tech Grid & Glow Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f12_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f12_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-600/10 blur-[180px] pointer-events-none rounded-full z-0"></div>

      {/* ==========================================
          FLOATING MINIMALIST COMMAND BAR
          ================================---------- */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl">
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
            <span className="text-orange-400 font-bold">SECURE_NODE</span> // TERMS_SYS
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
          TERMS OF SERVICE HEADER SECTION
          ================================---------- */}
      <section className="max-w-4xl mx-auto px-6 pt-44 pb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(255,87,34,0.15)]">
          <Scale size={14} className="text-orange-400" />
          Operational Agreement
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
          Terms of <span className="text-orange-500 drop-shadow-[0_0_25px_rgba(255,87,34,0.5)]">Service</span>
        </h1>
        <p className="text-neutral-400 mt-4 text-sm font-mono">Last updated: September 22, 2026 // AI Hustlerss Ecosystem</p>
      </section>

      {/* ==========================================
          TERMS OF SERVICE CONTENT CARDS
          ================================---------- */}
      <main className="max-w-4xl mx-auto px-6 pb-24 relative z-10">
        <div className="space-y-8">
          
          {/* Card 1 */}
          <div className="p-8 rounded-[28px] bg-gradient-to-br from-neutral-900/80 via-neutral-950 to-neutral-900 border border-neutral-800/80 shadow-xl backdrop-blur-md relative overflow-hidden group hover:border-orange-500/40 transition duration-300">
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/5 blur-[80px] pointer-events-none"></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                <FileText size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
            </div>
            <p className="text-neutral-300 leading-relaxed text-base">
              By accessing and using AI Hustlerss (aihustlerss.com) and our weekly publications, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you must immediately discontinue use of our platform and services.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-[28px] bg-gradient-to-br from-neutral-900/80 via-neutral-950 to-neutral-900 border border-neutral-800/80 shadow-xl backdrop-blur-md relative overflow-hidden group hover:border-orange-500/40 transition duration-300">
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/5 blur-[80px] pointer-events-none"></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                <CheckCircle2 size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white">2. Use of Content & Resources</h2>
            </div>
            <p className="text-neutral-300 leading-relaxed text-base mb-4">
              All intelligence, newsletters, source code, workflows, graphics, and playbooks provided on this platform are protected under intellectual property laws. 
            </p>
            <ul className="space-y-3 text-neutral-300 text-sm md:text-base font-medium">
              <li className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-900 flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
                <span>You are granted a limited, non-exclusive license to use our resources for personal or internal business development.</span>
              </li>
              <li className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-900 flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0"></span>
                <span>You may not resell, duplicate, or systematically harvest our newsletter content or technical code without explicit prior authorization.</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-[28px] bg-gradient-to-br from-neutral-900/80 via-neutral-950 to-neutral-900 border border-neutral-800/80 shadow-xl backdrop-blur-md relative overflow-hidden group hover:border-orange-500/40 transition duration-300">
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/5 blur-[80px] pointer-events-none"></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                <AlertTriangle size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white">3. Limitation of Liability</h2>
            </div>
            <p className="text-neutral-300 leading-relaxed text-base">
              The AI automation blueprints, prompts, and infrastructural guides provided by AI Hustlerss are shared for educational and operational leverage. We do not guarantee specific financial results, platform uptime, or absolute third-party API stability. We shall not be held liable for any direct or indirect losses resulting from your deployment of these tools.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-8 rounded-[28px] bg-gradient-to-br from-neutral-900/80 via-neutral-950 to-neutral-900 border border-neutral-800/80 shadow-xl backdrop-blur-md relative overflow-hidden group hover:border-orange-500/40 transition duration-300">
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/5 blur-[80px] pointer-events-none"></div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                <Mail size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white">4. Modifications & Contact</h2>
            </div>
            <p className="text-neutral-300 leading-relaxed text-base">
              We reserve the right to alter, modify, or update these Terms of Service at any time. Continued usage of our platform following adjustments indicates your full acceptance. For legal inquiries or questions regarding these terms, contact our core team at <span className="text-orange-400 font-mono">info@aihustlerss.com</span>.
            </p>
          </div>

        </div>
      </main>

      {/* ==========================================
          ATTRACTIVE FOOTER
          ================================---------- */}
      <footer className="border-t border-neutral-800/80 bg-[#020202] py-12 px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-neutral-400 gap-6">
          <p>© {new Date().getFullYear()} AI Hustlerss Pro. All rights reserved.</p>
          <div className="flex items-center gap-2 font-mono text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Terms Protocol: Fully Binding & Verified
          </div>
        </div>
      </footer>

    </div>
  );
}
