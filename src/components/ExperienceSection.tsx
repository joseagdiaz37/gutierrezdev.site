"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const experiences = [
  {
    id: "1",
    title: "Web Administrator and Systems Support",
    company: "Asfalart",
    period: "2015 - 2017",
    location: "Bucaramanga - Colombia",
    website: "www.asfalart.co",
    description:
      "I was in charge of the administration of the company's website and areas of the systems department such as software management and CRM.",
    skills: ["Web Admin", "CRM", "Systems Support"],
  },
  {
    id: "2",
    title: "Web Administrator, Designer and Audiovisual Creative",
    company: "Valdivision",
    period: "2017 - 2018",
    location: "Bucaramanga - Colombia",
    website: "valdivision.com",
    description:
      "I was in charge of managing and administering the company's website, designing graphic elements, editing video and photography. Also, I covered private corporate events and photography and video.",
    skills: ["Web Design", "Video Editing", "Photography", "Corporate Events"],
  },
  {
    id: "3",
    title: "Webmaster - Web Developer",
    company: "Solved Puzzle Agency",
    period: "2018 - 2022",
    location: "Miami - USA (Remote)",
    website: "solvedpuzzle.com",
    description:
      "At Solved Puzzle I was in charge of the development of more than 20 different websites, combining WordPress and Shopify sites. I was in charge of the development area, worked with automations, creation of scripts, management and lead management.",
    skills: ["WordPress", "Shopify", "Automations", "Scripts", "Lead Management"],
  },
  {
    id: "4",
    title: "Webmaster - Web Developer - UX/UI Designer",
    company: "Global Connection",
    period: "2022 - Present",
    location: "Bogotá - Colombia (Hybrid)",
    website: "globalconnection.com.co",
    description:
      "I am in charge of the development and implementation of full-stack solutions, working with automations, CRM integrations, social media campaigns, and network configurations with Google Tag Manager, Search Console and Analytics.",
    skills: ["Full-Stack", "CRM", "Automations", "Social Media", "Google Tools", "SEO"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-[#191a1c]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-white">Professional</span>
          <br />
          <span className="text-cyan-400">Experience</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4" defaultValue="4">
            {experiences.map((exp) => (
              <AccordionItem
                key={exp.id}
                value={exp.id}
                className="border-0 bg-[#1e3a4e] rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-[#265266] transition-colors [&[data-state=open]]:bg-[#265266]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-left pr-4">
                    <div>
                      <h3 className="text-white font-medium text-sm md:text-base">
                        {exp.title}{" "}
                        <span className="text-cyan-300">@ {exp.company}</span>
                      </h3>
                    </div>
                    <span className="text-gray-400 text-sm mt-1 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="pt-4 border-t border-cyan-800/30">
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <span>{exp.location}</span>
                      <a
                        href={`https://${exp.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        {exp.website}
                      </a>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-cyan-900/50 text-cyan-300 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
