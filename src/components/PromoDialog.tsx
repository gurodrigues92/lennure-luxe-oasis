import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Sparkles } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const PromoDialog = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();

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
            Novembro Especial Black Friday
          </h2>
        </div>

        {/* Conteúdo */}
        <div className="p-6">
          {isMobile ? (
            // Versão Mobile
            <p className="font-lato text-charcoal/90 leading-relaxed text-center">
              🌿 Novembro Especial Black Friday:<br/>
              10% de desconto na primeira massagem<br/>
              e shower grátis para clientes durante todo o mês.
              <br/><br/>
              💆‍♀️ Reserve já o seu momento de relaxamento.
            </p>
          ) : (
            // Versão Desktop
            <div className="space-y-4">
              <h3 className="font-cormorant text-2xl font-semibold text-center text-charcoal">
                ✨ Novembro Especial da Black Friday no Lennure Lux Spa ✨
              </h3>
              <p className="font-lato text-charcoal/90 leading-relaxed text-center">
                A promoção continua!<br/>
                Aproveite <strong className="text-gold-dark">10% de desconto</strong> na sua primeira massagem<br/>
                e, se você já é nosso cliente, receba <strong className="text-gold-dark">shower gratuito</strong> em todas as sessões durante o mês de novembro.
                <br/><br/>
                🌿 Viva uma experiência completa de relaxamento e bem-estar.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PromoDialog;
