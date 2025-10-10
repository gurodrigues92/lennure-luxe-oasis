const About = () => {
  return (
    <section className="py-24 bg-gradient-elegant">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
              <img 
                src="https://res.cloudinary.com/dkobjk4qi/image/upload/v1760040792/WhatsApp_Image_2025-10-09_at_16.42.46_j28qs0.jpg" 
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
              Um refúgio de bem-estar no centro de Lisboa
            </h2>
            
            <div className="space-y-4 text-grafite/80 text-lg leading-relaxed">
              <p>
                O <span className="font-medium text-grafite">Lennure Lux Spa</span>, localizado no centro de Lisboa, 
                é um refúgio de bem-estar com privacidade total.
              </p>
              
              <p>
                Gabinetes com duche privativo, enxoval individual e protocolos de higiene rigorosos 
                garantem uma experiência única e segura.
              </p>
              
              <p>
                Sessões personalizadas e atendimento sem sobreposições — porque cada momento 
                merece dedicação exclusiva.
              </p>
            </div>

            <div className="pt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-sm text-grafite/70">Privacidade Total</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-sm text-grafite/70">Higiene Rigorosa</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-sm text-grafite/70">Atendimento Exclusivo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
