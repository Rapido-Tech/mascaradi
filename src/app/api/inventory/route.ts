import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const carSchema = z.object({
  name: z.string().min(1).max(100),
  brand: z.string().min(1).max(60),
  price: z.coerce.number().int().positive(),
  originalPrice: z.coerce.number().int().positive().optional().nullable(),
  image: z.string().min(1),
  images: z.array(z.string()).default([]),
  year: z.coerce.number().int().min(1980).max(2100),
  mileage: z.string().min(1).max(40),
  fuelType: z.string().min(1).max(40),
  transmission: z.string().min(1).max(40),
  seats: z.coerce.number().int().min(1).max(20),
  condition: z.enum(["New", "Used", "Certified"]),
  features: z.array(z.string()).default([]),
  isPopular: z.boolean().default(false),
  isFeatured: z.boolean().default(false),
  description: z.string().max(4000).optional().nullable(),
});

export async function GET() {
  const cars = await prisma.car.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(cars);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = carSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { name, brand, price, originalPrice, image, images, year, mileage, fuelType, transmission, seats, condition, features, isPopular, isFeatured, description } = parsed.data;
  const car = await prisma.car.create({
    data: {
      name,
      brand,
      price,
      originalPrice,
      image,
      images: images.join(","),
      year,
      mileage,
      fuelType,
      transmission,
      seats,
      condition,
      features: features.join(","),
      isPopular,
      isFeatured,
      description,
    },
  });

  return NextResponse.json(car, { status: 201 });
}
