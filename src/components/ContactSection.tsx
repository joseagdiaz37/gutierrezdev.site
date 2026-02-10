"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const socialLinks = [
  { name: "WhatsApp", href: "https://wa.me/573196253079" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/joseagdiaz/" },
  { name: "Github", href: "https://github.com/joseagdiaz37" },
  { name: "Email", href: "mailto:jose@gutierrezdev.site" },
];

export default function ContactSection() {
  const { language } = useLanguage();

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#191a1c]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-2xl mx-auto leading-tight">
          {language === "es"
            ? "Disponible para oportunidades freelance seleccionadas"
            : "Available for select freelance opportunities"}
        </h2>

        <p className="font-mono text-gray-400 text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed">
          {language === "es" ? "¿Tienes un proyecto y necesitas ayuda?" : "Have an exciting project you need help with?"}
          <br />
          {language === "es" ? "Envíame un correo o escríbeme por mensaje." : "Send me an email or contact me via instant message!"}
        </p>

        <a
          href="mailto:jose@gutierrezdev.site"
          className="inline-block font-mono text-xl md:text-2xl text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-4 mb-8"
        >
          jose@gutierrezdev.site
        </a>

        <div className="flex flex-col items-center gap-3 mt-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-gray-300 hover:text-white transition-colors text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
