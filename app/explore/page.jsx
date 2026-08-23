export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-orange-500">AI Hustlerss Data & Tools</h1>
        <p className="text-gray-300 text-lg mb-12">
          Explore our suite of advanced AI agents, automated workflows, and company assets designed for modern digital creators.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-3">Company Overview</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI Hustlerss is engineered for speed and conversion, empowering entrepreneurs with high-performance digital tools and scalable web architectures.
            </p>
          </div>

          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-3">Active AI Workflows</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Custom-built automated funnels, multi-agent frameworks, and data-driven growth marketing strategies.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a href="/" className="inline-block px-6 py-3 rounded-xl bg-orange-500 text-black font-bold hover:bg-orange-600 transition-all">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}