"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const categoryLabels = {
  "web-dev": { en: "Web Development", es: "Desarrollo web" },
  "mobile-app": { en: "Mobile App", es: "Aplicación móvil" },
  "web-software": { en: "Web Software", es: "Software web" },
  automation: { en: "Automation", es: "Automatización" },
} as const;

type CategorySlug = keyof typeof categoryLabels;

type Project = {
  id: number;
  title: string;
  categorySlug: CategorySlug;
  slug: string;
  image: string;
  size: "third" | "two-thirds";
  featured?: boolean;
  description?: { en: string; es: string };
};

const projects: Project[] = [
  {
    id: 1,
    title: "Global Connection",
    categorySlug: "web-dev",
    slug: "global-connection",
    image: "/projects/mkgc.png",
    size: "third",
  },
  {
    id: 2,
    title: "Estudie en el Exterior",
    categorySlug: "web-dev",
    slug: "estudie-en-el-exterior",
    image: "/projects/mkeeee.png",
    size: "third",
  },
  {
    id: 3,
    title: "Nova Expense App",
    categorySlug: "mobile-app",
    slug: "nova-expense-app",
    image: "/projects/mkns.png",
    featured: true,
    size: "third",
    description: {
      en: "Mobile app for managing personal and business expenses",
      es: "Aplicación móvil para administrar gastos personales y empresariales",
    },
  },
  {
    id: 4,
    title: "Bitrix24 CRM Automation",
    categorySlug: "automation",
    slug: "bitrix24-crm-automation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    size: "two-thirds",
  },
  {
    id: 5,
    title: "Cotizador de Cursos",
    categorySlug: "web-software",
    slug: "cotizador-de-cursos",
    image: "/projects/mkct.png",
    size: "third",
  },
  {
    id: 6,
    title: "Solved Puzzle",
    categorySlug: "web-dev",
    slug: "solved-puzzle",
    image: "/projects/mksp.png",
    size: "third",
  },
  {
    id: 7,
    title: "Clínica Piedecuesta",
    categorySlug: "web-dev",
    slug: "clinica-piedecuesta",
    image: "/projects/mkcp.png",
    size: "third",
  },
  {
    id: 8,
    title: "Dimark Garage Doors",
    categorySlug: "web-dev",
    slug: "dimark-garage-doors",
    image: "/projects/mkdg.png",
    size: "third",
  },
];

const filters: Array<{ slug: "all" | CategorySlug; count: number; label: { en: string; es: string } }> = [
  { slug: "all", count: 8, label: { en: "All", es: "Todos" } },
  { slug: "web-dev", count: 4, label: categoryLabels["web-dev"] },
  { slug: "mobile-app", count: 1, label: categoryLabels["mobile-app"] },
  { slug: "web-software", count: 1, label: categoryLabels["web-software"] },
  { slug: "automation", count: 1, label: categoryLabels.automation },
];

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | CategorySlug>("all");
  const { language } = useLanguage();

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.categorySlug === activeFilter);

  const featuredProject = projects.find((p) => p.featured);

  return (
    <section id="work" className="py-24 md:py-32 bg-[#191a1c]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 mb-32 lg:mb-16 items-center">
          {/* Left column - Title and description */}
          <div>
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              {language === "es" ? "Mis" : "My"}
              <br />
              {language === "es" ? "Proyectos" : "Work"}
            </h2>
            <p className="font-mono text-gray-400 max-w-md leading-relaxed text-sm md:text-base">
              {language === "es"
                ? "He desarrollado aplicaciones web y móviles escalables para viajes, eventos y educación usando React SPA y PWA."
                : "Deployed scalable travel, event and education web and hybrid mobile apps using React SPA and PWA."}
              <br /><br />
              {language === "es"
                ? "He colaborado en 80+ proyectos con 20+ clientes alrededor del mundo. También me interesan los datos y la visualización."
                : "Collaborated in 80+ projects with 20+ clients all around the world. I am also interested in data analytics and visualization."}
            </p>
          </div>

          {/* Right column - Featured project with 3D phone mockup */}
          {featuredProject && (
            <div className="relative flex items-center justify-center">
              {/* 3D Phone Mockup */}
              <div className="relative perspective-1000">
                <div className="animate-phone-rotate">
                  {/* Phone frame */}
                  <div className="relative w-[280px] h-[560px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[40px] shadow-2xl border-8 border-gray-900 overflow-hidden">
                    {/* Phone notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                    
                    {/* Screen content */}
                    <div className="absolute inset-2 bg-white rounded-[32px] overflow-hidden">
                      <img
                        src="/images/nova Expense.png"
                        alt={featuredProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Phone reflection/shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>

              {/* Project info - ahora abajo del celular */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-center w-full">
                <h3 className="font-mono text-white text-xl md:text-2xl mb-4">{featuredProject.title}</h3>
                <Link
                  href={`/projects/${featuredProject.slug}`}
                  className="inline-block btn-gradient px-6 py-3 rounded-lg font-mono text-sm text-white tracking-wider hover:scale-105 transition-transform"
                >
                  {language === "es" ? "Ver proyecto" : "View Project"}
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center gap-4 mb-12 text-sm font-mono">
          <span className="text-gray-500">{language === "es" ? "Filtrar por" : "Filter by"}</span>
          {filters.map((filter, index) => (
            <button
              type="button"
              key={filter.slug}
              onClick={() => setActiveFilter(filter.slug)}
              className={`relative transition-colors ${
                activeFilter === filter.slug
                  ? "text-white underline"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {index > 0 && <span className="text-gray-600 mr-2">/</span>}
              {filter.label[language]}
              <sup className="text-[10px] ml-0.5 text-gray-500">
                {String(filter.count).padStart(2, "0")}
              </sup>
            </button>
          ))}
        </div>

        {/* Projects grid - Custom layout: 1/3 1/3 1/3, 2/3 1/3, 1/3 1/3 1/3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, 9).map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className={`project-card group cursor-pointer overflow-hidden bg-[#0f0f0f] rounded-2xl block hover:transform hover:scale-[1.02] transition-all duration-300 ${
                project.size === 'two-thirds' ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
              }`}
            >
              <div className="h-64 overflow-hidden bg-gradient-to-br from-gray-900 to-black p-8 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 shadow-2xl"
                />
              </div>
              <div className="p-6 border-t border-gray-800/50">
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm font-mono">
                  {categoryLabels[project.categorySlug][language]}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
