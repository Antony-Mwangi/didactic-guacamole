"use client";

export default function Features() {
  return (
    <div className="ph-features-page">
      <style>{`
        .ph-features-page {
          background-color: #0a0e14;
          color: #ffffff;
          font-family: 'Poppins', sans-serif;
          padding-bottom: 100px;
        }

        /* HERO HEADER */
        .ph-features-hero {
          text-align: center;
          padding: 120px 20px 60px;
          background: radial-gradient(circle at center, #1e3a8a33 0%, #0a0e14 100%);
        }

        .ph-features-hero h1 {
          font-size: clamp(2.5rem, 7vw, 4rem);
          font-weight: 800;
          margin-bottom: 20px;
          color: #22c55e;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .ph-features-hero p {
          font-size: 1.2rem;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
        }

        /* FEATURES GRID */
        .ph-grid-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .ph-feature-card {
          background: #161b22;
          padding: 40px;
          border-radius: 24px;
          border: 1px solid #30363d;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }

        .ph-feature-card:hover {
          transform: translateY(-10px);
          border-color: #22c55e;
          box-shadow: 0 20px 40px rgba(34, 197, 94, 0.1);
        }

        .ph-feature-card h3 {
          color: #22c55e;
          font-size: 1.5rem;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .ph-feature-card p {
          color: #94a3b8;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* WHY CHOOSE US SECTION */
        .ph-why-section {
          background: #0d1117;
          padding: 80px 20px;
          margin: 60px 0;
          text-align: center;
          border-top: 1px solid #30363d;
          border-bottom: 1px solid #30363d;
        }

        .ph-why-section h2 {
          font-size: 2.2rem;
          margin-bottom: 40px;
        }

        .ph-check-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          list-style: none;
          padding: 0;
          max-width: 1000px;
          margin: 0 auto;
        }

        .ph-check-list li {
          background: rgba(34, 197, 94, 0.1);
          color: #4ade80;
          padding: 12px 25px;
          border-radius: 50px;
          font-weight: 600;
          border: 1px solid rgba(34, 197, 94, 0.2);
        }

        /* FINAL CTA */
        .ph-cta-section {
          text-align: center;
          padding: 100px 20px;
        }

        .ph-btn-main {
          background: #22c55e;
          color: #000;
          padding: 20px 50px;
          font-size: 1.2rem;
          font-weight: 800;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(34, 197, 94, 0.4);
          margin-top: 30px;
        }

        .ph-btn-main:hover {
          background: #4ade80;
          transform: scale(1.05);
          box-shadow: 0 15px 40px rgba(34, 197, 94, 0.6);
        }

        @media (max-width: 768px) {
          .ph-grid-container {
            grid-template-columns: 1fr;
          }
          .ph-check-list {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="ph-features-hero">
        <h1>Our Features</h1>
        <p>Everything you need to become a confident and disciplined trader in today's dynamic markets.</p>
      </section>

      {/* FEATURES GRID */}
      <section className="ph-grid-container">
        <div className="ph-feature-card">
          <h3>Technical Analysis</h3>
          <p>Learn how to analyze charts, identify trends, support and resistance levels, and use indicators effectively to find market edge.</p>
        </div>

        <div className="ph-feature-card">
          <h3>Risk Management</h3>
          <p>Understand how to protect your capital, manage trades, and apply proper position sizing strategies to stay in the game long-term.</p>
        </div>

        <div className="ph-feature-card">
          <h3>Trading Psychology</h3>
          <p>Master emotional control, discipline, and confidence. Learn how to handle losses and stay calm during winning streaks.</p>
        </div>

        <div className="ph-feature-card">
          <h3>Entry & Exit</h3>
          <p>Discover proven methods to identify high-probability trade setups and learn exactly when to take profits and cut losses.</p>
        </div>

        <div className="ph-feature-card">
          <h3>Mentorship Support</h3>
          <p>Get direct guidance, feedback on your trades, and access to a community of like-minded traders to accelerate your growth.</p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="ph-why-section">
        <h2>Why Choose Pips Hunter?</h2>
        <ul className="ph-check-list">
          <li>✔ Beginner-friendly lessons</li>
          <li>✔ Practical real-market examples</li>
          <li>✔ Community support</li>
          <li>✔ Focus on discipline & consistency</li>
        </ul>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="ph-cta-section">
        <h2>Start Your Trading Journey Today</h2>
        <p style={{ color: '#94a3b8' }}>Join traders who are improving their skills and achieving consistent results.</p>
        <button className="ph-btn-main">Join Pips Hunter Now</button>
      </section>
    </div>
  );
}