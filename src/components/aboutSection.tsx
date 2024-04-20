import React from "react";
import Image from "next/image";
import { FaAws, FaDocker, FaJava, FaReact } from "react-icons/fa";
import {
  SiElastic,
  SiNextdotjs,
  SiRabbitmq,
  SiRuby,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import Link from "next/link";

const technologies = [
  {
    Java: {
      icon: <FaJava />,
      url: "https://docs.oracle.com/en/java/",
    },
  },
  {
    TypeScript: {
      icon: <SiTypescript />,
      url: "https://www.typescriptlang.org/docs/",
    },
  },
  {
    JavaScript: {
      icon: <IoLogoJavascript />,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
  },
  {
    SpringBoot: {
      icon: <SiSpringboot />,
      url: "https://spring.io/projects/spring-boot",
    },
  },
  {
    Ruby: { icon: <SiRuby />, url: "https://ruby-doc.org/" },
  },
  {
    React: { icon: <FaReact />, url: "https://react.dev/" },
  },
  {
    Nextjs: {
      icon: <SiNextdotjs />,
      url: "https://nextjs.org/docs",
    },
  },
  {
    AWS: { icon: <FaAws />, url: "https://docs.aws.amazon.com/" },
  },
  {
    RabbitMQ: {
      icon: <SiRabbitmq />,
      url: "https://www.rabbitmq.com/documentation.html",
    },
  },
  {
    MongoDB: {
      icon: <DiMongodb />,
      url: "https://www.mongodb.com/docs/",
    },
  },
  {
    ElasticStack: {
      icon: <SiElastic />,
      url: "https://www.elastic.co/guide/index.html?utm_campaign=Google-B-EMEA-UKI-Exact&utm_content=Stack-Documentation&utm_source=google&utm_medium=cpc&device=c&utm_term=elasticsearch%20documentation&gad_source=1&gclid=CjwKCAiAzJOtBhALEiwAtwj8tmbNwjhAC2TgnNkX7bt5Wf3ygjNFuqXqNCieEwG4il8yLvKTVeEPuRoC6gcQAvD_BwE",
    },
  },
  {
    Docker: {
      icon: <FaDocker />,
      url: "https://docs.docker.com/",
    },
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6">
      <div className="my-8 pb-16 md:my-9 md:pb-20 lg:my-14 lg:pb-24 xl:my-16 xl:pb-28">
        <div className="about-container flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 p-8">
            <h2 className="font-bold text-2xl">
              Hi there! It`s <span style={{ color: "#628395" }}>{"Jose"}</span>{" "}
              here
            </h2>
            <br />
            <p>
              I am a{" "}
              <span className="font-bold" style={{ color: "#628395" }}>
                {"Software Engineer"}
              </span>{" "}
              who calls the vibrant city of{" "}
              <span className="font-bold" style={{ color: "#628395" }}>
                {" Leeds, UK"}
              </span>{" "}
              home.
            </p>
            <p>
              My coding journey kicked off at a bootcamp, and boy, what a ride
              it&apos;s been! From there, I landed an apprenticeship at an
              EdTech company, where my knowledge expanded faster than
              JavaScript&apos;s ecosystem.{" "}
            </p>
            <br />
            <p>
              Speaking of JavaScript, that&apos;s where I took my first coding
              steps. But the bootcamp had me diving deep into the world of
              vanilla Ruby, where I got my hands dirty with the fundamentals of
              OOP. During my work placement, I got to tinker with TypeScript,
              Microservices, and Next.js (which I used to build my website).
            </p>
            <br />
            <p>But wait, there&apos;s more!</p>
            <p>
              <span className="font-bold">
                <a href="https://github.com/joselopezgr/joselopezweb" target="_blank" className="hover:text-sky-600">
                  [Checkout the Readme to continue reading about me]
                </a>
              </span>
            </p>
          </div>

          <div className="text-center md:w-1/2 md:text-left p-8">
            <h2 className="text-2xl font-bold mb-6">Tools and skills</h2>
            <div className=" flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {technologies.map((item, idx) => {
                const [key, value] = Object.entries(item)[0];
                return (
                  <Link key={idx} href={value.url} target="_blank">
                    <p key={idx} className="tech-buttons">
                      <span className="mr-1">{value.icon}</span>
                      <span className="md:inline hidden">{key}</span>
                    </p>
                  </Link>
                );
              })}
              <p id="extra-text">And much more to come </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center text-center justify-center mt-4 "></div>
      </div>
    </section>
  );
};

export default AboutSection;
