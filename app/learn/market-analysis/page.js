// "use client";
// import Link from "next/link";

// export default function MarketAnalysisPage() {
//   return (
//     <div className="ph-market-container">
//       <style>{`
//         .ph-market-container {
//           background-color: #0a0e14;
//           color: #e2e8f0;
//           font-family: 'Poppins', sans-serif;
//           line-height: 1.7;
//           padding: 60px 5%;
//         }

//         .ph-market-header {
//           text-align: center;
//           max-width: 900px;
//           margin: 0 auto 60px;
//           padding: 40px;
//           background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
//           border-radius: 24px;
//           border: 1px solid #334155;
//         }

//         .ph-market-header h1 {
//           font-size: clamp(2rem, 5vw, 3rem);
//           color: #22c55e;
//           margin-bottom: 20px;
//           font-weight: 800;
//         }

//         .ph-market-header p {
//           color: #94a3b8;
//           font-size: 1.1rem;
//         }

//         /* CONTENT SECTIONS */
//         .ph-content-wrapper {
//           max-width: 1000px;
//           margin: 0 auto;
//         }

//         .ph-market-section {
//           background: #111827;
//           border-radius: 20px;
//           padding: 40px;
//           margin-bottom: 40px;
//           border: 1px solid #1f2937;
//           transition: border-color 0.3s ease;
//         }

//         .ph-market-section:hover {
//           border-color: #22c55e;
//         }

//         .ph-market-section h2 {
//           font-size: 1.8rem;
//           color: #ffffff;
//           margin-bottom: 25px;
//           display: flex;
//           align-items: center;
//           gap: 15px;
//           border-bottom: 2px solid #22c55e;
//           padding-bottom: 10px;
//           width: fit-content;
//         }

//         .ph-market-section h3 {
//           color: #4ade80;
//           font-size: 1.3rem;
//           margin: 25px 0 10px;
//         }

//         .ph-market-section p {
//           color: #94a3b8;
//           margin-bottom: 15px;
//         }

//         .ph-market-section ul {
//           list-style: none;
//           padding: 0;
//         }

//         .ph-market-section li {
//           margin-bottom: 12px;
//           padding-left: 30px;
//           position: relative;
//         }

//         .ph-market-section li::before {
//           content: "●";
//           color: #22c55e;
//           position: absolute;
//           left: 0;
//           font-size: 0.8rem;
//           top: 5px;
//         }

//         .ph-market-section strong {
//           color: #ffffff;
//         }

//         /* YOUTUBE AREA */
//         .ph-yt-resources {
//           background: #0d1117;
//           padding: 40px;
//           border-radius: 24px;
//           border: 1px solid #ff000044;
//           margin-top: 60px;
//         }

//         .ph-yt-resources h2 {
//           color: #ff0000;
//           text-align: center;
//           margin-bottom: 30px;
//         }

//         .ph-yt-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//           gap: 15px;
//         }

//         .ph-yt-box {
//           text-decoration: none;
//           background: #1c2128;
//           padding: 20px;
//           border-radius: 12px;
//           color: #ffffff;
//           display: flex;
//           align-items: center;
//           gap: 15px;
//           border: 1px solid #30363d;
//           transition: 0.3s;
//         }

//         .ph-yt-box:hover {
//           background: #ff000011;
//           border-color: #ff0000;
//           transform: translateX(5px);
//         }

//         /* FINAL NAVIGATION */
//         .ph-completion-card {
//           text-align: center;
//           padding: 60px 20px;
//           background: linear-gradient(135deg, #064e3b 0%, #0a0e14 100%);
//           border-radius: 30px;
//           margin-top: 60px;
//           border: 1px solid #22c55e33;
//         }

//         .ph-home-btn {
//           display: inline-block;
//           margin-top: 30px;
//           background: #ffffff;
//           color: #000;
//           padding: 16px 45px;
//           border-radius: 50px;
//           text-decoration: none;
//           font-weight: 800;
//           transition: 0.3s;
//         }

//         .ph-home-btn:hover {
//           background: #22c55e;
//           color: #ffffff;
//           box-shadow: 0 10px 30px rgba(34, 197, 94, 0.4);
//         }

//         @media (max-width: 768px) {
//           .ph-market-section { padding: 25px; }
//         }
//       `}</style>

//       <header className="ph-market-header">
//         <h1>Market Analysis: Complete Trading Guide</h1>
//         <p>
//           Market analysis is essential for understanding price movements,
//           identifying trading opportunities, and making informed decisions.
//           This module covers everything you need to master trends, chart
//           patterns, candlesticks, multiple timeframes, and indicators.
//         </p>
//       </header>

//       <div className="ph-content-wrapper">
//         <section className="ph-market-section">
//           <h2>📈 1. Understanding Trends</h2>
//           <p>
//             Trends show the direction of the market. Recognizing trends early
//             helps you align trades with the market momentum.
//           </p>
          

// [Image of an uptrend vs downtrend chart]

//           <h3>Types of Trends:</h3>
//           <ul>
//             <li>
//               <strong>Uptrend:</strong> Higher highs and higher lows. Look for
//               buying opportunities.
//             </li>
//             <li>
//               <strong>Downtrend:</strong> Lower highs and lower lows. Look for
//               selling opportunities.
//             </li>
//             <li>
//               <strong>Sideways:</strong> Consolidation with no clear direction.
//               Wait for breakout.
//             </li>
//           </ul>

//           <h3>Using Trendlines:</h3>
//           <p>
//             Draw lines connecting highs or lows to visualize the trend. Trendlines
//             can act as support/resistance.
//           </p>

//           <h3>Recognizing Trend Strength:</h3>
//           <ul>
//             <li>Steeper angles = stronger trends</li>
//             <li>Flat or weak angles = potential reversals</li>
//             <li>Combine trendlines with moving averages for confirmation</li>
//           </ul>

//           <h3>Multiple Timeframe Confirmation:</h3>
//           <p>
//             Use higher timeframes to determine the overall trend, and lower
//             timeframes to find precise entry/exit points. Avoid trades against
//             dominant trends.
//           </p>
//         </section>

//         <section className="ph-market-section">
//           <h2>🛡️ 2. Support and Resistance (S/R)</h2>
//           <p>
//             Support and resistance are price levels where markets tend to react.
//             Identifying these levels helps you find high-probability entries.
//           </p>
          
//           <h3>Support:</h3>
//           <ul>
//             <li>Level where buyers step in</li>
//             <li>Price often bounces upwards</li>
//             <li>Good buying zone</li>
//           </ul>

//           <h3>Resistance:</h3>
//           <ul>
//             <li>Level where sellers dominate</li>
//             <li>Price often reverses downwards</li>
//             <li>Good selling zone</li>
//           </ul>

//           <h3>Zones vs Levels:</h3>
//           <p>
//             Prices rarely stop exactly at one level. Treat S/R as a zone rather
//             than a precise line.
//           </p>
//         </section>

//         <section className="ph-market-section">
//           <h2>📐 3. Chart Patterns</h2>
//           <p>
//             Patterns help predict potential market direction and trade setups.
//             Recognizing them early improves your accuracy.
//           </p>
          
//           <h3>Reversal Patterns:</h3>
//           <ul>
//             <li>Head and Shoulders / Inverse Head and Shoulders</li>
//             <li>Double Top / Double Bottom</li>
//           </ul>

//           <h3>Continuation Patterns:</h3>
//           <ul>
//             <li>Triangles: ascending, descending, symmetrical</li>
//             <li>Flags and Pennants</li>
//           </ul>

//           <h3>Breakouts & Fakeouts:</h3>
//           <p>
//             Wait for confirmation of breakouts before entering trades. False
//             breakouts can trap traders.
//           </p>
//         </section>

//         <section className="ph-market-section">
//           <h2>🕯️ 4. Candlestick Analysis</h2>
//           <p>
//             Candlesticks show market sentiment and help you spot reversals and
//             trends.
//           </p>
          
//           <h3>Single Candle Patterns:</h3>
//           <ul>
//             <li>Doji – indecision in the market</li>
//             <li>Hammer – bullish reversal</li>
//             <li>Shooting Star – bearish reversal</li>
//           </ul>

//           <h3>Multiple Candle Patterns:</h3>
//           <ul>
//             <li>Engulfing – strong reversal signal</li>
//             <li>Morning Star / Evening Star – trend reversal patterns</li>
//           </ul>

//           <h3>Reading Sentiment:</h3>
//           <p>
//             Long green candles = bullish momentum, long red candles = bearish
//             momentum.
//           </p>
//         </section>

//         <section className="ph-market-section">
//           <h2>🕒 5. Multi-Timeframe Analysis</h2>
//           <p>
//             Analyzing charts on multiple timeframes improves decision-making and
//             reduces risk.
//           </p>
//           <ul>
//             <li><strong>Daily charts</strong> for overall trend determination</li>
//             <li><strong>4H or 1H</strong> for identifying swing trade setups</li>
//             <li><strong>15m or 5m</strong> for precise entry execution</li>
//             <li>Align multiple timeframes to confirm market direction</li>
//           </ul>
//         </section>

//         <section className="ph-market-section">
//           <h2>🛠️ 6. Indicators (Optional)</h2>
//           <p>
//             Indicators are tools that help confirm trends and momentum. They
//             should complement, not replace, price action.
//           </p>
//           <ul>
//             <li><strong>Moving Averages</strong> – smooth out price for trend confirmation</li>
//             <li><strong>RSI / MACD / Stochastic</strong> – identify overbought or oversold momentum</li>
//             <li><strong>Volume</strong> – confirm the strength of market moves</li>
//           </ul>
//         </section>

//         <section className="ph-yt-resources">
//           <h2>🎥 YouTube Resources</h2>
//           <div className="ph-yt-grid">
//             <a href="https://www.youtube.com/results?search_query=how+to+read+forex+charts" target="_blank" className="ph-yt-box">▶ How to Read Charts</a>
//             <a href="https://www.youtube.com/results?search_query=forex+trend+analysis" target="_blank" className="ph-yt-box">▶ Trend Analysis Guide</a>
//             <a href="https://www.youtube.com/results?search_query=support+and+resistance+forex" target="_blank" className="ph-yt-box">▶ S/R Basics</a>
//             <a href="https://www.youtube.com/results?search_query=forex+candlestick+patterns" target="_blank" className="ph-yt-box">▶ Candlestick Patterns</a>
//             <a href="https://www.youtube.com/results?search_query=multi+timeframe+analysis+forex" target="_blank" className="ph-yt-box">▶ Multi-Timeframe Study</a>
//           </div>
//         </section>

//         <section className="ph-completion-card">
//           <h2>Congratulations!</h2>
//           <p>
//             You’ve completed the 3 pillars of trading: Psychology, Risk
//             Management, and Market Analysis. Start applying these skills in
//             your trading journey.
//           </p>
//           <Link href="/dashboard" className="ph-home-btn">Go Back Dashboard →</Link>
//         </section>
//       </div>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FiTrendingUp,
  FiShield,
  FiBarChart2,
  FiActivity,
  FiClock,
  FiTool,
  FiYoutube,
  FiArrowRight,
  FiCheckCircle,
  FiTarget,
  FiZap
} from "react-icons/fi";

export default function MarketAnalysisPage() {
  return (
    <div className="ph-market-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&family=JetBrains+Mono:wght@400;700&display=swap');

        :root {
          --bg-main: #030406;
          --bg-card: #0a0c10;
          --accent: #22c55e;
          --border: #1e293b;
          --text-muted: #94a3b8;
        }

        .ph-market-container {
          background-color: var(--bg-main);
          color: #fafafa;
          font-family: 'Space Grotesk', sans-serif;
          line-height: 1.6;
          padding: clamp(40px, 8vw, 80px) 5%;
          min-height: 100vh;
        }

        .mono { font-family: 'JetBrains Mono', monospace; }

        .ph-market-header {
          text-align: left;
          max-width: 1100px;
          margin: 0 auto clamp(40px, 10vw, 80px);
        }

        .ph-market-header h1 {
          font-size: clamp(2rem, 8vw, 4.5rem);
          line-height: 1.1;
          color: #fff;
          margin-bottom: 24px;
          font-weight: 700;
          letter-spacing: -0.05em;
        }

        .accent-text { color: var(--accent); }

        .ph-market-header p {
          color: var(--text-muted);
          font-size: clamp(1rem, 2.5vw, 1.35rem);
          max-width: 700px;
          line-height: 1.5;
        }

        .ph-content-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: clamp(20px, 4vw, 40px);
          max-width: 1200px;
          margin: 0 auto;
        }

        .ph-market-section {
          grid-column: span 12;
          background: var(--bg-card);
          border-radius: 8px;
          padding: clamp(25px, 5vw, 60px);
          border-left: 3px solid var(--border);
          transition: all 0.3s ease;
          width: 100%;
        }

        /* Desktop specific: side-by-side cards */
        @media (min-width: 1024px) {
            .ph-market-section.half { grid-column: span 6; }
        }

        .ph-market-section:hover {
          border-left-color: var(--accent);
          background: #0d1117;
          transform: translateY(-2px);
        }

        .ph-market-section h2 {
          font-size: clamp(0.9rem, 2vw, 1.2rem);
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: clamp(20px, 4vw, 40px);
          display: flex;
          align-items: center;
          gap: 15px;
          font-weight: 700;
        }

        .concept-title {
            font-size: clamp(1.4rem, 4vw, 1.8rem);
            font-weight: 700;
            margin-bottom: 15px;
            display: block;
            color: #fff;
            line-height: 1.2;
        }

        .explanation-text {
            color: var(--text-muted);
            font-size: clamp(0.95rem, 2vw, 1.1rem);
            margin-bottom: 25px;
        }

        .ph-chart-image {
          margin: 25px 0;
          background: #000;
          padding: 8px;
          border: 1px solid var(--border);
          border-radius: 4px;
        }

        .data-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 15px;
          margin-top: 30px;
        }

        /* Responsive grid for data items inside the strategy section */
        @media (min-width: 768px) {
            .strategy-grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
        }

        .data-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 20px;
          background: var(--bg-main);
          border: 1px solid var(--border);
          border-radius: 4px;
        }

        .data-label { color: var(--accent); font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; }
        .data-value { color: #e2e8f0; font-size: 0.95rem; line-height: 1.5; }

        .ph-yt-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 15px;
        }

        .ph-yt-box {
          background: transparent;
          border: 1px solid var(--border);
          color: white;
          padding: 20px 25px;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: 0.2s;
          font-size: 0.9rem;
        }

        .ph-yt-box:hover {
          background: #ff0000;
          border-color: #ff0000;
          color: #fff;
        }

        .ph-home-btn {
          background: var(--accent);
          color: #000;
          padding: clamp(15px, 3vw, 25px) clamp(30px, 6vw, 60px);
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 15px;
          letter-spacing: 1px;
          width: 100%;
          justify-content: center;
          font-size: clamp(0.9rem, 2vw, 1.1rem);
        }

        @media (min-width: 640px) {
            .ph-home-btn { width: auto; }
        }

        .yt-header {
           display: flex;
           flex-direction: column;
           gap: 10px;
           margin-bottom: 30px;
        }

        @media (min-width: 640px) {
           .yt-header { flex-direction: row; align-items: center; }
        }
      `}</style>

      <header className="ph-market-header">
        <span className="mono accent-text">// TECHNICAL_ANALYSIS_V2</span>
        <h1>Decoding <span className="accent-text">Orderflow</span> & Structure.</h1>
        <p>
          Markets are not random. They are an auction process driven by liquidity. 
          Mastering these mechanics allows you to trade with the "Smart Money."
        </p>
      </header>

      <div className="ph-content-grid">

        {/* Trends */}
        <section className="ph-market-section">
          <h2><FiTrendingUp /> 01. Market Structure</h2>
          <span className="concept-title">The Flow of Liquidity</span>
          <p className="explanation-text">
            Market structure is the most fundamental tool in a trader's arsenal. It tells you which direction 
            the "Big Boys" are pushing price.
          </p>
          
          <div className="ph-chart-image">
            <Image 
                src="/trend-up-down.PNG" 
                alt="Market Structure: Uptrend vs Downtrend" 
                width={1100} 
                height={500} 
                layout="responsive"
                priority
            />
          </div>
          

          <div className="data-list">
            <div className="data-item">
              <span className="data-label mono">Uptrend Mechanics</span>
              <span className="data-value">Price creates Higher Highs (HH). Each dip is bought at a Higher Low (HL), showing demand outweighs supply.</span>
            </div>
            <div className="data-item">
              <span className="data-label mono">Downtrend Mechanics</span>
              <span className="data-value">Price creates Lower Lows (LL). Each rally is sold into at a Lower High (LH), indicating aggressive selling pressure.</span>
            </div>
          </div>
        </section>

        {/* Support & Resistance */}
        <section className="ph-market-section half">
          <h2><FiShield /> 02. Supply & Demand</h2>
          <span className="concept-title">Institutional Footprints</span>
          <p className="explanation-text">
            Forget "lines"—markets react to **Zones**. Supply zones are areas where large institutions 
            placed sell orders, leaving behind "Unfilled Orders."
          </p>
          <div className="ph-chart-image">
            <Image src="/support-resistance.PNG" alt="Supply and Demand Zones" width={900} height={450} layout="responsive" />
          </div>
          <div className="mono accent-text text-xs sm:text-sm tracking-tighter sm:tracking-normal">
            // LOOK FOR AGGRESSIVE DEPARTURES FROM ZONES
          </div>
        </section>

        {/* Candlesticks */}
        <section className="ph-market-section half">
          <h2><FiActivity /> 03. Candlestick Logic</h2>
          <span className="concept-title">Sentiment Verification</span>
          <p className="explanation-text">
            A candlestick isn't just a price point; it's a battle map. Long wicks signify 
            rejections and liquidity sweeps.
          </p>
          <div className="ph-chart-image">
            <Image src="/candlesticks.PNG" alt="Candlestick Psychology" width={900} height={450} layout="responsive" />
          </div>
          <div className="mono accent-text text-xs sm:text-sm tracking-tighter sm:tracking-normal">
            // BODY CLOSURE IS THE ONLY REAL CONFIRMATION
          </div>
        </section>

        {/* Strategy Section */}
        <section className="ph-market-section">
            <h2><FiZap /> 04. Execution Edge</h2>
            <span className="concept-title">Multi-Timeframe Confluence</span>
            <p className="explanation-text">
                Successful trading requires a "Top-Down" approach.
            </p>
            
            <div className="data-list strategy-grid">
                <div className="data-item">
                    <span className="data-label mono">Higher Timeframe (HTF)</span>
                    <span className="data-value">Use Daily/4H to find the "Narrative." Is the trend bullish or bearish?</span>
                </div>
                <div className="data-item">
                    <span className="data-label mono">Lower Timeframe (LTF)</span>
                    <span className="data-value">Use 15m/5m to find the "Entry." Look for a shift in structure inside an HTF zone.</span>
                </div>
                <div className="data-item">
                    <span className="data-label mono">Risk Management</span>
                    <span className="data-value">Never risk more than 1-2% of your capital on a single setup.</span>
                </div>
            </div>
        </section>

        {/* YouTube */}
        <section className="ph-market-section">
          <div className="yt-header">
            <FiYoutube size={24} color="#ff0000" />
            <h2 style={{margin:0}}>Training_Modules</h2>
          </div>
          <div className="ph-yt-grid">
            <a className="ph-yt-box mono" href="#" target="_blank">01_CHART_BASICS <FiArrowRight /></a>
            <a className="ph-yt-box mono" href="#" target="_blank">02_ORDERBLOCKS <FiArrowRight /></a>
            <a className="ph-yt-box mono" href="#" target="_blank">03_RISK_MODELS <FiArrowRight /></a>
          </div>
        </section>

        {/* Completion */}
        <section className="ph-market-section" style={{ textAlign: 'center', border: '1px solid var(--accent)' }}>
          <FiTarget size={48} className="accent-text mb-6" style={{ margin: '0 auto' }} />
          <span className="concept-title">System Loaded.</span>
          <p className="explanation-text">Theoretical foundation complete. Proceed to live execution.</p>
          <Link href="/dashboard" className="ph-home-btn mono">
            OPEN_TERMINAL_PRO
          </Link>
        </section>

      </div>
    </div>
  );
}