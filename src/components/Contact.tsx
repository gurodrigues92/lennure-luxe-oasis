import { MapPin, Phone, Mail, Clock, CreditCard, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const whatsappMessage = "Olá! Vim através do site e gostaria de agendar uma sessão.";
    const whatsappUrl = `https://wa.me/351912847526?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light text-grafite mb-4">
              Contactos e Horários
            </h2>
            <p className="text-lg text-grafite/70">
              Estamos prontos para recebê-lo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-salvia/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-salvia" />
                </div>
                <div>
                  <h3 className="font-medium text-grafite mb-1">Localização</h3>
                  <p className="text-grafite/70">
                    Avenida 5 de Outubro, nº 68 — Sala 5G<br />
                    Lisboa, Portugal
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-salvia/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-salvia" />
                </div>
              <div>
                <h3 className="font-medium text-grafite mb-1">Telefone</h3>
                <p className="text-grafite/70">
                  <a href="tel:+351215862245" className="hover:text-salvia transition-colors">
                    +351 21 586 2245
                  </a>
                  <br />
                  WhatsApp: <a 
                    href={`https://wa.me/351912847526?text=${encodeURIComponent("Olá! Vim através do site e gostaria de agendar uma sessão.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-salvia transition-colors"
                  >
                    +351 912 847 526
                  </a>
                </p>
              </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-salvia/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-salvia" />
                </div>
                <div>
                  <h3 className="font-medium text-grafite mb-1">E-mail</h3>
                  <p className="text-grafite/70">
                    lennureluxspa@icloud.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-salvia/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-salvia" />
                </div>
                <div>
                  <h3 className="font-medium text-grafite mb-1">Redes Sociais</h3>
                  <a 
                    href="https://instagram.com/lennureluxspa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-grafite/70 hover:text-salvia transition-colors"
                  >
                    @lennureluxspa
                  </a>
                </div>
              </div>
            </div>

            {/* Hours & Payment */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="bg-perola/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-salvia" />
                  <h3 className="text-xl font-cormorant text-grafite">Horário de Funcionamento</h3>
                </div>
                <div className="space-y-2 text-grafite/70">
                  <p>Segunda a Sexta: <span className="text-grafite font-medium">10h–22h</span></p>
                  <p>Sábado: <span className="text-grafite font-medium">12h–22h</span></p>
                  <p>Domingo: <span className="text-grafite font-medium">13h–21h</span></p>
                </div>
              </div>

              <div className="bg-perola/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="w-6 h-6 text-salvia" />
                  <h3 className="text-xl font-cormorant text-grafite">Formas de Pagamento</h3>
                </div>
                <p className="text-grafite/70">
                  Aceitamos: Numerário, MB Way, Transferência Bancária e Cartões de Crédito/Débito
                </p>
              </div>

              <Button 
                variant="spa" 
                size="lg" 
                className="w-full"
                onClick={handleWhatsAppClick}
              >
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
