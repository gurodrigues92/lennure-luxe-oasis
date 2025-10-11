import { Phone, MapPin } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { trackWhatsAppClick, trackPhoneClick } from "@/lib/analytics";

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
    <section className="bg-perola/30 pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-cormorant font-bold title-gold-gradient mb-6">
              Venha conhecer-nos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up">
            <a
              href="https://www.google.com/maps/place/Lennure+Lux+Spa/@38.737384,-9.1476541,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 bg-background rounded-2xl border border-transparent hover:border-gold hover:shadow-gold transition-elegant group"
              aria-label="Ver localização no Google Maps"
            >
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 transition-elegant shadow-gold">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-medium text-grafite text-center">Localização</h3>
              <p className="text-grafite/70 text-center text-sm">
                Avenida 5 de Outubro, nº 68<br />
                Sala 5G, Centro de Lisboa
              </p>
            </a>

            <a
              href="tel:+351215862245"
              className="flex flex-col items-center gap-3 p-6 bg-background rounded-2xl border border-transparent hover:border-gold hover:shadow-gold transition-elegant group"
              aria-label="Ligar para o Lennure Lux Spa"
              onClick={() => trackPhoneClick('map_section', '+351215862245')}
            >
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 transition-elegant shadow-gold">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-medium text-grafite text-center">Telefone</h3>
              <p className="text-grafite/70 text-center text-sm group-hover:text-gold transition-colors">
                +351 21 586 2245
              </p>
            </a>

            <a
              href="#"
              onClick={handleWhatsAppClick}
              className="flex flex-col items-center gap-3 p-6 bg-background rounded-2xl border border-transparent hover:border-gold hover:shadow-gold transition-elegant group"
              aria-label="Enviar mensagem via WhatsApp"
            >
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 transition-elegant shadow-gold">
                <WhatsAppIcon size={32} className="text-white" />
              </div>
              <h3 className="font-medium text-grafite text-center">WhatsApp</h3>
              <p className="text-grafite/70 text-center text-sm group-hover:text-gold transition-colors">
                +351 912 847 526
              </p>
            </a>
          </div>

          {/* Parking Information */}
          <div className="mt-12 mb-8 animate-fade-in-up">
            <div className="bg-gradient-to-br from-gold/10 via-perola/20 to-champagne/10 rounded-2xl p-8 md:p-10 border border-gold/20 shadow-elegant">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-cormorant text-grafite mb-2 font-bold">
                  Estacionamento Próximo
                </h3>
                <p className="text-grafite/80 leading-relaxed mb-4">
                  Se vier de carro, temos uma excelente notícia: O Lennure Lux Spa fica a apenas <strong>5 minutos a pé</strong> do estacionamento.
                </p>
                
                <div className="bg-white/60 rounded-lg p-4 mb-4 border border-gold/10 max-w-2xl mx-auto">
                  <p className="text-grafite/70 text-sm mb-3">
                    <strong>Importante:</strong> Recomendamos usar este estacionamento para garantir tranquilidade.
                  </p>
                  <p className="text-grafite/60 text-xs italic">
                    Somente pagamento numerado é aceito no local.
                  </p>
                </div>

                {/* TODO: Substituir pelo link correto do Google Maps */}
                <a
                  href="https://www.google.com/maps/place/Estacionamento+Jardim+do+Carregal/@38.7375167,-9.148795,17z/data=!3m1!4b1!4m6!3m5!1s0xd19330bcc2d1f47:0x19cc00a260e6e661!8m2!3d38.7375167!4d-9.148795!16s%2Fg%2F11cmytc398?entry=tts&g_ep=EgoyMDI1MDkxNy4wIPu8ASoASAFQAw%3D%3D&skid=0ea874e6-617a-4e43-925b-180b984aee1e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold-dark text-white rounded-xl transition-colors font-medium shadow-md hover:shadow-lg"
                >
                  <MapPin className="w-5 h-5" />
                  Abrir Estacionamento no Google Maps
                </a>
              </div>
            </div>
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
