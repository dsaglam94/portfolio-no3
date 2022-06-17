import React, { useEffect, useState } from "react";
import HomeNavigation from "../components/HomeNavigation";
import Loading from "../components/Loading";
import Project from "../components/Project";
import featuredWorksData from "../FeaturedWorks";

const Works = () => {
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
    <div className="min-h-screen bg-primary pt-32 overflow-x-hidden px-5 md:px-20 duration-300 ease-in">
      {loading ? <Loading loading={loading} /> : <Loading loading={loading} />}
      <HomeNavigation page={"Works"} />
      {featuredWorksData.map((work, idx) => (
        <Project key={idx} work={work} idx={idx} />
      ))}
    </div>
  );
};

export default Works;
