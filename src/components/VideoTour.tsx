import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const VideoTour = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-bronze via-gold-dark to-gold">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light text-white">
            {t('videoTour.title')}
          </h2>
        </div>

        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-elegant">
          <div className="aspect-video">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
            >
              <source 
                src="https://res.cloudinary.com/dkobjk4qi/video/upload/v1769090810/video-luxure_1_yty9jo.mp4" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-center mt-8 text-cream/70 font-lato text-sm md:text-base max-w-2xl mx-auto">
          {t('videoTour.subtitle')}
        </p>

        {/* Therapists Section */}
        <div className="mt-12 text-center">
          <h3 className="font-cormorant text-2xl md:text-3xl font-light text-white mb-6">
            {t('videoTour.therapistsTitle')}
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              variant="outline"
              size="lg"
              onClick={() => {
                const baseUrl = "https://www.lennureluxspa.com";
                const path = language === 'en' ? '/en/terapeutas-femininas' : '/terapeutas-femininas';
                window.open(`${baseUrl}${path}`, "_blank");
              }}
              className="min-w-[180px] bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white"
            >
              {t('differentials.female')}
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => {
                const baseUrl = "https://www.lennureluxspa.com";
                const path = language === 'en' ? '/en/terapeutas-masculinos' : '/terapeutas-masculinos';
                window.open(`${baseUrl}${path}`, "_blank");
              }}
              className="min-w-[180px] bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white"
            >
              {t('differentials.male')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTour;
