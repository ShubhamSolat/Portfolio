import Certificates from './Certificates';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "Jan 2023 - Present",
      location: "Remote",
      description: "Leading frontend development for multiple client projects, mentoring junior developers, and implementing best practices for React applications.",
      achievements: [
        "Led development of 5+ client projects with React and TypeScript",
        "Improved application performance by 40% through code optimization",
        "Mentored 3 junior developers and conducted code reviews",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Jest"]
    }
  
  ]

  const education = [
    {
      id: 1,
      degree: "B.Tech in Artificial Intelligence & Data Science",
  school: "B.R.A.C.T's Vishwakarma Institute of Information Technology",
      period: "2023 - 2027",
      location: "Pune, Maharashtra",
      marks: "8.71 CGPA",
    },
    {
      id: 2,
      degree: "HSC (12th)",
      school: "Maharashtra State Board",
      period: "2022-2023",
      location: "Residential junior college , Shevgaon, A.Nagar ,Maharashtra",
      marks: "87.17%",
    },
    {
      id: 3,
      degree: "SSC (10th)",
      school: "Maharashtra State Board",
      period: "2020-2021",
      location: "Residential Highschool college , Shevgaon, A.Nagar ,Maharashtra",
      marks: "89.17%",
    },

  ];
     


  return (
    <>
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Experience & Education
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My professional journey and educational background that shaped my career in web development.
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((experience) => (
                <div
                  key={experience.id}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {experience.title}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {experience.company}
                      </p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-gray-600 dark:text-gray-400 font-medium">
                        {experience.period}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {experience.location}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {experience.description}
                  </p>

                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Key Achievements:
                    </h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm">{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Technologies Used:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Education
            </h3>
            <div className="flex gap-8 overflow-x-auto pb-4 px-2">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="min-w-[300px] max-w-xs bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                      {edu.school}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 font-medium mb-1">
                      {edu.period}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">
                      {edu.location}
                    </p>
                    <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-2">
                      Marks: {edu.marks}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>
      <Certificates />
    </>
  )
}

export default Experience 