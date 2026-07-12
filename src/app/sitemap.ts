import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const cars = await prisma.car.findMany({ select: { id: true, updatedAt: true } });

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "daily", priority: 1 },
    { url: `${siteUrl}/inventory`, changeFrequency: "daily", priority: 0.9 },
    { url: `${siteUrl}/financing`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/services`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteUrl}/contact`, changeFrequency: "monthly", priority: 0.5 },
  ];

  const carRoutes: MetadataRoute.Sitemap = cars.map((car) => ({
    url: `${siteUrl}/inventory/${car.id}`,
    lastModified: car.updatedAt,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...carRoutes];
}
