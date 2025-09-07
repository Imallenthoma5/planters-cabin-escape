import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        variant="whatsapp"
        size="icon"
        className="w-14 h-14 shadow-2xl animate-pulse hover:animate-none"
        aria-label="Contact us on WhatsApp"
      >
        <a href="https://wa.me/916238486792" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
          <MessageCircle className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppFloat;