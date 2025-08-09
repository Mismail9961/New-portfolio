"use client"
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const Talk = () => {
    const words = [
    {
      text: "From",
    },
    {
      text: "concept to",
    },
    {
      text: "launch -",
    },
    {
      text: "full stack",
    },
    {
      text: "full speed.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
     <div className="flex flex-col items-center justify-center h-[20rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-[22px]  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  )
}

export default Talk