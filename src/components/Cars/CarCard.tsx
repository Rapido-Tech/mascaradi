import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Eye, ArrowRight } from "lucide-react";
import { useState } from "react";

interface CarProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  year: number;
  mileage: string;
  fuelType: string;
  transmission: string;
  seats: number;
  condition: "New" | "Used" | "Certified";
  features: string[];
  isPopular?: boolean;
}

const CarCard = ({ car }: { car: CarProps }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getConditionBadge = (condition: string) => {
    if (condition === "New") return "New Arrival";
    if (condition === "Certified") return "Certified";
    return "Used";
  };

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative">
        <div className="aspect-[4/3] bg-muted">
          <img
            src={car.image}
            alt={`${car.brand} ${car.name}`}
            className="w-full h-full object-cover"
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

        <div className="absolute top-3 right-3 flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/80 hover:bg-white h-8 w-8"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart 
              className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/80 hover:bg-white h-8 w-8"
          >
            <Eye className="h-4 w-4 text-gray-600" />
          </Button>
        </div>
      </div>

      {/* Car Details */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h3 className="font-semibold text-lg text-foreground">
          {car.year} {car.brand} {car.name}
        </h3>

        {/* Price */}
        <div className="text-xl font-bold text-blue-600">
          {formatPrice(car.price)}
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-2 gap-y-2 text-sm text-muted-foreground">
          <div>
            <span className="font-medium">Year:</span> {car.year}
          </div>
          <div>
            <span className="font-medium">Mileage:</span> {car.mileage}
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
          <Button variant="link" className="text-blue-600 p-0 h-auto">
            View Details <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;