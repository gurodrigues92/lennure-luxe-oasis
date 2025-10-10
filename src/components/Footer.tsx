// Instagram removed - account doesn't exist

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="space-y-4">
              <img 
                src="https://res.cloudinary.com/dkobjk4qi/image/upload/v1760032673/logo-semfundo_snsezj.png" 
                alt="Lennure Lux Spa" 
                className="h-16 w-auto brightness-0 invert"
              />
              <p className="text-white/70 text-sm leading-relaxed">
                Bem-estar e experiência sensorial
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-cormorant text-lg mb-4">Informações</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Política de Cancelamento
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Seção Institucional */}
          <div className="border-t border-white/10 pt-8 mb-8">
            <div className="bg-white/5 rounded-lg p-6 space-y-3">
              <h4 className="font-cormorant text-lg text-gold-light mb-3">
                Informações Importantes
              </h4>
              
              <div className="space-y-2 text-sm text-white/70 leading-relaxed">
                <p>
                  Este site tem acesso limitado a determinados países por motivos de{" "}
                  <span className="text-white/90 font-medium">privacidade e regulamentação</span>.
                </p>
                <p>
                  Todos os serviços são oferecidos com base em critérios de{" "}
                  <span className="text-white/90 font-medium">bem-estar</span>,{" "}
                  <span className="text-white/90 font-medium">ética profissional</span> e{" "}
                  <span className="text-white/90 font-medium">privacidade do cliente</span>.
                </p>
                <p className="text-gold-light font-medium">
                  ⚠️ Proibido menores de 18 anos.
                </p>
                <p>
                  <strong className="text-white/90">Pagamentos aceites:</strong> Numerário, Cartão (Visa/Mastercard), Transferência ou MBWay.
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>© {new Date().getFullYear()} Lennure Lux Spa · Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
