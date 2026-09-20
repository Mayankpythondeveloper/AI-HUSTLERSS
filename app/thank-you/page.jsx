'use client';
import { CheckCircle2, ArrowRight, Rocket, Video, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 relative overflow-hidden py-16">
      {/* Background Cinematic Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* Main Container */}
      <div className="max-w-lg w-full bg-white/5 border border-white/10 p-10 md:p-14 rounded-[32px] backdrop-blur-3xl text-center shadow-[0_0_60px_rgba(255,87,34,0.2)] relative z-10 flex flex-col items-center">
        
        {/* Logo */}
        <div className="w-28 h-28 rounded-full bg-black/60 border-2 border-white/15 shadow-[0_0_30px_bg_orange(0,0,0,0.5)] flex items-center justify-center mb-8 p-2 overflow-hidden relative group transition-all duration-500 hover:border-orange-500/50">
          <div className="absolute inset-0 bg-orange-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <Image
            src="/logo.jpeg"
            alt="AI Hustlerss Logo"
            width={112}
            height={112}
            className="object-contain z-10 w-full h-full drop-shadow-[0_0_15px_bg_orange(255,87,34,0.6)]"
            priority
          />
        </div>

        {/* Success Icon */}
        <div className="w-14 h-14 bg-orange-500/10 border border-orange-500/30 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-400 shadow-[0_0_20px_rgba(255,87,34,0.2)]">
          <CheckCircle2 size={28} />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-4xl font-extrabold tracking-tight mb-5 leading-tight">
          Welcome to <br />
          <span className="text-orange-500">The Hustle⚡</span>
        </h1>

        {/* 👉 Updated Motivational Newsletter Line */}
        <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-md mx-auto">
          Keep building, keep scaling. Stay tuned to your inbox for game-changing AI playbooks delivered fresh every week.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 w-full max-w-xs mx-auto">
          
          <Link 
            href="/programs"
            className="group w-full bg-orange-500 hover:bg-orange-600 text-black font-extrabold px-6 py-3.5 rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(255,87,34,0.4)] hover:scale-[1.02] flex items-center justify-center space-x-2 text-base"
          >
            <Rocket size={18} className="text-black" />
            <span>Explore AI Programs.</span>
            <ArrowRight size={18} className="text-black group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="/consultation"
            className="group w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold px-6 py-3.5 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-2 text-base"
          >
            <PhoneCall size={18} className="text-orange-400" />
            <span>Book Consultation Call</span>
          </Link>

          <Link 
            href="/"
            className="mt-6 text-lg font-semibold text-gray-400 hover:text-orange-500 transition-colors flex items-center justify-center space-x-1.5"
          >
            <span>← Back to Home</span>
          </Link>
        </div>

      </div>
      
      <div className="absolute -bottom-10 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-0"></div>
    </main>
  );
}
