"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function DeleteCarButton({ id, label }: { id: string; label: string }) {
  const router = useRouter();
  const { toast } = useToast();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!window.confirm(`Delete ${label}? This cannot be undone.`)) return;

    setIsDeleting(true);
    try {
      const res = await fetch(`/api/inventory/${id}`, { method: "DELETE" });
      if (!res.ok) {
        toast({ title: "Failed to delete vehicle", variant: "destructive" });
        return;
      }
      toast({ title: "Vehicle deleted" });
      router.refresh();
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Button variant="destructive" size="sm" onClick={handleDelete} disabled={isDeleting}>
      {isDeleting ? "Deleting..." : "Delete"}
    </Button>
  );
}
