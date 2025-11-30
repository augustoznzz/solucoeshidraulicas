import { Droplet } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent animate-gradient opacity-30" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex items-center gap-3 group">
            <Droplet className="w-8 h-8 group-hover:text-primary transition-colors animate-float" />
            <span className="text-2xl font-bold font-serif group-hover:gradient-text transition-all">Soluções Hidráulicas</span>
          </div>
          
          <p className="text-sm md:text-base max-w-md opacity-90">
            Serviços profissionais de hidráulica com qualidade e garantia
          </p>

          <div className="pt-6 border-t border-secondary-foreground/20 w-full">
            <p className="text-sm opacity-75">
              © {currentYear} Soluções Hidráulicas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
