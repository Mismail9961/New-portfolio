"use client";

import React from "react";
import Link from "next/link";
import {
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaTwitter,
  FaGithub as FaGithub2,
} from "react-icons/fa";

import { WavyBackground } from "./ui/wavy-background";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden flex items-center justify-center">
      {/* 🌊 Background */}
      <WavyBackground className="absolute inset-0 z-0" />

      {/* 👤 Content */}
      <div className="relative z-10 text-center px-4 md:px-10 max-w-3xl">
        <p className="text-lg mb-2 text-white">Hello I&apos;m</p>
        <h1 className="text-5xl font-bold mb-4 text-white">Muhammad Ismail</h1>
        <h2 className="text-3xl font-semibold mb-6 text-white">
          Full Stack Developer
        </h2>
        <p className="text-gray-300 mb-8">
          Highly motivated and detail-oriented Full Stack Developer with a
          strong foundation in full-stack web development and a passion for
          integrating AI-driven solutions...
        </p>

        {/* 🌐 Social Links */}
        <div className="flex justify-center space-x-4">
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
            <FaGithub2 className="text-white" size={20} />
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
    </div>
  );
};

export default HeroSection;