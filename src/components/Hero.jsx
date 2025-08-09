

import { useState, useEffect, useRef } from 'react';
import profileImg from '../assets/profile.jpg';

const roles = [
  "Frontend Developer",
  "React Developer",
  "UI/UX Designer",
  "Problem Solver"
];

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    color: 'hover:text-gray-900 dark:hover:text-white',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: 'hover:text-blue-700 dark:hover:text-blue-400',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
    color: 'hover:text-blue-500 dark:hover:text-blue-300',
  },
];

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const confettiRef = useRef(null);

  useEffect(() => {
    let timeout;
    if (!deleting && charIndex < roles[roleIndex].length) {
      timeout = setTimeout(() => {
        setDisplayedText(roles[roleIndex].slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(roles[roleIndex].slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (!deleting && charIndex === roles[roleIndex].length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  const handleContactClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 1200);
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Confetti effect (simple circles)
  useEffect(() => {
    if (!showConfetti) return;
    const canvas = confettiRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const colors = ['#60a5fa', '#a78bfa', '#f472b6', '#facc15', '#34d399'];
    const confetti = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height / 2,
      r: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 2 + 1,
    }));
    let frame = 0;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      confetti.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, 2 * Math.PI);
        ctx.fillStyle = c.color;
        ctx.fill();
        c.y += c.speed;
        if (c.y > canvas.height) c.y = 0;
      });
      frame++;
      if (frame < 30) requestAnimationFrame(draw);
    }
    draw();
  }, [showConfetti]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-12 px-4 py-8 relative">
        {/* Confetti Canvas */}
        {showConfetti && (
          <canvas ref={confettiRef} width={500} height={300} className="absolute left-1/2 top-0 -translate-x-1/2 z-20 pointer-events-none" />
        )}
        {/* Profile Photo */}
        <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto">
          <img
            src={profileImg}
            alt="Shubham profile"
            className="w-44 h-44 md:w-60 md:h-60 rounded-full object-cover border-4 border-blue-500 shadow-lg bg-white dark:bg-gray-800 hover:scale-105 transition-transform duration-300"
            style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)' }}
          />
        </div>
        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
            <span className="inline-block animate-waving-hand text-2xl md:text-3xl">👋</span>
            Hey there! I'm <span className="text-blue-600 dark:text-blue-400">Shubham</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 h-8 mb-2">
            <span
              className="text-blue-600 dark:text-blue-400 font-semibold transition-transform duration-300 hover:scale-110 cursor-pointer"
              title="Click to copy role"
              onClick={() => {
                navigator.clipboard.writeText(displayedText);
              }}
            >
              {displayedText}
            </span>
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-2 max-w-xl">
            I love building simple, beautiful, and interactive web experiences.
          </p>
          {/* Social Icons */}
          <div className="flex gap-5 mb-4">
            {socials.map(s => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-500 dark:text-gray-400 transition-colors duration-200 transform hover:scale-125 ${s.color}`}
                aria-label={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <a
            href="/resume.pdf"
            download
            className="inline-block mb-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md text-base"
          >
            Download Resume
          </a>
          <button
            onClick={handleContactClick}
            className="px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md relative overflow-hidden group text-lg"
          >
            <span className="relative z-10">Let's Connect</span>
            <span className="absolute left-1/2 top-1/2 w-0 h-0 bg-white opacity-20 rounded-full group-active:w-32 group-active:h-32 group-active:transition-all group-active:duration-300 -translate-x-1/2 -translate-y-1/2"></span>
          </button>
        </div>
      </div>

      {/* Custom CSS for waving hand animation */}
      <style>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-waving-hand {
          display: inline-block;
          animation: wave 1.8s infinite;
          transform-origin: 70% 70%;
        }
      `}</style>
    </section>
  );
};

export default Hero;