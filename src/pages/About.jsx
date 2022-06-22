import React, { useEffect, useState } from "react";
import HomeNavigation from "../components/HomeNavigation";
import Loading from "../components/Loading";
import Resume from "../components/Resume";
import Socials from "../components/Socials";

const About = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
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
    <div className="min-h-screen bg-primary pt-32 overflow-x-hidden duration-300 ease-in">
      {loading ? <Loading loading={loading} /> : <Loading loading={loading} />}
      <HomeNavigation page={"About"} />
      <Socials />
      <Resume />
      <div className="text-sm md:text-[1rem] leading-7 text-primary md:w-[65%] w-full mx-auto px-5 py-10 space-y-6">
        <p>
          I am a former English and French teacher whose passion is tech. I
          ignored my passion for a long time until I decided to take this scary
          step of changing my career and it was one of the best decisions I made
          so far.
        </p>
        <p>
          One of the reasons why tech is my passion is that its ever-changing
          aspect. Since childhood, I was always eager to learn new things and
          experiences. Being comfortable with constant learning is one of my
          strengths that always helped me through my life.
        </p>
        <p>
          As covid-19 affected everyone’s daily lives, teachers had to conduct
          more and more online classes. One of my problem was I couldn’t find an
          educative website for my needs that allows us to play games while
          teaching. So I thought I could be a help. The idea of helping people
          with something you create and the feeling you experience after
          accomplishing what you wanted is amazing. This is how and why I
          started learning software development. Since then, I never stopped.
        </p>
      </div>
    </div>
  );
};

export default About;
