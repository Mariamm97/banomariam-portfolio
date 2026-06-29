import { useEffect, useRef, useState } from "react";

export function BackgroundFX() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 30 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div
        className="absolute h-[520px] w-[520px] rounded-full blur-3xl opacity-40 animate-blob"
        style={{ background: "radial-gradient(circle, oklch(0.65 0.24 295 / 0.6), transparent 70%)", top: "-10%", left: "-5%" }}
      />
      <div
        className="absolute h-[420px] w-[420px] rounded-full blur-3xl opacity-35 animate-blob"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.15 210 / 0.5), transparent 70%)", top: "30%", right: "-8%", animationDelay: "-5s" }}
      />
      <div
        className="absolute h-[360px] w-[360px] rounded-full blur-3xl opacity-25 animate-blob"
        style={{ background: "radial-gradient(circle, oklch(0.7 0.2 320 / 0.5), transparent 70%)", bottom: "-10%", left: "30%", animationDelay: "-8s" }}
      />
      {/* mouse glow */}
      <div
        className="absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-20 transition-all duration-300"
        style={{
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          background: "radial-gradient(circle, oklch(0.78 0.15 210 / 0.5), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      setProgress(scrolled * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed left-0 right-0 top-0 z-50 h-[2px] bg-transparent">
      <div
        className="h-full transition-[width] duration-100"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, oklch(0.78 0.15 210), oklch(0.65 0.24 295))",
          boxShadow: "0 0 12px oklch(0.65 0.24 295 / 0.8)",
        }}
      />
    </div>
  );
}
