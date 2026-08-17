import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Maximize2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Space = () => {
  const { t } = useLanguage();
  
  const spaces = [
    {
      name: t('space.cabinet'),
      image: "https://cdn.altavance.media/dkobjk4qi/image/upload/v1760366130/gabinete_owiwzo.jpg",
      description: t('space.cabinetDesc')
    },
    {
      name: t('space.waiting'),
      image: "https://cdn.altavance.media/dkobjk4qi/image/upload/v1760433848/Salade_Espera_1_trln50.jpg",
      description: t('space.waitingDesc')
    },
    {
      name: t('space.reception'),
      image: "https://cdn.altavance.media/dkobjk4qi/image/upload/v1760366130/recec%CC%A7a%CC%83o_sf6cf5.jpg",
      description: t('space.receptionDesc')
    },
    {
      name: t('space.bathroom'),
      image: "https://cdn.altavance.media/dkobjk4qi/image/upload/v1760366130/casa_de_banho_g5huse.jpg",
      description: t('space.bathroomDesc')
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold title-gold-gradient mb-4">
              {t('space.title')}
            </h2>
            <p className="text-lg text-grafite/70 max-w-2xl mx-auto">
              {t('space.subtitle')}
            </p>
          </div>

          {/* Spaces Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {spaces.map((space, index) => (
              <div 
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-elegant group-hover:shadow-hover transition-elegant mb-4 cursor-pointer">
                      <img 
                        src={space.image} 
                        alt={space.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-elegant"
                        loading="lazy"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-grafite/80 via-grafite/0 to-transparent opacity-0 group-hover:opacity-100 transition-elegant flex items-center justify-center">
                        <Maximize2 className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl max-h-[90vh] p-0 overflow-hidden">
                    <div className="relative w-full h-full flex flex-col items-center justify-center p-6">
                      <img 
                        src={space.image} 
                        alt={space.name}
                        className="max-w-full max-h-[80vh] object-contain rounded-lg"
                      />
                      <div className="text-center mt-6 space-y-2">
                        <h3 className="text-2xl font-cormorant text-grafite">
                          {space.name}
                        </h3>
                        <p className="text-grafite/70">
                          {space.description}
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-cormorant text-grafite">
                    {space.name}
                  </h3>
                  <p className="text-sm text-grafite/60">
                    {space.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Space;
