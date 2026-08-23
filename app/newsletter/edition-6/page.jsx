export default function Edition5() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-12 border-b border-gray-800 pb-8">
          <span className="text-[#ff5722] font-bold tracking-widest text-sm uppercase">Edition #05 • February 2026</span>
          
        <div className="my-8 bg-[#111111] border border-gray-800 rounded-2xl p-6 flex items-center space-x-4 shadow-md">
  <img 
    src="/logo.jpeg" 
    alt="AI Hustlers Logo" 
    className="w-12 h-12 rounded-full object-cover border border-gray-700 shrink-0" 
  />
  <div>
    <h3 className="text-white font-bold text-lg tracking-wide">AI HUSTLERSS</h3>
    <p className="text-gray-400 text-sm">2026 AI Strategy & Performance Blueprints</p>
  </div>
</div>

          <h1 className="text-4xl font-bold mt-4 mb-6 text-white leading-tight">
            🧠 Everyone Says Kimi K3 is 'Open'. I Checked What It Truly Takes to Run It (What to Use Instead)
          </h1>
          <p className="text-xl text-gray-400 italic">“Open” sounds simple right? After looking deeper, I found the hardware demands, practical challenges, and alternatives that could make more sense for most users.</p>
        </header>

        {/* Image */}
        <img 
         src="/kimmik3.jpeg" 
         alt="XRP Ledger Security" 
         style={{ width: '80%', height: 'auto', borderRadius: '4px', border: '1px solid #3f3f46', marginBottom: '25px' }} 
        />
        {/* Content Section */}
        <article className="space-y-10">
          <h2 className="text-2xl font-bold text-white">Kimi K3 is open-weight, but running it yourself is far beyond normal consumer hardware. Most users will get more value from the API, cloud GPUs for short tests</h2>
          
          <div className="bg-[#111111] border border-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-white mb-4">About Kimmi</h3>
            <p className="text-gray-300 leading-relaxed">
              The full Kimi K3 weights are extremely large, and serving the model needs data center-level GPU memory. A laptop, Mac, or gaming PC isn’t a realistic option for the full model.
             Self-hosting only makes sense when you need deep control, large-scale inference, or research access to the weights. For normal coding, building, or testing, the infrastructure cost is hard to justify.

            <h6>Key points:</h6>
            <p>👉Kimi K3 has 2.8 trillion parameters and needs very large GPU memory.</p>
            <p>👉Self-hosting fits research labs, infrastructure teams, and high-volume companies.</p>
            <p>👉Kimi K3 API or smaller local models make more sense for most users.</p>
            </p>
          </div>

          {/* Table of Contents Section */}
<div className="my-8 p-6 bg-[#121212] border border-gray-800 rounded-2xl shadow-xl">
  <h3 className="text-xl font-extrabold text-[#ff5722] tracking-wider mb-4 pb-2 border-b border-gray-800">
    Table of Contents
  </h3>
  
  <ul className="space-y-2 text-sm md:text-base text-gray-300 list-disc list-inside">
    <li>
      <a href="#introduction" className="text-[#ff5722] hover:underline">Introduction</a>
    </li>
    <li>
      <a href="https://platform.kimi.ai/docs/guide/kimi-k3-quickstart" target="_blank" className="text-[#ff5722] hover:underline">I. What Does "Open" Mean for Kimi K3?</a>
    </li>
    <li>
      <a href="https://platform.kimi.ai/docs/guide/kimi-k3-quickstart" target="_blank" className="text-[#ff5722] hover:underline">II. What Does It Take to Run Kimi K3?</a>
      <ul className="pl-6 mt-1 space-y-1 list-disc text-gray-400">
        <li><a href="#step-1" className="hover:text-orange-400">Step 1: Storage</a></li>
        <li><a href="#step-2" className="hover:text-orange-400">Step 2: GPU Memory (VRAM)</a></li>
        <li><a href="#step-3" className="hover:text-orange-400">Step 3: Serving Memory</a></li>
      </ul>
    </li>
    <li>
      <a href="https://www.layer3labs.io/guides/kimi-k3-pricing" target="_blank" className="text-[#ff5722] hover:underline">III. Self-Hosting Kimi K3 Costs</a>
      <ul className="pl-6 mt-1 space-y-1 list-disc text-gray-400">
        <li><a href="#cost-1" className="hover:text-orange-400">1. If You Own the Hardware</a></li>
        <li><a href="#cost-2" className="hover:text-orange-400">2. If You Rent Cloud GPUs</a></li>
        <li><a href="#cost-3" className="hover:text-orange-400">3. Ongoing Cost</a></li>
      </ul>
    </li>
    <li>
      <a href="https://www.layer3labs.io/guides/kimi-k3-pricing" target="_blank" className="text-[#ff5722] hover:underline">IV. Who Should Actually Self-Host Kimi K3?</a>
    </li>
    <li>
      <a href="#section-5" className="text-[#ff5722] hover:underline">V. What Should You Use Instead?</a>
      <ul className="pl-6 mt-1 space-y-1 list-disc text-gray-400">
        <li><a href="https://platform.kimi.ai/" target="_blank" className="hover:text-orange-400">Option 1: Kimi K3 API (Best for Most People)</a></li>
        <li><a href="#option-2" className="hover:text-orange-400">Option 2: Cloud GPUs for Short Tests</a></li>
        <li><a href="#option-3" className="hover:text-orange-400">Option 3: Smaller Models (Best for Local Use)</a></li>
        <li><a href="#option-4" className="hover:text-orange-400">Simple Comparison</a></li>
      </ul>
    </li>
    <li>
      <a href="#conclusion" className="text-[#ff5722] hover:underline">Conclusion</a>
    </li>
  </ul>
</div>

          {/* Image */}
        <img 
         src="/kimmiintro.jpeg" 
         alt="XRP Ledger Security" 
         style={{ width: '80%', height: 'auto', borderRadius: '4px', border: '1px solid #3f3f46', marginBottom: '25px' }} 
        />


          <h2 className="text-2xl font-bold text-white">'Kimmi K3' Introduction</h2>
          <p className="leading-relaxed">
            <p className="leading-relaxed mb-3">Moonshot AI calls Kimi K3 an open-weight model, and this time “open” isn’t just a nice label.</p>
<p className="leading-relaxed mb-3">Moonshot AI has shared the model weights, configuration, and inference code, so you can download Kimi K3 and run it on your own infrastructure.
</p>
<p className="leading-relaxed mb-3">But for me, the word “open” sounds a little funny. You’re allowed to self-host Kimi K3, but only if you have enough GPUs and you’re ready to pay the cloud bill.</p>
<p className="leading-relaxed mb-3">So what should we do now? What does it actually take?</p>
<p className="leading-relaxed mb-3">Today, I’ll show you what Kimi K3 really needs, how much self-hosting can cost, and what makes more sense if you just want to use the model, like easily. 
</p>
          </p>

          {/* Working Steps Card */}
<div className="my-8 p-6 bg-[#121212] border border-gray-800 rounded-2xl shadow-xl">
  <h3 className="text-xl font-extrabold text-[#ff5722] tracking-wider mb-4 pb-2 border-b border-gray-800">
    How Kimi K3 Works: Core Steps
  </h3>
  
  <div className="space-y-4 text-sm md:text-base text-gray-300">
    <div className="flex items-start space-x-3">
      <span className="text-[#ff5722] font-bold">01</span>
      <p><strong>Weight Download:</strong> Accessing and downloading the open-weight model configurations and model parameters from Moonshot AI's repository.</p>
    </div>

    <div className="flex items-start space-x-3">
      <span className="text-[#ff5722] font-bold">02</span>
      <p><strong>Infrastructure Setup:</strong> Provisioning heavy data center-level GPU clusters or high-VRAM hardware to handle massive tensor loads.</p>
    </div>

    <div className="flex items-start space-x-3">
      <span className="text-[#ff5722] font-bold">03</span>
      <p><strong>Inference & Serving:</strong> Running local deployment pipelines via custom inference code to execute user prompts efficiently.</p>
    </div>
  </div>
</div>


           {/* Image */}
        <img 
         src="/dollar.jpeg" 
         alt="XRP Ledger Security" 
         style={{ width: '60%', height: 'auto', borderRadius: '4px', border: '1px solid #3f3f46', marginBottom: '25px' }} 
        />

            {/* Self-Hosting Costs Card */}
<div className="my-8 p-6 bg-[#121212] border border-gray-800 rounded-2xl shadow-xl">
  <h3 className="text-xl font-extrabold text-[#ff5722] tracking-wider mb-4 pb-2 border-b border-gray-800">
    Self-Hosting Kimi K3: Infrastructure Costs
  </h3>
  
  <div className="space-y-4 text-sm md:text-base text-gray-300">
    <div className="flex items-start space-x-3">
      <span className="text-[#ff5722] font-bold text-lg">•</span>
      <p><strong>Hardware Procurement:</strong> Massive upfront investment for A100/H100 GPU clusters, which are essential for handling Kimi's 2.8T parameter load.</p>
    </div>

    <div className="flex items-start space-x-3">
      <span className="text-[#ff5722] font-bold text-lg">•</span>
      <p><strong>Cloud GPU Rental:</strong> High hourly or monthly rates for renting enterprise-grade GPUs (like AWS p5 or GCP A3 instances) from cloud providers.</p>
    </div>

    <div className="flex items-start space-x-3">
      <span className="text-[#ff5722] font-bold text-lg">•</span>
      <p><strong>Power & Cooling:</strong> Significant operational overhead costs for maintaining dedicated servers, including electricity for high-performance processing and cooling.</p>
    </div>

    <div className="flex items-start space-x-3">
      <span className="text-[#ff5722] font-bold text-lg">•</span>
      <p><strong>Maintenance & Engineering:</strong> Salaries for specialized MLOps engineers required to configure, optimize, and troubleshoot the self-hosted environment.</p>
    </div>

    <div className="flex items-start space-x-3">
      <span className="text-[#ff5722] font-bold text-lg">•</span>
      <p><strong>Storage & Data Transfer:</strong> Additional monthly expenses for high-speed NVMe storage and data egress fees for handling large-scale inference tasks.</p>
    </div>
  </div>
</div>


{/* Who Should Self-Host Card */}
<div className="my-8 p-6 bg-[#121212] border border-gray-800 rounded-2xl shadow-xl">
  <h3 className="text-xl font-extrabold text-[#ff5722] tracking-wider mb-4 pb-2 border-b border-gray-800">
    Who Should Actually Self-Host Kimi K3?
  </h3>
  
  <div className="space-y-4 text-sm md:text-base text-gray-300">
    <div className="flex items-start space-x-3">
      <span className="text-[#ff5722] font-bold text-lg">1.</span>
      <p><strong>AI Research Labs:</strong> Teams focused on deep model architecture analysis and fine-tuning experiments where direct weight access is mandatory.</p>
    </div>

    <div className="flex items-start space-x-3">
      <span className="text-[#ff5722] font-bold text-lg">2.</span>
      <p><strong>High-Compliance Industries:</strong> Organizations in finance, healthcare, or defense that require data to stay air-gapped from third-party APIs.</p>
    </div>

    <div className="flex items-start space-x-3">
      <span className="text-[#ff5722] font-bold text-lg">3.</span>
      <p><strong>Infrastructure Teams:</strong> Companies building proprietary platform layers on top of Kimi K3 that need custom inference optimization.</p>
    </div>

    <div className="flex items-start space-x-3">
      <span className="text-[#ff5722] font-bold text-lg">4.</span>
      <p><strong>Large-Scale Enterprises:</strong> Firms with high-volume inference needs where the fixed cost of self-hosting becomes cheaper than per-token API costs.</p>
    </div>

    <div className="flex items-start space-x-3">
      <span className="text-[#ff5722] font-bold text-lg">5.</span>
      <p><strong>Privacy-First Startups:</strong> Teams developing apps that handle highly sensitive user information where no data can ever leave the local network.</p>
    </div>

    <div className="flex items-start space-x-3">
      <span className="text-[#ff5722] font-bold text-lg">6.</span>
      <p><strong>Model Customizers:</strong> Developers who need to apply heavy, persistent LoRA or full-fine-tuning layers that aren't possible via standard APIs.</p>
    </div>

    <div className="flex items-start space-x-3">
      <span className="text-[#ff5722] font-bold text-lg">7.</span>
      <p><strong>Performance Engineers:</strong> Those who need near-zero latency for mission-critical tasks and need to bypass all network bottlenecks.</p>
    </div>
  </div>
</div>
          
        </article>

        {/* Conclusion Card */}
<div className="my-8 p-6 bg-[#121212] border border-gray-800 rounded-2xl shadow-xl">
  <h3 className="text-xl font-extrabold text-[#ff5722] tracking-wider mb-4 pb-2 border-b border-gray-800">
    Conclusion
  </h3>
  
  <div className="space-y-4 text-sm md:text-base text-gray-300">
    <p className="leading-relaxed">
      While Kimi K3 represents an incredible leap forward in open-weight AI development, its massive parameters mean that self-hosting is a luxury reserved primarily for well-funded labs and enterprises with specialized infrastructure.
    </p>
    <p className="leading-relaxed">
      For everyday developers, solopreneurs, and smaller teams, leveraging the Kimi K3 API or opting for lighter, more optimized models remains the smartest and most cost-effective path forward.
    </p>
  </div>
</div>


{/* Locked Content / Subscription Section */}
<div className="my-12 p-8 bg-[#121212] border border-gray-800 rounded-3xl shadow-2xl text-center">
  {/* Logo / Icon */}
  <div className="flex justify-center mb-4">
    <img 
      src="/logo.jpeg" 
      alt="Logo" 
      className="w-12 h-12 rounded-full object-cover border border-gray-700 shadow-md" 
    />
  </div>

  {/* Headings */}
  <h3 className="text-2xl font-extrabold text-white tracking-tight mb-2">
    You’ve reached the locked part! Subscribe to read the rest.
  </h3>
  <p className="text-gray-400 text-sm md:text-base mb-6">
    Get access to this post and other subscriber-only content.
  </p>

  {/* Upgrade Button */}
  <div className="mb-6">
    <button className="bg-[#ff5722] hover:bg-[#f4511e] text-white font-bold px-8 py-3 rounded-xl shadow-lg transition-all duration-200">
      Upgrade
    </button>
  </div>

  {/* Sign In Link */}
  <p className="text-gray-500 text-xs md:text-sm mb-8">
    Already a paying subscriber? <a href="#signin" className="text-[#ff5722] hover:underline font-medium">Sign In</a>
  </p>

  {/* Subscription Benefits Box */}
  <div className="text-left bg-[#18181b] border border-gray-800 rounded-2xl p-6 max-w-2xl mx-auto">
    <h4 className="text-white font-bold text-base mb-4 tracking-wide">
      A subscription gets you:
    </h4>
    
    <ul className="space-y-3 text-sm text-gray-300 list-disc list-inside">
      <li>
        <strong className="text-white">Instant access to 700+ AI workflows</strong> ($5,800+ Value)
      </li>
      <li>
        <strong className="text-white">Advanced AI tutorials:</strong> Master prompt engineering, RAG, model fine-tuning, Hugging Face, and open-source LLMs, etc ($2,997+ Value)
      </li>
      <li>
        <strong className="text-white">Daily AI Tutorials:</strong> Unlock new AI tools, money-making strategies, and industry (ecommerce, marketing, coding, teaching, and more) transformations (with videos!) ($3,650+ Value)
      </li>
      <li>
        <strong className="text-white">AI Case studies:</strong> Discover how companies use AI for internal success and innovative products ($1,997+ Value)
      </li>
      <li>
        <strong className="text-white">$300,000+ Savings/Discounts:</strong> Save big on top AI tools and exclusive startup discounts
      </li>
    </ul>
  </div>
</div>

{/* Keep Reading Section */}
<div className="my-12">
  <h3 className="text-2xl font-extrabold text-white mb-6 tracking-wide">
    Keep reading
  </h3>

  <div className="space-y-6">
    {/* Newsletter Card 1 */}
    <div className="flex flex-col md:flex-row bg-[#121212] border border-gray-800 rounded-2xl overflow-hidden shadow-xl hover:border-gray-700 transition-all duration-200">
      <div className="md:w-1/3 h-48 md:h-auto">
        <img 
          src="/multiagent2.jpeg" 
          alt="Mastering Multi-Agent AI Workflows" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-2/3 p-6 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-[#ff5722] tracking-wider uppercase">
            EDITION #01 • AUGUST 2026
          </span>
          <h4 className="text-xl font-bold text-white mt-1 mb-2">
            Mastering Multi-Agent AI Workflows for Solopreneurs
          </h4>
          <p className="text-gray-400 text-sm md:text-base mb-4">
            How to automate 80% of your digital business using autonomous agents.
          </p>
        </div>
        <div>
          <a 
            href="/newsletter/edition-4" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-bold text-[#ff5722] hover:text-[#f4511e]"
          >
            Read Issue →
          </a>
        </div>
      </div>
    </div>

    {/* Newsletter Card 2 */}
    <div className="flex flex-col md:flex-row bg-[#121212] border border-gray-800 rounded-2xl overflow-hidden shadow-xl hover:border-gray-700 transition-all duration-200">
      <div className="md:w-1/3 h-48 md:h-auto">
        <img 
          src="/Cyber-security.jpeg" 
          alt="Coreum Bridge Exploit" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-2/3 p-6 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-[#ff5722] tracking-wider uppercase">
            EDITION #02 • JULY 2026
          </span>
          <h4 className="text-xl font-bold text-white mt-1 mb-2">
            Coreum Bridge Exploit: 200K XRP Stolen & Price Slips Below $1.
          </h4>
          <p className="text-gray-400 text-sm md:text-base mb-4">
            Copy-paste prompts that scale your content creation and marketing funnels.
          </p>
        </div>
        <div>
          <a 
            href="/newsletter/edition-3" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-bold text-[#ff5722] hover:text-[#f4511e]"
          >
            Read Issue →
          </a>
        </div>
      </div>
    </div>

    {/* Newsletter Card 3 */}
    <div className="flex flex-col md:flex-row bg-[#121212] border border-gray-800 rounded-2xl overflow-hidden shadow-xl hover:border-gray-700 transition-all duration-200">
      <div className="md:w-1/3 h-48 md:h-auto">
        <img 
          src="/nextjs.jpeg" 
          alt="Building Modern Web Apps" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-2/3 p-6 flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-[#ff5722] tracking-wider uppercase">
            EDITION #03 • JULY 2026
          </span>
          <h4 className="text-xl font-bold text-white mt-1 mb-2">
            Building Modern Web Apps with Next.js & Tailwind
          </h4>
          <p className="text-gray-400 text-sm md:text-base mb-4">
            A complete architectural blueprint for launching fast developer tools.
          </p>
        </div>
        <div>
          <a 
            href="/newsletter/edition-2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-bold text-[#ff5722] hover:text-[#f4511e]"
          >
            Read Issue →
          </a>
        </div>
      </div>
    </div>
  </div>
</div>


        {/* Footer */}
        <footer className="mt-20 pt-10 border-t border-gray-800 text-center">
  <div className="max-w-2xl mx-auto px-4 flex flex-col items-center">
    
    {/* Closing Quote / Message */}
    <p className="text-gray-400 italic text-base mb-6 leading-relaxed">
      "The future belongs to solopreneurs who act as managers of AI teams rather than solo operators."
    </p>

    <div className="w-12 h-[1px] bg-[#ff5722] mb-6 opacity-60"></div>

    {/* Logo and Team Branding */}
    <div className="flex items-center space-x-4 mb-4 bg-[#121212] border border-gray-800 px-6 py-3 rounded-full shadow-lg">
      <img 
        src="/logo.jpeg" 
        alt="AI Hustlers Logo" 
        className="w-10 h-10 rounded-full object-cover border border-[#ff5722]/50 shrink-0" 
      />
      <span className="text-white font-bold tracking-wider text-sm">— AI Hustlers Team</span>
    </div>

    {/* Copyright */}
    <p className="text-xs text-gray-500 mt-2">
      © 2026 AI Hustlers. All rights reserved.
    </p>

  </div>
</footer>
</div>
</div>
  );
}