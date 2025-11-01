import React, { useState, useEffect } from 'react'
import { Github, Instagram, Menu, X, Download } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5" />, 
      href: "https://github.com", 
      name: "GitHub",
      color: "hover:text-gray-700"
    },
    { 
      icon: <Instagram className="w-5 h-5" />, 
      href: "https://instagram.com", 
      name: "Instagram",
      color: "hover:text-pink-600"
    }
  ];

  return (
    <div className="relative">
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0, 0, 0);
          }
          40%, 43% {
            transform: translate3d(0, -8px, 0);
          }
          70% {
            transform: translate3d(0, -4px, 0);
          }
        }

        @keyframes jiggle {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(-5deg) scale(1.1); }
          75% { transform: rotate(5deg) scale(1.1); }
        }

        .animate-slide-down {
          animation: slideDown 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }

        .animate-bounce {
          animation: bounce 1s ease-in-out;
        }

        .animate-jiggle {
          animation: jiggle 0.4s ease-in-out;
        }

        .glass-effect {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .scrolled-glass {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'scrolled-glass py-2' : 'glass-effect py-4'
      } animate-slide-down`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="animate-fade-in-up">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
                Laxxy
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {/* Download Resume Button */}
              <button className="group animate-fade-in-up flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 active:scale-95">
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                <span>Download Resume</span>
              </button>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`animate-fade-in-up p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 ${social.color} group`}
                    style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                    onMouseEnter={(e) => {
                      e.currentTarget.classList.add('animate-jiggle');
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.classList.remove('animate-jiggle');
                    }}
                    onAnimationEnd={(e) => {
                      e.currentTarget.classList.remove('animate-jiggle');
                    }}
                  >
                    <div className="relative">
                      {social.icon}
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-fade-in-up">
              <div className="flex flex-col items-center gap-4">
                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:shadow-lg transition-all duration-300">
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>
                
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        {/* Animated background dots */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 4}s ease-in-out ${i * 0.3}s infinite`
            }}
          ></div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-10px) translateX(5px); }
          66% { transform: translateY(5px) translateX(-5px); }
        }
        
        body {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
        }
      `}</style>
    </div>
  )
}