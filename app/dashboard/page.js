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

    const getNextLesson = () => {
        if (!progress.psychology) return "Trading Psychology";
        if (!progress.riskManagement) return "Risk Management";
        if (!progress.marketAnalysis) return "Market Analysis";
        return "All lessons completed!";
    };

    return (
        <>
        <h1>Student Dashboard</h1>
        <p>Welcome back, Trader</p>

        <section>
            <h2>Your Progress</h2>
            <p>You have completed {completedLessons} out of {totalLessons} lessons.</p>
            <p>Progress: {percentage}%</p>
        </section>

        <section>
            <h2>Lessons Overview</h2>
            <ul>
                <li>
                    Trading Psychology - {progress.psychology ? "Completed" : "In Progress"}
                </li>
                <li>
                    Risk Management - {progress.riskManagement ? "Completed" : "In Progress"}
                </li>
                <li>
                    Market Analysis - {progress.marketAnalysis ? "Completed" : "In Progress"}
                </li>
            </ul>
        </section>

        <section>

            <h2> Continue Learning </h2>
            <ul>
                <li>
                    <Link href = "/learn/psychology">Go to Trading Psychology </Link>
                </li>

                <li>
                    <Link href = "/learn/risk-management">Go to Risk Management </Link>
                </li>

                <li>
                    <Link href = "/learn/market-analysis">Go to Market Analysis </Link>
                </li>
            </ul>
        </section>

        <section>
            <h2> Keep Going </h2>
            <p>Consistency is key in trading. Complete all lessons and apply what
          you learn in demo trading before going live.</p>
        </section>
        </>
    );
}