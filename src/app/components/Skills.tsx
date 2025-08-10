import { SiSocketdotio } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { SiPython } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { FaWordpressSimple } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiPostman } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { IoPrismSharp } from "react-icons/io5";
import { IoLogoDocker } from "react-icons/io5";
import { FaLinux } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

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
          <div className="p-4 rounded flex items-center justify-center flex-col text-center">
            <FaHtml5 className="h-20 w-20" />
            <span>HTML</span>
          </div>
          <div className="flex items-center justify-center flex-col p-4 rounded text-center">
            <IoLogoCss3 className="w-20 h-20" />
            <span>CSS </span>
          </div>
          <div className="p-4 rounded text-center flex items-center justify-center flex-col">
            <RiJavascriptFill className="h-20 w-20" />
            <span>JavaScript </span>
          </div>
          <div className="p-4 rounded text-center flex items-center justify-center flex-col">
            <SiPython className="h-20 w-20" />
            <span>Python </span>
          </div>
          <div className="p-4 rounded text-center flex items-center justify-center flex-col">
            <TbBrandNextjs className="h-20 w-20" />
            <span>Next.js </span>
          </div>
          <div className="p-4 rounded text-center flex items-center justify-center flex-col">
            <FaReact className="h-20 w-20" />
            <span>React JS</span>
          </div>
          <div className="p-4 rounded text-center flex items-center justify-center flex-col">
            <SiTypescript className="h-20 w-20" />
            <span>Typescript </span>
          </div>
          <div className="p-4 rounded text-center flex items-center justify-center flex-col">
            <DiNodejs className="h-20 w-20" />
            <span>Node JS </span>
          </div>
          <div className="p-4 rounded text-center flex items-center justify-center flex-col">
            <BiLogoMongodb className="h-20 w-20" />
            <span>Mongo DB </span>
          </div>
          <div className="p-4 rounded text-center flex items-center justify-center flex-col">
            <SiSocketdotio className="h-20 w-20" />
            <span>Socket.IO </span>
          </div>
          <div className="p-4 rounded text-center flex items-center justify-center flex-col">
            <FaWordpressSimple  className="h-20 w-20" />
            <span>Wordpress </span>
          </div>
          <div className="p-4 rounded text-center flex items-center justify-center flex-col">
            <IoLogoVercel className="h-20 w-20" />
            <span>Vercel </span>
          </div>
          <div className="p-4 rounded text-center flex items-center justify-center flex-col">
            <SiPostman  className="h-20 w-20" />
            <span>Postman </span>
          </div>
          <div className="p-4 rounded text-center flex items-center justify-center flex-col">
            <FaAws className="h-20 w-20" />
            <span>AWS </span>
          </div>
          <div className="p-4 rounded text-center flex items-center justify-center flex-col">
            <IoPrismSharp className="h-20 w-20" />
            <span>Prisma </span>
          </div>
          <div className="p-4 rounded text-center flex items-center justify-center flex-col">
            <IoLogoDocker className="h-20 w-20" />
            <span>Docker </span>
          </div>
          <div className="p-4 rounded text-center flex items-center justify-center flex-col">
            <FaLinux className="h-20 w-20" />
            <span>linux </span>
          </div>
          <div className="p-4 rounded text-center flex items-center justify-center flex-col">
            <FiGithub className="h-20 w-20" />
            <span>Github </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;