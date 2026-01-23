import { useLanguage } from "@/contexts/LanguageContext";

const VideoTour = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-bronze via-gold-dark to-gold">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light text-cream mb-4">
            <span className="text-gradient-gold">{t('videoTour.title')}</span>
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
      </div>
    </section>
  );
};

export default VideoTour;
