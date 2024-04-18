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
              Hi there! It`s <span style={{ color: "#758e4f" }}>{"Jose"}</span>{" "}
              here
            </h2>
            <br />
            <p>
              I am a{" "}
              <span className="font-bold" style={{ color: "#758e4f" }}>
                {"Software Engineer"}
              </span>{" "}
              based in{" "}
              <span className="font-bold" style={{ color: "#758e4f" }}>
                {" Leeds, UK"}
              </span>{" "}
              with a passion for building innovative solutions. After a career
              change in 2022, I honed my skills at{" "}
              <span className="font-bold" style={{ color: "#758e4f" }}>
                Makers Academy
              </span>{" "}
              and have been delivering results in the tech industry ever since.
            </p>
            <br />
            <p>
              I bring a <span className="font-bold" style={{ color: "#758e4f" }}>growth mindset</span> and a <span className="font-bold" style={{ color: "#758e4f" }}>love of learning</span> to everything I
              do. Whether it&apos;s tackling a coding challenge or exploring a
              new city, I&apos;m always seeking ways to expand my knowledge.
            </p>
            <br />
            <p>
              I&apos;m eager to leverage my skills and enthusiasm on impactful
              projects. <span className="font-bold" style={{ color: "#d66853", cursor: "pointer" }} onClick={() => window.location.href = "#contact"}>Let&apos;s connect</span> and see how I can contribute to your
              team&apos;s success!
            </p>
            <br />
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
            {/* <Image
              src="/man-illustration.png"
              alt="cartoon-char"
              width={290}
              height={320}
              className="hidden md:block md:relative md:bottom-4 mt-4 md:left-32 md:z-0 bg-transparent"
            /> */}
          </div>
        </div>
        <div className="flex flex-row items-center text-center justify-center mt-4 "></div>
      </div>
    </section>
  );
};

export default AboutSection;
