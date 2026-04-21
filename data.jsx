// Portfolio content, single source of truth.

const SOCIAL = {
  email: "amaan.mansuri@nyu.edu",
  phone: "+1 (562) 209-6787",
  github: "https://github.com/Amaan165",
  linkedin: "https://www.linkedin.com/in/amaanmansuri/",
  scholar: "https://scholar.google.com/citations?user=B314Lw0AAAAJ&hl=en",
  resume: "assets/Resume_AmaanMansuri.pdf",
};

const EXPERIENCE = [
  {
    date: "Feb 2026 to Present",
    role: "Data Science Intern, NLP",
    org: "Lepercq de Neuflize Asset Management",
    location: "New York, USA",
    tags: ["NLP", "Quant", "Python", "Current"],
    bullets: [
      "Built an end-to-end NLP pipeline for stylometric analysis of hedge-fund investor letters. The pipeline covers ingestion, cleaning, sectioning, classification, and lexical/syntactic/semantic feature extraction.",
      "Engineered author- and period-level signals (style consistency, readability, sentiment, stance, topic drift) to flag shifts in manager communication patterns.",
      "Automated comparative workflows across 15+ funds and multi-year horizons, reducing manual text-triage time by 60%.",
    ],
  },
  {
    date: "Mar 2025 to Present",
    role: "Research Assistant, NLP",
    org: "Hartley Lab · NYU Psychology",
    location: "New York, USA",
    tags: ["NLP", "Research", "Knowledge Graphs"],
    bullets: [
      "Built a web-scraping pipeline collecting 15,000+ metadata entries from books and media, cutting manual stimuli-search time by 60%.",
      "Proposed and implemented knowledge-graph models with NetworkX to simulate semantic relationships across age groups, boosting prediction accuracy by 25% over vector-similarity baselines.",
      "Designed story-based experimental tasks and data-processing workflows supporting research that bridges cognitive neuroscience and computational modeling.",
    ],
  },
  {
    date: "Sep 2025 to Dec 2025",
    role: "AI/ML Research Engineer, CV",
    org: "United Nations Development Programme",
    location: "New York, USA",
    tags: ["Computer Vision", "YOLO", "Production"],
    bullets: [
      "Designed and deployed an underwater fish-detection pipeline for marine biodiversity monitoring. Covers dataset curation, QA, feature engineering, and preprocessing that survives turbidity and low contrast.",
      "Achieved 70.1% mAP50 via a 5-model Weighted Boxes Fusion ensemble under a 70MB edge-deployment constraint; benchmarked YOLOv11 across 60+ hyperparameter experiments.",
      "Integrated multi-object tracking for real-time species monitoring on underwater video, enabling VR-based tourism without habitat disruption.",
    ],
  },
  {
    date: "Jan 2024 to Jun 2024",
    role: "R&D Intern",
    org: "Johnson Controls-Hitachi Air Conditioning",
    location: "Ahmedabad, India",
    tags: ["Embedded", "Android", "UART"],
    bullets: [
      "Engineered a Bluetooth/UART communication system leveraging signal-quality and diagnostic data, improving connection reliability by 33% under non-line-of-sight conditions.",
      "Designed an Android app emulating IR-remote functionality, cutting device response latency by 40% via data-driven protocol tuning.",
      "Extended effective communication range from 7m to 55m through range-performance testing.",
    ],
  },
  {
    date: "Aug 2023 to Dec 2023",
    role: "Research Assistant",
    org: "Nirma University",
    location: "Ahmedabad, India",
    tags: ["XGBoost", "Multilingual", "DL"],
    bullets: [
      "Developed a multilingual handwritten-digit classifier using a multiplexer-based approach for Urdu, Gujarati, Hindi, and Bengali.",
      "Used XGBoost to predict viscosity and density of synthetic chemical solvents.",
    ],
  },
  {
    date: "May 2023 to Jul 2023",
    role: "ML Intern, Center of Excellence in Data Science",
    org: "Nirma University",
    location: "Ahmedabad, India",
    tags: ["Segmentation", "Mask R-CNN"],
    bullets: [
      "Built a system to segment blister packets for QR-code printing, preserving 100% of key information (expiry, batch).",
      "Executed a segmentation solution using Mask R-CNN and VIA, reducing manual inspection time by 50%.",
    ],
  },
  {
    date: "Jun 2022 to Jul 2022",
    role: "ML Intern",
    org: "VitaOne",
    location: "Ahmedabad, India",
    tags: ["Healthcare", "RF", "SVM"],
    bullets: [
      "Standardized 5,000+ patient records into a unified data pipeline, enabling a 40% increase in reporting efficiency.",
      "Built a classifier (Random Forest + SVM) to identify patient deficiencies, lifting diagnostic accuracy by 32%.",
    ],
  },
];

const PROJECTS = [
  {
    id: "gepa",
    title: "GEPA for LLM Reliability",
    meta: "2025 · Research",
    desc: "A reflective prompt-engineering system using the GEPA methodology to improve generative-AI reliability on fact-checking (HoVer) and code generation (HumanEval). Extended with a novel few-shot-aware variant; systematic multi-model analysis across GPT-4.1 mini, GPT-3.5 Turbo, and Qwen 3-8B.",
    tags: ["LLMs", "NLP", "Research"],
    metrics: [
      { v: "100%", l: "Pass@1 · HumanEval" },
      { v: "+32.81pp", l: "Qwen 3-8B · Pass@5" },
      { v: "5", l: "iterations, no finetune" },
    ],
    figure: "gepa-figure",
    links: [
      { label: "GitHub", href: "https://github.com/Amaan165" },
      { label: "Blog", href: "#writing" },
    ],
    featured: true,
  },
  {
    id: "undp-fish",
    title: "Underwater Fish Detection",
    meta: "2025 · UNDP",
    desc: "Production CV pipeline for marine biodiversity monitoring. Robust preprocessing for blue tint, low contrast, turbidity. 5-model Weighted Boxes Fusion ensemble under a 70MB edge constraint, with multi-object tracking for real-time species monitoring.",
    tags: ["Computer Vision", "Production"],
    metrics: [
      { v: "70.1%", l: "mAP@50" },
      { v: "5×", l: "ensemble models" },
      { v: "60+", l: "YOLOv11 experiments" },
    ],
    figure: "fish-figure",
    links: [{ label: "Case study", href: "#" }],
    featured: false,
  },
  {
    id: "flight-wx",
    title: "flight-wx",
    meta: "2025 · Big Data",
    desc: "Real-time flight-delay tracking system integrating FAA and NOAA APIs with flexible city-to-airport queries. Modular ETL with batch ingestion, intelligent caching, and multi-airport resolution across 400+ U.S. airports.",
    tags: ["Big Data", "APIs"],
    metrics: [
      { v: "400+", l: "U.S. airports" },
      { v: "−70%", l: "redundant API hits" },
      { v: "3×", l: "ingestion speedup" },
    ],
    figure: "flight-figure",
    links: [{ label: "GitHub", href: "https://github.com/Amaan165" }],
    featured: false,
  },
];

const PUBLICATIONS = [
  {
    year: "2024",
    title: "Multilingual Handwritten Digit Recognition Using Multiplexer-Based Deep Learning Models",
    venue: "IEEE · 15th ICCCNT",
    href: "https://ieeexplore.ieee.org/document/10725046",
  },
  {
    year: "2024",
    title: "High-Precision Estimation of DES Density and Viscosity using XGBoost: Experimental Insights and Modelling",
    venue: "Springer · Journal of Solution Chemistry",
    href: "https://link.springer.com/article/10.1007/s10953-024-01403-6",
  },
];

const AWARDS = [
  {
    eyebrow: "Spring 2026 · NYU Wasserman",
    title: "Violet Internship & Research Award (VIRA)",
    sub: "Selected from a competitive pool for meaningful internship and research work. Recognized by NYU's Wasserman Center for Career Development.",
    meta: "New York University",
  },
  {
    eyebrow: "2024 · Voxel51 & MongoDB",
    title: "Visual AI Hackathon, 1st place (Advanced Track)",
    sub: "Built a 3D computer vision system that flags blind spots in surveillance coverage by reconstructing indoor spaces (COLMAP) and comparing extracted floorplans against ground truth. With Varun Deliwala.",
    meta: "New York, NY",
  },
  {
    eyebrow: "2024 · Fractal Tech",
    title: "Self-Improving Voice Agents Hackathon, 2nd place",
    sub: "AI Voice Therapist: a conversational agent that refines its own prompts after each session, remembers past context via long-term memory, and uses ElevenLabs for expressive voice synthesis, with safety guardrails on sensitive topics.",
    meta: "New York, NY",
  },
  {
    eyebrow: "National · Infocusp Innovations",
    title: "MiNeD Hackathon, 1st Prize (Stock Price Prediction track)",
    sub: "Led Team Tensor at the national MiNeD Hackathon (Nirma University x Binghamton CS). Shipped a hybrid Spearman's rank + rule-based model for stock price pattern prediction.",
    meta: "Ahmedabad, India",
  },
];

const EDUCATION = [
  {
    eyebrow: "2024 to 2026 (expected)",
    title: "M.S. in Data Science",
    sub: "New York University · Center for Data Science",
    meta: "New York, USA",
  },
  {
    eyebrow: "2020 to 2024",
    title: "B.Tech in Computer Science & Engineering",
    sub: "Nirma University · Institute of Technology",
    meta: "Ahmedabad, India",
  },
];

const SKILLS = [
  {
    group: "Languages",
    items: ["Python", "SQL", "Java", "C++", "Bash"],
  },
  {
    group: "ML / NLP",
    items: ["PyTorch", "TensorFlow", "JAX", "scikit-learn", "Hugging Face", "Transformers", "OpenCV", "NLTK", "spaCy", "LangChain", "RAG"],
  },
  {
    group: "Data & Infra",
    items: ["NumPy", "Pandas", "Spark", "Dask", "Docker", "Airflow", "MLflow", "AWS", "GCP", "FastAPI", "Git"],
  },
];

const WRITING = [
  {
    date: "2025.11",
    title: "Reflective prompt engineering, practically: what GEPA buys you on real tasks",
    read: "8 min read",
    href: "#",
  },
  {
    date: "2025.10",
    title: "Underwater CV in the field: what breaks when the water is murky",
    read: "6 min read",
    href: "#",
  },
  {
    date: "2025.06",
    title: "Stylometry for hedge-fund letters: what the prose tells you",
    read: "10 min read",
    href: "#",
  },
];

window.PORTFOLIO_DATA = { SOCIAL, EXPERIENCE, PROJECTS, PUBLICATIONS, AWARDS, EDUCATION, SKILLS, WRITING };
