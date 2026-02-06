"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import HeroSection from "@/components/heroSection";
import AboutSection from "@/components/aboutSection";
import ProjectSection from "@/components/projectSection";
import ContactSection from "@/components/contactSection";
import Footer from "@/components/others/footer";
import LetsConnect from "@/components/others/letsConnect";
import WavesSVG from "@/components/others/wavesSVG";
import BeyondWorkSection from "@/components/readingListSection";

type SectionKey = "About" | "Projects" | "Contact" | "Beyond";

const sections: Array<{ key: SectionKey; label: string }> = [
  { key: "About", label: "About" },
  { key: "Projects", label: "Projects" },
  { key: "Contact", label: "Contact" },
  { key: "Beyond", label: "Beyond work" },
];

const sectionComponents: Record<SectionKey, JSX.Element> = {
  About: <AboutSection />,
  Projects: <ProjectSection />,
  Contact: <ContactSection />,
  Beyond: <BeyondWorkSection />,
};

const Index = () => {
  const [selectedSection, setSelectedSection] = useState<SectionKey>("About");
  const tabRef = useRef<HTMLDivElement>(null);

  return (
    <main className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 overflow-x-hidden">
      <WavesSVG />
      <HeroSection onGoTo={(section) =>{
        setSelectedSection(section);
        tabRef.current?.scrollIntoView({behavior: "smooth", block: "start"})
      }}/>

      <div ref={tabRef} className="p-6 md:p-14 my-20 z-10 relative">
        {/* Selector row */}
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 my-4">
          {sections.map((s) => {
            const selected = selectedSection === s.key;

            return (
              <button
                key={s.key}
                onClick={() => setSelectedSection(s.key)}
                className={[
                  "text-2xl md:text-3xl font-silkscreen",
                  "border-b-2 pb-1 transition duration-200 ease-in-out",
                  "focus:outline-none",
                  selected ? "border-gray-800" : "border-transparent hover:border-gray-500",
                ].join(" ")}
              >
                {s.label}
              </button>
            );
          })}
        </div>

          <div
            className="relative h-[75vh] overflow-y-auto hide-scrollbar rounded-2xl"
          >
            {/* Motion content */}
          <AnimatePresence mode="wait" initial={false} presenceAffectsLayout={false}>
            <motion.div
              key={selectedSection}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="min-h-[700px] md:min-h-[900px] lg:min-h-[1000px]"
            >
              {sectionComponents[selectedSection]}
            </motion.div>
          </AnimatePresence>
          </div>
        </div>

      <LetsConnect />
      <Footer />
    </main>
  );
};

export default Index;