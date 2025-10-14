import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Se estiver no topo (primeiros 100px), sempre mostrar
      if (currentScrollY < 100) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }
      
      // Detectar direção do scroll
      if (currentScrollY > lastScrollY) {
        // Rolando para baixo - esconder
        setIsVisible(false);
      } else {
        // Rolando para cima - mostrar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg flex gap-2 transition-all duration-300 ${
      isVisible 
        ? 'translate-y-0 opacity-100' 
        : '-translate-y-full opacity-0 pointer-events-none'
    }`}>
      <button
        onClick={() => setLanguage('pt')}
        className={`w-8 h-8 rounded-full overflow-hidden transition-all ${
          language === 'pt' 
            ? 'opacity-100 ring-2 ring-dourado' 
            : 'opacity-60 hover:opacity-80'
        }`}
        aria-label="Português"
        title="Português"
      >
        <img 
          src="https://flagcdn.com/w40/pt.png" 
          alt="Português" 
          className="w-full h-full object-cover"
        />
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`w-8 h-8 rounded-full overflow-hidden transition-all ${
          language === 'en' 
            ? 'opacity-100 ring-2 ring-dourado' 
            : 'opacity-60 hover:opacity-80'
        }`}
        aria-label="English"
        title="English"
      >
        <img 
          src="https://flagcdn.com/w40/us.png" 
          alt="English" 
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  );
};

export default LanguageSelector;
