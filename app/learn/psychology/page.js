"use client";
import Link from "next/link";

export default function PsychologyPage() {
  return (
    <div className="ph-lesson-container">
      <style>{`
        .ph-lesson-container {
          background-color: #0a0e14;
          color: #e2e8f0;
          font-family: 'Poppins', sans-serif;
          line-height: 1.6;
          padding: 60px 5%;
        }

        .ph-lesson-header {
          max-width: 800px;
          margin: 0 auto 60px;
          text-align: center;
        }

        .ph-lesson-header h1 {
          font-size: clamp(2rem, 5vw, 3rem);
          color: #22c55e;
          margin-bottom: 20px;
          font-weight: 800;
        }

        .ph-intro-text {
          font-size: 1.1rem;
          color: #94a3b8;
          border-left: 4px solid #22c55e;
          padding-left: 20px;
          text-align: left;
          background: rgba(34, 197, 94, 0.05);
          padding: 20px;
          border-radius: 0 12px 12px 0;
        }

        .ph-section-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 25px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .ph-topic-card {
          background: #161b22;
          border: 1px solid #30363d;
          padding: 30px;
          border-radius: 16px;
          transition: transform 0.2s ease;
        }

        .ph-topic-card:hover {
          border-color: #22c55e;
        }

        .ph-topic-card h2 {
          color: #ffffff;
          font-size: 1.3rem;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ph-topic-card ul {
          list-style: none;
          padding: 0;
        }

        .ph-topic-card li {
          margin-bottom: 10px;
          padding-left: 25px;
          position: relative;
          color: #94a3b8;
          font-size: 0.95rem;
        }

        .ph-topic-card li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: #22c55e;
          font-weight: bold;
        }

        /* YOUTUBE SECTION */
        .ph-youtube-section {
          max-width: 800px;
          margin: 60px auto;
          background: #0d1117;
          padding: 40px;
          border-radius: 24px;
          border: 1px solid #ff000033;
        }

        .ph-youtube-section h2 {
          color: #ff0000;
          margin-bottom: 20px;
          text-align: center;
        }

        .ph-yt-list {
          list-style: none;
          padding: 0;
        }

        .ph-yt-list li {
          margin-bottom: 15px;
        }

        .ph-yt-list a {
          color: #ffffff;
          text-decoration: none;
          display: block;
          padding: 12px 20px;
          background: #1c2128;
          border-radius: 10px;
          transition: 0.3s;
          border: 1px solid transparent;
        }

        .ph-yt-list a:hover {
          background: #ff000011;
          border-color: #ff0000;
          color: #ff0000;
        }

        /* NEXT LESSON FOOTER */
        .ph-next-lesson {
          text-align: center;
          margin-top: 80px;
          padding: 40px;
          background: linear-gradient(to right, #1e3a8a33, #064e3b33);
          border-radius: 20px;
        }

        .ph-next-btn {
          display: inline-block;
          margin-top: 20px;
          background: #22c55e;
          color: #000;
          padding: 15px 35px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          transition: 0.3s;
        }

        .ph-next-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 25px rgba(34, 197, 94, 0.4);
        }

        @media (max-width: 768px) {
          .ph-section-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <header className="ph-lesson-header">
        <h1>Trading Psychology</h1>
        <p className="ph-intro-text">
          Trading psychology is the foundation of long-term success in the
          markets. It focuses on emotional control, discipline, decision-making,
          and mindset development.
        </p>
      </header>

      <div className="ph-section-grid">
        <section className="ph-topic-card">
          <h2>🧘 1. Emotional Control</h2>
          <ul>
            <li>Understanding fear and greed</li>
            <li>Managing anxiety during trades</li>
            <li>Handling excitement after wins</li>
            <li>Staying calm during volatility</li>
            <li>Avoiding revenge trading</li>
          </ul>
        </section>

        <section className="ph-topic-card">
          <h2>📏 2. Discipline</h2>
          <ul>
            <li>Following your trading plan</li>
            <li>Avoiding impulsive decisions</li>
            <li>Sticking to entry/exit rules</li>
            <li>Building daily routines</li>
            <li>Developing extreme patience</li>
          </ul>
        </section>

        <section className="ph-topic-card">
          <h2>📉 3. Handling Losses</h2>
          <ul>
            <li>Accepting losses as overhead costs</li>
            <li>Reducing emotional attachment</li>
            <li>Learning from every "L"</li>
            <li>Avoiding the urge to overtrade</li>
            <li>Maintaining confidence in drawdowns</li>
          </ul>
        </section>

        <section className="ph-topic-card">
          <h2>⚡ 4. Confidence Building</h2>
          <ul>
            <li>Trusting your edge</li>
            <li>Backtesting for data-driven belief</li>
            <li>Keeping a meticulous journal</li>
            <li>Tracking performance metrics</li>
            <li>Celebrating small, consistent wins</li>
          </ul>
        </section>

        <section className="ph-topic-card">
          <h2>🧠 5. Psychological Biases</h2>
          <ul>
            <li>Confirmation bias</li>
            <li>Fear of Missing Out (FOMO)</li>
            <li>Overconfidence bias</li>
            <li>Loss aversion</li>
            <li>Anchoring bias</li>
          </ul>
        </section>

        <section className="ph-topic-card">
          <h2>🏆 6. Winning Mindset</h2>
          <ul>
            <li>Thinking in probabilities</li>
            <li>Long-term focus vs short-term pain</li>
            <li>Growth mindset application</li>
            <li>Self-awareness and reflection</li>
            <li>Continuous market improvement</li>
          </ul>
        </section>
      </div>

      <section className="ph-youtube-section">
        <h2>🎥 Video Resources</h2>
        <p style={{ textAlign: 'center', marginBottom: '20px', color: '#94a3b8' }}>
          Curated masterclasses to help you master your mind:
        </p>
        <ul className="ph-yt-list">
          <li>
            <a href="https://www.youtube.com/results?search_query=trading+psychology+for+beginners" target="_blank">
              ▶ Trading Psychology for Beginners
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/results?search_query=how+to+control+emotions+in+trading" target="_blank">
              ▶ How to Control Emotions in Trading
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/results?search_query=trader+mindset+discipline" target="_blank">
              ▶ Building Discipline as a Trader
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/results?search_query=overcoming+fear+and+greed+in+trading" target="_blank">
              ▶ Overcoming Fear and Greed
            </a>
          </li>
        </ul>
      </section>

      <div className="ph-next-lesson">
        <h2>Ready for the next step?</h2>
        <p>Mastering your mind is 90% of the battle. Now, let's protect your capital.</p>
        <Link href="/learn/risk-management" className="ph-next-btn">
          Go to Risk Management →
        </Link>
      </div>
    </div>
  );
}