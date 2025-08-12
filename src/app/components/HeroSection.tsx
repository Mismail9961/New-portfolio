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
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12">
      {/* 🌊 Animated Background */}
      <WavyBackground className="absolute inset-0 z-0" />

      {/* Gradient Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl w-full">
        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg sm:text-2xl md:text-3xl mb-2 font-light text-gray-300 tracking-wide"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 text-white leading-tight tracking-tight"
          style={{ lineHeight: 1.1 }}
        >
          Muhammad Ismail
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-8 text-portfolioGreen tracking-wide"
        >
          Full Stack Developer
        </motion.h2>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-xl mx-auto mb-12 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed"
        >
          Highly motivated and detail-oriented Full Stack Developer with a strong foundation in
          full-stack web development and a passion for integrating AI-driven solutions to create
          innovative, scalable, and user-friendly applications.
        </motion.p>

        {/* 🌐 Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {[
            {
              href: "https://www.linkedin.com/in/muhammad-nameer/",
              icon: <FaLinkedin size={24} />,
              label: "LinkedIn",
            },
            {
              href: "https://github.com/Mismail9961",
              icon: <FaGithub2 size={24} />,
              label: "GitHub",
            },
            {
              href: "mailto:sheikhmuhammadismail79@gmail.com",
              icon: <FaEnvelope size={24} />,
              label: "Email",
            },
            {
              href: "https://wa.me/+923102437201",
              icon: <FaWhatsapp size={24} />,
              label: "WhatsApp",
            },
            {
              href: "https://x.com/SheikhIsmail83",
              icon: <FaTwitter size={24} />,
              label: "Twitter",
            },
          ].map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              target="_blank"
              aria-label={link.label}
              className="bg-gray-800/90 hover:bg-portfolioGreen transition-colors duration-300 p-4 rounded-full flex items-center justify-center shadow-lg"
            >
              {React.cloneElement(link.icon, { className: "text-white" })}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
