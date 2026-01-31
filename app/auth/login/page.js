"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();


        // Simulate login logic
        if (!email || !password) {
            alert("Please fill all the fields.");
            return;
        }

        alert ("Login successful!");
        router.push("/learn");
    };

    return (
        <>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
            <div>
            <label>Email</label>
            <input
            type = "email"
            placeholder="Enter your email"
            value = {email}
            onChange = {(e) => setEmail (e.target.value)}
            />
            </div>

        <div>
            <label>Password</label>
            <input
            type = "password"
            placeholder="Enter your password"
            value = {password}
            onChange = {(e) => setPassword (e.target.value)}
            />
        </div>

        <button type = "submit">Login</button>
        </form>

        <p>
            Dont have an account? <Link href="/auth/signup">Sign Up</Link>
        </p>
        </>
    );
}