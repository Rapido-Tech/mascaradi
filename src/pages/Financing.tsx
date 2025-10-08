import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, CreditCard, FileText, Clock, CheckCircle, Percent } from "lucide-react";

const Financing = () => {
  const loanOptions = [
    {
      title: "Standard Auto Loan",
      rate: "8.5% - 12.5%",
      term: "2-7 years",
      downPayment: "20% minimum",
      description: "Traditional auto financing with competitive rates",
      features: ["Fixed interest rates", "Flexible terms", "Early payment options", "No prepayment penalties"]
    },
    {
      title: "Premium Vehicle Financing",
      rate: "7.5% - 10.5%",
      term: "3-8 years",
      downPayment: "15% minimum",
      description: "Specialized financing for luxury and premium vehicles",
      features: ["Lower rates for qualified buyers", "Extended terms", "Balloon payment options", "GAP insurance available"]
    },
    {
      title: "Certified Pre-Owned Financing",
      rate: "9.5% - 13.5%",
      term: "2-6 years",
      downPayment: "25% minimum",
      description: "Financing options for certified used vehicles",
      features: ["Warranty protection", "Vehicle history reports", "Inspection guarantees", "Competitive rates"]
    }
  ];

  const benefits = [
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Easy Calculator",
      description: "Get instant payment estimates with our online calculator"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Quick Approval",
      description: "Get pre-approved in minutes with our streamlined process"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Simple Documentation",
      description: "Minimal paperwork required for faster processing"
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Flexible Terms",
      description: "Choose payment terms that fit your budget and lifestyle"
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
              Car <span className="text-accent">Financing</span> Made Easy
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get competitive rates and flexible terms to drive your dream car today. 
              Pre-approval in minutes with our trusted lending partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" className="text-lg px-8">
                <Calculator className="h-5 w-5 mr-2" />
                Calculate Payment
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                Get Pre-Approved
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Financing <span className="text-gradient">Options</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of financing solutions designed to meet your needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {loanOptions.map((option, index) => (
              <Card key={index} className="card-premium h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-xl">{option.title}</CardTitle>
                    <Badge variant="secondary" className="bg-accent/10 text-accent-foreground">
                      <Percent className="h-3 w-3 mr-1" />
                      {option.rate}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-muted-foreground">Term:</span>
                      <p className="font-semibold">{option.term}</p>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">Down Payment:</span>
                      <p className="font-semibold">{option.downPayment}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Features:</h4>
                    <ul className="space-y-1">
                      {option.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full mt-6" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Our <span className="text-gradient">Financing</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We make car financing simple, fast, and affordable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
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

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="card-premium bg-gradient-primary text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Get pre-approved today and start shopping with confidence. 
                Our financing experts are here to help you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="accent" className="text-lg px-8">
                  Apply Now
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                  Speak with Expert
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Financing;