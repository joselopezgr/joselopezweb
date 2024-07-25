"use client";
import HeroSection from "@/components/heroSection";
import AboutSection from "@/components/aboutSection";
import ProjectSection from "@/components/projectSection";
import ContactSection from "@/components/contactSection";
import { HiArrowDown } from "react-icons/hi";
import Footer from "@/components/others/footer";
import LetsConnect from "@/components/others/letsConnect";
import WavesSVG from "@/components/others/wavesSVG";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReadingListSection from "@/components/readingListSection";

type Section = "About" | "Projects" | "Contact" | "Readings";

const Index = () => {
  const [selectedSection, setSelectedSection] = useState<Section>("About");

  const sectionComponents: Record<Section, JSX.Element> = {
    About: <AboutSection />,
    Projects: <ProjectSection />,
    Contact: <ContactSection />,
    Readings: <ReadingListSection />,
  };

  return (
    <main className="mx-auto max-w-12xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 overflow-x-hidden">
      <WavesSVG />
      {/* <SvgComponent/> */}
      <HeroSection />
      <div
        className="remaining-part flex flex-row items-center text-center justify-center"
        style={{ color: "#363636" }}
      >
        <HiArrowDown size={35} className="animate-bounce" />
      </div>
      <div className="p-6 md:p-14 my-20 z-10 relative">
        <div className="selector-row flex flex-col md:flex-row justify-center gap-4 md:gap-8 my-4">
          {Object.keys(sectionComponents).map((section, index) => (
            <button
              key={index}
              className={`selector-button ${
                selectedSection === section ? "selected" : ""
              } text-2xl md:text-3xl font-silkscreen border-b-2 border-transparent hover:border-gray-500 focus:outline-none transition duration-300 ease-in-out t`}
              onClick={() => setSelectedSection(section as Section)}
            >
              {section}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          {selectedSection && (
            <motion.div
              key={selectedSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20}}
              transition={{ duration: 0.5 }}
            >
              {sectionComponents[selectedSection]}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <LetsConnect />
      <Footer />
    </main>
  );
};

export default Index;
