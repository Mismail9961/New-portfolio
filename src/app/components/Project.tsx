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

const Project = () => {
  return (
    <div>
        {/* Work Section */}
      <section id="work" className="py-16 px-8 md:px-16 bg-black">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          <span className="text-portfolioGreen mr-2">+</span> My Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project cards */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-lg overflow-hidden relative"
            >
              <div className="h-48 bg-gray-800"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Name</h3>
                <p className="text-gray-400 mb-4">
                  Project description goes here. This is a brief overview of
                  what the project is about.
                </p>
                <Link
                  href="#"
                  className="text-portfolioGreen flex items-center"
                >
                  Live Link <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Project