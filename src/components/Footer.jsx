import React from "react";
import { TbGitFork } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="mt-10 p-8 bg-secondary duration-300 ease-in">
      <div className="flex flex-col items-center justify-center text-[0.6rem] md:text-xs text-center gap-3">
        <p className="text-primary">
          imDawn &copy;2022. All rights reserved. Created by Dawn.
        </p>
        <a
          className="flex items-center gap-1 text-accent"
          href="https://github.com/dsaglam94/portfolio-no3.git"
          target="_blank"
          rel="noreferrer"
        >
          <TbGitFork className="text-lg" /> imDawn Portfolio Repo
        </a>
      </div>
    </div>
  );
};

export default Footer;
