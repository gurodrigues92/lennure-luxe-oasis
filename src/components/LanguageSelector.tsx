import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg flex gap-2">
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
