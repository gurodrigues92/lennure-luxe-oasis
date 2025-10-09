import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/351912847526", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-champagne to-background">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-dourado rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-salvia rounded-full blur-3xl"></div>
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
          <h1 className="text-5xl md:text-7xl font-light text-grafite leading-tight">
            Bem‑estar elegante e confidencial
            <span className="block text-4xl md:text-6xl mt-4 text-dourado">
              no coração de Lisboa
            </span>
          </h1>

          <p className="text-lg md:text-xl text-grafite/80 max-w-3xl mx-auto leading-relaxed font-light">
            Gabinetes privativos, atendimento personalizado e ambiente silencioso — um refúgio de equilíbrio 
            e conforto onde cada detalhe é pensado para si.
          </p>

          <div className="pt-8">
            <Button 
              variant="spa" 
              size="lg" 
              onClick={handleWhatsAppClick}
              className="text-lg px-12 py-6 h-auto"
            >
              Marcar Sessão Agora
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-grafite/20 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-grafite/40 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
