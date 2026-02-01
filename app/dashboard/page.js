"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const totalLessons = 3;

  const [user, setUser] = useState({ name: "Trader", streak: 0 });
  const [progress, setProgress] = useState({
    psychology: false,
    riskManagement: false,
    marketAnalysis: false,
  });
  const [journalEntries, setJournalEntries] = useState([]);
  const [currentNotes, setCurrentNotes] = useState("");
  const [currentImages, setCurrentImages] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [message, setMessage] = useState(null);

  // Lightbox state
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem("ph_token");
      if (!token) return;
      try {
        const res = await fetch("/api/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);

        setUser({ name: data.user.name || "Trader", streak: data.user.streak || 0 });

        const newProgress = { psychology: false, riskManagement: false, marketAnalysis: false };
        data.progress?.forEach(p => {
          if (p.lessonId === 0) newProgress.psychology = p.completed;
          if (p.lessonId === 1) newProgress.riskManagement = p.completed;
          if (p.lessonId === 2) newProgress.marketAnalysis = p.completed;
        });
        setProgress(newProgress);

        const entries = data.notes?.map(n => ({
          lessonId: n.lessonId,
          content: n.content,
          images: n.images || [],
        })) || [];
        setJournalEntries(entries);
      } catch (err) {
        console.error("Failed to fetch dashboard:", err);
        setMessage({ type: "error", text: "Failed to load dashboard data." });
      }
    };
    fetchDashboard();
  }, []);

  const showMessage = (text, type = "success") => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 3000);
  };

  const updateDashboard = async (updates) => {
    const token = localStorage.getItem("ph_token");
    if (!token) return;
    try {
      const res = await fetch("/api/dashboard", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(updates),
      });
      if (!res.ok) throw new Error("Failed to update");
    } catch (err) {
      console.error(err);
    }
  };

  const completedLessons = Object.values(progress).filter(Boolean).length;
  const percentage = Math.round((completedLessons / totalLessons) * 100);

  const markComplete = (lesson) => {
    const newProgress = { ...progress, [lesson]: true };
    setProgress(newProgress);
    updateDashboard({
      progress: [
        { lessonId: 0, completed: newProgress.psychology },
        { lessonId: 1, completed: newProgress.riskManagement },
        { lessonId: 2, completed: newProgress.marketAnalysis },
      ],
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => setCurrentImages((prev) => [...prev, event.target.result]);
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => {
    setCurrentImages(currentImages.filter((_, i) => i !== index));
  };

  const saveJournalEntry = () => {
    if (!currentNotes && currentImages.length === 0) return showMessage("Empty entry!", "error");

    const newEntry = {
      lessonId: editingIndex !== null ? journalEntries[editingIndex].lessonId : journalEntries.length,
      content: currentNotes,
      images: currentImages,
    };

    let updatedEntries;
    if (editingIndex !== null) {
      updatedEntries = [...journalEntries];
      updatedEntries[editingIndex] = newEntry;
      setEditingIndex(null);
    } else {
      updatedEntries = [newEntry, ...journalEntries];
    }

    setJournalEntries(updatedEntries);
    setCurrentNotes("");
    setCurrentImages([]);
    updateDashboard({ notes: updatedEntries });
  };

  const editJournalEntry = (index) => {
    const entry = journalEntries[index];
    setCurrentNotes(entry.content);
    setCurrentImages(entry.images || []);
    setEditingIndex(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const deleteJournalEntry = (index) => {
    const updatedEntries = journalEntries.filter((_, i) => i !== index);
    setJournalEntries(updatedEntries);
    updateDashboard({ notes: updatedEntries });
  };

  const saveProfile = () => updateDashboard({ name: user.name });
  const increaseStreak = () => {
    const newStreak = user.streak + 1;
    setUser({ ...user, streak: newStreak });
    updateDashboard({ streak: newStreak });
  };

  return (
    <div style={{ background: "#0a0b10", color: "#e2e8f0", minHeight: "100vh", padding: "40px 20px" }}>
      {message && (
        <div style={{
          position: "fixed", top: 20, right: 20, padding: "12px 24px",
          background: message.type === "error" ? "#ef4444" : "#22c55e", color: "white", borderRadius: 8, fontWeight: 600, zIndex: 100
        }}>
          {message.text}
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div onClick={() => setLightboxImage(null)} style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          background: "rgba(0,0,0,0.9)", display: "flex", justifyContent: "center",
          alignItems: "center", zIndex: 200, cursor: "zoom-out"
        }}>
          <img src={lightboxImage} alt="Full View" style={{ maxWidth: "90%", maxHeight: "90%", borderRadius: 12 }} />
        </div>
      )}

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
          <h1>Welcome, <span style={{ color: "#3b82f6" }}>{user.name}</span></h1>
          <button onClick={increaseStreak} style={{ padding: "8px 16px", borderRadius: 8, border: "1px solid #f59e0b", background: "#f59e0b22", color: "#f59e0b" }}>
            🔥 {user.streak} Day Streak
          </button>
        </header>

        {/* Progress and Profile */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: 24 }}>
          <div style={{ gridColumn: "span 8", background: "#161b22", border: "1px solid #30363d", borderRadius: 16, padding: 28 }}>
            <h3>Curriculum Progress</h3>
            <div style={{ background: "#30363d", borderRadius: 20, height: 12, margin: "15px 0" }}>
              <div style={{ width: `${percentage}%`, height: "100%", background: "#3b82f6", borderRadius: 20, transition: "1s" }}></div>
            </div>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              {["psychology", "riskManagement", "marketAnalysis"].map(key => (
                <div key={key} style={{ fontSize: "0.9rem" }}>
                  {progress[key] ? "✅" : "⭕"} {key.replace(/([A-Z])/g, " $1")}
                  {!progress[key] && <button onClick={() => markComplete(key)} style={{ marginLeft: 8, fontSize: "0.7rem", padding: "2px 6px" }}>Complete</button>}
                </div>
              ))}
            </div>
          </div>

          <div style={{ gridColumn: "span 4", display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 16, padding: 28 }}>
              <h3>Settings</h3>
              <input value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} style={{ width: "100%", padding: 10, borderRadius: 8, marginBottom: 10, background: "#0d1117", border: "1px solid #30363d", color: "white" }} />
              <button onClick={saveProfile} style={{ width: "100%", padding: 12, borderRadius: 8, background: "#3b82f6", color: "white", fontWeight: 700 }}>Update Name</button>
            </div>
          </div>

          {/* Journal Entry */}
          <div style={{ gridColumn: "span 12", background: "#161b22", border: "1px solid #30363d", borderRadius: 16, padding: 28 }}>
            <h3>{editingIndex !== null ? "📝 Edit Entry" : "✍️ Daily Trade Journal"}</h3>
            <textarea rows={5} value={currentNotes} onChange={(e) => setCurrentNotes(e.target.value)} placeholder="What did the charts tell you today?" style={{ width: "100%", padding: 16, borderRadius: 12, marginBottom: 12, background: "#0d1117", border: "1px solid #30363d", color: "white" }} />

            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <input type="file" multiple accept="image/*" onChange={handleImageUpload} />
              <button onClick={saveJournalEntry} style={{ padding: 12, borderRadius: 8, background: "#3b82f6", color: "white", fontWeight: 700 }}>
                {editingIndex !== null ? "Update Journal" : "Save Journal"}
              </button>
            </div>

            {currentImages.length > 0 && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(350px,1fr))", gap: 16, marginTop: 20 }}>
                {currentImages.map((img, i) => (
                  <div key={i} style={{ position: "relative" }}>
                    <img src={img} alt="Preview" style={{ width: "100%", height: 300, borderRadius: 12, objectFit: "cover", cursor: "pointer" }} onClick={() => setLightboxImage(img)} />
                    <button onClick={() => removeImage(i)} style={{ position: "absolute", top: 5, right: 5, background: "#ef4444", color: "white", borderRadius: "50%", border: "none", width: 24, height: 24 }}>×</button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Previous Entries */}
          <div style={{ gridColumn: "span 12" }}>
            <h2 style={{ margin: "20px 0" }}>Previous Entries</h2>
            {journalEntries.map((entry, idx) => (
              <div key={idx} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 16, padding: 20, marginBottom: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <p style={{ flex: 1, lineHeight: 1.6 }}>{entry.content}</p>
                  <div>
                    <button onClick={() => editJournalEntry(idx)} style={{ background: "none", color: "#3b82f6" }}>Edit</button>
                    <button onClick={() => deleteJournalEntry(idx)} style={{ background: "none", color: "#ef4444", marginLeft: 10 }}>Delete</button>
                  </div>
                </div>
                {entry.images && entry.images.length > 0 && (
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(350px,1fr))", gap: 16, marginTop: 16 }}>
                    {entry.images.map((img, i) => (
                      <img key={i} src={img} alt="Journal" style={{ width: "100%", height: 300, borderRadius: 12, objectFit: "cover", cursor: "pointer" }} onClick={() => setLightboxImage(img)} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
