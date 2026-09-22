import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
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
            <span className="text-orange-400 font-bold">SECURE_NODE</span> // ABOUT_SYS
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
          HERO SECTION: WHO WE ARE
          ================================---------- */}
      <section className="max-w-6xl mx-auto px-6 pt-44 pb-20 relative z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(255,87,34,0.15)]">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          System Origin & Mission
        </div>

        {/* Updated Heading: Font size reduced and style changed for a cleaner, modern look */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-normal leading-[1.2] max-w-4xl text-neutral-200">
          Architecting the future of human execution through autonomous <span className="text-orange-500 font-black drop-shadow-[0_0_20px_rgba(255,87,34,0.4)]">AI</span> systems.
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 text-neutral-300 text-lg leading-relaxed border-t border-neutral-800/80 pt-12">
          <div className="space-y-6">
            <p className="font-medium text-white leading-relaxed">
              AI Hustlerss was forged with a singular mandate: to cut through the deafening noise of the artificial intelligence revolution and deliver raw, production-ready execution blueprints.
            </p>
            <p className="text-neutral-400 text-base leading-relaxed">
              We don't just talk about prompts or surface-level trends. We build deep infrastructural workflows, automated scaling loops, and robust technical systems designed for operators and builders.
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-neutral-300 text-base leading-relaxed">
              Founded at the intersection of high-tempo engineering and strategic media scaling, our flagship newsletter serves as a direct pipeline of tactical intelligence straight to forward-thinking minds worldwide.
            </p>
            <div className="p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800/90 text-sm font-mono text-orange-400 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] backdrop-blur-md">
              &gt; Core Protocol: Zero fluff. Maximum leverage. Full deployment.
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          THE FLAGSHIP NEWSLETTER SECTION
          ================================---------- */}
      <section className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="p-10 md:p-14 rounded-[32px] bg-gradient-to-br from-neutral-900/90 via-[#0a0a0a] to-neutral-950 border border-neutral-800/80 relative overflow-hidden shadow-2xl group hover:border-orange-500/50 transition duration-500">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-orange-500/15 blur-[150px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-3xl relative z-10">
            <span className="text-orange-500 font-mono text-xs uppercase tracking-widest bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20 shadow-[0_0_15px_rgba(255,87,34,0.2)]">
              The Flagship Publication
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-6 tracking-tight text-white">The <span className="text-orange-500">AI</span> Hustlers Newsletter</h2>
            <p className="text-neutral-300 mt-4 text-lg leading-relaxed">
              Every single week, we curate and engineer high-impact AI insights, advanced automation scripts, and digital scaling playbooks designed exclusively for builders.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-neutral-800/80">
              <div className="p-5 rounded-2xl bg-neutral-950/60 border border-neutral-900 group-hover:border-orange-500/30 transition-all shadow-lg">
                <div className="text-3xl font-black text-orange-500 font-mono drop-shadow-[0_0_10px_rgba(255,87,34,0.4)]">100%</div>
                <div className="text-xs text-neutral-400 mt-1 uppercase tracking-wider font-medium">Actionable Code</div>
              </div>
              <div className="p-5 rounded-2xl bg-neutral-950/60 border border-neutral-900 group-hover:border-orange-500/30 transition-all shadow-lg">
                <div className="text-3xl font-black text-orange-500 font-mono drop-shadow-[0_0_10px_rgba(255,87,34,0.4)]">Weekly</div>
                <div className="text-xs text-neutral-400 mt-1 uppercase tracking-wider font-medium">Precision Drops</div>
              </div>
              <div className="p-5 rounded-2xl bg-neutral-950/60 border border-neutral-900 group-hover:border-orange-500/30 transition-all shadow-lg">
                <div className="text-3xl font-black text-orange-500 font-mono drop-shadow-[0_0_10px_rgba(255,87,34,0.4)]">Zero</div>
                <div className="text-xs text-neutral-400 mt-1 uppercase tracking-wider font-medium">Superficial Hype</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          CINEMATIC COMMAND CENTER DISPLAY
          ================================---------- */}
      <section className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="relative rounded-[32px] overflow-hidden border border-neutral-800/80 shadow-[0_0_50px_rgba(0,0,0,0.9)] bg-neutral-950 group hover:border-orange-500/40 transition duration-500">
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent z-10 opacity-90"></div>
          <div className="h-[480px] w-full flex flex-col items-center justify-center relative p-8 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.18)_0,transparent_70%)]"></div>
            
            <Image 
              src="/logo.jpeg" 
              alt="AI Hustlerss Logo" 
              width={100} 
              height={100} 
              className="rounded-2xl shadow-[0_0_30px_rgba(255,87,34,0.5)] border-2 border-orange-500/60 mb-6 group-hover:scale-110 transition duration-500 object-cover"
            />
            <h3 className="text-2xl md:text-4xl font-black tracking-wide z-20 max-w-3xl text-neutral-100">
              "Generative <span className="text-orange-500 drop-shadow-[0_0_15px_rgba(255,87,34,0.6)]">AI</span> models are the new operating systems for human imagination."
            </h3>
            <p className="text-orange-400 font-mono text-xs mt-5 tracking-widest uppercase z-20 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/30 shadow-[0_0_15px_rgba(255,87,34,0.2)]">
              Controlled by AI Hustlerss Engineering
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          LEADERSHIP & OPERATIONS SECTION
          ================================---------- */}
      <section className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-neutral-800/80 pb-8">
          <div>
            <span className="text-orange-500 font-mono text-xs uppercase tracking-widest">[ Command Structure ]</span>
            <h2 className="text-3xl md:text-5xl font-black mt-2">Executive Leadership</h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md mt-4 md:mt-0 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
            Click cards to connect directly via LinkedIn.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Founder: Satyendra Mishra */}
          <Link 
            href="https://www.linkedin.com/in/satyendra-mishra" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group space-y-6 bg-gradient-to-b from-neutral-900/80 to-neutral-950/90 p-8 rounded-[32px] border border-neutral-800/80 hover:border-orange-500 transition-all duration-500 block cursor-pointer relative shadow-2xl hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(255,87,34,0.2)]"
          >
            <div className="absolute top-6 right-6 bg-neutral-900/90 px-4 py-2 rounded-xl text-xs font-mono text-orange-400 flex items-center gap-1.5 border border-neutral-800 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-500 transition z-10 shadow-lg">
              <span>LinkedIn</span> ↗
            </div>
            
            {/* Image Container */}
            <div className="h-72 w-full bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800/80 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1)_0,transparent_70%)]"></div>
              <Image 
                src="/satyendra.jpeg" 
                alt="Satyendra Mishra" 
                fill 
                className="object-cover object-center group-hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-xl border border-neutral-800 font-mono text-xs text-orange-400 z-10 shadow-md">
                Vision & Architecture
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold group-hover:text-orange-400 transition">Satyendra Mishra</h3>
              <p className="text-orange-500 text-sm font-mono mt-1">Founder & Chief Architect</p>
              <p className="text-neutral-400 text-sm mt-4 leading-relaxed">
                As the Founder, Satyendra drives the core vision, AI model research, and strategic roadmap of AI Hustlerss. He focuses on uncovering high-impact technical trends and translating complex AI innovations into actionable intelligence.
              </p>
            </div>
          </Link>

          {/* Co-founder & Operations: Mayank Sahu */}
          <Link 
            href="https://www.linkedin.com/in/mayank-sahu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group space-y-6 bg-gradient-to-b from-neutral-900/80 to-neutral-950/90 p-8 rounded-[32px] border border-neutral-800/80 hover:border-orange-500 transition-all duration-500 block cursor-pointer relative shadow-2xl hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(255,87,34,0.2)]"
          >
            <div className="absolute top-6 right-6 bg-neutral-900/90 px-4 py-2 rounded-xl text-xs font-mono text-orange-400 flex items-center gap-1.5 border border-neutral-800 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-500 transition z-10 shadow-lg">
              <span>LinkedIn</span> ↗
            </div>

            {/* Image Container */}
            <div className="h-72 w-full bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800/80 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1)_0,transparent_70%)]"></div>
              <Image 
                src="/about/about1.jpeg" 
                alt="Mayank Sahu" 
                fill 
                className="object-cover object-center group-hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-xl border border-neutral-800 font-mono text-xs text-orange-400 z-10 shadow-md">
                Execution & Scale
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold group-hover:text-orange-400 transition">Mayank Sahu</h3>
              <p className="text-orange-500 text-sm font-mono mt-1">Co-Founder & Head of Operations</p>
              <p className="text-neutral-400 text-sm mt-4 leading-relaxed">
                As the Co-Founder and Head of Operations, Mayank manages the core execution machinery of AI Hustlerss. He ensures seamless workflow execution, infrastructure scaling, and operational efficiency across all frameworks.
              </p>
            </div>
          </Link>

        </div>

        {/* Philosophy Callout */}
        <div className="mt-20 p-10 md:p-12 rounded-[32px] bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border border-neutral-800/80 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(249,115,22,0.12)_0,transparent_60%)]"></div>
          <p className="text-xl md:text-2xl font-semibold text-neutral-200 max-w-3xl mx-auto relative z-10 leading-snug">
            "We are a tight-knit core of builders, operators, and digital creators in absolute command of the latest AI tools."
          </p>
          <div className="mt-6 text-sm font-mono text-orange-500 uppercase tracking-widest relative z-10">
            AI Hustlerss Pro Ecosystem
          </div>
        </div>
      </section>

      {/* ==========================================
          ATTRACTIVE & FEATURE-RICH FOOTER
          ================================---------- */}
      <footer className="border-t border-neutral-800/80 bg-[#020202] pt-20 pb-12 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-neutral-900">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Image src="/logo.jpeg" alt="Logo" width={36} height={36} className="rounded-xl object-cover border border-orange-500/35 shadow-[0_0_15px_rgba(255,87,34,0.3)]" />
              <span className="font-extrabold tracking-wider text-lg text-white"><span className="text-orange-500">AI</span> HUSTLERS PRO</span>
            </div>
            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed">
              The premier ecosystem for production-grade AI workflows, advanced prompts, and automated digital scaling solutions.
            </p>
            <div className="text-sm font-mono text-neutral-400">
              Direct Contact: <span className="text-orange-400">info@aihustlerss.com</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li><Link href="/" className="hover:text-orange-400 transition">Home Dashboard</Link></li>
              <li><Link href="/about" className="hover:text-orange-400 transition">About System</Link></li>
              <li><Link href="/resources" className="hover:text-orange-400 transition">AI Resources</Link></li>
              <li><Link href="/newsletter" className="hover:text-orange-400 transition">Newsletter Archives</Link></li>
            </ul>
          </div>

          {/* Col 3: Legal & Systems */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white mb-6">Infrastructure</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li><span className="text-neutral-500">Next.js & Vercel Stack</span></li>
              <li><span className="text-neutral-500">Google Search Console</span></li>
              <li><Link href="/privacy" className="hover:text-orange-400 transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-orange-400 transition">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="max-w-6xl mx-auto mt-12 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-400 gap-6">
          <p>© {new Date().getFullYear()} AI Hustlerss Pro. All rights reserved.</p>
          <div className="flex items-center gap-2 font-mono text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            System Status: 100% Operational & Indexed
          </div>
        </div>
      </footer>

    </div>
  );
}
