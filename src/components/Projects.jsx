import React from 'react'
import matrex from "../assets/matrex.png";
import gigo from "../assets/gigo.png";
import dashboard from "../assets/dashboard.png";
import stocker from "../assets/stocker.png";
export const Projects = () => {
    const Card = ({ image }) => (
        <div className="card bg-white shadow-lg rounded- h-[250px] w-full md:h-[250px] md:w-[250px] border-[aqua] md:border-2">
          <img
            src={image}
            className="h-full w-full object-cover rounded-lg transform transition-transform duration-500 ease-in-out hover:scale-150"
          />
        </div>
      );
  return (
    <div> <section className="Projects w-full  p-[10px] md:p-[20px] flex flex-col gap-[30px] items-center shadow-xxl">
    <div className="cards-wrap flex flex-wrap justify-center gap-[20px]  md:py-[50px]  rounded-lg relative  shadow-xxl">
      <a
        href="https://gigo-gamma.vercel.app/"
        className="card-1 shadow-lg border-[2px] border-[aqua] rounded-lg overflow-hidden"
      >
        <Card image={gigo} />
      </a>

      <a
        href="https://database-dashboard-adr.vercel.app/"
        className="card-2 shadow-lg border-[2px] border-[aqua] rounded-lg overflow-hidden"
      >
        <Card image={dashboard} />
      </a>

      <a
        href="https://dharaneeswarreddyavula.netlify.app/"
        className="card-3 shadow-lg border-[2px] border-[aqua] rounded-lg overflow-hidden"
      >
        <Card image={stocker} />
      </a>

      <a
        href="https://martex-clone.vercel.app/"
        className="card-4 shadow-lg border-[2px] border-[aqua] rounded-lg overflow-hidden"
      >
        <Card image={matrex} />
      </a>
    </div>
  </section></div>
  )
}
