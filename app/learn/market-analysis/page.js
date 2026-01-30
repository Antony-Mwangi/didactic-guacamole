import Link from "next/link";

export default function MarketAnalysisPage() {
  return (
    <div>
      <h1>Market Analysis: Complete Trading Guide</h1>
      <p>
        Market analysis is essential for understanding price movements,
        identifying trading opportunities, and making informed decisions.
        This module covers everything you need to master trends, chart
        patterns, candlesticks, multiple timeframes, and indicators.
      </p>

      
      <section>
        <h2>1. Understanding Trends</h2>
        <p>
          Trends show the direction of the market. Recognizing trends early
          helps you align trades with the market momentum.
        </p>

        <h3>Types of Trends:</h3>
        <ul>
          <li>
            <strong>Uptrend:</strong> Higher highs and higher lows. Look for
            buying opportunities.
          </li>
          <li>
            <strong>Downtrend:</strong> Lower highs and lower lows. Look for
            selling opportunities.
          </li>
          <li>
            <strong>Sideways:</strong> Consolidation with no clear direction.
            Wait for breakout.
          </li>
        </ul>

        <h3>Using Trendlines:</h3>
        <p>
          Draw lines connecting highs or lows to visualize the trend. Trendlines
          can act as support/resistance.
        </p>

        <h3>Recognizing Trend Strength:</h3>
        <ul>
          <li>Steeper angles = stronger trends</li>
          <li>Flat or weak angles = potential reversals</li>
          <li>Combine trendlines with moving averages for confirmation</li>
        </ul>

        <h3>Multiple Timeframe Confirmation:</h3>
        <p>
          Use higher timeframes to determine the overall trend, and lower
          timeframes to find precise entry/exit points. Avoid trades against
          dominant trends.
        </p>
      </section>

      
      <section>
        <h2>2. Support and Resistance (S/R)</h2>
        <p>
          Support and resistance are price levels where markets tend to react.
          Identifying these levels helps you find high-probability entries.
        </p>

        <h3>Support:</h3>
        <ul>
          <li>Level where buyers step in</li>
          <li>Price often bounces upwards</li>
          <li>Good buying zone</li>
        </ul>

        <h3>Resistance:</h3>
        <ul>
          <li>Level where sellers dominate</li>
          <li>Price often reverses downwards</li>
          <li>Good selling zone</li>
        </ul>

        <h3>Zones vs Levels:</h3>
        <p>
          Prices rarely stop exactly at one level. Treat S/R as a zone rather
          than a precise line.
        </p>
      </section>

      
      <section>
        <h2>3. Chart Patterns</h2>
        <p>
          Patterns help predict potential market direction and trade setups.
          Recognizing them early improves your accuracy.
        </p>

        <h3>Reversal Patterns:</h3>
        <ul>
          <li>Head and Shoulders / Inverse Head and Shoulders</li>
          <li>Double Top / Double Bottom</li>
        </ul>

        <h3>Continuation Patterns:</h3>
        <ul>
          <li>Triangles: ascending, descending, symmetrical</li>
          <li>Flags and Pennants</li>
        </ul>

        <h3>Breakouts & Fakeouts:</h3>
        <p>
          Wait for confirmation of breakouts before entering trades. False
          breakouts can trap traders.
        </p>
      </section>

      
      <section>
        <h2>4. Candlestick Analysis</h2>
        <p>
          Candlesticks show market sentiment and help you spot reversals and
          trends.
        </p>

        <h3>Single Candle Patterns:</h3>
        <ul>
          <li>Doji – indecision in the market</li>
          <li>Hammer – bullish reversal</li>
          <li>Shooting Star – bearish reversal</li>
        </ul>

        <h3>Multiple Candle Patterns:</h3>
        <ul>
          <li>Engulfing – strong reversal signal</li>
          <li>Morning Star / Evening Star – trend reversal patterns</li>
        </ul>

        <h3>Reading Sentiment:</h3>
        <p>
          Long green candles = bullish momentum, long red candles = bearish
          momentum.
        </p>
      </section>

      
      <section>
        <h2>5. Multi-Timeframe Analysis</h2>
        <p>
          Analyzing charts on multiple timeframes improves decision-making and
          reduces risk.
        </p>
        <ul>
          <li>Daily charts for overall trend</li>
          <li>4H or 1H for swing trades</li>
          <li>15m or 5m for precise entries</li>
          <li>Align multiple timeframes to confirm direction</li>
        </ul>
      </section>

      
      <section>
        <h2>6. Indicators (Optional)</h2>
        <p>
          Indicators are tools that help confirm trends and momentum. They
          should complement, not replace, price action.
        </p>

        <ul>
          <li>Moving Averages – trend confirmation</li>
          <li>RSI / MACD / Stochastic – momentum indicators</li>
          <li>Volume – confirm strength of moves</li>
        </ul>
      </section>

      
      <section>
        <h2>YouTube Resources for Market Analysis</h2>
        <ul>
          <li>
            <a
              href="https://www.youtube.com/results?search_query=how+to+read+forex+charts"
              target="_blank"
            >
              How to Read Forex Charts
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/results?search_query=forex+trend+analysis"
              target="_blank"
            >
              Trend Analysis for Forex Traders
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/results?search_query=support+and+resistance+forex"
              target="_blank"
            >
              Support and Resistance Basics
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/results?search_query=forex+candlestick+patterns"
              target="_blank"
            >
              Candlestick Patterns Explained
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/results?search_query=multi+timeframe+analysis+forex"
              target="_blank"
            >
              Multi-Timeframe Analysis
            </a>
          </li>
        </ul>
      </section>

      
      <section>
        <h2>Next Steps</h2>
        <p>
          You’ve completed the 3 pillars of trading: Psychology, Risk
          Management, and Market Analysis. Start applying these skills in
          your trading journey.
        </p>
        <Link href="/">Go Back Home →</Link>
      </section>
    </div>
  );
}
