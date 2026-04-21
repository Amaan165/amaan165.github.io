// Main app — wires sections, theme, scroll-spy, tweaks.

const { useState: useStateA, useEffect: useEffectA, useRef: useRefA } = React;

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Pubs" },
  { id: "skills", label: "Stack" },
  { id: "education", label: "Edu" },
  { id: "contact", label: "Contact" },
];

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentHue": 268
}/*EDITMODE-END*/;

function App() {
  // Theme
  const [theme, setTheme] = useStateA(() => {
    try { return localStorage.getItem("pf-theme") || "light"; } catch { return "light"; }
  });
  useEffectA(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("pf-theme", theme); } catch {}
  }, [theme]);

  // Accent hue (tweakable)
  const [accent, setAccent] = useStateA(() => {
    try {
      const v = localStorage.getItem("pf-accent");
      return v ? parseInt(v, 10) : TWEAK_DEFAULTS.accentHue;
    } catch { return TWEAK_DEFAULTS.accentHue; }
  });
  useEffectA(() => {
    document.documentElement.style.setProperty("--accent-h", accent);
    try { localStorage.setItem("pf-accent", String(accent)); } catch {}
  }, [accent]);

  // Tweaks: edit-mode handshake
  const [editOn, setEditOn] = useStateA(false);
  useEffectA(() => {
    function onMsg(ev) {
      const d = ev.data;
      if (!d || typeof d !== "object") return;
      if (d.type === "__activate_edit_mode") setEditOn(true);
      if (d.type === "__deactivate_edit_mode") setEditOn(false);
    }
    window.addEventListener("message", onMsg);
    try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch {}
    return () => window.removeEventListener("message", onMsg);
  }, []);

  // Persist accent via host when changed
  useEffectA(() => {
    try {
      window.parent.postMessage(
        { type: "__edit_mode_set_keys", edits: { accentHue: accent } },
        "*"
      );
    } catch {}
  }, [accent]);

  // Scroll spy
  const [activeId, setActiveId] = useStateA("top");
  useEffectA(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    document.querySelectorAll("section[id]").forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // Reveal on scroll
  useEffectA(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("in");
      });
    }, { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const [tweaksOpen, setTweaksOpen] = useStateA(false);

  return (
    <>
      {/* Top bar */}
      <nav className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="#top">
            <span className="dot" />
            Amaan Mansuri
          </a>
          <div className="nav-links">
            {NAV.map(n => (
              <a key={n.id} href={`#${n.id}`} className={activeId === n.id ? "active" : ""}>
                {n.label}
              </a>
            ))}
          </div>
          <div className="topbar-actions">
            {editOn && <TweaksFab onClick={() => setTweaksOpen(o => !o)} />}
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </div>
      </nav>

      {/* Page */}
      <main className="page">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Skills />
        <Education />
        <Writing />
        <Contact />        <footer className="footer">
          <div>© 2026 — Amaan Mansuri · New York</div>
          <div>Built from scratch · No templates · Instrument Serif + Inter + JetBrains Mono</div>
        </footer>
      </main>

      {editOn && (
        <TweaksPanel
          open={tweaksOpen}
          onClose={() => setTweaksOpen(false)}
          accent={accent}
          setAccent={setAccent}
        />
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
