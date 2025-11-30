import { Droplet } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-8 sm:py-12 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent animate-gradient opacity-30" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
          <div className="flex items-center gap-2 sm:gap-3 group">
            <Droplet className="w-6 h-6 sm:w-8 sm:h-8 group-hover:text-primary transition-colors animate-float" />
            <span className="text-xl sm:text-2xl font-bold font-serif group-hover:gradient-text transition-all">Soluções Hidráulicas</span>
          </div>
          
          <p className="text-xs sm:text-sm md:text-base max-w-md opacity-90 px-4">
            Serviços profissionais de hidráulica com qualidade e garantia
          </p>

          <div className="pt-4 sm:pt-6 border-t border-secondary-foreground/20 w-full">
            <p className="text-xs sm:text-sm opacity-75">
              © {currentYear} Soluções Hidráulicas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
