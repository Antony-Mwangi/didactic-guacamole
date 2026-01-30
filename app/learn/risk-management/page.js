import Link from "next/link";

export default function RiskManagementPage() {
  return (
    <div>
      <h1>Risk Management</h1>
      <p>
        Risk management is the backbone of consistent trading. Protecting your
        capital ensures longevity in the markets and helps you trade with
        confidence.
      </p>

      <section>
        <h2>1. Position Sizing</h2>
        <ul>
          <li>Determining trade size based on account balance</li>
          <li>Adjusting size according to risk tolerance</li>
          <li>Using a fixed percentage risk per trade</li>
          <li>Scaling positions for larger or smaller accounts</li>
        </ul>
      </section>

      <section>
        <h2>2. Stop Loss & Take Profit</h2>
        <ul>
          <li>Setting stop loss for each trade</li>
          <li>Identifying logical levels for take profit</li>
          <li>Protecting capital from unexpected market moves</li>
          <li>Using trailing stops to lock in profits</li>
        </ul>
      </section>

      <section>
        <h2>3. Risk-to-Reward Ratio</h2>
        <ul>
          <li>Targeting higher rewards than potential risk</li>
          <li>Using 1:2 or 1:3 minimum ratios</li>
          <li>Evaluating trades for positive expectancy</li>
          <li>Adjusting strategy to improve risk/reward over time</li>
        </ul>
      </section>

      <section>
        <h2>4. Diversification</h2>
        <ul>
          <li>Spreading trades across multiple instruments</li>
          <li>Avoiding concentration in one market or asset</li>
          <li>Reducing overall portfolio risk</li>
          <li>Using correlation analysis to manage exposure</li>
        </ul>
      </section>

      <section>
        <h2>5. Capital Protection</h2>
        <ul>
          <li>Never risking more than you can afford to lose</li>
          <li>Maintaining a reserve for emergencies</li>
          <li>Avoiding over-leveraging</li>
          <li>Preserving profits for reinvestment</li>
        </ul>
      </section>

      <section>
        <h2>6. Journaling and Review</h2>
        <ul>
          <li>Track risk taken on each trade</li>
          <li>Analyze losing trades to reduce mistakes</li>
          <li>Adjust future strategies based on results</li>
          <li>Identify patterns of over-risking or under-risking</li>
        </ul>
      </section>

      <section>
        <h2>YouTube Resources for Risk Management</h2>
        <p>These videos will help you strengthen your risk management skills:</p>
        <ul>
          <li>
            <a
              href="https://www.youtube.com/results?search_query=forex+risk+management"
              target="_blank"
            >
              Forex Risk Management Basics
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/results?search_query=position+sizing+forex"
              target="_blank"
            >
              Position Sizing in Trading
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/results?search_query=stop+loss+strategy+forex"
              target="_blank"
            >
              Stop Loss Strategies
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/results?search_query=risk+reward+ratio+trading"
              target="_blank"
            >
              Risk-to-Reward Ratio Explained
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/results?search_query=trading+capital+protection"
              target="_blank"
            >
              Capital Protection in Trading
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Next Lesson</h2>
        <p>Continue your learning journey:</p>
        <Link href="/learn/market-analysis">Go to Market Analysis →</Link>
      </section>
    </div>
  );
}
