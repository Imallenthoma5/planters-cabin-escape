import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import heroImage from "@/assets/hero-resort.jpg";
import roomImage from "@/assets/room-deluxe.jpg";
import campfireImage from "@/assets/campfire.jpg";
import diningImage from "@/assets/kerala-cuisine.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: heroImage, alt: "Resort exterior view", category: "Exterior" },
    { src: roomImage, alt: "Deluxe room interior", category: "Rooms" },
    { src: campfireImage, alt: "Campfire area", category: "Activities" },
    { src: diningImage, alt: "Kerala cuisine", category: "Dining" },
    { src: heroImage, alt: "Mountain landscape", category: "Nature" },
    { src: roomImage, alt: "Premium suite", category: "Rooms" },
    { src: campfireImage, alt: "Evening campfire", category: "Activities" },
    { src: diningImage, alt: "Traditional dining", category: "Dining" },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-secondary text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-nature-brown">OUR GALLERY</h1>
          <p className="text-xl text-nature-brown/80 max-w-2xl mx-auto">
            Explore the beauty of Planters Cabin through our stunning collection of images
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
            onClick={prevImage}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
            onClick={nextImage}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
          
          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="max-w-full max-h-full object-contain"
          />
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
            <p className="text-lg font-medium">{images[selectedImage].alt}</p>
            <p className="text-sm opacity-75">
              {selectedImage + 1} of {images.length}
            </p>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Gallery;