import React from "react";
import { FaTwitter, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const SocialLinks = ({ offsetY }) => {
  return (
    <div
      className={
        offsetY > 300
          ? "fixed top-1/2 -translate-y-1/2 -left-[7.3rem]  flex-col items-center pr-36 select-none pointer-events-none opacity-0 ease-in duration-300"
          : "hidden fixed top-1/2 -translate-y-1/2 -left-[7.3rem]  md:flex flex-col items-center pr-36 opacity-100 ease-in duration-300"
      }
    >
      <div
        data-aos="fade-right"
        data-aos-delay="2700"
        data-aos-duration="700"
        className="ml-[7.5rem] text-neon text-xs py-4 font-bold text-gray-500"
      >
        <p>Follow me</p>
      </div>
      <div className="bg-[#4f4f4f] w-[190px] p-4 hover:translate-x-[7rem] duration-300 ease-in">
        <p className="font-bold tracking-wider text-white">
          <a
            href="https://github.com/dsaglam94"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between"
          >
            GitHub
            <FaGithub className="text-3xl" />
          </a>
        </p>
      </div>
      <div className="bg-[#0177b5] w-[190px] p-4 hover:translate-x-[7rem] duration-300 ease-in group">
        <p className="font-bold tracking-wider text-white">
          <a
            href="https://www.linkedin.com/in/d-saglam/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between"
          >
            LinkedIn
            <FaLinkedinIn className="text-3xl" />
          </a>
        </p>
      </div>
      <div className="bg-[#04abed] w-[190px] p-4 hover:translate-x-[7rem] duration-300 ease-in group">
        <p className="font-bold tracking-wider text-white">
          <a
            href="https://twitter.com/dsaglam94"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between"
          >
            Twitter
            <FaTwitter className="text-3xl" />
          </a>
        </p>
      </div>
      <div className="bg-instagram w-[190px] p-4 hover:translate-x-[7rem] duration-300 ease-in group">
        <p className="font-bold tracking-wider text-white">
          <a
            href="https://www.instagram.com/monsieur.antika/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between"
          >
            Instagram
            <FaInstagram className="text-3xl" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default SocialLinks;
