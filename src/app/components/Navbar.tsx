import Image from "next/image";
import React from 'react'
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



const Navbar = () => {
  return (
    <div>
        {/* Navigation */}
      <nav className="flex justify-between items-center py-4 px-8 bg-portfolioDark border-b border-gray-800">
        <div className="text-lg font-semibold">Muhammad Ismail.</div>
        <div className="hidden md:flex space-x-6">
          <Link
            href="#skills"
            className="hover:text-portfolioGreen transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#experience"
            className="hover:text-portfolioGreen transition-colors"
          >
            Experience
          </Link>
          <Link
            href="#work"
            className="hover:text-portfolioGreen transition-colors"
          >
            Work
          </Link>
          <Link
            href="#achievements"
            className="hover:text-portfolioGreen transition-colors"
          >
            Achievements
          </Link>
          <Link
            href="#contact"
            className="hover:text-portfolioGreen transition-colors"
          >
            Contact
          </Link>
        </div>
        <Link
          href="/assets/Nameer - REACT _ MERN Stack-x9qH540C.pdf"
          className="bg-white text-black px-4 py-2 rounded text-sm font-medium"
        >
          Download CV
        </Link>
      </nav>
    </div>
  )
}

export default Navbar