import { Sparkles, Heart, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Sparkles,
      title: t('services.massage'),
      description: t('services.massageDesc')
    },
    {
      icon: Heart,
      title: t('services.relaxation'),
      description: t('services.relaxationDesc')
    },
    {
      icon: Droplets,
      title: t('services.personalized'),
      description: t('services.personalizedDesc')
    }
  ];
  return (
    <section className="py-24 bg-gradient-to-br from-gold-light/20 via-cream/40 to-gold/10 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-bronze/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in relative z-10">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold title-gold-gradient mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
            {/* Linha decorativa dourada */}
            <div className="w-24 h-1 bg-gradient-gold mx-auto mt-6 rounded-full" />
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 relative z-10 mb-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 shadow-elegant hover:shadow-gold hover:border-gold hover:scale-105 transition-elegant group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Ícone com fundo dourado */}
                <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-elegant shadow-gold">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-cormorant font-semibold text-charcoal mb-4">
                  {service.title}
                </h3>
                
                <p className="text-charcoal/70 leading-relaxed font-lato">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center relative z-10 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Button 
              variant="goldOutline"
              size="lg"
              onClick={() => window.open("https://www.lennureluxspa.com/massagens", "_blank")}
              className="min-w-[250px] group"
            >
              {t('services.cta')}
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
