"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-primary-foreground/80" onClick={handleLogout}>
      Log Out
    </Button>
  );
}
