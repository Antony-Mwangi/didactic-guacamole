// "use client";

// import { useEffect, useState } from "react";

// export default function DashboardPage() {
//   const totalLessons = 3;

//   const [user, setUser] = useState({ name: "Trader", streak: 0 });
//   const [progress, setProgress] = useState({
//     psychology: false,
//     riskManagement: false,
//     marketAnalysis: false,
//   });
//   const [journalEntries, setJournalEntries] = useState([]);
//   const [currentNotes, setCurrentNotes] = useState("");
//   const [currentImages, setCurrentImages] = useState([]);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [message, setMessage] = useState(null);
//   const [lightboxImage, setLightboxImage] = useState(null);

//   // Fetch Logic (Sync with your existing API)
//   useEffect(() => {
//     const fetchDashboard = async () => {
//       const token = localStorage.getItem("ph_token");
//       if (!token) return;
//       try {
//         const res = await fetch("/api/dashboard", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const data = await res.json();
//         if (!res.ok) throw new Error(data.message);

//         setUser({ name: data.user.name || "Trader", streak: data.user.streak || 0 });

//         const newProgress = { psychology: false, riskManagement: false, marketAnalysis: false };
//         data.progress?.forEach(p => {
//           if (p.lessonId === 0) newProgress.psychology = p.completed;
//           if (p.lessonId === 1) newProgress.riskManagement = p.completed;
//           if (p.lessonId === 2) newProgress.marketAnalysis = p.completed;
//         });
//         setProgress(newProgress);

//         const entries = data.notes?.map(n => ({
//           lessonId: n.lessonId,
//           content: n.content,
//           images: n.images || [],
//         })) || [];
//         setJournalEntries(entries);
//       } catch (err) {
//         console.error("Failed to fetch dashboard:", err);
//         showMessage("Failed to load dashboard data.", "error");
//       }
//     };
//     fetchDashboard();
//   }, []);

//   const showMessage = (text, type = "success") => {
//     setMessage({ text, type });
//     setTimeout(() => setMessage(null), 3000);
//   };

//   const updateDashboard = async (updates) => {
//     const token = localStorage.getItem("ph_token");
//     if (!token) return;
//     try {
//       const res = await fetch("/api/dashboard", {
//         method: "POST",
//         headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
//         body: JSON.stringify(updates),
//       });
//       if (!res.ok) throw new Error("Failed to update");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const markComplete = (lesson) => {
//     const newProgress = { ...progress, [lesson]: true };
//     setProgress(newProgress);
//     updateDashboard({
//       progress: [
//         { lessonId: 0, completed: newProgress.psychology },
//         { lessonId: 1, completed: newProgress.riskManagement },
//         { lessonId: 2, completed: newProgress.marketAnalysis },
//       ],
//     });
//   };

//   const increaseStreak = () => {
//     const newStreak = user.streak + 1;
//     setUser({ ...user, streak: newStreak });
//     updateDashboard({ streak: newStreak });
//   };

//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     files.forEach((file) => {
//       const reader = new FileReader();
//       reader.onload = (event) => setCurrentImages((prev) => [...prev, event.target.result]);
//       reader.readAsDataURL(file);
//     });
//   };

//   const removeImage = (index) => setCurrentImages(currentImages.filter((_, i) => i !== index));

//   const saveJournalEntry = () => {
//     if (!currentNotes && currentImages.length === 0) return showMessage("Entry is empty!", "error");
//     const newEntry = {
//       lessonId: editingIndex !== null ? journalEntries[editingIndex].lessonId : journalEntries.length,
//       content: currentNotes,
//       images: currentImages,
//     };
//     let updatedEntries = editingIndex !== null ? [...journalEntries] : [newEntry, ...journalEntries];
//     if (editingIndex !== null) updatedEntries[editingIndex] = newEntry;

//     setJournalEntries(updatedEntries);
//     setCurrentNotes("");
//     setCurrentImages([]);
//     setEditingIndex(null);
//     updateDashboard({ notes: updatedEntries });
//     showMessage("Entry saved successfully!");
//   };

//   const editJournalEntry = (index) => {
//     const entry = journalEntries[index];
//     setCurrentNotes(entry.content);
//     setCurrentImages(entry.images || []);
//     setEditingIndex(index);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const deleteJournalEntry = (index) => {
//     const updatedEntries = journalEntries.filter((_, i) => i !== index);
//     setJournalEntries(updatedEntries);
//     updateDashboard({ notes: updatedEntries });
//     showMessage("Entry deleted.");
//   };

//   const completedLessons = Object.values(progress).filter(Boolean).length;
//   const percentage = Math.round((completedLessons / totalLessons) * 100);

//   return (
//     <div className="ph-dashboard">
//       <style>{`
//         .ph-dashboard { background: #0a0b10; color: #e2e8f0; min-height: 100vh; font-family: 'Inter', system-ui, sans-serif; padding: 20px; }
//         .ph-container { max-width: 1100px; margin: 0 auto; }

//         /* Responsive Grid Logic */
//         .ph-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 20px; }
//         .col-main { grid-column: span 8; }
//         .col-side { grid-column: span 4; }
//         .col-full { grid-column: span 12; }

//         @media (max-width: 900px) {
//           .col-main, .col-side { grid-column: span 12; }
//           .ph-header { flex-direction: column; align-items: flex-start !important; gap: 15px; }
//         }

//         .ph-card { background: #161b22; border: 1px solid #30363d; border-radius: 16px; padding: 24px; box-sizing: border-box; }
        
//         .bar-container { background: #30363d; border-radius: 20px; height: 12px; margin: 15px 0; width: 100%; overflow: hidden; }
//         .bar-fill { height: 100%; background: linear-gradient(90deg, #3b82f6, #60a5fa); border-radius: 20px; transition: 1s ease; }

//         /* Responsive Image Grid */
//         .img-display-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//           gap: 15px;
//           margin-top: 15px;
//         }

//         @media (max-width: 600px) {
//           .img-display-grid { grid-template-columns: 1fr; }
//           .ph-card { padding: 16px; }
//         }

//         .journal-img { width: 100%; height: auto; min-height: 200px; max-height: 400px; border-radius: 12px; object-fit: cover; border: 1px solid #30363d; cursor: zoom-in; transition: transform 0.2s; }
//         .journal-img:hover { transform: scale(1.01); }

//         .lightbox { position: fixed; inset: 0; background: rgba(0,0,0,0.95); display: flex; justify-content: center; align-items: center; z-index: 2000; padding: 20px; cursor: zoom-out; }
//         .lightbox img { max-width: 100%; max-height: 90vh; border-radius: 8px; box-shadow: 0 0 40px rgba(0,0,0,0.8); }

//         button { transition: all 0.2s ease; border: none; cursor: pointer; }
//         button:active { transform: scale(0.98); }
//         input, textarea { outline: none; transition: border-color 0.2s; }
//         input:focus, textarea:focus { border-color: #3b82f6 !important; }
//       `}</style>

//       {message && (
//         <div style={{ position: "fixed", top: 20, right: 20, padding: "12px 24px", background: message.type === "error" ? "#ef4444" : "#22c55e", color: "white", borderRadius: 8, fontWeight: 600, zIndex: 3000, boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
//           {message.text}
//         </div>
//       )}

//       {lightboxImage && (
//         <div className="lightbox" onClick={() => setLightboxImage(null)}>
//           <img src={lightboxImage} alt="Fullscreen Chart" />
//         </div>
//       )}

//       <div className="ph-container">
//         <header className="ph-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
//           <h1 style={{ margin: 0, fontSize: '1.8rem' }}>Pips Hunter: <span style={{ color: "#3b82f6" }}>{user.name}</span></h1>
//           <button onClick={increaseStreak} style={{ padding: "10px 20px", borderRadius: 8, border: "1px solid #f59e0b", background: "#f59e0b22", color: "#f59e0b", fontWeight: "bold" }}>
//             🔥 {user.streak} Day Streak
//           </button>
//         </header>

//         <div className="ph-grid">
//           {/* Progress Card */}
//           <div className="ph-card col-main">
//             <h3 style={{ marginTop: 0 }}>Course Mastery</h3>
//             <div className="bar-container"><div className="bar-fill" style={{ width: `${percentage}%` }}></div></div>
//             <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
//               {["psychology","riskManagement","marketAnalysis"].map(key => (
//                 <div key={key} style={{ background: "#0d1117", padding: '12px', borderRadius: 10, border: "1px solid #30363d", flex: "1 1 140px" }}>
//                   <span style={{ fontSize: "0.8rem", textTransform: "capitalize", color: '#8b949e' }}>{key.replace(/([A-Z])/g, " $1")}</span>
//                   <div style={{ marginTop: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                     {progress[key] ? <span style={{color: '#22c55e', fontSize: '0.9rem'}}>✅ Done</span> : 
//                     <button onClick={() => markComplete(key)} style={{ fontSize: "0.75rem", padding: "5px 10px", background: "#3b82f6", color: "white", borderRadius: 6 }}>Complete</button>}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Identity Card */}
//           <div className="ph-card col-side">
//             <h3 style={{ marginTop: 0 }}>Identity</h3>
//             <input value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} style={{ width: "100%", padding: 12, borderRadius: 8, marginBottom: 12, background: "#0d1117", border: "1px solid #30363d", color: "white", boxSizing: "border-box" }} />
//             <button onClick={() => { updateDashboard({ name: user.name }); showMessage("Name Synced"); }} style={{ width: "100%", padding: 12, borderRadius: 8, background: "#3b82f6", color: "white", fontWeight: "bold" }}>Update Profile</button>
//           </div>

//           {/* Journal Editor */}
//           <div className="ph-card col-full">
//             <h3 style={{marginTop: 0}}>{editingIndex !== null ? "📝 Edit Entry" : "✍️ Daily Trade Journal"}</h3>
//             <textarea rows={5} value={currentNotes} onChange={(e) => setCurrentNotes(e.target.value)} placeholder="Analyze your setups, mistakes, or psychological state..." style={{ width: "100%", padding: 16, borderRadius: 12, marginBottom: 12, background: "#0d1117", border: "1px solid #30363d", color: "white", fontSize: "1rem", boxSizing: 'border-box' }} />
            
//             <div style={{ display: "flex", flexWrap: "wrap", gap: 15, alignItems: "center", justifyContent: "space-between" }}>
//               <label style={{ cursor: 'pointer', background: '#30363d', padding: '10px 15px', borderRadius: 8, fontSize: '0.9rem' }}>
//                 📷 Add Charts
//                 <input type="file" multiple accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
//               </label>
//               <button onClick={saveJournalEntry} style={{ padding: "12px 28px", borderRadius: 8, background: "#22c55e", color: "white", fontWeight: "bold" }}>
//                 {editingIndex !== null ? "Update Log" : "Post to Journal"}
//               </button>
//             </div>

//             {currentImages.length > 0 && (
//               <div className="img-display-grid">
//                 {currentImages.map((img, i) => (
//                   <div key={i} style={{ position: "relative" }}>
//                     <img src={img} alt="Preview" className="journal-img" onClick={() => setLightboxImage(img)} />
//                     <button onClick={() => removeImage(i)} style={{ position: "absolute", top: 8, right: 8, background: "#ef4444", color: "white", borderRadius: "50%", width: 30, height: 30, fontWeight: "bold", boxShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>×</button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* History Feed */}
//           <div className="col-full">
//             <h2 style={{ margin: "30px 0 15px", fontSize: '1.5rem' }}>Previous Records</h2>
//             {journalEntries.length === 0 && <p style={{ color: "#8b949e", textAlign: 'center', padding: '40px' }}>No trades logged yet. Start journaling to track your growth!</p>}
//             {journalEntries.map((entry, idx) => (
//               <div key={idx} className="ph-card" style={{ marginBottom: 20 }}>
//                 <div style={{ display: "flex", justifyContent: "space-between", gap: 20, marginBottom: 10 }}>
//                   <p style={{ margin: 0, flex: 1, whiteSpace: "pre-wrap", lineHeight: 1.6, fontSize: '1.05rem' }}>{entry.content}</p>
//                   <div style={{ display: "flex", gap: 15 }}>
//                     <button onClick={() => editJournalEntry(idx)} style={{ background: "none", color: "#3b82f6", fontWeight: "bold", height: 'fit-content' }}>Edit</button>
//                     <button onClick={() => deleteJournalEntry(idx)} style={{ background: "none", color: "#ef4444", fontWeight: "bold", height: 'fit-content' }}>Delete</button>
//                   </div>
//                 </div>
//                 {entry.images && entry.images.length > 0 && (
//                   <div className="img-display-grid">
//                     {entry.images.map((img, i) => (
//                       <img key={i} src={img} alt="Trade Chart" className="journal-img" onClick={() => setLightboxImage(img)} />
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import Link from "next/link"; // 1. Added Link import

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
  const [lightboxImage, setLightboxImage] = useState(null);

  // Fetch Logic (Sync with your existing API)
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
        showMessage("Failed to load dashboard data.", "error");
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

  const increaseStreak = () => {
    const newStreak = user.streak + 1;
    setUser({ ...user, streak: newStreak });
    updateDashboard({ streak: newStreak });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => setCurrentImages((prev) => [...prev, event.target.result]);
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => setCurrentImages(currentImages.filter((_, i) => i !== index));

  const saveJournalEntry = () => {
    if (!currentNotes && currentImages.length === 0) return showMessage("Entry is empty!", "error");
    const newEntry = {
      lessonId: editingIndex !== null ? journalEntries[editingIndex].lessonId : journalEntries.length,
      content: currentNotes,
      images: currentImages,
    };
    let updatedEntries = editingIndex !== null ? [...journalEntries] : [newEntry, ...journalEntries];
    if (editingIndex !== null) updatedEntries[editingIndex] = newEntry;

    setJournalEntries(updatedEntries);
    setCurrentNotes("");
    setCurrentImages([]);
    setEditingIndex(null);
    updateDashboard({ notes: updatedEntries });
    showMessage("Entry saved successfully!");
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
    showMessage("Entry deleted.");
  };

  const completedLessons = Object.values(progress).filter(Boolean).length;
  const percentage = Math.round((completedLessons / totalLessons) * 100);

  return (
    <div className="ph-dashboard">
      <style>{`
        .ph-dashboard { background: #0a0b10; color: #e2e8f0; min-height: 100vh; font-family: 'Inter', system-ui, sans-serif; padding: 20px; }
        .ph-container { max-width: 1100px; margin: 0 auto; }

        /* Responsive Grid Logic */
        .ph-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 20px; }
        .col-main { grid-column: span 8; }
        .col-side { grid-column: span 4; }
        .col-full { grid-column: span 12; }

        @media (max-width: 900px) {
          .col-main, .col-side { grid-column: span 12; }
          .ph-header { flex-direction: column; align-items: flex-start !important; gap: 15px; }
        }

        .ph-card { background: #161b22; border: 1px solid #30363d; border-radius: 16px; padding: 24px; box-sizing: border-box; }
        
        .bar-container { background: #30363d; border-radius: 20px; height: 12px; margin: 15px 0; width: 100%; overflow: hidden; }
        .bar-fill { height: 100%; background: linear-gradient(90deg, #3b82f6, #60a5fa); border-radius: 20px; transition: 1s ease; }

        /* Streak Link Styling */
        .streak-link { 
          text-decoration: none; 
          padding: 10px 20px; 
          border-radius: 8px; 
          border: 1px solid #f59e0b; 
          background: #f59e0b22; 
          color: #f59e0b; 
          font-weight: bold;
          transition: 0.2s;
        }
        .streak-link:hover {
          background: #f59e0b44;
          transform: translateY(-2px);
        }

        .img-display-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 15px;
          margin-top: 15px;
        }

        @media (max-width: 600px) {
          .img-display-grid { grid-template-columns: 1fr; }
          .ph-card { padding: 16px; }
        }

        .journal-img { width: 100%; height: auto; min-height: 200px; max-height: 400px; border-radius: 12px; object-fit: cover; border: 1px solid #30363d; cursor: zoom-in; transition: transform 0.2s; }
        .journal-img:hover { transform: scale(1.01); }

        .lightbox { position: fixed; inset: 0; background: rgba(0,0,0,0.95); display: flex; justify-content: center; align-items: center; z-index: 2000; padding: 20px; cursor: zoom-out; }
        .lightbox img { max-width: 100%; max-height: 90vh; border-radius: 8px; box-shadow: 0 0 40px rgba(0,0,0,0.8); }

        button { transition: all 0.2s ease; border: none; cursor: pointer; }
        button:active { transform: scale(0.98); }
        input, textarea { outline: none; transition: border-color 0.2s; }
        input:focus, textarea:focus { border-color: #3b82f6 !important; }
      `}</style>

      {message && (
        <div style={{ position: "fixed", top: 20, right: 20, padding: "12px 24px", background: message.type === "error" ? "#ef4444" : "#22c55e", color: "white", borderRadius: 8, fontWeight: 600, zIndex: 3000, boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
          {message.text}
        </div>
      )}

      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <img src={lightboxImage} alt="Fullscreen Chart" />
        </div>
      )}

      <div className="ph-container">
        <header className="ph-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
          <h1 style={{ margin: 0, fontSize: '1.8rem' }}>Pips Hunter: <span style={{ color: "#3b82f6" }}>{user.name}</span></h1>
          
          {/* 2. Changed button to Link */}
          <Link href="/learn" className="streak-link">
             Start Learning
          </Link>
        </header>

        <div className="ph-grid">
          {/* Progress Card */}
          <div className="ph-card col-main">
            <h3 style={{ marginTop: 0 }}>Course Mastery</h3>
            <div className="bar-container"><div className="bar-fill" style={{ width: `${percentage}%` }}></div></div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {["psychology","riskManagement","marketAnalysis"].map(key => (
                <div key={key} style={{ background: "#0d1117", padding: '12px', borderRadius: 10, border: "1px solid #30363d", flex: "1 1 140px" }}>
                  <span style={{ fontSize: "0.8rem", textTransform: "capitalize", color: '#8b949e' }}>{key.replace(/([A-Z])/g, " $1")}</span>
                  <div style={{ marginTop: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {progress[key] ? <span style={{color: '#22c55e', fontSize: '0.9rem'}}>✅ Done</span> : 
                    <button onClick={() => markComplete(key)} style={{ fontSize: "0.75rem", padding: "5px 10px", background: "#3b82f6", color: "white", borderRadius: 6 }}>Complete</button>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Identity Card */}
          <div className="ph-card col-side">
            <h3 style={{ marginTop: 0 }}>Identity</h3>
            <input value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} style={{ width: "100%", padding: 12, borderRadius: 8, marginBottom: 12, background: "#0d1117", border: "1px solid #30363d", color: "white", boxSizing: "border-box" }} />
            <button onClick={() => { updateDashboard({ name: user.name }); showMessage("Name Synced"); }} style={{ width: "100%", padding: 12, borderRadius: 8, background: "#3b82f6", color: "white", fontWeight: "bold" }}>Update Profile</button>
          </div>

          {/* Journal Editor */}
          <div className="ph-card col-full">
            <h3 style={{marginTop: 0}}>{editingIndex !== null ? "📝 Edit Entry" : "✍️ Daily Trade Journal"}</h3>
            <textarea rows={5} value={currentNotes} onChange={(e) => setCurrentNotes(e.target.value)} placeholder="Analyze your setups, mistakes, or psychological state..." style={{ width: "100%", padding: 16, borderRadius: 12, marginBottom: 12, background: "#0d1117", border: "1px solid #30363d", color: "white", fontSize: "1rem", boxSizing: 'border-box' }} />
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: 15, alignItems: "center", justifyContent: "space-between" }}>
              <label style={{ cursor: 'pointer', background: '#30363d', padding: '10px 15px', borderRadius: 8, fontSize: '0.9rem' }}>
                📷 Add Charts
                <input type="file" multiple accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
              </label>
              <button onClick={saveJournalEntry} style={{ padding: "12px 28px", borderRadius: 8, background: "#22c55e", color: "white", fontWeight: "bold" }}>
                {editingIndex !== null ? "Update Log" : "Post to Journal"}
              </button>
            </div>

            {currentImages.length > 0 && (
              <div className="img-display-grid">
                {currentImages.map((img, i) => (
                  <div key={i} style={{ position: "relative" }}>
                    <img src={img} alt="Preview" className="journal-img" onClick={() => setLightboxImage(img)} />
                    <button onClick={() => removeImage(i)} style={{ position: "absolute", top: 8, right: 8, background: "#ef4444", color: "white", borderRadius: "50%", width: 30, height: 30, fontWeight: "bold", boxShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>×</button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* History Feed */}
          <div className="col-full">
            <h2 style={{ margin: "30px 0 15px", fontSize: '1.5rem' }}>Previous Records</h2>
            {journalEntries.length === 0 && <p style={{ color: "#8b949e", textAlign: 'center', padding: '40px' }}>No trades logged yet. Start journaling to track your growth!</p>}
            {journalEntries.map((entry, idx) => (
              <div key={idx} className="ph-card" style={{ marginBottom: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 20, marginBottom: 10 }}>
                  <p style={{ margin: 0, flex: 1, whiteSpace: "pre-wrap", lineHeight: 1.6, fontSize: '1.05rem' }}>{entry.content}</p>
                  <div style={{ display: "flex", gap: 15 }}>
                    <button onClick={() => editJournalEntry(idx)} style={{ background: "none", color: "#3b82f6", fontWeight: "bold", height: 'fit-content' }}>Edit</button>
                    <button onClick={() => deleteJournalEntry(idx)} style={{ background: "none", color: "#ef4444", fontWeight: "bold", height: 'fit-content' }}>Delete</button>
                  </div>
                </div>
                {entry.images && entry.images.length > 0 && (
                  <div className="img-display-grid">
                    {entry.images.map((img, i) => (
                      <img key={i} src={img} alt="Trade Chart" className="journal-img" onClick={() => setLightboxImage(img)} />
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