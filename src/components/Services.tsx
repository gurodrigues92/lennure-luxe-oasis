import { Sparkles, Heart, Droplets } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Massagem Relaxante",
    description: "Alívio de tensões, leveza e equilíbrio físico através de técnicas especializadas."
  },
  {
    icon: Heart,
    title: "Terapia de Bem-estar",
    description: "Sessões personalizadas com foco em relaxamento profundo e presença consciente."
  },
  {
    icon: Droplets,
    title: "Reflexologia e Drenagem",
    description: "Técnicas que ativam a circulação, estimulam o corpo e promovem renovação."
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-perola/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light text-grafite mb-4">
              Serviços Oferecidos
            </h2>
            <p className="text-lg text-grafite/70 max-w-2xl mx-auto">
              Cada experiência é desenhada para o seu bem-estar integral
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-elegant hover:shadow-hover transition-elegant group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-salvia/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-salvia/20 transition-elegant">
                  <service.icon className="w-8 h-8 text-salvia" />
                </div>
                
                <h3 className="text-2xl font-cormorant text-grafite mb-4">
                  {service.title}
                </h3>
                
                <p className="text-grafite/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
