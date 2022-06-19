import React from "react";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";

const Socials = ({ offsetY }) => {
  return (
    <div
      className={
        offsetY > 300
          ? "select-none pointer-events-none fixed top-1/2 left-0 -translate-y-1/2 space-y-6 opacity-0 duration-300 ease-in"
          : "hidden md:block fixed top-1/2 left-0 -translate-y-1/2 space-y-6 opacity-90 duration-300 ease-in"
      }
    >
      <div className="flex items-center gap-2 -translate-x-14 hover:-translate-x-4 duration-300 ease-in">
        <div className="w-[100px] h-[3px] bg-accent rounded-md"></div>
        <a href="https://github.com/dsaglam94" target="_blank" rel="noreferrer">
          <FiGithub className="neon-flicker text-4xl" />
        </a>
      </div>
      <div className="flex items-center gap-2 -translate-x-14 hover:-translate-x-4 duration-300 ease-in">
        <div className="w-[100px] h-[3px] bg-accent rounded-md"></div>
        <a
          href="https://www.linkedin.com/in/d-saglam/"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin className="neon-flicker text-4xl" />
        </a>
      </div>
      <div className="flex items-center gap-2 -translate-x-14 hover:-translate-x-4 duration-300 ease-in">
        <div className="w-[100px] h-[3px] bg-accent rounded-md"></div>
        <a
          href="https://twitter.com/dsaglam94"
          target="_blank"
          rel="noreferrer"
        >
          <FiTwitter className="neon-flicker text-4xl" />
        </a>
      </div>
      <div className="flex items-center gap-2 -translate-x-14 hover:-translate-x-4 duration-300 ease-in">
        <div className="w-[100px] h-[3px] bg-accent rounded-md"></div>
        <a
          href="https://www.instagram.com/monsieur.antika/"
          target="_blank"
          rel="noreferrer"
        >
          <FiInstagram className="neon-flicker text-4xl" />
        </a>
      </div>
    </div>
  );
};

export default Socials;
