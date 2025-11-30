import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { toast } from "sonner";
const Contact = () => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada! Entraremos em contato em breve.");
  };
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

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          <Card className={`p-3 sm:p-4 md:p-6 lg:p-8 border-gradient hover-lift transition-all duration-500 ${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6">
              <div>
                <Label htmlFor="name" className="text-xs sm:text-sm md:text-base">Nome</Label>
                <Input id="name" placeholder="Seu nome completo" required className="mt-1.5 sm:mt-2 text-sm sm:text-base h-9 sm:h-10 md:h-11" />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-xs sm:text-sm md:text-base">Telefone</Label>
                <Input id="phone" type="tel" placeholder="(00) 00000-0000" required className="mt-1.5 sm:mt-2 text-sm sm:text-base h-9 sm:h-10 md:h-11" />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-xs sm:text-sm md:text-base">E-mail</Label>
                <Input id="email" type="email" placeholder="seu@email.com" required className="mt-1.5 sm:mt-2 text-sm sm:text-base h-9 sm:h-10 md:h-11" />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-xs sm:text-sm md:text-base">Mensagem</Label>
                <Textarea id="message" placeholder="Descreva o serviço que você precisa..." rows={4} required className="mt-1.5 sm:mt-2 text-sm sm:text-base min-h-[100px] sm:min-h-[120px]" />
              </div>

              <Button type="submit" size="lg" className="w-full text-xs sm:text-sm md:text-base lg:text-lg py-4 sm:py-5 md:py-6 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 relative overflow-hidden group mt-2 sm:mt-4">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Enviar Mensagem
                  <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </form>
          </Card>

          <div className={`space-y-3 sm:space-y-4 md:space-y-6 transition-all duration-700 ${isVisible ? 'animate-slide-right' : 'opacity-0'}`} style={{
          animationDelay: "0.2s"
        }}>
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
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;