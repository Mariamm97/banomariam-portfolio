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

import banoProfileImg from "@/assets/bano-profile.jpeg";
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

const SKILLS: { group: string; icon: typeof Brain; items: string[] }[] = [
  { group: "Programming Languages", icon: Cpu, items: ["Python", "Java", "C++", "Dart"] },
  {
    group: "AI & Machine Learning",
    icon: Brain,
    items: ["Machine Learning", "Deep Learning", "Computer Vision", "OCR", "YOLOv8", "LLMs", "RAG", "Image Processing"],
  },
  {
    group: "Libraries & Frameworks",
    icon: Sparkles,
    items: ["TensorFlow", "OpenCV", "Scikit-learn", "NumPy", "Pandas", "Sentence Transformers", "ChromaDB", "FastAPI", "Flutter", "Firebase"],
  },
  { group: "Tools", icon: Rocket, items: ["Git", "GitHub", "Docker", "VS Code", "Google Colab"] },
  {
    group: "Core Concepts",
    icon: Server,
    items: ["REST APIs", "Semantic Search", "Embeddings", "Vector Databases", "Prompt Engineering", "Feature Engineering", "Model Training", "Data Preprocessing"],
  },
];

const CERTS = [
  {
    title: "IBM AI Practitioner",
    issuer: "IBM",
    icon: Award,
    href: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fskills.yourlearning.ibm.com%2Fcertificate%2Fshare%2F39b424d5bdewogICJvYmplY3RUeXBlIiA6ICJBQ1RJVklUWSIsCiAgIm9iamVjdElkIiA6ICJQTEFOLTAyNTQxNDBFQTBGQSIsCiAgImxlYXJuZXJDTlVNIiA6ICI3NDAzNTc1UkVHIgp99a66c39f60-10&urlhash=hTbs&mt=zeJmW41g2Hkfr6Ma7ZUZPHxcKDFc8R-L3_Ojiu2PLgoFxEsch_YX1wQk40s9OPZAMOBvzQLns7sPTrXgtf1nsGtNa1wW&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BcTSKNmheSBOp7%2FtGkxiqDQ%3D%3D",
  },
  {
    title: "Supervised Machine Learning",
    issuer: "Coursera",
    icon: Brain,
    href: "https://www.coursera.org/account/accomplishments/verify/TLUDPYC1CNNT",
  },
  {
    title: "Kaggle Python Course",
    issuer: "Kaggle",
    icon: FileText,
    href: "https://www.kaggle.com/learn/certification/banomariam/python",
  },
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
        <Achievements />
        <About />
        <Experience />
        <Projects />
        <WhatIDo />
        <Skills />
        <CurrentFocus />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

/* ---------------------------------- Hero --------------------------------- */

function TypewriterLine({ text }: { text: string }) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setOut("");
    setDone(false);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, 45);
    return () => clearInterval(id);
  }, [text]);

  return (
    <span className="inline-flex items-baseline">
      <span className="text-gradient">{out}</span>
      <span
        className={`ml-1 inline-block h-[0.9em] w-[2px] translate-y-[2px] ${done ? "animate-caret" : ""}`}
        style={{ background: "oklch(0.78 0.15 210)" }}
      />
    </span>
  );
}

const FLOATING_TECH: { label: string; pos: string; delay: string; tone: "cyan" | "purple" }[] = [
  { label: "Python",          pos: "-left-6 top-6",                 delay: "-0s",  tone: "cyan" },
  { label: "YOLOv8",          pos: "-right-6 top-16",               delay: "-1.5s", tone: "purple" },
  { label: "Computer Vision", pos: "-left-10 top-1/2 -translate-y-1/2", delay: "-3s",  tone: "purple" },
  { label: "FastAPI",         pos: "-right-10 top-1/2 -translate-y-1/2", delay: "-4.5s", tone: "cyan" },
  { label: "LLMs",            pos: "-left-2 bottom-10",             delay: "-2s",  tone: "purple" },
  { label: "RAG",             pos: "-right-4 bottom-6",             delay: "-3.5s", tone: "cyan" },
];

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-5 pt-28 pb-16">
      <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        {/* Left: copy */}
        <div>
          <Reveal>
            <span
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium shadow-[0_0_20px_rgba(74,222,128,0.12)]"
              style={{
                background: "color-mix(in oklab, oklch(0.7 0.18 155) 12%, transparent)",
                border: "1px solid color-mix(in oklab, oklch(0.7 0.18 155) 35%, transparent)",
                color: "oklch(0.92 0.06 155)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                  style={{ background: "oklch(0.72 0.2 150)" }}
                />
                <span
                  className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ background: "oklch(0.72 0.2 150)", boxShadow: "0 0 10px oklch(0.72 0.2 150)" }}
                />
              </span>
              Available for Associate Software Engineer &amp; AI/ML Roles
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-7 font-display text-[0.8rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground/80">
              Hi, I'm
            </p>
            <h1 className="relative mt-2 inline-block font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="relative z-10 text-gradient">Bano Mariam</span>
              <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,oklch(0.78_0.15_210/0.22),transparent_70%)] blur-2xl" />
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 font-display text-lg font-medium text-foreground sm:text-xl">
              <span className="text-foreground">Software Engineer</span>
              <span className="mx-3 text-muted-foreground/60">|</span>
              <span className="text-foreground/90">AI/ML Engineer</span>
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="mt-4 max-w-2xl font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              <TypewriterLine text="Building Intelligent AI Systems with Computer Vision & LLMs" />
            </h2>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Software Engineering graduate from COMSATS University Lahore with hands-on experience in AI, Machine Learning,
              Computer Vision, OCR, Retrieval-Augmented Generation (RAG), and Large Language Models. Passionate about building
              intelligent solutions that solve real-world problems.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap gap-3">
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
                href="/resume.pdf"
                download
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

          <Reveal delay={0.4}>
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {STATS.map((s, index) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="glass rounded-2xl px-4 py-4 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="font-display text-2xl font-semibold text-gradient">{s.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right: portrait placeholder */}
        <Reveal delay={0.2}>
          <div className="relative mx-auto aspect-square w-[300px] sm:w-[360px] lg:w-[400px]">
            {/* outer glow halo */}
            <motion.div
              animate={{ scale: [1, 1.04, 1], opacity: [0.55, 0.8, 0.55] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-8 rounded-full blur-3xl"
              style={{
                background:
                  "conic-gradient(from 180deg at 50% 50%, oklch(0.78 0.15 210 / 0.55), oklch(0.65 0.24 295 / 0.55), oklch(0.7 0.2 320 / 0.55), oklch(0.78 0.15 210 / 0.55))",
              }}
            />

            <motion.div
              animate={{ scale: [0.96, 1.05, 0.96], opacity: [0.24, 0.36, 0.24] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-4 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, oklch(0.78 0.15 210 / 0.35), transparent 70%)" }}
            />

            {/* rotating gradient ring */}
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

            {/* inner glow ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-3 rounded-full glow-purple"
            >
              <div
                className="group relative flex h-full w-full items-center justify-center overflow-hidden rounded-full text-center"
                style={{
                  background:
                    "radial-gradient(circle at 50% 35%, oklch(0.28 0.05 280) 0%, oklch(0.16 0.03 280) 70%)",
                }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-full opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, oklch(0.65 0.24 295 / 0.18) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.65 0.24 295 / 0.18) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />

                <motion.img
                  src={banoProfileImg}
                  alt="Bano Mariam"
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 rounded-full bg-background/20" />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/30 bg-background/70 px-4 py-2 text-[11px] font-semibold text-foreground backdrop-blur-sm">
                  Bano Mariam
                </div>

                <span className="absolute inset-0 rounded-full bg-foreground/0 transition-colors group-hover:bg-foreground/[0.04]" />
              </div>
            </motion.div>

            {/* floating tech badges */}
            {FLOATING_TECH.map((t) => (
              <div
                key={t.label}
                className={`absolute ${t.pos} glass animate-float-slow rounded-full px-3 py-1.5 text-[11px] font-semibold whitespace-nowrap`}
                style={{
                  animationDelay: t.delay,
                  borderColor:
                    t.tone === "cyan"
                      ? "color-mix(in oklab, oklch(0.78 0.15 210) 40%, transparent)"
                      : "color-mix(in oklab, oklch(0.65 0.24 295) 40%, transparent)",
                  boxShadow:
                    t.tone === "cyan"
                      ? "0 8px 28px -10px oklch(0.78 0.15 210 / 0.55)"
                      : "0 8px 28px -10px oklch(0.65 0.24 295 / 0.55)",
                }}
              >
                <span className="flex items-center gap-1.5">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      background:
                        t.tone === "cyan" ? "oklch(0.78 0.15 210)" : "oklch(0.65 0.24 295)",
                      boxShadow:
                        t.tone === "cyan"
                          ? "0 0 8px oklch(0.78 0.15 210)"
                          : "0 0 8px oklch(0.65 0.24 295)",
                    }}
                  />
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- Achievements ------------------------------ */

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    emoji: "🏆",
    title: "2nd Position — Final Year Projects",
    desc: "Secured 2nd Position among all Software Engineering Final Year Projects at COMSATS University Lahore.",
    tone: "gold" as const,
  },
  {
    icon: Briefcase,
    emoji: "🏢",
    title: "Industrial FYP with CacheLogic",
    desc: "Completed an Industrial Final Year Project in collaboration with CacheLogic, building a production AI vehicle inspection system.",
    tone: "cyan" as const,
  },
  {
    icon: Award,
    emoji: "🤖",
    title: "IBM AI Practitioner Certification",
    desc: "Earned the IBM AI Practitioner certification, strengthening foundations in applied machine learning and AI workflows.",
    tone: "purple" as const,
  },
];

function Achievements() {
  return (
    <section id="achievements" className="relative px-5 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Achievements"
          title={<>Recognized for <span className="text-gradient">impact</span>.</>}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <div className="group glass-strong relative h-full overflow-hidden rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-2">
                <span
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
                  style={{
                    background:
                      a.tone === "gold"
                        ? "oklch(0.78 0.16 80 / 0.45)"
                        : a.tone === "cyan"
                        ? "oklch(0.78 0.15 210 / 0.45)"
                        : "oklch(0.65 0.24 295 / 0.45)",
                  }}
                />
                <div className="relative">
                  <div
                    className="grid h-14 w-14 place-items-center rounded-2xl text-2xl"
                    style={{
                      background:
                        a.tone === "gold"
                          ? "linear-gradient(135deg, oklch(0.78 0.16 80 / 0.25), oklch(0.65 0.2 60 / 0.3))"
                          : a.tone === "cyan"
                          ? "linear-gradient(135deg, oklch(0.78 0.15 210 / 0.25), oklch(0.65 0.2 230 / 0.3))"
                          : "linear-gradient(135deg, oklch(0.65 0.24 295 / 0.25), oklch(0.7 0.2 320 / 0.3))",
                      border: "1px solid color-mix(in oklab, currentColor 25%, transparent)",
                    }}
                  >
                    {a.emoji}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold leading-snug">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {a.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
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
            <motion.span
              initial={{ scaleY: 0.6, opacity: 0.6 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute left-4 top-3 h-[calc(100%-3rem)] w-[2px] origin-top rounded-full sm:left-6"
              style={{ background: "linear-gradient(to bottom, oklch(0.78 0.15 210), oklch(0.65 0.24 295), transparent)" }}
            />
            <div className="relative pl-12 sm:pl-16">
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute left-0 top-2 grid h-10 w-10 place-items-center rounded-full border border-white/20 sm:left-2"
                style={{
                  background: "linear-gradient(135deg, oklch(0.78 0.15 210), oklch(0.65 0.24 295))",
                  boxShadow: "0 0 0 6px oklch(0.65 0.24 295 / 0.15), 0 0 24px oklch(0.78 0.15 210 / 0.35)",
                }}
              >
                <Briefcase className="h-4 w-4 text-background" />
              </motion.span>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="glass rounded-3xl p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold sm:text-2xl">
                      Software Engineer - AI/ML
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      CacheLogic · Internship
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="chip">Jun 2025 – Jun 2026</span>
                    <span className="text-xs text-muted-foreground">Lahore, Punjab, Pakistan · On-site</span>
                  </div>
                </div>

                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Developed CarInspect, an AI-powered vehicle inspection system enabling smartphone-based, automated used-car inspections.",
                    "Built VIN verification using AI-powered OCR and computer vision to detect tampering and verify authenticity.",
                    "Implemented repaint detection using advanced image processing techniques to identify hidden vehicle repairs.",
                    "Designed dent and scratch detection using deep learning and computer vision for automated surface damage assessment.",
                    "Built inspection report generation and secure storage system for future reference.",
                  ].map((b, index) => (
                    <motion.li
                      key={b}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ background: "oklch(0.78 0.15 210)" }}
                      />
                      <span>{b}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="mt-6 flex items-center gap-3 rounded-2xl border border-border p-4"
                  style={{ background: "linear-gradient(135deg, oklch(0.65 0.24 295 / 0.1), oklch(0.78 0.15 210 / 0.06))" }}
                >
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
                </motion.div>
              </motion.div>
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
    title: "Car Inspect — AI-Powered Vehicle Inspection System",
    description:
      "Industrial FYP with CacheLogic focused on smartphone-based computer vision for automated vehicle inspection, damage assessment, VIN authentication, repaint detection, and fraud detection.",
    image: carInspectImg,
    features: [
      "Smartphone-based automated inspections",
      "Physics-informed repaint detection",
      "VIN & chassis authentication",
      "VIN tampering detection",
      "Structural damage assessment",
      "Advanced image preprocessing",
    ],
    tech: ["Python", "YOLOv8", "OpenCV", "OCR", "FastAPI", "TensorFlow", "Deep Learning"],
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
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.25, ease: "easeOut" } }}
        className="group relative overflow-hidden rounded-[1.75rem] p-[1px]"
      >
        <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-[linear-gradient(135deg,oklch(0.78_0.15_210/0.55),oklch(0.65_0.24_295/0.55),transparent_70%)] bg-[length:200%_200%] opacity-80 animate-[spin_8s_linear_infinite]" />
        <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_top,oklch(0.78_0.15_210/0.22),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-background/80 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.55)] backdrop-blur-xl">
          <div className="relative m-3 aspect-[16/9] overflow-hidden rounded-[1.3rem]">
            <img
              src={p.image}
              alt={p.title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 group-hover:saturate-105"
              style={{ objectPosition: "center top" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute left-3 top-3 flex flex-wrap gap-2">
              {p.badges.map((b) => (
                <span
                  key={b.label}
                  className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] shadow-[0_8px_20px_-10px_rgba(0,0,0,0.45)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-0.5"
                  style={
                    b.tone === "gold"
                      ? { background: "oklch(0.78 0.16 80 / 0.18)", borderColor: "oklch(0.78 0.16 80 / 0.45)", color: "oklch(0.92 0.1 90)" }
                      : b.tone === "cyan"
                      ? { background: "oklch(0.78 0.15 210 / 0.18)", borderColor: "oklch(0.78 0.15 210 / 0.45)" }
                      : { background: "color-mix(in oklab, oklch(0.65 0.24 295) 14%, transparent)" }
                  }
                >
                  {b.label}
                </span>
              ))}
            </div>
          </div>

          <div className="px-6 pb-6 pt-2">
            <h3 className="font-display text-xl font-semibold sm:text-2xl">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border/80 bg-white/5 px-2.75 py-1 text-[11px] font-semibold tracking-wide text-foreground/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            <motion.div
              initial={false}
              animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="mt-5 rounded-2xl border border-border/80 bg-white/[0.03] p-4">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Key Features</div>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground/85">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: "oklch(0.78 0.15 210)" }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setOpen((v) => !v)}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-colors hover:text-foreground"
                style={{ background: "color-mix(in oklab, oklch(0.65 0.24 295) 14%, transparent)", border: "1px solid color-mix(in oklab, oklch(0.65 0.24 295) 30%, transparent)" }}
              >
                {open ? "Hide details" : "View details"}
                <ArrowDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
              </motion.button>
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/50 px-4 py-2 text-xs font-semibold text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground"
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
                  className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/50 px-4 py-2 text-xs font-semibold text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground"
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.article>
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
          {SKILLS.map((g, i) => {
            const Icon = g.icon;
            return (
              <Reveal key={g.group} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.2 } }}
                  className="group relative h-full overflow-hidden rounded-[1.35rem] border border-border/70 bg-background/60 p-5 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.55)] backdrop-blur-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-[1.35rem] bg-[radial-gradient(circle_at_top_left,oklch(0.78_0.15_210/0.16),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span
                          className="grid h-10 w-10 place-items-center rounded-2xl border border-border/70"
                          style={{
                            background: "linear-gradient(135deg, oklch(0.78 0.15 210 / 0.2), oklch(0.65 0.24 295 / 0.3))",
                          }}
                        >
                          <Icon className="h-4 w-4" style={{ color: "oklch(0.85 0.1 240)" }} />
                        </span>
                        <h3 className="font-display text-sm font-semibold uppercase tracking-[0.22em]">
                          {g.group}
                        </h3>
                      </div>
                      <span className="h-2.5 w-2.5 rounded-full" style={{ background: "linear-gradient(135deg, oklch(0.78 0.15 210), oklch(0.65 0.24 295))", boxShadow: "0 0 10px oklch(0.65 0.24 295)" }} />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {g.items.map((s) => (
                        <motion.span
                          key={s}
                          whileHover={{ y: -3, scale: 1.02, transition: { duration: 0.18 } }}
                          className="rounded-full border border-border/80 px-2.75 py-1 text-[11px] font-semibold tracking-wide text-muted-foreground transition-all duration-300 hover:border-cyan-400/40 hover:text-foreground"
                          style={{ background: "color-mix(in oklab, oklch(0.65 0.24 295) 8%, transparent)" }}
                        >
                          {s}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Current Focus ------------------------------ */

const CURRENT_FOCUS = [
  "Retrieval-Augmented Generation",
  "Large Language Models",
  "AI Agents",
  "Hugging Face",
  "PyTorch",
  "Backend AI Development",
];

function CurrentFocus() {
  return (
    <section id="current-focus" className="relative px-5 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Current Focus"
          title={<>Always <span className="text-gradient">leveling up</span>.</>}
          subtitle="I enjoy continuously learning emerging AI technologies and building intelligent systems that solve practical real-world problems."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CURRENT_FOCUS.map((label, i) => (
            <Reveal key={label} delay={i * 0.05}>
              <div
                className="group glass relative overflow-hidden rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: "0 0 0 1px color-mix(in oklab, oklch(0.65 0.24 295) 18%, transparent)",
                }}
              >
                <span
                  className="pointer-events-none absolute -left-8 -bottom-8 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: "oklch(0.78 0.15 210 / 0.5)" }}
                />
                <div className="relative flex items-center gap-3">
                  <span
                    className="h-2.5 w-2.5 flex-shrink-0 rounded-full animate-pulse"
                    style={{
                      background: "linear-gradient(135deg, oklch(0.78 0.15 210), oklch(0.65 0.24 295))",
                      boxShadow: "0 0 10px oklch(0.65 0.24 295)",
                    }}
                  />
                  <span className="font-display text-base font-semibold">{label}</span>
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
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="glass group flex h-full flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
              >
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
                <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-foreground/80 transition-colors group-hover:text-foreground">
                  View certificate
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
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
          <div className="glass-strong relative overflow-hidden rounded-[1.85rem] p-8 sm:p-12">
            <span
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl"
              style={{ background: "oklch(0.65 0.24 295 / 0.3)" }}
            />
            <span
              className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full blur-3xl"
              style={{ background: "oklch(0.78 0.15 210 / 0.25)" }}
            />
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,oklch(0.78_0.15_210/0.12),transparent_45%)]" />

            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <span className="chip">
                  <Send className="h-3 w-3" />
                  Get in touch
                </span>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                  Let's build <span className="text-gradient">something intelligent</span>.
                </h2>
                <p className="mt-4 max-w-md text-base leading-8 text-muted-foreground">
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
                        className="group flex items-center gap-4 rounded-2xl border border-border/70 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40"
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
                  <motion.a
                    whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.2 } }}
                    href="https://www.linkedin.com/in/banomariam/"
                    target="_blank"
                    rel="noreferrer"
                    className="group glass relative overflow-hidden rounded-[1.3rem] p-5 transition-all duration-300"
                  >
                    <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,oklch(0.78_0.15_210/0.2),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative flex flex-col items-start justify-between gap-6">
                      <Linkedin className="h-6 w-6" style={{ color: "oklch(0.78 0.15 210)" }} />
                      <div>
                        <div className="text-xs text-muted-foreground">Connect on</div>
                        <div className="font-display text-base font-semibold">LinkedIn</div>
                      </div>
                    </div>
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.2 } }}
                    href="https://github.com/Mariamm97"
                    target="_blank"
                    rel="noreferrer"
                    className="group glass relative overflow-hidden rounded-[1.3rem] p-5 transition-all duration-300"
                  >
                    <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,oklch(0.65_0.24_295/0.2),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative flex flex-col items-start justify-between gap-6">
                      <Github className="h-6 w-6" style={{ color: "oklch(0.85 0.05 290)" }} />
                      <div>
                        <div className="text-xs text-muted-foreground">Code on</div>
                        <div className="font-display text-base font-semibold">GitHub</div>
                      </div>
                    </div>
                  </motion.a>
                </div>

                <motion.a
                  whileHover={{ y: -3, scale: 1.01, transition: { duration: 0.2 } }}
                  href="mailto:banomariam97@gmail.com"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-[1.3rem] px-6 py-4 text-sm font-semibold text-white"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.78 0.15 210), oklch(0.65 0.24 295))",
                    boxShadow: "0 16px 48px -16px oklch(0.65 0.24 295 / 0.7)",
                  }}
                >
                  <span className="absolute inset-0 bg-[linear-gradient(90deg,transparent,oklch(1_1_1/0.18),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <Mail className="relative h-4 w-4" />
                  <span className="relative">Send me an email</span>
                  <ArrowUpRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
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