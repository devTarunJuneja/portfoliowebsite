import React from 'react';
import { ExternalLink, Github, Award, ShoppingBag, Stethoscope, Zap } from 'lucide-react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "EchoHealth - AI Powered Voice Disorder Diagnosis",
      description: "A cutting-edge healthcare platform designed to streamline voice diagnostics and data-driven clinical decision-making.",
      fullDescription: "Developed EchoHealth, an AI-powered tool for voice disorder diagnosis. Integrated real-time data analytics for enhanced clinical decision-making and automated patient monitoring processes.",
       image: "data:image/jpeg;base64,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",
      tags: ["AI/ML", "React", "Healthcare", "Data Analytics"],
      links: {
        github: "https://github.com/devTarunJuneja/Echohealthapp",
        live: null
      },
      icon: <Stethoscope className="w-6 h-6" />,
      achievement: "2X Hackathon Winner",
      gradient: "from-emerald-400 to-cyan-500"
    },
    {
      id: 2,
      title: "UrbanEthnic - Fashion E-commerce Site",
      description: "A responsive single-page e-commerce website for ethnic fashion and clothing, built with modern web technologies.",
      fullDescription: "Built a responsive e-commerce platform with cross-browser compatibility using React.js and Tailwind CSS. Deployed with Vite for fast builds and code optimization.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Tailwind CSS", "Vite", "E-commerce"],
      links: {
        github: null,
        live: "https://urbanethnic.vercel.app/"
      },
      icon: <ShoppingBag className="w-6 h-6" />,
      achievement: "Live Project",
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing innovative solutions that blend creativity with cutting-edge technology
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-12 items-center group`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2 relative overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 z-10`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute top-4 left-4 z-20">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${project.gradient} text-white shadow-lg`}>
                    {project.icon}
                  </div>
                </div>
                {project.achievement && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="flex items-center gap-2 px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-sm font-semibold shadow-lg">
                      <Award className="w-4 h-4" />
                      {project.achievement}
                    </div>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Zap className="w-5 h-5" />
            <span className="font-semibold">More Projects Coming Soon!</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;