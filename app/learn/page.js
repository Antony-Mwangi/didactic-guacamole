import Link from "next/link";

export default function LearnPage(){
    return(
        <>
        <h1>School of Trading</h1>
        <p>Welcome to the learning hub. Choose a category below to start improving your trading skills.</p>

        <section>
            <h2>Trading Psychology</h2>
            <p>Learn how to control emotions, build discipline, and develop the mindset required for consistent trading.</p>
            <Link href="/learn/psychology">Go to Trading Psychology</Link>
        </section>

        <section>
            <h2>Risk Management</h2>
            <p>
          Understand how to protect your capital, manage position sizes, and
          apply risk-to-reward strategies effectively.
            </p>
            <Link href="/learn/risk-management">Go to Risk Manegement</Link>
        </section>

        <section>
            <h2>Market Analysis</h2>
            <p>
        Learn how to analyze charts, identify trends, and understand market
          structure for better trade decisions. 
            </p>
            <Link href="/learn/market-analysis">Go to Market Analysis</Link>
        </section>
        </>
    );
}