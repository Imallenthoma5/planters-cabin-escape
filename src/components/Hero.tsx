import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import heroImage from "@/assets/hero-resort.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Unwind with nature and
          <br />
          <span className="text-secondary">whisper to clouds</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
          Escape into Nature's Luxury at Planters Cabin, Kuttikkanam
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-3">
            BOOKING
          </Button>
          <Button
            variant="whatsapp"
            size="lg"
            className="text-lg px-8 py-3"
            onClick={() => window.open("https://wa.me/916238486792", "_blank")}
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </Button>
        </div>

        {/* Phone Contact */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
          <p className="text-lg mb-2">For Booking Call us:</p>
          <a
            href="tel:+916238486792"
            className="text-2xl font-bold text-secondary hover:text-secondary/80 transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="h-6 w-6" />
            +91 62384 86792
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;