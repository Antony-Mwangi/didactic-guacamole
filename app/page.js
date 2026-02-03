"use client";
import Link from "next/link";


export default function Home() {
  const testimonials = [
    {
      name: "Brian K.",
      message: "I improved my trading discipline and now I understand risk management clearly.",
    },
    {
      name: "Sarah M.",
      message: "The mentorship helped me identify better entry and exit points. Highly recommended!",
    },
    {
      name: "David O.",
      message: "I gained confidence in reading charts and managing trades effectively.",
    },
  ];

  return (
    <div className="ph-page-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');

        .ph-page-container {
          font-family: 'Poppins', sans-serif;
          background-color: #0a0e14;
          color: #ffffff;
          overflow-x: hidden;
        }

        
        .ph-hero {
          position: relative;
          text-align: center;
          padding: 140px 20px;
          background: radial-gradient(circle at top right, #1e3a8a 0%, #0a0e14 50%),
                      radial-gradient(circle at bottom left, #064e3b 0%, #0a0e14 50%);
        }

        .ph-hero h1 {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 25px;
          background: linear-gradient(to right, #fff, #94a3b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ph-hero p {
          max-width: 650px;
          margin: 0 auto 40px;
          font-size: 1.2rem;
          color: #94a3b8;
        }

        .ph-btn-glow {
          padding: 18px 45px;
          font-size: 1.1rem;
          font-weight: 700;
          background: #22c55e;
          border: none;
          border-radius: 50px;
          color: #000;
          cursor: pointer;
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.4);
          transition: all 0.3s ease;
          text-transform: uppercase;
        }

        .ph-btn-glow:hover {
          transform: scale(1.05);
          box-shadow: 0 0 35px rgba(34, 197, 94, 0.6);
          background: #4ade80;
        }

      
        .ph-section {
          padding: 100px 20px;
          max-width: 1200px;
          margin: auto;
        }

        .ph-section h2 {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 50px;
          color: #f8fafc;
        }

        
        .ph-glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 40px;
          margin-top: 30px;
        }

        .ph-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          list-style: none;
          margin-top: 30px;
          padding: 0;
        }

        .ph-list li {
          background: rgba(34, 197, 94, 0.1);
          padding: 15px;
          border-radius: 12px;
          border-left: 4px solid #22c55e;
          font-weight: 600;
        }

        
        .ph-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .ph-testimonial-card {
          background: #161b22;
          padding: 30px;
          border-radius: 20px;
          border: 1px solid #30363d;
          transition: border-color 0.3s;
        }

        .ph-testimonial-card:hover {
          border-color: #22c55e;
        }

        .ph-stat-card {
          background: linear-gradient(145deg, #1e293b, #0f172a);
          padding: 40px;
          border-radius: 20px;
          text-align: center;
        }

        .ph-stat-number {
          display: block;
          font-size: 3rem;
          font-weight: 800;
          color: #22c55e;
        }

        
        .ph-disclaimer {
          background: rgba(239, 68, 68, 0.1);
          border: 1px dashed #ef4444;
          padding: 30px;
          border-radius: 15px;
          margin-top: 50px;
          text-align: center;
        }

        
        @media (max-width: 768px) {
          .ph-hero { padding: 80px 20px; }
          .ph-section { padding: 60px 20px; }
        }
      `}</style>

      
      <section className="ph-hero">
        <h1>Master Trading <br/> With Precision</h1>
        <p>
          Unlock the secrets of the Forex market. Learn institutional strategies 
          used by the pros to trade with confidence.
        </p>

      <Link href="/auth/login" className="ph-btn-glow"> Start Your Journey</Link>
      </section>

      
      <section className="ph-section">
        <div className="ph-glass-card">
          <h2>About Antony Mwangi</h2>
          <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '1.1rem' }}>
            A dedicated forex mentor with 2+ years of experience in market structure and price action.
          </p>
          <ul className="ph-list">
            <li>📈 Technical Analysis</li>
            <li>🛡️ Risk Management</li>
            <li>🧠 Trading Psychology</li>
            <li>🚀 Entry Strategies</li>
            <li>📊 Market Structure</li>
          </ul>
        </div>
      </section>

      
      <section className="ph-section">
        <div className="ph-grid">
          <div className="ph-stat-card">
            <span className="ph-stat-number">1000+</span>
            <p>Active Students</p>
          </div>
          <div className="ph-stat-card">
            <span className="ph-stat-number">20+</span>
            <p>Countries</p>
          </div>
          <div className="ph-stat-card">
            <span className="ph-stat-number">500+</span>
            <p>VIP Members</p>
          </div>
        </div>
      </section>

      
      <section className="ph-section" style={{ background: '#0d1117' }}>
        <h2>Student Success</h2>
        <div className="ph-grid">
          {testimonials.map((item, index) => (
            <div key={index} className="ph-testimonial-card">
              <p style={{ color: '#94a3b8', marginBottom: '20px' }}>&quot;{item.message}</p>
              <h4 style={{ color: '#22c55e' }}>{item.name}</h4>
            </div>
          ))}
        </div>
      </section>

      
      <section className="ph-section">
        <div className="ph-disclaimer">
          <h3 style={{ color: '#ef4444' }}>⚠️ Risk Disclaimer</h3>
          <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
            Trading forex involves substantial risk. Past performance is not indicative 
            of future results. Never trade money you cannot afford to lose.
          </p>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <h2>Ready to Level Up?</h2>
          <p>Contact: <span style={{ color: '#22c55e' }}>antonymwangiw85@gmail.com</span></p>
        </div>
      </section>
    </div>
  );
}