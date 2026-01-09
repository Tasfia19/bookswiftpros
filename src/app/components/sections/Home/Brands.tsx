'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Brand {
  src: string;
  width: number;
  height: number;
  alt?: string;
}

interface BrandsProps {
  brandList?: Brand[];
  speed?: number;
}

const defaultBrands: Brand[] = [
  { src: 'excel.png', width: 160, height: 48, alt: 'Excel' },
  { src: 'zoho.svg', width: 160, height: 48, alt: 'Zoho' },
  { src: 'odoo.png', width: 160, height: 48, alt: 'Odoo' },
  { src: 'xerox.png', width: 160, height: 48, alt: 'Xerox' },
  { src: 'quickbook.png', width: 160, height: 48, alt: 'QuickBooks' },
];

const Brands: React.FC<BrandsProps> = ({
  brandList = defaultBrands,
  speed = 20,
}) => {
  const [mounted, setMounted] = useState(false);

  // Ensure the animation container only renders on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="max-w-[1440px] px-4 pb-16 text-center font-medium">
      <p className="pt-2 text-gray-600 md:pt-6">
        Join us and BookSwiftPros will handle your books with precision.
      </p>

      <div className="relative mt-8 overflow-hidden">
        {mounted && (
          <div
            className="animate-scroll flex gap-10"
            style={{
              animation: `scroll ${speed}s linear infinite`,
            }}
          >
            {[...brandList, ...brandList].map((brand, idx) => (
              <div
                key={idx}
                className="flex flex-shrink-0 items-center justify-center"
              >
                <Image
                  src={`/brands/${brand.src}`}
                  alt={brand.alt || 'Brand'}
                  width={brand.width}
                  height={brand.height}
                  priority
                  unoptimized
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tailwind animation keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          width: max-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Brands;
