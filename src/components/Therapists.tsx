import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Maximize2 } from "lucide-react";

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
    name: "Miguel",
    image: "https://res.cloudinary.com/dkobjk4qi/image/upload/v1760032333/Imagem_de_iLoveIMG_2_edikvx.png",
    languages: "PT / EN"
  },
  {
    name: "André",
    image: "https://res.cloudinary.com/dkobjk4qi/image/upload/v1760032333/Imagem_iLoveIMG_oqyabe.png",
    languages: "PT / EN"
  },
  {
    name: "Ricardo",
    image: "https://res.cloudinary.com/dkobjk4qi/image/upload/v1760032334/Imagem_de_iLoveIMG_1_ij9ai9.png",
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
              Nossa Equipa de Terapeutas
            </h2>
            <p className="text-lg text-grafite/70 max-w-2xl mx-auto">
              Profissionais qualificados e dedicados ao seu bem-estar
            </p>
          </div>

          {/* Therapists Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {therapists.map((therapist, index) => (
              <div 
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-elegant group-hover:shadow-hover transition-elegant mb-4 cursor-pointer">
                      <img 
                        src={therapist.image} 
                        alt={therapist.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-elegant"
                        loading="lazy"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-grafite/80 via-grafite/0 to-transparent opacity-0 group-hover:opacity-100 transition-elegant flex items-center justify-center">
                        <Maximize2 className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
                    <div className="relative w-full h-full flex flex-col items-center justify-center p-6">
                      <img 
                        src={therapist.image} 
                        alt={therapist.name}
                        className="max-w-full max-h-[80vh] object-contain rounded-lg"
                      />
                      <p className="text-center text-lg font-cormorant text-grafite mt-4">
                        {therapist.name}
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
                
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open("https://www.lennureluxspa.com/terapeutas-femininas", "_blank")}
              className="min-w-[200px]"
            >
              Ver Terapeutas Femininas
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open("https://www.lennureluxspa.com/terapeutas-masculinos", "_blank")}
              className="min-w-[200px]"
            >
              Ver Terapeutas Masculinos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Therapists;
