// Portfolio sections. Voice: first-person, plain, specific.

const { useState: useStateS, useEffect: useEffectS, useMemo } = React;

function Hero() {
  const D = window.PORTFOLIO_DATA;
  return (
    <section className="hero" id="top" data-screen-label="Hero">
      <aside className="hero-rail">
        <div>Portfolio — 2026</div>
        <div className="divider" />
        <div>NYC · EDT</div>
        <div>MS Data Science</div>
        <div>NYU · CDS</div>
        <div className="divider" />
        <div>v 2026.04</div>
      </aside>

      <div className="hero-main">
        <h1>
          I like messy<br/>
          <em>problems</em> and<br/>
          careful models.
        </h1>
        <p className="hero-manifesto">
          Hey, I'm <strong>Amaan</strong>. I'm finishing my MS in Data Science at NYU.
          <span className="dim"> Most of my time right now goes into NLP: stylometry on hedge fund letters at Lepercq, knowledge graphs of how people reason across age groups at the Hartley Lab, and a side research thread on making LLMs more reliable. Before NYU I shipped a computer vision pipeline for the UN that actually runs underwater. I care about work that holds up once the data gets weird.</span>
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#projects">
            See selected work <Icon.ArrowUpRight />
          </a>
          <a className="btn" href={D.SOCIAL.resume} target="_blank" rel="noreferrer">
            Résumé <Icon.Download />
          </a>
          <a className="btn" href={`mailto:${D.SOCIAL.email}`}>
            Get in touch <Icon.ArrowUpRight />
          </a>
        </div>
      </div>

      <aside className="hero-side">
        <div className="portrait-frame">
          <img src="assets/portrait.png" alt="Portrait of Amaan Mansuri" />
          <div className="portrait-label">That's me</div>
        </div>
        <div className="status-card">
          <div className="ping">
            <span className="ping-dot" />
            Open to Summer & Full-time 2026 roles
          </div>
          <ul className="status-list">
            <li>NLP research</li>
            <li>Applied ML engineering</li>
            <li>Quant research</li>
            <li>Founding DS at AI startups</li>
          </ul>
        </div>
      </aside>
    </section>
  );
}

function SectionShell({ num, kicker, title, lede, id, children, screenLabel }) {
  return (
    <section className="section" id={id} data-screen-label={screenLabel || id}>
      <div className="section-rail">
        <span className="num-big">{num}</span>
        {kicker}
      </div>
      <div>
        <h2 className="section-title">{title}</h2>
        {lede && <p className="section-lede">{lede}</p>}
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <SectionShell
      id="about"
      num="01"
      kicker="About"
      title="Short version: Ahmedabad to New York, CS to data science, curious about most things in between."
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, maxWidth: 900 }} className="about-grid">
        <p style={{ color: "var(--fg-muted)", fontSize: 16, lineHeight: 1.65, margin: 0 }}>
          I grew up in India and studied Computer Science at Nirma University. That's where I got hooked on research. I spent undergrad bouncing between ML internships, a couple of publications, and one long project on handwritten digits in four languages.
        </p>
        <p style={{ color: "var(--fg-muted)", fontSize: 16, lineHeight: 1.65, margin: 0 }}>
          Now I'm at NYU's Center for Data Science, graduating May 2026. My work tends to sit in three places: <strong style={{ color: "var(--fg)" }}>NLP for finance</strong>, <strong style={{ color: "var(--fg)" }}>computational cognition</strong>, and <strong style={{ color: "var(--fg)" }}>computer vision that has to survive real conditions</strong>. Outside of that I read too much, play football when the weather allows, and keep a running list of hackathon ideas I'll probably never build.
        </p>
      </div>
    </SectionShell>
  );
}

function Experience() {
  const D = window.PORTFOLIO_DATA;
  const [openIdx, setOpenIdx] = useStateS(0);

  return (
    <SectionShell
      id="experience"
      num="02"
      kicker="Experience"
      title="Where I've worked and what I actually did."
      lede="Seven roles across academic labs, industry R&D, and applied AI engineering. Click any row to open it up."
    >
      <div className="exp-list">
        {D.EXPERIENCE.map((e, i) => (
          <div
            key={i}
            className={"exp-row " + (openIdx === i ? "open" : "")}
            onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
            role="button"
            tabIndex="0"
          >
            <div className="exp-date">{e.date}</div>
            <div className="exp-main">
              <div className="exp-role">{e.role}</div>
              <div className="exp-org">{e.org} · <span style={{ color: "var(--fg-faint)" }}>{e.location}</span></div>
              <div className="exp-tags">
                {e.tags.map((t) => (
                  <span key={t} className={"tag " + (t === "Current" ? "tag-accent" : "")}>{t}</span>
                ))}
              </div>
              <div className="exp-detail">
                <div>
                  <ul>
                    {e.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                  </ul>
                </div>
              </div>
            </div>
            <div className="exp-arrow">→</div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function Projects() {
  const D = window.PORTFOLIO_DATA;
  const allTags = useMemo(() => {
    const s = new Set();
    D.PROJECTS.forEach(p => p.tags.forEach(t => s.add(t)));
    return ["All", ...Array.from(s)];
  }, []);
  const [filter, setFilter] = useStateS("All");
  const shown = filter === "All" ? D.PROJECTS : D.PROJECTS.filter(p => p.tags.includes(filter));

  return (
    <SectionShell
      id="projects"
      num="03"
      kicker="Selected work"
      title="A few things I'm proud of."
      lede="Treat each card like a paper abstract. What it is, the numbers that matter, where the code lives."
    >
      <div className="proj-filters">
        {allTags.map(t => (
          <button
            key={t}
            className={"filter-btn " + (filter === t ? "active" : "")}
            onClick={() => setFilter(t)}
          >{t}</button>
        ))}
      </div>

      <div className="proj-grid">
        {shown.map((p, i) => {
          const Fig = window.FIGURES[p.figure];
          return (
            <article key={p.id} className={"proj-card " + (p.featured ? "featured" : "")}>
              <div className="proj-head">
                <div>
                  <div className="eyebrow" style={{ marginBottom: 6 }}>Figure {String(i + 1).padStart(2, "0")}</div>
                  <div className="proj-title">{p.title}</div>
                </div>
                <div className="proj-meta">{p.meta}</div>
              </div>

              <div className="proj-figure">
                <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--fg-muted)" }}>
                  {Fig ? <Fig /> : null}
                </div>
                <div className="proj-figure-label">Fig {String(i + 1).padStart(2, "0")} · Schematic, not to scale</div>
              </div>

              <p className="proj-desc">{p.desc}</p>

              {p.metrics && (
                <div className="proj-metrics">
                  {p.metrics.map((m, mi) => (
                    <div key={mi}>
                      <div className="metric-val">{m.v}</div>
                      <div className="metric-label">{m.l}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="proj-footer">
                <div className="proj-tags">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <div className="proj-links">
                  {p.links.map((l, li) => (
                    <a key={li} href={l.href} target="_blank" rel="noreferrer">
                      {l.label} <Icon.ArrowUpRight />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}

function Publications() {
  const D = window.PORTFOLIO_DATA;
  return (
    <SectionShell
      id="publications"
      num="04"
      kicker="Publications & Awards"
      title="Papers and a few nice emails."
    >
      <div className="pub-list" style={{ marginBottom: 48 }}>
        {D.PUBLICATIONS.map((p, i) => (
          <a key={i} href={p.href} target="_blank" rel="noreferrer" className="pub-item">
            <div className="pub-year">{p.year}</div>
            <div>
              <div className="pub-title">{p.title}</div>
              <div className="pub-link">Read paper <Icon.ArrowUpRight /></div>
            </div>
            <div className="pub-venue">{p.venue}</div>
          </a>
        ))}
      </div>

      <div className="eyebrow" style={{ marginBottom: 14 }}>Awards</div>
      <div className="tile-grid">
        {D.AWARDS.map((a, i) => (
          <div key={i} className="tile">
            <span className="eyebrow">{a.eyebrow}</span>
            <div className="tile-title">{a.title}</div>
            <div className="tile-sub">{a.sub}</div>
            <div className="tile-meta">{a.meta}</div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function Skills() {
  const D = window.PORTFOLIO_DATA;
  return (
    <SectionShell
      id="skills"
      num="05"
      kicker="Stack"
      title="Tools I reach for."
    >
      <div className="skills-grid">
        {D.SKILLS.map((s) => (
          <div key={s.group} className="skill-col">
            <h4>{s.group}</h4>
            <div className="skill-list">
              {s.items.map(i => <span key={i} className="skill-chip">{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function Education() {
  const D = window.PORTFOLIO_DATA;
  return (
    <SectionShell
      id="education"
      num="06"
      kicker="Education"
      title="Two degrees, two continents."
    >
      <div className="tile-grid">
        {D.EDUCATION.map((e, i) => (
          <div key={i} className="tile">
            <span className="eyebrow">{e.eyebrow}</span>
            <div className="tile-title">{e.title}</div>
            <div className="tile-sub">{e.sub}</div>
            <div className="tile-meta">{e.meta}</div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function Writing() { return null; }

function Contact() {
  const D = window.PORTFOLIO_DATA;
  return (
    <section className="section" id="contact" data-screen-label="Contact">
      <div className="section-rail">
        <span className="num-big">07</span>
        Contact
      </div>
      <div>
        <div className="contact-box">
          <div className="eyebrow" style={{ marginBottom: 18 }}>↳ Say hello</div>
          <h2 className="contact-title">
            Working on something interesting? <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Let's talk.</em>
          </h2>
          <p style={{ color: "var(--fg-muted)", fontSize: 17, maxWidth: "52ch", margin: 0 }}>
            I'm looking for summer and full-time 2026 roles. NLP research, applied ML, quant, or founding DS at early-stage AI teams. I reply quickly to clear, specific messages.
          </p>
          <div className="contact-links">
            <a className="btn btn-primary" href={`mailto:${D.SOCIAL.email}`}>
              {D.SOCIAL.email} <Icon.ArrowUpRight />
            </a>
            <a className="btn" href={D.SOCIAL.linkedin} target="_blank" rel="noreferrer">LinkedIn <Icon.ArrowUpRight /></a>
            <a className="btn" href={D.SOCIAL.github} target="_blank" rel="noreferrer">GitHub <Icon.ArrowUpRight /></a>
            <a className="btn" href={D.SOCIAL.scholar} target="_blank" rel="noreferrer">Scholar <Icon.ArrowUpRight /></a>
            <a className="btn" href={D.SOCIAL.resume} target="_blank" rel="noreferrer">Résumé <Icon.Download /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, About, Experience, Projects, Publications, Skills, Education, Contact });
