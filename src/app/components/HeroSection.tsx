"use client";

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
  FaEnvelope,
  FaWhatsapp,
  FaTwitter,
  FaGithub as FaGithub2,
} from "react-icons/fa";

import CircularText from "./CircularText";
import Hyperspeed from "./Hyperspeed"; // ✅ Import your Hyperspeed component
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* 🌌 Hyperspeed Background */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => {},
            onSlowDown: () => {},
            distortion: "turbulentDistortion",
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3,
            },
          }}
        />
      </div>

      {/* 👤 Hero Content */}
      <section className="relative z-10 py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <p className="text-lg mb-2">Hello I&apos;m</p>
          <h1 className="text-5xl font-bold mb-4">Muhammad Ismail</h1>
          <h2 className="text-3xl font-semibold mb-6">MERN Stack Developer</h2>
          <p className="text-gray-300 mb-8 max-w-lg">
            Highly motivated and detail-oriented MERN Stack Developer with a
            strong foundation in full-stack web development and a passion for
            integrating AI-driven solutions...
          </p>
          <div className="flex space-x-4">
            {/* Social Links */}
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
      </section>
    </div>
  );
};

export default HeroSection;
