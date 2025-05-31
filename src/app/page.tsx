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

export default function Home() {
  return (
    <main className="min-h-screen bg-portfolioDark text-white">
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

      {/* Hero Section */}
      <section className="py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <p className="text-lg mb-2">Hello I&apos;am</p>
          <h1 className="text-5xl font-bold mb-4">Muhammad Ismail</h1>
          <h2 className="text-3xl font-semibold mb-6"> MERN Stack Developer </h2>
          <p className="text-gray-300 mb-8 max-w-lg">
            Highly motivated and detail-oriented MERN Stack Developer with a
            strong foundation in full-stack web development and a passion for
            integrating AI-driven solutions. Proficient in building scalable,
            user-friendly applications using MongoDB, Express.js, React, and
            Node.js. Adept at leveraging modern AI tools to enhance
            functionality and optimize workflows. Seeking to contribute
            technical expertise and problem-solving skills to a dynamic
            development team.
          </p>
          <div className="flex space-x-4">
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
              <FaGithub className="text-white" size={20} />
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
        <div className="md:w-1/2 flex justify-center">
          {/* Add profile image or animation here */}
          <div className="w-80 h-80 bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-7xl font-bold text-portfolioGreen">
              &lt;/&gt;
            </div>
          </div>
        </div>
      </section>

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
            <FiGithub className="h-20 w-20"/>
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

      {/* Experience Section */}
      <section id="experience" className="py-16 px-8 md:px-16 bg-portfolioDark">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          <span className="text-portfolioGreen mr-2">+</span> My Experience
        </h2>
        <div className="border-l-2 border-gray-700 pl-8 ml-4">
          <div className="relative mb-12">
            <div className="absolute -left-12 mt-1 w-7 h-7 bg-portfolioGreen rounded-full"></div>
            <h3 className="text-xl font-bold mb-2">
              Software Engineer @Hashcore
            </h3>
            <p className="text-gray-400 mb-4">Nov 2023 - Present</p>
            <p className="text-gray-300">
              I develop blockchain-based products using the MERN stack and
              Redux, create frontend dApps, and manage project repositories and
              deployments while continuously enhancing my blockchain and full
              stack development skills.
            </p>
          </div>
          {/* Add more experience items here */}
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-16 px-8 md:px-16 bg-black">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          <span className="text-portfolioGreen mr-2">+</span> My Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project cards */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-lg overflow-hidden relative"
            >
              <div className="h-48 bg-gray-800"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Name</h3>
                <p className="text-gray-400 mb-4">
                  Project description goes here. This is a brief overview of
                  what the project is about.
                </p>
                <Link
                  href="#"
                  className="text-portfolioGreen flex items-center"
                >
                  Live Link <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 px-8 md:px-16 bg-portfolioDark">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          <span className="text-portfolioGreen mr-2">+</span> My Clients
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {/* Client logos */}
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-800 h-20 rounded-lg flex items-center justify-center"
            >
              <span className="text-gray-400">Client Logo</span>
            </div>
          ))}
        </div>
      </section>

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

      {/* Footer */}
      <footer className="bg-portfolioDark text-gray-400 text-center py-6 border-t border-gray-800">
        <div className="container mx-auto">
          <p>
            © {new Date().getFullYear()} Muhammad Nameer. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
