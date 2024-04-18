"use client";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { url } from "inspector";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";

const ProjectSection = () => {
  const images = [
    {
      src: `https://picsum.photos/400/300?random=${Math.random()}`,
      title: "Project in progress",
    },
    {
      src: `https://picsum.photos/400/300?random=${Math.random()}`,
      title: "Project in progress",
    },
  ];

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6">
      <div className="my-8 pb-16 md:my-9 md:pb-20 lg:my-14 lg:pb-24 xl:my-16 xl:pb-28">
        <div className="project-container flex justify-center items-center h-full pt-8 pb-8">
          <div className="card1 m-4">
            <Card className="py-4 bg-background/60 dark:bg-default-100/25 hover:bg-default-100/55" isBlurred isPressable isHoverable onPress={() => window.open("https://github.com/joselopezgr/service-submatch-user", "_blank")}>
              <Fade direction="left" triggerOnce>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p style={{color: "#363636", fontStyle: "italic"}}>Work in progress</p>
                  <small className="" style={{ color: "#8b473a"}}>
                    Spring Boot, DDD, MongoDB, Microservices, and more
                  </small>
                  <h2 className="font-bold text-large">Submatch</h2>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  {" "}
                  <Image
                    src={images[0].src}
                    alt={images[0].title}
                    className="object-cover rounded-xl"
                    width={370}
                  />
                </CardBody>
              </Fade>
            </Card>
          </div>
          <div className="card2 m-4">
            <Card className="py-4 bg-background/60 dark:bg-default-100/25 hover:bg-default-100/55" isBlurred isPressable isHoverable onPress={() => window.open("https://github.com/joselopezgr/joselopezweb")}>
              <Fade direction="right" triggerOnce>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p style={{color: "#363636", fontStyle: "italic"}}>Work in progress</p>
                  <small className="" style={{ color: "#8b473a"}}>
                    Next.js, React, Tailwind, TypeScript, and more. 
                  </small>
                  <h2 className="font-bold text-large">Portfolio Web</h2>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  {" "}
                  <Image
                    src={images[1].src}
                    alt={images[1].title}
                    className="object-cover rounded-xl"
                    width={370}
                  />
                </CardBody>
              </Fade>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
