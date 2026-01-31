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
      { id: 3, name: "Alex Trader", progress: 3 },
    ];

    setUsers(savedUser);

    const totalCompleted = savedUser.reduce((sum, user) => sum + user.progress, 0);
    setStats({
      totalUsers: savedUser.length,
      lessonsCompleted: totalCompleted,
    });
  }, []);

  const deleteUser = (id) => {
    if (confirm("Are you sure you want to remove this trader?")) {
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  };

  const postAnnouncement = () => {
    if (!announcement) return;
    localStorage.setItem("announcement", announcement);
    alert("Announcement broadcasted to all terminals!");
    setAnnouncement("");
  };

  return (
    <div className="admin-wrapper">
      <style>{`
        .admin-wrapper {
          background-color: #05070a;
          color: #e2e8f0;
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
          padding: clamp(20px, 5vw, 40px);
        }

        .admin-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .admin-header {
          border-bottom: 1px solid #1e293b;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }

        .admin-header h1 {
          font-size: 2rem;
          color: #fff;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .admin-header h1::before {
          content: '';
          width: 12px;
          height: 12px;
          background: #ef4444;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 10px #ef4444;
        }

        /* Stats Cards */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .stat-card {
          background: #0f172a;
          border: 1px solid #1e293b;
          padding: 24px;
          border-radius: 16px;
        }

        .stat-card h3 {
          font-size: 0.85rem;
          text-transform: uppercase;
          color: #94a3b8;
          margin: 0 0 10px 0;
        }

        .stat-card p {
          font-size: 2rem;
          font-weight: 800;
          margin: 0;
          color: #22c55e;
        }

        /* Main Content Split */
        .main-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 30px;
        }

        .admin-section {
          background: #0f172a;
          border: 1px solid #1e293b;
          border-radius: 20px;
          padding: 25px;
          margin-bottom: 30px;
        }

        .admin-section h2 {
          font-size: 1.25rem;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid #1e293b;
        }

        /* User List Styling */
        .user-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .user-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 15px;
          background: #0a0e14;
          border: 1px solid #1e293b;
          border-radius: 12px;
          margin-bottom: 10px;
        }

        .user-info span {
          display: block;
          font-size: 0.75rem;
          color: #64748b;
        }

        .remove-btn {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.2);
          padding: 6px 12px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: 0.2s;
        }

        .remove-btn:hover {
          background: #ef4444;
          color: #fff;
        }

        /* Announcement Form */
        .announcement-form textarea {
          width: 100%;
          background: #05070a;
          border: 1px solid #334155;
          border-radius: 12px;
          color: #fff;
          padding: 15px;
          min-height: 120px;
          margin-bottom: 15px;
          font-family: inherit;
          resize: vertical;
        }

        .post-btn {
          background: #22c55e;
          color: #052e16;
          border: none;
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          font-weight: 700;
          cursor: pointer;
        }

        .post-btn:hover { background: #4ade80; }

        .module-list {
          list-style: none;
          padding: 0;
        }

        .module-item {
          padding: 10px 0;
          color: #cbd5e1;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .module-item::before {
          content: '✔';
          color: #22c55e;
        }

        @media (max-width: 900px) {
          .main-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="admin-container">
        <header className="admin-header">
          <h1>Admin Dashboard</h1>
          <p>Global control for Pips Hunter Education</p>
        </header>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Traders</h3>
            <p>{stats.totalUsers}</p>
          </div>
          <div className="stat-card">
            <h3>Knowledge Points</h3>
            <p>{stats.lessonsCompleted}</p>
          </div>
          <div className="stat-card">
            <h3>System Status</h3>
            <p style={{ color: '#3b82f6' }}>Active</p>
          </div>
        </div>

        <div className="main-grid">
          <div className="content-left">
            <section className="admin-section">
              <h2>Registered Traders</h2>
              <ul className="user-list">
                {users.map((user) => (
                  <li key={user.id} className="user-item">
                    <div className="user-info">
                      <strong>{user.name}</strong>
                      <span>Progress: {user.progress} / 3 Modules</span>
                    </div>
                    <button className="remove-btn" onClick={() => deleteUser(user.id)}>
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </section>

            <section className="admin-section">
              <h2>Curriculum Management</h2>
              <ul className="module-list">
                <li className="module-item">Trading Psychology Module</li>
                <li className="module-item">Risk Management Module</li>
                <li className="module-item">Technical Analysis Module</li>
              </ul>
            </section>
          </div>

          <div className="content-right">
            <section className="admin-section">
              <h2>Post Announcement</h2>
              <div className="announcement-form">
                <textarea
                  value={announcement}
                  onChange={(e) => setAnnouncement(e.target.value)}
                  placeholder="Broadcast message to all students..."
                />
                <button className="post-btn" onClick={postAnnouncement}>
                  Post Announcement
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}