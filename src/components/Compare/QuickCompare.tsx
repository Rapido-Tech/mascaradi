import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { X, Plus, GitCompare } from "lucide-react";
import { useState } from "react";

interface CompareCar {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  year: number;
  fuelType: string;
  transmission: string;
  mileage: string;
}

const QuickCompare = () => {
  const [compareList, setCompareList] = useState<CompareCar[]>([]);
  const maxCompare = 3;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      notation: 'compact',
    }).format(price);
  };

  const removeCar = (carId: string) => {
    setCompareList(compareList.filter(car => car.id !== carId));
  };

  const clearAll = () => {
    setCompareList([]);
  };

  if (compareList.length === 0) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Card className="glass-effect border-accent/30">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-sm text-primary-foreground">
              <GitCompare className="h-4 w-4" />
              <span>Select cars to compare</span>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm">
      <Card className="card-premium border-accent/30">
        <CardContent className="p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <GitCompare className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Compare Cars</h3>
              <Badge variant="secondary">{compareList.length}/{maxCompare}</Badge>
            </div>
            <Button variant="ghost" size="sm" onClick={clearAll}>
              Clear All
            </Button>
          </div>

          {/* Compare List */}
          <div className="space-y-3 mb-4">
            {compareList.map((car) => (
              <div
                key={car.id}
                className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg"
              >
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.name}`}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">
                    {car.year} {car.brand} {car.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatPrice(car.price)}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeCar(car.id)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}

            {/* Add More Slot */}
            {compareList.length < maxCompare && (
              <div className="flex items-center gap-3 p-3 border-2 border-dashed border-muted-foreground/30 rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center">
                  <Plus className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    Add another car to compare
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Compare Button */}
          {compareList.length >= 2 && (
            <Button variant="premium" className="w-full">
              <GitCompare className="h-4 w-4 mr-2" />
              Compare Now
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickCompare;