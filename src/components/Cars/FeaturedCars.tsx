import Link from "next/link";
import CarCard from "./CarCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { toCarListing } from "@/lib/cars";

const FeaturedCars = async () => {
  const cars = await prisma.car.findMany({
    where: { isFeatured: true },
    orderBy: { price: "desc" },
  });

  if (cars.length === 0) return null;

  const featuredCars = cars.map(toCarListing);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Premium Vehicles</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked selection of our finest vehicles, featuring the latest
            models and certified pre-owned luxury cars.
          </p>
        </div>

        {/* Cars Grid - 4 cars per row on xl screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {featuredCars.map((car, index) => (
            <div
              key={car.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CarCard car={car} priority={index === 0} />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button variant="premium" size="lg" asChild>
            <Link href="/inventory">
              View All Inventory
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
