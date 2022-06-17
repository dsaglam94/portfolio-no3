import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/dawn_logo2.svg";
import { Link } from "react-router-dom";
import MenuToggle from "./MenuToggle";
import CV from "../assets/dawn_cv_eng_1page.pdf";

const Navbar = ({ scrollDirection }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // don't allow scrolling when nav is open
  if (nav) {
    window.document.documentElement.style.overflowY = "hidden";
    window.document.documentElement.classList.add("lock-screen");
  } else {
    window.document.documentElement.style.overflowY = "scroll";
    window.document.documentElement.classList.remove("lock-screen");
  }

  return (
    <div>
      <div
        className={
          scrollDirection === "down"
            ? "hidden md:block bg-secondary fixed top-0 left-0 w-full px-20 py-6 shadow-xl z-[1000] -translate-y-[100%] duration-300 ease-in"
            : "hidden md:block bg-secondary fixed top-0 left-0 w-full px-20 py-6 shadow-xl z-[1000] duration-300 ease-in"
        }
      >
        <div className="flex items-center h-full w-full">
          <div className="flex flex-col items-center text-center">
            <Link to="/">
              <img className="w-full h-8 block" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="flex items-center w-full">
            <div className="text-heading text-center ml-auto">
              <ul className="flex items-center gap-20 font-bold tracking-wider">
                <Link to="/about">
                  <li className="text-sm 2xl:text-[1.2rem] hover:text-accent">
                    <span className="text-xs text-accent mr-2">01.</span>About
                  </li>
                </Link>
                <Link to="/works">
                  <li className="text-sm 2xl:text-[1.2rem] hover:text-accent">
                    <span className="text-xs text-accent mr-2">02.</span>Works
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="text-sm 2xl:text-[1.2rem] hover:text-accent">
                    <span className="text-xs text-accent mr-2">03.</span>Contact
                  </li>
                </Link>
                <li className="text-sm 2xl:text-[1.2rem] text-accent">
                  <a
                    className="link-underline hover:before:w-full relative"
                    href={CV}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
            <div className="ml-auto">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
      {/* mobile navbar & menu */}
      <div className="md:hidden bg-secondary p-6 fixed top-0 left-0 w-full flex items-center justify-between shadow-xl duration-300 ease-in z-[100]">
        <div>
          <Link to="/">
            <img
              className="w-full h-8 relative z-[100]"
              src={logo}
              alt="logo"
            />
          </Link>
        </div>
        <div>
          <MenuToggle nav={nav} handleClick={handleNav} />
        </div>
        <div
          className={
            nav
              ? "fixed top-20 left-0 w-full h-full z-[100] py-36 px-20 flex flex-col justify-between bg-secondary ease-in duration-300"
              : "fixed -top-[100%] left-0 w-full h-full z-[100] py-36 px-20 flex flex-col justify-between ease-in duration-300"
          }
        >
          <div className="flex items-center justify-center">
            <ul className="text-heading flex flex-col items-start text-2xl font-bold space-y-14">
              <Link to="/about">
                <li onClick={handleNav} className="hover:text-accent">
                  <span className="text-xl text-accent mr-6">01.</span>
                  About
                </li>
              </Link>
              <Link to="/works">
                <li onClick={handleNav} className="hover:text-accent">
                  <span className="text-xl text-accent mr-6">02.</span>
                  Works
                </li>
              </Link>
              <Link to="/contact">
                <li onClick={handleNav} className="hover:text-accent">
                  <span className="text-xl text-accent mr-6">03.</span>
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex items-center justify-between w-full">
            <a
              onClick={handleNav}
              className="link-underline hover:before:w-full text-accent text-xl font-bold relative"
              href={CV}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
