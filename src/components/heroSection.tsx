"use client";

import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

const ACCENT = "#d66853";

type HeroProps = {
  onGoTo?: (section: "Projects" | "Contact") => void;
};

const HeroSection = ({ onGoTo }: HeroProps) => {
  const prefersReducedMotion = useReducedMotion();

  const fullName = "José\nLópez";
  const chars = fullName.split("");

  const container = {
  hidden: {},
  show: {
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { staggerChildren: 0.045, delayChildren: 0.15 },
  },
  } satisfies Variants;

  const char = {
    hidden: prefersReducedMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 22, filter: "blur(6px)" },
    show: prefersReducedMotion
      ? { opacity: 1, y: 0 }
      : {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            type: "spring" as const,
            stiffness: 420,
            damping: 28,
          },
        },
  } satisfies Variants;

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div
        className="
          mx-auto max-w-6xl px-4
          pt-24 md:pt-32 lg:pt-36
          pb-24 md:pb-32 lg:pb-40
        "
      >  
      {/* Top row: little badge */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-sm opacity-80">
            Backend-leaning • Full-stack capable • Polyglot
          </span>
          {/* Keep only if accurate */}
          <span className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-sm opacity-80">
            Security Clearance: SC
          </span>
        </div>

        {/* Name */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-10 whitespace-pre-line font-extrabold leading-[0.92] tracking-tight text-[#363636]
                     text-[3.5rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7.5rem]"
          aria-label="José Lopez"
        >
          {chars.map((c, i) => {
            if (c === "\n") return <br key={`br-${i}`} />;

            const isAccent = c.toLowerCase() === "é" || c.toLowerCase() === "ó";
            return (
              <motion.span
                key={`${c}-${i}`}
                variants={char}
                className="inline-block"
                style={isAccent ? { color: ACCENT } : undefined}
              >
                {c === " " ? "\u00A0" : c}
              </motion.span>
            );
          })}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: prefersReducedMotion ? 0 : 0.55 }}
          className="mt-8 max-w-2xl text-lg md:text-xl opacity-80"
        >
          I build reliable backend services and integration layers — especially around authentication,
          migrations, and platform work. Comfortable going full-stack when it helps ship the right solution.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: prefersReducedMotion ? 0 : 0.7 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <button
            type="button"
            onClick={() => onGoTo?.("Projects")}
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold
                      bg-[#363636] text-white hover:opacity-90 transition"
          >
            View work
          </button>

          <button
            type="button"
            onClick={() => onGoTo?.("Contact")}
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold
                      border border-white/15 hover:border-white/25 transition"
          >
            Let’s connect
          </button>

          <a
            href="https://github.com/joselopezgr"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold
                      border border-white/15 hover:border-white/25 transition opacity-90"
          >
            GitHub
          </a>
        </motion.div>

        {/* Subtle scroll hint (no gradients) */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1 }}
          transition={{ duration: 0.4, delay: prefersReducedMotion ? 0 : 1.0 }}
          className="mt-14 text-sm opacity-60"
        >
          Scroll to explore ↓
        </motion.div>
      </div>

      {/* A subtle background blob (optional, cheap, modern) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-120px] h-[320px] w-[320px] rounded-full blur-3xl opacity-30"
        style={{ background: `radial-gradient(circle, ${ACCENT}, transparent 60%)` }}
      />
      <div className="mt-28" />
    </section>
  );
};

export default HeroSection;