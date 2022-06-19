import React from "react";
import CV from "../assets/dawn_cv_eng_1page.pdf";

const Resume = ({ offsetY }) => {
  return (
    <div
      className={
        offsetY > 300
          ? "select-none pointer-events-none fixed -top-[100%] right-[85px] opacity-0 duration-300 ease-in"
          : "hidden md:block fixed top-0 right-[85px] opacity-90 duration-300 ease-in"
      }
    >
      <div className="flex flex-col items-center gap-2">
        <div className="w-[3px] h-[280px] bg-accent rounded-md"></div>
        <a href={CV} target="_blank" rel="noreferrer">
          <div className="neon-flicker text-[1rem] flex flex-col items-center justify-center font-bold text-accent">
            <span>R</span>
            <span>E</span>
            <span>S</span>
            <span>U</span>
            <span>M</span>
            <span>E</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Resume;
