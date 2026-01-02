import React from 'react';
import Image from 'next/image';

const brands = () => {
  const brands = [
    { src: 'excel.png', width: 160, height: 48 },
    { src: 'zoho.svg', width: 160, height: 48 },
    { src: 'odoo.png', width: 160, height: 48 },
    { src: 'xerox.png', width: 160, height: 48 },
    { src: 'quickbook.png', width: 160, height: 48 },
  ];

  const BrandImages = () => (
    <div className="flex flex-shrink-0 items-center justify-center space-x-10 md:space-x-16">
      {brands.map((brand, index) => (
        <div
          key={index}
          className="flex flex-shrink-0 items-center justify-center"
        >
          <Image
            src={`/brands/${brand.src}`}
            alt="brand"
            width={brand.width}
            height={brand.height}
          />
        </div>
      ))}
    </div>
  );

  return (
    <section className="pb-[70px] text-center font-medium md:w-[768px] lg:w-[1024px] xl:w-[1440px] ">
      <p className="xs:pt-2 text-gray-600 md:pt-6">
        Join us and BookSwiftPros will handle your books with precision.
      </p>

      <div className="relative overflow-hidden">
        {/* Animated container */}
        <div className="animate-scroll flex">
          <BrandImages />
          <BrandImages />
        </div>
      </div>

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
          display: flex;
          width: max-content;
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default brands;
