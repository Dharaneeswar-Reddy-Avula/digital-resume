import React from 'react'
import profile from "../assets/profile-2.png";

export const Home = () => {
    const pdfUrl = 'http://localhost:5173/Resume.pdf'; 
    const handleDownload = (pdfUrl) => {
        const atag = document.createElement("a");
        const filename = pdfUrl.split("/").pop();
        atag.href = pdfUrl;
        atag.setAttribute("download", filename);
        document.body.appendChild(atag);
        atag.click();
        atag.remove();
      };
      
    
  return (
     <section
            id="home"
            className="Home  w-full md:p-[20px] flex flex-col gap-[20px] rounded-md shadow-2xl"
          >
            <div className="details-wrap flex flex-col-reverse md:flex-row md:h-[540px] justify-between px-[30px] items-center shadow-lg p-[10px]">
              <div className="content-wrap flex flex-col justify-center md:w-1/2">
                <h1 className="text-white intro-1 text text-[24px] md:text-[50px] leading-none mb-[10px] md:mb-[30px] md:px-[30px] font-bold">
                  Hi,I'm
                </h1>
                <h2 className="text-white intro-2 text text-[24px] md:text-[40px] leading-none mb-[10px] md:mb-[30px] md:px-[30px]">
                  Dharaneeswar
                </h2>
                <p className="text-[white] intro-3 md:text-2xl mb-[20px] md:px-[30px] animate-left">
                  A passionate{" "}
                  <span className="text-[aqua] font-semibold">
                    Frontend Developer{" "}
                  </span>{" "}
                  creating seamless and stunning user experiences.
                </p>
                <button
                  onClick={() => handleDownload(pdfUrl)}
                  className="resume rounded-lg md:mx-[30px] h-[40px] w-[200px] hover:text-black hover:bg-[aqua] text-[aqua] border-[aqua] border-[2px] font-semibold mt-[20px] px-[10px]"
                >
                  Download Resume
                </button>
              </div>
    
              <div className="profile relative lg:w-[400px] lg:h-[400px] flex justify-center items-center overflow-visible border-x-[3px] border-x-[aqua] rounded-full p-[10px]">
                <div
                  className="absolute top-0 left-0 w-full h-full rounded-full bg-transparent z-10 "
                  style={{
                    borderImage:
                      "conic-gradient(from 90deg, #00bcd4, #9c27b0, #00bcd4) 1 100%",
                  }}
                ></div>
                <div className="image-wrapper h-full w-full z-20 ">
                  <img
                    src={profile}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover z-30 border-y-[5px] border-x-[transparent] border-y-[aqua]"
                  />
                </div>
              </div>
            </div>
          </section>
  )
}
