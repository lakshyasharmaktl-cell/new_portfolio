import React from 'react';
import { ExternalLink, Github, Folder, Globe } from 'lucide-react';

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Project
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A deep dive into my full-stack development journey with the MigrationHub Project.
          </p> 

        </div>

        {/* Project Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
          
          {/* Top Branding Bar */}
          <div className="bg-blue-600 py-2 px-8 flex justify-between items-center">
            <span className="text-white text-xs font-bold uppercase tracking-widest">Powered by Migrationhub.in</span>
            <Globe className="w-4 h-4 text-blue-200" />
          </div>

          <div className="p-8">
            {/* Title & Badge */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Folder className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    MigrationHub
                  </h2>
                  <p className="text-sm text-gray-500">
                    Deployment Partner: <span className="text-blue-600 font-semibold">Migrationhub.in</span>
                  </p>
                </div>
              </div>
              <span className="hidden sm:block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                LIVE NOW
              </span>
            </div>

            {/* Description Section */}
            <div className="space-y-4 text-gray-700 leading-relaxed">
  <p>
    The <strong>Migration Hub Lines</strong> project is a modern
    <strong> frontend web application</strong> designed to visually present
    global migration pathways. It helps users explore study, work, and
    residency options across multiple countries through a clean and intuitive
    interface.
  </p>

  <p>
    Built entirely on the <strong>Frontend</strong> using
    <strong> React and Tailwind CSS</strong>, the application focuses on
    responsive design, smooth navigation, and user-friendly layouts.
    The project demonstrates strong UI/UX principles without relying on
    backend services.
  </p>
</div>

{/* Technologies */}
<div className="mt-8 pt-6 border-t border-gray-100">
  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
    Core Tech Stack
  </h3>
  <div className="flex flex-wrap gap-2">
    {["React", "Tailwind CSS", "React Router DOM"].map(
      (tech) => (
        <span
          key={tech}
          className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-600 rounded-md text-sm font-medium"
        >
          {tech}
        </span>
      )
    )}
  </div>
</div>

{/* Links / Deployment Section */}
<div className="mt-10 w-100  flex justify-center ">
  <a
    href="https://migrationhub.in"
    target="_blank"
    rel="noopener noreferrer"
    className="flex jus gap-3 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-200"
  >
    <ExternalLink className="w-5 h-5" />
    Launch Live App
  </a>

 
</div>


          </div>
        </div>
      </div>
    </div>
  );
}