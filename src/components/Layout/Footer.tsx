import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Clock,
  Send
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Inventory", href: "#inventory" },
    { name: "Financing", href: "#financing" },
    { name: "Trade-In", href: "#trade" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Car Sales", href: "#sales" },
    { name: "Auto Financing", href: "#financing" },
    { name: "Extended Warranty", href: "#warranty" },
    { name: "Maintenance", href: "#maintenance" },
    { name: "Insurance", href: "#insurance" },
  ];

  const brands = [
    { name: "BMW", href: "#bmw" },
    { name: "Mercedes-Benz", href: "#mercedes" },
    { name: "Audi", href: "#audi" },
    { name: "Toyota", href: "#toyota" },
    { name: "Nissan", href: "#nissan" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-accent">Mascardi</h3>
                <p className="text-xs text-primary-foreground/80">Premium Car Dealership</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 leading-relaxed">
              Kenya's premier destination for luxury and premium vehicles. 
              We've been serving customers with exceptional service for over 15 years.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">+254 700 123 456</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">info@mascardi.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">Westlands, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-accent" />
                <span className="text-sm">Mon-Sat: 8AM-7PM, Sun: 10AM-5PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Our Services</h4>
            <nav className="space-y-2">
              {services.map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  {service.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter & Brands */}
          <div className="space-y-6">
            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-accent">Stay Updated</h4>
              <p className="text-primary-foreground/80 text-sm">
                Get the latest car deals and updates delivered to your inbox.
              </p>
              <div className="flex gap-2">
                <Input
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="accent" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Popular Brands */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-accent">Popular Brands</h4>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <a
                    key={brand.name}
                    href={brand.href}
                    className="text-xs bg-white/10 hover:bg-accent hover:text-accent-foreground px-3 py-1 rounded-full transition-colors"
                  >
                    {brand.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-primary-foreground/80 text-sm text-center md:text-left">
            © {currentYear} Mascardi. All rights reserved. | Privacy Policy | Terms of Service
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-primary-foreground/80">Follow us:</span>
            <div className="flex gap-2">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 bg-white/10 hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-colors"
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;