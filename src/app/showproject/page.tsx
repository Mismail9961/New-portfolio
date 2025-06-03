"use client";
import { useEffect, useState } from "react";

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
        const token = localStorage.getItem("adminToken"); // get token from localStorage
        console.log(token)

        const res = await fetch("/api/users/showproject", {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        });

        const data = await res.json();

        if (data.success && Array.isArray(data.projects)) {
          setProjects(data.projects);
        } else {
          setProjects([]);
          setError(data.message || "No projects found.");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch projects.");
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Projects</h1>
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="border p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
              <p className="text-gray-700 mb-2">{project.description}</p>
              <p className="text-sm text-gray-500 mb-3">
                <strong>Uses:</strong>{" "}
                {Array.isArray(project.uses)
                  ? project.uses.map((tech, index) => (
                      <span key={index}>
                        {tech}
                        {index !== project.uses.length - 1 && ", "}
                      </span>
                    ))
                  : project.uses}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-600 hover:underline"
              >
                View Project ↗
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
