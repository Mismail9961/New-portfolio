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

const HeroSection = () => {
  return (
    <div>
        {/* Hero Section */}
      <section className="py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <p className="text-lg mb-2">Hello I&apos;am</p>
          <h1 className="text-5xl font-bold mb-4">Muhammad Ismail</h1>
          <h2 className="text-3xl font-semibold mb-6">
            {" "}
            MERN Stack Developer{" "}
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg">
            Highly motivated and detail-oriented MERN Stack Developer with a
            strong foundation in full-stack web development and a passion for
            integrating AI-driven solutions. Proficient in building scalable,
            user-friendly applications using MongoDB, Express.js, React, and
            Node.js. Adept at leveraging modern AI tools to enhance
            functionality and optimize workflows. Seeking to contribute
            technical expertise and problem-solving skills to a dynamic
            development team.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://www.linkedin.com/in/muhammad-nameer/"
              target="_blank"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full"
            >
              <FaLinkedin className="text-white" size={20} />
            </Link>
            <Link
              href="https://github.com/Mismail9961"
              target="_blank"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full"
            >
              <FaGithub className="text-white" size={20} />
            </Link>
            <Link
              href="mailto:sheikhmuhammadismail79@gmail.com"
              target="_blank"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full"
            >
              <FaEnvelope className="text-white" size={20} />
            </Link>
            <Link
              href="https://wa.me/+923102437201"
              target="_blank"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full"
            >
              <FaWhatsapp className="text-white" size={20} />
            </Link>
            <Link
              href="https://x.com/SheikhIsmail83"
              target="_blank"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full"
            >
              <FaTwitter className="text-white" size={20} />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          {/* Add profile image or animation here */}
          <div className="w-80 h-80 bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-7xl font-bold text-portfolioGreen">
              &lt;/&gt;
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default HeroSection