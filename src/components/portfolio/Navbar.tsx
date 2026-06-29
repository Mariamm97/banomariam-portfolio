import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certs" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "home";
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 120) current = s.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <a href="#home" className="group flex items-center gap-2">
          <span
            className="grid h-9 w-9 place-items-center rounded-xl font-display text-sm font-bold text-background"
            style={{ background: "linear-gradient(135deg, oklch(0.78 0.15 210), oklch(0.65 0.24 295))" }}
          >
            BM
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight sm:inline">
            Bano Mariam
          </span>
        </a>

        <nav
          className={`hidden items-center gap-1 rounded-full px-2 py-1.5 md:flex ${
            scrolled ? "glass-strong" : "glass"
          }`}
        >
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                active === s.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {active === s.id && (
                <span
                  className="absolute inset-0 -z-10 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.78 0.15 210 / 0.18), oklch(0.65 0.24 295 / 0.25))",
                    border: "1px solid oklch(0.65 0.24 295 / 0.3)",
                  }}
                />
              )}
              {s.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full px-4 py-2 text-xs font-semibold md:inline-block"
          style={{
            background: "linear-gradient(135deg, oklch(0.78 0.15 210), oklch(0.65 0.24 295))",
            color: "white",
            boxShadow: "0 8px 30px -8px oklch(0.65 0.24 295 / 0.6)",
          }}
        >
          Let's Talk
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="glass grid h-10 w-10 place-items-center rounded-full md:hidden"
        >
          <span className="relative block h-3 w-4">
            <span className={`absolute left-0 top-0 h-[2px] w-full bg-foreground transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[5px] h-[2px] w-full bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-[10px] h-[2px] w-full bg-foreground transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="mx-5 mt-2 md:hidden">
          <nav className="glass-strong flex flex-col gap-1 rounded-2xl p-2">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-2.5 text-sm font-medium ${
                  active === s.id ? "text-foreground" : "text-muted-foreground"
                }`}
                style={
                  active === s.id
                    ? { background: "linear-gradient(135deg, oklch(0.78 0.15 210 / 0.15), oklch(0.65 0.24 295 / 0.2))" }
                    : undefined
                }
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
