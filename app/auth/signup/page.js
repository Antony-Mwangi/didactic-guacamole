"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("All fields are required.");
      return;
    }
    alert("Account created successfully!");
    router.push("/auth/login"); // Added leading slash for correct routing
  };

  return (
    <div className="ph-signup-wrapper">
      <style>{`
        .ph-signup-wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #0a0e14;
          background-image: 
            radial-gradient(circle at top right, #064e3b44 0%, transparent 40%),
            radial-gradient(circle at bottom left, #1e3a8a44 0%, transparent 40%);
          font-family: 'Poppins', sans-serif;
          padding: 20px;
        }

        .ph-signup-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 40px;
          border-radius: 28px;
          width: 100%;
          max-width: 480px;
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.6);
        }

        .ph-signup-card h1 {
          color: #ffffff;
          font-size: 2.2rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 8px;
          background: linear-gradient(to right, #4ade80, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ph-signup-subtitle {
          text-align: center;
          color: #94a3b8;
          margin-bottom: 30px;
          font-size: 0.95rem;
        }

        .ph-form-group {
          margin-bottom: 18px;
        }

        .ph-form-group label {
          display: block;
          color: #94a3b8;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 6px;
          padding-left: 4px;
        }

        .ph-input {
          width: 100%;
          padding: 14px 18px;
          background: rgba(13, 17, 23, 0.8);
          border: 1px solid #30363d;
          border-radius: 14px;
          color: #ffffff;
          font-size: 1rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          outline: none;
        }

        .ph-input:focus {
          border-color: #4ade80;
          background: #0d1117;
          box-shadow: 0 0 0 4px rgba(74, 222, 128, 0.1);
        }

        .ph-signup-btn {
          width: 100%;
          padding: 16px;
          background: #22c55e;
          color: #000000;
          border: none;
          border-radius: 14px;
          font-size: 1.1rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 15px;
          box-shadow: 0 8px 15px rgba(34, 197, 94, 0.2);
        }

        .ph-signup-btn:hover {
          background: #4ade80;
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(34, 197, 94, 0.4);
        }

        .ph-footer {
          text-align: center;
          margin-top: 25px;
          color: #64748b;
          font-size: 0.9rem;
        }

        .ph-link {
          color: #4ade80;
          text-decoration: none;
          font-weight: 700;
          margin-left: 5px;
        }

        .ph-link:hover {
          color: #60a5fa;
          text-decoration: underline;
        }

        @media (max-width: 480px) {
          .ph-signup-card {
            padding: 30px 20px;
          }
        }
      `}</style>

      <div className="ph-signup-card">
        <h1>Create Account</h1>
        <p className="ph-signup-subtitle">Join the Pips Hunter Trading Academy</p>

        <form onSubmit={handleSubmit}>
          <div className="ph-form-group">
            <label>Full Name</label>
            <input
              className="ph-input"
              type="text"
              placeholder="Antony Mwangi"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="ph-form-group">
            <label>Email Address</label>
            <input
              className="ph-input"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="ph-form-group">
            <label>Password</label>
            <input
              className="ph-input"
              type="password"
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="ph-signup-btn" type="submit">
            Sign Up
          </button>
        </form>

        <p className="ph-footer">
          Already have an account? 
          <Link href="/auth/login" className="ph-link">Login</Link>
        </p>
      </div>
    </div>
  );
}