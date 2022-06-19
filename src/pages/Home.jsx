import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AboutShort from "../components/AboutShort";
import ContactHomePage from "../components/ContactHomePage";
import Skills from "../components/Skills";
import WorksHome from "../components/WorksHome";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Hero from "../components/Hero";
AOS.init();

const Home = ({ offsetY }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    window.document.documentElement.style.overflowY = "hidden";
  } else {
    window.document.documentElement.style.overflowY = "scroll";
  }

  return (
    <div className="bg-primary w-full overflow-x-hidden duration-300 ease-in">
      {loading ? <Loading loading={loading} /> : <Loading loading={loading} />}
      <Hero offsetY={offsetY} />
      <AboutShort offsetY={offsetY} />
      <Skills offsetY={offsetY} />
      <div className="flex items-center justify-center my-10">
        <h1
          id="text__glitch"
          className={
            offsetY > 1400
              ? "custom-heading-effect text-heading tracking-widest font-bold text-3xl md:text-4xl px-10 overflow-hidden duration-300 ease-in before:-translate-x-20 after:translate-x-14 my-10"
              : "custom-heading-effect text-heading tracking-widest font-bold text-3xl md:text-4xl px-10 overflow-hidden duration-300 ease-in my-10"
          }
        >
          Works
        </h1>
      </div>
      <WorksHome offsetY={offsetY} />
      <Link
        className="text-neon text-accent tracking-wider text-lg font-bold mb-32 flex items-center justify-center hover:scale-105 duration-300 ease-in"
        to="/works"
      >
        Check More
      </Link>
      <div className="flex items-center justify-center my-10">
        <h1
          id="text__glitch"
          className={
            offsetY > 3000
              ? "custom-heading-effect text-heading tracking-widest font-bold text-3xl md:text-4xl px-10 overflow-hidden duration-300 ease-in before:-translate-x-20 after:translate-x-14 my-10"
              : "custom-heading-effect text-heading tracking-widest font-bold text-3xl md:text-4xl px-10 overflow-hidden duration-300 ease-in my-10"
          }
        >
          Contact
        </h1>
      </div>
      <ContactHomePage />
      <Footer />
    </div>
  );
};

export default Home;
