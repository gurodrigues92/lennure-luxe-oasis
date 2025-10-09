import { Button } from "@/components/ui/button";

const therapists = [
  {
    name: "Nina",
    image: "https://res.cloudinary.com/dkobjk4qi/image/upload/v1760032310/Capa_Nina_jcdm4u.png",
    languages: "PT / EN"
  },
  {
    name: "Emma",
    image: "https://res.cloudinary.com/dkobjk4qi/image/upload/v1760032333/Capa_Emma_n6izf3.png",
    languages: "PT / EN"
  },
  {
    name: "Angel",
    image: "https://res.cloudinary.com/dkobjk4qi/image/upload/v1760032333/Angel_Capa_gqtdxz.png",
    languages: "PT / EN"
  },
  {
    name: "Thais",
    image: "https://res.cloudinary.com/dkobjk4qi/image/upload/v1760032334/Thais_Capa_puggyx.png",
    languages: "PT / EN"
  },
  {
    name: "Yasmin",
    image: "https://res.cloudinary.com/dkobjk4qi/image/upload/v1760032346/yasmin-capa_edited_pyqebw.jpg",
    languages: "PT / EN"
  }
];

const Therapists = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light text-grafite mb-4">
              Nossas Terapeutas
            </h2>
            <p className="text-lg text-grafite/70 max-w-2xl mx-auto">
              Profissionais qualificadas e dedicadas ao seu bem-estar
            </p>
          </div>

          {/* Therapists Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {therapists.map((therapist, index) => (
              <div 
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-elegant group-hover:shadow-hover transition-elegant mb-4">
                  <img 
                    src={therapist.image} 
                    alt={therapist.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-elegant"
                    loading="lazy"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-grafite/80 via-grafite/0 to-transparent opacity-0 group-hover:opacity-100 transition-elegant"></div>
                </div>
                
                <div className="text-center space-y-1">
                  <h3 className="text-xl font-cormorant text-grafite">
                    {therapist.name}
                  </h3>
                  <p className="text-sm text-grafite/60">
                    {therapist.languages}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open("https://wa.me/351912847526", "_blank")}
            >
              Conhecer mais sobre as terapeutas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Therapists;
