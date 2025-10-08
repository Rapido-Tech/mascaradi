import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageSquare,
  Car,
  CreditCard,
  Wrench
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Our Showroom",
      details: [
        "Mombasa Road, Industrial Area",
        "Nairobi, Kenya",
        "Opposite Wilson Airport"
      ]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: [
        "Sales: +254 (0) 700 123 456",
        "Service: +254 (0) 700 123 457",
        "Emergency: +254 (0) 711 234 567"
      ]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: [
        "sales@autokenyaprime.com",
        "service@autokenyaprime.com",
        "info@autokenyaprime.com"
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: [
        "Mon - Fri: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 5:00 PM",
        "Sunday: 10:00 AM - 4:00 PM"
      ]
    }
  ];

  const departments = [
    { icon: <Car className="h-5 w-5" />, name: "Vehicle Sales", value: "sales" },
    { icon: <CreditCard className="h-5 w-5" />, name: "Financing", value: "financing" },
    { icon: <Wrench className="h-5 w-5" />, name: "Service Center", value: "service" },
    { icon: <MessageSquare className="h-5 w-5" />, name: "General Inquiry", value: "general" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Have questions about our vehicles, financing, or services? 
              Our expert team is here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" className="text-lg px-8">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                <MapPin className="h-5 w-5 mr-2" />
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Send Us a <span className="text-gradient">Message</span>
              </h2>
              <Card className="card-premium">
                <CardHeader>
                  <CardTitle>Contact Form</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+254 700 123 456" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept.value} value={dept.value}>
                            <div className="flex items-center gap-2">
                              {dept.icon}
                              {dept.name}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please describe your inquiry in detail..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button variant="premium" size="lg" className="w-full">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Contact <span className="text-gradient">Information</span>
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="card-premium">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center text-accent flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Find <span className="text-gradient">Our Location</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit our state-of-the-art showroom and service center conveniently located 
              on Mombasa Road in Nairobi's Industrial Area
            </p>
          </div>
          
          <Card className="card-premium overflow-hidden">
            <div className="aspect-video bg-muted/50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                <p className="text-muted-foreground mb-4">
                  Mombasa Road, Industrial Area, Nairobi
                </p>
                <Button variant="outline">
                  <MapPin className="h-4 w-4 mr-2" />
                  Open in Maps
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="card-premium bg-gradient-primary text-primary-foreground">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Our sales and service teams are standing by to help you with any questions 
                or immediate needs you may have.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <Button variant="accent" size="lg" className="w-full">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Sales
                </Button>
                <Button variant="accent" size="lg" className="w-full">
                  <Wrench className="h-5 w-5 mr-2" />
                  Service Center
                </Button>
                <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white hover:text-primary">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Live Chat
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

export default Contact;