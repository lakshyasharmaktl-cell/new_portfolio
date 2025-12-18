import React, { useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin, ArrowRight, Code, Palette, Server, Users } from 'lucide-react';

export default function Expr() {
  const experiencesRef = useRef(null);

  const experiences = [
    {
      id: 1,
      title: "Node js Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      location: "Remote",
      type: "Full-time",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      description: "Developed and maintained web applications using modern technologies. Led a team of 3 developers and delivered 10+ successful projects.",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "TypeScript"],
      achievements: ["Increased performance by 40%", "Reduced load time by 60%", "Led team of 5 developers"]
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Solutions LLC",
      period: "2021 - 2022",
      location: "New York, NY",
      type: "Full-time",
      icon: <Palette className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      description: "Created responsive and interactive user interfaces for various clients. Collaborated with UX designers to implement pixel-perfect designs.",
      technologies: ["React", "Vue.js", "Sass", "JavaScript", "Webpack"],
      achievements: ["Improved UX by 35%", "Built 15+ reusable components", "Mentored 2 junior developers"]
    },
    {
      id: 3,
      title: "Backend Developer",
      company: "Data Systems Corp",
      period: "2020 - 2021",
      location: "San Francisco, CA",
      type: "Contract",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      description: "Built robust backend systems and APIs. Optimized database performance and implemented secure authentication systems.",
      technologies: ["Python", "Django", "PostgreSQL", "Docker", "Redis"],
      achievements: ["Reduced API response time by 50%", "Implemented microservices architecture", "Handled 1M+ daily requests"]
    },
    
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.experience-card, .tech-tag, .achievement-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-slate-900 py-20 px-4">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
            <Briefcase className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">Professional Journey</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey through innovative companies and challenging projects
          </p>
        </div>

        {/* Experience Timeline */}
        <div ref={experiencesRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1 h-full w-1 bg-gradient-to-b from-cyan-500/30 to-blue-500/30 rounded-full"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`experience-card opacity-0 transform translate-y-8 relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } gap-8`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 border-4 border-slate-900 z-10"></div>

                {/* Content Card */}
                <div className="ml-16 md:ml-0 md:w-1/2">
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 group hover:scale-105">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} text-white shadow-lg`}>
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-cyan-300 font-semibold">{exp.company}</p>
                        </div>
                      </div>
                      <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                        {exp.type}
                      </span>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-gray-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="tech-tag opacity-0 transform translate-y-4 bg-white/5 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-500/20 backdrop-blur-sm"
                          style={{ animationDelay: `${(index * 0.2) + (techIndex * 0.1) + 0.5}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div
                          key={achievement}
                          className="achievement-item opacity-0 transform translate-x-4 flex items-center gap-3 text-gray-300"
                          style={{ animationDelay: `${(index * 0.2) + (achievementIndex * 0.15) + 0.8}s` }}
                        >
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span className="text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Hover Arrow */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                      <ArrowRight className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-cyan-400/30 backdrop-blur-sm">
            <span className="flex items-center gap-3">
              Download Full Resume
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .experience-card.animate-in {
          animation: slideInUp 0.8s ease-out forwards;
        }

        .tech-tag.animate-in {
          animation: slideInRight 0.5s ease-out forwards;
        }

        .achievement-item.animate-in {
          animation: slideInRight 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}