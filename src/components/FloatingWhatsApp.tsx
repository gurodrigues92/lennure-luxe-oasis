import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/351912847526", "_blank");
  };

  return (
    <Button
      variant="spa"
      size="lg"
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 p-0 shadow-2xl hover:scale-110 transition-elegant"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </Button>
  );
};

export default FloatingWhatsApp;
