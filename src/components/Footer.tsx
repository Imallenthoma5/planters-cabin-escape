import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Packages", href: "/packages" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-nature-brown text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-nature-green to-nature-green-light py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Get our News Letter.</h2>
            <p className="text-lg mb-6 opacity-90">
              Get our newsletter for offers and news and events
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter Your Email ID"
                className="bg-white text-gray-900 flex-1"
              />
              <Button variant="secondary" className="bg-blue-600 hover:bg-blue-700 text-white">
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand & Description */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl font-bold text-secondary">
                  🌿 Planters Cabin
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Enjoy the moderate chill climate of Kuttikkanam. Simply sit and do nothing,
                try out your culinary expertise at our well equipped kitchen, experience
                the cardamom plantations nearby, take a stroll in the green turf, click
                beautiful photographs. Planters cabin beckones you.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-white hover:text-secondary">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-secondary">
                  <Instagram className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Menu */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Menu</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">
                      Near MRS school, Kuttikkanam, Peermade,
                      <br />
                      Idukki, Kerala
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-secondary" />
                  <a href="tel:+916238690153" className="text-gray-300 hover:text-secondary">
                    +91 6238 690 153
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-secondary" />
                  <a href="mailto:info@planterscabin.com" className="text-gray-300 hover:text-secondary">
                    info@planterscabin.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Planters Cabin. All rights reserved. | Designed with ❤️ for nature lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;