import { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import TelegramIcon from "@/components/icons/TelegramIcon";
import { trackWhatsAppClick, trackPhoneClick } from "@/lib/analytics";
import { useLanguage } from "@/contexts/LanguageContext";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('floating_contact', t('floatingContact.whatsapp'));
    setTimeout(() => {
      const whatsappMessage = t('whatsapp.message');
      const whatsappUrl = `https://wa.me/351912847526?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, "_blank");
      setOpen(false);
    }, 300);
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/lennureluxspa", "_blank");
    setOpen(false);
  };

  const handleCallClick = () => {
    trackPhoneClick('floating_contact', '+351215862245');
    setTimeout(() => {
      window.location.href = "tel:+351215862245";
      setOpen(false);
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="gold"
          size="lg"
          className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 p-0 shadow-gold hover:scale-110 transition-elegant animate-glow-pulse"
          aria-label={t('floatingContact.title')}
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background border-gold/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-cormorant title-gold-gradient text-center">
            {t('floatingContact.title')}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3 py-4">
          <Button
            variant="outline"
            className="w-full justify-start gap-4 h-14 text-lg border-gold/20 hover:bg-gold/10 hover:border-gold/40 transition-elegant"
            onClick={handleWhatsAppClick}
          >
            <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
              <WhatsAppIcon className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-grafite">{t('floatingContact.whatsapp')}</span>
          </Button>
          
          <Button
            variant="outline"
            className="w-full justify-start gap-4 h-14 text-lg border-gold/20 hover:bg-gold/10 hover:border-gold/40 transition-elegant"
            onClick={handleTelegramClick}
          >
            <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
              <TelegramIcon className="w-6 h-6 text-blue-500" />
            </div>
            <span className="text-grafite">{t('floatingContact.telegram')}</span>
          </Button>
          
          <Button
            variant="outline"
            className="w-full justify-start gap-4 h-14 text-lg border-gold/20 hover:bg-gold/10 hover:border-gold/40 transition-elegant"
            onClick={handleCallClick}
          >
            <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-gold-dark" />
            </div>
            <span className="text-grafite">{t('floatingContact.call')}</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FloatingContact;
