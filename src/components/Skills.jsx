import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Database, 
  Wrench, 
  Brain, 
  Globe, 
  Layers, 
  Server,
  GitBranch,
  Palette,
  Monitor,
  Zap,
  Star
} from 'lucide-react';

function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML5 & CSS3", level: 95, icon: "🌐" },
        { name: "JavaScript (ES6+)", level: 90, icon: "⚡" },
        { name: "React.js", level: 88, icon: "⚛️" },
        { name: "Tailwind CSS", level: 85, icon: "🎨" },
        { name: "Vue.js", level: 65, icon: "💚" }
      ]
    },
    {
      title: "Backend & AI",
      icon: <Server className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "Python", level: 82, icon: "🐍" },
        { name: "FastAPI", level: 78, icon: "🚀" },
        { name: "Generative AI", level: 75, icon: "🤖" },
        { name: "RESTful APIs", level: 80, icon: "🔗" }
      ]
    },
    {
      title: "Tools & Libraries",
      icon: <Wrench className="w-6 h-6" />,
      gradient: "from-green-500 to-teal-500",
      skills: [
        { name: "Vite", level: 85, icon: "⚡" },
        { name: "Redux", level: 75, icon: "🔄" },
        { name: "Axios", level: 80, icon: "📡" },
        { name: "Chart.js", level: 70, icon: "📊" },
        { name: "Authentication", level: 78, icon: "🔐" }
      ]
    },
    {
      title: "Database & DevOps",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      skills: [
        { name: "MySQL", level: 80, icon: "🗄️" },
        { name: "Firebase", level: 75, icon: "🔥" },
        { name: "SQL", level: 85, icon: "📊" },
        { name: "Git & GitHub", level: 88, icon: "🌿" }
      ]
    },
    {
      title: "Design & Productivity",
      icon: <Palette className="w-6 h-6" />,
      gradient: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Figma", level: 75, icon: "🎨" },
        { name: "VS Code", level: 92, icon: "💻" },
        { name: "Postman", level: 80, icon: "📮" },
        { name: "UI/UX Design", level: 72, icon: "✨" }
      ]
    }
  ];

  const SkillBar = ({ skill, index, categoryIndex }) => (
    <div className="mb-4 group">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="font-medium text-gray-800 dark:text-gray-200">
            {skill.name}
          </span>
        </div>
        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${skillCategories[categoryIndex].gradient} rounded-full transition-all duration-1000 ease-out transform origin-left`}
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 100}ms`
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 px-4 lg:px-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} text-white shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-1">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    skill={skill}
                    index={skillIndex}
                    categoryIndex={categoryIndex}
                  />
                ))}
              </div>

              {/* Category Footer */}
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {category.skills.length} Technologies
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "20+", label: "Technologies", icon: <Code className="w-6 h-6" /> },
            { number: "5+", label: "Frameworks", icon: <Layers className="w-6 h-6" /> },
            { number: "3+", label: "Databases", icon: <Database className="w-6 h-6" /> },
            { number: "10+", label: "Tools", icon: <Wrench className="w-6 h-6" /> }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-800 dark:text-white mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Brain className="w-5 h-5" />
            <span className="font-semibold text-lg">Always Learning & Growing</span>
            <Zap className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;