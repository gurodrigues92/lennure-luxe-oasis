import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo",
    location: "Lisboa",
    text: "Um espaço verdadeiramente distinto. Atendimento impecável e ambiente acolhedor.",
    rating: 5
  },
  {
    name: "Pedro",
    location: "Cascais",
    text: "Privacidade total e um nível de cuidado que nunca encontrei noutros spas.",
    rating: 5
  },
  {
    name: "Helena",
    location: "Lisboa",
    text: "Senti‑me renovada. Profissionalismo e serenidade em cada detalhe.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-champagne/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-gold bg-clip-text text-transparent mb-4">
              O Que Dizem os Nossos Clientes
            </h2>
            <p className="text-lg text-grafite/70">
              Experiências de quem já nos visitou
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-elegant hover:shadow-hover transition-elegant animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-dourado text-dourado" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-grafite/80 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-perola pt-4">
                  <p className="font-medium text-grafite">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-grafite/60">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
