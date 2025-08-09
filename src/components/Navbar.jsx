import { useState, useEffect } from 'react'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-[9999] transition-all duration-500 ${
      scrolled 
        ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 backdrop-blur-xl shadow-2xl border-b-2 border-purple-400' 
        : 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 backdrop-blur-lg border-b-2 border-purple-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent hover:from-yellow-200 hover:via-pink-200 hover:to-purple-200 transition-all duration-300 transform hover:scale-110 cursor-pointer drop-shadow-lg text-white">
              Shubham
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-110 ${
                      isActive
                        ? 'text-white bg-gradient-to-r from-yellow-400 to-pink-400 shadow-lg'
                        : 'text-white hover:text-white hover:bg-white/20'
                    } group overflow-hidden`}
                  >
                    {item.name}
                    {/* Animated underline */}
                    <span className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 transform scale-x-0 transition-transform duration-500 ${
                      isActive ? 'scale-x-100' : 'group-hover:scale-x-100'
                    }`}></span>
                    
                    {/* Hover glow effect */}
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/20 via-pink-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    
                    {/* Shimmer effect */}
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center space-x-4">
                          <button
                onClick={() => setDarkMode(!darkMode)}
                className="relative p-2 rounded-xl bg-white/20 text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 hover:rotate-12 group border border-white/30"
              >
                              {/* Ripple effect */}
                <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              
                              {darkMode ? (
                  <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:rotate-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:-rotate-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative p-2 rounded-xl bg-white/20 text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 group border border-white/30"
              >
                {/* Animated hamburger icon */}
                <div className="relative w-6 h-6">
                  <span className={`absolute top-0 left-0 w-6 h-0.5 bg-white transform transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}></span>
                  <span className={`absolute top-2 left-0 w-6 h-0.5 bg-white transform transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}></span>
                  <span className={`absolute top-4 left-0 w-6 h-0.5 bg-white transform transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}></span>
                </div>
                
                {/* Hover glow */}
                <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 transform translate-y-0' 
            : 'max-h-0 opacity-0 transform -translate-y-4 pointer-events-none'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 backdrop-blur-xl border-t-2 border-purple-400 rounded-b-2xl shadow-2xl">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:translate-x-2 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-yellow-400 to-pink-400 shadow-lg border-l-4 border-yellow-300'
                      : 'text-white hover:text-white hover:bg-white/20'
                  } group overflow-hidden`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="flex items-center">
                    {item.name}
                    <span className={`ml-auto w-3 h-3 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-yellow-300 to-pink-300 scale-100 shadow-lg' 
                        : 'bg-white/50 scale-0 group-hover:scale-100'
                    }`}></span>
                  </span>
                  
                  {/* Shimmer effect */}
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 