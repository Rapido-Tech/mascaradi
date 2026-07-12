import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const carUpdateSchema = z.object({
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

interface Params {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, { params }: Params) {
  const { id } = await params;
  const car = await prisma.car.findUnique({ where: { id } });
  if (!car) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(car);
}

export async function PATCH(request: Request, { params }: Params) {
  const { id } = await params;
  const body = await request.json().catch(() => null);
  const parsed = carUpdateSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const { name, brand, price, originalPrice, image, images, year, mileage, fuelType, transmission, seats, condition, features, isPopular, isFeatured, description } = parsed.data;

  try {
    const car = await prisma.car.update({
      where: { id },
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
    return NextResponse.json(car);
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}

export async function DELETE(_request: Request, { params }: Params) {
  const { id } = await params;
  try {
    await prisma.car.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
}
