import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  
  const whatsappNumber = "5500000000000"; // Replace with actual WhatsApp number
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  return <section id="contato" className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 bg-card relative overflow-hidden">
      {/* Floating decorative elements - reduzidos em mobile */}
      <div className="absolute top-20 left-10 w-24 h-24 sm:w-48 sm:h-48 bg-primary/10 rounded-full blur-3xl animate-float hidden sm:block" />
      <div className="absolute bottom-20 right-10 w-24 h-24 sm:w-48 sm:h-48 bg-accent-foreground/10 rounded-full blur-3xl animate-float hidden sm:block" style={{
      animationDelay: "3s"
    }} />
      
      <div ref={ref} className="container max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-foreground px-2">
            Entre em Contato
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-4">
            Estamos prontos para atender você
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`space-y-3 sm:space-y-4 md:space-y-6 transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <Card className="p-3 sm:p-4 md:p-6 lg:p-8 glass-effect hover-lift group">
              <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary group-hover:animate-pulse" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 text-foreground">Telefone</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground break-words">(00) 00000-0000</p>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground break-words">(00) 00000-0000</p>
                </div>
              </div>
            </Card>

            <Card className="p-3 sm:p-4 md:p-6 lg:p-8 glass-effect hover-lift group">
              <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary group-hover:animate-pulse" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 text-foreground">E-mail</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground break-words">contato@solucoeshidraulicas.com.br</p>
                </div>
              </div>
            </Card>

            <Card className="p-3 sm:p-4 md:p-6 lg:p-8 glass-effect hover-lift group">
              <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary group-hover:animate-pulse" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 text-foreground">Localização</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">Atendemos toda a região</p>
                </div>
              </div>
            </Card>

            {/* Botão WhatsApp destacado */}
            <Card className="p-4 sm:p-6 md:p-8 border-gradient hover-lift group">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-foreground">
                  Fale Conosco no WhatsApp
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-6">
                  Clique no botão abaixo ou use o botão flutuante no canto da tela
                </p>
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-sm sm:text-base md:text-lg">Abrir WhatsApp</span>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;