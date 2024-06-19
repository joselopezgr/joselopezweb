import { Project } from "next/dist/build/swc";

export type ProjectStructure = {
  title: string;
  description: string;
  techStack: string[];
  video: string;
  picture: string;
  github: string;
};

export const submatch: ProjectStructure = {
  title: "Submatch",
  description:
    "This is a project that I worked on during my time at Tes. It is a substitute teacher booking system that allows schools to request them based on their availability and qualifications. The system also allows the teachers to accept or decline the request.",
  techStack: [
    "Next.js & TS",
    "Java & Spring Boot",
    "Domain Driven Design",
    "Hexagonal Architecture",
    "OOP & SOLID principles",
    "Micro-services",
    "MongoDB",
    "STOMP Websocket",
    "Java Mail for SMTP",
  ],
  video: "/videos/submatch.mp4",
  picture: "/images/submatch.svg",
  github: "https://github.com/joselopezgr/service-submatch-job",
};

export const jediArchive: ProjectStructure = {
  title: "Jedi Archive",
  description:
    "This is part of a big project I am working on. It is a Star Wars themed website that will have multiple functionalities. The current code is for the backend that allows you create your own Jedi, built using NestJS, TypeORM, and PostgreSQL. The frontend will be built using Next.js and Tailwind CSS. The bigger project will include a Cantine for Bounty Hunters, a Droid Factory, and more.",
  techStack: [
    "NestJS",
    "TypeORM",
    "PostgreSQL",
    "TypeScript",
    "Docker",
    "Next.js",
    "Tailwind CSS",
  ],
  video: "",
  picture: "/images/jedi_archives.webp",
  github: "https://github.com/joselopezgr/jedi-archive",
};
