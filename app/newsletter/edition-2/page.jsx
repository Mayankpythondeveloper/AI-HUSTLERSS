export default function Edition2() {
  return (
    <main style={{ backgroundColor: '#0f0f0f', minHeight: '100vh', color: '#d4d4d8', padding: '30px 15px', fontFamily: 'sans-serif' }}>
      
      {/* Newsletter Container */}
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '12px', padding: '35px', boxShadow: '0 5px 20px rgba(0,0,0,0.4)' }}>
        
        {/* Top Metadata Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #27272a', paddingBottom: '12px' }}>
          <span style={{ color: '#f97316', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '1px' }}>
            Edition #02 • July 2026
          </span>
          <span style={{ color: '#71717a', fontSize: '13px' }}>
            Architectural Blueprint
          </span>
        </div>

        {/* Title & Subtitle */}
        <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#fff', marginBottom: '12px', lineHeight: '1.2' }}>
          🚀 Building Modern Web Apps with Next.js & Tailwind CSS
        </h1>
        <p style={{ fontSize: '16px', color: '#a1a1aa', marginBottom: '25px', lineHeight: '1.5' }}>
          A complete architectural blueprint for launching fast developer tools, optimizing components, and styling efficiently for production scale.
        </p>

        {/* Brand Banner Box */}
        <div style={{ width: '100%', height: '130px', backgroundColor: '#27272a', borderRadius: '8px', marginBottom: '30px', display: 'flex', alignItems: 'center', padding: '0 25px', gap: '18px', border: '1px solid #3f3f46' }}>
          <img src="/logo.jpeg" alt="Logo" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #f97316' }} />
          <div>
            <h3 style={{ color: '#fff', fontWeight: 'bold', fontSize: '18px', margin: '0 0 4px 0' }}>AI HUSTLERSS</h3>
            <p style={{ color: '#a1a1aa', fontSize: '14px', margin: '0' }}>Development & Engineering Blueprints</p>
          </div>
        </div>

        {/* Introduction */}
        <p style={{ lineHeight: '1.7', marginBottom: '20px', fontSize: '15px' }}>
          Modern web development demands lightning-fast load times, seamless developer experience, and ultra-responsive interfaces. By combining Next.js with Tailwind CSS, developers can build scalable applications with minimal boilerplate and maximum performance.
        </p>

        {/* SECTION 1 */}
        <h2 style={{ fontSize: '20px', color: '#fff', marginTop: '30px', marginBottom: '12px', borderLeft: '4px solid #f97316', paddingLeft: '10px' }}>
          1. Why Next.js for Modern Applications?
        </h2>
        <p style={{ lineHeight: '1.7', marginBottom: '15px', fontSize: '15px' }}>
          Next.js provides hybrid static and server rendering, smart bundling, and route prefetching out of the box. This ensures that your application ranks well on search engines while delivering instant page transitions to your end users.
        </p>

        {/* Full Rectangular Image Box */}
<div style={{ backgroundColor: '#27272a', borderRadius: '8px', marginBottom: '25px', border: '1px solid #3f3f46', overflow: 'hidden' }}>
  <img 
    src="/nextjs.jpeg" 
    alt="Full Cyber Security Overview" 
    style={{ width: '100%', height: '350px', objectFit: 'cover', display: 'block' }} 
  />
</div>

        {/* SECTION 2 */}
        <h2 style={{ fontSize: '20px', color: '#fff', marginTop: '30px', marginBottom: '12px', borderLeft: '4px solid #f97316', paddingLeft: '10px' }}>
          2. Utility-First Styling with Tailwind CSS
        </h2>
        <p style={{ lineHeight: '1.7', marginBottom: '20px', fontSize: '15px' }}>
          Tailwind CSS lets you build custom designs without ever leaving your JSX. By using low-level utility classes, you avoid bloated CSS stylesheets, maintain absolute consistency across components, and easily adapt layouts for mobile and desktop viewports.
        </p>

        {/* SECTION 3 */}
        <h2 style={{ fontSize: '20px', color: '#fff', marginTop: '30px', marginBottom: '12px', borderLeft: '4px solid #f97316', paddingLeft: '10px' }}>
          3. Optimizing Performance & Deployment
        </h2>
        <p style={{ lineHeight: '1.7', marginBottom: '20px', fontSize: '15px' }}>
          From automatic image optimization to edge-ready API routes, structuring your codebase properly ensures effortless deployment on modern hosting infrastructure. Clean component division and strict state management keep your application lightweight and maintainable.
        </p>
        {/* Full Rectangular Image Box */}
<div style={{ backgroundColor: '#27272a', borderRadius: '8px', marginBottom: '25px', border: '1px solid #3f3f46', overflow: 'hidden' }}>
  <img 
    src="/deployment.jpeg" 
    alt="Full Cyber Security Overview" 
    style={{ width: '100%', height: '350px', objectFit: 'cover', display: 'block' }} 
  />
</div>

        {/* SECTION 4 */}
        <h2 style={{ fontSize: '20px', color: '#fff', marginTop: '30px', marginBottom: '12px', borderLeft: '4px solid #f97316', paddingLeft: '10px' }}>
          4. Component-Driven Architecture & Reusability
        </h2>
        <p style={{ lineHeight: '1.7', marginBottom: '20px', fontSize: '15px' }}>
          Breaking your UI down into small, modular, and reusable components allows you to scale codebases without losing maintainability. By separating layout shells from functional logic, developers can update design systems globally with a single tweak. This structured component hierarchy prevents code duplication and drastically accelerates feature shipping times across large teams.
        </p>

        <div style={{ backgroundColor: '#27272a', borderRadius: '8px', marginBottom: '25px', border: '1px solid #3f3f46', overflow: 'hidden' }}>
  <img 
    src="/modular.jpeg" 
    alt="Full Cyber Security Overview" 
    style={{ width: '100%', height: '350px', objectFit: 'cover', display: 'block' }} 
  />
  </div>

        {/* SECTION 5 */}
        <h2 style={{ fontSize: '20px', color: '#fff', marginTop: '30px', marginBottom: '12px', borderLeft: '4px solid #f97316', paddingLeft: '10px' }}>
          5. Seamless API Integration & State Management
        </h2>
        <p style={{ lineHeight: '1.7', marginBottom: '20px', fontSize: '15px' }}>
          Connecting modern frontend interfaces with robust backend APIs requires efficient state handling and minimal client-side friction. Leveraging built-in routing mechanisms along with secure environment variables ensures that data flows smoothly between server and client. This robust architectural foundation guarantees enterprise-grade security and blazing-fast data fetching for all users.
        </p>

        {/* Sign-off */}
        <div style={{ marginTop: '50px', paddingTop: '30px', borderTop: '1px solid #27272a', textAlign: 'center' }}>
          <p style={{ fontSize: '15px', color: '#a1a1aa', marginBottom: '25px' }}>
            That's it for this week! Try setting up your first multi-agent workflow today and reply to this edition letting me know how it goes.
          </p>
          
          {/* Logo and Team Signature */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <img 
              src="/logo.jpeg" 
              alt="AI Hustlers Logo" 
              style={{ width: '50px', height: '50px', borderRadius: '50%', border: '2px solid #f97316' }} 
            />
            <p style={{ fontWeight: 'bold', color: '#fff', fontSize: '16px', margin: '0' }}>
              — AI Hustlers Team
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}