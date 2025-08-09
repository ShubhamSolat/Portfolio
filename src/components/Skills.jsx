
import { useState } from 'react';

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", level: 90, info: "Semantic markup, accessibility" },
      { name: "CSS3", level: 85, info: "Flexbox, Grid, Animations" },
      { name: "JavaScript", level: 88, info: "ES6+, DOM, Fetch API" },
      { name: "React", level: 85, info: "Hooks, Context, SPA" },
      { name: "TypeScript", level: 75, info: "Types, Interfaces, Generics" },
      { name: "Tailwind CSS", level: 80, info: "Utility-first, Responsive" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 70, info: "APIs, npm, Async" },
      { name: "Express.js", level: 65, info: "Routing, Middleware" },
      { name: "Python", level: 60, info: "Scripting, Flask" },
      { name: "MongoDB", level: 65, info: "NoSQL, Aggregation" },
      { name: "SQL", level: 70, info: "Joins, Queries" }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 85, info: "Branching, PRs" },
      { name: "VS Code", level: 90, info: "Extensions, Shortcuts" },
      { name: "Figma", level: 60, info: "Wireframes, Prototypes" },
      { name: "Docker", level: 50, info: "Containers, Images" },
      { name: "AWS", level: 45, info: "EC2, S3, Lambda" }
    ]
  }
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Click a category to explore my skills. Hover a skill for details!
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2 rounded-full font-semibold transition-colors duration-200 border-2 ${activeTab === idx ? 'bg-blue-600 text-white border-blue-600' : 'bg-white dark:bg-gray-700 text-blue-600 border-blue-600 dark:text-white dark:border-gray-600'} hover:bg-blue-500 hover:text-white`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories[activeTab].skills.map((skill, i) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm group relative cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onMouseEnter={() => setHoveredSkill(i)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full animate-skillbar"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              {/* Tooltip */}
              {hoveredSkill === i && (
                <div className="absolute left-1/2 -top-8 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded shadow-lg z-10 animate-fadein">
                  {skill.info}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Custom CSS for animation */}
        <style>{`
          .animate-skillbar {
            transition: width 1.2s cubic-bezier(.4,2,.6,1);
          }
          @keyframes fadein {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadein {
            animation: fadein 0.3s;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Skills;