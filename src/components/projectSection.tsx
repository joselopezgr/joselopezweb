"use client";

import React, { useMemo, useState } from "react";
import {
  Card,
  CardBody,
  Chip,
  Button,
  Divider,
} from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";

type WorkItem = {
  title: string;
  context: string; // e.g. "Identity Platform • B2B"
  summary: string; // 1–2 lines
  bullets: string[]; // impact + responsibilities
  tech: string[];
  links?: { label: string; href: string; icon?: React.ReactNode }[];
  sensitive?: boolean; // if you need to hide links/details
};

const ProjectSection = () => {
  const workItems: WorkItem[] = useMemo(
    () => [
      {
        title: "Universal Login",
        context: "Identity Platform • Authentication & Migration",
        summary:
          "Worked on a universal authentication experience integrating newly acquired products into a single login flow.",
        bullets: [
          "Built/maintained REST APIs and integration services in a hexagonal (ports/adapters) style.",
          "Designed and implemented features to support a smooth migration of users from legacy systems, with a focus on reliability and clear communication.",
          "Implemented analytics event tracking to improve visibility of sign-in/reset journeys during migration.",
          "Collaborated with Data/DevOps to ship changes safely across environments.",
        ],
        tech: ["TypeScript / Java", "Node.js / Spring Boot", "NestJS", "REST", "RabbitMQ", "DD/DDD-ish"],
        // links: optional (only if you can link)
      },
      {
        title: "Timetable Project",
        context: "Internal Product • Scheduling / Delivery",
        summary:
          "Delivered features that improved how users create, view, and manage schedules, with a focus on reliability and maintainability.",
        bullets: [
          "Developed the product end-to-end, from design and implementation to documentation and rollout.",
          "Improved API behaviour and documentation to reduce integration ambiguity.",
          "Worked in a cross-team setting, collaborating with frontend, data, and design colleagues to ship features that met user needs and aligned with product goals.",
          "Communicate iteratively with stakeholders and shipped in small, reviewable increments.",
        ],
        tech: ["TypeScript / C#", "Next.js / .NET", "REST", "Testing", "CI/CD"],
      },
      {
        title: "Public Sector Platform Work",
        context: "UK Government Department • Software Developer",
        summary:
          "Supporting a team as consultant on a public sector platform, focused on improving reliability and security while delivering new features.",
        bullets: [
          "Updating their legacy product suit to meet modern standards and security requirements, while working within the constraints of public sector delivery.",
          "Use of strong engineering practices (testing, code review, observability) to improve the reliability of services that have a direct impact on users.",
          "Working within stricter delivery constraints and governance typical of public sector systems.",
        ],
        tech: ["Python", "Django / Flask","APIs", "Security", "Observability"],
        sensitive: true,
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const active = workItems[activeIndex];

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4">
      <div className="py-16">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl font-bold">Selected Work</h2>
            <p className="opacity-80 mt-2 max-w-2xl">
              A snapshot of what I’ve shipped recently — focused on impact, collaboration,
              and maintainable backend delivery.
            </p>
          </div>

          {/* Optional: small clearance badge (only if true) */}
          <div className="flex gap-2 items-center">
            <Chip variant="flat">Security Clearance: SC</Chip>
          </div>
        </div>

        <Divider className="my-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left: list */}
          <div className="md:col-span-1 flex flex-col gap-4">
            {workItems.map((item, idx) => {
              const selected = idx === activeIndex;
              return (
                <button
                  key={item.title}
                  onClick={() => setActiveIndex(idx)}
                  className={`text-left rounded-2xl border p-4 transition
                    ${selected ? "border-orange-500 bg-orange-500/10" : "border-white/10 hover:border-white/20"}`}
                >
                  <div className="font-semibold text-lg">{item.title}</div>
                  <div className="text-sm opacity-70 mt-1">{item.context}</div>
                  <div className="text-sm opacity-80 mt-3 line-clamp-2">
                    {item.summary}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: details */}
          <Card className="md:col-span-2 rounded-2xl border border-white/10">
            <CardBody className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">{active.title}</h3>
                  <p className="opacity-70 mt-1">{active.context}</p>
                </div>

                {/* links (only if not sensitive) */}
                {!active.sensitive && active.links?.length ? (
                  <div className="flex gap-2">
                    {active.links.map((l) => (
                      <Button
                        key={l.href}
                        onPress={() => window.open(l.href, "_blank")}
                        className="font-semibold"
                        variant="flat"
                      >
                        {l.label} {l.icon}
                      </Button>
                    ))}
                  </div>
                ) : null}
              </div>

              <p className="mt-5 opacity-90">{active.summary}</p>

              <div className="mt-6">
                <p className="font-semibold mb-3">What I did</p>
                <ul className="list-disc ml-5 space-y-2 opacity-90">
                  {active.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-7">
                <p className="font-semibold mb-3">Tech</p>
                <div className="flex flex-wrap gap-2">
                  {active.tech.map((t) => (
                    <Chip key={t} variant="flat">
                      {t}
                    </Chip>
                  ))}
                </div>
              </div>

              {active.sensitive ? (
                <p className="mt-6 text-sm opacity-70">
                  Some details are intentionally generalised due to confidentiality.
                </p>
              ) : null}
            </CardBody>
          </Card>
        </div>

        {/* Optional: small personal projects section */}
        <div className="mt-12 opacity-80">
          <h4 className="text-xl font-semibold">Personal projects</h4>
          <p className="mt-2">
            Available on request / GitHub — kept separate from professional delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;