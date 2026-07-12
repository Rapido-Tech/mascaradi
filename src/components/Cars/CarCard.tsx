"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Eye, ArrowRight } from "lucide-react";
import { useState } from "react";
import { formatKes, cleanMileage } from "@/lib/cars";
import type { CarListing } from "@/lib/cars";

const CarCard = ({
  car,
  priority = false,
  priceVariant = "quiet",
}: {
  car: CarListing;
  priority?: boolean;
  priceVariant?: "quiet" | "pill";
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const getConditionBadge = (condition: string) => {
    if (condition === "New") return "New Arrival";
    if (condition === "Certified") return "Certified";
    return "Used";
  };

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image Container */}
      <Link href={`/inventory/${car.id}`} className="relative block">
        <div className="relative aspect-[4/3] bg-muted">
          <Image
            src={car.image}
            alt={`${car.brand} ${car.name}`}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            priority={priority}
            className="object-cover"
          />
        </div>

        {/* Badges and Action Buttons */}
        <div className="absolute top-3 left-3">
          <Badge
            className={car.condition === "New" ? "bg-blue-500 text-white" : "bg-secondary text-secondary-foreground"}
          >
            {getConditionBadge(car.condition)}
          </Badge>
        </div>

        {priceVariant === "pill" && (
          <div className="absolute left-3 bottom-3 rounded-md border border-white/10 bg-primary/70 px-3 py-1.5 font-serif text-[1.05rem] text-accent backdrop-blur-sm [font-variant-numeric:tabular-nums]">
            {formatKes(car.price)}
          </div>
        )}

        <div className="absolute top-3 right-3 flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/80 hover:bg-white h-8 w-8"
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
          >
            <Heart
              className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/80 hover:bg-white h-8 w-8"
            asChild
          >
            <span>
              <Eye className="h-4 w-4 text-gray-600" />
            </span>
          </Button>
        </div>
      </Link>

      {/* Car Details */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h3 className="font-semibold text-lg text-foreground line-clamp-2">
          {car.year} {car.brand} {car.name}
        </h3>

        {/* Price */}
        {priceVariant === "quiet" && (
          <div className="font-serif text-2xl text-accent [font-variant-numeric:tabular-nums]">
            {formatKes(car.price)}
          </div>
        )}

        {/* Specifications Grid */}
        <div className="grid grid-cols-2 gap-y-2 text-sm text-muted-foreground">
          <div>
            <span className="font-medium">Year:</span> {car.year}
          </div>
          <div>
            <span className="font-medium">Mileage:</span> {cleanMileage(car.mileage)}
          </div>
          <div>
            <span className="font-medium">Fuel:</span> {car.fuelType}
          </div>
          <div>
            <span className="font-medium">Trans:</span> {car.transmission}
          </div>
        </div>

        {/* Location and View Details */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-sm text-muted-foreground">Nairobi</span>
          <Button variant="link" className="text-blue-600 p-0 h-auto" asChild>
            <Link href={`/inventory/${car.id}`}>
              View Details <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
