import React from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

export default function Projects() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            My Project
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Below is a detailed description of my main project developed as part of my learning and portfolio.
          </p>
        </div>

        {/* Project Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">

          {/* Title */}
          <div className="flex items-center gap-4 mb-6">
            <Folder className="w-10 h-10 text-blue-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Whisky (Wisky) Project
              </h2>
              <span className="text-sm text-blue-600 font-medium">
                Full Stack Web Application
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The <strong>Whisky (Wisky) Project</strong> is a full-stack web application designed to showcase
              premium whisky brands and provide detailed information about different whisky categories,
              flavors, origins, and pricing. This project focuses on creating a clean, modern, and
              user-friendly interface for whisky lovers and premium drink enthusiasts.
            </p>

            <p>
              The application allows users to explore various whisky brands, view detailed product pages,
              and understand brand history and premium collections. The frontend is developed using
              <strong> React </strong> with <strong>Tailwind CSS</strong> to ensure a responsive and visually
              appealing design across all devices.
            </p>

            <p>
              On the backend, the project uses <strong>Node.js</strong> and <strong>MongoDB</strong> to manage
              product data, user interactions, and secure API handling. The application structure follows
              proper MVC principles to ensure scalability and maintainability.
            </p>

            <p>
              This project helped me gain hands-on experience in full-stack development, component-based UI
              design, database integration, and modern web development practices. It also improved my
              understanding of real-world application flow, data handling, and user experience design.
            </p>
          </div>

          {/* Technologies */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {["React", "Tailwind CSS", "Node.js", "MongoDB", "JavaScript", "REST API"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-6 mt-8">
            <a
              href="#"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium"
            >
              <Github className="w-5 h-5" />
              Source Code
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
