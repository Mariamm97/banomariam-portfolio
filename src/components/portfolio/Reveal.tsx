import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <Reveal>
        <span className="chip">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "oklch(0.78 0.15 210)", boxShadow: "0 0 8px oklch(0.78 0.15 210)" }} />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
