import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Sparkles } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const PromoDialog = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const { t, language } = useLanguage();

  const benefits = translations[language].promo.benefits;

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md w-[90vw] sm:w-full bg-[#F5E8DA] border-gold/20 p-0 overflow-hidden rounded-2xl max-h-[90vh] overflow-y-auto" hideCloseButton>
        {/* Botão fechar customizado */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-full p-1 hover:bg-gold/10 transition-colors z-10"
          aria-label="Fechar promoção"
        >
          <X className="h-5 w-5 text-charcoal/70" />
        </button>

        {/* Header com ícone de Ano Novo */}
        <div className="bg-gradient-to-r from-[#C4A052] via-[#D4AF5A] to-[#9A7B4F] text-white p-6 text-center">
          <Sparkles className="w-12 h-12 mx-auto mb-3 animate-pulse" />
          <h2 className="font-cormorant text-2xl sm:text-3xl font-bold">
            {t('promo.title')}
          </h2>
        </div>

        {/* Conteúdo */}
        <div className="p-6">
          {isMobile ? (
            <p className="font-lato text-charcoal/90 leading-relaxed text-center whitespace-pre-line text-sm">
              {t('promo.mobileText')}
            </p>
          ) : (
            <div className="space-y-4">
              <h3 className="font-cormorant text-2xl font-semibold text-center text-charcoal">
                {t('promo.desktopTitle')}
              </h3>
              <p className="font-lato text-charcoal/90 leading-relaxed text-center text-sm">
                {t('promo.desktopText')}
              </p>
              
              {/* Lista de benefícios */}
              <ul className="text-left space-y-2 bg-white/50 rounded-lg p-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-charcoal/85">
                    <span className="text-gold flex-shrink-0">✨</span>
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              {/* Footer destacado */}
              <p className="text-center font-medium text-gold">
                🎁 {t('promo.footer')}
              </p>
              
              {/* CTA */}
              <p className="text-center text-charcoal/80 italic text-sm">
                {t('promo.cta')}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PromoDialog;
