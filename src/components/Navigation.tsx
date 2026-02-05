"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const navItems = [
    { id: "01", label: language === "es" ? "inicio" : "home", href: "#hero-section" },
    { id: "02", label: language === "es" ? "especialidad" : "expertise", href: "#expertise" },
    { id: "03", label: language === "es" ? "proyectos" : "work", href: "#work" },
    { id: "04", label: language === "es" ? "experiencia" : "experience", href: "#experience" },
    { id: "05", label: language === "es" ? "contacto" : "contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#191a1c]/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero-section" className="flex items-center gap-1">
          <span className="font-mono text-cyan-400 text-lg font-semibold">
            JoséGutiérrez.<span className="animate-pulse">_</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="font-mono text-sm text-gray-300 hover:text-white transition-colors relative group"
              >
                <span className="text-[10px] text-gray-500 absolute -top-3 left-0">
                  {item.id}
                </span>
                <span className="text-gray-500">{"//"}</span> {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Language Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            onClick={toggleLanguage}
            className="font-mono text-xs text-gray-300 border border-gray-700 px-3 py-1 rounded-md hover:text-white hover:border-gray-500 transition-colors"
            aria-label="Toggle language"
          >
            <span className={language === "en" ? "text-white" : "text-gray-500"}>EN</span>
            <span className="mx-1 text-gray-500">/</span>
            <span className={language === "es" ? "text-white" : "text-gray-500"}>ES</span>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="font-mono text-[10px] text-gray-300 border border-gray-700 px-2 py-1 rounded-md hover:text-white hover:border-gray-500 transition-colors"
            aria-label="Toggle language"
          >
            <span className={language === "en" ? "text-white" : "text-gray-500"}>EN</span>
            <span className="mx-1 text-gray-500">/</span>
            <span className={language === "es" ? "text-white" : "text-gray-500"}>ES</span>
          </button>
          <button
            type="button"
            className="text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#191a1c]/95 backdrop-blur-sm border-t border-gray-800">
          <ul className="container mx-auto px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="font-mono text-sm text-gray-300 hover:text-white transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-gray-500">{"//"}</span> {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
