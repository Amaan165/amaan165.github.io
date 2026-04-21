// Small UI pieces: theme toggle, tweaks panel, icons.

const { useState, useEffect, useRef } = React;

const Icon = {
  Sun: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" />
    </svg>
  ),
  Moon: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeLinejoin="round" />
    </svg>
  ),
  Sliders: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" strokeLinecap="round" />
    </svg>
  ),
  ArrowUpRight: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Download: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Close: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  ),
};

function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      className="icon-btn"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      title={theme === "dark" ? "Switch to light" : "Switch to dark"}
    >
      {theme === "dark" ? <Icon.Sun /> : <Icon.Moon />}
    </button>
  );
}

const ACCENT_PRESETS = [
  { name: "Violet", h: 268 },
  { name: "Electric", h: 240 },
  { name: "Teal", h: 195 },
  { name: "Lime", h: 130 },
  { name: "Amber", h: 60 },
  { name: "Terracotta", h: 30 },
  { name: "Rose", h: 10 },
];

function TweaksPanel({ open, onClose, accent, setAccent }) {
  if (!open) return null;
  return (
    <div className="tweaks-panel" role="dialog" aria-label="Tweaks">
      <div className="tweaks-head">
        <span className="tweaks-title">Tweaks</span>
        <button className="icon-btn" style={{ width: 26, height: 26 }} onClick={onClose} aria-label="Close">
          <Icon.Close />
        </button>
      </div>
      <div className="tweaks-row">
        <div className="tweaks-label">Accent hue</div>
        <div className="hue-swatches">
          {ACCENT_PRESETS.map((p) => (
            <div
              key={p.h}
              role="button"
              title={p.name}
              className={"hue-sw " + (accent === p.h ? "active" : "")}
              onClick={() => setAccent(p.h)}
              style={{ background: `oklch(0.62 0.16 ${p.h})` }}
            />
          ))}
        </div>
      </div>
      <div className="tweaks-row">
        <div className="tweaks-label">Fine-tune ({accent}°)</div>
        <input
          className="tweaks-slider"
          type="range"
          min="0"
          max="360"
          value={accent}
          onChange={(e) => setAccent(parseInt(e.target.value, 10))}
        />
      </div>
    </div>
  );
}

function TweaksFab({ onClick }) {
  return (
    <button className="icon-btn" onClick={onClick} aria-label="Open Tweaks" title="Tweaks">
      <Icon.Sliders />
    </button>
  );
}

Object.assign(window, { Icon, ThemeToggle, TweaksPanel, TweaksFab, ACCENT_PRESETS });
