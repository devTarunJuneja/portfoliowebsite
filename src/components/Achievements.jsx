import React from 'react';
import { Trophy, Medal, Award, Star, Crown, Zap } from 'lucide-react';

function Achievements() {
  const achievements = [
    {
      title: "HackVisionVault 2k25",
      subtitle: "Winner - 1st Prize",
      description: "Led team to victory against 128 teams from multiple institutes across India at Maharishi Markandeshwar University",
      icon: Crown,
      rank: "1st",
      participants: "128 Teams",
      level: "National",
      color: "from-yellow-400 to-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      borderColor: "border-yellow-200 dark:border-yellow-800"
    },
    {
      title: "Vertex Innovate 2K24",
      subtitle: "2nd Runner Up",
      description: "Secured 3rd place at VIT Vellore's prestigious national level online hackathon",
      icon: Trophy,
      rank: "3rd",
      participants: "National Level",
      level: "National",
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800"
    },
    {
      title: "HackVSIT 6.0",
      subtitle: "3rd Runner Up",
      description: "4th place at Indraprastha University, Delhi, competing among 50 teams from across India",
      icon: Medal,
      rank: "4th",
      participants: "50 Teams",
      level: "National",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800"
    },
    {
      title: "MLH Global Hackathon",
      subtitle: "Finalist - Hacktu 6.0",
      description: "Only finalist from Haryana in this prestigious Global hackathon at Thapar University",
      icon: Star,
      rank: "Finalist",
      participants: "Global",
      level: "International",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800"
    },
    {
      title: "HackMoR 2k25 (MRU)",
      subtitle: "Finalist",
      description: "5th place at Manav Rachna University. AI-driven solution praised by AICTE Chairman for innovation and impact",
      icon: Award,
      rank: "5th",
      participants: "AI Innovation",
      level: "National",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800"
    },
    {
      title: "Bio X AI Hackathon",
      subtitle: "Finalist",
      description: "finalist at Hackathon at berlin germany. Got praise from internation judges",
      icon: Award,
      rank: "Finalist",
      participants: "AI Innovation",
      level: "InterNational",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      borderColor: "border-green-200 dark:border-green-800"
    }
  ];


  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-8 h-8 text-yellow-500 mr-3" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Achievements & Recognition
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Recognized for innovation and excellence in national and international hackathons
          </p>
        </div>

      
        {/* Achievement Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl ${achievement.bgColor} ${achievement.borderColor} border-2 hover:shadow-2xl hover:scale-105 transform transition-all duration-300`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${achievement.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {achievement.title}
                        </h3>
                        <p className={`text-sm font-semibold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                          {achievement.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    {/* Rank Badge */}
                    <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${achievement.color} text-white text-sm font-bold shadow-lg`}>
                      {achievement.rank}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${achievement.bgColor} ${achievement.borderColor} border`}>
                        {achievement.level}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {achievement.participants}
                      </span>
                    </div>
                    
                    {/* Hover Arrow */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center`}>
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${achievement.color}`}></div>
                </div>
                <div className="absolute -bottom-4 -left-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${achievement.color}`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <Trophy className="w-5 h-5 mr-2" />
            View All Projects
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;