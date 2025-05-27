import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  ChevronDown, 
  User, 
  GraduationCap, 
  Briefcase,
  MapPin,
  Calendar,
  Award,
  Code,
  Brain,
  ExternalLink,
  Star
} from 'lucide-react';

const About = () => {
  const [eduOpen, setEduOpen] = useState(false);
  const [expOpen, setExpOpen] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "tarunjuneja471@gmail.com",
      href: "mailto:tarunjuneja471@gmail.com",
      color: "text-blue-500",
      hoverColor: "hover:text-blue-600"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 79882 88471",
      href: "tel:+917988288471",
      color: "text-green-500",
      hoverColor: "hover:text-green-600"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/devtarunjuneja",
      href: "https://github.com/devtarunjuneja",
      color: "text-gray-700 dark:text-gray-300",
      hoverColor: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/tarun-juneja",
      href: "https://www.linkedin.com/in/tarun-juneja-83b41124a/",
      color: "text-blue-600",
      hoverColor: "hover:text-blue-700"
    }
  ];

  const highlights = [
    { icon: <Code className="w-5 h-5" />, text: "Full-Stack Developer" },
    { icon: <Brain className="w-5 h-5" />, text: "AI/ML Enthusiast" },
    { icon: <Award className="w-5 h-5" />, text: "Hackathon Winner" },
    { icon: <GraduationCap className="w-5 h-5" />, text: "CS Student" }
  ];

  return (
    <section id="about" className="py-20 px-4 lg:px-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate developer crafting innovative solutions with modern technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* About Me Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Who I Am</h3>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Hi, I'm <span className="font-semibold text-blue-600">Tarun Juneja</span>, a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning. Currently pursuing my B.Tech degree at JMIT, Kurukshetra University, I have a strong passion for developing innovative solutions and learning new technologies.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I enjoy working on full-stack development and AI-driven projects that address real-world challenges. In my free time, I contribute to open-source projects and continually improve my skills through hands-on experience and internships.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-blue-500">
                    {highlight.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {highlight.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Get In Touch</h3>
            </div>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 group"
                >
                  <div className={`${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                    {contact.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {contact.label}
                    </div>
                    <div className={`text-gray-700 dark:text-gray-300 ${contact.hoverColor} transition-colors duration-300 font-medium`}>
                      {contact.value}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300" />
                </a>
              ))}
            </div>

            {/* Social Stats */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="p-3 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">2+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Internships</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collapsible Sections */}
        <div className="space-y-6">
          {/* Education */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
            <button
              onClick={() => setEduOpen(!eduOpen)}
              className="w-full flex justify-between items-center px-8 py-6 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-2xl font-bold text-gray-800 dark:text-white">Education</span>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-gray-600 dark:text-gray-400 transform transition-transform duration-300 ${
                  eduOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <div className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${
              eduOpen ? 'max-h-96 pb-8' : 'max-h-0'
            }`}>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    B
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      Bachelor of Technology (B.Tech) in Computer Science and Engineering
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      Specialization in AI & ML
                    </p>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>JMIT, Kurukshetra University</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>2022 – 2026</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>GPA: 7.5/10</span>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Coursework includes Artificial Intelligence, Machine Learning, Data Structures, Web Development, and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
            <button
              onClick={() => setExpOpen(!expOpen)}
              className="w-full flex justify-between items-center px-8 py-6 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="text-2xl font-bold text-gray-800 dark:text-white">Experience</span>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-gray-600 dark:text-gray-400 transform transition-transform duration-300 ${
                  expOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            <div className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${
              expOpen ? 'max-h-[800px] pb-8' : 'max-h-0'
            }`}>
              <div className="space-y-6">
                {/* AICTE Internship */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                      AI
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                        AICTE Internship in Artificial Intelligence
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                        Techsaksham Edunet Foundation
                      </p>
                      <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>Jan 2025 – Mar 2025</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        Developed a health specialist chatbot using JavaScript, HTML, and CSS. The chatbot was designed to assist users with health-related queries and provide intelligent suggestions using basic natural language understanding. Worked on both the UI design and backend integration to create a functional and interactive web tool.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Full-Stack Intern */}
                <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                      FS
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                        Full-Stack Intern
                      </h4>
                      <p className="text-green-600 dark:text-green-400 font-semibold mb-2">
                        Hoping Minds
                      </p>
                      <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>Aug 2024 – Sep 2024</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        Built a responsive salary prediction web application using React.js on the frontend and FastAPI on the backend. Designed user interfaces, integrated APIs, and improved SEO performance. Gained hands-on experience with RESTful services, form validation, and deployment workflows.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;