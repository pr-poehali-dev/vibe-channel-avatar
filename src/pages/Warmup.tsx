import { useState } from "react";
import { useNavigate } from "react-router-dom";

const POSTS = [
  {
    day: "Пост 1",
    tag: "Анонс",
    color: "#ff00cc",
    emoji: "🔥",
    title: "Это будет первый раз",
    text: `Скоро в Гае произойдёт кое-что новое.

Не концерт. Не дискотека. Не скучный вечер.

Это будет настоящая молодёжная тусовка — место, где можно просто быть собой, слышать крутую музыку и познакомиться с теми, кто живёт рядом.

ВАЙБ — первая тусовка нового уровня в нашем городе.

📍 Город Гай
🔞 14+
📣 Подпишись, чтобы не пропустить дату`,
  },
  {
    day: "Пост 2",
    tag: "Интрига",
    color: "#7700ff",
    emoji: "👀",
    title: "Ты уже слышал?",
    text: `В Гае готовится кое-что интересное.

Говорят, будет громкая музыка, толпа и огонь атмосфера. Говорят, это только начало.

Мы пока не говорим всего. Но скоро расскажем.

Подпишись и будь первым, кто узнает дату, место и всё остальное 👇

⚡ @[ваш_канал] — не пропусти`,
  },
  {
    day: "Пост 3",
    tag: "Социальное доказательство",
    color: "#00aaff",
    emoji: "🤝",
    title: "Таких как ты — уже N человек",
    text: `Уже [число] человек подписались и ждут.

Они узнают о тусовке первыми. Узнают дату, место и всё, что будет на ВАЙБ.

Если ты ещё не с нами — самое время.

Подпишись на канал и жди сигнала 🚀

📣 @[ваш_канал]
📍 Город Гай | 🔞 14+`,
  },
  {
    day: "Пост 4",
    tag: "FOMO",
    color: "#ff6600",
    emoji: "⏳",
    title: "Мест мало. Время идёт.",
    text: `Мы не делаем это для всех.

ВАЙБ — это для тех, кто хочет быть в движе. Для тех, кому интересно живое общение, а не просто лента в телефоне.

Места ограничены. Дата уже близко.

Не жди, пока расскажут другие — подпишись сам 👇

🔥 @[ваш_канал]`,
  },
  {
    day: "Пост 5",
    tag: "Финальный разогрев",
    color: "#00ff88",
    emoji: "🚀",
    title: "Осталось совсем чуть-чуть",
    text: `Дата почти раскрыта.

Скоро мы объявим: где, когда и что будет на первой тусовке ВАЙБ в Гае.

Успей подписаться до официального анонса — участники из подписчиков получат [бонус/приоритет/приятный сюрприз].

⚡ Жми подписаться и будь в первых рядах

📣 @[ваш_канал]
📍 Город Гай | 🔞 14+`,
  },
  {
    day: "Пост 6",
    tag: "Репосты = Призы",
    color: "#ffcc00",
    emoji: "🎁",
    title: "Репостни — получи подарок",
    text: `Ребята, условия простые.

🎁 За репост наших историй или публикаций в канал — вы получите призы от нас!

Как участвовать:
1. Репостни любую нашу историю или пост к себе в сторис / канал
2. Отметь нас: @[ваш_канал]
3. Жди — мы увидим и напишем тебе 🤙

Дарим подарки тем, кто помогает нам греть Гай перед первой тусовкой ВАЙБ.

🔥 Чем больше репостишь — тем больше шансов!

📍 Город Гай | 🔞 14+`,
  },
];

const Warmup = () => {
  const [copied, setCopied] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div style={{ fontFamily: "'Rubik', sans-serif" }} className="min-h-screen bg-black relative overflow-hidden">

      <style>{`
        @keyframes pulse1 {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.15); }
        }
        @keyframes gradShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .post-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          transition: all 0.25s;
        }
        .post-card:hover {
          background: rgba(255,255,255,0.07);
          transform: translateY(-3px);
        }
        .btn-copy {
          border: none; cursor: pointer;
          transition: all 0.2s;
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.6);
        }
        .btn-copy:hover {
          background: rgba(255,255,255,0.14);
          color: #fff;
        }
        .btn-back {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.15);
          cursor: pointer;
          transition: all 0.2s;
          color: rgba(255,255,255,0.5);
        }
        .btn-back:hover {
          border-color: rgba(255,255,255,0.4);
          color: #fff;
        }
      `}</style>

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{ position:"absolute", top:"0%", left:"-10%", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle, rgba(255,0,200,0.12) 0%, transparent 70%)", filter:"blur(70px)", animation:"pulse1 6s ease-in-out infinite" }} />
        <div style={{ position:"absolute", bottom:"10%", right:"-10%", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle, rgba(119,0,255,0.12) 0%, transparent 70%)", filter:"blur(60px)", animation:"pulse1 5s ease-in-out infinite reverse" }} />
      </div>

      <div style={{ maxWidth: 680, margin: "0 auto", padding: "40px 20px 60px", position:"relative", zIndex:10 }}>

        {/* Back button */}
        <button
          className="btn-back"
          onClick={() => navigate("/")}
          style={{ fontFamily:"'Rubik', sans-serif", fontSize:13, fontWeight:700, padding:"9px 20px", borderRadius:50, letterSpacing:1, marginBottom:32 }}
        >
          ← Назад
        </button>

        {/* Header */}
        <div style={{ marginBottom:36, animation:"slideUp 0.5s ease forwards" }}>
          <div style={{
            background:"linear-gradient(90deg, #ff00cc, #7700ff, #00aaff)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
            fontSize:12, letterSpacing:5, fontWeight:900, textTransform:"uppercase", marginBottom:10
          }}>
            Контент-план • Разогрев • Telegram
          </div>
          <h1 style={{ fontFamily:"'Russo One', sans-serif", fontSize:30, color:"#fff", margin:"0 0 10px", letterSpacing:2 }}>
            5 постов перед ВАЙБ
          </h1>
          <p style={{ fontSize:15, color:"rgba(255,255,255,0.5)", lineHeight:1.6, margin:0 }}>
            Публикуй по одному посту каждые 1–2 дня. Так аудитория будет расти и ждать тусовку с нетерпением. В квадратных скобках — замени на своё.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
          {POSTS.map((post, i) => (
            <div key={i} className="post-card" style={{ padding:"24px", animation:`slideUp ${0.5 + i * 0.1}s ease forwards` }}>

              {/* Card header */}
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16, flexWrap:"wrap", gap:8 }}>
                <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <div style={{
                    width:36, height:36, borderRadius:"50%",
                    background: `${post.color}22`,
                    border: `1px solid ${post.color}55`,
                    display:"flex", alignItems:"center", justifyContent:"center", fontSize:18
                  }}>
                    {post.emoji}
                  </div>
                  <div>
                    <div style={{ fontSize:11, color:"rgba(255,255,255,0.35)", letterSpacing:2, fontWeight:700, textTransform:"uppercase" }}>{post.day}</div>
                    <div style={{ fontSize:13, fontWeight:700, color: post.color, letterSpacing:1 }}>{post.tag}</div>
                  </div>
                </div>
                <button
                  className="btn-copy"
                  onClick={() => handleCopy(post.text, i)}
                  style={{ fontFamily:"'Rubik', sans-serif", fontSize:12, fontWeight:700, padding:"8px 16px", borderRadius:50, letterSpacing:1 }}
                >
                  {copied === i ? "✅ Скопировано" : "📋 Копировать"}
                </button>
              </div>

              {/* Title */}
              <div style={{ fontFamily:"'Russo One', sans-serif", fontSize:16, color:"#fff", marginBottom:12, letterSpacing:1 }}>
                {post.title}
              </div>

              {/* Text preview */}
              <div style={{
                background:"rgba(0,0,0,0.3)", borderRadius:12, padding:"16px",
                fontSize:14, color:"rgba(255,255,255,0.7)", lineHeight:1.75,
                whiteSpace:"pre-line", borderLeft:`3px solid ${post.color}66`
              }}>
                {post.text}
              </div>
            </div>
          ))}
        </div>

        {/* Tip */}
        <div style={{
          marginTop:32, background:"rgba(255,200,0,0.06)", border:"1px solid rgba(255,200,0,0.15)",
          borderRadius:16, padding:"20px 22px"
        }}>
          <div style={{ fontSize:13, fontWeight:700, color:"rgba(255,200,0,0.8)", letterSpacing:2, marginBottom:8 }}>💡 СОВЕТ</div>
          <div style={{ fontSize:14, color:"rgba(255,255,255,0.55)", lineHeight:1.7 }}>
            Замени <span style={{ color:"rgba(255,200,0,0.7)", fontWeight:700 }}>@[ваш_канал]</span> на ссылку своего Telegram-канала, а <span style={{ color:"rgba(255,200,0,0.7)", fontWeight:700 }}>[число]</span> — на реальное количество подписчиков. Публикуй раз в 1–2 дня для максимального эффекта.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warmup;