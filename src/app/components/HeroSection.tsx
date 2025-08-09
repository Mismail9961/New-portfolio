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
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* 🌊 Animated Background */}
      <WavyBackground className="absolute inset-0 z-0" />

      {/* Gradient Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 md:px-10 max-w-4xl">
        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-[39px] mb-2 text-gray-200"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-9xl font-bold mb-3 text-white leading-tight"
        >
          Muhammad Ismail
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl sm:text-[45px] font-medium mb-6 text-portfolioGreen"
        >
          Full Stack Developer
        </motion.h2>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed"
        >
          Highly motivated and detail-oriented Full Stack Developer with a
          strong foundation in full-stack web development and a passion for
          integrating AI-driven solutions to create innovative, scalable, and
          user-friendly applications.
        </motion.p>

        {/* 🌐 Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {[
            {
              href: "https://www.linkedin.com/in/muhammad-nameer/",
              icon: <FaLinkedin size={20} />,
              label: "LinkedIn",
            },
            {
              href: "https://github.com/Mismail9961",
              icon: <FaGithub2 size={20} />,
              label: "GitHub",
            },
            {
              href: "mailto:sheikhmuhammadismail79@gmail.com",
              icon: <FaEnvelope size={20} />,
              label: "Email",
            },
            {
              href: "https://wa.me/+923102437201",
              icon: <FaWhatsapp size={20} />,
              label: "WhatsApp",
            },
            {
              href: "https://x.com/SheikhIsmail83",
              icon: <FaTwitter size={20} />,
              label: "Twitter",
            },
          ].map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              target="_blank"
              aria-label={link.label}
              className="bg-gray-800/80 hover:bg-gray-700 p-3 rounded-full transition-colors duration-200 flex items-center justify-center"
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
