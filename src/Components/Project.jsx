import React from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "#",
      githubLink: "#",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
      category: "Frontend"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application that displays current weather and forecasts for multiple cities.",
      technologies: ["JavaScript", "API Integration", "CSS3"],
      liveLink: "#",
      githubLink: "#",
      category: "Frontend"
    },
    {
      id: 4,
      title: "REST API Service",
      description: "A robust REST API with authentication, rate limiting, and comprehensive documentation.",
      technologies: ["Express.js", "JWT", "PostgreSQL", "Swagger"],
      liveLink: "#",
      githubLink: "#",
      category: "Backend"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills with clean, modern design.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "#",
      githubLink: "#",
      category: "Frontend"
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Real-time chat application with rooms, private messaging, and file sharing capabilities.",
      technologies: ["Socket.io", "React", "Node.js", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
      category: "Full Stack"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing my skills and experience in web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              {/* Project Header */}
              <div className="flex items-center gap-3 mb-4">
                <Folder className="w-8 h-8 text-blue-500" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <span className="text-sm text-blue-600 font-medium">{project.category}</span>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-medium">Live Demo</span>
                </a>
                <a
                  href={project.githubLink}
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-medium">Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            View More Projects
          </button>
        </div>
      </div>
    </div>
  );
}