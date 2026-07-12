import type { Metadata } from "next";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SearchFilters from "@/components/Search/SearchFilters";
import CarCard from "@/components/Cars/CarCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Grid3X3, List, SlidersHorizontal } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { toCarListing } from "@/lib/cars";

export const metadata: Metadata = {
  title: "Inventory",
  description:
    "Browse Mascardi's full inventory of luxury and premium vehicles — new, used, and certified pre-owned cars available in Nairobi, Kenya.",
};

export const dynamic = "force-dynamic";

export default async function InventoryPage() {
  const cars = await prisma.car.findMany({
    orderBy: { createdAt: "desc" },
  });
  const listings = cars.map(toCarListing);
  const brandCount = new Set(cars.map((car) => car.brand)).size;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Premium Car <span className="text-accent">Inventory</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Browse our extensive collection of luxury and premium vehicles
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-lg">{listings.length} Cars Available</span>
              <span className="bg-white/20 px-4 py-2 rounded-lg">{brandCount}+ Brands</span>
              <span className="bg-white/20 px-4 py-2 rounded-lg">Certified Quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search Filters */}
      <section className="relative -mt-8 z-10 mb-8">
        <div className="container mx-auto px-4">
          <SearchFilters />
        </div>
      </section>

      {/* Inventory Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold">All Vehicles</h2>
              <span className="text-muted-foreground">({listings.length} results)</span>
            </div>

            <div className="flex items-center gap-3">
              <Select defaultValue="newest">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="mileage">Lowest Mileage</SelectItem>
                  <SelectItem value="year">Year: Newest</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex border border-border rounded-lg p-1">
                <Button variant="ghost" size="sm" className="data-[state=active]:bg-accent">
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <List className="h-4 w-4" />
                </Button>
              </div>

              <Button variant="outline" size="sm">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          {/* Car Grid - 4 cars per row */}
          {listings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {listings.map((car, index) => (
                <CarCard key={car.id} car={car} priority={index === 0} priceVariant="pill" />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-muted-foreground">
              No vehicles available right now. Check back soon.
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
