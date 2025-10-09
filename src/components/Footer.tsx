import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-grafite text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="space-y-4">
              <img 
                src="https://res.cloudinary.com/dkobjk4qi/image/upload/v1760032673/logo-semfundo_snsezj.png" 
                alt="Lennure Lux Spa" 
                className="h-16 w-auto brightness-0 invert"
              />
              <p className="text-white/70 text-sm leading-relaxed">
                Bem-estar elegante e confidencial no coração de Lisboa.
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

            {/* Social */}
            <div>
              <h3 className="font-cormorant text-lg mb-4">Siga-nos</h3>
              <a 
                href="https://instagram.com/lennureluxspa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm">@lennureluxspa</span>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>© {new Date().getFullYear()} Lennure Lux Spa. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
