import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/916238486792", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="whatsapp"
        size="icon"
        className="w-14 h-14 shadow-2xl animate-pulse hover:animate-none"
        onClick={handleWhatsAppClick}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;