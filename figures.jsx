// Figure SVGs for project cards — abstract, schematic, paper-diagram style.
// Uses currentColor + accent var so they flip with theme.

const FigGEPA = () => (
  <svg viewBox="0 0 420 160" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ display: "block" }}>
    <g fill="none" stroke="currentColor" strokeWidth="1">
      <rect x="10" y="30" width="70" height="28" rx="2" />
      <rect x="10" y="68" width="70" height="28" rx="2" />
      <rect x="10" y="106" width="70" height="28" rx="2" />
      <text x="15" y="48" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="currentColor" stroke="none">prompt_v0</text>
      <text x="15" y="86" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="currentColor" stroke="none">reflect()</text>
      <text x="15" y="124" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="currentColor" stroke="none">eval @ k=5</text>

      <path d="M80 44 C 130 44, 140 80, 175 82" />
      <path d="M80 82 L 175 82" />
      <path d="M80 120 C 130 120, 140 82, 175 82" />

      <circle cx="183" cy="82" r="8" />
      <text x="179" y="86" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="currentColor" stroke="none">∑</text>

      <path d="M191 82 L 240 82" />
      <rect x="240" y="40" width="110" height="84" rx="2" fill="var(--accent-soft)" stroke="var(--accent-line)" />
      <text x="252" y="60" fontFamily="Instrument Serif, serif" fontSize="14" fill="var(--accent)" stroke="none">Pass@1</text>
      <text x="252" y="84" fontFamily="JetBrains Mono, monospace" fontSize="22" fill="var(--accent)" stroke="none">100%</text>
      <text x="252" y="106" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="currentColor" stroke="none" opacity="0.6">HumanEval · GPT-3.5T</text>

      <path d="M350 82 L 400 82" markerEnd="url(#arrowhead)" />
    </g>
    <defs>
      <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
        <path d="M0,0 L6,4 L0,8" fill="none" stroke="currentColor" />
      </marker>
    </defs>
  </svg>
);

const FigFish = () => (
  <svg viewBox="0 0 420 160" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ display: "block" }}>
    <defs>
      <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="var(--accent)" stopOpacity="0.08" />
        <stop offset="1" stopColor="var(--accent)" stopOpacity="0.02" />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="420" height="160" fill="url(#water)" />
    <g fill="none" stroke="currentColor" strokeWidth="1">
      {/* water lines */}
      {[30, 58, 86, 114, 142].map((y, i) => (
        <path key={i} d={`M0 ${y} Q 50 ${y - 4}, 100 ${y} T 200 ${y} T 300 ${y} T 420 ${y}`} opacity="0.25" />
      ))}
      {/* bounding boxes */}
      <rect x="70" y="60" width="60" height="30" stroke="var(--accent)" strokeWidth="1.2" />
      <text x="72" y="56" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="var(--accent)" stroke="none">fish · 0.94</text>
      <rect x="180" y="90" width="48" height="26" stroke="var(--accent)" strokeWidth="1.2" />
      <text x="182" y="86" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="var(--accent)" stroke="none">fish · 0.87</text>
      <rect x="280" y="70" width="70" height="34" stroke="var(--accent)" strokeWidth="1.2" />
      <text x="282" y="66" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="var(--accent)" stroke="none">fish · 0.91</text>
      {/* fish silhouettes */}
      <path d="M78 75 q 20 -10 40 0 l -8 4 l 8 4 q -20 10 -40 0 z" fill="currentColor" opacity="0.35" stroke="none" />
      <path d="M186 103 q 16 -8 32 0 l -6 3 l 6 3 q -16 8 -32 0 z" fill="currentColor" opacity="0.35" stroke="none" />
      <path d="M288 87 q 24 -12 48 0 l -10 5 l 10 5 q -24 12 -48 0 z" fill="currentColor" opacity="0.35" stroke="none" />
    </g>
  </svg>
);

const FigFlight = () => (
  <svg viewBox="0 0 420 160" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ display: "block" }}>
    <g fill="none" stroke="currentColor" strokeWidth="1">
      {/* grid */}
      {[20, 50, 80, 110, 140].map((y, i) => <line key={i} x1="20" y1={y} x2="400" y2={y} opacity="0.15" />)}
      {[60, 140, 220, 300, 380].map((x, i) => <line key={i} x1={x} y1="20" x2={x} y2="140" opacity="0.15" />)}
      {/* flight paths as arcs */}
      <path d="M60 120 Q 180 20, 380 80" stroke="var(--accent)" strokeWidth="1.2" />
      <path d="M60 90 Q 220 120, 380 40" strokeDasharray="3 3" />
      <path d="M60 60 Q 200 140, 380 120" strokeDasharray="3 3" />
      {/* airport nodes */}
      {[[60,120],[380,80],[60,90],[380,40],[60,60],[380,120]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="var(--bg)" stroke="currentColor" />
      ))}
      <text x="22" y="16" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="currentColor" stroke="none">DELAY (MIN) ·  20 ──── 140</text>
      <text x="330" y="155" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="currentColor" stroke="none">400+ airports</text>
    </g>
  </svg>
);

const FigStock = () => (
  <svg viewBox="0 0 420 160" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ display: "block" }}>
    <g fill="none" stroke="currentColor" strokeWidth="1">
      {/* axis */}
      <line x1="30" y1="140" x2="400" y2="140" />
      <line x1="30" y1="20" x2="30" y2="140" />
      {/* actual price */}
      <path d="M30 110 L 70 100 L 110 115 L 150 90 L 190 80 L 230 95 L 270 70 L 310 60 L 350 75 L 400 50" strokeWidth="1.5" />
      {/* prediction */}
      <path d="M30 115 L 70 105 L 110 112 L 150 92 L 190 85 L 230 98 L 270 72 L 310 62 L 350 74 L 400 52"
            stroke="var(--accent)" strokeDasharray="4 3" strokeWidth="1.5" />
      {/* confidence band */}
      <path d="M30 120 L 400 58 L 400 46 L 30 108 Z" fill="var(--accent)" opacity="0.08" stroke="none" />
      <text x="36" y="32" fontFamily="Instrument Serif, serif" fontSize="14" fill="currentColor" stroke="none">AAPL · 1-day horizon</text>
      <text x="36" y="46" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--accent)" stroke="none">LSTM + FinBERT</text>
      <g fontFamily="JetBrains Mono, monospace" fontSize="8" fill="currentColor" stroke="none" opacity="0.6">
        <text x="380" y="135">t</text>
      </g>
    </g>
  </svg>
);

const FIGURES = {
  "gepa-figure": FigGEPA,
  "fish-figure": FigFish,
  "flight-figure": FigFlight,
  "stock-figure": FigStock,
};

window.FIGURES = FIGURES;
