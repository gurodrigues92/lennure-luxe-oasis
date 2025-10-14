import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { trackWhatsAppClick } from "@/lib/analytics";
import { useLanguage } from "@/contexts/LanguageContext";

const FloatingWhatsApp = () => {
  const { t } = useLanguage();
  
  const handleWhatsAppClick = () => {
    // Track conversion event
    trackWhatsAppClick('floating_button', t('whatsapp.label'));
    
    // 300ms delay to ensure event is sent
    setTimeout(() => {
      const whatsappMessage = t('whatsapp.message');
      const whatsappUrl = `https://wa.me/351912847526?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, "_blank");
    }, 300);
  };

  return (
    <Button
      variant="gold"
      size="lg"
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 p-0 shadow-gold hover:scale-110 transition-elegant animate-glow-pulse"
      aria-label={t('whatsapp.label')}
    >
      <WhatsAppIcon size={56} className="w-14 h-14" />
    </Button>
  );
};

export default FloatingWhatsApp;
