import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="work"
      className="py-24 px-[5vw] md:px-[10vw] lg:px-[15vw] font-sans relative overflow-hidden bg-[#0b0b12] min-h-screen"
    >
      {/* Unique animated background – floating orbs + grid */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_#1a1a2e_0%,_#0b0b12_100%)]"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-float-slower"></div>
      </div>

      {/* Section Title */}
      <div className="text-center mb-16 relative">
        <span className="inline-block px-5 py-1.5 rounded-full bg-white/5 text-purple-300 text-xs font-mono tracking-widest border border-white/10 backdrop-blur-sm mb-4">
          MY JOURNEY
        </span>
        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent bg-[length:200%] animate-shimmer">
            Project Timeline
          </span>
        </h2>
        <div className="flex justify-center mt-5">
          <div className="w-24 h-0.5 bg-gradient-to-r from-purple-500/0 via-purple-400 to-purple-500/0 rounded-full"></div>
        </div>
        <p className="text-gray-400 mt-5 text-base max-w-xl mx-auto leading-relaxed">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Central vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/20 via-purple-400/40 to-purple-500/20 transform -translate-x-1/2 hidden md:block"></div>

        {/* Projects Timeline */}
        <div className="space-y-16 md:space-y-24 relative">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const isExpanded = expandedId === project.id;

            return (
              <div
                key={project.id}
                className={`flex flex-col md:flex-row items-center ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-6 md:gap-12 relative`}
              >
                {/* Timeline dot (visible on md+) */}
                <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-purple-500 border-2 border-[#0b0b12] shadow-lg shadow-purple-500/30"></div>
                </div>

                {/* Card container */}
                <div
                  className={`w-full md:w-5/12 ${isEven ? "md:text-right" : "md:text-left"}`}
                >
                  <div
                    onClick={() => toggleExpand(project.id)}
                    className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg transition-all duration-500 cursor-pointer hover:border-purple-500/30 hover:shadow-purple-500/10 ${
                      isExpanded
                        ? "border-purple-500/40 shadow-xl shadow-purple-500/20"
                        : ""
                    }`}
                  >
                    {/* Decorative corner fold */}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-tr-2xl pointer-events-none"></div>

                    {/* Project meta */}
                    <div className="flex items-center gap-3 mb-3 justify-between">
                      <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs text-gray-500">
                        {project.year || "2026"}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Expanded view */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isExpanded
                          ? "max-h-[800px] opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-xl mb-4 shadow-lg"
                      />
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center bg-white/5 hover:bg-purple-600/20 text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm border border-white/10 hover:border-purple-500/40 transition"
                        >
                          Code
                        </a>
                        <a
                          href={project.webapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm shadow-lg shadow-purple-500/30 transition"
                        >
                          Live
                        </a>
                      </div>
                    </div>

                    {/* Expand indicator */}
                    <div className="mt-3 flex justify-center text-purple-400 text-xs font-mono tracking-widest">
                      {isExpanded ? "▲ CLOSE" : "▼ CLICK TO EXPLORE"}
                    </div>
                  </div>
                </div>

                {/* Empty spacer for alignment on md+ */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
                @keyframes float-slow {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(-30px, 20px) scale(1.1); }
                }
                @keyframes float-slower {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(30px, -20px) scale(1.2); }
                }
                @keyframes shimmer {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 200% 50%; }
                }
                .animate-float-slow {
                    animation: float-slow 8s ease-in-out infinite;
                }
                .animate-float-slower {
                    animation: float-slower 12s ease-in-out infinite;
                }
                .animate-shimmer {
                    animation: shimmer 6s linear infinite;
                    background-size: 200% auto;
                }
            `}</style>
    </section>
  );
};

export default Work;
