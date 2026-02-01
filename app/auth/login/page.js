"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // For success/error messages
  const [messageType, setMessageType] = useState("success"); // "success" or "error"

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessageType("error");
      setMessage("Please fill all the fields.");
      return;
    }

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessageType("error");
        setMessage(data.message || "Login failed");
        return;
      }

      // Save token + user
      localStorage.setItem("ph_token", data.token);
      localStorage.setItem("ph_user", JSON.stringify(data.user));

      // Show success message
      setMessageType("success");
      setMessage("Welcome back! Redirecting to your dashboard...");

      // Redirect after short delay
      setTimeout(() => {
        router.push("/dashboard");
      }, 1200);

    } catch (error) {
      setMessageType("error");
      setMessage("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="ph-auth-container">
      <style>{`
        /* 1. Global Container - Fluid Background */
        .ph-auth-container {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #0a0e14;
          background-image: 
            radial-gradient(circle at 10% 20%, rgba(30, 58, 138, 0.2) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(34, 197, 94, 0.15) 0%, transparent 40%);
          font-family: 'Inter', 'Poppins', sans-serif;
          padding: 20px;
          box-sizing: border-box;
        }

        /* 2. Login Card - Responsive Widths */
        .ph-login-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: clamp(30px, 8vw, 50px) clamp(20px, 5vw, 40px);
          border-radius: 28px;
          width: 100%;
          max-width: 440px;
          box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.7);
          animation: phFadeIn 0.8s ease-out;
        }

        @keyframes phFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* 3. Fluid Typography */
        .ph-login-card h1 {
          color: #ffffff;
          font-size: clamp(1.8rem, 5vw, 2.4rem);
          font-weight: 800;
          text-align: center;
          margin: 0 0 10px 0;
          letter-spacing: -0.02em;
        }

        .ph-subtitle {
          text-align: center;
          color: #94a3b8;
          margin-bottom: clamp(25px, 6vw, 40px);
          font-size: clamp(0.9rem, 2vw, 1rem);
          font-weight: 400;
        }

        /* 4. Form Layout */
        .ph-form-group {
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ph-form-group label {
          color: #cbd5e1;
          font-size: 0.85rem;
          font-weight: 600;
          padding-left: 4px;
        }

        .ph-input {
          width: 100%;
          padding: 16px;
          background: rgba(13, 17, 23, 0.8);
          border: 1px solid #334155;
          border-radius: 14px;
          color: #ffffff;
          font-size: 1rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          outline: none;
          box-sizing: border-box;
        }

        .ph-input:focus {
          border-color: #22c55e;
          background: #0d1117;
          box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.15);
        }

        /* 5. The "Profit" Button */
        .ph-submit-btn {
          width: 100%;
          padding: 18px;
          background: #22c55e;
          color: #052e16;
          border: none;
          border-radius: 14px;
          font-size: 1rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 10px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .ph-submit-btn:hover {
          background: #4ade80;
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(34, 197, 94, 0.3);
        }

        .ph-submit-btn:active {
          transform: translateY(1px);
        }

        .ph-footer-text {
          text-align: center;
          margin-top: 30px;
          color: #64748b;
          font-size: 0.95rem;
        }

        .ph-signup-link {
          color: #22c55e;
          text-decoration: none;
          font-weight: 700;
          margin-left: 6px;
          transition: color 0.2s;
        }

        .ph-signup-link:hover {
          color: #4ade80;
          text-decoration: underline;
        }

        /* 6. Message styling */
        .ph-message {
          text-align: center;
          margin-top: 16px;
          font-weight: 600;
        }

        .ph-message.success {
          color: #22c55e;
        }

        .ph-message.error {
          color: #f87171;
        }

        /* 7. Breakpoints for fine-tuning */
        @media (max-width: 400px) {
          .ph-login-card {
            padding: 30px 20px;
            border-radius: 20px;
          }
          .ph-input {
            padding: 14px;
          }
        }
      `}</style>

      <div className="ph-login-card">
        <h1>Welcome Back</h1>
        <p className="ph-subtitle">Continue your journey with Pips Hunter</p>

        <form onSubmit={handleSubmit}>
          <div className="ph-form-group">
            <label>Email Address</label>
            <input
              className="ph-input"
              type="email"
              placeholder="Enter your email"
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

          {/* Display success or error message */}
          {message && (
            <p className={`ph-message ${messageType}`}>
              {message}
            </p>
          )}
        </form>

        <p className="ph-footer-text">
          New to the academy? 
          <Link href="/auth/signup" className="ph-signup-link">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
