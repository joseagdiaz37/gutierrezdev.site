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

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#191a1c] via-[#191a1c] to-[#1a1b1d]" />

      {/* 3D Geometric Shape - Code Brackets */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <div className="animate-float relative">
          {/* Code brackets { } */}
          <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center gap-8">
            {/* Left bracket { */}
            <div className="relative w-16 md:w-20 h-48 md:h-64">
              {/* Top part */}
              <div
                className="absolute top-0 right-0 w-12 md:w-16 h-16 md:h-20 rounded-tr-3xl border-r-8 border-t-8 border-purple-500/60"
                style={{
                  transform: "perspective(800px) rotateY(-25deg) rotateX(5deg)",
                  boxShadow: "8px -8px 30px rgba(168, 85, 247, 0.3)",
                }}
              />
              {/* Middle curve */}
              <div
                className="absolute top-1/2 -translate-y-1/2 left-0 w-8 md:w-10 h-12 md:h-16 rounded-l-2xl border-l-8 border-purple-400/70"
                style={{
                  transform: "perspective(800px) rotateY(-25deg)",
                  boxShadow: "-6px 0 20px rgba(168, 85, 247, 0.25)",
                }}
              />
              {/* Bottom part */}
              <div
                className="absolute bottom-0 right-0 w-12 md:w-16 h-16 md:h-20 rounded-br-3xl border-r-8 border-b-8 border-purple-500/60"
                style={{
                  transform: "perspective(800px) rotateY(-25deg) rotateX(-5deg)",
                  boxShadow: "8px 8px 30px rgba(168, 85, 247, 0.3)",
                }}
              />
            </div>

            {/* Right bracket } */}
            <div className="relative w-16 md:w-20 h-48 md:h-64">
              {/* Top part */}
              <div
                className="absolute top-0 left-0 w-12 md:w-16 h-16 md:h-20 rounded-tl-3xl border-l-8 border-t-8 border-cyan-500/60"
                style={{
                  transform: "perspective(800px) rotateY(25deg) rotateX(5deg)",
                  boxShadow: "-8px -8px 30px rgba(34, 211, 238, 0.3)",
                }}
              />
              {/* Middle curve */}
              <div
                className="absolute top-1/2 -translate-y-1/2 right-0 w-8 md:w-10 h-12 md:h-16 rounded-r-2xl border-r-8 border-cyan-400/70"
                style={{
                  transform: "perspective(800px) rotateY(25deg)",
                  boxShadow: "6px 0 20px rgba(34, 211, 238, 0.25)",
                }}
              />
              {/* Bottom part */}
              <div
                className="absolute bottom-0 left-0 w-12 md:w-16 h-16 md:h-20 rounded-bl-3xl border-l-8 border-b-8 border-cyan-500/60"
                style={{
                  transform: "perspective(800px) rotateY(25deg) rotateX(-5deg)",
                  boxShadow: "-8px 8px 30px rgba(34, 211, 238, 0.3)",
                }}
              />
            </div>

            {/* Code symbol </> in the center */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl md:text-7xl font-bold text-orange-500/40"
              style={{
                textShadow: "0 0 30px rgba(249, 115, 22, 0.5)",
                fontFamily: "monospace",
              }}
            >
              &lt;/&gt;
            </div>
          </div>
        </div>
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
