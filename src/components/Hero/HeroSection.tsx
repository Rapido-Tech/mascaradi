import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-accent fill-current" />
              <span className="text-sm font-medium text-primary-foreground">Kenya's Premier Car Dealership</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Premium Cars.
              <br />
              <span className="text-accent">Exceptional Service.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">
              Discover Kenya's finest selection of luxury and premium vehicles. 
              From sedans to SUVs, find your perfect car with unmatched quality and service.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="accent" size="lg" className="animate-scale-in">
                Browse Inventory
                <ArrowRight className="h-5 w-5" />
              </Button>
              
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-primary-foreground hover:bg-white hover:text-primary">
                <Play className="h-5 w-5" />
                Watch Our Story
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center sm:text-left">
                <div className="text-2xl md:text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-primary-foreground/80">Premium Cars</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl md:text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-primary-foreground/80">Years Experience</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl md:text-3xl font-bold text-accent">5,000+</div>
                <div className="text-sm text-primary-foreground/80">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="glass-effect rounded-xl p-4 animate-float">
          <div className="text-sm text-white/90 font-medium">Starting from</div>
          <div className="text-2xl font-bold text-accent">KES 1.2M</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;