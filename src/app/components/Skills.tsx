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

import React from "react";

const Skills = () => {
  return (
    <div>
      {/* Skills Section */}
      <section id="skills" className="py-16 px-8 md:px-16 bg-black">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          <span className="text-portfolioGreen mr-2">+</span> My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {/* We'll add skill items here */}
          <div className="bg-gray-900 p-4 rounded flex items-center justify-center flex-col text-center">
            <FaHtml5 className="h-20 w-20" />
            <span>HTML</span>
          </div>
          <div className="bg-gray-900 flex items-center justify-center flex-col p-4 rounded text-center">
            <IoLogoCss3 className="w-20 h-20" />
            <span>CSS </span>
          </div>
          <div className="bg-gray-900 p-4 rounded text-center flex items-center justify-center flex-col">
            <RiJavascriptFill className="h-20 w-20" />
            <span>JavaScript </span>
          </div>
          <div className="bg-gray-900 p-4 rounded text-center flex items-center justify-center flex-col">
            <SiPython className="h-20 w-20" />
            <span>Python </span>
          </div>
          <div className="bg-gray-900 p-4 rounded text-center flex items-center justify-center flex-col">
            <TbBrandNextjs className="h-20 w-20" />
            <span>Next.js </span>
          </div>
          <div className="bg-gray-900 p-4 rounded text-center flex items-center justify-center flex-col">
            <FiGithub className="h-20 w-20" />
            <span>Github </span>
          </div>
          <div className="bg-gray-900 p-4 rounded text-center">
            <div className="bg-gray-800 w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center">
              <span className="text-portfolioGreen">Skill</span>
            </div>
            <span>Vercel</span>
          </div>
          <div className="bg-gray-900 p-4 rounded text-center">
            <div className="bg-gray-800 w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center">
              <span className="text-portfolioGreen">Skill</span>
            </div>
            <span>Tailwind CSS</span>
          </div>
          <div className="bg-gray-900 p-4 rounded text-center">
            <div className="bg-gray-800 w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center">
              <span className="text-portfolioGreen">Skill</span>
            </div>
            <span>Node.js </span>
          </div>
          <div className="bg-gray-900 p-4 rounded text-center">
            <div className="bg-gray-800 w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center">
              <span className="text-portfolioGreen">Skill</span>
            </div>
            <span>MongoDB </span>
          </div>
          <div className="bg-gray-900 p-4 rounded text-center">
            <div className="bg-gray-800 w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center">
              <span className="text-portfolioGreen">Skill</span>
            </div>
            <span>Netlify</span>
          </div>
          <div className="bg-gray-900 p-4 rounded text-center">
            <div className="bg-gray-800 w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center">
              <span className="text-portfolioGreen">Skill</span>
            </div>
            <span>AWS</span>
          </div>
          <div className="bg-gray-900 p-4 rounded text-center">
            <div className="bg-gray-800 w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center">
              <span className="text-portfolioGreen">Skill</span>
            </div>
            <span>WebSockets</span>
          </div>
          <div className="bg-gray-900 p-4 rounded text-center">
            <div className="bg-gray-800 w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center">
              <span className="text-portfolioGreen">Skill</span>
            </div>
            <span>Express.js</span>
          </div>
          <div className="bg-gray-900 p-4 rounded text-center">
            <div className="bg-gray-800 w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center">
              <span className="text-portfolioGreen">Skill</span>
            </div>
            <span>React.js</span>
          </div>
          <div className="bg-gray-900 p-4 rounded text-center">
            <div className="bg-gray-800 w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center">
              <span className="text-portfolioGreen">Skill</span>
            </div>
            <span>Postman</span>
          </div>
          <div className="bg-gray-900 p-4 rounded text-center">
            <div className="bg-gray-800 w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center">
              <span className="text-portfolioGreen">Skill</span>
            </div>
            <span>Wordpress</span>
          </div>
          <div className="bg-gray-900 p-4 rounded text-center">
            <div className="bg-gray-800 w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center">
              <span className="text-portfolioGreen">Skill</span>
            </div>
            <span>JWT</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
