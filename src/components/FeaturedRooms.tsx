import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import roomImage from "@/assets/room-deluxe.jpg";
import campfireImage from "@/assets/campfire.jpg";
import diningImage from "@/assets/kerala-cuisine.jpg";

const FeaturedRooms = () => {
  const features = [
    {
      title: "BEDROOM",
      description: "Nestle in the cosy bed to experience the bliss.",
      image: roomImage,
    },
    {
      title: "CAMPFIRE",
      description: "When dusk falls, Warmup around the campfire spot.",
      image: campfireImage,
    },
    {
      title: "THE GREAT DINING",
      description: "Try out your culinary expertise.",
      image: diningImage,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-nature-cream to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nature-green/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 bg-nature-green text-white">
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="mb-4 opacity-90">{feature.description}</p>
                
                <div className="flex gap-2">
                  <Button variant="golden" size="sm" className="flex-1">
                    BOOK NOW
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 border-white text-white hover:bg-white hover:text-nature-green">
                    ENQUIRE
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;