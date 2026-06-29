import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Award,
  Brain,
  Briefcase,
  Cpu,
  Download,
  Eye,
  FileText,
  Github,
  GraduationCap,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  ScanLine,
  Send,
  Server,
  Sparkles,
  Trophy,
} from "lucide-react";

import { BackgroundFX, ScrollProgress } from "@/components/portfolio/Background";
import { Navbar } from "@/components/portfolio/Navbar";
import { Reveal, SectionHeading } from "@/components/portfolio/Reveal";

import profileImg from "@/assets/bano-profile.jpg";
import carInspectImg from "@/assets/project-carinspect.jpg";
import ragImg from "@/assets/project-rag.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bano Mariam — AI/ML Engineer & Computer Vision" },
      {
        name: "description",
        content:
          "Bano Mariam — Software Engineering graduate building intelligent systems with Computer Vision, OCR, RAG, and LLMs. Open to Associate Software Engineer and AI/ML roles.",
      },
      { property: "og:title", content: "Bano Mariam — AI/ML Engineer & Computer Vision" },
      { property: "og:description", content: "AI/ML, Computer Vision, OCR, RAG & LLM engineer portfolio." },
    ],
  }),
  component: Portfolio,
});

/* -------------------------------- data -------------------------------- */

const HERO_ROLES = [
  "AI & Machine Learning Engineer",
  "Computer Vision Enthusiast",
  "OCR & LLM Developer",
  "Software Engineer",
];

const STATS = [
  { value: "2", label: "Featured AI Projects" },
  { value: "1", label: "Industrial AI Project" },
  { value: "2nd", label: "Position at FYP" },
  { value: "∞", label: "AI & CV Focus" },
];

const WHAT_I_DO = [
  { icon: Brain, title: "AI & Machine Learning", desc: "Designing, training and tuning ML/DL models for real-world problems." },
  { icon: Eye, title: "Computer Vision", desc: "Object detection, segmentation, and visual analytics with OpenCV & YOLO." },
  { icon: ScanLine, title: "OCR & Document Intelligence", desc: "Extracting structured insight from images, scans and PDFs." },
  { icon: Sparkles, title: "Large Language Models", desc: "Prompt engineering, fine-tuning and LLM-powered applications." },
  { icon: FileText, title: "Retrieval-Augmented Generation", desc: "Vector search, embeddings and grounded RAG pipelines." },
  { icon: Server, title: "FastAPI Backend Development", desc: "High-performance Python APIs serving ML models in production." },
  { icon: Cpu, title: "Data Processing & Modeling", desc: "Feature engineering, preprocessing and end-to-end ML workflows." },
  { icon: Rocket, title: "AI Research & Prototyping", desc: "Rapidly turning new AI research into working prototypes." },
];

const SKILLS: { group: string; items: string[] }[] = [
  { group: "Programming Languages", items: ["Python", "Java", "C++", "Dart"] },
  {
    group: "AI & Machine Learning",
    items: ["Machine Learning", "Deep Learning", "Computer Vision", "OCR", "YOLOv8", "LLMs", "RAG", "Image Processing"],
  },
  {
    group: "Libraries & Frameworks",
    items: ["TensorFlow", "OpenCV", "Scikit-learn", "NumPy", "Pandas", "Sentence Transformers", "ChromaDB", "FastAPI", "Flutter", "Firebase"],
  },
  { group: "Tools", items: ["Git", "GitHub", "Docker", "VS Code", "Google Colab"] },
  {
    group: "Core Concepts",
    items: ["REST APIs", "Semantic Search", "Embeddings", "Vector Databases", "Prompt Engineering", "Feature Engineering", "Model Training", "Data Preprocessing"],
  },
];

const CERTS = [
  { title: "IBM AI Practitioner", issuer: "IBM", icon: Award },
  { title: "Supervised Machine Learning", issuer: "Coursera", icon: Brain },
  { title: "Kaggle Python Course", issuer: "Kaggle", icon: FileText },
];

/* ------------------------------- component ------------------------------ */

function Portfolio() {
  return (
    <div className="relative min-h-screen text-foreground">
      <ScrollProgress />
      <BackgroundFX />
      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <WhatIDo />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

/* ---------------------------------- Hero --------------------------------- */

function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const speed = del ? 40 : 70;
    const t = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(current.slice(0, Math.max(0, text.length - 1)));
        if (text.length - 1 <= 0) {
          setDel(false);
          setI((v) => v + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return (
    <span className="text-gradient">
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-caret" style={{ background: "oklch(0.78 0.15 210)" }}>
        &nbsp;
      </span>
    </span>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-5 pt-28">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <Reveal>
            <span className="chip">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ background: "oklch(0.78 0.15 210)" }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "oklch(0.78 0.15 210)" }} />
              </span>
              Available for Associate SE & AI/ML roles
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I'm{" "}
              <span className="text-gradient">Bano Mariam</span>.
              <br />
              <span className="text-foreground/80">I build </span>
              <Typewriter words={HERO_ROLES} />
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Software Engineering graduate from COMSATS University Lahore, specializing in
              Artificial Intelligence, Machine Learning, Computer Vision, OCR and Large
              Language Models. I love building intelligent systems that solve real-world
              problems.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, oklch(0.78 0.15 210), oklch(0.65 0.24 295))",
                  boxShadow: "0 12px 40px -10px oklch(0.65 0.24 295 / 0.6)",
                }}
              >
                View Projects
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors hover:text-foreground"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact Me
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="glass rounded-2xl px-4 py-4">
                  <div className="font-display text-2xl font-semibold text-gradient">{s.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Portrait */}
        <Reveal delay={0.2}>
          <div className="relative mx-auto aspect-square w-[300px] sm:w-[380px] lg:w-[420px]">
            <div
              className="absolute -inset-6 rounded-full blur-2xl opacity-60 animate-float-slow"
              style={{
                background: "conic-gradient(from 180deg at 50% 50%, oklch(0.78 0.15 210 / 0.55), oklch(0.65 0.24 295 / 0.55), oklch(0.7 0.2 320 / 0.55), oklch(0.78 0.15 210 / 0.55))",
              }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, oklch(0.78 0.15 210), oklch(0.65 0.24 295), transparent 50%, oklch(0.78 0.15 210))",
                padding: 3,
              }}
            >
              <div className="h-full w-full rounded-full bg-background" />
            </motion.div>
            <div className="absolute inset-3 overflow-hidden rounded-full glow-purple">
              <img
                src={profileImg}
                alt="Bano Mariam"
                width={420}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>
            {/* floating chips */}
            <div className="absolute -left-4 top-10 glass rounded-2xl px-3 py-2 text-xs font-medium animate-float-slow" style={{ animationDelay: "-2s" }}>
              <div className="flex items-center gap-2">
                <Brain className="h-3.5 w-3.5" style={{ color: "oklch(0.78 0.15 210)" }} />
                AI / ML
              </div>
            </div>
            <div className="absolute -right-4 top-1/3 glass rounded-2xl px-3 py-2 text-xs font-medium animate-float-slow">
              <div className="flex items-center gap-2">
                <Eye className="h-3.5 w-3.5" style={{ color: "oklch(0.65 0.24 295)" }} />
                Computer Vision
              </div>
            </div>
            <div className="absolute -bottom-2 left-8 glass rounded-2xl px-3 py-2 text-xs font-medium animate-float-slow" style={{ animationDelay: "-4s" }}>
              <div className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5" style={{ color: "oklch(0.78 0.15 210)" }} />
                LLMs & RAG
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- About -------------------------------- */

function About() {
  return (
    <section id="about" className="relative px-5 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title={<>Engineering intelligence, <span className="text-gradient">end to end</span>.</>}
        />
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                I recently completed my Bachelor's in Software Engineering from COMSATS
                University Lahore (Graduation 2026). My interests revolve around Artificial
                Intelligence, Machine Learning, Computer Vision, OCR, Deep Learning,
                Retrieval-Augmented Generation (RAG), and Large Language Models.
              </p>
              <p>
                During my industrial Final Year Project at{" "}
                <span className="font-semibold text-foreground">CacheLogic</span>, I
                collaborated on building an AI-powered vehicle inspection system involving
                damage detection, VIN authentication, repaint detection, and fraud detection
                using modern Computer Vision techniques.
              </p>
              <p>
                I enjoy continuously learning emerging AI technologies and applying them to
                solve practical, real-world challenges.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass rounded-3xl p-6">
              <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                <GraduationCap className="h-4 w-4" />
                Education
              </div>
              <div className="relative pl-6">
                <span
                  className="absolute left-0 top-1.5 h-3 w-3 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.78 0.15 210), oklch(0.65 0.24 295))",
                    boxShadow: "0 0 0 4px oklch(0.65 0.24 295 / 0.15)",
                  }}
                />
                <span className="absolute left-[5px] top-5 h-full w-px bg-border" />
                <h3 className="font-display text-lg font-semibold">
                  BS in Software Engineering
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  COMSATS University Islamabad, Lahore Campus
                </p>
                <p className="mt-2 text-xs text-muted-foreground">Graduation Year: 2026</p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-border p-3">
                  <div className="text-xs text-muted-foreground">Location</div>
                  <div className="mt-1 text-sm font-semibold">Lahore, Pakistan</div>
                </div>
                <div className="rounded-2xl border border-border p-3">
                  <div className="text-xs text-muted-foreground">Focus</div>
                  <div className="mt-1 text-sm font-semibold">AI / ML / CV</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Experience ------------------------------ */

function Experience() {
  return (
    <section id="experience" className="relative px-5 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title={<>Hands-on with <span className="text-gradient">production AI</span>.</>}
        />
        <Reveal>
          <div className="relative">
            <span className="absolute left-4 top-3 h-[calc(100%-3rem)] w-px sm:left-6" style={{ background: "linear-gradient(to bottom, oklch(0.78 0.15 210 / 0.5), oklch(0.65 0.24 295 / 0.5), transparent)" }} />
            <div className="relative pl-12 sm:pl-16">
              <span
                className="absolute left-0 top-2 grid h-9 w-9 place-items-center rounded-full sm:left-2"
                style={{
                  background: "linear-gradient(135deg, oklch(0.78 0.15 210), oklch(0.65 0.24 295))",
                  boxShadow: "0 0 0 6px oklch(0.65 0.24 295 / 0.15)",
                }}
              >
                <Briefcase className="h-4 w-4 text-background" />
              </span>

              <div className="glass rounded-3xl p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold sm:text-2xl">
                      Software Engineer Intern
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      CacheLogic · Industrial Final Year Project
                    </p>
                  </div>
                  <span className="chip">Jan 2025 – Jun 2025</span>
                </div>

                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Developed AI-powered vehicle inspection modules.",
                    "Built end-to-end Computer Vision pipelines.",
                    "Implemented VIN recognition using OCR and YOLOv8.",
                    "Developed repaint detection and fraud detection techniques.",
                    "Worked with Python, FastAPI, OpenCV, and Deep Learning.",
                  ].map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                      <span
                        className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ background: "oklch(0.78 0.15 210)" }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-3 rounded-2xl border border-border p-4" style={{ background: "linear-gradient(135deg, oklch(0.65 0.24 295 / 0.1), oklch(0.78 0.15 210 / 0.06))" }}>
                  <span
                    className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl"
                    style={{ background: "linear-gradient(135deg, oklch(0.78 0.15 210), oklch(0.65 0.24 295))" }}
                  >
                    <Trophy className="h-5 w-5 text-background" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold">
                      🏆 Secured 2nd Position — Software Engineering FYPs
                    </div>
                    <div className="text-xs text-muted-foreground">
                      COMSATS University, Lahore Campus
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- Projects ------------------------------- */

type Project = {
  title: string;
  description: string;
  image: string;
  features: string[];
  tech: string[];
  badges: { label: string; tone: "purple" | "cyan" | "gold" }[];
  github?: string;
  demo?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Car Inspect — AI-Powered Vehicle Inspection",
    description:
      "Industrial AI project developed with CacheLogic for automated vehicle inspection — damage, VIN, repaint and fraud detection across a full Computer Vision pipeline.",
    image: carInspectImg,
    features: [
      "Vehicle Damage Detection",
      "VIN & Chassis Recognition",
      "VIN Tampering Detection",
      "Repaint Detection",
      "OCR Pipeline",
      "Image Processing",
    ],
    tech: ["Python", "YOLOv8", "OpenCV", "FastAPI", "OCR", "TensorFlow", "Deep Learning"],
    badges: [
      { label: "Industrial Project", tone: "purple" },
      { label: "🏆 2nd Position FYP", tone: "gold" },
    ],
  },
  {
    title: "RAG Document Intelligence Assistant",
    description:
      "Intelligent RAG application that ingests PDFs, DOCX and Markdown files and answers natural-language questions with source-grounded responses.",
    image: ragImg,
    features: [
      "Semantic Search",
      "Vector Database",
      "Embeddings",
      "Source-grounded Responses",
      "FastAPI Backend",
      "LLM Integration",
    ],
    tech: ["FastAPI", "Sentence Transformers", "ChromaDB", "Python", "Embeddings", "Claude API"],
    badges: [{ label: "Currently Building", tone: "cyan" }],
  },
];

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={index * 0.05}>
      <article className="group glass relative overflow-hidden rounded-3xl">
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {p.badges.map((b) => (
              <span
                key={b.label}
                className="chip backdrop-blur-md"
                style={
                  b.tone === "gold"
                    ? { background: "oklch(0.78 0.16 80 / 0.18)", borderColor: "oklch(0.78 0.16 80 / 0.45)", color: "oklch(0.92 0.1 90)" }
                    : b.tone === "cyan"
                    ? { background: "oklch(0.78 0.15 210 / 0.18)", borderColor: "oklch(0.78 0.15 210 / 0.45)" }
                    : undefined
                }
              >
                {b.label}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-display text-xl font-semibold sm:text-2xl">{p.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {p.tech.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>

          <div
            className="grid overflow-hidden transition-[grid-template-rows] duration-500"
            style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
          >
            <div className="min-h-0">
              <div className="mt-5 rounded-2xl border border-border p-4">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Key Features</div>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: "oklch(0.78 0.15 210)" }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-colors hover:text-foreground"
              style={{ background: "color-mix(in oklab, oklch(0.65 0.24 295) 14%, transparent)", border: "1px solid color-mix(in oklab, oklch(0.65 0.24 295) 30%, transparent)" }}
            >
              {open ? "Hide details" : "View details"}
              <ArrowDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground"
              >
                <Github className="h-3.5 w-3.5" />
                Code
              </a>
            )}
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground"
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative px-5 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title={<>Selected <span className="text-gradient">AI work</span>.</>}
          subtitle="A look at intelligent systems I've built — from production Computer Vision to LLM-powered retrieval."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
          <Reveal delay={0.15}>
            <div className="glass flex h-full min-h-[280px] flex-col items-center justify-center rounded-3xl border border-dashed border-border/80 p-10 text-center md:col-span-2">
              <Sparkles className="h-6 w-6" style={{ color: "oklch(0.78 0.15 210)" }} />
              <h3 className="mt-3 font-display text-lg font-semibold">More projects in the lab</h3>
              <p className="mt-1 max-w-md text-sm text-muted-foreground">
                I'm constantly experimenting with new AI ideas — from agentic workflows to
                vision-language models. Check back soon.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- What I Do ------------------------------- */

function WhatIDo() {
  return (
    <section id="what-i-do" className="relative px-5 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What I Do"
          title={<>From research <span className="text-gradient">to production</span>.</>}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHAT_I_DO.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <div className="group glass relative h-full overflow-hidden rounded-2xl p-5 transition-transform hover:-translate-y-1">
                <div
                  className="grid h-11 w-11 place-items-center rounded-xl transition-transform group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.78 0.15 210 / 0.2), oklch(0.65 0.24 295 / 0.3))",
                    border: "1px solid oklch(0.65 0.24 295 / 0.3)",
                  }}
                >
                  <s.icon className="h-5 w-5" style={{ color: "oklch(0.85 0.1 240)" }} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                <span
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: "oklch(0.65 0.24 295 / 0.35)" }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Skills -------------------------------- */

function Skills() {
  return (
    <section id="skills" className="relative px-5 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title={<>The <span className="text-gradient">stack</span> I work with.</>}
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((g, i) => (
            <Reveal key={g.group} delay={i * 0.05}>
              <div className="glass h-full rounded-2xl p-5">
                <div className="mb-4 flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, oklch(0.78 0.15 210), oklch(0.65 0.24 295))",
                      boxShadow: "0 0 10px oklch(0.65 0.24 295)",
                    }}
                  />
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wider">
                    {g.group}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-transparent hover:text-foreground"
                      style={{ background: "color-mix(in oklab, oklch(0.65 0.24 295) 6%, transparent)" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Certifications ---------------------------- */

function Certifications() {
  return (
    <section id="certifications" className="relative px-5 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title={<>Continuous <span className="text-gradient">learning</span>.</>}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {CERTS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="glass group h-full rounded-2xl p-5 transition-transform hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <div
                    className="grid h-11 w-11 place-items-center rounded-xl"
                    style={{
                      background: "linear-gradient(135deg, oklch(0.78 0.15 210 / 0.2), oklch(0.65 0.24 295 / 0.3))",
                      border: "1px solid oklch(0.65 0.24 295 / 0.3)",
                    }}
                  >
                    <c.icon className="h-5 w-5" style={{ color: "oklch(0.85 0.1 240)" }} />
                  </div>
                  <Award className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold">{c.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Contact -------------------------------- */

function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: "banomariam97@gmail.com", href: "mailto:banomariam97@gmail.com" },
    { icon: Phone, label: "Phone", value: "+92 322 4496970", href: "tel:+923224496970" },
    { icon: MapPin, label: "Location", value: "Lahore, Pakistan" },
  ];

  return (
    <section id="contact" className="relative px-5 py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-12">
            <span
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl"
              style={{ background: "oklch(0.65 0.24 295 / 0.3)" }}
            />
            <span
              className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full blur-3xl"
              style={{ background: "oklch(0.78 0.15 210 / 0.25)" }}
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <span className="chip">
                  <Send className="h-3 w-3" />
                  Get in touch
                </span>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                  Let's build <span className="text-gradient">something intelligent</span>.
                </h2>
                <p className="mt-4 max-w-md text-base text-muted-foreground">
                  Open to Associate Software Engineer and AI/ML roles, internships and
                  freelance Computer Vision projects. I'll get back within a day.
                </p>

                <div className="mt-8 space-y-3">
                  {items.map((it) => {
                    const Wrap = it.href ? "a" : "div";
                    return (
                      <Wrap
                        key={it.label}
                        {...(it.href ? { href: it.href } : {})}
                        className="group flex items-center gap-4 rounded-2xl border border-border p-3 transition-colors hover:border-transparent"
                        style={{ background: "color-mix(in oklab, oklch(0.65 0.24 295) 6%, transparent)" }}
                      >
                        <span
                          className="grid h-10 w-10 place-items-center rounded-xl"
                          style={{
                            background: "linear-gradient(135deg, oklch(0.78 0.15 210 / 0.2), oklch(0.65 0.24 295 / 0.3))",
                            border: "1px solid oklch(0.65 0.24 295 / 0.3)",
                          }}
                        >
                          <it.icon className="h-4 w-4" style={{ color: "oklch(0.85 0.1 240)" }} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs text-muted-foreground">{it.label}</div>
                          <div className="truncate text-sm font-semibold">{it.value}</div>
                        </div>
                        {it.href && <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
                      </Wrap>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://www.linkedin.com/in/banomariam/"
                    target="_blank"
                    rel="noreferrer"
                    className="group glass flex flex-col items-start justify-between gap-6 rounded-2xl p-5 transition-transform hover:-translate-y-1"
                  >
                    <Linkedin className="h-6 w-6" style={{ color: "oklch(0.78 0.15 210)" }} />
                    <div>
                      <div className="text-xs text-muted-foreground">Connect on</div>
                      <div className="font-display text-base font-semibold">LinkedIn</div>
                    </div>
                  </a>
                  <a
                    href="https://github.com/Mariamm97"
                    target="_blank"
                    rel="noreferrer"
                    className="group glass flex flex-col items-start justify-between gap-6 rounded-2xl p-5 transition-transform hover:-translate-y-1"
                  >
                    <Github className="h-6 w-6" style={{ color: "oklch(0.85 0.05 290)" }} />
                    <div>
                      <div className="text-xs text-muted-foreground">Code on</div>
                      <div className="font-display text-base font-semibold">GitHub</div>
                    </div>
                  </a>
                </div>

                <a
                  href="mailto:banomariam97@gmail.com"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.78 0.15 210), oklch(0.65 0.24 295))",
                    boxShadow: "0 12px 40px -10px oklch(0.65 0.24 295 / 0.6)",
                  }}
                >
                  <Mail className="h-4 w-4" />
                  Send me an email
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- Footer -------------------------------- */

function Footer() {
  return (
    <footer className="relative border-t border-border px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-1.5">
          Designed and developed by{" "}
          <span className="font-semibold text-foreground">Bano Mariam</span>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex"
          >
            <Heart className="h-3.5 w-3.5 fill-current" style={{ color: "oklch(0.7 0.22 20)" }} />
          </motion.span>
        </div>
        <div>© {new Date().getFullYear()} Bano Mariam. All rights reserved.</div>
      </div>
    </footer>
  );
}

/* ------------------------------- Back to Top ----------------------------- */

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full text-white transition-transform hover:-translate-y-0.5"
      style={{
        background: "linear-gradient(135deg, oklch(0.78 0.15 210), oklch(0.65 0.24 295))",
        boxShadow: "0 12px 40px -10px oklch(0.65 0.24 295 / 0.6)",
      }}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
