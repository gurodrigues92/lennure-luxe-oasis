import { Star } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Walmir Melo",
    location: "James PT",
    text: "Experiência excelente no Lennure Lux Spa. Ambiente muito bonito, limpo e acolhedor. Profissionais atenciosas e preparadas, que proporcionam um atendimento de alto nível e relaxamento verdadeiro. Um espaço ideal para quem procura bem-estar, tranquilidade e cuidado com todos os detalhes. Recomendo totalmente.",
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
    name: "Anonymous Client",
    location: "International",
    text: "Best experience I've had in a spa. The location is perfect and the staff is amazing.. definitely gonna come back!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-champagne/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold title-gold-gradient mb-4">
              O Que Dizem os Nossos Clientes
            </h2>
            <p className="text-lg text-grafite/70">
              Experiências de quem já nos visitou
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
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
