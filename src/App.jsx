import React, { useState, useEffect } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { RxCross1 } from "react-icons/rx";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import matrex from "./assets/matrex.png";
import gigo from "./assets/gigo.png";
import dashboard from "./assets/dashboard.png";
import stocker from "./assets/stocker.png";
import profile from "./assets/profile-2.png";
import { FaInstagram } from "react-icons/fa";

export const App = () => {
  const [display, setDisplay] = useState("hidden");
  const [activeSection, setActiveSection] = useState("home");
  const [link, setActiveLink] = useState("");
  const skills = [
    { name: "HTML", percentage: 70, color: "#4caf50" },
    { name: "CSS", percentage: 80, color: "#2196f3" },
    { name: "JavaScript", percentage: 50, color: "#ff9800" },
    { name: "React", percentage: 60, color: "#673ab7" },
    { name: "Tailwind CSS", percentage: 75, color: "#3eaf4d" },
  ];
  const handleSidenav = () => {
    setDisplay((prevDisplay) => (prevDisplay === "hidden" ? "flex" : "hidden"));
  };
  const handleDownload = (pdfUrl) => {
    const atag = document.createElement("a");
    const filename = pdfUrl.split("/").pop();
    atag.href = pdfUrl;
    atag.setAttribute("download", filename);
    document.body.appendChild(atag);
    atag.click();
    atag.remove();
  };
  const handleClose = () => {
    setDisplay("hidden");
  };

  // Smooth scrolling to sections
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      setActiveSection(id);
      setActiveLink(section);
      handleClose(); // Close the side nav on click
    }
  };
  const Card = ({ image }) => (
    <div className="card bg-white shadow-lg rounded- h-[250px] w-full md:h-[250px] md:w-[250px] border-[aqua] md:border-2">
      <img
        src={image}
        className="h-full w-full object-cover rounded-lg transform transition-transform duration-500 ease-in-out hover:scale-150"
      />
    </div>
  );
  return (
    <div className="bg-[#081b29] text-white relative">
      {/* Side Navigation */}
      <div
        className={`side-nav min-h-screen md:hidden text-white bg-[#ccc] ${display} animate-slideIn fixed top-0 left-0 w-full z-50`}
      >
        <ul className="nav-links text-[20px] gap-[30px] bg-black text-white fixed h-full w-[250px] left-0 top-0 p-[20px]">
          <RxCross1
            className="text-white float-right cursor-pointer"
            onClick={handleClose}
          />
          {["home", "about", "projects", "contact"].map((section) => (
            <li key={section}>
              <button
                onClick={() => handleScrollTo(section)}
                className="text-white no-underline"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar */}
      <div className="navbar h-[70px] w-full  flex justify-around items-center z-40 sticky top-0 text-[#ededed]  bg-black bg-opacity-90 backdrop-shadow-xxl">
        <div
          className="togglemenu md:hidden text-[25px]"
          onClick={handleSidenav}
        >
          <TfiMenuAlt />
        </div>
        <h1 className="text-[40px] font-semibold text-[#ededed]">ADR</h1>
        <ul className="nav-links md:flex text-[20px] gap-[10px] lg:gap-[30px] hidden">
          {["home", "about", "projects", "contact"].map((section) => (
            <li
              key={section}
              className={`rounded-lg px-[10px] py-[5px] hover:text-[aqua] ${
                activeSection === section
                  ? "border-y-[2px] border-b-[white] "
                  : ""
              } ${setActiveLink === section ? "border-y-[2px] border-b-[white] " : ""}`}
            >
              <button onClick={() => handleScrollTo(section)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
        <button className="hover:bg-[aqua] text-[aqua] border-[aqua] border-[2px] md:h-[50px] lg:w-[150px] hover:text-black rounded-md md:px-[20px] p-[10px]">
          Hire Me
        </button>
      </div>

      <section
        id="home"
        className="Home  w-full md:p-[20px] flex flex-col gap-[20px] rounded-md shadow-2xl"
      >
        <div className="details-wrap flex flex-col-reverse md:flex-row md:h-[540px] justify-between px-[30px] items-center shadow-lg p-[10px]">
          <div className="content-wrap flex flex-col justify-center md:w-1/2">
            <h1 className="text-white text text-[24px] md:text-[50px] leading-none mb-[10px] md:mb-[30px] md:px-[30px] font-bold animate-right">
              Hi,I'm
            </h1>
            <h1 className="text-white text text-[24px] md:text-[40px] leading-none mb-[10px] md:mb-[30px] md:px-[30px] animation animate-right">
              Dharaneeswar
            </h1>
            <p className="text-[white] md:text-2xl mb-[20px] md:px-[30px] animate-left">
              A passionate{" "}
              <span className="text-[aqua] font-semibold">
                Frontend Developer{" "}
              </span>{" "}
              creating seamless and stunning user experiences.
            </p>
            <button
              onClick={() => handleDownload(pdfUrl)}
              className="rounded-lg md:mx-[30px] h-[40px] w-[200px] hover:text-black hover:bg-[aqua] text-[aqua] border-[aqua] border-[2px] font-semibold mt-[20px] px-[10px] animate-top"
            >
              Download Resume
            </button>
          </div>

          <div className="relative lg:w-[400px] lg:h-[400px] flex justify-center items-center overflow-visible border-[3px] rounded-full p-[10px]">
            <div
              className="absolute top-0 left-0 w-full h-full rounded-full bg-transparent z-10 "
              style={{
                borderImage:
                  "conic-gradient(from 90deg, #00bcd4, #9c27b0, #00bcd4) 1 100%",
              }}
            ></div>
            <div className="image-wrapper h-full w-full z-20">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full rounded-full object-cover z-30 border-[2px]"
              />
            </div>
          </div>
        </div>
      </section>
      <h1
        className=" font-semibold text-[40px] text-white pt-[100px] text-center"
        id="about"
      >
        About <span className="text-[aqua]">Me</span>
      </h1>

      <section className="about w-full  md:px-[20px] flex flex-col gap-[20px] shadow-xxl">
        <div className="detais-wrap flex flex-col md:gap-[10px]  rounded-lg shadow-lg p-[10px] md:p-[20px]">
          <div className="education-skillwrap flex flex-wrap pl-[10px]justify-between">
            <div className="education shadow-lg p-[10px] rounded-lg w-full md:w-1/2">
              <h1 className="text-[20px] font-bold mb-[20px]">My Education</h1>
              <ul className="flex flex-col gap-[20px] w-full relative after:absolute after:h-full after:w-[3px] after:top-0 after:bg-[aqua]  rounded-lg p-[10px] after:left-[-10px] md:after:left-[-20px]">
                <li className="border-[1px] border-[aqua] p-[10px] rounded-lg relative after:absolute after:h-[20px] after:w-[20px] after:bg-[aqua] after:rounded-full after:left-[-30px] md:after:left-[-40px]">
                  SSC: St. Antony's E.M High School, Kadapa
                </li>
                <li className="border-[1px] border-[aqua] p-[10px] rounded-lg relative after:absolute after:h-[20px] after:w-[20px] after:bg-[aqua] after:rounded-full after:left-[-30px] md:after:left-[-40px]">
                  Intermediate: RGUKT Nuzvid
                </li>{" "}
                <li className="border-[1px] border-[aqua] p-[10px] rounded-lg relative after:absolute after:h-[20px] after:w-[20px] after:bg-[aqua] after:rounded-full after:left-[-30px] md:after:left-[-40px]">
                  BTech: RGUKT Nuzvid
                </li>
                <li className="border-[1px] border-[aqua] p-[10px] rounded-lg relative after:absolute after:h-[20px] after:w-[20px] after:bg-[aqua] after:rounded-full after:left-[-30px] md:after:left-[-40px]">
                  Currently Studying: BTech 2nd year, CSE
                </li>
              </ul>
            </div>
            <div className="skills shadow-lg p-[10px] rounded-lg flex flex-col items-center  md:w-1/2">
              <h1 className="text-[20px] font-bold mb-[20px]">My Skills</h1>
              <div className="skills-wrap flex flex-wrap gap-[30px] justify-center md:justify-end md:w-[400px]">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="relative h-[100px] w-[100px] flex justify-center items-center"
                  >
                    <div
                      className="relative rounded-full w-full h-full animate-fill"
                      style={{
                        background: `conic-gradient(${skill.color} ${skill.percentage * 3.6}deg, #e5e7eb ${skill.percentage * 3.6}deg)`,
                      }}
                    ></div>

                    <div className="absolute inset-2 bg-[#081b29] rounded-full flex flex-col justify-center items-center">
                      <h1 className="text-white text-sm">{skill.name}</h1>
                      <span className="text-white text-sm">
                        {skill.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1
        className="text-[40px] text-[aqua] font-semibold pt-[100px]  text-center"
        id="projects"
      >
        Projects
      </h1>
      <section className="Projects w-full  p-[10px] md:p-[20px] flex flex-col gap-[30px] items-center shadow-xxl">
        <div className="cards-wrap flex flex-wrap justify-center gap-[10px] md:gap-[20px]  md:py-[50px]  rounded-lg relative  shadow-xxl">
          <a
            href="https://gigo-gamma.vercel.app/"
            className="shadow-lg border-[2px] border-[aqua] rounded-lg overflow-hidden"
          >
            <Card image={gigo} />
          </a>

          <a
            href="https://database-dashboard-adr.vercel.app/"
            className="shadow-lg border-[2px] border-[aqua] rounded-lg overflow-hidden"
          >
            <Card image={dashboard} />
          </a>

          <a
            href="https://dharaneeswarreddyavula.netlify.app/"
            className="shadow-lg border-[2px] border-[aqua] rounded-lg overflow-hidden"
          >
            <Card image={stocker} />
          </a>

          <a
            href="https://martex-clone.vercel.app/"
            className="shadow-lg border-[2px] border-[aqua] rounded-lg overflow-hidden"
          >
            <Card image={matrex} />
          </a>
        </div>
      </section>
      <h1
        className="text-[30px] text-white pt-[100px] text-center font-semibold"
        id="contact"
      >
        Contact <span className="text-[aqua]">Me</span>
      </h1>

      <section className="contact w-full  md:p-[20px]">
        <div className="contact-page flex justify-center w-full shadow-xx ">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-[20px] p-[10px]">
            <input
              type="text"
              placeholder="Enter your Name"
              className="border-[2px] border-[aqua] bg-transparent p-[10px] w-[300px] rounded-md text-white"
            />
            <input
              type="email"
              placeholder="Enter your Email"
              className="border-[2px] border-[aqua] bg-transparent p-[10px] w-[300px] rounded-md text-white"
            />
            <input
              type="text"
              placeholder="Enter your Mobile Number"
              className="border-[2px] border-[aqua] bg-transparent p-[10px] w-[300px] rounded-md text-white"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border-[2px] border-[aqua] bg-transparent p-[10px] w-[300px] rounded-md text-white"
            />
            <textarea
              placeholder="Enter Your Message"
              className="p-[10px] rounded-lg md:col-span-2 border-[2px] border-[aqua] bg-transparent h-[250px] w-full "
            />
            <input
              type="submit"
              className="bg-[aqua] text-[black] font-semibold md:col-span-2 h-[40px] w-[200px] rounded-lg mx-auto"
            />
          </form>
        </div>
      </section>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          <div className="contact-info mb-6 shadow-lg p-[20px] w-full">
            <p>
              <strong className="text-[20px]">Email:</strong>{" "}
              avladharaniswarreddy@gmail.com
            </p>
            <p>
              <strong className="text-[20px]">Phone:</strong> 8790756930
            </p>
            <p>
              <strong className="text-[20px]">Address:</strong> E.Ramapuram,
              Kalasapadu,
              <br />
              Kadapa, AP
            </p>
          </div>
          <p>&copy; 2024 Dharaneeswar Reddy Avula. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/dharaneeswar-reddy-avula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/Dharaneeswar-Reddy-Avula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://github.com/Dharaneeswar-Reddy-Avula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
