import React from "react";
import { Link } from "react-router-dom";

const HomeNavigation = ({ page }) => {
  return (
    <>
      <div className="text-heading w-full flex items-center justify-center gap-4 font-bold text-2xl md:text-3xl">
        <Link className="hover:text-accent" to="/">
          Home
        </Link>
        <span>|</span>
        <p className="text-accent">{page}</p>
      </div>
    </>
  );
};

export default HomeNavigation;
