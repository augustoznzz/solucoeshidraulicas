import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Sparkles, CheckCircle2 } from "lucide-react";
import work1 from "@/assets/work1.jpg";
import work2 from "@/assets/work2.jpg";
import work3 from "@/assets/work3.jpg";
import work4 from "@/assets/work4.jpg";

const Portfolio = () => {
  const { ref, isVisible } = useScrollAnimation();
  const works = [
    {
      title: "Instalação Completa de Banheiro",
      image: work1,
      description: "Modernização com louças e metais de primeira linha",
    },
    {
      title: "Sistema de Pia e Torneira",
      image: work2,
      description: "Instalação de encanamento sob medida para cozinha",
    },
    {
      title: "Aquecedor a Gás",
      image: work3,
      description: "Instalação profissional com todas as normas de segurança",
    },
    {
      title: "Box de Vidro e Chuveiro",
      image: work4,
      description: "Projeto completo de área molhada com acabamento premium",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-foreground/5 animate-gradient opacity-50" />
      
      <div ref={ref} className="container max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary animate-pulse-glow" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Nossos Trabalhos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos nossos projetos concluídos com excelência
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {works.map((work, index) => (
            <Card 
              key={index}
              className={`overflow-hidden glass-effect hover-lift transition-all duration-500 group ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <CheckCircle2 className="w-16 h-16 text-primary-foreground transform scale-0 group-hover:scale-100 transition-transform duration-500" />
                </div>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 left-0 w-16 h-1 bg-gradient-to-r from-primary to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                  {work.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  {work.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
