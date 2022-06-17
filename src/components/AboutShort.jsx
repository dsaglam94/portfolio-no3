import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const AboutShort = ({ offsetY }) => {
  return (
    <div className="bg-primary px-5 md:py-[5rem] overflow-x-hidden duration-300 ease-in">
      <div className="flex items-center justify-center my-10">
        <h1
          id="text__glitch"
          className={
            offsetY > 300
              ? "custom-heading-effect text-heading tracking-widest font-bold text-3xl md:text-4xl px-10 overflow-hidden duration-300 ease-in before:-translate-x-20 after:translate-x-14 my-10"
              : "custom-heading-effect text-heading tracking-widest font-bold text-3xl md:text-4xl px-10 overflow-hidden duration-300 ease-in my-10"
          }
        >
          About
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="md:w-2/5 md:text-right text-center space-y-2 tracking-wider"
        >
          <p className="text-primary text-sm sm:text-md md:text-xl font-bold text-center md:text-right">
            Intellectual growth should commence at birth and cease only at
            death.
          </p>
          <p className="text-gray-500 italic text-right text-xs md:text-sm">
            - Albert Enstein
          </p>
        </div>
        <p
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-duration="700"
          className="md:flex md:flex-col md:gap-2 text-sm md:text-md text-secondary text-center md:w-2/5  md:text-left"
        >
          I’m always curious about learning new tech skills, tools, and
          concepts. I enjoy the process of turning ideas into reality using
          creative solutions. I am open to growing in a workplace, tech
          communities, and open-source projects.
          <Link to="/about">
            <span className="link-underline inline-block text-sm relative text-accent hover:before:w-full ml-2 md:ml-0">
              Learn more
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AboutShort;
