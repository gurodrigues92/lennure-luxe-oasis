import { Shield, Sparkles, Users, CheckCircle, Languages, Heart } from "lucide-react";

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
    <section className="py-24 bg-perola/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light text-grafite mb-4">
              Diferenciais do Spa
            </h2>
            <p className="text-lg text-grafite/70 max-w-2xl mx-auto">
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
                <div className="flex-shrink-0 w-12 h-12 bg-salvia/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-salvia" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium text-grafite">
                    {item.title}
                  </h3>
                  <p className="text-grafite/70 text-sm">
                    {item.description}
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

export default Differentials;
