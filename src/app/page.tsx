import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Layout/Header";
import HeroSection from "@/components/Hero/HeroSection";
import FeaturedCars from "@/components/Cars/FeaturedCars";
import SearchFilters from "@/components/Search/SearchFilters";
import ServicesSection from "@/components/Services/ServicesSection";
import QuickCompare from "@/components/Compare/QuickCompare";
import Footer from "@/components/Layout/Footer";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Premium Cars. Exceptional Service.",
  description:
    "Discover Kenya's finest selection of luxury and premium vehicles. From sedans to SUVs, find your perfect car with unmatched quality and service.",
};

export const dynamic = "force-dynamic";

export default async function Home() {
  const totalCars = await prisma.car.count();

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
            <p className="text-muted-foreground">{totalCars} vehicles available</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            <Link href="/inventory" className="bg-card rounded-lg border border-border p-6 text-center hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] bg-muted/30 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-muted-foreground">Browse now</span>
              </div>
              <h3 className="font-semibold mb-2">Browse Full Inventory</h3>
              <p className="text-sm text-muted-foreground">View all available vehicles</p>
            </Link>
            <Link href="/inventory" className="bg-card rounded-lg border border-border p-6 text-center hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] bg-muted/30 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-muted-foreground">Browse now</span>
              </div>
              <h3 className="font-semibold mb-2">Special Offers</h3>
              <p className="text-sm text-muted-foreground">Limited time deals</p>
            </Link>
            <Link href="/contact" className="bg-card rounded-lg border border-border p-6 text-center hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] bg-muted/30 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-muted-foreground">Get in touch</span>
              </div>
              <h3 className="font-semibold mb-2">Trade-In Program</h3>
              <p className="text-sm text-muted-foreground">Get value for your current car</p>
            </Link>
            <Link href="/financing" className="bg-card rounded-lg border border-border p-6 text-center hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] bg-muted/30 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-muted-foreground">Get pre-approved</span>
              </div>
              <h3 className="font-semibold mb-2">Financing Options</h3>
              <p className="text-sm text-muted-foreground">Flexible payment plans</p>
            </Link>
          </div>
        </div>
      </section>

      <ServicesSection />
      <Footer />
      <QuickCompare />
    </div>
  );
}
