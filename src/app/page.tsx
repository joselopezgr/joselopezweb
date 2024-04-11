"use client";
import HeroSection from "@/components/heroSection";
import AboutSection from "@/components/aboutSection";
import ProjectSection from "@/components/projectSection";
import ContactSection from "@/components/contactSection";
import { HiArrowDown } from "react-icons/hi";
import Footer from "@/components/footer";
import { Slide } from "react-awesome-reveal";
import AboutTitle from "@/components/aboutTitle";
import ProjectTitle from "@/components/projectTitle";
import ContactTitle from "@/components/contactTitle";
import LetsConnect from "@/components/letsConnect";
import SvgComponent from "@/components/svgComponent";

const Index = () => {
  return (
    <main className="mx-auto max-w-12xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      {/* <SvgComponent/> */}
      <HeroSection />
      <div
        className="remaining-part flex flex-row items-center text-center justify-center"
        style={{ color: "#363636" }}
      >
        <HiArrowDown size={35} className="animate-bounce" />
      </div>

      {/* After the arrow, continuou the about section */}
      <AboutTitle />
      <Slide duration={1800} triggerOnce delay={150}>
        <AboutSection />
      </Slide>
      <ProjectTitle />
      <Slide direction="right" duration={1800} triggerOnce delay={150}>
        <ProjectSection />
      </Slide>
      <ContactTitle />
      <Slide duration={1800} triggerOnce delay={150} direction="up">
        <ContactSection />
      </Slide>
      <Slide duration={1800} triggerOnce delay={150} direction="up">
        <LetsConnect />
        <Footer />
      </Slide>
    </main>
  );
};

export default Index;
