import Link from "next/link";
import type { Metadata } from "next";
import { LogoutButton } from "./LogoutButton";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/admin" className="font-bold text-lg">
            Mascardi Admin
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">
              View Site
            </Link>
            <LogoutButton />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
