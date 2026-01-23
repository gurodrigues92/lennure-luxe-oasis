import { Button } from "@/components/ui/button";
import TelegramIcon from "@/components/icons/TelegramIcon";

const FloatingTelegram = () => {
  const handleTelegramClick = () => {
    window.open("https://t.me/lennureluxspa", "_blank");
  };

  return (
    <Button
      variant="gold"
      size="lg"
      onClick={handleTelegramClick}
      className="fixed bottom-24 right-6 z-50 rounded-full w-16 h-16 p-0 shadow-gold hover:scale-110 transition-elegant animate-glow-pulse"
      aria-label="Telegram"
    >
      <TelegramIcon size={40} className="w-10 h-10" />
    </Button>
  );
};

export default FloatingTelegram;
