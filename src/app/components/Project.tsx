"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Project = () => {
  const testimonials = [
    {
      quote:
        "Sheikh Muhammad Ismail’s full stack development skills transformed our company’s digital presence. His expertise in the MERN stack and Redux delivered a dynamic landing page and seamless dApp, significantly enhancing user engagement and simplifying our deployment process. A truly dedicated professional!",
      name: "Muhammad Zeeshan",
      title: "GFX Mansion",
    },
    {
      quote:
        "Our business thrived thanks to Muhammad Ismail’s exceptional work as a full stack developer. His ability to craft intuitive frontend dApps and manage robust project repositories elevated our platform’s functionality, making customer interactions smoother and more efficient. Highly reliable and skilled!",
      name: "Muhammad Mustafa",
      title: "TheCockingRoom",
    },
    {
      quote:
        "We had the pleasure of working with Ismail as a Full Stack Developer, and his contributions to our team have been nothing short of exceptional. From day one, Ismail demonstrated a deep understanding of both frontend and backend development, consistently delivering high-quality solutions across the entire tech stack.",
      name: "Syed Ayan",
      title: "St George School",
    },
    {
      quote:
        "One of Ismail's standout qualities is his ability to take ownership of projects. Whether it's building a feature-rich dashboard, integrating third-party services like Clerk, Cloudinary, or implementing real-time updates, he always brings thoughtful solutions and clean code to the table. His attention to detail and focus on user experience consistently elevated the quality of our product.",
      name: "Muhammad Waqas",
      title: "Core4Tech",
    },
    {
      quote:
        "Beyond technical skills, Ismail is an excellent communicator and a true team player. He collaborates well across departments, shares knowledge generously, and adapts quickly to changing priorities and feedback. His proactive attitude and problem-solving mindset made him a trusted and valuable member of the development team.",
      name: "Mahvish",
      title: "Freelancer",
    },
  ];

  return (
    <div className="px-8 md:px-16">
      <h2 className="text-3xl font-bold mb-12 flex items-center">
        <span className="text-portfolioGreen mr-2">+</span> Client Testimonials
      </h2>
      <div className="flex flex-col items-center px-8 md:px-16 justify-center w-full">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
      </div>
    </div>
  );
};

export default Project;