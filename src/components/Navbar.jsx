import React, { useState, useEffect } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home"); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const sections = ["home", "about", "projects", "contact"]; 

  // Handle scrolling to a section
  const handleScrollTo = (section) => {
    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsSidebarOpen(false); 
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const target = document.getElementById(section);
        if (
          target &&
          target.offsetTop <= scrollPosition &&
          target.offsetTop + target.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="navbar h-[70px] w-full flex justify-between items-center z-40 sticky top-0 text-[#ededed] bg-black bg-opacity-90 backdrop-shadow-xxl px-4 md:px-8">
        <div
          className="togglemenu md:hidden text-[25px] cursor-pointer"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        >
          <TfiMenuAlt />
        </div>
        <h1 className="text-[40px] font-semibold text-[#ededed]">ADR</h1>
        <ul className="nav-links md:flex text-[20px] gap-[10px] lg:gap-[30px] hidden">
          {sections.map((section) => (
            <li
              key={section}
              className={`navlink rounded-lg px-[10px] py-[5px] hover:text-[aqua] ${
                activeSection === section ? "border-y-[2px]" : ""
              }`}
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

      {/* Side Navigation */}
      <div
        className={`side-nav min-h-screen md:hidden text-white bg-[#ccc] ${
          isSidebarOpen ? "block animate-slideIn" : "hidden"
        } fixed top-0 left-0 w-full z-50`}
      >
        <ul className="nav-links text-[20px] gap-[30px] bg-black text-white fixed h-full w-[250px] left-0 top-0 p-[20px]">
          <RxCross1
            className="text-white float-right cursor-pointer mb-4"
            onClick={() => setIsSidebarOpen(false)}
          />
          {sections.map((section) => (
            <li key={section} className="mb-6">
              <button
                onClick={() => handleScrollTo(section)}
                className={`text-white no-underline ${
                  activeSection === section ? "border-y-[2px] border-[aqua]" : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;


 {/* Side Navigation */}
      {/* <div
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
      </div> */}

      {/* Navbar */}
      {/* <div className="navbar h-[70px] w-full  flex justify-around items-center z-40 sticky top-0 text-[#ededed]  bg-black bg-opacity-90 backdrop-shadow-xxl">
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
              className={`navlink rounded-lg px-[10px] py-[5px] hover:text-[aqua] ${activeSection===section ? 'border-y-[2px]':''} ${link===section ? 'border-y-[2px]':''}`}
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
      </div> */}