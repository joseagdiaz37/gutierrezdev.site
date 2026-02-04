"use client";

const technologies = [
  { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "JSON", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Google Analytics", logo: "https://www.svgrepo.com/show/475656/google-color.svg" },
];

// Partículas de código para el fondo
const codeParticles = [
  { symbol: "{", x: "10%", y: "20%", delay: "0s", duration: "20s", color: "text-purple-500/30" },
  { symbol: "}", x: "85%", y: "15%", delay: "2s", duration: "22s", color: "text-cyan-500/30" },
  { symbol: "</>", x: "15%", y: "70%", delay: "1s", duration: "25s", color: "text-orange-500/30" },
  { symbol: "()", x: "75%", y: "65%", delay: "3s", duration: "18s", color: "text-pink-500/30" },
  { symbol: "[]", x: "50%", y: "80%", delay: "1.5s", duration: "23s", color: "text-blue-500/30" },
  { symbol: "//", x: "30%", y: "40%", delay: "4s", duration: "19s", color: "text-green-500/30" },
  { symbol: ";", x: "60%", y: "30%", delay: "2.5s", duration: "21s", color: "text-yellow-500/30" },
  { symbol: "=>", x: "20%", y: "55%", delay: "0.5s", duration: "24s", color: "text-indigo-500/30" },
  { symbol: "!=", x: "70%", y: "45%", delay: "3.5s", duration: "20s", color: "text-red-500/30" },
  { symbol: "&&", x: "40%", y: "25%", delay: "1s", duration: "22s", color: "text-teal-500/30" },
  { symbol: "||", x: "55%", y: "60%", delay: "2s", duration: "19s", color: "text-purple-400/30" },
  { symbol: "===", x: "25%", y: "85%", delay: "4s", duration: "23s", color: "text-cyan-400/30" },
];

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#191a1c] via-[#191a1c] to-[#1a1b1d]" />

      {/* Partículas de código flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {codeParticles.map((particle, index) => (
          <div
            key={index}
            className={`absolute font-mono text-4xl md:text-6xl font-bold ${particle.color} animate-float-code`}
            style={{
              left: particle.x,
              top: particle.y,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              textShadow: "0 0 20px currentColor",
            }}
          >
            {particle.symbol}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 mt-32 md:mt-40">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-4">
          JOSÉ GUTIÉRREZ
        </h1>
        <p className="font-mono text-sm md:text-base text-gray-400 tracking-[0.2em] uppercase">
          Full-Stack Developer, React & Node.js Specialist.
        </p>
      </div>

      {/* Technologies Section */}
      <div className="relative z-10 mt-20 md:mt-32 w-full">
        <p className="text-center text-gray-500 text-xs tracking-[0.3em] uppercase mb-8 font-mono">
          Expert In
        </p>

        {/* Technologies carousel */}
        <div className="overflow-hidden w-full">
          <div className="flex animate-marquee gap-12 items-center">
            {[...technologies, ...technologies, ...technologies].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-10 md:h-12 w-auto"
                  title={tech.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#expertise"
          className="block animate-bounce-slow text-gray-500 hover:text-white transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
