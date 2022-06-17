import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [scrollStatus, setScrollStatus] = useState({
    scrollDirection: null,
    scrollPos: 0,
  });

  const handleScrollY = () => {
    setOffsetY(window.pageYOffset);

    setScrollStatus((prev) => {
      // to get 'previous' value of state
      return {
        scrollDirection:
          document.body.getBoundingClientRect().top > prev.scrollPos
            ? "up"
            : "down",
        scrollPos: document.body.getBoundingClientRect().top,
      };
    });
  };

  console.log(scrollStatus.scrollDirection);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);

    return () => window.removeEventListener("scroll", handleScrollY);
  }, []);

  return (
    <div>
      <ThemeProvider>
        <Navbar scrollDirection={scrollStatus.scrollDirection} />
        <Routes>
          <Route path="/" element={<Home offsetY={offsetY} />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
