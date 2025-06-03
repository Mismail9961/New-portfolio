import Image from "next/image";
import Link from "next/link";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { SiPython } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";



import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaTwitter,
  FaBehance,
} from "react-icons/fa";

import React from 'react'

const Experince = () => {
  return (
    <div>
      {/* Experience Section */}
      <section id="experience" className="py-16 px-8 md:px-16 bg-portfolioDark">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          <span className="text-portfolioGreen mr-2">+</span> My Experience
        </h2>
        <div className="border-l-2 border-gray-700 pl-8 ml-4">
          <div className="relative mb-12">
            <div className="absolute -left-12 mt-1 w-7 h-7 bg-portfolioGreen rounded-full"></div>
            <h3 className="text-xl font-bold mb-2">
              Software Engineer @Hashcore
            </h3>
            <p className="text-gray-400 mb-4">Nov 2023 - Present</p>
            <p className="text-gray-300">
              I develop blockchain-based products using the MERN stack and
              Redux, create frontend dApps, and manage project repositories and
              deployments while continuously enhancing my blockchain and full
              stack development skills.
            </p>
          </div>
          {/* Add more experience items here */}
        </div>
      </section>
    </div>
  )
}

export default Experince