"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Project = () => {
  const testimonials = [
    {
      quote: "It was the best of times, it was the worst of times...",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote: "To be, or not to be, that is the question...",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote: "It is a truth universally acknowledged...",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote: "Call me Ishmael. Some years ago...",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full px-4">
      <h2 className="text-3xl font-bold mb-12 flex items-center text-center">
        <span className="text-portfolioGreen mr-2">+</span> Client&apos;s Testimonials
      </h2>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
};

export default Project;
