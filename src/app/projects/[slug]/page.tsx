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
}> = {
  "global-connection": {
    title: "Global Connection",
    description: "Complete website development and maintenance for Global Connection. Implementation of full-stack solutions, CRM integrations, social media campaigns, and network configurations with Google Tag Manager, Search Console and Analytics.",
    category: "Web Development",
    technologies: ["WordPress", "PHP", "CRM", "Google Analytics", "Tag Manager"],
    mockupImage: "/projects/mkgc.png",
    websiteImage: "/projects/mkgc.png",
  },
  "estudie-en-el-exterior": {
    title: "Estudie en el Exterior",
    description: "Educational platform website for study abroad programs. Features include course listings, application management, student portal, and multilingual support.",
    category: "Web Development",
    technologies: ["WordPress", "PHP", "JavaScript", "MySQL"],
    mockupImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1400&h=900&fit=crop",
    websiteImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1400&h=900&fit=crop",
  },
  "nova-expense-app": {
    title: "Nova Expense App",
    description: "Mobile application for managing personal and business expenses. Track spending, categorize expenses, generate reports, and sync across devices.",
    category: "Mobile App",
    technologies: ["React Native", "Firebase", "JavaScript"],
    mockupImage: "/images/nova Expense.png",
    websiteImage: "/images/nova Expense.png",
  },
  "bitrix24-crm-automation": {
    title: "Bitrix24 CRM Automation",
    description: "Custom automation workflows for Bitrix24 CRM. Automated lead management, email campaigns, task assignments, and reporting integrations.",
    category: "Automation",
    technologies: ["Bitrix24 API", "PHP", "JavaScript", "Webhooks"],
    mockupImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=900&fit=crop",
    websiteImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=900&fit=crop",
  },
  "cotizador-de-cursos": {
    title: "Cotizador de Cursos",
    description: "Interactive course quotation system. Calculate course prices based on duration, location, and additional services with real-time updates.",
    category: "Web Software",
    technologies: ["JavaScript", "PHP", "MySQL", "React"],
    mockupImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&h=900&fit=crop",
    websiteImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&h=900&fit=crop",
  },
  "solved-puzzle": {
    title: "Solved Puzzle",
    description: "Marketing agency website with portfolio showcase, service pages, client testimonials, and contact forms. Optimized for SEO and performance.",
    category: "Web Development",
    technologies: ["WordPress", "Shopify", "PHP", "JavaScript"],
    mockupImage: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1400&h=900&fit=crop",
    websiteImage: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1400&h=900&fit=crop",
  },
  "clinica-piedecuesta": {
    title: "Clínica Pie de Cuesta",
    description: "Medical clinic website with appointment booking, service information, doctor profiles, and patient portal. HIPAA compliant and secure.",
    category: "Web Development",
    technologies: ["WordPress", "PHP", "MySQL", "Booking System"],
    mockupImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&h=900&fit=crop",
    websiteImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&h=900&fit=crop",
  },
  "dimark-garage-doors": {
    title: "Dimark Garage Doors",
    description: "Business website for garage door installation and repair services. Features include service catalog, quote requests, before/after gallery, and customer reviews.",
    category: "Web Development",
    technologies: ["WordPress", "PHP", "JavaScript", "Contact Forms"],
    mockupImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&h=900&fit=crop",
    websiteImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&h=900&fit=crop",
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
                href="#"
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
