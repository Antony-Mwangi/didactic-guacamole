"use client";
import Link from "next/link";

export default function RiskManagementPage() {
  return (
    <div className="ph-risk-container">
      <style>{`
        .ph-risk-container {
          background-color: #0a0e14;
          color: #e2e8f0;
          font-family: 'Poppins', sans-serif;
          line-height: 1.6;
          padding: 60px 5%;
        }

        .ph-risk-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 60px;
        }

        .ph-risk-header h1 {
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          color: #3b82f6; /* Trust Blue */
          margin-bottom: 20px;
          font-weight: 800;
        }

        .ph-highlight-box {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          padding: 25px;
          border-radius: 16px;
          font-size: 1.1rem;
          color: #93c5fd;
          text-align: center;
        }

        /* GRID SYSTEM */
        .ph-risk-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 25px;
          max-width: 1200px;
          margin: 40px auto;
        }

        .ph-risk-card {
          background: #111827;
          border: 1px solid #1f2937;
          padding: 30px;
          border-radius: 20px;
          transition: all 0.3s ease;
        }

        .ph-risk-card:hover {
          border-color: #3b82f6;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.1);
        }

        .ph-risk-card h2 {
          color: #ffffff;
          font-size: 1.4rem;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ph-risk-card ul {
          list-style: none;
          padding: 0;
        }

        .ph-risk-card li {
          margin-bottom: 12px;
          padding-left: 28px;
          position: relative;
          color: #94a3b8;
          font-size: 0.95rem;
        }

        .ph-risk-card li::before {
          content: "🛡️"; /* Shield icon for risk */
          position: absolute;
          left: 0;
          font-size: 0.9rem;
        }

        /* YOUTUBE RESOURCES */
        .ph-yt-container {
          max-width: 900px;
          margin: 60px auto;
          background: #0d1117;
          border-radius: 24px;
          padding: 40px;
          border: 1px solid #30363d;
        }

        .ph-yt-container h2 {
          text-align: center;
          color: #ff0000;
          margin-bottom: 25px;
        }

        .ph-yt-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
        }

        .ph-yt-link {
          text-decoration: none;
          color: #ffffff;
          background: #161b22;
          padding: 15px;
          border-radius: 12px;
          display: block;
          text-align: center;
          border: 1px solid #30363d;
          transition: 0.3s;
        }

        .ph-yt-link:hover {
          border-color: #ff0000;
          background: #ff000005;
          color: #ff0000;
        }

        /* NAVIGATION FOOTER */
        .ph-nav-footer {
          text-align: center;
          margin-top: 80px;
          padding: 50px;
          background: linear-gradient(to right, #111827, #1e3a8a);
          border-radius: 30px;
        }

        .ph-btn-next {
          display: inline-block;
          margin-top: 20px;
          background: #22c55e;
          color: #000;
          padding: 16px 40px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 800;
          transition: 0.3s;
          box-shadow: 0 4px 15px rgba(34, 197, 94, 0.4);
        }

        .ph-btn-next:hover {
          transform: scale(1.05);
          background: #4ade80;
        }

        @media (max-width: 768px) {
          .ph-risk-grid { grid-template-columns: 1fr; }
          .ph-yt-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <header className="ph-risk-header">
        <h1>Risk Management</h1>
        <div className="ph-highlight-box">
          Risk management is the backbone of consistent trading. Protecting your
          capital ensures longevity in the markets and helps you trade with
          confidence.
        </div>
      </header>

      <div className="ph-risk-grid">
        <section className="ph-risk-card">
          <h2>📊 1. Position Sizing</h2>
          <ul>
            <li>Determining trade size based on account balance</li>
            <li>Adjusting size according to risk tolerance</li>
            <li>Using a fixed percentage risk per trade</li>
            <li>Scaling positions for larger or smaller accounts</li>
          </ul>
        </section>

        <section className="ph-risk-card">
          <h2>🛑 2. Stop Loss & TP</h2>
          <ul>
            <li>Setting stop loss for each trade</li>
            <li>Identifying logical levels for take profit</li>
            <li>Protecting capital from unexpected market moves</li>
            <li>Using trailing stops to lock in profits</li>
          </ul>
        </section>

        <section className="ph-risk-card">
          <h2>⚖️ 3. Risk-to-Reward Ratio</h2>
          
          <ul>
            <li>Targeting higher rewards than potential risk</li>
            <li>Using 1:2 or 1:3 minimum ratios</li>
            <li>Evaluating trades for positive expectancy</li>
            <li>Adjusting strategy to improve risk/reward</li>
          </ul>
        </section>

        <section className="ph-risk-card">
          <h2>🌐 4. Diversification</h2>
          <ul>
            <li>Spreading trades across multiple instruments</li>
            <li>Avoiding concentration in one market or asset</li>
            <li>Reducing overall portfolio risk</li>
            <li>Using correlation analysis to manage exposure</li>
          </ul>
        </section>

        <section className="ph-risk-card">
          <h2>🔒 5. Capital Protection</h2>
          <ul>
            <li>Never risk more than you can afford to lose</li>
            <li>Maintaining a reserve for emergencies</li>
            <li>Avoiding over-leveraging</li>
            <li>Preserving profits for reinvestment</li>
          </ul>
        </section>

        <section className="ph-risk-card">
          <h2>📝 6. Journaling & Review</h2>
          <ul>
            <li>Track risk taken on each trade</li>
            <li>Analyze losing trades to reduce mistakes</li>
            <li>Adjust future strategies based on results</li>
            <li>Identify patterns of over/under-risking</li>
          </ul>
        </section>
      </div>

      <section className="ph-yt-container">
        <h2>🎥 Video Resources</h2>
        <div className="ph-yt-grid">
          <a href="https://www.youtube.com/results?search_query=forex+risk+management" target="_blank" className="ph-yt-link">Risk Basics</a>
          <a href="https://www.youtube.com/results?search_query=position+sizing+forex" target="_blank" className="ph-yt-link">Position Sizing</a>
          <a href="https://www.youtube.com/results?search_query=stop+loss+strategy+forex" target="_blank" className="ph-yt-link">Stop Loss Tips</a>
          <a href="https://www.youtube.com/results?search_query=risk+reward+ratio+trading" target="_blank" className="ph-yt-link">R:R Explained</a>
        </div>
      </section>

      <div className="ph-nav-footer">
        <h2>Module Complete</h2>
        <p>Now that you know how to protect your capital, let's learn how to analyze the charts.</p>
        <Link href="/learn/market-analysis" className="ph-btn-next">
          Go to Market Analysis →
        </Link>
      </div>
    </div>
  );
}