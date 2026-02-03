"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const codeLines = [
    "import { Developer } from 'jose-gutierrez';",
    "const skills = ['React', 'PHP', 'WordPress'];",
    "const projects = await loadProjects();",
    "console.log('Initializing portfolio...');",
    "// Loading complete ✓",
  ];

  useEffect(() => {
    // Solo mostrar la animación si es la primera vez
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      setIsLoading(true);
      sessionStorage.setItem('hasVisited', 'true');
      
      // Simular progreso de carga
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setIsLoading(false), 800);
            return 100;
          }
          return prev + 1;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-[#0a0a0a] flex items-center justify-center transition-opacity duration-1000 ${
      progress >= 100 ? 'opacity-0' : 'opacity-100'
    }`}>
      <div className="max-w-2xl w-full px-6">
        {/* Terminal window */}
        <div className="bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden border border-gray-800">
          {/* Terminal header */}
          <div className="bg-[#323233] px-4 py-3 flex items-center gap-2 border-b border-gray-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400 text-sm font-mono ml-2">
              terminal — gutierrezdev.site
            </span>
          </div>

          {/* Terminal content */}
          <div className="p-6 font-mono text-sm">
            {codeLines.map((line, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  index < Math.floor((progress / 100) * codeLines.length)
                    ? "opacity-100"
                    : "opacity-0"
                } transition-opacity duration-300`}
              >
                <span className="text-cyan-400 mr-2">$</span>
                <span className="text-gray-300 typing-animation">{line}</span>
              </div>
            ))}

            {/* Progress bar */}
            <div className="mt-6">
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>Loading portfolio...</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Cursor parpadeante */}
            {progress < 100 && (
              <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-pulse"></span>
            )}
          </div>
        </div>

        {/* Logo or text below */}
        <div className="text-center mt-8">
          <h1 className="text-2xl font-bold text-white font-mono">
            José<span className="text-cyan-400">Gutiérrez</span>
          </h1>
          <p className="text-gray-500 text-sm mt-2 font-mono">
            Full-Stack Developer
          </p>
        </div>
      </div>
    </div>
  );
}
