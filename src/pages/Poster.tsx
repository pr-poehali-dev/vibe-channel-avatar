const POSTER_URL = "https://cdn.poehali.dev/projects/a9ac6006-99d5-42fe-a6c6-ce06d974cac5/files/15f30336-0467-46db-aec3-109b7de29a6e.jpg";

const Poster = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = POSTER_URL;
    link.download = "vayb-afisha.jpg";
    link.target = "_blank";
    link.click();
  };

  return (
    <div style={{ fontFamily: "'Russo One', sans-serif" }} className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">

      <style>{`
        @keyframes pulse1 {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes gradShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes neonGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(255,0,200,0.4), 0 0 60px rgba(119,0,255,0.2); }
          50% { box-shadow: 0 0 40px rgba(255,0,200,0.7), 0 0 100px rgba(119,0,255,0.4); }
        }
        .btn-neon {
          background: linear-gradient(135deg, #ff00cc, #7700ff, #00aaff);
          background-size: 200% 200%;
          animation: gradShift 3s ease infinite;
          border: none; cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          color: #fff;
        }
        .btn-neon:hover {
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(255,0,200,0.6);
        }
        .poster-img {
          animation: neonGlow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{ position:"absolute", top:"5%", left:"-10%", width:450, height:450, borderRadius:"50%", background:"radial-gradient(circle, rgba(255,0,200,0.18) 0%, transparent 70%)", filter:"blur(60px)", animation:"pulse1 5s ease-in-out infinite" }} />
        <div style={{ position:"absolute", bottom:"5%", right:"-10%", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle, rgba(0,100,255,0.15) 0%, transparent 70%)", filter:"blur(60px)", animation:"pulse1 6s ease-in-out infinite reverse" }} />
      </div>

      <div style={{ position:"relative", zIndex:10, display:"flex", flexDirection:"column", alignItems:"center", gap:28, padding:"40px 20px", width:"100%", maxWidth:540 }}>

        {/* Label */}
        <div style={{
          animation:"slideUp 0.5s ease forwards",
          background:"linear-gradient(90deg, #ff00cc, #7700ff, #00aaff)",
          WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
          fontSize:12, letterSpacing:6, fontFamily:"'Rubik', sans-serif",
          fontWeight:900, textTransform:"uppercase"
        }}>
          Афиша • Молодёжный клуб • Город Гай
        </div>

        {/* Poster image */}
        <div className="poster-img" style={{ borderRadius:24, overflow:"hidden", width:"100%", border:"2px solid rgba(255,0,200,0.3)" }}>
          <img
            src={POSTER_URL}
            alt="Афиша ВАЙБ — молодёжная тусовка"
            style={{ width:"100%", display:"block" }}
          />
        </div>

        {/* Info badges */}
        <div style={{ display:"flex", gap:10, flexWrap:"wrap", justifyContent:"center", animation:"slideUp 0.8s ease forwards" }}>
          {["⚡ ВАЙБ", "🎉 Тусовка", "📍 Город Гай", "🔞 14+"].map((b, i) => (
            <div key={i} style={{
              fontFamily:"'Rubik', sans-serif", fontSize:13, fontWeight:700,
              color:"rgba(255,255,255,0.65)", background:"rgba(255,255,255,0.06)",
              border:"1px solid rgba(255,255,255,0.1)", borderRadius:50, padding:"7px 16px", letterSpacing:1
            }}>{b}</div>
          ))}
        </div>

        {/* Download button */}
        <button
          className="btn-neon"
          onClick={handleDownload}
          style={{
            width:"100%", padding:"16px", borderRadius:14,
            fontFamily:"'Russo One', sans-serif", fontSize:16, letterSpacing:3,
            animation:"slideUp 1s ease forwards"
          }}
        >
          ⬇ СКАЧАТЬ АФИШУ
        </button>

        <div style={{ fontFamily:"'Rubik', sans-serif", fontSize:11, color:"rgba(255,255,255,0.25)", letterSpacing:2, textAlign:"center" }}>
          Подходит для постов в Telegram, ВКонтакте и Инстаграм
        </div>
      </div>
    </div>
  );
};

export default Poster;
