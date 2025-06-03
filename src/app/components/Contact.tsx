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

const Contact = () => {
  return (
    <div>
        {/* Contact Section */}
      <section id="contact" className="py-16 px-8 md:px-16 bg-black">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          <span className="text-portfolioGreen mr-2">+</span> Contact Me
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <Image
              src="https://ext.same-assets.com/949795350/2270579628.gif"
              alt="Waving hand"
              width={300}
              height={300}
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Got a new project idea?</h3>
            <p className="text-3xl font-bold mb-8">let&apos;s Discuss!</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link
                href="https://www.linkedin.com/in/muhammad-nameer/"
                target="_blank"
                className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-md flex items-center"
              >
                <FaLinkedin className="mr-2" /> Linkedin
              </Link>
              <Link
                href="https://github.com/nameerfarooq"
                target="_blank"
                className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-md flex items-center"
              >
                <FaGithub className="mr-2" /> Github
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact