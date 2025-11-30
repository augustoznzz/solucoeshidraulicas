import { Button } from "@/components/ui/button";
import { Droplet, Waves } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-primary/5 animate-gradient opacity-70" />
      
      {/* Floating decorative elements - ocultos em mobile para melhor performance */}
      <div className="hidden sm:block absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="hidden sm:block absolute bottom-20 right-10 w-40 h-40 bg-accent-foreground/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <Waves className="hidden md:block absolute top-1/4 right-1/4 w-16 h-16 text-primary/5 animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container max-w-6xl relative z-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-6 sm:mb-8 rounded-full bg-primary/10 backdrop-blur-sm animate-pulse-glow animate-float">
          <Droplet className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 px-2 animate-slide-up">
          <span className="gradient-text">Soluções Hidráulicas</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto font-light px-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Serviços profissionais de hidráulica com qualidade, pontualidade e garantia
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <Button 
            size="lg" 
            className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 relative overflow-hidden group"
            onClick={() => scrollToSection("contato")}
          >
            <span className="relative z-10">Solicitar Orçamento</span>
            <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
            onClick={() => scrollToSection("portfolio")}
          >
            Ver Nossos Trabalhos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
