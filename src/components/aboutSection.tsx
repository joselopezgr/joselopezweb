"use client";

import React from "react";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import { FaAws, FaDocker, FaJava, FaReact } from "react-icons/fa";
import {
  SiElastic,
  SiNestjs,
  SiNextdotjs,
  SiRabbitmq,
  SiRuby,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { Chip } from "@nextui-org/react";

type Tech = {
  label: string;
  icon: React.ReactNode;
  url?: string;
};

const technologies: Tech[] = [
  { label: "Java", icon: <FaJava />, url: "https://docs.oracle.com/en/java/" },
  { label: "TypeScript", icon: <SiTypescript />, url: "https://www.typescriptlang.org/docs/" },
  { label: "JavaScript", icon: <IoLogoJavascript />, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { label: "Spring Boot", icon: <SiSpringboot />, url: "https://spring.io/projects/spring-boot" },
  { label: "NestJS", icon: <SiNestjs />, url: "https://docs.nestjs.com/" },
  { label: "React", icon: <FaReact />, url: "https://react.dev/" },
  { label: "Next.js", icon: <SiNextdotjs />, url: "https://nextjs.org/docs" },
  { label: "AWS", icon: <FaAws />, url: "https://docs.aws.amazon.com/" },
  { label: "RabbitMQ", icon: <SiRabbitmq />, url: "https://www.rabbitmq.com/documentation.html" },
  { label: "MongoDB", icon: <DiMongodb />, url: "https://www.mongodb.com/docs/" },
  { label: "Docker", icon: <FaDocker />, url: "https://docs.docker.com/" },
  { label: "Kubernetes", icon: "K8s", url: "https://kubernetes.io/docs/home/" },
];

const AboutSection = () => {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4">
      <div className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* LEFT */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold leading-tight">
                Hi, I’m <span className="text-sky-700">Jose</span>.
              </h2>
              <p className="mt-3 text-lg opacity-80 max-w-xl">
                A <span className="font-semibold">full-stack software engineer</span> based in{" "}
                <span className="font-semibold">Leeds, UK</span>, with strong experience building APIs,
                integration services, and platform features — and comfortable working full-stack
                when the problem calls for it.
              </p>
            </div>

            {/* What I focus on */}
            <div className="rounded-2xl border border-white/10 p-5">
              <p className="font-semibold">What I focus on</p>
              <ul className="mt-3 list-disc ml-5 space-y-2 opacity-90">
                <li>Designing and implementing reliable backend services with clear API contracts.</li>
                <li>Working in polyglot environments (Java, C#, Node, Python, etc.) without being tied to one stack.</li>
                <li>Shipping production changes safely through testing, documentation, and collaboration.</li>
              </ul>
            </div>

            {/* Mindset */}
            <div className="rounded-2xl border border-white/10 p-5">
              <p className="font-semibold">How I think about engineering</p>
              <p className="mt-2 opacity-80">
                I don’t optimise for a specific language or framework — I optimise for solving the
                problem well. I enjoy learning new technologies when they’re the right tool, and I’m
                comfortable picking up unfamiliar stacks when needed.
              </p>
            </div>

            {/* Career snapshot */}
            <div className="rounded-2xl border border-white/10 p-5">
              <p className="font-semibold">Snapshot</p>
              <div className="mt-3 space-y-3 opacity-90">
                <div>
                  <p className="font-medium">Currently</p>
                  <p className="opacity-80">
                    Working on a case handling services in the public sector, with an emphasis on security,
                    correctness, and operational readiness.
                  </p>
                </div>
                <div>
                  <p className="font-medium">Previously</p>
                  <p className="opacity-80">
                    Apprenticeship and product delivery experience in EdTech, building platform and
                    user-facing backend features.
                  </p>
                </div>
              </div>
            </div>


            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 px-3 py-1 text-sm">
                Backend-first
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-sm">
                Full-stack capable
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-sm">
                Polyglot
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-sm">
                Security-minded
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-sm">
                Security Clearance: SC
              </span>
            </div>

            <div>
              <Link
                href="https://github.com/joselopezgr/joselopezweb/blob/main/README.md"
                target="_blank"
                className="inline-flex items-center gap-2 font-semibold hover:text-sky-700"
              >
                Read more <HiExternalLink />
              </Link>
            </div>
          </div>


          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold">Tech & tools</h3>
              <p className="mt-2 opacity-80">
                Technologies I’ve used in production or recent projects.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {technologies.map((t) => {
                const pill = (
                  <span
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm
                               hover:border-white/20 transition"
                  >
                    <span className="text-base">{t.icon}</span>
                    <span className="font-medium">{t.label}</span>
                  </span>
                );

                return t.url ? (
                  <Link key={t.label} href={t.url} target="_blank" className="no-underline">
                    {pill}
                  </Link>
                ) : (
                  <span key={t.label}>{pill}</span>
                );
              })}
            </div>

            <div className="rounded-2xl border border-white/10 p-5">
              <p className="font-semibold">Always learning</p>
              <p className="mt-2 opacity-80">
                I actively deepen fundamentals (OOP, concurrency, FP, system design) and enjoy
                exploring new languages or frameworks when they expand my problem-solving toolkit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;