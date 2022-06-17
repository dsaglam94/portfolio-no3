import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AboutShort from "../components/AboutShort";
import Circle from "../components/Circle";
import ContactHomePage from "../components/ContactHomePage";
import Skills from "../components/Skills";
import SocialLinks from "../components/SocialLinks";
import WorksHome from "../components/WorksHome";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
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
      <div className="flex flex-col w-full min-h-screen items-center justify-center py-14">
        <div className="w-full flex flex-col items-center justify-center tracking-widest mt-auto">
          <div className="text-accent font-bold text-xs md:text-[1rem] mb-2 flex items-center gap-2">
            <p
              data-aos="fade-right"
              data-aos-delay="2700"
              data-aos-duration="1000"
            >
              Creative.{" "}
            </p>
            <p
              data-aos="fade-right"
              data-aos-delay="2400"
              data-aos-duration="1000"
            >
              Passionate.
            </p>
            <p
              data-aos="fade-right"
              data-aos-delay="2200"
              data-aos-duration="1000"
            >
              Enthusiastic.
            </p>
          </div>
          <div className="font-bold text-[3.5rem] md:text-[6rem] mb-2">
            <p className="text-heading">
              I'm <span id="text__glitch">Dawn</span>
            </p>
          </div>
          <div className="text-heading flex items-center gap-2">
            <span className="text-lg font-bold">&lt;</span>
            <p className="text-xs md:text-[1rem]">
              A Full-Stack MERN developer
            </p>
            <span className="text-lg font-bold">/&gt;</span>
          </div>
          <Link to="/contact">
            <div className="text-neon text-heading text-md md:text-xl font-bold tracking-widest w-full text-center mt-10">
              CONTACT ME
            </div>
          </Link>
        </div>
        <SocialLinks offsetY={offsetY} />
        <div className="mt-auto">
          <Circle offsetY={offsetY} />
        </div>
      </div>
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
        className="text-neon tracking-wider font-bold mt-10 mb-20 flex items-center justify-center"
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
