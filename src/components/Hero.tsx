import { Button } from "@/components/ui/button";
import { Droplet, Waves } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-primary/5 animate-gradient opacity-70" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-foreground/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <Waves className="absolute top-1/4 right-1/4 w-16 h-16 text-primary/5 animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container max-w-6xl relative z-10 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-primary/10 backdrop-blur-sm animate-pulse-glow animate-float">
          <Droplet className="w-10 h-10 text-primary" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          <span className="gradient-text">Soluções Hidráulicas</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Serviços profissionais de hidráulica com qualidade, pontualidade e garantia
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <Button 
            size="lg" 
            className="w-full sm:w-auto text-base md:text-lg px-8 py-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            onClick={() => scrollToSection("contato")}
          >
            <span className="relative z-10">Solicitar Orçamento</span>
            <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="w-full sm:w-auto text-base md:text-lg px-8 py-6 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
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
