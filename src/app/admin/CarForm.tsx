"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import type { CarListing } from "@/lib/cars";

interface CarFormValues {
  name: string;
  brand: string;
  price: string;
  originalPrice: string;
  image: string;
  images: string;
  year: string;
  mileage: string;
  fuelType: string;
  transmission: string;
  seats: string;
  condition: "New" | "Used" | "Certified";
  features: string;
  isPopular: boolean;
  isFeatured: boolean;
  description: string;
}

function toFormValues(car?: CarListing): CarFormValues {
  return {
    name: car?.name ?? "",
    brand: car?.brand ?? "",
    price: car ? String(car.price) : "",
    originalPrice: car?.originalPrice ? String(car.originalPrice) : "",
    image: car?.image ?? "",
    images: car?.images.join(", ") ?? "",
    year: car ? String(car.year) : String(new Date().getFullYear()),
    mileage: car?.mileage ?? "",
    fuelType: car?.fuelType ?? "Petrol",
    transmission: car?.transmission ?? "Automatic",
    seats: car ? String(car.seats) : "5",
    condition: car?.condition ?? "Used",
    features: car?.features.join(", ") ?? "",
    isPopular: car?.isPopular ?? false,
    isFeatured: car?.isFeatured ?? false,
    description: car?.description ?? "",
  };
}

export function CarForm({ car }: { car?: CarListing }) {
  const router = useRouter();
  const { toast } = useToast();
  const [values, setValues] = useState<CarFormValues>(() => toFormValues(car));
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isEditing = Boolean(car);

  const update = <K extends keyof CarFormValues>(key: K, value: CarFormValues[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      name: values.name,
      brand: values.brand,
      price: Number(values.price),
      originalPrice: values.originalPrice ? Number(values.originalPrice) : null,
      image: values.image,
      images: values.images
        .split(",")
        .map((f) => f.trim())
        .filter(Boolean),
      year: Number(values.year),
      mileage: values.mileage,
      fuelType: values.fuelType,
      transmission: values.transmission,
      seats: Number(values.seats),
      condition: values.condition,
      features: values.features
        .split(",")
        .map((f) => f.trim())
        .filter(Boolean),
      isPopular: values.isPopular,
      isFeatured: values.isFeatured,
      description: values.description || null,
    };

    try {
      const res = await fetch(isEditing ? `/api/inventory/${car!.id}` : "/api/inventory", {
        method: isEditing ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        toast({ title: "Failed to save vehicle", variant: "destructive" });
        return;
      }

      toast({ title: isEditing ? "Vehicle updated" : "Vehicle added" });
      router.push("/admin");
      router.refresh();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="brand">Brand</Label>
          <Input id="brand" value={values.brand} onChange={(e) => update("brand", e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">Model Name</Label>
          <Input id="name" value={values.name} onChange={(e) => update("name", e.target.value)} required />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="price">Price (KES)</Label>
          <Input id="price" type="number" min={0} value={values.price} onChange={(e) => update("price", e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="originalPrice">Original Price (optional)</Label>
          <Input id="originalPrice" type="number" min={0} value={values.originalPrice} onChange={(e) => update("originalPrice", e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="year">Year</Label>
          <Input id="year" type="number" value={values.year} onChange={(e) => update("year", e.target.value)} required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="image">Image URL</Label>
        <Input id="image" value={values.image} onChange={(e) => update("image", e.target.value)} placeholder="/images/car-suv.jpg" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="images">Gallery Photo URLs (comma-separated)</Label>
        <Textarea
          id="images"
          value={values.images}
          onChange={(e) => update("images", e.target.value)}
          placeholder="/images/car-1.jpg, /images/car-2.jpg"
          rows={2}
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="mileage">Mileage</Label>
          <Input id="mileage" value={values.mileage} onChange={(e) => update("mileage", e.target.value)} placeholder="15,000 km" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="fuelType">Fuel Type</Label>
          <Input id="fuelType" value={values.fuelType} onChange={(e) => update("fuelType", e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="transmission">Transmission</Label>
          <Input id="transmission" value={values.transmission} onChange={(e) => update("transmission", e.target.value)} required />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="seats">Seats</Label>
          <Input id="seats" type="number" min={1} value={values.seats} onChange={(e) => update("seats", e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label>Condition</Label>
          <Select value={values.condition} onValueChange={(value) => update("condition", value as CarFormValues["condition"])}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="New">New</SelectItem>
              <SelectItem value="Used">Used</SelectItem>
              <SelectItem value="Certified">Certified</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="features">Features (comma-separated)</Label>
        <Input id="features" value={values.features} onChange={(e) => update("features", e.target.value)} placeholder="AWD, Navigation, Leather Seats" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" value={values.description} onChange={(e) => update("description", e.target.value)} rows={4} />
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Switch id="isFeatured" checked={values.isFeatured} onCheckedChange={(checked) => update("isFeatured", checked)} />
          <Label htmlFor="isFeatured">Featured on homepage</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="isPopular" checked={values.isPopular} onCheckedChange={(checked) => update("isPopular", checked)} />
          <Label htmlFor="isPopular">Popular</Label>
        </div>
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : isEditing ? "Save Changes" : "Add Vehicle"}
      </Button>
    </form>
  );
}
