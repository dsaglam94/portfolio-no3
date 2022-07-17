import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import {
  SiFirebase,
  SiHtml5,
  SiTailwindcss,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiExpress,
  SiJquery,
  SiBootstrap,
  SiNodedotjs,
  SiTypescript,
} from "react-icons/si";
import { DiSass } from "react-icons/di";

const Skills = ({ offsetY }) => {
  function slideLeft() {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  function slideRight() {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <div className="py-[5rem] select-none">
      <div className="flex items-center justify-center my-10">
        <h1
          id="text__glitch"
          className={
            offsetY > 800
              ? "custom-heading-effect text-heading tracking-widest font-bold text-3xl md:text-4xl px-10 overflow-hidden duration-300 ease-in before:-translate-x-20 after:translate-x-14 my-10"
              : "custom-heading-effect text-heading tracking-widest font-bold text-3xl md:text-4xl px-10 overflow-hidden duration-300 ease-in my-10"
          }
        >
          Skills
        </h1>
      </div>
      <div className="w-full bg-secondary relative py-8 px-20  duration-300 ease-in">
        <MdChevronLeft
          onClick={slideLeft}
          className="text-primary text-4xl md:text-6xl absolute top-[50%] -translate-y-1/2 left-3 cursor-pointer hover:text-accent"
        />
        <div
          id="slider"
          className="flex items-center gap-10 overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth h-full w-full"
        >
          <div className="p-2 md:p-10 flex flex-col items-center space-y-6">
            <div>
              <SiHtml5 className="text-primary text-4xl md:text-5xl" />
            </div>
            <div>
              <p className="text-primary font-bold text-xs md:text-lg">HTML5</p>
            </div>
          </div>
          <div className="p-2 md:p-10 flex flex-col items-center space-y-6">
            <div>
              <SiCss3 className="text-primary text-4xl md:text-5xl" />
            </div>
            <div>
              <p className="text-primary font-bold text-xs md:text-lg">CSS3</p>
            </div>
          </div>
          <div className="p-2 md:p-10 flex flex-col items-center space-y-6">
            <div>
              <DiSass className="text-primary text-4xl md:text-5xl" />
            </div>
            <div>
              <p className="text-primary font-bold text-xs md:text-lg">SCSS</p>
            </div>
          </div>
          <div className="p-2 md:p-10 flex flex-col items-center space-y-6">
            <div>
              <SiJavascript className="text-primary text-4xl md:text-5xl" />
            </div>
            <div>
              <p className="text-primary font-bold text-xs md:text-lg">
                JavaScript
              </p>
            </div>
          </div>
          <div className="p-2 md:p-10 flex flex-col items-center space-y-6">
            <div>
              <SiTypescript className="text-primary text-4xl md:text-5xl" />
            </div>
            <div>
              <p className="text-primary font-bold text-xs md:text-lg">
                TypeScript
              </p>
            </div>
          </div>
          <div className="p-2 md:p-10 flex flex-col items-center space-y-6">
            <div>
              <SiReact className="text-primary text-4xl md:text-5xl" />
            </div>
            <div>
              <p className="text-primary font-bold text-xs md:text-lg">
                ReactJs
              </p>
            </div>
          </div>
          <div className="p-2 md:p-10 flex flex-col items-center space-y-6">
            <div>
              <SiNodedotjs className="text-primary text-4xl md:text-5xl" />
            </div>
            <div>
              <p className="text-primary font-bold text-xs md:text-lg">
                NodeJs
              </p>
            </div>
          </div>
          <div className="p-2 md:p-10 flex flex-col items-center space-y-6">
            <div>
              <SiExpress className="text-primary text-4xl md:text-5xl" />
            </div>
            <div>
              <p className="text-primary font-bold text-xs md:text-lg">
                ExpressJs
              </p>
            </div>
          </div>
          <div className="p-2 md:p-10 flex flex-col items-center space-y-6">
            <div>
              <SiMongodb className="text-primary text-4xl md:text-5xl" />
            </div>
            <div>
              <p className="text-primary font-bold text-xs md:text-lg">
                MongoDB
              </p>
            </div>
          </div>
          <div className="p-2 md:p-10 flex flex-col items-center space-y-6">
            <div>
              <SiFirebase className="text-primary text-4xl md:text-5xl" />
            </div>
            <div>
              <p className="text-primary font-bold text-xs md:text-lg">
                Firebase
              </p>
            </div>
          </div>
          <div className="p-2 md:p-10 flex flex-col items-center space-y-6">
            <div>
              <SiTailwindcss className="text-primary text-4xl md:text-5xl" />
            </div>
            <div>
              <p className="text-primary font-bold text-xs md:text-lg">
                TailwindCSS
              </p>
            </div>
          </div>
          <div className="p-2 md:p-10 flex flex-col items-center space-y-6">
            <div>
              <SiBootstrap className="text-primary text-4xl md:text-5xl" />
            </div>
            <div>
              <p className="text-primary font-bold text-xs md:text-lg">
                Bootstrap
              </p>
            </div>
          </div>
          <div className="p-2 md:p-10 flex flex-col items-center space-y-6">
            <div>
              <SiJquery className="text-primary text-4xl md:text-5xl" />
            </div>
            <div>
              <p className="text-primary font-bold text-xs md:text-lg">
                jQuery
              </p>
            </div>
          </div>
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="text-primary text-4xl md:text-6xl absolute top-[50%] -translate-y-1/2 right-3 cursor-pointer hover:text-accent"
        />
      </div>
    </div>
  );
};

export default Skills;
