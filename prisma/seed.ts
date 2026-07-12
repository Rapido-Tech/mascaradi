import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const cars = [
  {
    name: "X5 xDrive40i",
    brand: "BMW",
    price: 8_500_000,
    originalPrice: 9_200_000,
    image: "/images/car-suv.jpg",
    year: 2023,
    mileage: "15,000 km",
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 7,
    condition: "Certified" as const,
    features: "AWD,Premium Sound,Navigation,Leather Seats,Sunroof,Heated Seats",
    isPopular: true,
    isFeatured: true,
  },
  {
    name: "C-Class AMG",
    brand: "Mercedes-Benz",
    price: 7_200_000,
    image: "/images/car-sedan.jpg",
    year: 2024,
    mileage: "5,000 km",
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    condition: "New" as const,
    features: "AMG Package,Premium Interior,Advanced Safety,Sport Suspension",
    isFeatured: false,
  },
  {
    name: "911 Carrera",
    brand: "Porsche",
    price: 15_000_000,
    image: "/images/car-sports.jpg",
    year: 2024,
    mileage: "2,500 km",
    fuelType: "Petrol",
    transmission: "PDK",
    seats: 2,
    condition: "New" as const,
    features: "Sport Chrono,PASM,Sport Exhaust,Carbon Interior",
    isFeatured: true,
  },
  {
    name: "Camry Hybrid",
    brand: "Toyota",
    price: 4_200_000,
    image: "/images/car-sedan.jpg",
    year: 2023,
    mileage: "22,000 km",
    fuelType: "Hybrid",
    transmission: "CVT",
    seats: 5,
    condition: "Used" as const,
    features: "Hybrid Engine,Safety Sense 2.0,Wireless Charging,Premium Audio",
  },
  {
    name: "Q7 Quattro",
    brand: "Audi",
    price: 9_800_000,
    image: "/images/car-suv.jpg",
    year: 2024,
    mileage: "2,000 km",
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 7,
    condition: "New" as const,
    features: "Quattro AWD,Virtual Cockpit,Air Suspension,Premium Plus",
  },
  {
    name: "Accord EX-L",
    brand: "Honda",
    price: 3_800_000,
    image: "/images/car-sedan.jpg",
    year: 2022,
    mileage: "35,000 km",
    fuelType: "Petrol",
    transmission: "CVT",
    seats: 5,
    condition: "Used" as const,
    features: "Honda Sensing,Leather Trim,Sunroof,Heated Seats",
  },
  {
    name: "RX 350",
    brand: "Lexus",
    price: 7_500_000,
    image: "/images/car-suv.jpg",
    year: 2023,
    mileage: "18,000 km",
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    condition: "Certified" as const,
    features: "Lexus Safety+,Mark Levinson Audio,Panoramic Roof,F Sport Design",
  },
  {
    name: "X3 M40i",
    brand: "BMW",
    price: 6_900_000,
    image: "/images/car-suv.jpg",
    year: 2024,
    mileage: "3,000 km",
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    condition: "New" as const,
    features: "M Performance,xDrive AWD,Harman Kardon,Gesture Control",
  },
  {
    name: "E-Class E300",
    brand: "Mercedes-Benz",
    price: 6_200_000,
    originalPrice: 6_800_000,
    image: "/images/car-sedan.jpg",
    year: 2022,
    mileage: "25,000 km",
    fuelType: "Petrol",
    transmission: "9G-Tronic",
    seats: 5,
    condition: "Used" as const,
    features: "AMG Line,MBUX,Air Suspension,Premium Audio",
    isPopular: true,
    isFeatured: true,
  },
];

async function main() {
  const existing = await prisma.car.count();
  if (existing > 0) {
    console.log(`Skipping seed — ${existing} cars already in the database.`);
    return;
  }
  for (const car of cars) {
    await prisma.car.create({ data: car });
  }
  console.log(`Seeded ${cars.length} cars.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
