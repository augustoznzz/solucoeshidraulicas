import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
const WhatsAppButton = () => {
  const whatsappNumber = "5500000000000"; // Replace with actual WhatsApp number
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  return <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 animate-fade-in group">
      <div className="relative">
        {/* Pulsing ring effect */}
        <div className="absolute inset-0 rounded-full bg-[#25D366]" />
        <Button size="lg" aria-label="Fale conosco no WhatsApp" className="transition-all">
          <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
        </Button>
      </div>
    </a>;
};
export default WhatsAppButton;