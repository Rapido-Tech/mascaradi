import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  Shield, 
  Wrench, 
  FileText, 
  HeadphonesIcon,
  ArrowRight,
  CheckCircle 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Flexible Financing",
      description: "Get approved for auto loans with competitive rates and flexible payment terms.",
      features: ["Low interest rates", "Quick approval", "Flexible terms"],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Shield,
      title: "Extended Warranty",
      description: "Comprehensive coverage for your peace of mind with our extended warranty plans.",
      features: ["Comprehensive coverage", "Nationwide service", "24/7 roadside assistance"],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Professional maintenance and repair services by certified technicians.",
      features: ["Certified technicians", "Genuine parts", "Service guarantees"],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: FileText,
      title: "Documentation Help",
      description: "We handle all paperwork including registration, insurance, and transfer documents.",
      features: ["Complete paperwork", "Insurance assistance", "Fast processing"],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            More Than Just <span className="text-gradient">Car Sales</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive automotive services to ensure your car buying 
            and ownership experience is seamless and worry-free.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="group card-premium hover:shadow-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className={`${service.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-6 w-6 ${service.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button variant="ghost" className="w-full justify-between p-0 h-auto font-medium text-primary hover:text-primary-hover">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Support CTA */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-center text-primary-foreground">
          <div className="max-w-2xl mx-auto">
            <HeadphonesIcon className="h-12 w-12 mx-auto mb-4 text-accent" />
            <h3 className="text-2xl font-bold mb-4">
              Need Help? We're Here for You
            </h3>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              Our dedicated customer service team is available to assist you with any questions 
              about our vehicles, financing options, or services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg">
                Call +254 700 123 456
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-primary-foreground hover:bg-white hover:text-primary">
                Schedule Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;