import { Shield, Sparkles, Users, CheckCircle, Languages, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const differentials = [
  {
    icon: Shield,
    title: "Discrição absoluta",
    description: "Privacidade total em cada momento"
  },
  {
    icon: Sparkles,
    title: "Gabinetes privativos",
    description: "Com duche privativo e enxoval individual"
  },
  {
    icon: Users,
    title: "Sem sobreposição",
    description: "Atendimento exclusivo e dedicado"
  },
  {
    icon: CheckCircle,
    title: "Higiene rigorosa",
    description: "Protocolos de limpeza elevados"
  },
  {
    icon: Languages,
    title: "Atendimento bilingue",
    description: "Português e Inglês"
  },
  {
    icon: Heart,
    title: "Workshops de autocuidado",
    description: "Aprenda técnicas de bem-estar"
  }
];

const Differentials = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-bronze via-gold-dark to-gold">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-cream drop-shadow-sm mb-4">
              Diferenciais do Spa
            </h2>
            <p className="text-lg text-cream/90 max-w-2xl mx-auto">
              O que torna o Lennure uma experiência única
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((item, index) => (
              <div 
                key={index}
                className="flex gap-4 items-start animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Therapist Buttons */}
          <div className="flex flex-row gap-3 justify-center mt-16 max-w-2xl mx-auto">
            <Button 
              variant="outline"
              size="lg"
              onClick={() => window.open("https://www.lennureluxspa.com/terapeutas-femininas", "_blank")}
              className="flex-1 min-w-[140px] h-auto py-4 bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white"
            >
              <span className="flex flex-col items-center gap-1 leading-tight">
                <span>Terapeutas</span>
                <span>Femininas</span>
              </span>
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => window.open("https://www.lennureluxspa.com/terapeutas-masculinos", "_blank")}
              className="flex-1 min-w-[140px] h-auto py-4 bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white"
            >
              <span className="flex flex-col items-center gap-1 leading-tight">
                <span>Terapeutas</span>
                <span>Masculinos</span>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
