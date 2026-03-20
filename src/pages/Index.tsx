import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AVATAR_URL = "https://cdn.poehali.dev/projects/a9ac6006-99d5-42fe-a6c6-ce06d974cac5/files/4e5d5169-7e7d-4e93-a440-2112cbfab30d.jpg";

const TG_DESCRIPTION = `⚡️ ВАЙБ — молодёжный клуб г. Гай

Если тебе 14+ и ты хочешь тусоваться, знакомиться и зажигать вместе — ты попал туда, куда надо 🔥

Здесь:
🎵 Крутая музыка и атмосфера
🤝 Новые знакомства и дружба
🎉 Вечеринки, события, движуха
💥 Только настоящий ВАЙБ

📍 Город Гай
🔞 Возраст: 14+

Подписывайся — будет жарко! 🚀`;

const features = [
  { icon: "🎵", title: "Музыка", desc: "Треки, которые заряжают энергией" },
  { icon: "🤝", title: "Знакомства", desc: "Новые друзья и общение" },
  { icon: "🎉", title: "События", desc: "Вечеринки и крутые тусовки" },
  { icon: "💥", title: "Движуха", desc: "Активности каждые выходные" },
];

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"site" | "tg">("site");
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(TG_DESCRIPTION);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = AVATAR_URL;
    link.download = "vibe-club-avatar.jpg";
    link.target = "_blank";
    link.click();
  };

  return (
    <div style={{ fontFamily: "'Russo One', sans-serif" }} className="min-h-screen bg-black relative overflow-hidden">

      <style>{`
        @keyframes pulse1 {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes pulse2 {
          0%, 100% { opacity: 0.4; transform: scale(1.1); }
          50% { opacity: 0.8; transform: scale(0.9); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes gradShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes neonText {
          0%, 100% { text-shadow: 0 0 10px #ff00cc, 0 0 40px #ff00cc; }
          50% { text-shadow: 0 0 5px #7700ff, 0 0 30px #7700ff; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ringPulse {
          0%, 100% { box-shadow: 0 0 0 0px rgba(255,0,200,0.3); }
          50% { box-shadow: 0 0 0 16px rgba(255,0,200,0.05); }
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
          box-shadow: 0 0 25px rgba(255,0,200,0.5);
        }
        .btn-outline {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          cursor: pointer;
          transition: all 0.2s;
          color: rgba(255,255,255,0.6);
        }
        .btn-outline:hover {
          border-color: rgba(255,0,200,0.6);
          color: #fff;
          background: rgba(255,0,200,0.08);
        }
        .tab-active {
          background: linear-gradient(135deg, #ff00cc, #7700ff);
          color: #fff !important;
        }
        .feature-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          transition: all 0.25s;
        }
        .feature-card:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,0,200,0.3);
          transform: translateY(-4px);
        }
        .tg-box {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          white-space: pre-line;
          line-height: 1.7;
        }
        .avatar-ring {
          animation: ringPulse 2.5s ease-in-out infinite;
        }
      `}</style>

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{ position:"absolute", top:"5%", left:"-5%", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle, rgba(255,0,200,0.2) 0%, transparent 70%)", filter:"blur(50px)", animation:"pulse1 5s ease-in-out infinite" }} />
        <div style={{ position:"absolute", bottom:"0%", right:"-5%", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle, rgba(0,100,255,0.18) 0%, transparent 70%)", filter:"blur(60px)", animation:"pulse2 6s ease-in-out infinite" }} />
        <div style={{ position:"absolute", top:"40%", right:"20%", width:250, height:250, borderRadius:"50%", background:"radial-gradient(circle, rgba(0,255,150,0.12) 0%, transparent 70%)", filter:"blur(40px)", animation:"pulse1 4s ease-in-out infinite reverse" }} />
      </div>

      {/* Content */}
      <div style={{
        opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease",
        maxWidth: 720, margin: "0 auto", padding: "48px 20px 60px",
        position: "relative", zIndex: 10
      }}>

        {/* Header */}
        <div style={{ display:"flex", alignItems:"center", gap:20, marginBottom:40, animation:"slideUp 0.6s ease forwards" }}>
          <div className="avatar-ring" style={{
            borderRadius:"50%", padding:3,
            background:"linear-gradient(135deg, #ff00cc, #7700ff, #00aaff)",
            backgroundSize:"200% 200%", animation:"gradShift 3s ease infinite, ringPulse 2.5s ease-in-out infinite",
            flexShrink:0
          }}>
            <div style={{ width:72, height:72, borderRadius:"50%", overflow:"hidden", border:"3px solid #000" }}>
              <img src={AVATAR_URL} alt="ВАЙБ" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
            </div>
          </div>
          <div>
            <h1 style={{
              fontFamily:"'Russo One', sans-serif", fontSize:42, margin:0,
              color:"#fff", animation:"neonText 2.5s ease-in-out infinite", letterSpacing:6
            }}>ВАЙБ</h1>
            <div style={{ fontFamily:"'Rubik', sans-serif", fontSize:13, color:"rgba(255,255,255,0.45)", letterSpacing:3, marginTop:2 }}>
              МОЛОДЁЖНЫЙ КЛУБ • ГОРОД ГАЙ • 14+
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{
          display:"flex", gap:8, marginBottom:32,
          background:"rgba(255,255,255,0.04)", borderRadius:50,
          padding:4, animation:"slideUp 0.7s ease forwards"
        }}>
          {[
            { id:"site", label:"🌐 Описание для сайта" },
            { id:"tg", label:"✈️ Описание для Telegram" },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as "site" | "tg")}
              className={activeTab === tab.id ? "tab-active" : "btn-outline"}
              style={{
                flex:1, padding:"12px 0", borderRadius:50,
                fontFamily:"'Rubik', sans-serif", fontSize:14, fontWeight:700, letterSpacing:1
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Site tab */}
        {activeTab === "site" && (
          <div style={{ animation:"slideUp 0.5s ease forwards" }}>
            {/* Hero text */}
            <div style={{
              background:"linear-gradient(135deg, rgba(255,0,200,0.1), rgba(119,0,255,0.1))",
              border:"1px solid rgba(255,0,200,0.2)", borderRadius:20, padding:"32px 28px", marginBottom:24
            }}>
              <div style={{ fontFamily:"'Rubik', sans-serif", fontSize:13, color:"#ff00cc", letterSpacing:4, marginBottom:12, fontWeight:700 }}>
                ДОБРО ПОЖАЛОВАТЬ
              </div>
              <h2 style={{ fontFamily:"'Russo One', sans-serif", fontSize:28, color:"#fff", margin:"0 0 16px", lineHeight:1.3 }}>
                Место, где рождается настоящий ВАЙБ
              </h2>
              <p style={{ fontFamily:"'Rubik', sans-serif", fontSize:16, color:"rgba(255,255,255,0.7)", lineHeight:1.7, margin:0 }}>
                Клуб «ВАЙБ» — это молодёжное пространство в городе Гай для тех, кто хочет тусоваться, знакомиться и заряжаться энергией. Здесь нет скуки — только движуха, музыка и крутые люди. Если тебе 14+, то ты уже можешь быть частью нашей команды.
              </p>
            </div>

            {/* Features grid */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:24 }}>
              {features.map((f, i) => (
                <div key={i} className="feature-card" style={{ borderRadius:16, padding:"20px 18px" }}>
                  <div style={{ fontSize:28, marginBottom:8 }}>{f.icon}</div>
                  <div style={{ fontFamily:"'Russo One', sans-serif", fontSize:15, color:"#fff", marginBottom:4, letterSpacing:1 }}>{f.title}</div>
                  <div style={{ fontFamily:"'Rubik', sans-serif", fontSize:13, color:"rgba(255,255,255,0.5)", lineHeight:1.5 }}>{f.desc}</div>
                </div>
              ))}
            </div>

            {/* City badge */}
            <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
              {["📍 Город Гай", "🔞 14+", "⚡ Молодёжный клуб"].map((badge, i) => (
                <div key={i} style={{
                  fontFamily:"'Rubik', sans-serif", fontSize:13, fontWeight:700,
                  color:"rgba(255,255,255,0.6)", background:"rgba(255,255,255,0.06)",
                  border:"1px solid rgba(255,255,255,0.1)", borderRadius:50, padding:"8px 16px", letterSpacing:1
                }}>{badge}</div>
              ))}
            </div>
          </div>
        )}

        {/* Telegram tab */}
        {activeTab === "tg" && (
          <div style={{ animation:"slideUp 0.5s ease forwards" }}>
            <div style={{ marginBottom:16 }}>
              <div style={{ fontFamily:"'Rubik', sans-serif", fontSize:13, color:"rgba(255,255,255,0.4)", letterSpacing:2, marginBottom:12 }}>
                ГОТОВЫЙ ТЕКСТ ДЛЯ TELEGRAM-КАНАЛА
              </div>
              <div className="tg-box" style={{ padding:"24px", fontFamily:"'Rubik', sans-serif", fontSize:15, color:"rgba(255,255,255,0.85)" }}>
                {TG_DESCRIPTION}
              </div>
            </div>

            <button
              className="btn-neon"
              onClick={handleCopy}
              style={{
                width:"100%", padding:"16px", borderRadius:14,
                fontFamily:"'Russo One', sans-serif", fontSize:16, letterSpacing:3
              }}
            >
              {copied ? "✅ СКОПИРОВАНО!" : "📋 СКОПИРОВАТЬ ТЕКСТ"}
            </button>

            <div style={{
              fontFamily:"'Rubik', sans-serif", fontSize:12,
              color:"rgba(255,255,255,0.25)", textAlign:"center", marginTop:12, letterSpacing:1
            }}>
              Вставь текст в описание своего Telegram-канала
            </div>
          </div>
        )}

        {/* Poster + Warmup buttons */}
        <div style={{ display:"flex", flexDirection:"column", gap:10, marginTop:24 }}>
          <button
            className="btn-neon"
            onClick={() => navigate("/poster")}
            style={{ width:"100%", padding:"16px", borderRadius:14, fontFamily:"'Russo One', sans-serif", fontSize:16, letterSpacing:3 }}
          >
            🎉 ПОСМОТРЕТЬ АФИШУ
          </button>
          <button
            className="btn-outline"
            onClick={() => navigate("/warmup")}
            style={{ width:"100%", padding:"14px", borderRadius:14, fontFamily:"'Russo One', sans-serif", fontSize:14, letterSpacing:3 }}
          >
            📣 ТЕКСТЫ ДЛЯ РАЗОГРЕВА
          </button>
        </div>

        {/* Download avatar button */}
        <div style={{ marginTop:20, borderTop:"1px solid rgba(255,255,255,0.07)", paddingTop:24, display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:12 }}>
          <div style={{ fontFamily:"'Rubik', sans-serif", fontSize:13, color:"rgba(255,255,255,0.35)", letterSpacing:1 }}>
            Аватарка для Telegram
          </div>
          <button
            className="btn-outline"
            onClick={handleDownload}
            style={{
              fontFamily:"'Rubik', sans-serif", fontSize:13, fontWeight:700,
              padding:"10px 22px", borderRadius:50, letterSpacing:2
            }}
          >
            ⬇ СКАЧАТЬ АВАТАРКУ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;