import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { MapPin, Clock, Users } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      title: "Madammakkulam Waterfalls",
      description: "Experience the breathtaking beauty of cascading waterfalls surrounded by lush greenery.",
      duration: "1 Day",
      groupSize: "2-8 People",
      highlights: ["Scenic waterfall trek", "Natural swimming pool", "Photography spots"],
      image: "/api/placeholder/400/300"
    },
    {
      title: "Vagamon 1 Day Package",
      description: "Explore the rolling meadows and pine forests of the beautiful hill station.",
      duration: "1 Day",
      groupSize: "2-10 People",
      highlights: ["Meadow walks", "Pine forest exploration", "Adventure activities"],
      image: "/api/placeholder/400/300"
    },
    {
      title: "Panchalimedu 1 Day Package",
      description: "Discover ancient pilgrimage sites with panoramic mountain views.",
      duration: "1 Day",
      groupSize: "2-8 People",
      highlights: ["Historical sites", "Mountain views", "Cultural experience"],
      image: "/api/placeholder/400/300"
    },
    {
      title: "Thekkadi 1 Day Package",
      description: "Wildlife sanctuary experience with spice plantation visits.",
      duration: "1 Day",
      groupSize: "2-12 People",
      highlights: ["Wildlife spotting", "Spice gardens", "Boat rides"],
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-nature-green to-nature-green-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tour Packages</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Explore the best of Kerala with our carefully curated tour packages from Planters Cabin
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 left-4 bg-nature-green text-white px-4 py-2 rounded-lg">
                    <h3 className="text-lg font-bold">{pkg.title.split(' ').slice(-1)[0] !== 'Package' ? pkg.title : pkg.title.replace(' Package', '')}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-nature-green">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{pkg.groupSize}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Package Highlights:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {pkg.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-nature-green rounded-full"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="hero" className="flex-1">
                      Book Package
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-nature-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-nature-green">
            Ready for Your Adventure?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us to customize your perfect Kerala getaway or to learn more about our packages
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="lg"
              onClick={() => window.open("https://wa.me/916238690153", "_blank")}
            >
              WhatsApp for Booking
            </Button>
            <Button variant="outline" size="lg">
              Call +91 6238 690 153
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Packages;