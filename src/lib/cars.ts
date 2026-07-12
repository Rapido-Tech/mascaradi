import type { Car as PrismaCar } from "@prisma/client";

export interface CarListing {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  year: number;
  mileage: string;
  fuelType: string;
  transmission: string;
  seats: number;
  condition: "New" | "Used" | "Certified";
  features: string[];
  isPopular?: boolean;
  isFeatured?: boolean;
  description?: string | null;
}

export function toCarListing(car: PrismaCar): CarListing {
  return {
    id: car.id,
    name: car.name,
    brand: car.brand,
    price: car.price,
    originalPrice: car.originalPrice ?? undefined,
    image: car.image,
    images: car.images ? car.images.split(",").map((f) => f.trim()).filter(Boolean) : [],
    year: car.year,
    mileage: car.mileage,
    fuelType: car.fuelType,
    transmission: car.transmission,
    seats: car.seats,
    condition: car.condition as CarListing["condition"],
    features: car.features ? car.features.split(",").map((f) => f.trim()).filter(Boolean) : [],
    isPopular: car.isPopular,
    isFeatured: car.isFeatured,
    description: car.description,
  };
}

export function cleanMileage(value: string) {
  const stripped = value
    .replace(/\bmileage\b/gi, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+\./g, ".")
    .replace(/^[\s.,-]+|[\s.,-]+$/g, "")
    .trim();
  return stripped || value;
}

export function formatKes(price: number) {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
