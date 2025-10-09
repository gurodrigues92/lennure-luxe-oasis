import { Phone, MapPin } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { trackWhatsAppClick } from "@/lib/analytics";

const MapLocation = () => {
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Track conversion event
    trackWhatsAppClick('map_section', 'WhatsApp - Mapa');
    
    // 300ms delay to ensure event is sent
    setTimeout(() => {
      const whatsappMessage = "Olá! Vim através do site e gostaria de agendar uma sessão.";
      const whatsappUrl = `https://wa.me/351912847526?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, "_blank");
    }, 300);
  };

  return (
    <section className="bg-perola/30 py-16">
      <div className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-cormorant text-grafite mb-6">
              Venha conhecer-nos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up">
            <a
              href="https://www.google.com/maps/place/Lennure+Lux+Spa/@38.737384,-9.1476541,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-background rounded-2xl hover:bg-perola/50 transition-elegant group"
              aria-label="Ver localização no Google Maps"
            >
              <div className="w-14 h-14 bg-salvia/10 rounded-xl flex items-center justify-center group-hover:bg-salvia/20 transition-elegant">
                <MapPin className="w-7 h-7 text-salvia" />
              </div>
              <h3 className="font-medium text-grafite text-center">Localização</h3>
              <p className="text-grafite/70 text-center text-sm">
                Avenida 5 de Outubro, nº 68<br />
                Sala 5G, Centro de Lisboa
              </p>
            </a>

            <a
              href="tel:+351215862245"
              className="flex flex-col items-center gap-3 p-6 bg-background rounded-2xl hover:bg-perola/50 transition-elegant group"
              aria-label="Ligar para o Lennure Lux Spa"
            >
              <div className="w-14 h-14 bg-salvia/10 rounded-xl flex items-center justify-center group-hover:bg-salvia/20 transition-elegant">
                <Phone className="w-7 h-7 text-salvia" />
              </div>
              <h3 className="font-medium text-grafite text-center">Telefone</h3>
              <p className="text-grafite/70 text-center text-sm group-hover:text-salvia transition-colors">
                +351 21 586 2245
              </p>
            </a>

            <a
              href="#"
              onClick={handleWhatsAppClick}
              className="flex flex-col items-center gap-3 p-6 bg-background rounded-2xl hover:bg-perola/50 transition-elegant group"
              aria-label="Enviar mensagem via WhatsApp"
            >
              <div className="w-14 h-14 bg-salvia/10 rounded-xl flex items-center justify-center group-hover:bg-salvia/20 transition-elegant">
                <WhatsAppIcon size={28} className="text-salvia" />
              </div>
              <h3 className="font-medium text-grafite text-center">WhatsApp</h3>
              <p className="text-grafite/70 text-center text-sm group-hover:text-salvia transition-colors">
                +351 912 847 526
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-[450px] md:h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.147209900698!2d-9.1476541!3d38.737384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193371fa4d3e17%3A0xef2264aed03d2fa8!2sLennure%20Lux%20Spa!5e0!3m2!1spt-BR!2sbr!4v1760033440242!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização do Lennure Lux Spa"
        />
      </div>
    </section>
  );
};

export default MapLocation;
