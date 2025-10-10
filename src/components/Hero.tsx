import { GradientButton } from "@/components/ui/gradient-button";
import { trackWhatsAppClick } from "@/lib/analytics";

const Hero = () => {
  const handleWhatsAppClick = () => {
    // Track conversion event
    trackWhatsAppClick('hero_cta', 'Marcar Sessão Agora');
    
    // 300ms delay to ensure event is sent
    setTimeout(() => {
      window.open("https://wa.me/351912847526", "_blank");
    }, 300);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-dourado rounded-full blur-3xl transform -translate-x-1/4"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-light rounded-full blur-3xl transform translate-x-1/4"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-12 animate-fade-in">
          <img 
            src="https://res.cloudinary.com/dkobjk4qi/image/upload/v1760032673/logo-semfundo_snsezj.png" 
            alt="Lennure Lux Spa" 
            className="h-24 md:h-32 w-auto"
          />
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-light leading-tight">
            <span className="text-gradient-gold">
              Bem-estar e experiência sensorial
            </span>
            <span className="block text-4xl md:text-6xl mt-4 text-gold">
              no coração de Lisboa
            </span>
          </h1>

          <p className="text-lg md:text-xl text-grafite/80 max-w-3xl mx-auto leading-relaxed font-light">
            Gabinetes privativos, atendimento personalizado e ambiente silencioso — um refúgio de equilíbrio 
            e conforto onde cada detalhe é pensado para si.
          </p>

          <div className="pt-8">
            <GradientButton 
              variant="gold"
              onClick={handleWhatsAppClick}
              className="text-lg px-12 py-6 animate-glow-pulse"
            >
              Marcar Sessão Agora
            </GradientButton>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-grafite/20 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-grafite/40 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
