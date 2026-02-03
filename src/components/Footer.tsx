"use client";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] py-8">
      {/* Scroll to top button - fixed position */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors shadow-lg"
        aria-label="Scroll to top"
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
        <p className="text-gray-500 text-sm text-center">
          {new Date().getFullYear()}. Made with passion by José Gutiérrez. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
