import React from 'react'

export const Home = () => {
  return (
    <section id="home" className='Home  w-full md:p-[20px] flex flex-col gap-[20px] rounded-md shadow-2xl'>
               <div className="details-wrap flex flex-col-reverse md:flex-row md:h-[540px] justify-between px-[30px] items-center shadow-lg p-[10px]">
                          <div className="content-wrap flex flex-col justify-center md:w-1/2">
                              <h1 className='text-white text text-[24px] md:text-[50px] leading-none mb-[10px] md:mb-[30px] md:px-[30px] font-bold'>Hi,I'm</h1>
                              <h1 className='text-white text text-[24px] md:text-[40px] leading-none mb-[10px] md:mb-[30px] md:px-[30px] '>Dharaneeswar</h1>
                              <p className='text-[white] md:text-2xl mb-[20px] md:px-[30px]'>A passionate <span className="text-[aqua] font-semibold">Frontend Developer </span> creating seamless and stunning user experiences.</p>
                              <button className='rounded-lg md:mx-[30px] h-[40px] w-[200px] hover:bg-[aqua] text-[aqua] border-[aqua] border-[2px] font-semibold mt-[20px] px-[10px]'>
              Download Resume
            </button>
                          </div>
                          {/* <div className="relative w-[400px] h-[400px] flex justify-center items-center overflow-visible border-[3px] rounded-full p-[10px]">
      <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-600  opacity-50 scale-110 z-10 blur-lg rotate-90"></div>
    <div className="image-wrapper h-full w-full z-20">
      <img
        src={profile}
        alt="Profile"
        className="w-full h-full rounded-full object-cover z-30 border-[2px]"
      />
      </div>
    </div> */}
    
    <div className="relative w-[400px] h-[400px] flex justify-center items-center overflow-visible border-[3px] rounded-full p-[10px]" >
      <div className="absolute top-0 left-0 w-full h-full rounded-full bg-transparent z-10 "style={{borderImage: 'conic-gradient(from 90deg, #00bcd4, #9c27b0, #00bcd4) 1 100%'}}></div>
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
  )
}
