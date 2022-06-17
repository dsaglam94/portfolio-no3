import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import featuredWorksData from "../FeaturedWorks";
import Project from "./Project";
AOS.init();

const WorksHome = ({ offsetY }) => {
  return (
    <section className="bg-primary px-5 md:px-20 overflow-x-hidden flex flex-col items-center justify-center duration-300 ease-in">
      {featuredWorksData.slice(0, 2).map((work, idx) => (
        <Project key={idx} work={work} idx={idx} />
      ))}
    </section>
  );
};

export default WorksHome;
