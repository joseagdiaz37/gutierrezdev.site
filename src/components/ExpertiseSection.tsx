"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const expertiseDataEn = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Full Stack",
    subtitle: "Development",
    description: "Experienced in both frontend and backend: React, Next.js, Node.js, Python, TypeScript, and modern web technologies.",
    titleColor: "text-white",
    hoverIconColor: "group-hover:text-purple-400",
    underlineColor: "bg-gradient-to-r from-pink-500 to-purple-500",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Automation",
    subtitle: "Specialist",
    description: "Expert in building automation tools, APIs, scripts, and workflow optimization using Python, Node.js, and cloud services.",
    titleColor: "text-white",
    hoverIconColor: "group-hover:text-cyan-400",
    underlineColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "SEO",
    subtitle: "Specialist",
    description: "Skilled in technical SEO, performance optimization, meta tags, structured data, and improving search engine rankings.",
    titleColor: "text-white",
    hoverIconColor: "group-hover:text-orange-400",
    underlineColor: "bg-gradient-to-r from-orange-500 to-red-500",
  },
];

const expertiseDataEs = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Full Stack",
    subtitle: "Desarrollo",
    description: "Experiencia en frontend y backend: React, Next.js, Node.js, Python, TypeScript y tecnologías web modernas.",
    titleColor: "text-white",
    hoverIconColor: "group-hover:text-purple-400",
    underlineColor: "bg-gradient-to-r from-pink-500 to-purple-500",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Automatización",
    subtitle: "Especialista",
    description: "Especialista en creación de automatizaciones, APIs, scripts y optimización de flujos con Python, Node.js y servicios cloud.",
    titleColor: "text-white",
    hoverIconColor: "group-hover:text-cyan-400",
    underlineColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "SEO",
    subtitle: "Especialista",
    description: "Conocimiento en SEO técnico, optimización de performance, metadatos, datos estructurados y mejora del posicionamiento.",
    titleColor: "text-white",
    hoverIconColor: "group-hover:text-orange-400",
    underlineColor: "bg-gradient-to-r from-orange-500 to-red-500",
  },
];

export default function ExpertiseSection() {
  const { language } = useLanguage();
  const expertiseData = language === "es" ? expertiseDataEs : expertiseDataEn;
  const htmlLang = language === "es" ? "es" : "en";

  return (
    <section id="expertise" className="py-24 md:py-32 bg-[#191a1c]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          {language === "es" ? "Mi especialidad" : "My Expertise"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-700 max-w-6xl mx-auto">
          {expertiseData.map((item, index) => (
            <div
              key={item.title}
              className={`bg-[#0a0a0b] p-8 md:p-10 relative group hover:bg-[#111112] transition-colors ${
                index !== expertiseData.length - 1 ? 'md:border-r border-gray-700' : ''
              }`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`text-gray-400 ${item.hoverIconColor} transition-colors`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className={`${item.titleColor} font-bold text-lg relative inline-block`}>
                    {item.title}
                    <span className={`absolute -bottom-1 left-0 w-full h-1 ${item.underlineColor} opacity-70 blur-sm`}></span>
                  </h3>
                  <p className="text-white font-medium">{item.subtitle}</p>
                </div>
              </div>

              <div className="font-mono text-gray-600 text-xs mb-2">&lt;h3&gt;</div>
              <p className="text-gray-400 text-sm leading-relaxed ml-4 my-3">
                {item.description}
              </p>
              <div className="font-mono text-gray-600 text-xs">&lt;/h3&gt;</div>
            </div>
          ))}

          {/* Quote card - removed */}
        </div>

        {/* Decorative code snippet */}
        <div className="hidden lg:block max-w-5xl mx-auto mt-8">
          <div className="font-mono text-[10px] text-gray-700 leading-relaxed overflow-hidden opacity-40">
            <div>&lt;!DOCTYPE html&gt;</div>
            <div>{`<html lang="${htmlLang}">`}</div>
            <div className="ml-4">&lt;head&gt;</div>
            <div className="ml-8">&lt;meta charset=&quot;UTF-8&quot;&gt;</div>
            <div className="ml-8">&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</div>
            <div className="ml-8">
              <span className="text-cyan-600">&lt;title&gt;</span>
              {language === "es" ? "¿Qué hago?" : "What do I do"}
              <span className="text-cyan-600">&lt;/title&gt;</span>
            </div>
            <div className="ml-4">&lt;/head&gt;</div>
            <div className="ml-4">&lt;body&gt;</div>
            <div className="ml-8"><span className="text-yellow-600">{language === "es" ? "/* Cosas que hago para lograr un fondo perfecto */" : "/* Things I do to get a perfect background image */"}</span></div>
            <div className="ml-8"><span className="text-green-600">{language === "es" ? "// Tal vez debería dejar de ajustar VSCode" : "// Maybe I should stop tinkering with VSCode settings"}</span></div>
            <div className="ml-8"><span className="text-green-600">{language === "es" ? "// solo para tomar una captura de este HTML dummy." : "// just to take a screenshot of this dummy html code."}</span></div>
            <div className="ml-8"><span className="text-pink-600">{language === "es" ? "// Oops, casi olvido decir 'Hola Mundo'!" : "// Oops, Almost forgot to say 'Hello World'!"}</span></div>
            <div className="ml-4">&lt;/body&gt;</div>
            <div>&lt;/html&gt;</div>
          </div>
        </div>
      </div>
    </section>
  );
}
