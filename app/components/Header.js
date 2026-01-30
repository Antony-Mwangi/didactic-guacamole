"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <style>{`
        /* Reset for internal consistency */
        .ph-header-wrapper * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .ph-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 5%;
          background: #ffffff;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .ph-logo-area {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .ph-brand-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #1a1a1a;
          letter-spacing: -0.5px;
        }

        .ph-nav {
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .ph-nav-link {
          text-decoration: none;
          color: #444;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }

        .ph-nav-link:hover {
          color: #0066ff;
        }

        .ph-btn-contact {
          background-color: #0066ff;
          color: #ffffff !important;
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 600;
        }

        .ph-btn-contact:hover {
          background-color: #0052cc;
          transform: translateY(-1px);
        }

        /* Responsive Breakpoints */
        @media (max-width: 768px) {
          .ph-header {
            flex-direction: column;
            padding: 20px;
            text-align: center;
          }

          .ph-logo-area {
            margin-bottom: 15px;
          }

          .ph-nav {
            gap: 15px;
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
          }
          
          .ph-nav-link {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <header className="ph-header-wrapper ph-header">
        <div className="ph-logo-area">
          <Image 
            src="/logo1.jpeg" 
            alt="Pips Hunter Logo" 
            width={35} 
            height={35} 
            style={{ borderRadius: '4px' }}
          />
          <h2 className="ph-brand-title">Pips Hunter</h2>
        </div>

        <nav className="ph-nav">
          <Link href="/" className="ph-nav-link">Home</Link>
          <Link href="/features" className="ph-nav-link">Features</Link>
          <Link href="/about" className="ph-nav-link">About</Link>
          <Link href="/contact" className="ph-nav-link ph-btn-contact">Contact</Link>
        </nav>
      </header>
    </>
  );
}