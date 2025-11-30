import { Card } from "@/components/ui/card";
import cleberImg from "@/assets/cleber.jpg";
import marcosImg from "@/assets/marcos.jpg";
import { Award, ThumbsUp } from "lucide-react";
import { useEffect, useState } from "react";

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Executa a animação imediatamente ao montar o componente
    setIsVisible(true);
  }, []);
  const partners = [
    {
      name: "Cléber",
      image: cleberImg,
      description: "Especialista em instalações hidráulicas residenciais e comerciais",
    },
    {
      name: "Marcos",
      image: marcosImg,
      description: "Especialista em manutenção e reparos de sistemas hidráulicos",
    },
  ];

  return (
    <section id="socios" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-card relative overflow-hidden">
      {/* Decorative background - reduzido em mobile */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-accent-foreground/5 rounded-full blur-3xl" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
            <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-pulse-glow" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-foreground px-2">
            Nossos Profissionais
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Experiência e compromisso em cada serviço
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <Card 
              key={partner.name}
              className={`overflow-hidden border-gradient hover-lift transition-all duration-500 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className="aspect-square overflow-hidden relative group">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 sm:pb-6">
                  <ThumbsUp className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
              </div>
              <div className="p-4 sm:p-6 md:p-8 text-center relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-foreground">
                  {partner.name}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                  {partner.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
