"use client";

import { useEffect, useState } from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { FiArrowUpRight } from "react-icons/fi";

type Project = {
  _id: string;
  name: string;
  description: string;
  uses: string[];
  link: string;
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();

        if (data.success && Array.isArray(data.projects)) {
          setProjects(data.projects);
        } else {
          setError(data.message || "No projects found.");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch projects.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <p className="text-center text-zinc-500 py-10">Loading projects...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 py-10">{error}</p>;
  }

  const hoverProjects = projects.map((project) => ({
    title: project.name,
    link: project.link,
    description: (
      <div className="space-y-3 text-sm text-zinc-600">
        {project.uses?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.uses.map((tech, index) => (
              <span
                key={index}
                className="bg-zinc-100 text-zinc-700 px-2 py-0.5 rounded-full text-xs font-medium border border-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="leading-relaxed">{project.description}</div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => window.open(project.link, "_blank")}
            className="inline-flex items-center text-xs text-blue-600 font-medium hover:underline"
          >
            Visit Project <FiArrowUpRight className="ml-1" />
          </button>
        </div>
      </div>
    ),
  }));

  return (
    <section className="w-full min-h-[70vh] px-4 sm:px-8 md:px-16 py-10 md:py-16">
      <h2 className="text-3xl font-bold flex items-center mb-6 md:mb-10">
        <span className="text-portfolioGreen mr-2">+</span> My Projects
      </h2>
      <HoverEffect items={hoverProjects} className="gap-6" />
    </section>
  );
}
