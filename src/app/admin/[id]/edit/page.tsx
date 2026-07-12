import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { toCarListing } from "@/lib/cars";
import { CarForm } from "../../CarForm";

interface EditCarPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditCarPage({ params }: EditCarPageProps) {
  const { id } = await params;
  const car = await prisma.car.findUnique({ where: { id } });
  if (!car) notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Edit Vehicle</h1>
      <CarForm car={toCarListing(car)} />
    </div>
  );
}
