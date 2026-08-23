import React from 'react';

const newsletters = [
  {
    id: 1,
    edition: "EDITION #01 • AUGUST 2026",
    title: "Mastering Multi-Agent AI Workflows for Solopreneurs",
    description: "How to automate 80% of your digital business using autonomous agents.",
    coverImage: "/multiagent.jpeg", // Apna actual image path yahan dalein
    readLink: "/newsletter/edition-4"
  },
  {
    id: 2,
    edition: "EDITION #02 • JULY 2026",
    title: "Coreum Bridge Exploit: 200K XRP Stolen & Price Slips Below $1.",
    description: "Copy-paste prompts that scale your content creation and marketing funnels.",
    coverImage: "/Blockchain-network-connection.jpeg",
    readLink: "/newsletter/edition-3"
  },
  {
    id: 3,
    edition: "EDITION #03 • JULY 2026",
    title: "Building Modern Web Apps with Next.js & Tailwind",
    description: "A complete architectural blueprint for launching fast developer tools.",
    coverImage: "/deployment.jpeg",
    readLink: "/newsletter/edition-2"
  },
  {
    id: 4,
    edition: "EDITION #04 • AUGUST 2026",
    title: "AI FIRE | SPARK INTRO OFFER | 2026 PERFORMANCE KICKOFF",
    description: "The Super Bowl is over, now it's time for your MVP season. Introducing the \"Spark\" Tier for a sensitive economic climate. 2026...",
    coverImage: "/Edition5.jpeg",
    readLink: "/newsletter/edition-5"
  },
  {
    id: 5,
    edition: "EDITION #05 • AUGUST 2026",
    title: "Everyone Says Kimi K3 is 'Open'. I Checked What It Truly Takes to Run It (What to Use Instead)",
    description: "\"Open\" sounds simple right? After looking deeper, I found the hardw....",
    coverImage: "/kimmiintro.jpeg",
    readLink: "/newsletter/edition-6"
  },
  {
    id: 6,
    edition: "EDITION #06 • AUGUST 2026",
    title: "\"Entry-Level\" is Lying to You. Here's What the AI Job Market Actually Looks Like Now",
    description: "AI split the job market into 2 tracks. I'll show you where the job market is moving, what companies actually value now, and how to stay ahead.",
    coverImage: "/aijobs.jpeg",
    readLink: "/newsletter/edition-7"
  },
  {
    id: 7,
    edition: "EDITION #07 • AUGUST 2026",
    title: "Big Tech's Hidden $3T AI Bill",
    description: "D-DAY ALERT: Live AI Agent Team workshop today!",
    coverImage: "/pyramid.jpeg",
    readLink: "/newsletter/edition-8"
  },
  {
    id: 8,
    edition: "EDITION #08 • AUGUST 2026",
    title: "FREE Claude Prompt That AUTO Turns Any Idea Into a VOX-Style Video (Full Guide)",
    description: "This workflow turns one idea into a Vox-style animated video using 4 tools: Claude, ZAPI Flow, Google Flow, and CapCut. No coding required. No After Effects.",
    coverImage: "/VOX.jpeg",
    readLink: "/newsletter/edition-9"
  },
  {
    id: 9,
    edition: "EDITION #09 • AUGUST 2026",
    title: "ChatGPT Just Got a New Superpower? (Computer History & More Updates)",
    description: "For years, ChatGPT lived inside a chat box. New tools are giving users more control, more automation, and a completely different way to work with AI.",
    coverImage: "/chatgptupdate.jpeg",
    readLink: "/newsletter/edition-10"
  }
];

export default function NewslettersSection() {
  return (
    <div className="w-full min-h-screen bg-[#0b0f19] text-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Newsletters
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto">
            Explore all our editions complete with cover images, tactical breakdowns, and deep dives.
          </p>
        </div>

        {/* Grid Layout for all 9 Newsletters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsletters.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#111827] border border-gray-800 rounded-2xl overflow-hidden shadow-xl hover:border-gray-700 transition-all flex flex-col justify-between"
            >
              {/* Cover Image Container */}
              <div className="w-full h-48 bg-gray-900 overflow-hidden relative">
                <img 
                  src={item.coverImage} 
                  alt={item.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-bold tracking-wider text-orange-500 uppercase">
                    {item.edition}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Read Button */}
                <div className="pt-2">
                  <a 
                    href={item.readLink}
                    className="inline-flex items-center text-xs md:text-sm font-semibold text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-xl transition-colors"
                  >
                    Read Issue &rarr;
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}