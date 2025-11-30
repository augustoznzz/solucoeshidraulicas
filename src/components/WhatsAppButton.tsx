import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "5500000000000"; // Replace with actual WhatsApp number
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group animate-fade-in"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="relative">
        {/* Pulsing ring effect - múltiplos anéis */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse opacity-30" />
        
        {/* Botão principal com gradiente */}
        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110 flex items-center justify-center cursor-pointer group-hover:rotate-12">
          <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:scale-110 transition-transform duration-300" />
          
          {/* Badge de notificação */}
          <div className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        </div>
        
        {/* Tooltip no hover */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
          <div className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg whitespace-nowrap shadow-lg">
            Fale conosco no WhatsApp
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;