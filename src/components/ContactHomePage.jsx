import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineLocationCity } from "react-icons/md";
import { FaTwitter, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ContactHomePage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const url = "https://dawn-contact-form-server.herokuapp.com/post";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email: email,
          subject: subject,
          message: message,
        }),
      });
      let data = await res.json();
      console.log(data);

      if (data.status === "success") {
        alert(
          "Great, I received your message! I will reach you as soon as possible."
        );
        setFullName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        alert("Oops. Something went wrong. Try again please.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full md:px-10">
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center gap-10 p-5">
        <div
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="700"
          className="md:w-1/2"
        >
          <p className="text-secondary text-center md:text-left py-4 text-xs md:text-sm">
            You want to get in touch, talk about a project collaboration? Just
            fill up the form below or send an email to{" "}
            <a
              className="link-underline text-accent relative hover:before:w-full"
              href="mailto:info@imdawn.me"
            >
              info@imdawn.me
            </a>
          </p>
          <form
            onSubmit={handleSubmit}
            className="text-primary flex flex-col gap-4"
          >
            <div className="flex items-start justify-between gap-4">
              <label className="sr-only" htmlFor="name_input">
                name
              </label>
              <input
                onChange={(e) => setFullName(e.target.value)}
                className="bg-secondary p-3 shadow-xl w-full rounded-md text-xs md:text-sm"
                type="text"
                id="name_input"
                name="name"
                value={fullName}
                placeholder="Full name"
                required
              />
              <label className="sr-only" htmlFor="email_input">
                email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="bg-secondary p-3 shadow-xl w-full rounded-md text-xs md:text-sm"
                type="email"
                id="email_input"
                name="email"
                value={email}
                placeholder="Email"
                required
              />
            </div>
            <label className="sr-only" htmlFor="subject_input">
              subject
            </label>
            <input
              onChange={(e) => setSubject(e.target.value)}
              className="bg-secondary p-3 shadow-xl rounded-md text-xs md:text-sm"
              type="text"
              id="subject_input"
              name="subject"
              value={subject}
              placeholder="Subject"
              required
            />
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              className="bg-secondary p-3 shadow-xl rounded-md text-xs md:text-sm"
              placeholder="Your awesome message"
              name="message"
              value={message}
              cols="30"
              rows="10"
              required
            ></textarea>
            <button className="text-neon tracking-wider font-bold text-heading py-4 text-md">
              Submit
            </button>
          </form>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="250"
          data-aos-duration="1000"
          className="w-full md:w-1/2 p-10 bg-secondary space-y-10 shadow-xl rounded-md"
        >
          <h2 className="text-heading font-bold text-xl md:text-3xl tracking-wide text-left">
            Info
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-start w-full gap-4">
            <div className="flex items-start justify-center md:w-1/2 gap-6">
              <AiOutlineMail className="text-primary text-xl md:text-2xl mt-1" />
              <div className="flex flex-col items-start justify-center gap-2 whitespace-nowrap">
                <h2 className="text-primary font-bold text-md md:text-lg">
                  Have a question?
                </h2>
                <p className="text-xs md:text-sm text-secondary">
                  I am here to help you.
                </p>
                <p className="text-xs md:text-sm text-secondary">
                  Email me at:
                  <a
                    className="link-underline hover:before:w-full relative text-accent"
                    href="mailto:info@imdawn.me"
                  >
                    {" "}
                    info@imdawn.me
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-start justify-center md:w-1/2 gap-6">
              <MdOutlineLocationCity className="text-primary text-2xl mt-1" />
              <div className="flex flex-col items-start justify-center gap-2">
                <h2 className="text-primary font-bold text-md md:text-lg">
                  Current location
                </h2>
                <p className="text-xs md:text-sm text-secondary">
                  Turkey, Izmir
                </p>
                <p className="text-xs md:text-sm text-secondary">
                  Serving clients worldwide.
                </p>
              </div>
            </div>
          </div>

          <div className="text-primary flex flex-col items-center justify-center gap-10">
            <div className="text-xs md:text-sm text-center">
              <p>Or you can follow me on social media and say hi!</p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <a
                className="flex flex-col items-center gap-2 hover:text-accent text-xs hover:-translate-y-2 duration-300 ease-in"
                href="/"
              >
                <FaGithub className="text-3xl" />
                GitHub
              </a>
              <a
                className="text-xs flex flex-col items-center gap-2 hover:text-accent hover:-translate-y-2 duration-300 ease-in"
                href="/"
              >
                <FaLinkedinIn className="text-3xl" />
                LinkedIn
              </a>
              <a
                className="text-xs flex flex-col items-center gap-2 hover:text-accent hover:-translate-y-2 duration-300 ease-in"
                href="/"
              >
                <FaTwitter className="text-3xl" />
                Twitter
              </a>
              <a
                className="text-xs flex flex-col items-center gap-2 hover:text-accent hover:-translate-y-2 duration-300 ease-in"
                href="/"
              >
                <FaInstagram className="text-3xl" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHomePage;
