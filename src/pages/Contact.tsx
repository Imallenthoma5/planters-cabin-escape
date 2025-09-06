import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-nature-green to-nature-green-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Plan your perfect getaway at Planters Cabin. We're here to help make your stay memorable.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-nature-green">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Your Name (required)
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Your Email (required)
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Your Phone (required)
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Your Location
                      </label>
                      <Input
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full"
                      placeholder="Write Here..."
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" size="lg">
                    CONTACT NOW
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-nature-green">CONTACT ADDRESS</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-nature-green mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700">
                        Near MRS school,
                        <br />
                        Kuttikkanam, Peermade,
                        <br />
                        Idukki, Kerala
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-nature-green">CALL US</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-nature-green" />
                    <div>
                      <p className="text-sm text-gray-600">Mob:</p>
                      <a
                        href="tel:+916238486792"
                        className="text-lg font-semibold text-nature-green hover:text-nature-green-light"
                      >
                        +91 6238 486 792
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-nature-green" />
                    <div>
                      <p className="text-sm text-gray-600">Landline :</p>
                      <a
                        href="tel:+914869200109"
                        className="text-lg font-semibold text-nature-green hover:text-nature-green-light"
                      >
                        +91 4869 200109
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-nature-green">EMAIL US</h3>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-nature-green" />
                  <a
                    href="mailto:info@planterscabin.com"
                    className="text-lg text-nature-green hover:text-nature-green-light"
                  >
                    info@planterscabin.com
                  </a>
                </div>
              </Card>

              <Button
                variant="whatsapp"
                size="lg"
                className="w-full"
                onClick={() => window.open("https://wa.me/916238486792", "_blank")}
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-nature-green">Find Us</h2>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-600">Interactive Map will be integrated here</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Contact;