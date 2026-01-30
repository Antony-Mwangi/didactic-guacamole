"use client";
import Link from "next/link";

export default function LearnPage(){
    return(
        <div className="ph-learn-container">
            <style>{`
                .ph-learn-container {
                    background-color: #0a0e14;
                    color: #ffffff;
                    font-family: 'Poppins', sans-serif;
                    min-height: 100vh;
                    padding: 80px 20px;
                }

                .ph-learn-header {
                    text-align: center;
                    max-width: 800px;
                    margin: 0 auto 60px;
                }

                .ph-learn-header h1 {
                    font-size: clamp(2.5rem, 6vw, 3.5rem);
                    font-weight: 800;
                    margin-bottom: 20px;
                    background: linear-gradient(to right, #60a5fa, #22c55e);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .ph-learn-header p {
                    font-size: 1.1rem;
                    color: #94a3b8;
                }

                .ph-course-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 30px;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .ph-course-card {
                    background: #161b22;
                    border: 1px solid #30363d;
                    padding: 40px;
                    border-radius: 24px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    transition: all 0.3s ease;
                    position: relative;
                }

                .ph-course-card:hover {
                    border-color: #60a5fa;
                    transform: translateY(-5px);
                    background: #1c2128;
                }

                .ph-course-card h2 {
                    font-size: 1.8rem;
                    margin-bottom: 15px;
                    color: #ffffff;
                }

                .ph-course-card p {
                    color: #94a3b8;
                    margin-bottom: 30px;
                    line-height: 1.6;
                    font-size: 0.95rem;
                }

                .ph-learn-link {
                    display: inline-block;
                    text-decoration: none;
                    background: #22c55e;
                    color: #000;
                    padding: 12px 24px;
                    border-radius: 12px;
                    font-weight: 700;
                    text-align: center;
                    transition: all 0.3s ease;
                }

                .ph-learn-link:hover {
                    background: #4ade80;
                    box-shadow: 0 0 20px rgba(34, 197, 94, 0.4);
                }

                /* Mobile Tweaks */
                @media (max-width: 768px) {
                    .ph-learn-container { padding: 60px 15px; }
                    .ph-course-card { padding: 30px; }
                }
            `}</style>

            <header className="ph-learn-header">
                <h1>School of Trading</h1>
                <p>Welcome to the learning hub. Choose a category below to start improving your trading skills with institutional-grade knowledge.</p>
            </header>

            <div className="ph-course-grid">
                {/* PSYCHOLOGY */}
                <section className="ph-course-card">
                    <div>
                        <h2>🧠 Psychology</h2>
                        <p>Learn how to control emotions, build discipline, and develop the mindset required for consistent trading. Master the "Inner Game" of the markets.</p>
                    </div>
                    <Link href="/learn/psychology" className="ph-learn-link">Start Module</Link>
                </section>

                {/* RISK MANAGEMENT */}
                <section className="ph-course-card">
                    <div>
                        <h2>🛡️ Risk Management</h2>
                        <p>Understand how to protect your capital, manage position sizes, and apply risk-to-reward strategies effectively to ensure long-term survival.</p>
                    </div>
                    <Link href="/learn/risk-management" className="ph-learn-link">Start Module</Link>
                </section>

                {/* MARKET ANALYSIS */}
                <section className="ph-course-card">
                    <div>
                        <h2>📊 Market Analysis</h2>
                        <p>Learn how to analyze charts, identify trends, and understand market structure (SMC) for high-probability trade decisions.</p>
                    </div>
                    <Link href="/learn/market-analysis" className="ph-learn-link">Start Module</Link>
                </section>
            </div>
        </div>
    );
}