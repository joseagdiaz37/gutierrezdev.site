"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  {
    id: 1,
    quote: {
      en: "Jose provided valuable support during our collaboration in his role as webmaster. He made significant contributions in automation, web design, and process optimization, consistently delivering high-quality and well-structured work. His professionalism, technical expertise, and commitment were evident throughout our work together, and I confidently recommend him for roles requiring strong technical and process-driven skills.",
      es: "José transformó nuestro proceso digital con una visión estratégica y técnica impecable. Diseñó soluciones que integraron campañas, CRM y automatizaciones sin fricción, mejorando los tiempos de respuesta del equipo y la calidad del seguimiento a cada lead. Su capacidad para traducir objetivos de marketing en sistemas funcionales y medibles fue clave para escalar nuestros resultados. Siempre fue proactivo, ordenado y comprometido con el impacto real en el negocio.",
    },
    author: "Leidy Rodríguez",
    role: {
      en: "Marketing Director",
      es: "Directora de marketing",
    },
    image: "/projects/leidyr.jpg",
    imageClass: "object-cover object-top scale-110",
    bgClass: "bg-gradient-turquoise",
  },
  {
    id: 2,
    quote: {
      en: "José is a highly resourceful person: he can tackle problems of any level of difficulty and find clear and effective solutions. He excels at organization when diagnosing, executing, and monitoring each process, which allows him to optimize time and results. Furthermore, he has a great capacity for time management and creating strategies in short timeframes, achieving truly remarkable results. His ability to adapt to new trends ensures that projects and companies remain up-to-date and at the forefront.",
      es: "José es una persona muy resolutiva: puede enfrentarse a problemas de cualquier nivel de dificultad y encontrar soluciones claras y efectivas. Se destaca por su organización al momento de diagnosticar, ejecutar y hacer seguimiento a cada proceso, lo que permite optimizar tiempos y resultados. Además, tiene una gran capacidad para gestionar su tiempo y crear estrategias en plazos cortos, logrando resultados realmente notables. Su facilidad para adaptarse a nuevas tendencias hace que los proyectos y las empresas se mantengan actualizados y a la vanguardia.",
    },
    author: "Daniel Figueredo",
    role: {
      en: "Community manager & WordPress/SEO developer",
      es: "Community manager y desarrollador de WordPress y SEO",
    },
    image: "/projects/danief.jpeg",
    imageClass: "object-cover object-center scale-125",
    bgClass: "bg-gradient-blue",
  },
  {
    id: 3,
    quote: {
      en: "Working with José was excellent. He quickly understood the visual goals and collaborated closely with the team to turn design into a functional product.",
      es: "Trabajar con José fue excelente. Entendió rápido los objetivos visuales y colaboró muy bien con el equipo para aterrizar el diseño en producto funcional.",
    },
    author: "Camila Hurtado",
    role: {
      en: "Designer & community manager",
      es: "Diseñadora y community manager",
    },
    image: "/projects/camilah.jpg",
    imageClass: "object-cover object-top scale-110",
    bgClass: "bg-gradient-purple",
  },
];

export default function TestimonialsSection() {
  const { language } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-[#191a1c]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* First testimonial - larger */}
          <div
            className={`${testimonials[0].bgClass} p-8 rounded-lg relative`}
          >
            <div className="absolute top-6 right-6 w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
              <img
                src={testimonials[0].image}
                alt={testimonials[0].author}
                className={`w-full h-full ${testimonials[0].imageClass} transform`}
              />
            </div>
            <div className="text-4xl text-white/30 mb-4">&rdquo;&rdquo;</div>
            <p className="text-white/90 text-sm leading-relaxed mb-6 pr-16">
              {testimonials[0].quote[language]}
            </p>
            <div>
              <p className="text-white font-semibold">
                - {testimonials[0].author}
              </p>
              <p className="text-white/70 text-sm">{testimonials[0].role[language]}</p>
            </div>
          </div>

          {/* Right column - stacked testimonials */}
          <div className="space-y-6">
            {testimonials.slice(1).map((testimonial) => (
              <div
                key={testimonial.id}
                className={`${testimonial.bgClass} p-8 rounded-lg relative`}
              >
                <div className="absolute top-6 right-6 w-14 h-14 rounded-full overflow-hidden border-2 border-white/20">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className={`w-full h-full ${testimonial.imageClass} transform`}
                  />
                </div>
                <div className="text-3xl text-white/30 mb-3">&rdquo;&rdquo;</div>
                <p className="text-white/90 text-sm leading-relaxed mb-4 pr-16">
                  {testimonial.quote[language]}
                </p>
                <div>
                  <p className="text-white font-semibold">
                    - {testimonial.author}
                  </p>
                  <p className="text-white/70 text-sm">{testimonial.role[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
