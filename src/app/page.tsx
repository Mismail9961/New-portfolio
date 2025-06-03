import Image from "next/image";
import Link from "next/link";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { SiPython } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills"
import Project from "./components/Project"
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaTwitter,
  FaBehance,
} from "react-icons/fa";
import HeroSection from "./components/HeroSection";
import Experince from "./components/Experince";
import Achive from "./components/Achive";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/LastFooter"

export default function Home() {
  return (
    <main className="min-h-screen bg-portfolioDark text-white">
      <Navbar />
      <HeroSection/>
      <Skills/>
      <Experince/>
      <Project/>
      <Achive/>
      <Clients/>
      <Contact/>
      <Footer/>
    </main>
  );
}
