import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Wrench, 
  Shield, 
  Car, 
  FileCheck, 
  Clock, 
  Star,
  CheckCircle,
  Phone,
  Calendar,
  MapPin
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Full Service & Maintenance",
      description: "Comprehensive vehicle servicing by certified technicians",
      features: ["Oil change & filter replacement", "Brake inspection & service", "Engine diagnostics", "Transmission service"],
      price: "From KES 8,500",
      duration: "2-4 hours"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Extended Warranty",
      description: "Protect your investment with comprehensive warranty coverage",
      features: ["Engine & transmission coverage", "Electrical system protection", "24/7 roadside assistance", "Nationwide service network"],
      price: "From KES 85,000/year",
      duration: "1-5 years"
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Vehicle Inspection",
      description: "Thorough pre-purchase and periodic vehicle inspections",
      features: ["130-point inspection", "Detailed condition report", "Market value assessment", "Maintenance recommendations"],
      price: "KES 12,500",
      duration: "3-5 hours"
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Documentation Services",
      description: "Complete assistance with vehicle registration and transfers",
      features: ["Title transfers", "Registration renewal", "Import documentation", "Insurance facilitation"],
      price: "From KES 15,000",
      duration: "3-7 days"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "Certified Technicians",
      description: "Factory-trained experts with years of experience"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Quick Turnaround",
      description: "Most services completed same day or within 24 hours"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Guarantee",
      description: "All work backed by our comprehensive warranty"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Genuine Parts",
      description: "Only OEM and high-quality aftermarket parts used"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium <span className="text-accent">Service</span> Center
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Expert care for your vehicle with certified technicians, genuine parts, 
              and comprehensive service packages to keep you on the road.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" className="text-lg px-8">
                <Calendar className="h-5 w-5 mr-2" />
                Book Service
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive automotive services to keep your vehicle running at its best
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="card-premium h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center text-accent">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-2">
                        {service.duration}
                      </Badge>
                      <p className="text-lg font-bold text-accent">{service.price}</p>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Includes:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full mt-6" variant="outline">
                    Book This Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose <span className="text-gradient">Our Service</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Excellence in every aspect of automotive service and care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-accent">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Center Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Visit Our <span className="text-gradient">Service Center</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Mombasa Road, Industrial Area<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Operating Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 7:00 AM - 6:00 PM<br />
                      Saturday: 8:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Contact</h3>
                    <p className="text-muted-foreground">
                      Phone: +254 (0) 700 123 456<br />
                      Email: service@autokenyaprime.com
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <Button variant="premium" size="lg">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Service
                </Button>
                <Button variant="outline" size="lg">
                  Get Directions
                </Button>
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Emergency Service</h3>
              <p className="text-muted-foreground mb-6">
                24/7 roadside assistance and emergency repairs available
              </p>
              <Button variant="accent" size="lg" className="w-full">
                <Phone className="h-5 w-5 mr-2" />
                Emergency: +254 (0) 711 234 567
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;