import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { CheckCircle, Leaf, Mountain, Utensils, Wifi } from "lucide-react";

const About = () => {
  const amenities = [
    "Camp fire for Group gathering",
    "Delicious, but mouthwatering food items for better health",
    "Open & Indoor Barbeque",
    "Hiking & Trekking",
    "Free WiFi",
    "24/7 Room Service",
    "Mountain Views",
    "Eco-friendly Practices"
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-nature-green to-nature-green-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Planters Cabin</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Discover the story behind Kerala's most enchanting eco-resort
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-nature-green">
                Why Planters Cabin?
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-4">
                  When you wish to unwind from the hectic stressful life and be with nature,
                  talk to the clouds, play hide and seek with the unpredictable fog, watch
                  the sunset paint colours in the sky, watch the fauna living harmoniously
                  trespassing into the vicinity, live amidst the forest with no distractions
                  of day to day life.
                </p>
                <p className="mb-4">
                  Trek to the nearby peelikunnu which commands a 360 degree view, chill with
                  your near and dear ones and warm up in the specially designed camp fire spot
                  with wireless party speakers and music, bath in the natural pond in the monsoon,
                  breathe in the cool crispy air in the forest.
                </p>
                <p>
                  Enjoy the moderate chill climate of Kuttikkanam. Simply sit and do nothing,
                  try out your culinary expertise at our well equipped kitchen, experience the
                  cardamom plantations nearby, take a stroll in the green turf, click beautiful
                  photographs. Planters cabin beckones you.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/api/placeholder/600/400"
                alt="Resort view"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nature-green/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Amenities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-nature-green">
              We are providing
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {amenities.map((amenity, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <CheckCircle className="h-8 w-8 text-nature-green mx-auto mb-3" />
                  <p className="text-sm font-medium">{amenity}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-nature-cream">
              <Leaf className="h-12 w-12 text-nature-green mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Eco-Friendly</h3>
              <p className="text-gray-600">
                Sustainable practices that preserve the natural beauty of Kuttikkanam
              </p>
            </Card>
            
            <Card className="p-8 text-center bg-nature-cream">
              <Mountain className="h-12 w-12 text-nature-green mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Hill Station Views</h3>
              <p className="text-gray-600">
                Breathtaking panoramic views of the Western Ghats and tea plantations
              </p>
            </Card>
            
            <Card className="p-8 text-center bg-nature-cream">
              <Utensils className="h-12 w-12 text-nature-green mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Kerala Cuisine</h3>
              <p className="text-gray-600">
                Authentic local flavors prepared with fresh, organic ingredients
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default About;