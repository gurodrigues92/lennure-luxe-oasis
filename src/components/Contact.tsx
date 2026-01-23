import { MapPin, Phone, Mail, Clock, CreditCard } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { trackWhatsAppClick, trackPhoneClick } from "@/lib/analytics";
import { useLanguage } from "@/contexts/LanguageContext";
import TelegramIcon from "@/components/icons/TelegramIcon";

const Contact = () => {
  const { t } = useLanguage();
  
  const handleWhatsAppClick = () => {
    // Track conversion event
    trackWhatsAppClick('contact_section', t('contact.cta'));
    
    // 300ms delay to ensure event is sent
    setTimeout(() => {
      const whatsappMessage = t('whatsapp.message');
      const whatsappUrl = `https://wa.me/351912847526?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, "_blank");
    }, 300);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold title-gold-gradient mb-4">
              {t('contact.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold-dark" />
                </div>
                <div>
                  <h3 className="font-medium text-grafite mb-1">{t('contact.location')}</h3>
                  <p className="text-grafite/70">
                    {t('contact.locationValue')}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold-dark" />
                </div>
              <div>
                <h3 className="font-medium text-grafite mb-1">{t('contact.phone')}</h3>
                <p className="text-grafite/70">
                  <a 
                    href="tel:+351215862245" 
                    className="hover:text-gold transition-colors"
                    onClick={() => trackPhoneClick('contact_section', '+351215862245')}
                  >
                    +351 21 586 2245
                  </a>
                  <br />
                  WhatsApp: <a 
                    href={`https://wa.me/351912847526?text=${encodeURIComponent(t('whatsapp.message'))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors"
                  >
                    {t('contact.phoneValue')}
                  </a>
                </p>
              </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-gold-dark" />
                </div>
                <div>
                  <h3 className="font-medium text-grafite mb-1">{t('contact.email')}</h3>
                  <p className="text-grafite/70">
                    {t('contact.emailValue')}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TelegramIcon className="w-6 h-6 text-gold-dark" />
                </div>
                <div>
                  <h3 className="font-medium text-grafite mb-1">{t('contact.telegram')}</h3>
                  <p className="text-grafite/70">
                    <a 
                      href="https://t.me/lennureluxspa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold transition-colors"
                    >
                      {t('contact.telegramValue')}
                    </a>
                  </p>
                </div>
              </div>

            </div>

            {/* Hours & Payment */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="bg-perola/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-gold-dark" />
                  <h3 className="text-xl font-cormorant text-grafite">{t('contact.hours')}</h3>
                </div>
                <div className="space-y-2 text-grafite/70">
                  <p>{t('contact.days.weekdays')}: <span className="text-grafite font-medium">{t('contact.schedule.weekdays')}</span></p>
                  <p>{t('contact.days.saturday')}: <span className="text-grafite font-medium">{t('contact.schedule.saturday')}</span></p>
                  <p>{t('contact.days.sunday')}: <span className="text-grafite font-medium">{t('contact.schedule.sunday')}</span></p>
                </div>
              </div>

              <div className="bg-perola/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="w-6 h-6 text-gold-dark" />
                  <h3 className="text-xl font-cormorant text-grafite">{t('contact.payment')}</h3>
                </div>
                <p className="text-grafite/70">
                  {t('contact.paymentValue')}
                </p>
              </div>

              <GradientButton 
                variant="gold"
                className="w-full text-lg px-10 py-4"
                onClick={handleWhatsAppClick}
              >
                {t('contact.cta')}
              </GradientButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
