import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowLeft, Phone } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { toCarListing, formatKes, cleanMileage } from "@/lib/cars";
import { siteUrl, siteName } from "@/lib/site";
import { CarGallery } from "./CarGallery";

interface CarPageProps {
  params: Promise<{ id: string }>;
}

async function getCar(id: string) {
  const car = await prisma.car.findUnique({ where: { id } });
  return car ? toCarListing(car) : null;
}

export async function generateMetadata({ params }: CarPageProps): Promise<Metadata> {
  const { id } = await params;
  const car = await getCar(id);
  if (!car) return { title: "Vehicle Not Found" };

  const title = `${car.year} ${car.brand} ${car.name}`;
  const description = `${title} — ${formatKes(car.price)}. ${cleanMileage(car.mileage)} mileage, ${car.fuelType} engine, ${car.transmission} transmission. ${car.condition} vehicle available at ${siteName} in Nairobi, Kenya.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `${siteUrl}/inventory/${car.id}`,
      images: [{ url: car.image }],
    },
  };
}

export default async function CarDetailPage({ params }: CarPageProps) {
  const { id } = await params;
  const car = await getCar(id);

  if (!car) notFound();

  const conditionMap: Record<string, string> = {
    New: "https://schema.org/NewCondition",
    Used: "https://schema.org/UsedCondition",
    Certified: "https://schema.org/RefurbishedCondition",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Vehicle",
    name: `${car.year} ${car.brand} ${car.name}`,
    brand: { "@type": "Brand", name: car.brand },
    model: car.name,
    vehicleModelDate: String(car.year),
    mileageFromOdometer: car.mileage,
    fuelType: car.fuelType,
    vehicleTransmission: car.transmission,
    vehicleSeatingCapacity: car.seats,
    itemCondition: conditionMap[car.condition] ?? "https://schema.org/UsedCondition",
    image: car.image.startsWith("http") ? car.image : `${siteUrl}${car.image}`,
    description: car.description ?? undefined,
    offers: {
      "@type": "Offer",
      priceCurrency: "KES",
      price: car.price,
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/inventory/${car.id}`,
      seller: { "@type": "AutoDealer", name: siteName },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-4">
          <Link href="/inventory" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back to Inventory
          </Link>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <CarGallery image={car.image} images={car.images} alt={`${car.brand} ${car.name}`} />

            <div>
              <Badge className={car.condition === "New" ? "bg-blue-500 text-white mb-3" : "bg-secondary text-secondary-foreground mb-3"}>
                {car.condition}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {car.year} {car.brand} {car.name}
              </h1>
              <div className="text-2xl font-bold text-blue-600 mb-6">{formatKes(car.price)}</div>

              {car.description && (
                <p className="text-muted-foreground mb-6 leading-relaxed">{car.description}</p>
              )}

              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="bg-muted/30 rounded-lg p-3">
                  <span className="text-muted-foreground block">Year</span>
                  <span className="font-semibold">{car.year}</span>
                </div>
                <div className="bg-muted/30 rounded-lg p-3">
                  <span className="text-muted-foreground block">Mileage</span>
                  <span className="font-semibold">{cleanMileage(car.mileage)}</span>
                </div>
                <div className="bg-muted/30 rounded-lg p-3">
                  <span className="text-muted-foreground block">Fuel Type</span>
                  <span className="font-semibold">{car.fuelType}</span>
                </div>
                <div className="bg-muted/30 rounded-lg p-3">
                  <span className="text-muted-foreground block">Transmission</span>
                  <span className="font-semibold">{car.transmission}</span>
                </div>
                <div className="bg-muted/30 rounded-lg p-3">
                  <span className="text-muted-foreground block">Seats</span>
                  <span className="font-semibold">{car.seats}</span>
                </div>
                <div className="bg-muted/30 rounded-lg p-3">
                  <span className="text-muted-foreground block">Location</span>
                  <span className="font-semibold">Nairobi</span>
                </div>
              </div>

              {car.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-semibold mb-3">Features</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {car.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="premium" asChild>
                  <Link href={`/contact?carId=${car.id}`}>Enquire About This Car</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+254700123456">
                    <Phone className="h-5 w-5" />
                    Call +254 700 123 456
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
