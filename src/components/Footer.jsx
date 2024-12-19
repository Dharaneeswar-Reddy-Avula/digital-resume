import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
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
  )
}
