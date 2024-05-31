"use client";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { url } from "inspector";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";

const ProjectSection = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6">
      <div className="my-8 pb-16 md:my-9 md:pb-20 lg:my-14 lg:pb-24 xl:my-16 xl:pb-28">
        <div className="project-container flex justify-center items-center h-full pt-8 pb-8">
          <div className="project-section">
            <h1>Submatch</h1>
            <p className="text-left ml-6">
              This is a project that I worked on during my time at{" "}
              <a href="https://www.tes.com/en-gb">Tes</a>. It is a substitute
              teacher booking system that allows schools to request them based
              on their availability and qualifications. The system also allows
              the teachers to accept or decline the request.
              <br />
              <br />
              The project was built using the following technologies:
              <br />
              <br />
              <ul className="tech-list">
                <li>Next.js & TS</li>
                <li>Java & Spring Boot</li>
                <li>Domain Driven Design</li>
                <li>Hexagonal Architecture</li>
                <li>OOP & SOLID principles</li>
                <li>Micro-services</li>
                <li>MongoDB</li>
                <li>STOMP Websocket</li>
                <li>Java Mail for SMTP</li>
              </ul>
            </p>
            <p style={{color: "#d66853"}}>
              Click or hover over to watch the video demo of the project.
            </p>
            <div className="video-container">
              <video
                className="project-video"
                onMouseOver={(event) => event.currentTarget.play()}
                onMouseOut={(event) => event.currentTarget.pause()}
              >
                <source src="/videos/submatch.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h2 className="italic">Project code can be review under request</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
