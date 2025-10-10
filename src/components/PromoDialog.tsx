import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { GradientButton } from "@/components/ui/gradient-button";
import { X, Sparkles } from "lucide-react";

const PromoDialog = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Verifica se já foi exibido
    const hasSeenPromo = localStorage.getItem("hasSeenInaugurationPromo");
    
    if (!hasSeenPromo) {
      // Delay de 1 segundo para não ser intrusivo
      setTimeout(() => {
        setOpen(true);
      }, 1000);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("hasSeenInaugurationPromo", "true");
  };

  const handleCTA = () => {
    handleClose();
    // Scroll suave até seção de contato
    const contactSection = document.querySelector('[data-section="contact_section"]');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md bg-[#F5E8DA] border-gold/20 p-0 overflow-hidden" hideCloseButton>
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
            Promoção de Inauguração
          </h2>
        </div>

        {/* Conteúdo */}
        <div className="p-6 space-y-4">
          <p className="font-lato text-charcoal/90 leading-relaxed text-center">
            Ganhe <strong className="text-gold-dark">10% de desconto</strong> na sua{" "}
            <strong>1ª e 9ª visita</strong> + um{" "}
            <strong className="text-gold-dark">shower exclusivo</strong> ao completar o seu{" "}
            <strong>Cartão Fidelidade</strong>.
          </p>

          {/* Badges informativos */}
          <div className="space-y-2 bg-white/50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-sm text-charcoal/80">
              <span className="text-gold">✔️</span>
              <span>Oferta válida por tempo limitado</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-charcoal/80">
              <span className="text-gold">📍</span>
              <span>Disponível apenas para clientes em Lisboa</span>
            </div>
          </div>

          {/* CTA */}
          <GradientButton
            variant="gold"
            className="w-full"
            onClick={handleCTA}
          >
            Marcar Sessão
          </GradientButton>

          <p className="text-xs text-charcoal/60 text-center font-lato">
            Agende agora e receba o seu cartão!
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PromoDialog;
