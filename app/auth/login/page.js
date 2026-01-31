"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login logic
    if (!email || !password) {
      alert("Please fill all the fields.");
      return;
    }

    alert("Login successful!");
    router.push("/learn");
  };

  return (
    <div className="ph-auth-container">
      <style>{`
        .ph-auth-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #0a0e14;
          background-image: 
            radial-gradient(circle at 20% 30%, #1e3a8a33 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, #064e3b33 0%, transparent 40%);
          font-family: 'Poppins', sans-serif;
          padding: 20px;
        }

        .ph-login-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 50px 40px;
          border-radius: 24px;
          width: 100%;
          max-width: 450px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .ph-login-card h1 {
          color: #ffffff;
          font-size: 2.2rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 10px;
          letter-spacing: -1px;
        }

        .ph-subtitle {
          text-align: center;
          color: #94a3b8;
          margin-bottom: 35px;
          font-size: 0.95rem;
        }

        .ph-form-group {
          margin-bottom: 20px;
        }

        .ph-form-group label {
          display: block;
          color: #cbd5e1;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .ph-input {
          width: 100%;
          padding: 14px 16px;
          background: #0d1117;
          border: 1px solid #30363d;
          border-radius: 12px;
          color: #ffffff;
          font-size: 1rem;
          transition: all 0.3s ease;
          outline: none;
        }

        .ph-input:focus {
          border-color: #22c55e;
          box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.1);
          background: #111827;
        }

        .ph-input::placeholder {
          color: #4b5563;
        }

        .ph-submit-btn {
          width: 100%;
          padding: 16px;
          background: #22c55e;
          color: #000000;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .ph-submit-btn:hover {
          background: #4ade80;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(34, 197, 94, 0.3);
        }

        .ph-submit-btn:active {
          transform: translateY(0);
        }

        .ph-footer-text {
          text-align: center;
          margin-top: 25px;
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .ph-signup-link {
          color: #22c55e;
          text-decoration: none;
          font-weight: 700;
          margin-left: 5px;
        }

        .ph-signup-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 480px) {
          .ph-login-card {
            padding: 40px 25px;
          }
        }
      `}</style>

      <div className="ph-login-card">
        <h1>Welcome Back</h1>
        <p className="ph-subtitle">Log in to your Pips Hunter account</p>

        <form onSubmit={handleSubmit}>
          <div className="ph-form-group">
            <label>Email Address</label>
            <input
              className="ph-input"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="ph-form-group">
            <label>Password</label>
            <input
              className="ph-input"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="ph-submit-btn" type="submit">
            Login
          </button>
        </form>

        <p className="ph-footer-text">
          Don't have an account? 
          <Link href="/auth/signup" className="ph-signup-link">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}