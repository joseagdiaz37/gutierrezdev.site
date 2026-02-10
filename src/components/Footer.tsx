"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="relative bg-[#0a0a0a] py-8">
      {/* Scroll to top button - fixed position */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors shadow-lg"
        aria-label={language === "es" ? "Ir arriba" : "Scroll to top"}
      >
        <svg
          className="w-5 h-5 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>

      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-4 mb-4 text-sm font-mono">
          <a
            href="https://wa.me/573196253079"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            WhatsApp
          </a>
        </div>
        <p className="text-gray-500 text-sm text-center">
          {language === "es"
            ? `${new Date().getFullYear()}. Hecho con pasión por José Gutiérrez. Todos los derechos reservados.`
            : `${new Date().getFullYear()}. Made with passion by José Gutiérrez. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}
