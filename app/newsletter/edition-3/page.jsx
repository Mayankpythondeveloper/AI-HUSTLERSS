export default function Edition3() {
  return (
    <main style={{ backgroundColor: '#0f0f0f', minHeight: '100vh', color: '#d4d4d8', padding: '30px 15px', fontFamily: 'sans-serif' }}>
      
      {/* Detailed Newsletter Container */}
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '12px', padding: '35px', boxShadow: '0 5px 20px rgba(0,0,0,0.4)' }}>
        
        {/* Top Header / Metadata */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #27272a', paddingBottom: '12px' }}>
          <span style={{ color: '#f97316', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '1px' }}>
            Edition #03 • July 2026
          </span>
          <span style={{ color: '#71717a', fontSize: '13px' }}>
            August 11, 2026 | Read Online
          </span>
        </div>

        {/* Title & Subtitle */}
        <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#fff', marginBottom: '12px', lineHeight: '1.2' }}>
          🚨 Coreum Bridge Exploit: 200K XRP Stolen & Price Slips Below $1
        </h1>
        <p style={{ fontSize: '16px', color: '#a1a1aa', marginBottom: '25px', lineHeight: '1.5' }}>
          An in-depth breakdown of the 97-minute bridge attack, how fake deposit data fooled the relayer, why the XRPL remains 100% safe, and broader market updates.
        </p>

        {/* Brand Banner Box */}
        <div style={{ width: '100%', height: '130px', backgroundColor: '#27272a', borderRadius: '8px', marginBottom: '30px', display: 'flex', alignItems: 'center', padding: '0 25px', gap: '18px', border: '1px solid #3f3f46' }}>
          <img src="/logo.jpeg" alt="The Crypto Fire Logo" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #f97316' }} />
          <div>
            <h3 style={{ color: '#fff', fontWeight: 'bold', fontSize: '18px', margin: '0 0 4px 0' }}>THE AI Hustlerss</h3>
            <p style={{ color: '#a1a1aa', fontSize: '14px', margin: '0' }}>Your Daily Web3 Intelligence & Market Deep-Dives</p>
          </div>
        </div>

        {/* Market Overview */}
        <p style={{ lineHeight: '1.7', marginBottom: '20px', fontSize: '15px' }}>
          The crypto market is holding in a tight range as total market cap sits around <strong>$2.2 Trillion</strong>. Traders are standing by ahead of key macro economic reports, but all eyes are currently locked on the cross-chain bridge security incident that shook the ecosystem.
        </p>

        {/* SECTION 1: Coreum Bridge Exploit */}
        <h2 style={{ fontSize: '20px', color: '#fff', marginTop: '30px', marginBottom: '12px', borderLeft: '4px solid #f97316', paddingLeft: '10px' }}>
          1. Inside The Attack: 97 Minutes, 94 Transactions
        </h2>
        <p style={{ lineHeight: '1.7', marginBottom: '15px', fontSize: '15px' }}>
          An attacker just drained nearly <strong>200,000 XRP</strong> from the Coreum bridge in just 97 minutes. The exploit triggered widespread concern and sent $XRP's price dipping below $1 for the first time in nearly 2 years.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '20px', fontSize: '15px' }}>
          <strong>How it went down:</strong> The attacker ran a quick test with small transfers, then ramped up to firing off 1,695 XRP every 50 seconds. Over 94 quick transactions, they cleaned out the vault, leaving a measly 493.5 XRP behind, and instantly split funds across brand new wallets to hinder tracking.
        </p>

        {/* Optional Image Placeholder for Exploit Chart */}
         <img 
         src="/Cyber-security.jpeg" 
         alt="Cyber Security Exploit Breakdown" 
         style={{ width: '80%', height: 'auto', borderRadius: '4px', border: '1px solid #3f3f46', marginBottom: '25px' }} 
        />
        {/* SECTION 2: What Caused It */}
        <h2 style={{ fontSize: '20px', color: '#fff', marginTop: '30px', marginBottom: '12px', borderLeft: '4px solid #f97316', paddingLeft: '10px' }}>
          2. What Actually Caused the Exploit? (Hint: It Wasn't XRPL)
        </h2>
        <p style={{ lineHeight: '1.7', marginBottom: '15px', fontSize: '15px' }}>
          Initial rumors claimed the hack was caused by multi-sig key leaks or core ledger flaws. However, the reality is different: <strong>the attacker simply transferred XRP between 2 wallets they owned and tagged the memo field.</strong>
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '20px', fontSize: '15px' }}>
          The bridge relayer saw the custom memo, assumed it was a legitimate deposit into the bridge, and automatically credited the attacker with free wrapped tokens on Coreum. 17 out of 28 relayer keys signed off because the security process followed code rules—it was just working with completely fake deposit data.
        </p>
        {/* Image */}
        <img 
         src="/Blockchain-network-connection.jpeg" 
         alt="Cyber Security Exploit Breakdown" 
         style={{ width: '80%', height: 'auto', borderRadius: '8px', border: '1px solid #3f3f46', marginBottom: '25px' }} 
        />

        {/* SECTION 3: Why XRPL Remains Safe */}
        <h2 style={{ fontSize: '20px', color: '#fff', marginTop: '30px', marginBottom: '12px', borderLeft: '4px solid #f97316', paddingLeft: '10px' }}>
          3. Why the XRP Ledger Remains 100% Safe
        </h2>
        <p style={{ lineHeight: '1.7', marginBottom: '20px', fontSize: '15px' }}>
          It is super important to distinguish bridge logic bugs from base blockchain vulnerabilities. No private keys on the core ledger were stolen, and the core XRP Ledger protocol, consensus mechanism, and security remain entirely uncompromised.
        </p>
        {/* Image */}
        <img 
         src="/Secure-crypto.jpeg" 
         alt="XRP Ledger Security" 
         style={{ width: '80%', height: 'auto', borderRadius: '4px', border: '1px solid #3f3f46', marginBottom: '25px' }} 
        />

        {/* SECTION 4: Bitcoin & ETF Updates */}
        <h2 style={{ fontSize: '20px', color: '#fff', marginTop: '30px', marginBottom: '12px', borderLeft: '4px solid #f97316', paddingLeft: '10px' }}>
          4. Macro & Market Updates: Bitcoin & ETFs
        </h2>
        <ul style={{ lineHeight: '1.7', marginBottom: '20px', paddingLeft: '20px', fontSize: '15px', color: '#d4d4d8' }}>
          <li style={{ marginBottom: '10px' }}><strong>$BTC Price Action:</strong> Hovering near $63,750 – $63,900 after pulling back from $65k, with solid baseline support holding strong at $63,600.</li>
          <li style={{ marginBottom: '10px' }}><strong>ETF Inflows:</strong> Crypto ETFs recorded $1.1B in net weekly inflows, though broad market macro caution is keeping leverage low across derivative platforms.</li>
        </ul>

        {/* Callout Box */}
        <div style={{ backgroundColor: '#27272a', borderLeft: '4px solid #f97316', padding: '15px 20px', borderRadius: '0 8px 8px 0', marginBottom: '25px', fontStyle: 'italic', color: '#e4e4e7', fontSize: '15px' }}>
          "Always distinguish cross-chain bridge logic flaws from underlying blockchain consensus failures."
        </div>

        {/* Conclusion / Sign-off */}
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