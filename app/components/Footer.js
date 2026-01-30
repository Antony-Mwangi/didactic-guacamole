"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="ph-footer">
      <style>{`
        .ph-footer {
          background-color: #0d1117;
          color: #94a3b8;
          padding: 60px 5% 30px;
          font-family: 'Poppins', sans-serif;
          border-top: 1px solid #30363d;
        }

        .ph-footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .ph-footer-section h4 {
          color: #ffffff;
          font-size: 1.2rem;
          margin-bottom: 20px;
          position: relative;
          display: inline-block;
        }

        .ph-footer-section h4::after {
          content: '';
          display: block;
          width: 30px;
          height: 3px;
          background: #22c55e;
          margin-top: 8px;
          border-radius: 2px;
        }

        .ph-footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ph-footer-links a {
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.3s ease;
          width: fit-content;
        }

        .ph-footer-links a:hover {
          color: #22c55e;
          transform: translateX(5px);
        }

        .ph-contact-info p {
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ph-footer-bottom {
          margin-top: 50px;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          text-align: center;
          font-size: 0.9rem;
        }

        .ph-risk-text {
          color: #64748b;
          font-size: 0.85rem;
          max-width: 600px;
          margin: 15px auto 0;
          line-height: 1.4;
        }

        .ph-copyright {
          color: #ffffff;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .ph-footer {
            text-align: center;
            padding: 40px 20px 20px;
          }

          .ph-footer-section h4::after {
            margin: 8px auto;
          }

          .ph-footer-links {
            align-items: center;
          }

          .ph-footer-links a:hover {
            transform: translateY(-2px);
          }
        }
      `}</style>

      <div className="ph-footer-grid">
        {/* BRAND COLUMN */}
        <div className="ph-footer-section">
          <h4 style={{ color: '#22c55e' }}>Pips Hunter</h4>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
            Empowering traders with the technical skills and psychological edge 
            needed to dominate the financial markets.
          </p>
        </div>

        {/* LINKS COLUMN */}
        <div className="ph-footer-section">
          <h4>Quick Links</h4>
          <nav className="ph-footer-links">
            <Link href="/">Home</Link>
            <Link href="/feature">Features</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        {/* CONTACT COLUMN */}
        <div className="ph-footer-section ph-contact-info">
          <h4>Get In Touch</h4>
          <p>📧 antonymwangiw85@gmail.com</p>
          <p>📞 +254 711668298</p>
          <p>📍 Nairobi, Kenya</p>
        </div>
      </div>

      <div className="ph-footer-bottom">
        <p className="ph-copyright">
          © {new Date().getFullYear()} Pips Hunter. All rights reserved.
        </p>
        <p className="ph-risk-text">
          <strong>Risk Warning:</strong> Trading involves significant risk. 
          Market movements are unpredictable, and past performance is not a 
          guarantee of future success. Trade responsibly.
        </p>
      </div>
    </footer>
  );
}