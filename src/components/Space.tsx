import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Maximize2 } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";

const spaces = [
  {
    name: "Gabinete de Atendimento",
    image: "https://res.cloudinary.com/dkobjk4qi/image/upload/v1760040792/WhatsApp_Image_2025-10-09_at_16.42.46_j28qs0.jpg",
    description: "Conforto e tranquilidade em cada detalhe"
  },
  {
    name: "Sala de Espera",
    image: "https://res.cloudinary.com/dkobjk4qi/image/upload/v1760040792/WhatsApp_Image_2025-10-09_at_16.46.55_rkrws2.jpg",
    description: "Boas-vindas num ambiente acolhedor e discreto"
  },
  {
    name: "Receção",
    image: "https://res.cloudinary.com/dkobjk4qi/image/upload/v1760040792/WhatsApp_Image_2025-10-09_at_16.46.56_oahrl8.jpg",
    description: "Atendimento elegante e profissional"
  },
  {
    name: "Casa de Banho",
    image: "https://res.cloudinary.com/dkobjk4qi/image/upload/v1760040792/WhatsApp_Image_2025-10-09_at_16.42.46_1_wohnwm.jpg",
    description: "Higiene impecável e cuidado em cada detalhe"
  }
];

const Space = () => {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick('space_section', 'Agendar Visita');
    setTimeout(() => {
      window.open("https://wa.me/351912847526", "_blank");
    }, 300);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold title-gold-gradient mb-4">
              Nosso Espaço
            </h2>
            <p className="text-lg text-grafite/70 max-w-2xl mx-auto">
              Ambientes elegantes, pensados para o seu conforto e privacidade
            </p>
          </div>

          {/* Spaces Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {spaces.map((space, index) => (
              <div 
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-elegant group-hover:shadow-hover transition-elegant mb-4 cursor-pointer">
                      <img 
                        src={space.image} 
                        alt={space.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-elegant"
                        loading="lazy"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-grafite/80 via-grafite/0 to-transparent opacity-0 group-hover:opacity-100 transition-elegant flex items-center justify-center">
                        <Maximize2 className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl max-h-[90vh] p-0 overflow-hidden">
                    <div className="relative w-full h-full flex flex-col items-center justify-center p-6">
                      <img 
                        src={space.image} 
                        alt={space.name}
                        className="max-w-full max-h-[80vh] object-contain rounded-lg"
                      />
                      <div className="text-center mt-6 space-y-2">
                        <h3 className="text-2xl font-cormorant text-grafite">
                          {space.name}
                        </h3>
                        <p className="text-grafite/70">
                          {space.description}
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-cormorant text-grafite">
                    {space.name}
                  </h3>
                  <p className="text-sm text-grafite/60">
                    {space.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Visit CTA */}
          <div className="flex flex-col items-center mt-16">
            <div className="text-center space-y-4 max-w-md">
              <p className="text-lg text-grafite/70">
                Quer conhecer pessoalmente nosso espaço?
              </p>
              <GradientButton 
                variant="gold"
                className="min-w-[250px] text-lg px-10 py-4"
                onClick={handleWhatsAppClick}
              >
                Agendar Visita
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Space;
