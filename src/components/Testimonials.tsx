import { Star } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";

const testimonials = [
  {
    name: "Gabriel Ribeiro",
    location: "Lisboa",
    text: "Experiência no Lennure Lux Spa, muito agradável, espaço acolhedor e lindo, atendido pela terapeuta Lavínia, excelente no seu trabalho e muito simpática, adaptativa e profissional, sem palavras para descrever a terapeuta. Voltarei por ela 100%",
    rating: 5
  },
  {
    name: "Jose N",
    location: "Lisboa",
    text: "Experiência no Lennure Lux Spa, muito agradável, atendido pela terapeuta Mia, excelente momento de relaxamento que me proporcionou",
    rating: 5
  },
  {
    name: "Laís Silva",
    location: "Lisboa",
    text: "O Lennure Lux Spa é um espaço impecável. Ambiente elegante, limpo e muito tranquilo. Desde a receção até o final do atendimento, tudo é feito com profissionalismo e atenção. Um lugar perfeito para relaxar e cuidar do corpo e da mente.",
    rating: 5
  },
  {
    name: "Ayme Testoni",
    location: "Lisboa",
    text: "Fomos atendidos pela terapeuta Luana e gostei muito. Profissional atenciosa, ambiente calmo e experiência excelente.",
    rating: 5
  },
  {
    name: "Alyce Lima",
    location: "Lisboa",
    text: "Fui com o meu namorado e fomos atendidos pela terapeuta Luana. Profissional excelente, ambiente calmo e muito acolhedor. Saímos totalmente relaxados.",
    rating: 5
  },
  {
    name: "Jhonathan Barba",
    location: "Lisboa",
    text: "Experiência excelente no Lennure Lux Spa. Ambiente muito bonito, limpo e acolhedor. Profissionais atenciosas e preparadas, que proporcionam um atendimento de alto nível e relaxamento verdadeiro. Um espaço ideal para quem procura bem-estar, tranquilidade e cuidado com todos os detalhes. Recomendo totalmente.",
    rating: 5
  },
  {
    name: "Islene Marques dos Santos",
    location: "Lisboa",
    text: "Amei o spa, ótimo atendimento, desde a recepção até a finalização. Fiz um atendimento com meu marido, com os terapeutas Paul e Nina! Recomendo",
    rating: 5
  },
  {
    name: "Filipe Larsson",
    location: "Lisboa",
    text: "5 Estrelas. O atendimento, a massagem e o espaço.",
    rating: 5
  },
  {
    name: "Walmir Melo",
    location: "James PT",
    text: "A melhor experiência que já tive em um spa. A localização é perfeita e a equipe é incrível... com certeza voltarei!",
    rating: 5
  },
  {
    name: "Aleksandr de Portugal",
    location: "Portugal",
    text: "Tive uma sessão com a Lavinia, uma terapeuta brasileira, e foi ótima. Ela foi simpática, atenciosa e me deixou à vontade imediatamente. Toda a experiência foi pessoal e sem pressa, e ficou claro que ela sabe o que está fazendo. Saí me sentindo relaxado e muito satisfeito com a consulta.",
    rating: 5
  }
];

const Testimonials = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-gradient-to-b from-champagne/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold title-gold-gradient mb-4">
              {t('testimonials.title')}
            </h2>
            <p className="text-lg text-grafite/70">
              {t('testimonials.subtitle')}
            </p>
          </div>

          {/* Testimonials Carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div 
                    className="bg-white rounded-2xl p-8 shadow-elegant hover:shadow-hover transition-elegant h-full flex flex-col"
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-dourado text-dourado" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-grafite/80 leading-relaxed mb-6 italic flex-grow">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="border-t border-perola pt-4">
                      <p className="font-medium text-grafite">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-grafite/60">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Buttons */}
            <CarouselPrevious className="-left-4 md:-left-12" />
            <CarouselNext className="-right-4 md:-right-12" />
          </Carousel>

          {/* Google Reviews Button */}
          <div className="text-center mt-12 animate-fade-in">
            <a
              href="https://share.google/xG5SjK3YasJRDNyzt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-dourado via-dourado to-dourado/90 hover:from-dourado/90 hover:to-dourado text-white rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Star className="w-5 h-5 fill-white" />
              <span>{t('testimonials.cta')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
