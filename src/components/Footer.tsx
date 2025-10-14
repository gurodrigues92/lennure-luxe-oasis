import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
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
                {t('footer.description')}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-cormorant text-lg mb-4">{t('footer.title')}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/politica-privacidade" className="text-white/70 hover:text-white transition-colors">
                    {t('footer.privacy')}
                  </Link>
                </li>
                <li>
                  <Link to="/termos-uso" className="text-white/70 hover:text-white transition-colors">
                    {t('footer.terms')}
                  </Link>
                </li>
                <li>
                  <Link to="/politica-cancelamento" className="text-white/70 hover:text-white transition-colors">
                    {t('footer.cancellation')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Seção Institucional */}
          <div className="border-t border-white/10 pt-8 mb-8">
            <div className="bg-white/5 rounded-lg p-6 space-y-3">
              <h4 className="font-cormorant text-lg text-gold-light mb-3">
                {t('footer.institutional')}
              </h4>
              
              <div className="space-y-2 text-sm text-white/70 leading-relaxed">
                <p>
                  {t('footer.institutionalText')}
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>© {new Date().getFullYear()} Lennure Lux Spa · {t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
