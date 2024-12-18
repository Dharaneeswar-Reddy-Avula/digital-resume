import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import { RxCross1 } from "react-icons/rx";
import { useLocation } from 'react-router-dom';
export const Navbar = () => {
  const [display, setDisplay] = useState("hidden");
  const [clicked, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(()=>
    {   
      if(location.pathname == '/'){
        setActiveLink('home');
      }
        if(location.pathname == '/about'){
             setActiveLink('about');
        }
        if(location.pathname == '/projects'){
          setActiveLink('projects');
     }

     if(location.pathname == '/contact'){
      setActiveLink('contact');
 }
 if(location.pathname == '/apicards'){
  setActiveLink('API_CARDS ');
}
    }
,[location]);
  
  const HandleSidenav = () => {
    setDisplay((prevDisplay) => (prevDisplay === "hidden" ? "flex" : "hidden"));
  };

  const HandleClose = () => {
    setDisplay("hidden");
  };
 
 

  return (
    <>
      <div className={`side-nav min-h-screen md:hidden text-white w-full bg-[#ccc] ${display} animate-slideIn fixed top-0 left-0 w-full z-50`}>
        <ul className="nav-links text-[20px] gap-[30px] bg-black text-white fixed h-full w-[250px] left-0 top-0 p-[20px]">
          <RxCross1 className="text-white float-right cursor-pointer" onClick={HandleClose} />
          <li>
            <a to="/">Home</a>
          </li>
          <li>
            <a to="/about" >About</a>
          </li>
          <li>
            <a to="/projects">Projects</a>
          </li>
          <li>
            <a to="/contact">Contact</a>
          </li>
          <li>
            <a to="/apicards">API CARDS</a>
          </li>
        </ul>
      </div>

      <div className="navbar h-[70px] w-full border-[2px] rounded-lg flex justify-around items-center relative z-40">
        <div className="togglemenu md:hidden text-[25px]" onClick={HandleSidenav}>
          <TfiMenuAlt />
        </div>

        <h1 className="text-[40px] font-semibold text-black">ADR</h1>

       
        <ul className="nav-links md:flex text-[20px] gap-[10px] lg:gap-[30px] hidden">
      <li
        className={`rounded-lg px-[10px] py-[5px] ${
          clicked === "home" ? "bg-[#b6fc03]" : "bg-transparent"
        }`}
       
      >
        <Link to="/" className="no-underline visited:no-underline">Home</Link>
      </li>
      <li
        className={`rounded-lg px-[10px] py-[5px] ${
          clicked === "about" ? "bg-[#b6fc03]" : "bg-transparent"
        }`}
       
      >
        <Link to="/about" className="no-underline visited:no-underline">About</Link>
      </li>
      <li
        className={`rounded-lg px-[10px] py-[5px] ${
          clicked === "projects" ? "bg-[#b6fc03]" : "bg-transparent"
        }`}
       
      >
        <Link to="/projects" className="no-underline visited:no-underline">Projects</Link>
      </li>
      <li
        className={`rounded-lg px-[10px] py-[5px] ${
          clicked === "contact" ? "bg-[#b6fc03]" : "bg-transparent"
        }`}
     
      >
        <Link to="/contact" className="no-underline visited:no-underline">Contact</Link>
      </li>
      <li
        className={`rounded-lg px-[10px] py-[5px] ${
          clicked === "API_CARDS" ? "bg-[#b6fc03]" : "bg-transparent"
        }`}
      
      >
        <Link to="/apicards" className="no-underline visited:no-underline">API CARDS</Link>
      </li>
    </ul>

        <button className="bg-[#2e2d2d] md:h-[50px] lg:w-[150px] text-[white] rounded-md md:px-[20px] p-[10px]">
          Hire Me
        </button>
      </div>
    </>
  );
};
