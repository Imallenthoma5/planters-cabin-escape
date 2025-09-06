import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { TreePine, Droplets, Mountain } from "lucide-react";

const Kuttikkanam = () => {
  const attractions = [
    {
      title: "Pine Forest",
      description: "Walk through the enchanting pine forests with towering trees creating a natural cathedral.",
      icon: TreePine,
      image: "/api/placeholder/400/300"
    },
    {
      title: "Valanjanganam Water Falls",
      description: "Experience the pristine beauty of cascading waterfalls in the heart of nature.",
      icon: Droplets,
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-nature-green to-nature-green-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Kuttikkanam</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Discover the hidden gem of Kerala's Western Ghats
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-nature-green text-center">History</h2>
            
            <div className="prose prose-lg text-gray-700 space-y-6">
              <p>
                Unlike the popular hill stations, Kuttikkanam is not a frequented tourist location and this gives the place an
                infatuating sleepy town feel. Kuttikkanam is different from other hill stations for the enchanting wild flowers with
                different hues blooming all over the hills, the mystical pine forests, mighty hills, alluring streams, rolling lush green
                tea plantations and pleasant weather throughout the year. Kuttikkanam which was covered with thick forest till the
                18 th century came into prominence when the British planters.
              </p>
              
              <p>
                The Victorian Bungalows, long standing cypress trees, pine forests, well tended tea and cardamom plantations,
                Peermade golf club which is part of Tyford estate are a living testimony to the glorious bygone era of British
                traditions and lifestyle. The CSI church consecrated in 1869 and still well maintained houses 38 graves of British
                men and Col Munroes horse Downy which died in an accident. It's a treasure cove of history of the glorious British
                past. The Aerial ropeway Ltd, the first public limited company in Travancore, an aerial ropeway constructed to ferry
                goods though has been damaged without any trace, the KK road constructed in 1863 is still the lifeline to
                Kuttikkanam. Following are the Places of interest in Kuttikkanam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions */}
      <section className="py-16 bg-nature-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-nature-green">
            Places of Interest
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {attractions.map((attraction, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={attraction.image}
                  alt={attraction.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <attraction.icon className="h-8 w-8 text-nature-green" />
                    <h3 className="text-2xl font-bold text-nature-green">{attraction.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{attraction.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-white shadow-lg">
              <Mountain className="h-12 w-12 text-nature-green mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-nature-green">Western Ghats</h3>
              <p className="text-gray-600">
                Located in the heart of the Western Ghats, offering spectacular mountain views and biodiversity
              </p>
            </Card>
            
            <Card className="p-8 text-center bg-white shadow-lg">
              <TreePine className="h-12 w-12 text-nature-green mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-nature-green">Tea Plantations</h3>
              <p className="text-gray-600">
                Rolling green tea gardens that stretch as far as the eye can see, perfect for peaceful walks
              </p>
            </Card>
            
            <Card className="p-8 text-center bg-white shadow-lg">
              <Droplets className="h-12 w-12 text-nature-green mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-nature-green">Pleasant Climate</h3>
              <p className="text-gray-600">
                Year-round pleasant weather with cool temperatures and refreshing mountain air
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

export default Kuttikkanam;