import { Button } from "@/components/ui/button";
import { CurrencyInput } from "@/components/ui/currency-input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { useState } from "react";

const SearchFilters = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");
  const [selectedFuelType, setSelectedFuelType] = useState("");

  return (
    <div className="bg-white/95 backdrop-blur-sm border border-border rounded-xl p-6 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 items-end">
        {/* Brand */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Brand</label>
          <Select value={selectedBrand} onValueChange={setSelectedBrand}>
            <SelectTrigger>
              <SelectValue placeholder="Any Brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="BMW">BMW</SelectItem>
              <SelectItem value="Mercedes-Benz">Mercedes-Benz</SelectItem>
              <SelectItem value="Audi">Audi</SelectItem>
              <SelectItem value="Toyota">Toyota</SelectItem>
              <SelectItem value="Nissan">Nissan</SelectItem>
              <SelectItem value="Honda">Honda</SelectItem>
              <SelectItem value="Porsche">Porsche</SelectItem>
              <SelectItem value="Lexus">Lexus</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Condition */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Condition</label>
          <Select value={selectedCondition} onValueChange={setSelectedCondition}>
            <SelectTrigger>
              <SelectValue placeholder="Any Condition" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="New">New</SelectItem>
              <SelectItem value="Certified">Certified</SelectItem>
              <SelectItem value="Used">Used</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Min Price */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Min Price</label>
          <CurrencyInput
            placeholder="1,000,000"
            value={minPrice}
            onChange={setMinPrice}
          />
        </div>

        {/* Max Price */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Max Price</label>
          <CurrencyInput
            placeholder="15,000,000"
            value={maxPrice}
            onChange={setMaxPrice}
          />
        </div>

        {/* Fuel Type */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Fuel Type</label>
          <Select value={selectedFuelType} onValueChange={setSelectedFuelType}>
            <SelectTrigger>
              <SelectValue placeholder="Any Fuel" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Petrol">Petrol</SelectItem>
              <SelectItem value="Diesel">Diesel</SelectItem>
              <SelectItem value="Hybrid">Hybrid</SelectItem>
              <SelectItem value="Electric">Electric</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-transparent">Search</label>
          <Button className="w-full" variant="premium">
            <Search className="h-4 w-4 mr-2" />
            Search Cars
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;