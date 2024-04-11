"use client"; // this is a client component
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (nameRef.current) {
      (nameRef.current as HTMLHeadingElement)
        .querySelectorAll<HTMLSpanElement>(".char")
        .forEach((el: HTMLSpanElement, i: number) => {
          el.style.animationDelay = `${0.1 * i}s`;
        });
    }
  }, []);

  return (
    <section id="home" className="container">
      <div className="my-name-wrapper">
        <h1 className="my-name" ref={nameRef}>
          <span className="char">J</span>
          <span className="char">o</span>
          <span className="char">s</span>
          <span className="char" style={{ color: "#d66853" }}>
            é
          </span>
          <span className="char"> </span>
          <br /> {/* Add this line */}
          <span className="char">L</span>
          <span className="char">o</span>
          <span className="char">p</span>
          <span className="char" style={{ color: "#d66853" }}>
            e
          </span>
          <span className="char">z</span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
