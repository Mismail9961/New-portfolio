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

const Achive = () => {
  return (
    <div>
        {/* Achievements Section */}
      <section id="achievements" className="py-16 px-8 md:px-16 bg-black">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          <span className="text-portfolioGreen mr-2">+</span> My Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Achievement items */}
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="text-gray-400 font-bold text-lg">
                0{index + 1}
              </div>
              <div>
                <h3 className="font-bold mb-1">Achievement Title</h3>
                <p className="text-gray-400 text-sm">Achievement description</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Achive