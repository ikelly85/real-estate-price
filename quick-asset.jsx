import { useState } from "react";

const TABS = [
  { id: "owned", label: "보유단지" },
  { id: "watch", label: "관심단지" },
  { id: "stock", label: "주식" },
];

const OWNED = [
  {
    id: "mh1",
    name: "내 집 현황",
    sub: "네이버 부동산 마이하우스",
    url: "https://neo.land.naver.com/myhouse/5637",
    color: "#f472b6",
    icon: "🏡",
  },
  {
    id: "o1",
    name: "과천위버필드",
    sub: "경기 과천",
    url: "https://fin.land.naver.com/complexes/120960?tab=transaction&transactionPyeongTypeNumber=1&transactionTradeType=A1",
    color: "#60a5fa",
    icon: "🏢",
  },
  {
    id: "o2",
    name: "래미안하이어스",
    sub: "경기",
    url: "https://fin.land.naver.com/complexes/101283?tab=transaction&transactionPyeongTypeNumber=2&transactionTradeType=A1",
    color: "#60a5fa",
    icon: "🏢",
  },
  {
    id: "o3",
    name: "광교힐스테이트레이크",
    sub: "경기 수원",
    url: "https://fin.land.naver.com/complexes/105468?isVilla=false",
    color: "#60a5fa",
    icon: "🏢",
  },
  {
    id: "o4",
    name: "양지5단지한양",
    sub: "경기",
    url: "https://fin.land.naver.com/complexes/1994?tab=transaction&transactionPyeongTypeNumber=3&transactionTradeType=A1",
    color: "#60a5fa",
    icon: "🏢",
  },
  {
    id: "o5",
    name: "오승다세대",
    sub: "다세대주택",
    url: "https://fin.land.naver.com/complexes/621123?isVilla=true",
    color: "#a78bfa",
    icon: "🏠",
  },
];

const WATCH = [
  {
    id: "w1",
    name: "매화마을주공3단지",
    sub: "관심단지",
    url: "https://fin.land.naver.com/complexes/2174?isVilla=false",
    color: "#fb923c",
    icon: "🏢",
  },
  {
    id: "w2",
    name: "초원7단지부영",
    sub: "관심단지",
    url: "https://fin.land.naver.com/complexes/2595?tab=transaction&transactionPyeongTypeNumber=2&transactionTradeType=A1",
    color: "#fb923c",
    icon: "🏢",
  },
  {
    id: "w3",
    name: "화서역푸르지오더에듀포레",
    sub: "관심단지",
    url: "https://fin.land.naver.com/complexes/23880?isVilla=false",
    color: "#fb923c",
    icon: "🏢",
  },
  {
    id: "w4",
    name: "성산시영",
    sub: "관심단지",
    url: "https://fin.land.naver.com/complexes/410?tab=transaction&transactionPyeongTypeNumber=2&transactionTradeType=A1",
    color: "#fb923c",
    icon: "🏢",
  },
  {
    id: "w5",
    name: "까치롯데선경",
    sub: "관심단지",
    url: "https://fin.land.naver.com/complexes/2591?tab=transaction&transactionPyeongTypeNumber=2&transactionTradeType=A1",
    color: "#fb923c",
    icon: "🏢",
  },
  {
    id: "w6",
    name: "장미마을현대",
    sub: "관심단지",
    url: "https://fin.land.naver.com/complexes/2229?tab=transaction&transactionPyeongTypeNumber=1&transactionTradeType=A1",
    color: "#fb923c",
    icon: "🏢",
  },
  {
    id: "w7",
    name: "DMC한강삼정그린코아더베스트",
    sub: "관심단지",
    url: "https://fin.land.naver.com/complexes/137761?isVilla=false",
    color: "#fb923c",
    icon: "🏢",
  },
  {
    id: "w8",
    name: "힐스테이트금정역",
    sub: "관심단지",
    url: "https://fin.land.naver.com/complexes/121278?tab=transaction&transactionPyeongTypeNumber=11&transactionTradeType=A1",
    color: "#fb923c",
    icon: "🏢",
  },
  {
    id: "w9",
    name: "e편한세상청계센트럴포레",
    sub: "관심단지",
    url: "https://fin.land.naver.com/complexes/125111?tab=transaction&transactionPyeongTypeNumber=2&transactionTradeType=A1",
    color: "#fb923c",
    icon: "🏢",
  },
];

const STOCKS = [
  {
    id: "s1",
    name: "내 주식 보유현황",
    sub: "네이버페이 마이데이터",
    url: "https://pay.naver.com/mydata/myasset/invest/stock",
    color: "#34d399",
    icon: "📈",
  },
  {
    id: "s2",
    name: "주식 시황",
    sub: "네이버 증권",
    url: "https://m.stock.naver.com/my/holding",
    color: "#34d399",
    icon: "📊",
  },
];

const TAB_DATA = { owned: OWNED, watch: WATCH, stock: STOCKS };
const TAB_COLORS = { owned: "#60a5fa", watch: "#fb923c", stock: "#34d399" };

function LinkCard({ link, hovered, pressed, onEnter, onLeave, onDown, onUp }) {
  const isHov = hovered === link.id;
  const isPrs = pressed === link.id;
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseDown={onDown}
      onMouseUp={onUp}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 18px",
        borderRadius: 10,
        background: isHov ? "linear-gradient(135deg,#161b27 0%,#1a2035 100%)" : "#111520",
        border: `1px solid ${isHov ? link.color + "55" : "#1e2535"}`,
        textDecoration: "none",
        cursor: "pointer",
        transform: isPrs ? "scale(0.985)" : "scale(1)",
        transition: "all 0.15s ease",
        boxShadow: isHov ? `0 0 0 1px ${link.color}22, 0 4px 20px #00000040` : "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 8,
          background: `${link.color}18`, border: `1px solid ${link.color}33`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 16, flexShrink: 0,
        }}>
          {link.icon}
        </div>
        <div>
          <div style={{
            fontSize: 14, fontWeight: 500,
            color: isHov ? "#f1f5f9" : "#cbd5e1",
            marginBottom: 2, transition: "color 0.15s",
          }}>
            {link.name}
          </div>
          <div style={{
            fontSize: 11.5, color: "#475569",
            fontFamily: "'DM Mono', monospace",
          }}>
            {link.sub}
          </div>
        </div>
      </div>
      <div style={{
        display: "flex", alignItems: "center", gap: 6,
        padding: "6px 12px", borderRadius: 6,
        background: isHov ? `${link.color}22` : "transparent",
        border: `1px solid ${isHov ? link.color + "55" : "#2a3045"}`,
        transition: "all 0.15s", flexShrink: 0,
      }}>
        <span style={{
          fontSize: 11.5, fontFamily: "'DM Mono', monospace",
          color: isHov ? link.color : "#475569", transition: "color 0.15s",
        }}>열기</span>
        <span style={{ fontSize: 12, color: isHov ? link.color : "#475569", transition: "color 0.15s" }}>↗</span>
      </div>
    </a>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("owned");
  const [hovered, setHovered] = useState(null);
  const [pressed, setPressed] = useState(null);

  const links = TAB_DATA[activeTab];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0c10",
      fontFamily: "'Noto Sans KR','Apple SD Gothic Neo',sans-serif",
      color: "#e2e8f0",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
      `}</style>

      <div style={{ padding: "28px 24px 0" }}>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 11, color: "#475569",
          letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 6,
        }}>
          Quick Launcher
        </div>
        <h1 style={{
          fontSize: 22, fontWeight: 700,
          color: "#f1f5f9", margin: 0, letterSpacing: "-0.02em",
        }}>
          부동산 &amp; 주식 바로가기
        </h1>
      </div>

      <div style={{
        display: "flex", gap: 4,
        padding: "20px 24px 0",
        borderBottom: "1px solid #1e2535",
      }}>
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          const color = TAB_COLORS[tab.id];
          return (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setHovered(null); setPressed(null); }}
              style={{
                padding: "8px 16px",
                borderRadius: "8px 8px 0 0",
                border: "1px solid",
                borderBottom: isActive ? "1px solid #0a0c10" : "1px solid #1e2535",
                borderColor: isActive ? `${color}55` : "#1e2535",
                background: isActive ? "#111520" : "transparent",
                color: isActive ? color : "#475569",
                fontFamily: "'Noto Sans KR', sans-serif",
                fontSize: 13,
                fontWeight: isActive ? 600 : 400,
                cursor: "pointer",
                transition: "all 0.15s",
                position: "relative",
                bottom: -1,
                whiteSpace: "nowrap",
              }}
            >
              {isActive && (
                <span style={{
                  display: "inline-block",
                  width: 6, height: 6, borderRadius: "50%",
                  background: color, marginRight: 6,
                  boxShadow: `0 0 6px ${color}`,
                  verticalAlign: "middle", marginBottom: 1,
                }} />
              )}
              {tab.label}
            </button>
          );
        })}
      </div>

      <div style={{ padding: "20px 24px 32px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {links.map((link) => (
            <LinkCard
              key={link.id}
              link={link}
              hovered={hovered}
              pressed={pressed}
              onEnter={() => setHovered(link.id)}
              onLeave={() => { setHovered(null); setPressed(null); }}
              onDown={() => setPressed(link.id)}
              onUp={() => setPressed(null)}
            />
          ))}
        </div>
      </div>

      <div style={{
        margin: "0 24px 24px",
        paddingTop: 20,
        borderTop: "1px solid #1e2535",
        fontFamily: "'DM Mono', monospace",
        fontSize: 10.5, color: "#334155",
        textAlign: "center", letterSpacing: "0.05em",
      }}>
        클릭하면 새 탭에서 열립니다
      </div>
    </div>
  );
}