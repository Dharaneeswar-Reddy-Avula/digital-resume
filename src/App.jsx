import React, { useState, useEffect } from "react";
import { setupScrollAnimation } from './script';
import ContactForm from "./components/Contact";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
export const App = () => {
    useEffect(() => {
      const head_1=document.querySelector('.intro-1'); 
      const head_2=document.querySelector('.intro-2');
      const para=document.querySelector('.intro-3');
      const resume=document.querySelector('.resume')
      const profile=document.querySelector('.image-wrapper')
      const image=document.querySelector('.profile')
      head_1.classList.add('animate-slideInDelay1')
      head_2.classList.add('animate-slideInDelay2')
      para.classList.add('animate-slideInDelay3')
      resume.classList.add('animate-slidetopDelay3')
      profile.classList.add('animate-slideleft')
      image.classList.add('animate-slideleft')
      setupScrollAnimation();
    }, []);
   
  return (
    <div className="bg-[#081b29] text-white relative">   
      <Navbar/>
      <Home/>  
      <h1 className="about font-semibold text-[40px] text-white pt-[100px] text-center" id="about">
        About <span className="text-[aqua]">Me</span>
      </h1>
      <About/>
      <h1
        className="projects text-[40px] text-[aqua] font-semibold pt-[100px]  text-center"
        id="projects"
      >
        Projects
      </h1>
      <Projects/>
      <h1 className="contact-text text-[30px] text-white pt-[100px] text-center font-semibold" id="contact">
        Contact <span className="text-[aqua]">Me</span>
      </h1>      
      <ContactForm/>
      <Footer/>
    </div>
  );
};
