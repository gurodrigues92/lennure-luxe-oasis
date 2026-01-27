import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const MapLocation = () => {
  const { t, language } = useLanguage();

  return (
    <section className="bg-perola/30 pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Parking Information */}
          <div className="mb-8 animate-fade-in-up">
            <div className="bg-gradient-to-br from-gold/10 via-perola/20 to-champagne/10 rounded-2xl p-8 md:p-10 border border-gold/20 shadow-elegant">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-cormorant text-grafite mb-2 font-bold">
                  {t('mapLocation.parking.title')}
                </h3>
                <p className="text-grafite/80 leading-relaxed mb-4">
                  {t('mapLocation.parking.description')} <strong>{t('mapLocation.parking.walkTime')}</strong> {t('mapLocation.parking.fromParking')}.
                </p>
                
                <div className="bg-white/60 rounded-lg p-4 mb-4 border border-gold/10 max-w-2xl mx-auto">
                  <p className="text-grafite/70 text-sm mb-3">
                    <strong>{t('mapLocation.parking.important')}</strong> {t('mapLocation.parking.recommendation')}
                  </p>
                  <p className="text-grafite/60 text-xs italic">
                    {t('mapLocation.parking.cashOnly')}
                  </p>
                </div>

                <Button 
                  variant="goldOutline"
                  size="lg"
                  onClick={() => window.open("https://www.google.com/maps/place/Estacionamento+Jardim+do+Carregal/@38.7375167,-9.148795,17z/data=!3m1!4b1!4m6!3m5!1s0xd19330bcc2d1f47:0x19cc00a260e6e661!8m2!3d38.7375167!4d-9.148795!16s%2Fg%2F11cmytc398?entry=tts&g_ep=EgoyMDI1MDkxNy4wIPu8ASoASAFQAw%3D%3D&skid=0ea874e6-617a-4e43-925b-180b984aee1e", "_blank")}
                  className="bg-gold/20 hover:bg-gold hover:text-white border-2 border-gold shadow-sm"
                >
                  <MapPin className="w-5 h-5" />
                  {t('mapLocation.parking.cta')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[450px] md:h-[500px]">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.147209900698!2d-9.1476541!3d38.737384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193371fa4d3e17%3A0xef2264aed03d2fa8!2sLennure%20Lux%20Spa!5e0!3m2!1s${language === 'en' ? 'en' : 'pt-BR'}!2s${language === 'en' ? 'us' : 'br'}!4v1760033440242!5m2!1s${language === 'en' ? 'en' : 'pt-BR'}!2s${language === 'en' ? 'us' : 'br'}`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização do Lennure Lux Spa"
        />
      </div>
    </section>
  );
};

export default MapLocation;
