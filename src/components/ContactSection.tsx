"use client";

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/in/josegutierrez" },
  { name: "Github", href: "https://github.com/gutierrezdev" },
  { name: "Email", href: "mailto:jose@gutierrezdev.com" },
  { name: "Portfolio", href: "#" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#191a1c]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-2xl mx-auto leading-tight">
          Available for select freelance opportunities
        </h2>

        <p className="font-mono text-gray-400 text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed">
          Have an exciting project you need help with?
          <br />
          Send me an email or contact me via instant message!
        </p>

        <a
          href="mailto:jose@gutierrezdev.com"
          className="inline-block font-mono text-xl md:text-2xl text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-4 mb-8"
        >
          jose@gutierrezdev.com
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
