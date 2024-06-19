import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Footer = () => {

  const currentYear = new Date;
  return (
    <footer className="mx-auto max-w-8xl px-4 sm:px-6 md:px-6 lg:px-8 xl:px-10 relative z-10">
      <div className="mx-auto  p-4 flex flex-col text-center md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1">
        {`©${currentYear.getFullYear()}`} Jose Lopez<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1 mr-12">
          <a
            href="https://github.com/joselopezgr"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={40}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/jose-lopez7722/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={40}
            />
          </a>

          <a
            href="https://instagram.com/joselopezgr"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineInstagram
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={40}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
