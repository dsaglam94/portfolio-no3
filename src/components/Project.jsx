import React from "react";
import { Link } from "react-router-dom";

import { TbWorld } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { FaAsterisk } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Project = ({ work, idx }) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between group my-10 space-y-10 gap-4">
      <div
        data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
        data-aos-delay="150"
        data-aos-duration="700"
        className={
          idx % 2 === 0
            ? "w-full md:w-1/2 rounded-md overflow-hidden md:order-0 shadow-xl"
            : "w-full md:w-1/2 rounded-md overflow-hidden md:order-1 shadow-xl"
        }
      >
        <div className="relative">
          <img
            className="w-full"
            src={work?.imgUrl}
            alt={work.title}
            loading="lazy"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 duration-300 ease-in group-hover:opacity-0"></div>
        </div>
      </div>
      <div
        data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}
        data-aos-delay="350"
        data-aos-duration="700"
        className="md:p-6 w-full md:w-1/2"
      >
        <div className="md:text-right space-y-2 flex items-center justify-between">
          <span className="text-primary flex items-center md:justify-end gap-1 order-1">
            <FaAsterisk
              className={
                work?.label === "Fresh"
                  ? "text-xs text-green-500"
                  : "text-xs text-yellow-500"
              }
            />
            {work?.label}
          </span>
          <h1
            className={
              idx % 2 === 1
                ? "text-lg font-bold text-primary order-1"
                : "text-lg font-bold text-primary order-0"
            }
          >
            {work?.title}
          </h1>
        </div>
        <div
          className={
            idx % 2 === 0
              ? "my-4 px-4 py-8 bg-secondary text-primary w-full rounded-md md:w-[150%] md:-ml-[1rem] z-10 relative md:text-left shadow-xl"
              : "my-4 px-4 py-8 bg-secondary text-primary w-full rounded-md md:w-[150%] md:-ml-[17rem] z-10 relative md:text-left shadow-xl"
          }
        >
          <p
            className={
              idx % 2 === 0
                ? "text-xs md:text-[0.85rem] leading-6 md:w-[70%]"
                : "text-xs md:text-[0.85rem] leading-6 ml-auto md:w-[70%]"
            }
          >
            {work?.description}
          </p>
          <p
            className={
              idx % 2 === 0
                ? "md:w-[70%] mt-4 text-gray-500 text-xs md:text-sm"
                : "ml-auto md:w-[70%] mt-4 text-gray-500 text-xs md:text-sm"
            }
          >
            Please check source code for more details*
          </p>
        </div>
        <div
          className={
            idx % 2 === 0
              ? "text-xs space-x-4 font-bold text-secondary md:text-right my-6"
              : "text-xs space-x-4 font-bold text-secondary md:text-left my-6"
          }
        >
          {work.techs.map((tech, idx) => (
            <span key={idx}>{tech}</span>
          ))}
        </div>
        {/* Mobile */}
        <div className="md:hidden w-full flex items-center justify-between my-4 text-primary">
          <div className="flex items-center gap-4">
            <a
              className="flex items-center gap-2 text-xs md:text-sm hover:text-accent"
              href={work?.source_code}
            >
              <BsGithub className="inline-block text-2xl" /> Source Code
            </a>
            <a
              className="flex items-center gap-2 text-xs md:text-sm hover:text-accent"
              href={work?.live_preview}
            >
              <TbWorld className="inline-block text-2xl" /> Live Preview
            </a>
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden w-full md:flex items-center justify-between my-10 text-primary">
          <Link className="text-sm hover:text-accent order-1" to="/">
            {""}
          </Link>
          {idx % 2 === 0 ? (
            <div
              className={
                idx % 2 === 0
                  ? "flex items-center gap-4 order-1"
                  : "flex items-center gap-4 order-0"
              }
            >
              <a
                className="flex items-center gap-2 text-sm hover:text-accent"
                href={work?.live_preview}
                target="_blank"
                rel="noreferrer"
              >
                Live Preview
                <TbWorld className="inline-block text-2xl" />
              </a>
              <a
                className="flex items-center gap-2 text-sm hover:text-accent"
                href={work?.source_code}
                target="_blank"
                rel="noreferrer"
              >
                Source Code
                <BsGithub className="inline-block text-2xl" />
              </a>
            </div>
          ) : (
            <div
              className={
                idx % 2 === 0
                  ? "flex items-center gap-4 order-1"
                  : "flex items-center gap-4 order-0"
              }
            >
              <a
                className="flex items-center gap-2 text-sm hover:text-accent"
                href={work?.source_code}
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="inline-block text-2xl" /> Source Code
              </a>
              <a
                className="flex items-center gap-2 text-sm hover:text-accent"
                href={work?.live_preview}
                target="_blank"
                rel="noreferrer"
              >
                <TbWorld className="inline-block text-2xl" /> Live Preview
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
