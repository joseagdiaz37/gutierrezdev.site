"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

// Datos de proyectos - puedes expandir esto con más detalles
const projectsData: Record<string, {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  mockupImage: string;
  websiteImage: string;
  projectUrl?: string;
  caseStudy?: {
    subtitle: string;
    context: string;
    objective: string;
    stack: string[];
    results: string;
    impact: string;
    flow: string;
    highlights: string[];
    tools?: { name: string; logo: string }[];
  };
}> = {
  "global-connection": {
    title: "Global Connection",
    description: "Complete website development and maintenance for Global Connection. Implementation of full-stack solutions, CRM integrations, social media campaigns, and network configurations with Google Tag Manager, Search Console and Analytics.",
    category: "Web Development",
    technologies: ["WordPress", "PHP", "CRM", "Google Analytics", "Tag Manager"],
    mockupImage: "/projects/mkgc.png",
    websiteImage: "/projects/gcss-1.png",
    projectUrl: "https://www.globalconnection.com.co/",
  },
  "estudie-en-el-exterior": {
    title: "Estudie en el Exterior",
    description: "Educational platform website for study abroad programs. Features include course listings, application management, student portal, and multilingual support.",
    category: "Web Development",
    technologies: ["WordPress", "PHP", "JavaScript", "MySQL"],
    mockupImage: "/projects/mkeeee.png",
    websiteImage: "/projects/sseee.png",
    projectUrl: "https://estudieenelexterior.com.co/",
  },
  "nova-expense-app": {
    title: "Nova Expense App",
    description: "Mobile application for managing personal and business expenses. Track spending, categorize expenses, generate reports, and sync across devices.",
    category: "Mobile App",
    technologies: ["React Native", "Firebase", "JavaScript"],
    mockupImage: "/projects/mkns.png",
    websiteImage: "/projects/ssns.png",
    projectUrl: "https://github.com/joseagdiaz37/nova-expense.git",
  },
  "bitrix24-crm-automation": {
    title: "Bitrix24 CRM Automation",
    description: "Automatizaciones y desarrollos a medida sobre Bitrix24 CRM con fuerte uso de APIs, webhooks y software de integración para unificar captación de leads, clasificación automática y ejecución de procesos en herramientas internas y externas.",
    category: "Automation",
    technologies: ["Bitrix24 API", "REST APIs", "PHP", "JavaScript", "Webhooks", "Make"],
    mockupImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=900&fit=crop",
    websiteImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=900&fit=crop",
    caseStudy: {
      subtitle: "Automatización de CRM y multicanal para captura y gestión de leads",
      context: "La operación recibía leads desde agendas de citas, formularios web, WhatsApp y campañas de Meta/TikTok, con procesos manuales que generaban retrasos y errores.",
      objective: "Centralizar entradas, calificar leads y automatizar procesos vía APIs y webhooks para acelerar la atención y reducir errores.",
      stack: ["Bitrix24", "Bitrix24 REST API", "Webhooks", "Make (Integromat)", "WhatsApp", "Meta Ads", "TikTok Ads", "APIs internas", "Servidor propio"],
      results: "Flujos automáticos para ingreso, validación y asignación de leads, con ejecución de webhooks, llamadas a APIs internas y sincronización de calendarios.",
      impact: "Menos trabajo manual, respuestas más rápidas y consistencia en el embudo gracias al uso de software de integración y servicios API.",
      flow: "Agenda/Formulario/WhatsApp/Ads → Bitrix24 (API) → Reglas/Validación → Webhooks → APIs internas/Make → Actualización de etapa",
      highlights: [
        "Ingreso automático de leads desde múltiples canales",
        "Validación vía API en servidor propio para evitar duplicados y mover de etapa",
        "Sincronización de calendarios con sistema de citas externo",
        "Cotizador alimentado por listas de Bitrix y administrado en app embebida",
        "Orquestación de procesos con software de automatización (Make) y webhooks",
      ],
      tools: [
        { name: "Bitrix24", logo: "https://www.svgrepo.com/show/303348/bitrix24-logo.svg" },
        { name: "Make", logo: "https://www.svgrepo.com/show/373502/make.svg" },
        { name: "WhatsApp", logo: "https://www.svgrepo.com/show/475692/whatsapp-color.svg" },
        { name: "Meta Ads", logo: "https://www.svgrepo.com/show/475639/meta.svg" },
        { name: "TikTok", logo: "https://www.svgrepo.com/show/475664/tiktok-color.svg" },
        { name: "Webhook", logo: "https://www.svgrepo.com/show/521925/link.svg" },
        { name: "API", logo: "https://www.svgrepo.com/show/521680/api.svg" },
        { name: "Postman", logo: "https://www.svgrepo.com/show/354202/postman-icon.svg" },
        { name: "PHP", logo: "https://www.svgrepo.com/show/452088/php.svg" },
        { name: "JavaScript", logo: "https://www.svgrepo.com/show/452045/js.svg" },
        { name: "n8n", logo: "https://www.svgrepo.com/show/353446/n8n-icon.svg" },
        { name: "Zapier", logo: "https://www.svgrepo.com/show/353777/zapier.svg" },
        { name: "Google Sheets", logo: "https://www.svgrepo.com/show/452202/google-sheets.svg" },
        { name: "Calendly", logo: "https://www.svgrepo.com/show/353449/calendly.svg" },
      ],
    },
  },
  "cotizador-de-cursos": {
    title: "Cotizador de Cursos",
    description: "Interactive course quotation system. Calculate course prices based on duration, location, and additional services with real-time updates.",
    category: "Web Software",
    technologies: ["JavaScript", "PHP", "MySQL", "React"],
    mockupImage: "/projects/mkct.png",
    websiteImage: "/projects/ssct.png",
    projectUrl: "https://cotizador.globalconnection.ai/",
  },
  "solved-puzzle": {
    title: "Solved Puzzle",
    description: "Marketing agency website with portfolio showcase, service pages, client testimonials, and contact forms. Optimized for SEO and performance.",
    category: "Web Development",
    technologies: ["WordPress", "Shopify", "PHP", "JavaScript"],
    mockupImage: "/projects/mksp.png",
    websiteImage: "/projects/sssp.png",
    projectUrl: "https://solvedpuzzle.com/",
  },
  "clinica-piedecuesta": {
    title: "Clínica Piedecuesta",
    description: "Medical clinic website with appointment booking, service information, doctor profiles, and patient portal. HIPAA compliant and secure.",
    category: "Web Development",
    technologies: ["WordPress", "PHP", "MySQL", "Booking System"],
    mockupImage: "/projects/mkcp.png",
    websiteImage: "/projects/sscp.png",
    projectUrl: "https://clinicapiedecuestasa.com/",
  },
  "dimark-garage-doors": {
    title: "Dimark Garage Doors",
    description: "Business website for garage door installation and repair services. Features include service catalog, quote requests, before/after gallery, and customer reviews.",
    category: "Web Development",
    technologies: ["WordPress", "PHP", "JavaScript", "Contact Forms"],
    mockupImage: "/projects/mkdg.png",
    websiteImage: "/projects/ssdg.png",
    projectUrl: "https://dimarkgaragedoors.com/",
  },
};

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const project = projectsData[slug];

  // Get all project slugs for navigation
  const allSlugs = Object.keys(projectsData);
  const currentIndex = allSlugs.indexOf(slug);
  
  // Calculate next and previous project slugs
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : allSlugs[0];
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : allSlugs[allSlugs.length - 1];
  
  const nextProject = projectsData[nextSlug];
  const prevProject = projectsData[prevSlug];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#191a1c] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link href="/#work" className="text-purple-400 hover:text-purple-300">
            ← Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#191a1c]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#191a1c]/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-2xl font-bold text-cyan-400 font-mono"
          >
            JoseGutierrez._
          </Link>
          
     
          <div className="hidden md:flex items-center gap-8 text-sm font-mono">
            <Link href="/#hero-section" className="text-gray-400 hover:text-white transition-colors">
              <span className="text-gray-600">01</span> {/* home */}
            </Link>
            <Link href="/#expertise" className="text-gray-400 hover:text-white transition-colors">
              <span className="text-gray-600">02</span> {/* expertise */}
            </Link>
            <Link href="/#work" className="text-gray-400 hover:text-white transition-colors">
              <span className="text-gray-600">03</span> {/* work */}
            </Link>
            <Link href="/#experience" className="text-gray-400 hover:text-white transition-colors">
              <span className="text-gray-600">04</span> {/* experience */}
            </Link>
            <Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">
              <span className="text-gray-600">05</span> {/* contact */}
            </Link>
          </div>
        </div>
      </nav>

      {/* Back button - left side */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40">
        <Link 
          href="/#work" 
          className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>
      </div>

      {/* Project Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-gray-500 font-mono">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <span>›</span>
            <Link href="/#work" className="hover:text-gray-300">Portfolio</Link>
            <span>›</span>
            <span className="text-gray-400">{project.title}</span>
          </div>

          <div className="mb-6">
            <span className="text-gray-500 font-mono text-sm">{project.category}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-12 leading-tight max-w-3xl">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Description and Button */}
      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-400 text-base leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="flex justify-end">
              <a
                href={project.projectUrl ?? "#"}
                target={project.projectUrl ? "_blank" : undefined}
                rel={project.projectUrl ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-mono text-sm transition-colors"
              >
                Open Project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {project.caseStudy && (
        <section className="pb-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {project.caseStudy.subtitle}
              </h2>
              <div className="text-sm font-mono text-gray-500">Caso de estudio</div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-cyan-400 font-mono text-sm mb-2">Contexto</h3>
                  <p className="text-gray-400 leading-relaxed">{project.caseStudy.context}</p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-mono text-sm mb-2">Objetivo</h3>
                  <p className="text-gray-400 leading-relaxed">{project.caseStudy.objective}</p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-mono text-sm mb-2">Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.caseStudy.stack.map((item) => (
                      <span key={item} className="text-xs font-mono text-gray-300 bg-gray-800/60 px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-mono text-sm mb-2">Resultado</h3>
                  <p className="text-gray-400 leading-relaxed">{project.caseStudy.results}</p>
                </div>
                <div>
                  <h3 className="text-cyan-400 font-mono text-sm mb-2">Impacto</h3>
                  <p className="text-gray-400 leading-relaxed">{project.caseStudy.impact}</p>
                </div>
              </div>

              <div className="space-y-6">
                {project.caseStudy.tools && (
                  <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-6">
                    <h3 className="text-cyan-400 font-mono text-sm mb-3">Herramientas</h3>
                    <div className="flex flex-wrap gap-4 items-center">
                      {project.caseStudy.tools.map((tool) => (
                        <div key={tool.name} className="flex items-center gap-2">
                          <img
                            src={tool.logo}
                            alt={tool.name}
                            className="w-6 h-6 object-contain"
                          />
                          <span className="text-xs font-mono text-gray-300">{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-6">
                  <h3 className="text-cyan-400 font-mono text-sm mb-3">Diagrama de flujo</h3>
                  <p className="text-gray-300 font-mono text-sm leading-relaxed">
                    {project.caseStudy.flow}
                  </p>
                </div>
                <div className="bg-[#0f0f0f] border border-gray-800 rounded-xl p-6">
                  <h3 className="text-cyan-400 font-mono text-sm mb-3">Highlights</h3>
                  <ul className="space-y-3 text-gray-400">
                    {project.caseStudy.highlights.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="text-cyan-400">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Mockup Image */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="relative w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-2xl">
            <img
              src={project.mockupImage}
              alt={`${project.title} Mockup`}
              className="w-full h-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://via.placeholder.com/1400x900/1a1a1a/666666?text=Project+Mockup";
              }}
            />
          </div>
        </div>
      </section>

      {/* Website Screenshot */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="relative w-full bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-800">
            <img
              src={project.websiteImage}
              alt={`${project.title} Screenshot`}
              className="w-full h-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://via.placeholder.com/1400x900/1a1a1a/666666?text=Website+Screenshot";
              }}
            />
          </div>
        </div>
      </section>

      {/* Next Project Card - bottom right */}
      <div className="fixed bottom-8 right-8 z-40">
        <div className="bg-white text-black p-6 rounded-lg shadow-2xl min-w-[280px]">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-sm font-semibold">Next Project</span>
            <div className="flex gap-2">
              <button 
                onClick={() => router.push(`/projects/${prevSlug}`)}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
                aria-label="Previous project"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => router.push(`/projects/${nextSlug}`)}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
                aria-label="Next project"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <h3 className="font-bold text-lg">{nextProject.title}</h3>
        </div>
      </div>

      {/* Dark button on left side */}
      <div className="fixed left-6 bottom-8 z-40">
        <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-mono text-sm hover:bg-gray-800 transition-colors">
          Dark
        </button>
      </div>
    </div>
  );
}
