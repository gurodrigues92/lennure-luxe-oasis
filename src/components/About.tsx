import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-gradient-elegant">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
              <img 
                src="https://res.cloudinary.com/dkobjk4qi/image/upload/v1760366196/Refugio_3_ynxljb.jpg" 
                alt="Interior do Lennure Lux Spa"
                className="w-full h-full object-cover hover:scale-105 transition-elegant"
                loading="lazy"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-perola rounded-3xl -z-10"></div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight title-gold-gradient">
              {t('about.title')}
            </h2>
            
            <div className="space-y-4 text-grafite/80 text-lg leading-relaxed">
              <p>
                {t('about.description')}
              </p>
            </div>

            <div className="pt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-sm text-grafite/70">{t('about.privacy')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-sm text-grafite/70">{t('about.hygiene')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-sm text-grafite/70">{t('about.exclusive')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
