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

const Clients = () => {
  return (
    <div>
        {/* Testimonials Section */}
      <section className="py-16 px-8 md:px-16 bg-portfolioDark">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          <span className="text-portfolioGreen mr-2">+</span> Client&apos;s
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial cards */}
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-lg">
              <div className="mb-6 text-2xl">
                <span className="text-portfolioGreen">"</span>
              </div>
              <p className="text-gray-300 mb-6">
                Testimonial text goes here. This is what the client said about
                the work and experience working with Muhammad Nameer.
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold">Client Name</h4>
                  <p className="text-gray-400 text-sm">Position @ Company</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Clients