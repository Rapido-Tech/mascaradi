import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatKes } from "@/lib/cars";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";
import { DeleteCarButton } from "./DeleteCarButton";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const cars = await prisma.car.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Inventory</h1>
          <p className="text-muted-foreground text-sm">{cars.length} vehicles in the database</p>
        </div>
        <Button asChild>
          <Link href="/admin/new">
            <Plus className="h-4 w-4 mr-2" />
            Add Vehicle
          </Link>
        </Button>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Vehicle</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Condition</TableHead>
              <TableHead>Featured</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cars.map((car) => (
              <TableRow key={car.id}>
                <TableCell className="font-medium">
                  {car.year} {car.brand} {car.name}
                </TableCell>
                <TableCell>{formatKes(car.price)}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{car.condition}</Badge>
                </TableCell>
                <TableCell>{car.isFeatured ? "Yes" : "No"}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/admin/${car.id}/edit`}>Edit</Link>
                  </Button>
                  <DeleteCarButton id={car.id} label={`${car.year} ${car.brand} ${car.name}`} />
                </TableCell>
              </TableRow>
            ))}
            {cars.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                  No vehicles yet. Add your first one.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
