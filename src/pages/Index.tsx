import Header from "@/components/Layout/Header";
import HeroSection from "@/components/Hero/HeroSection";
import FeaturedCars from "@/components/Cars/FeaturedCars";
import SearchFilters from "@/components/Search/SearchFilters";
import ServicesSection from "@/components/Services/ServicesSection";
import QuickCompare from "@/components/Compare/QuickCompare";
import Footer from "@/components/Layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Search Filters - Horizontal below Hero */}
      <section className="relative -mt-8 z-10 mb-16">
        <div className="container mx-auto px-4">
          <SearchFilters />
        </div>
      </section>

      {/* Featured Cars Section */}
      <FeaturedCars />
      
      {/* Additional Inventory Section */}
      <section id="inventory" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              Premium Car <span className="text-gradient">Inventory</span>
            </h2>
            <p className="text-muted-foreground">Showing 1-12 of 247 results</p>
          </div>
          
          {/* Additional Inventory Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {/* These would be populated from a database */}
            <div className="bg-card rounded-lg border border-border p-6 text-center">
              <div className="aspect-[4/3] bg-muted/30 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-muted-foreground">More cars coming soon</span>
              </div>
              <h3 className="font-semibold mb-2">Browse Full Inventory</h3>
              <p className="text-sm text-muted-foreground">View all available vehicles</p>
            </div>
            <div className="bg-card rounded-lg border border-border p-6 text-center">
              <div className="aspect-[4/3] bg-muted/30 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-muted-foreground">More cars coming soon</span>
              </div>
              <h3 className="font-semibold mb-2">Special Offers</h3>
              <p className="text-sm text-muted-foreground">Limited time deals</p>
            </div>
            <div className="bg-card rounded-lg border border-border p-6 text-center">
              <div className="aspect-[4/3] bg-muted/30 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-muted-foreground">More cars coming soon</span>
              </div>
              <h3 className="font-semibold mb-2">Trade-In Program</h3>
              <p className="text-sm text-muted-foreground">Get value for your current car</p>
            </div>
            <div className="bg-card rounded-lg border border-border p-6 text-center">
              <div className="aspect-[4/3] bg-muted/30 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-muted-foreground">More cars coming soon</span>
              </div>
              <h3 className="font-semibold mb-2">Financing Options</h3>
              <p className="text-sm text-muted-foreground">Flexible payment plans</p>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <Footer />
      <QuickCompare />
    </div>
  );
};

export default Index;
