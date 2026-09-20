'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Zap, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SubscribePage() {
  const router = useRouter();
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
        setStatusMessage('🎉 Unlocking your access... Redirecting...');
        setTimeout(() => {
          router.push('/thank-you');
        }, 1000);
      } else {
        setStatusMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatusMessage('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 relative overflow-hidden py-16">
      
      {/* Background Cinematic Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-600/15 rounded-full blur-[170px] pointer-events-none z-0"></div>

      {/* Main Glassmorphism Container */}
      <div className="max-w-xl w-full bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 p-8 md:p-14 rounded-[36px] backdrop-blur-3xl text-center shadow-[0_0_80px_rgba(255,87,34,0.3)] relative z-10 flex flex-col items-center">
        
        {/* Brand Logo with Glow */}
        <div className="w-28 h-28 rounded-full bg-black/80 border-2 border-orange-500/40 shadow-[0_0_35px_rgba(255,87,34,0.4)] flex items-center justify-center mb-8 p-2 overflow-hidden relative group transition-all duration-500 hover:border-orange-500">
          <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <Image
            src="/logo.jpeg"
            alt="AI Hustlerss Logo"
            width={112}
            height={112}
            className="object-contain z-10 w-full h-full drop-shadow-[0_0_15px_bg-orange(255,87,34,0.7)]"
            priority
          />
        </div>

        {/* Newsletter Badge */}
        <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/30 px-4 py-1.5 rounded-full text-xs font-bold text-orange-400 mb-6 tracking-wide shadow-[0_0_15px_rgba(255,87,34,0.25)] uppercase">
          <Sparkles size={14} className="text-orange-400" />
          <span>The #1 Autonomous AI Newsletter</span>
        </div>

        {/* Attractive Newsletter Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
          Get the Sharpest <br />
          <span className="text-orange-500">AI Playbooks Weekly</span>
        </h1>

        {/* Newsletter Tailored Subtext */}
        <p className="text-gray-300 text-base md:text-lg mb-10 leading-relaxed max-w-md mx-auto font-medium">
          Join ambitious creators and founders. Receive unreleased multi-agent workflows, battle-tested prompts, and digital scaling editions straight in your inbox.
        </p>

        {/* Custom Email Form Connected to Beehiiv Backend */}
        <form onSubmit={handleSubscribe} className="w-full max-w-md flex flex-col gap-4">
          <div className="relative flex items-center">
            <Mail className="absolute left-4 text-gray-400" size={20} />
            <input 
              type="email" 
              required
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Enter your work or personal email..." 
              className="w-full bg-black/80 border border-white/20 pl-12 pr-5 py-4 rounded-2xl text-white outline-none focus:border-orange-500 placeholder:text-gray-500 text-base shadow-inner transition-all"
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-black font-extrabold py-4 px-8 rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(255,87,34,0.5)] hover:scale-[1.02] flex items-center justify-center space-x-2 text-lg cursor-pointer disabled:opacity-50"
          >
            <span>{loading ? 'Subscribing...' : 'Join The Hustle List'}</span>
            <ArrowRight size={20} />
          </button>
        </form>

        {/* Status Message */}
        {statusMessage && (
          <p className={`mt-4 text-sm font-semibold ${statusMessage.includes('Unlocking') || statusMessage.includes('🎉') ? 'text-green-400' : 'text-orange-400'}`}>
            {statusMessage}
          </p>
        )}

        {/* Trust Badges */}
        <div className="flex items-center justify-center space-x-6 mt-8 text-xs text-gray-400 border-t border-white/10 pt-6 w-full font-medium">
          <span className="flex items-center space-x-1.5">
            <ShieldCheck size={16} className="text-orange-400" />
            <span>Zero Spam, Unsubscribe Anytime</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <CheckCircle2 size={16} className="text-orange-400" />
            <span>100% Free Weekly Editions</span>
          </span>
        </div>

        {/* Back to Home Link */}
        <Link 
          href="/"
          className="mt-6 text-sm font-semibold text-gray-400 hover:text-orange-400 transition-colors"
        >
          ← Back to Home
        </Link>

      </div>

      {/* Decorative Footer Gradient */}
      <div className="absolute -bottom-10 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-0"></div>
    </main>
  );
}
