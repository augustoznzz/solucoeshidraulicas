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
  return <section id="contato" className="py-20 px-4 bg-card relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent-foreground/10 rounded-full blur-3xl animate-float" style={{
      animationDelay: "3s"
    }} />
      
      <div ref={ref} className="container max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <Card className={`p-6 md:p-8 border-gradient hover-lift transition-all duration-500 ${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-base">Nome</Label>
                <Input id="name" placeholder="Seu nome completo" required className="mt-2" />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-base">Telefone</Label>
                <Input id="phone" type="tel" placeholder="(00) 00000-0000" required className="mt-2" />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-base">E-mail</Label>
                <Input id="email" type="email" placeholder="seu@email.com" required className="mt-2" />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-base">Mensagem</Label>
                <Textarea id="message" placeholder="Descreva o serviço que você precisa..." rows={5} required className="mt-2" />
              </div>

              <Button type="submit" size="lg" className="w-full text-base md:text-lg py-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Enviar Mensagem
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </form>
          </Card>

          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'animate-slide-right' : 'opacity-0'}`} style={{
          animationDelay: "0.2s"
        }}>
            <Card className="p-6 md:p-8 glass-effect hover-lift group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <Phone className="w-6 h-6 text-primary group-hover:animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Telefone</h3>
                  <p className="text-muted-foreground">(00) 00000-0000</p>
                  <p className="text-muted-foreground">(00) 00000-0000</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 glass-effect hover-lift group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <Mail className="w-6 h-6 text-primary group-hover:animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">E-mail</h3>
                  <p className="text-muted-foreground">contato@solucoeshidraulicas.com.br</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 glass-effect hover-lift group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-primary group-hover:animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Localização</h3>
                  <p className="text-muted-foreground">Atendemos toda a região</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;