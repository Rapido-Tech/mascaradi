import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Award, 
  MapPin, 
  Calendar,
  Star,
  Shield,
  Heart,
  Target,
  Quote
} from "lucide-react";

const About = () => {
  const stats = [
    { number: "15+", label: "Years Experience", icon: <Calendar className="h-6 w-6" /> },
    { number: "2,500+", label: "Cars Sold", icon: <Star className="h-6 w-6" /> },
    { number: "98%", label: "Customer Satisfaction", icon: <Heart className="h-6 w-6" /> },
    { number: "50+", label: "Team Members", icon: <Users className="h-6 w-6" /> }
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trust & Transparency",
      description: "Every vehicle comes with detailed history reports and honest pricing. No hidden fees, no surprises."
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Premium Quality",
      description: "We maintain the highest standards in vehicle selection, inspection, and customer service."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Customer First",
      description: "Your satisfaction is our priority. We go above and beyond to exceed your expectations."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Expert Guidance",
      description: "Our knowledgeable team helps you find the perfect vehicle that fits your needs and budget."
    }
  ];

  const testimonials = [
    {
      name: "James Mwangi",
      role: "Business Executive",
      quote: "Outstanding service from start to finish. The team was professional, knowledgeable, and helped me find the perfect BMW. Highly recommended!",
      rating: 5
    },
    {
      name: "Sarah Otieno",
      role: "Doctor",
      quote: "Mascardi made buying my first luxury car a seamless experience. Their financing options and after-sales service are exceptional.",
      rating: 5
    },
    {
      name: "Michael Kimani",
      role: "Entrepreneur",
      quote: "I've purchased three vehicles from Mascardi over the years. Their consistency in quality and service keeps me coming back.",
      rating: 5
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
              About <span className="text-accent">Mascardi</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              For over 15 years, we've been Kenya's trusted partner in premium automotive sales, 
              financing, and service. Our commitment to excellence drives everything we do.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Badge className="bg-white/20 text-white border-white/30">Est. 2009</Badge>
              <Badge className="bg-white/20 text-white border-white/30">Nairobi Based</Badge>
              <Badge className="bg-white/20 text-white border-white/30">Family Owned</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="card-premium text-center">
                <CardContent className="p-8">
                  <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-accent">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-accent mb-2">{stat.number}</h3>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2009 by automotive enthusiast David Kariuki, Mascardi 
                  began as a small dealership with a big vision: to revolutionize the car 
                  buying experience in Kenya by focusing on premium quality and exceptional service.
                </p>
                <p>
                  What started as a passion project has grown into one of Kenya's most trusted 
                  premium car dealerships. We've built our reputation on transparency, quality, 
                  and an unwavering commitment to customer satisfaction.
                </p>
                <p>
                  Today, we're proud to serve customers across East Africa, offering not just 
                  premium vehicles, but comprehensive automotive solutions including financing, 
                  service, and extended warranties.
                </p>
              </div>
              <div className="flex gap-4 mt-8">
                <Button variant="premium" size="lg">Learn More</Button>
                <Button variant="outline" size="lg">Our History</Button>
              </div>
            </div>
            
            <div className="bg-gradient-card rounded-2xl p-8">
              <Quote className="h-12 w-12 text-accent mb-6" />
              <blockquote className="text-lg italic mb-6">
                "Our mission has always been simple: provide exceptional vehicles and service 
                that exceed expectations. Every customer interaction is an opportunity to build 
                a lasting relationship based on trust and mutual respect."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold">DK</span>
                </div>
                <div>
                  <p className="font-semibold">David Kariuki</p>
                  <p className="text-sm text-muted-foreground">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are as a company
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-premium">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center text-accent flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              What Our <span className="text-gradient">Customers Say</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from satisfied customers who've experienced 
              the Mascardi difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-premium">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="card-premium bg-gradient-primary text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who've chosen Mascardi 
                for their automotive needs. Let us help you find your perfect vehicle today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="accent" className="text-lg px-8">
                  Browse Inventory
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                  Contact Us
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

export default About;