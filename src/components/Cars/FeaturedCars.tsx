import CarCard from "./CarCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import carSuv from "@/assets/car-suv.jpg";
import carSports from "@/assets/car-sports.jpg";
import carSedan from "@/assets/car-sedan.jpg";

const FeaturedCars = () => {
  const featuredCars = [
    {
      id: "1",
      name: "X5 xDrive40i",
      brand: "BMW",
      price: 8500000,
      originalPrice: 9200000,
      image: carSuv,
      year: 2023,
      mileage: "15,000 km",
      fuelType: "Petrol",
      transmission: "Automatic",
      seats: 7,
      condition: "Certified" as const,
      features: [
        "Leather Seats",
        "Sunroof",
        "Navigation",
        "AWD",
        "Heated Seats",
      ],
      isPopular: true,
    },
    {
      id: "2",
      name: "911 Carrera",
      brand: "Porsche",
      price: 15000000,
      image: carSports,
      year: 2024,
      mileage: "2,500 km",
      fuelType: "Petrol",
      transmission: "PDK",
      seats: 2,
      condition: "New" as const,
      features: ["Sport Chrono", "PASM", "Sport Exhaust", "Carbon Interior"],
    },
    {
      id: "3",
      name: "E-Class E300",
      brand: "Mercedes-Benz",
      price: 6200000,
      originalPrice: 6800000,
      image: carSedan,
      year: 2022,
      mileage: "25,000 km",
      fuelType: "Petrol",
      transmission: "9G-Tronic",
      seats: 5,
      condition: "Used" as const,
      features: ["AMG Line", "MBUX", "Air Suspension", "Premium Audio"],
      isPopular: true,
    },
    {
      id: "4",
      name: "E-Class E301",
      brand: "Mercedes-Benz",
      price: 6200000,
      originalPrice: 6800000,
      image: carSedan,
      year: 2022,
      mileage: "25,000 km",
      fuelType: "Petrol",
      transmission: "9G-Tronic",
      seats: 5,
      condition: "Used" as const,
      features: ["AMG Line", "MBUX", "Air Suspension", "Premium Audio"],
      isPopular: true,
    },
  ];

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
              <CarCard car={car} />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button variant="premium" size="lg">
            View All Inventory
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
