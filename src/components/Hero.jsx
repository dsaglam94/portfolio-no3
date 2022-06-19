import React from "react";
import { Link } from "react-router-dom";
import Circle from "./Circle";
import Resume from "./Resume";
import Socials from "./Socials";

const Hero = ({ offsetY }) => {
  return (
    <div>
      <div className="flex flex-col w-full min-h-screen items-center justify-center py-14">
        <div className="w-full flex flex-col items-center justify-center tracking-widest mt-auto">
          <div className="text-accent font-bold text-sm md:text-lg mb-2 flex items-center gap-4">
            <p
              data-aos="fade-right"
              data-aos-delay="2700"
              data-aos-duration="1000"
            >
              Creative.
            </p>
            <p
              data-aos="fade-right"
              data-aos-delay="2400"
              data-aos-duration="1000"
            >
              Curious.
            </p>
            <p
              data-aos="fade-right"
              data-aos-delay="2200"
              data-aos-duration="1000"
            >
              Enthusiastic.
            </p>
          </div>
          <div className="font-bold text-[5rem] md:text-[7rem]">
            <p className="text-heading">
              I'm <span id="text__glitch">Dawn</span>
            </p>
          </div>
          <div className="text-heading flex items-center gap-2">
            <span className="text-lg font-bold">&lt;</span>
            <p className="text-sm md:text-lg">A Full Stack Developer</p>
            <span className="text-lg font-bold">/&gt;</span>
          </div>
          <Link to="/contact">
            <div className="text-neon text-accent text-md md:text-xl font-bold tracking-widest w-full text-center mt-20 md:mt-14 hover:scale-105 duration-300 ease-in">
              Contact Me
            </div>
          </Link>
        </div>
        <Socials offsetY={offsetY} />
        <Resume offsetY={offsetY} />
        <div className="mt-auto">
          <Circle offsetY={offsetY} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
