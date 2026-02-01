"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!name || !email || !password) {
    alert("All fields are required.");
    return;
  }

  try {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Signup failed. Please try again.");
      return;
    }

    // Optionally save JWT token in localStorage
    localStorage.setItem("token", data.token);

    alert("Account created successfully!");
    router.push("/auth/login"); // or you can push directly to dashboard if you want auto-login
  } catch (err) {
    console.error(err);
    alert("Something went wrong. Please try again later.");
  }
};

  return (
    <div className="signup-page-wrapper">
      <style>{`
        /* 1. Global Wrapper - Centering the Content */
        .signup-page-wrapper {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0a0e14;
          background-image: 
            radial-gradient(at 0% 0%, rgba(34, 197, 94, 0.15) 0, transparent 50%), 
            radial-gradient(at 100% 100%, rgba(59, 130, 246, 0.15) 0, transparent 50%);
          padding: 20px; /* Essential for mobile breathing room */
          box-sizing: border-box;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }

        /* 2. The Signup Card */
        .signup-card {
          width: 100%;
          max-width: 450px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 40px 30px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          color: white;
        }

        .signup-card h1 {
          margin: 0 0 10px 0;
          font-size: 2rem;
          font-weight: 800;
          text-align: center;
          background: linear-gradient(to right, #22c55e, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .signup-card p.subtitle {
          text-align: center;
          color: #94a3b8;
          margin-bottom: 30px;
          font-size: 0.95rem;
        }

        /* 3. Form Styling */
        form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #cbd5e1;
          margin-left: 4px;
        }

        .input-group input {
          width: 100%;
          padding: 14px 16px;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid #334155;
          border-radius: 12px;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
          outline: none;
          box-sizing: border-box;
        }

        .input-group input:focus {
          border-color: #22c55e;
          background: rgba(34, 197, 94, 0.05);
          box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.1);
        }

        /* 4. Button & Links */
        .signup-btn {
          margin-top: 10px;
          padding: 16px;
          border-radius: 12px;
          border: none;
          background: #22c55e;
          color: #052e16;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .signup-btn:hover {
          background: #4ade80;
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(34, 197, 94, 0.3);
        }

        .login-prompt {
          margin-top: 25px;
          text-align: center;
          font-size: 0.9rem;
          color: #94a3b8;
        }

        .login-prompt a {
          color: #22c55e;
          text-decoration: none;
          font-weight: 700;
        }

        .login-prompt a:hover {
          text-decoration: underline;
        }

        /* 5. Responsive Adjustments */
        @media (max-width: 480px) {
          .signup-card {
            padding: 30px 20px;
            border-radius: 20px;
          }
          .signup-card h1 {
            font-size: 1.75rem;
          }
        }
      `}</style>

      <div className="signup-card">
        <h1>Create Account</h1>
        <p className="subtitle">Join Pips Hunter Academy today</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="e.g. Antony Mwangi"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Min. 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>

        <p className="login-prompt">
          Already have an account? <Link href="/auth/login">Login</Link>
        </p>
      </div>
    </div>
  );
}