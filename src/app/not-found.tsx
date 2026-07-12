import Link from "next/link";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { CarFront, Search, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <section className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-muted flex items-center justify-center">
            <CarFront className="h-8 w-8 text-muted-foreground" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-3">We couldn&apos;t find that page</h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            The page or vehicle you&apos;re looking for may have been sold, moved, or the link may be
            out of date. Let&apos;s get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="premium" asChild>
              <Link href="/inventory">
                <Search className="h-5 w-5" />
                Browse Inventory
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                <Phone className="h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
