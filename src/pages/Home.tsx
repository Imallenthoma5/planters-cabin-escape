import Hero from "@/components/Hero";
import FeaturedRooms from "@/components/FeaturedRooms";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Home = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedRooms />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Home;