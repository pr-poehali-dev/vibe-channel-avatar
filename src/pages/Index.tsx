import { useEffect, useState } from "react";

const AVATAR_URL = "https://cdn.poehali.dev/projects/a9ac6006-99d5-42fe-a6c6-ce06d974cac5/files/4e5d5169-7e7d-4e93-a440-2112cbfab30d.jpg";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = AVATAR_URL;
    link.download = "vibe-club-avatar.jpg";
    link.target = "_blank";
    link.click();
  };

  return (
    <div style={{ fontFamily: "'Russo One', sans-serif" }} className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">

      {/* Neon background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{
          position: "absolute", top: "10%", left: "5%",
          width: 350, height: 350, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,0,200,0.25) 0%, transparent 70%)",
          filter: "blur(40px)", animation: "pulse1 4s ease-in-out infinite"
        }} />
        <div style={{
          position: "absolute", bottom: "10%", right: "5%",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,120,255,0.25) 0%, transparent 70%)",
          filter: "blur(40px)", animation: "pulse2 5s ease-in-out infinite"
        }} />
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: 300, height: 300, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(140,0,255,0.2) 0%, transparent 70%)",
          filter: "blur(50px)", animation: "pulse1 6s ease-in-out infinite reverse"
        }} />
        <div style={{
          position: "absolute", top: "30%", right: "15%",
          width: 200, height: 200, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,255,150,0.18) 0%, transparent 70%)",
          filter: "blur(35px)", animation: "pulse2 4.5s ease-in-out infinite"
        }} />
      </div>

      <style>{`
        @keyframes pulse1 {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        @keyframes pulse2 {
          0%, 100% { opacity: 0.5; transform: scale(1.1); }
          50% { opacity: 0.9; transform: scale(0.9); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-18px) rotate(1deg); }
        }
        @keyframes ringPulse {
          0%, 100% { box-shadow: 0 0 0 0px rgba(255,0,200,0.4), 0 0 0 0px rgba(0,120,255,0.3); }
          50% { box-shadow: 0 0 0 20px rgba(255,0,200,0.1), 0 0 0 40px rgba(0,120,255,0.05); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes neonText {
          0%, 100% { text-shadow: 0 0 10px #ff00cc, 0 0 30px #ff00cc, 0 0 60px #ff00cc; }
          50% { text-shadow: 0 0 5px #7700ff, 0 0 20px #7700ff, 0 0 50px #7700ff; }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .btn-neon {
          background: linear-gradient(135deg, #ff00cc, #7700ff, #00aaff);
          background-size: 200% 200%;
          animation: gradShift 3s ease infinite;
          border: none;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-neon:hover {
          transform: scale(1.06);
          box-shadow: 0 0 30px rgba(255,0,200,0.6), 0 0 60px rgba(119,0,255,0.4);
        }
        @keyframes gradShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .avatar-ring {
          animation: ringPulse 2.5s ease-in-out infinite;
        }
        .avatar-float {
          animation: float 3.5s ease-in-out infinite;
        }
        .title-neon {
          animation: neonText 2s ease-in-out infinite;
        }
      `}</style>

      {/* Main content */}
      <div style={{
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.8s ease",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 32,
        zIndex: 10, position: "relative"
      }}>

        {/* Label */}
        <div style={{
          animation: "slideUp 0.7s ease forwards",
          background: "linear-gradient(90deg, #ff00cc, #7700ff, #00aaff, #00ff88)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          fontSize: 13, letterSpacing: 6, fontFamily: "'Rubik', sans-serif",
          fontWeight: 900, textTransform: "uppercase"
        }}>
          Telegram • Аватарка • Клуб
        </div>

        {/* Avatar */}
        <div className="avatar-float" style={{ position: "relative" }}>
          <div className="avatar-ring" style={{
            borderRadius: "50%",
            padding: 4,
            background: "linear-gradient(135deg, #ff00cc, #7700ff, #00aaff, #00ff88, #ff00cc)",
            backgroundSize: "300% 300%",
            animation: "gradShift 3s ease infinite, ringPulse 2.5s ease-in-out infinite"
          }}>
            <div style={{
              width: 280, height: 280, borderRadius: "50%", overflow: "hidden",
              border: "4px solid #000",
              boxShadow: "inset 0 0 30px rgba(0,0,0,0.5)"
            }}>
              <img
                src={AVATAR_URL}
                alt="ВАЙБ клуб аватарка"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Decorative sparks */}
          {[
            { top: -8, left: "20%", color: "#ff00cc", size: 10, delay: "0s" },
            { top: "20%", right: -10, color: "#00aaff", size: 8, delay: "0.4s" },
            { bottom: -8, right: "30%", color: "#00ff88", size: 12, delay: "0.8s" },
            { bottom: "15%", left: -12, color: "#7700ff", size: 9, delay: "1.2s" },
          ].map((s, i) => (
            <div key={i} style={{
              position: "absolute",
              top: s.top, left: s.left, right: s.right, bottom: s.bottom,
              width: s.size, height: s.size, borderRadius: "50%",
              background: s.color,
              boxShadow: `0 0 10px ${s.color}, 0 0 20px ${s.color}`,
              animation: `pulse1 2s ease-in-out ${s.delay} infinite`
            }} />
          ))}
        </div>

        {/* Club name */}
        <div style={{ textAlign: "center", animation: "slideUp 0.9s ease forwards" }}>
          <h1 className="title-neon" style={{
            fontFamily: "'Russo One', sans-serif",
            fontSize: 64, margin: 0, letterSpacing: 8,
            color: "#fff"
          }}>
            ВАЙБ
          </h1>
          <div style={{
            fontFamily: "'Rubik', sans-serif",
            fontSize: 15, color: "rgba(255,255,255,0.5)",
            letterSpacing: 4, marginTop: 4
          }}>
            МОЛОДЁЖНЫЙ КЛУБ • 14+
          </div>
        </div>

        {/* Download button */}
        <button
          className="btn-neon"
          onClick={handleDownload}
          style={{
            color: "#fff", fontFamily: "'Russo One', sans-serif",
            fontSize: 16, letterSpacing: 3, padding: "16px 40px",
            borderRadius: 50, animation: "slideUp 1.1s ease forwards"
          }}
        >
          ⬇ СКАЧАТЬ АВАТАРКУ
        </button>

        {/* Size hint */}
        <div style={{
          fontFamily: "'Rubik', sans-serif",
          fontSize: 12, color: "rgba(255,255,255,0.3)", letterSpacing: 2,
          animation: "slideUp 1.3s ease forwards"
        }}>
          КВАДРАТНЫЙ ФОРМАТ • ПОДХОДИТ ДЛЯ TELEGRAM
        </div>
      </div>
    </div>
  );
};

export default Index;
