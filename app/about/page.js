"use client";

export default function About() {
  return (
    <div className="ph-about-container">
      <style>{`
        .ph-about-container {
          background-color: #0a0e14;
          color: #ffffff;
          font-family: 'Poppins', sans-serif;
          line-height: 1.8;
          padding-bottom: 80px;
        }

        /* Hero / Header Section */
        .ph-about-hero {
          text-align: center;
          padding: 100px 20px;
          background: linear-gradient(180deg, #1e3a8a 0%, #0a0e14 100%);
        }

        .ph-about-hero h1 {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          margin-bottom: 20px;
          background: linear-gradient(to right, #22c55e, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ph-about-hero p {
          max-width: 800px;
          margin: 0 auto;
          font-size: 1.2rem;
          color: #94a3b8;
        }

        /* Content Sections */
        .ph-content-section {
          max-width: 900px;
          margin: 40px auto;
          padding: 40px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: transform 0.3s ease;
        }

        .ph-content-section:hover {
          border-color: #22c55e;
          background: rgba(34, 197, 94, 0.02);
        }

        .ph-content-section h2 {
          color: #22c55e;
          font-size: 1.8rem;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* Values List */
        .ph-values-list {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
        }

        .ph-values-list li {
          background: #161b22;
          padding: 15px;
          border-radius: 10px;
          border: 1px solid #30363d;
          font-weight: 600;
          color: #cbd5e1;
        }

        /* CTA Section */
        .ph-cta-box {
          text-align: center;
          margin-top: 60px;
          padding: 60px 20px;
          background: radial-gradient(circle, #064e3b 0%, #0a0e14 100%);
          border-radius: 30px;
          margin-left: 20px;
          margin-right: 20px;
        }

        .ph-about-btn {
          margin-top: 25px;
          padding: 16px 40px;
          font-size: 1.1rem;
          font-weight: 700;
          background: #22c55e;
          color: #000;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          box-shadow: 0 10px 20px rgba(34, 197, 94, 0.3);
          transition: all 0.3s ease;
        }

        .ph-about-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(34, 197, 94, 0.5);
          background: #4ade80;
        }

        @media (max-width: 768px) {
          .ph-content-section {
            margin: 20px;
            padding: 25px;
          }
          
          .ph-about-hero {
            padding: 60px 20px;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="ph-about-hero">
        <h1>About Pips Hunter</h1>
        <p>Empowering traders with knowledge, discipline, and proven strategies to navigate the financial markets with confidence.</p>
      </section>

      {/* WHO I AM */}
      <section className="ph-content-section">
        <h2>👤 Who I Am</h2>
        <p>
          I’m <strong>Antony Mwangi</strong>, a forex trader and mentor passionate about helping
          beginners understand market structure, price action, and risk
          management. My goal is to simplify trading concepts and guide traders
          toward consistency.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="ph-content-section">
        <h2>📈 My Experience</h2>
        <p>
          With over two years of trading experience, I have developed practical
          strategies focused on risk management, technical analysis, and trading
          psychology. I have mentored students from different backgrounds,
          helping them improve discipline and decision-making.
        </p>
      </section>

      {/* MISSION */}
      <section className="ph-content-section">
        <h2>🎯 My Mission</h2>
        <p>
          My mission is to empower traders with the knowledge and confidence
          they need to trade independently. I focus on building strong
          foundations in technical analysis and promoting disciplined trading
          habits. 
        </p>
      </section>

      {/* CORE VALUES */}
      <section className="ph-content-section">
        <h2>💎 Core Values</h2>
        <ul className="ph-values-list">
          <li>✔ Discipline over emotions</li>
          <li>✔ Risk management first</li>
          <li>✔ Continuous learning</li>
          <li>✔ Transparency and honesty</li>
        </ul>
      </section>

      {/* JOIN CTA */}
      <section className="ph-cta-box">
        <h2>Ready to Start Your Trading Journey?</h2>
        <p>
          Join a growing community of traders learning how to trade smart and consistently.
        </p>
        <button className="ph-about-btn">Get Started</button>
      </section>
    </div>
  );
}