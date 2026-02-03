"use client";

import { useState } from "react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Global Connection",
    category: "Web Development",
    categorySlug: "web-dev",
    slug: "global-connection",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    size: "third",
  },
  {
    id: 2,
    title: "Estudie en el Exterior",
    category: "Web Development",
    categorySlug: "web-dev",
    slug: "estudie-en-el-exterior",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    size: "third",
  },
  {
    id: 3,
    title: "Nova Expense App",
    category: "Mobile App",
    categorySlug: "mobile-app",
    slug: "nova-expense-app",
    image: "/images/nova Expense.png",
    featured: true,
    size: "third",
    description: "Aplicación móvil para administrar gastos personales y empresariales",
  },
  {
    id: 4,
    title: "Bitrix24 CRM Automation",
    category: "Automation",
    categorySlug: "automation",
    slug: "bitrix24-crm-automation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    size: "two-thirds",
  },
  {
    id: 5,
    title: "Cotizador de Cursos",
    category: "Web Software",
    categorySlug: "web-software",
    slug: "cotizador-de-cursos",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    size: "third",
  },
  {
    id: 6,
    title: "Solved Puzzle",
    category: "Web Development",
    categorySlug: "web-dev",
    slug: "solved-puzzle",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    size: "third",
  },
  {
    id: 7,
    title: "Clínica Pie de Cuesta",
    category: "Web Development",
    categorySlug: "web-dev",
    slug: "clinica-piedecuesta",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    size: "third",
  },
  {
    id: 8,
    title: "Dimark Garage Doors",
    category: "Web Development",
    categorySlug: "web-dev",
    slug: "dimark-garage-doors",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    size: "third",
  },
];

const filters = [
  { label: "All", slug: "all", count: 8 },
  { label: "Web Development", slug: "web-dev", count: 4 },
  { label: "Mobile App", slug: "mobile-app", count: 1 },
  { label: "Web Software", slug: "web-software", count: 1 },
  { label: "Automation", slug: "automation", count: 1 },
];

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.categorySlug === activeFilter);

  const featuredProject = projects.find((p) => p.featured);

  return (
    <section id="work" className="py-24 md:py-32 bg-[#191a1c]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          {/* Left column - Title and description */}
          <div>
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              My<br />Work
            </h2>
            <p className="font-mono text-gray-400 max-w-md leading-relaxed text-sm md:text-base">
              Deployed scalable travel, event and telemedicine web and hybrid mobile apps using React SPA and PWA.
              <br /><br />
              Collaborated in 140+ projects with 50+ clients all around the world. I am also interested in data analytics and visualization.
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
                  View Project
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center gap-4 mb-12 text-sm font-mono">
          <span className="text-gray-500">Filter by</span>
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
              {filter.label}
              <sup className="text-[10px] ml-0.5 text-gray-500">
                {String(filter.count).padStart(2, "0")}
              </sup>
            </button>
          ))}
        </div>

        {/* Projects grid - Custom layout: 1/3 1/3 1/3, 2/3 1/3, 1/3 1/3 1/3 */}
        <div className="grid grid-cols-3 gap-8">
          {filteredProjects.slice(0, 9).map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className={`project-card group cursor-pointer overflow-hidden bg-[#0f0f0f] rounded-2xl block hover:transform hover:scale-[1.02] transition-all duration-300 ${
                project.size === 'two-thirds' ? 'col-span-2' : 'col-span-1'
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
                <p className="text-gray-500 text-sm font-mono">{project.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
