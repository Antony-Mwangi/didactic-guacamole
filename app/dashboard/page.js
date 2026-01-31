"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const totalLessons = 3;

  const [progress, setProgress] = useState({
    psychology: false,
    riskManagement: false,
    marketAnalysis: false,
  });

  const [notes, setNotes] = useState("");
  const [streak, setStreak] = useState(1);
  const [username, setUsername] = useState("Trader");
  const [quizScore, setQuizScore] = useState(0);

  // Load saved data
  useEffect(() => {
    const savedProgress = localStorage.getItem("progress");
    const savedNotes = localStorage.getItem("notes");
    const savedStreak = localStorage.getItem("streak");
    const savedUsername = localStorage.getItem("username");
    const savedQuiz = localStorage.getItem("quizScore");

    if (savedProgress) setProgress(JSON.parse(savedProgress));
    if (savedNotes) setNotes(savedNotes);
    if (savedStreak) setStreak(Number(savedStreak));
    if (savedUsername) setUsername(savedUsername);
    if (savedQuiz) setQuizScore(Number(savedQuiz));
  }, []);

  // Save progress
  useEffect(() => {
    localStorage.setItem("progress", JSON.stringify(progress));
  }, [progress]);

  const completedLessons = Object.values(progress).filter(Boolean).length;
  const percentage = Math.round((completedLessons / totalLessons) * 100);

  const markComplete = (lesson) => {
    setProgress((prev) => ({ ...prev, [lesson]: true }));
  };

  const saveNotes = () => {
    localStorage.setItem("notes", notes);
    alert("Notes saved to your terminal!");
  };

  const saveProfile = () => {
    localStorage.setItem("username", username);
    alert("Profile updated!");
  };

  const increaseStreak = () => {
    const newStreak = streak + 1;
    setStreak(newStreak);
    localStorage.setItem("streak", newStreak);
  };

  const badges = [];
  if (completedLessons >= 1) badges.push("Beginner Badge 🥉");
  if (completedLessons >= 2) badges.push("Intermediate Badge 🥈");
  if (completedLessons === 3) badges.push("Master Trader Badge 🥇");

  return (
    <div className="ph-dashboard">
      <style>{`
        .ph-dashboard {
          background-color: #0a0e14;
          color: #e2e8f0;
          min-height: 100vh;
          font-family: 'Poppins', sans-serif;
          padding: clamp(20px, 5vw, 50px);
        }

        .ph-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .ph-header {
          margin-bottom: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .ph-header h1 { font-size: 2.5rem; margin: 0; color: #fff; }
        .ph-streak-chip {
          background: rgba(255, 107, 0, 0.1);
          color: #ff6b00;
          padding: 8px 20px;
          border-radius: 50px;
          border: 1px solid #ff6b0044;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }

        /* GRID LAYOUT */
        .ph-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 25px;
        }

        .ph-card {
          background: #111827;
          border: 1px solid #1f2937;
          border-radius: 20px;
          padding: 25px;
          transition: transform 0.3s ease;
        }

        .ph-card h2 { font-size: 1.2rem; color: #94a3b8; margin-top: 0; margin-bottom: 20px; }

        /* SECTIONS SIZING */
        .ph-col-8 { grid-column: span 8; }
        .ph-col-4 { grid-column: span 4; }
        .ph-col-12 { grid-column: span 12; }

        /* PROGRESS BAR */
        .ph-progress-bg {
          width: 100%;
          background: #1f2937;
          height: 12px;
          border-radius: 10px;
          overflow: hidden;
          margin: 15px 0;
        }
        .ph-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #22c55e, #4ade80);
          transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* LISTS & BUTTONS */
        .ph-list { list-style: none; padding: 0; margin: 0; }
        .ph-list-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0;
          border-bottom: 1px solid #1f2937;
        }

        .ph-btn {
          background: #22c55e;
          color: #052e16;
          border: none;
          padding: 10px 18px;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
          font-size: 0.85rem;
          transition: 0.2s;
        }
        .ph-btn:hover { background: #4ade80; transform: translateY(-2px); }
        .ph-btn-secondary { background: #334155; color: #fff; }

        .ph-input, .ph-textarea {
          width: 100%;
          background: #0d1117;
          border: 1px solid #334155;
          border-radius: 12px;
          color: #fff;
          padding: 12px;
          box-sizing: border-box;
          font-family: inherit;
        }

        .ph-badge-flex { display: flex; gap: 10px; flex-wrap: wrap; }
        .ph-badge {
          background: #1e293b;
          padding: 8px 15px;
          border-radius: 12px;
          border: 1px solid #334155;
          font-size: 0.9rem;
        }

        .ph-nav-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-top: 20px;
        }
        .ph-nav-card {
          background: #0d1117;
          padding: 15px;
          border-radius: 12px;
          text-decoration: none;
          color: #22c55e;
          text-align: center;
          border: 1px solid #22c55e44;
          font-weight: 600;
        }
        .ph-nav-card:hover { background: rgba(34, 197, 94, 0.1); }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .ph-col-8, .ph-col-4 { grid-column: span 12; }
        }
      `}</style>

      <div className="ph-container">
        <header className="ph-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back, <strong>{username}</strong> 👋</p>
          </div>
          <div className="ph-streak-chip" onClick={increaseStreak}>
            🔥 {streak} Day Streak
          </div>
        </header>

        <div className="ph-grid">
          {/* Progress Card */}
          <section className="ph-card ph-col-8">
            <h2>COURSE PROGRESS</h2>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{completedLessons} / {totalLessons} Lessons</span>
              <span style={{ color: "#22c55e", fontWeight: "800" }}>{percentage}%</span>
            </div>
            <div className="ph-progress-bg">
              <div className="ph-progress-fill" style={{ width: `${percentage}%` }}></div>
            </div>
            <p style={{ fontSize: "0.85rem", color: "#64748b" }}>Complete your lessons to unlock Master Trader status.</p>
          </section>

          {/* Achievement Card */}
          <section className="ph-card ph-col-4">
            <h2>ACHIEVEMENTS</h2>
            <div className="ph-badge-flex">
              {badges.length > 0 ? (
                badges.map((badge, i) => <div key={i} className="ph-badge">{badge}</div>)
              ) : (
                <p style={{ color: "#64748b", margin: 0 }}>Start learning to earn badges!</p>
              )}
            </div>
          </section>

          {/* Lessons Card */}
          <section className="ph-card ph-col-8">
            <h2>MODULES</h2>
            <ul className="ph-list">
              <li className="ph-list-item">
                <span>Trading Psychology</span>
                {progress.psychology ? 
                  <span style={{ color: "#22c55e" }}>✅ Done</span> : 
                  <button className="ph-btn" onClick={() => markComplete("psychology")}>Complete</button>
                }
              </li>
              <li className="ph-list-item">
                <span>Risk Management</span>
                {progress.riskManagement ? 
                  <span style={{ color: "#22c55e" }}>✅ Done</span> : 
                  <button className="ph-btn" onClick={() => markComplete("riskManagement")}>Complete</button>
                }
              </li>
              <li className="ph-list-item">
                <span>Market Analysis</span>
                {progress.marketAnalysis ? 
                  <span style={{ color: "#22c55e" }}>✅ Done</span> : 
                  <button className="ph-btn" onClick={() => markComplete("marketAnalysis")}>Complete</button>
                }
              </li>
            </ul>
          </section>

          {/* Quiz Card */}
          <section className="ph-card ph-col-4">
            <h2>QUIZ SCORE</h2>
            <div style={{ textAlign: "center", padding: "10px 0" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: "800", color: quizScore > 70 ? "#22c55e" : "#facc15" }}>
                {quizScore}%
              </div>
              <button 
                className="ph-btn ph-btn-secondary" 
                style={{ marginTop: "15px", width: "100%" }}
                onClick={() => setQuizScore(Math.floor(Math.random() * 100))}
              >
                Retake Exam
              </button>
            </div>
          </section>

          {/* Notes Card */}
          <section className="ph-card ph-col-8">
            <h2>TRADING JOURNAL / NOTES</h2>
            <textarea
              className="ph-textarea"
              rows="6"
              placeholder="Jot down your trading insights..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
            <button className="ph-btn" style={{ marginTop: "15px" }} onClick={saveNotes}>Save Journal</button>
          </section>

          {/* Settings Card */}
          <section className="ph-card ph-col-4">
            <h2>PROFILE</h2>
            <div className="ph-form-group">
              <label>Username</label>
              <input
                className="ph-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <button className="ph-btn ph-btn-secondary" style={{ width: "100%" }} onClick={saveProfile}>Update Profile</button>
          </section>

          {/* Navigation Card */}
          <section className="ph-card ph-col-12">
            <h2>CONTINUE LEARNING</h2>
            <div className="ph-nav-grid">
              <Link href="/learn/psychology" className="ph-nav-card">Psychology Module →</Link>
              <Link href="/learn/risk-management" className="ph-nav-card">Risk Management →</Link>
              <Link href="/learn/market-analysis" className="ph-nav-card">Market Analysis →</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}