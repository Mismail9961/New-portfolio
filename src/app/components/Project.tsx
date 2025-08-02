"use client";

import CircularGallery from "./InfiniteMenu";

const Project = () => {
  return (
    <div style={{ height: "730px", position: "relative" }}>
      <h2 className="text-3xl py-2 ml-14 font-bold mb-12 flex items-center">
        <span className="text-portfolioGreen mr-2">+</span> Client&apos;s
        Testimonials
      </h2>
      <CircularGallery
        bend={3}
        textColor="#ffffff"
        borderRadius={0.05}
        scrollEase={0.02}
      />
    </div>
  );
};

export default Project;
