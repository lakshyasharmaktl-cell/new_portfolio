import React from 'react';
import { ExternalLink, Github, Folder, Globe, Code2, ShoppingBag } from 'lucide-react';

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Featured Projects
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Exploring full-stack development with MigrationHub, innovative solutions with Loopix, and e-commerce with Olax.
          </p>
        </div>

        {/* Projects Grid - 3 columns on large screens, 2 on medium, 1 on small */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* MigrationHub Project Card */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden flex flex-col">
            {/* Top Branding Bar */}
            <div className="bg-blue-600 py-1.5 px-4 flex justify-between items-center">
              <span className="text-white text-xs font-bold uppercase tracking-widest">MigrationHub</span>
              <Globe className="w-3.5 h-3.5 text-blue-200" />
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Folder className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-800">MigrationHub</h2>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-full">LIVE</span>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed flex-1">
                Visualizing global migration pathways for study, work, and residency options.
              </p>

              <div className="mt-3 pt-3 border-t border-gray-100">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {["React", "Tailwind CSS", "React Router"].map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-gray-50 border border-gray-200 text-gray-600 rounded-md text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="https://migrationhub.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all text-sm">
                  <ExternalLink className="w-3.5 h-3.5" /> Launch
                </a>
              </div>
            </div>
          </div>

          {/* Loopix Project Card */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden flex flex-col">
            <div className="bg-purple-600 py-1.5 px-4 flex justify-between items-center">
              <span className="text-white text-xs font-bold uppercase tracking-widest">Full Stack</span>
              <Code2 className="w-3.5 h-3.5 text-purple-200" />
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <Folder className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-800">Loopix</h2>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-full">LIVE</span>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed flex-1">
                Full-stack project showcasing modern web development with seamless user experience.
              </p>

              <div className="mt-3 pt-3 border-t border-gray-100">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {["React", "Node.js", "MongoDB", "Express"].map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-gray-50 border border-gray-200 text-gray-600 rounded-md text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a href="https://loopix-three.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all text-sm">
                    <ExternalLink className="w-3.5 h-3.5" /> Demo
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-medium transition-all text-sm">
                    <Github className="w-3.5 h-3.5" /> Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Olax Project Card */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden flex flex-col">
            <div className="bg-orange-500 py-1.5 px-4 flex justify-between items-center">
              <span className="text-white text-xs font-bold uppercase tracking-widest">E-Commerce</span>
              <ShoppingBag className="w-3.5 h-3.5 text-orange-200" />
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-orange-50 rounded-lg">
                  <ShoppingBag className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-800">Olax</h2>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-full">LIVE</span>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed flex-1">
                Modern e-commerce platform featuring hot deals, coupons, and a seamless shopping experience.
              </p>

              <div className="mt-3 pt-3 border-t border-gray-100">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {["React", "Tailwind CSS", "E-commerce"].map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-gray-50 border border-gray-200 text-gray-600 rounded-md text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="https://olax-rqos.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-all text-sm">
                  <ExternalLink className="w-3.5 h-3.5" /> Visit Store
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}