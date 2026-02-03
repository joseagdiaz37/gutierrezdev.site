"use client";

const testimonials = [
  {
    id: 1,
    quote:
      "José delivered an exceptional full-stack solution for our business. His expertise in React and Node.js helped us scale our platform efficiently. He's professional, communicative, and always delivers on time.",
    author: "Sarah Martinez",
    role: "CTO at TechStart Inc",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    bgClass: "bg-gradient-turquoise",
  },
  {
    id: 2,
    quote:
      "Working with José was a great experience. His attention to detail and problem-solving skills are outstanding!",
    author: "Michael Chen",
    role: "Product Manager at InnovateLab",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    bgClass: "bg-gradient-blue",
  },
  {
    id: 3,
    quote:
      "José is one of the best developers we've worked with. His full-stack skills and ability to understand complex requirements made our project a success.",
    author: "Emily Rodriguez",
    role: "Founder at Digital Solutions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    bgClass: "bg-gradient-purple",
  },
];

export default function TestimonialsSection() {
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
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-4xl text-white/30 mb-4">&rdquo;&rdquo;</div>
            <p className="text-white/90 text-sm leading-relaxed mb-6 pr-16">
              {testimonials[0].quote}
            </p>
            <div>
              <p className="text-white font-semibold">
                - {testimonials[0].author}
              </p>
              <p className="text-white/70 text-sm">{testimonials[0].role}</p>
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
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-3xl text-white/30 mb-3">&rdquo;&rdquo;</div>
                <p className="text-white/90 text-sm leading-relaxed mb-4 pr-16">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="text-white font-semibold">
                    - {testimonial.author}
                  </p>
                  <p className="text-white/70 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
