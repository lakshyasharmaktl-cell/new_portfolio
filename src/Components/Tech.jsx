import React, { useState } from 'react';
import {
  Code2,
  Database,
  Cloud,
  Shield,
  Smartphone,
  GitBranch,
  Server,
  Cpu,
  Globe,
  Terminal,
  Layout,
  Palette,
  Zap,
  Wifi,
  FileCode,
  Box,
  Network,
  ShieldCheck
} from 'lucide-react';

export default function Tech() {
  const [activeIndex, setActiveIndex] = useState(0);

  const techIcons = [
    { icon: Code2, name: "React", color: "text-cyan-400" },
    { icon: Server, name: "Node.js", color: "text-green-500" },
    { icon: Terminal, name: "Python", color: "text-yellow-400" },
    { icon: FileCode, name: "JavaScript", color: "text-yellow-300" },
    { icon: Box, name: "TypeScript", color: "text-blue-500" },
    { icon: Database, name: "MongoDB", color: "text-green-400" },
    { icon: Layout, name: "PostgreSQL", color: "text-blue-400" },
    { icon: Cloud, name: "AWS", color: "text-orange-400" },
    { icon: Cpu, name: "Docker", color: "text-blue-300" },
    { icon: Network, name: "Kubernetes", color: "text-blue-400" },
    { icon: GitBranch, name: "Git", color: "text-orange-500" },
    { icon: Shield, name: "Security", color: "text-yellow-300" },
    { icon: Smartphone, name: "Mobile", color: "text-purple-400" },
    { icon: Wifi, name: "Cloud Services", color: "text-blue-200" },
    { icon: Zap, name: "Express", color: "text-gray-300" },
    { icon: Globe, name: "Next.js", color: "text-white" },
    { icon: Palette, name: "Tailwind CSS", color: "text-cyan-300" },
    { icon: ShieldCheck, name: "Redis", color: "text-red-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h1>
          <p className="text-2xl text-gray-300">
            Hover an icon — it stays highlighted
          </p>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-12">
          {techIcons.map((tech, index) => {
            const Icon = tech.icon;
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer relativee"
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Icon Card */}
                <div
                  className={`
                    relative p-8 rounded-3xl border-2 backdrop-blur-sm
                    transition-all duration-700 ease-out
                    ${isActive
                      ? 'scale-125 bg-white/20 border-cyan-400 shadow-2xl'
                      : 'scale-100 bg-white/5 border-white/10'}
                    ${tech.color}
                  `}
                >
                  <Icon className="w-20 h-20" />

                  {/* Glow + Ring */}
                  {isActive && (
                    <>
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/40 to-blue-500/40 blur-xl"></div>
                      <div className="absolute -inset-2 rounded-3xl border-4 border-cyan-400/40 animate-spin-slow"></div>
                    </>
                  )}
                </div>

                {/* Name */}
                <div
                  className={`
                    mt-6 px-4 py-2 rounded-xl text-lg font-bold transition-all duration-500
                    ${isActive
                      ? 'bg-gray-900 text-white opacity-100'
                      : 'text-gray-400 opacity-70'}
                  `}
                >
                  {tech.name}
                </div>
              </div>
            );
          })}
        </div>

        {/* Hint */}
        <div className="text-center mt-20">
          <p className="text-xl text-gray-300">
            ✨ Hover one icon at a time — it stays active
          </p>
        </div>

      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </div>
  );
}
