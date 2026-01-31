"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
const router = useRouter();
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();

if (!name || !email || !password) {

    alert ("All fields are required.");
    return;
}
    alert ("Account created successfully!");
    router.push("auth/login");
};

    return (
        <>
        <h1>Create Account</h1>
        <form onSubmit = {handleSubmit}>
            <div>
                <label>Name</label>
                <input
                type= "text"
                placeholder = "Enter your name"
                value = {name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>

          <div>
            <label>Email</label>
            <input
            type = "email"
            placeholder="Enter your email"
            value = {email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label>Password</label>
            <input
            type = "password"
            placeholder = "Create a password"
            value = {password}
            onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button type = "submit">Sign Up</button>
            </form>
            <p>
                Already have an account? <Link href = "/auth/login">Login</Link>    
            </p>

        </>
    );
}
