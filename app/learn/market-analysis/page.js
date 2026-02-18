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
  FiCheckCircle
} from "react-icons/fi";

export default function MarketAnalysisPage() {
  return (
    <div className="ph-market-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&display=swap');

        .ph-market-container {
          background-color: #05070a;
          color: #fafafa;
          font-family: 'Space Grotesk', sans-serif;
          line-height: 1.6;
          padding: 80px 5%;
          background-image: 
            radial-gradient(circle at 10% 20%, rgba(34, 197, 94, 0.05) 0%, transparent 20%),
            radial-gradient(circle at 90% 80%, rgba(34, 197, 94, 0.05) 0%, transparent 20%);
        }

        .ph-market-header {
          text-align: left;
          max-width: 1100px;
          margin: 0 auto 80px;
          position: relative;
        }

        .ph-market-header h1 {
          font-size: clamp(2.5rem, 6vw, 4rem);
          line-height: 1.1;
          background: linear-gradient(to right, #ffffff, #4ade80);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 24px;
          font-weight: 700;
          letter-spacing: -2px;
        }

        .ph-market-header p {
          color: #94a3b8;
          font-size: 1.25rem;
          max-width: 600px;
          border-left: 4px solid #22c55e;
          padding-left: 20px;
        }

        .ph-content-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .ph-market-section {
          grid-column: span 12;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(12px);
          border-radius: 32px;
          padding: 50px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @media (min-width: 768px) {
            .ph-market-section.half { grid-column: span 6; }
        }

        .ph-market-section:hover {
          transform: translateY(-5px);
          border-color: rgba(34, 197, 94, 0.4);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .ph-market-section h2 {
          font-size: 1.5rem;
          color: #22c55e;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 30px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ph-market-section ul {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-top: 30px;
        }

        .ph-market-section li {
          background: rgba(255,255,255,0.03);
          padding: 15px 20px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .ph-chart-image {
          margin: 20px 0;
          border-radius: 24px;
          overflow: hidden;
          filter: grayscale(0.2) contrast(1.1);
          border: 1px solid #334155;
        }

        .ph-yt-resources {
          grid-column: span 12;
          padding: 40px;
          border-top: 2px dashed #334155;
          margin-top: 40px;
        }

        .ph-yt-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
        }

        .ph-yt-box {
          flex: 1;
          min-width: 200px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #ff0000;
          color: white;
          padding: 18px 25px;
          border-radius: 16px;
          text-decoration: none;
          font-weight: 600;
          transition: 0.3s;
        }

        .ph-yt-box:hover {
          transform: scale(1.02);
          filter: brightness(1.2);
        }

        .ph-completion-card {
          grid-column: span 12;
          text-align: center;
          padding: 80px;
          background: #22c55e;
          color: #05070a;
          border-radius: 40px;
          margin-top: 60px;
        }

        .ph-completion-card h2 {
            font-size: 3rem;
            margin-bottom: 10px;
        }

        .ph-home-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 30px;
          background: #05070a;
          color: #fff;
          padding: 20px 50px;
          border-radius: 20px;
          text-decoration: none;
          font-weight: 700;
          transition: 0.3s;
        }

        .ph-home-btn:hover {
          transform: translateX(10px);
        }
      `}</style>

      <header className="ph-market-header">
        <h1>Trade with<br />Precision.</h1>
        <p>
          Master the mechanics of price delivery. Our guide breaks down 
          complex market structures into actionable trading zones.
        </p>
      </header>

      <div className="ph-content-grid">

        {/* Trends */}
        <section className="ph-market-section">
          <h2><FiTrendingUp /> Market Narrative</h2>
          <p className="text-gray-400 mb-4">Identify the path of least resistance through structural flow.</p>
          <div className="ph-chart-image">
            <Image src="/trend-up-down.PNG" alt="Trend example" width={1100} height={500} style={{ width: "100%", height: "auto" }} />
          </div>
          <ul>
            <li><FiCheckCircle color="#22c55e"/> <b>Bullish:</b> Break of Structure High</li>
            <li><FiCheckCircle color="#22c55e"/> <b>Bearish:</b> Break of Structure Low</li>
            <li><FiCheckCircle color="#22c55e"/> <b>Ranging:</b> Equilibrium</li>
          </ul>
        </section>

        {/* Support & Resistance */}
        <section className="ph-market-section half">
          <h2><FiShield /> Supply & Demand</h2>
          <div className="ph-chart-image">
            <Image src="/support-resistance.PNG" alt="Support resistance" width={900} height={450} style={{ width: "100%", height: "auto" }} />
          </div>
          <p>Identify "Value Areas" where institutional orders are clustered.</p>
        </section>

        {/* Candlesticks */}
        <section className="ph-market-section half">
          <h2><FiActivity /> Price Action</h2>
          <div className="ph-chart-image">
            <Image src="/candlesticks.PNG" alt="Candlestick patterns" width={900} height={450} style={{ width: "100%", height: "auto" }} />
          </div>
          <p>Read the psychology behind every candle wick and body closure.</p>
        </section>

        {/* Chart Patterns */}
        <section className="ph-market-section">
          <h2><FiBarChart2 /> High-Probability Patterns</h2>
          <div className="ph-chart-image">
            <Image src="/chart-patterns.PNG" alt="Chart patterns" width={1100} height={450} style={{ width: "100%", height: "auto" }} />
          </div>
          <ul>
            <li><b>Reversals:</b> Double Top / Quasimodo</li>
            <li><b>Continuation:</b> Bull Flags / Pennants</li>
          </ul>
        </section>

        {/* Timeframes & Indicators */}
        <section className="ph-market-section half">
          <h2><FiClock /> Confluence</h2>
          <p>Align the Daily narrative with the 15m entry trigger for high RR trades.</p>
        </section>

        <section className="ph-market-section half">
          <h2><FiTool /> Edge</h2>
          <p>Augment price action with RSI divergence and Moving Average crossovers.</p>
        </section>

        {/* YouTube */}
        <section className="ph-yt-resources">
          <div className="flex items-center gap-4 mb-8">
            <FiYoutube size={32} color="#ff0000" />
            <h2 className="text-2xl font-bold">Video Archives</h2>
          </div>
          <div className="ph-yt-grid">
            <a className="ph-yt-box" href="https://www.youtube.com/results?search_query=how+to+read+forex+charts" target="_blank">
              Chart Reading <FiArrowRight />
            </a>
            <a className="ph-yt-box" href="https://www.youtube.com/results?search_query=forex+trend+analysis" target="_blank">
              Trend Theory <FiArrowRight />
            </a>
            <a className="ph-yt-box" href="https://www.youtube.com/results?search_query=support+and+resistance+forex" target="_blank">
              S&R Zones <FiArrowRight />
            </a>
          </div>
        </section>

        {/* Completion */}
        <section className="ph-completion-card">
          <h2>Level Complete.</h2>
          <p className="font-medium">You are now equipped with the foundations of technical analysis.</p>
          <Link href="/dashboard" className="ph-home-btn">
            ACCESS TERMINAL <FiArrowRight />
          </Link>
        </section>

      </div>
    </div>
  );
}