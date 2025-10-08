import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SearchFilters from "@/components/Search/SearchFilters";
import CarCard from "@/components/Cars/CarCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Grid3X3, List, SlidersHorizontal } from "lucide-react";

// Mock car data - would come from a database in real app
const allCars = [
  {
    id: "1",
    name: "X5 xDrive40i",
    brand: "BMW",
    price: 8500000,
    image: "/src/assets/car-suv.jpg",
    year: 2023,
    mileage: "15,000 km",
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 7,
    condition: "Certified" as const,
    features: ["AWD", "Premium Sound", "Navigation", "Leather Seats"]
  },
  {
    id: "2", 
    name: "C-Class AMG",
    brand: "Mercedes-Benz",
    price: 7200000,
    image: "/src/assets/car-sedan.jpg",
    year: 2024,
    mileage: "5,000 km",
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    condition: "New" as const,
    features: ["AMG Package", "Premium Interior", "Advanced Safety", "Sport Suspension"]
  },
  {
    id: "3",
    name: "911 Carrera",
    brand: "Porsche", 
    price: 12500000,
    image: "/src/assets/car-sports.jpg",
    year: 2023,
    mileage: "8,000 km",
    fuelType: "Petrol",
    transmission: "Manual",
    seats: 4,
    condition: "Certified" as const,
    features: ["Sport Package", "Carbon Fiber", "Racing Seats", "Track Mode"]
  },
  {
    id: "4",
    name: "Camry Hybrid",
    brand: "Toyota",
    price: 4200000,
    image: "/src/assets/car-sedan.jpg",
    year: 2023,
    mileage: "22,000 km",
    fuelType: "Hybrid",
    transmission: "CVT",
    seats: 5,
    condition: "Used" as const,
    features: ["Hybrid Engine", "Safety Sense 2.0", "Wireless Charging", "Premium Audio"]
  },
  {
    id: "5",
    name: "Q7 Quattro",
    brand: "Audi",
    price: 9800000,
    image: "/src/assets/car-suv.jpg",
    year: 2024,
    mileage: "2,000 km",
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 7,
    condition: "New" as const,
    features: ["Quattro AWD", "Virtual Cockpit", "Air Suspension", "Premium Plus"]
  },
  {
    id: "6",
    name: "Accord EX-L",
    brand: "Honda",
    price: 3800000,
    image: "/src/assets/car-sedan.jpg",
    year: 2022,
    mileage: "35,000 km",
    fuelType: "Petrol",
    transmission: "CVT",
    seats: 5,
    condition: "Used" as const,
    features: ["Honda Sensing", "Leather Trim", "Sunroof", "Heated Seats"]
  },
  {
    id: "7",
    name: "RX 350",
    brand: "Lexus",
    price: 7500000,
    image: "/src/assets/car-suv.jpg",
    year: 2023,
    mileage: "18,000 km",
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: 5,
    condition: "Certified" as const,
    features: ["Lexus Safety+", "Mark Levinson Audio", "Panoramic Roof", "F Sport Design"]
  },
  {
    id: "8",
    name: "X3 M40i",
    brand: "BMW",
    price: 6900000,
    image: "/src/assets/car-suv.jpg",
    year: 2024,
    mileage: "3,000 km",
    fuelType: "Petrol",
    transmission: "Automatic", 
    seats: 5,
    condition: "New" as const,
    features: ["M Performance", "xDrive AWD", "Harman Kardon", "Gesture Control"]
  }
];

const Inventory = () => {
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
              <span className="bg-white/20 px-4 py-2 rounded-lg">247 Cars Available</span>
              <span className="bg-white/20 px-4 py-2 rounded-lg">15+ Brands</span>
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
              <span className="text-muted-foreground">({allCars.length} results)</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {allCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline">Previous</Button>
            <div className="flex items-center gap-2">
              <Button variant="default" size="sm">1</Button>
              <Button variant="ghost" size="sm">2</Button>
              <Button variant="ghost" size="sm">3</Button>
              <span className="text-muted-foreground">...</span>
              <Button variant="ghost" size="sm">12</Button>
            </div>
            <Button variant="outline">Next</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Inventory;