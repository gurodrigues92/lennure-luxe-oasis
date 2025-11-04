import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Sparkles } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/contexts/LanguageContext";

const PromoDialog = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const { t } = useLanguage();

  useEffect(() => {
    // Delay de 2 segundos para exibição
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md w-[90vw] sm:w-full bg-[#F5E8DA] border-gold/20 p-0 overflow-hidden rounded-2xl" hideCloseButton>
        {/* Botão fechar customizado */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-full p-1 hover:bg-gold/10 transition-colors z-10"
          aria-label="Fechar promoção"
        >
          <X className="h-5 w-5 text-charcoal/70" />
        </button>

        {/* Header com ícone */}
        <div className="bg-gradient-gold text-white p-6 text-center">
          <Sparkles className="w-12 h-12 mx-auto mb-3 animate-pulse" />
          <h2 className="font-cormorant text-3xl font-bold">
            {t('promo.title')}
          </h2>
        </div>

        {/* Conteúdo */}
        <div className="p-6">
          {isMobile ? (
            // Versão Mobile
            <p className="font-lato text-charcoal/90 leading-relaxed text-center whitespace-pre-line">
              {t('promo.mobileText')}
            </p>
          ) : (
            // Versão Desktop
            <div className="space-y-4">
              <h3 className="font-cormorant text-2xl font-semibold text-center text-charcoal">
                {t('promo.desktopTitle')}
              </h3>
              <p className="font-lato text-charcoal/90 leading-relaxed text-center">
                {t('promo.desktopText').split('\n').map((line, i) => {
                  // Destacar "10% de desconto" e "shower gratuito"
                  if (line.includes('10%')) {
                    const parts = line.split('10%');
                    return <span key={i}>{parts[0]}<strong className="text-gold-dark">10%</strong>{parts[1]}<br/></span>;
                  }
                  if (line.includes('shower')) {
                    const parts = line.split(/shower gratuito|free shower/);
                    return <span key={i}>{parts[0]}<strong className="text-gold-dark">{line.includes('shower gratuito') ? 'shower gratuito' : 'free shower'}</strong>{parts[1]}<br/></span>;
                  }
                  return <span key={i}>{line}<br/></span>;
                })}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PromoDialog;
