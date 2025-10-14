import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

const Philosophy = () => {
  const { t } = useLanguage();
  
  const values = [
    t('philosophy.values.presence'),
    t('philosophy.values.respect'),
    t('philosophy.values.privacy'),
    t('philosophy.values.quality'),
    t('philosophy.values.personalization'),
    t('philosophy.values.elegance')
  ];

  return (
    <section className="py-24 bg-cream/50">
      {/* Marquee full-width - sem bordas laterais */}
      <div className="overflow-hidden w-full mb-16">
        <div className="flex animate-marquee gap-8 whitespace-nowrap">
          {/* Renderizar 4 cópias para cobertura total em telas grandes */}
          {[...Array(4)].map((_, copyIndex) => (
            <React.Fragment key={`copy-${copyIndex}`}>
              {values.map((value, index) => (
                <React.Fragment key={`${copyIndex}-${index}`}>
                  <span className="text-2xl md:text-4xl font-cormorant text-grafite font-light">
                    {value}
                  </span>
                  <span className="text-dourado text-2xl md:text-4xl">·</span>
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Container centralizado para quote e texto */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">

          {/* Quote */}
          <div className="animate-fade-in-up space-y-6">
            <div className="w-16 h-1 bg-dourado mx-auto"></div>
            
            <blockquote className="text-xl md:text-2xl font-cormorant text-grafite/90 leading-relaxed italic">
              "{t('philosophy.quote')}"
            </blockquote>
            
            <div className="w-16 h-1 bg-dourado mx-auto"></div>
          </div>

          {/* Philosophy text */}
          <p className="text-lg text-grafite/70 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            {t('philosophy.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
