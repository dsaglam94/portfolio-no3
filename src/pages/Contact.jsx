import React, { useEffect, useState } from "react";
import ContactHomePage from "../components/ContactHomePage";
import HomeNavigation from "../components/HomeNavigation";
import Loading from "../components/Loading";

const Contact = () => {
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
    <section className="min-h-screen bg-primary pt-32 overflow-x-hidden duration-300 ease-in">
      {loading ? <Loading loading={loading} /> : <Loading loading={loading} />}
      <HomeNavigation page={"Contact"} />
      <ContactHomePage />
    </section>
  );
};

export default Contact;
