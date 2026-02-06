"use client";

import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";

const BeyondWorkSection = () => {
  return (
    <section id="beyond-work" className="mx-auto max-w-6xl px-4">
      <div className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* LEFT */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Beyond work</h2>
            <p className="opacity-80 max-w-xl">
              A few things I enjoy outside of day-to-day engineering that help
              keep me curious, balanced, and improving.
            </p>

            {/* Learning */}
            <div className="rounded-2xl border border-white/10 p-5">
              <p className="font-semibold">Learning & curiosity</p>
              <ul className="mt-3 list-disc ml-5 space-y-2 opacity-90">
                <li>
                  Reading about fundamentals like algorithms, clean code, and
                  domain-driven design.
                </li>
                <li>
                  Revisiting core concepts (OOP, FP, system design) rather than
                  chasing frameworks.
                </li>
                <li>
                  Occasionally stepping outside tech into topics like habits
                  and personal growth.
                </li>
              </ul>
            </div>

            {/* Hobbies */}
            <div className="rounded-2xl border border-white/10 p-5">
              <p className="font-semibold">Outside of coding</p>
              <ul className="mt-3 list-disc ml-5 space-y-2 opacity-90">
                <li>Reading fiction (sci-fi, fantasy).</li>
                <li>Spending time exploring Leeds and staying active.</li>
                <li>Enjoying slower, offline time to reset after deep work.</li>
              </ul>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            {/* Reading highlights */}
            <div className="rounded-2xl border border-white/10 p-5">
              <p className="font-semibold">A few books that stuck with me</p>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="https://www.manning.com/books/grokking-algorithms"
                    target="_blank"
                    className="font-medium hover:text-sky-700 inline-flex items-center gap-2"
                  >
                    Grokking Algorithms <HiExternalLink />
                  </Link>
                  <p className="text-sm opacity-70">
                    Solid intuition for algorithmic thinking.
                  </p>
                </li>
                <li>
                  <Link
                    href="https://www.infoq.com/minibooks/domain-driven-design-quickly/"
                    target="_blank"
                    className="font-medium hover:text-sky-700 inline-flex items-center gap-2"
                  >
                    Domain-Driven Design Quickly <HiExternalLink />
                  </Link>
                  <p className="text-sm opacity-70">
                    A pragmatic intro to modelling complex domains.
                  </p>
                </li>
                <li>
                  <Link
                    href="https://www.amazon.com/Name-Wind-Kingkiller-Chronicle/dp/0756404746"
                    target="_blank"
                    className="font-medium hover:text-sky-700 inline-flex items-center gap-2"
                  >
                    The Name of the Wind <HiExternalLink />
                  </Link>
                  <p className="text-sm opacity-70">
                    Great storytelling and world-building.
                  </p>
                </li>
              </ul>
            </div>

            {/* Tie-back */}
            <div className="rounded-2xl border border-white/10 p-5">
              <p className="font-semibold">Why this matters</p>
              <p className="mt-2 opacity-80">
                I’ve found that staying curious outside of work helps me bring
                more perspective, patience, and clarity into how I design and
                build software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondWorkSection;