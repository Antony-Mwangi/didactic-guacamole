"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [announcement, setAnnouncement] = useState("");
    const [stats, setStats] = useState({ 
        totalUsers: 0,
        lessonsCompleted: 0,
    });

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("users")) || [
            { id: 1, name: "Jane Doe", progress: 2 },
            { id: 2, name: "John Smith", progress: 1 },
        ];   

        setUsers(savedUser);

        const totalCompleted = savedUser.reduce((sum, user) => sum + user.progress, 0);
        setStats({
            totalUsers: savedUser.length,
            lessonsCompleted: totalCompleted,
        });
    }, []);

    const deleteUser = (id) => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
    };

    const postAnnouncement = () => {
        localStorage.setItem("announcement", announcement);
        alert("Announcement posted!");
        setAnnouncement("");
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <p>Manage your trading education platform</p>

            <section>
                <h2>Platform Statistics</h2>
                <p>Total Users: {stats.totalUsers}</p>
                <p>Lessons Completed: {stats.lessonsCompleted}</p>
            </section>

            <section>
                <h2> Registered Users  </h2>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name} - Lessons Completed: {user.progress}
                            <button onClick={() => deleteUser(user.id)}>Remove</button>
                            </li>
                    ))}
                </ul>
            </section> 

            <section>
                <h2>Post Announcement</h2>
                <textarea 
                    value={announcement}
                    onChange={(e) => setAnnouncement(e.target.value)}
                    placeholder="Enter announcement text"
                />
                <button onClick={postAnnouncement}>Post Announcement</button>
            </section>

            <section>
                <h2>Current Management</h2>

                <ul>
                    <li>Trading Psychology Module</li>
                    <li>Risk Management Module</li>
                    <li>Technical Analysis Module</li>
                </ul>
            </section>
        </div>
    );
}