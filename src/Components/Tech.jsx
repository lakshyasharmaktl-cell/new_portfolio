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
  Lock,
  Wifi,
  FileCode,
  Box,
  Network,
  ShieldCheck,
  Monitor
} from 'lucide-react';

export default function Tech() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const techIcons = [
    { icon: <Code2 />, name: "React", color: "text-cyan-400" },
    { icon: <Server />, name: "Node.js", color: "text-green-500" },
    { icon: <Terminal />, name: "Python", color: "text-yellow-400" },
    { icon: <FileCode />, name: "JavaScript", color: "text-yellow-300" },
    { icon: <Box />, name: "TypeScript", color: "text-blue-500" },
    { icon: <Database />, name: "MongoDB", color: "text-green-400" },
    { icon: <Layout />, name: "PostgreSQL", color: "text-blue-400" },
    { icon: <Cloud />, name: "AWS", color: "text-orange-400" },
    { icon: <Cpu />, name: "Docker", color: "text-blue-300" },
    { icon: <Network />, name: "Kubernetes", color: "text-blue-400" },
    { icon: <GitBranch />, name: "Git", color: "text-orange-500" },
    { icon: <Database />, name: "Database", color: "text-gray-400" },
    { icon: <Shield />, name: "Security", color: "text-yellow-300" },
    { icon: <Smartphone />, name: "Mobile", color: "text-purple-400" },
    { icon: <Wifi />, name: "Cloud", color: "text-blue-200" },
    { icon: <Zap />, name: "Express", color: "text-gray-300" },
    { icon: <Globe />, name: "Next.js", color: "text-white" },
    { icon: <Palette />, name: "Tailwind", color: "text-cyan-300" },
    { icon: <Network />, name: "GraphQL", color: "text-pink-500" },
    { icon: <ShieldCheck />, name: "Redis", color: "text-red-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h1>
          <p className="text-2xl text-gray-300">
            Technologies I Work With
          </p>
        </div>

        {/* Large Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 md:gap-12">
          {techIcons.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center group relative"
              onMouseEnter={() => setHoveredIcon(index)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              {/* Large Icon Container with Enhanced Animations */}
              <div 
                className={`
                  relative p-6 md:p-8 rounded-3xl bg-white/5 backdrop-blur-sm border-2 border-white/10 
                  transition-all duration-700 group-hover:scale-125 group-hover:bg-white/15
                  ${hoveredIcon === index ? 'scale-125 bg-white/15 shadow-2xl' : ''}
                  ${tech.color}
                  animate-float-in
                `}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: `${hoveredIcon === index ? 'bounce 0.8s ease-in-out' : ''}`
                }}
              >
                {/* Extra Large Icon */}
                <div className={`
                  transition-all duration-500 group-hover:scale-110
                  ${hoveredIcon === index ? 'scale-110' : ''}
                `}>
                  {React.cloneElement(tech.icon, {
                    className: "w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                  })}
                </div>

                {/* Multiple Glow Effects */}
                <div className={`
                  absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/30 to-blue-500/30 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  ${hoveredIcon === index ? 'opacity-100' : ''}
                `}></div>

                {/* Rotating Ring */}
                <div className={`
                  absolute -inset-2 rounded-3xl border-4 border-cyan-400/40 
                  opacity-0 group-hover:opacity-100 transition-all duration-700
                  ${hoveredIcon === index ? 'opacity-100 animate-spin-slow' : ''}
                `}></div>

                {/* Pulse Effect */}
                <div className={`
                  absolute -inset-3 rounded-3xl border-2 border-purple-400/20 
                  opacity-0 group-hover:opacity-100 transition-all duration-1000
                  ${hoveredIcon === index ? 'opacity-100 animate-ping-slow' : ''}
                `}></div>
              </div>

              {/* Floating Tooltip */}
              <div className={`
                absolute -bottom-14 bg-gray-900/90 text-white px-4 py-2 rounded-xl text-lg font-bold
                opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4
                border border-gray-600 backdrop-blur-sm whitespace-nowrap z-20
                ${hoveredIcon === index ? 'opacity-100 translate-y-0' : ''}
              `}>
                {tech.name}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-900/90 rotate-45 border-l border-t border-gray-600"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Floating Hint */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 text-gray-300 text-xl bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
            <span className="animate-bounce text-2xl">🚀</span>
            <span className="font-semibold">Hover for awesome animations!</span>
            <span className="animate-bounce text-2xl" style={{ animationDelay: '0.3s' }}>✨</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatIn {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.8);
          }
          60% {
            transform: translateY(-10px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: scale(1.25) translateY(0);
          }
          25% {
            transform: scale(1.3) translateY(-8px);
          }
          50% {
            transform: scale(1.25) translateY(-4px);
          }
          75% {
            transform: scale(1.3) translateY(-2px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-float-in {
          animation: floatIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}