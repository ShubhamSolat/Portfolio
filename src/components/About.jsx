import profileImg from '../assets/profile.jpg';
const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <img
                    src={profileImg}
                    alt="Shubham profile"
                    className="w-44 h-64 md:w-60 md:h-96 rounded-lg object-cover border-4 border-blue-500 shadow-lg bg-white dark:bg-gray-800 hover:scale-105 transition-transform duration-300"
                    style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)' }}
                  />
                </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
    
            {/* Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Name</h4>
                <p className="text-gray-600 dark:text-gray-400">Shubham Ambadas  Solat</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h4>
                <p className="text-gray-600 dark:text-gray-400">shubhamsolat7@gmail.com</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">Pune, Maharashtra, India</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Experience</h4>
                <p className="text-gray-600 dark:text-gray-400">Freasher</p>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Education
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Bachelor's Degree</h4>
                  <p className="text-gray-600 dark:text-gray-400">Artificial Intelligence and Data Science</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">B.R.A.C.T Vishwakarma Institute of Information Technology .2023-2027</p>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Web Development', 'UI/UX Design', 'Open Source', 'Reading', 'Traveling', 'Photography'].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 