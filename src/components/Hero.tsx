import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";
import { trackWhatsAppClick } from "@/lib/analytics";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t, language } = useLanguage();
  
  const handleWhatsAppClick = () => {
    // Track conversion event
    trackWhatsAppClick('hero_cta', t('hero.cta'));
    
    // 300ms delay to ensure event is sent
    setTimeout(() => {
      const message = t('whatsapp.message');
      window.open(`https://wa.me/351912847526?text=${encodeURIComponent(message)}`, "_blank");
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
              {t('hero.title')}
            </span>
            <span className="block text-4xl md:text-6xl mt-4 text-gold">
              {t('hero.subtitle')}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-grafite/80 max-w-3xl mx-auto leading-relaxed font-light">
            {t('hero.description')}
          </p>

          {/* Therapists Section */}
          <div className="pt-6">
            <h3 className="font-cormorant text-xl md:text-2xl font-light text-gold mb-4">
              {t('hero.therapistsTitle')}
            </h3>
            
            {/* Therapist Buttons - IMPROVED VISIBILITY */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                variant="goldOutline"
                size="lg"
                onClick={() => {
                  const baseUrl = "https://www.lennureluxspa.com";
                  const path = language === 'en' ? '/en/terapeutas-femininas' : '/terapeutas-femininas';
                  window.open(`${baseUrl}${path}`, "_blank");
                }}
                className="min-w-[180px] bg-gold/20 hover:bg-gold hover:text-white border-2 border-gold shadow-sm"
              >
                {t('differentials.female')}
              </Button>
              <Button 
                variant="goldOutline"
                size="lg"
                onClick={() => {
                  const baseUrl = "https://www.lennureluxspa.com";
                  const path = language === 'en' ? '/en/terapeutas-masculinos' : '/terapeutas-masculinos';
                  window.open(`${baseUrl}${path}`, "_blank");
                }}
                className="min-w-[180px] bg-gold/20 hover:bg-gold hover:text-white border-2 border-gold shadow-sm"
              >
                {t('differentials.male')}
              </Button>
            </div>
          </div>

          {/* Main CTA - Below Therapist Buttons */}
          <div className="pt-8 flex justify-center">
            <GradientButton 
              variant="gold"
              onClick={handleWhatsAppClick}
              className="text-lg px-12 py-6 animate-glow-pulse"
            >
              {t('hero.cta')}
            </GradientButton>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-grafite/20 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-grafite/40 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
