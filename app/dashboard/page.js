"use client";

import Link from "next/link";

export default function DashboardPage() {
  const progress = {
    psychology: true,
    riskManagement: false,
    marketAnalysis: false,
  };

  const completedLessons = Object.values(progress).filter(Boolean).length;
  const totalLessons = 3;
  const percentage = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="ph-dash-container">
      <style>{`
        .ph-dash-container {
          background-color: #0a0e14;
          min-height: 100vh;
          color: #e2e8f0;
          font-family: 'Inter', sans-serif;
          padding: clamp(20px, 5vw, 60px) 5%;
        }

        .ph-dash-header {
          max-width: 1100px;
          margin: 0 auto 40px;
        }

        .ph-dash-header h1 {
          font-size: 2.2rem;
          font-weight: 800;
          margin: 0;
          color: #ffffff;
        }

        .ph-dash-header p {
          color: #94a3b8;
          font-size: 1.1rem;
        }

        /* PROGRESS BOX */
        .ph-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          max-width: 1100px;
          margin: 0 auto 40px;
        }

        .ph-stat-card {
          background: linear-gradient(135deg, #111827 0%, #0f172a 100%);
          border: 1px solid #1f2937;
          border-radius: 20px;
          padding: 30px;
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .ph-progress-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: conic-gradient(#22c55e ${percentage}%, #1f2937 0);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .ph-progress-circle::after {
          content: "${percentage}%";
          position: absolute;
          width: 65px;
          height: 65px;
          background: #0f172a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          color: #22c55e;
          font-size: 1.1rem;
        }

        /* LESSON LIST */
        .ph-overview-card {
          background: #111827;
          border: 1px solid #1f2937;
          border-radius: 20px;
          padding: 30px;
          max-width: 1100px;
          margin: 0 auto 40px;
        }

        .ph-overview-card h2 {
          font-size: 1.4rem;
          margin-bottom: 25px;
          color: #ffffff;
        }

        .ph-lesson-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0;
          border-bottom: 1px solid #1f2937;
        }

        .ph-lesson-item:last-child { border: none; }

        .ph-status-badge {
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .ph-status-completed { background: rgba(34, 197, 94, 0.1); color: #22c55e; }
        .ph-status-pending { background: rgba(148, 163, 184, 0.1); color: #94a3b8; }

        /* CONTINUE LEARNING LINKS */
        .ph-link-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 15px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .ph-learn-btn {
          background: #1e293b;
          color: #ffffff;
          text-decoration: none;
          padding: 20px;
          border-radius: 16px;
          text-align: center;
          font-weight: 600;
          transition: 0.3s;
          border: 1px solid #334155;
        }

        .ph-learn-btn:hover {
          background: #22c55e;
          color: #000;
          border-color: #22c55e;
          transform: translateY(-3px);
        }

        .ph-motivation-footer {
          max-width: 1100px;
          margin: 60px auto 0;
          text-align: center;
          padding: 40px;
          background: rgba(34, 197, 94, 0.05);
          border-radius: 24px;
          border: 1px dashed rgba(34, 197, 94, 0.3);
        }

        @media (max-width: 640px) {
          .ph-stat-card { flex-direction: column; text-align: center; }
          .ph-lesson-item { flex-direction: column; gap: 10px; align-items: flex-start; }
          .ph-status-badge { align-self: flex-start; }
        }
      `}</style>

      <header className="ph-dash-header">
        <h1>Student Dashboard</h1>
        <p>Welcome back, Trader. Ready for the next trade?</p>
      </header>

      <div className="ph-stats-grid">
        <section className="ph-stat-card">
          <div className="ph-progress-circle"></div>
          <div>
            <h2>Your Progress</h2>
            <p style={{ color: "#94a3b8", margin: 0 }}>
              {completedLessons} of {totalLessons} lessons mastered
            </p>
          </div>
        </section>

        <section className="ph-stat-card" style={{ borderLeft: "4px solid #22c55e" }}>
          <div>
            <h2 style={{ fontSize: "1rem", color: "#22c55e", marginBottom: "5px" }}>NEXT MILESTONE</h2>
            <p style={{ fontSize: "1.4rem", fontWeight: "800", margin: 0 }}>
              {progress.psychology ? "Risk Management" : "Trading Psychology"}
            </p>
          </div>
        </section>
      </div>

      <section className="ph-overview-card">
        <h2>Curriculum Overview</h2>
        <div className="ph-lesson-item">
          <span>1. Trading Psychology</span>
          <span className={`ph-status-badge ${progress.psychology ? 'ph-status-completed' : 'ph-status-pending'}`}>
            {progress.psychology ? "Completed" : "In Progress"}
          </span>
        </div>
        <div className="ph-lesson-item">
          <span>2. Risk Management</span>
          <span className={`ph-status-badge ${progress.riskManagement ? 'ph-status-completed' : 'ph-status-pending'}`}>
            {progress.riskManagement ? "Completed" : "In Progress"}
          </span>
        </div>
        <div className="ph-lesson-item">
          <span>3. Market Analysis</span>
          <span className={`ph-status-badge ${progress.marketAnalysis ? 'ph-status-completed' : 'ph-status-pending'}`}>
            {progress.marketAnalysis ? "Completed" : "In Progress"}
          </span>
        </div>
      </section>

      <div className="ph-dash-header" style={{ marginBottom: "20px" }}>
        <h2>Continue Learning</h2>
      </div>
      
      <div className="ph-link-grid">
        <Link href="/learn/psychology" className="ph-learn-btn">Mindset Mastery</Link>
        <Link href="/learn/risk-management" className="ph-learn-btn">Capital Protection</Link>
        <Link href="/learn/market-analysis" className="ph-learn-btn">Chart Analysis</Link>
      </div>

      <section className="ph-motivation-footer">
        <h2 style={{ color: "#22c55e" }}>Keep Going</h2>
        <p style={{ maxWidth: "600px", margin: "10px auto", color: "#94a3b8" }}>
          Consistency is key in trading. Complete all lessons and apply what
          you learn in demo trading before going live.
        </p>
      </section>
    </div>
  );
}