import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Sparkles, Heart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const isFebruaryOrLater = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // 0-indexed (Janeiro = 0, Fevereiro = 1)
  
  // Fevereiro 2026 ou posterior
  return (year === 2026 && month >= 1) || year > 2026;
};

const PromoDialog = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const { t, language } = useLanguage();

  const isFebPromo = isFebruaryOrLater();
  const promoKey = isFebPromo ? 'promoFeb' : 'promo';
  const promo = translations[language][promoKey];

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const HeaderIcon = isFebPromo ? Heart : Sparkles;

  // Render February promo sections (desktop only)
  const renderFebSections = () => {
    if (!isFebPromo || !('sections' in promo)) return null;
    
    const sections = promo.sections as {
      couples: { title: string; text: string };
      singles: { title: string; text: string };
      ongoing: { title: string; text: string };
      extras: { title: string; items: string[] };
    };

    return (
      <div className="space-y-4">
        {/* Couples Section */}
        <div className="bg-white/50 rounded-lg p-3">
          <h4 className="font-semibold text-charcoal text-sm mb-1">{sections.couples.title}</h4>
          <p className="text-charcoal/80 text-sm">{sections.couples.text}</p>
        </div>

        {/* Singles Section */}
        <div className="bg-white/50 rounded-lg p-3">
          <h4 className="font-semibold text-charcoal text-sm mb-1">{sections.singles.title}</h4>
          <p className="text-charcoal/80 text-sm">{sections.singles.text}</p>
        </div>

        {/* Ongoing Section */}
        <div className="bg-white/50 rounded-lg p-3">
          <h4 className="font-semibold text-charcoal text-sm mb-1">{sections.ongoing.title}</h4>
          <p className="text-charcoal/80 text-sm">{sections.ongoing.text}</p>
        </div>

        {/* Extras Section */}
        <div className="bg-white/50 rounded-lg p-3">
          <h4 className="font-semibold text-charcoal text-sm mb-1">{sections.extras.title}</h4>
          <ul className="space-y-1">
            {sections.extras.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-charcoal/80 text-sm">
                <span className="text-gold flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  // Render January promo benefits (desktop only)
  const renderJanBenefits = () => {
    if (isFebPromo || !('benefits' in promo)) return null;
    
    const benefits = promo.benefits as string[];

    return (
      <ul className="text-left space-y-2 bg-white/50 rounded-lg p-4">
        {benefits.map((benefit, i) => (
          <li key={i} className="flex items-start gap-2 text-charcoal/85">
            <span className="text-gold flex-shrink-0">✨</span>
            <span className="text-sm">{benefit}</span>
          </li>
        ))}
      </ul>
    );
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

        {/* Header com ícone */}
        <div className="bg-gradient-to-r from-[#C4A052] via-[#D4AF5A] to-[#9A7B4F] text-white p-6 text-center">
          <HeaderIcon className="w-12 h-12 mx-auto mb-3 animate-pulse" />
          <h2 className="font-cormorant text-2xl sm:text-3xl font-bold">
            {promo.title}
          </h2>
        </div>

        {/* Conteúdo */}
        <div className="p-6">
          {isMobile ? (
            <p className="font-lato text-charcoal/90 leading-relaxed text-center whitespace-pre-line text-sm">
              {promo.mobileText}
            </p>
          ) : (
            <div className="space-y-4">
              <h3 className="font-cormorant text-2xl font-semibold text-center text-charcoal">
                {promo.desktopTitle}
              </h3>
              <p className="font-lato text-charcoal/90 leading-relaxed text-center text-sm">
                {promo.desktopText}
              </p>
              
              {/* Renderiza seções baseado na promoção ativa */}
              {renderFebSections()}
              {renderJanBenefits()}
              
              {/* Footer destacado */}
              <p className="text-center font-medium text-gold">
                🎁 {promo.footer}
              </p>
              
              {/* CTA */}
              <p className="text-center text-charcoal/80 italic text-sm">
                {promo.cta}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PromoDialog;
