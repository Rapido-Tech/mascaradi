"use client";

import { useState } from "react";
import Image from "next/image";

export function CarGallery({ image, images, alt }: { image: string; images: string[]; alt: string }) {
  const gallery = [image, ...images.filter((src) => src !== image)];
  const [active, setActive] = useState(gallery[0]);

  return (
    <div>
      <div className="relative aspect-[4/3] bg-muted rounded-lg overflow-hidden">
        <Image
          src={active}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority
          className="object-cover"
        />
      </div>

      {gallery.length > 1 && (
        <div className="grid grid-cols-5 gap-2 mt-3">
          {gallery.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setActive(src)}
              className={`relative aspect-[4/3] bg-muted rounded-md overflow-hidden border-2 transition-colors ${
                active === src ? "border-blue-600" : "border-transparent hover:border-border"
              }`}
            >
              <Image
                src={src}
                alt={`${alt} thumbnail ${i + 1}`}
                fill
                sizes="20vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
