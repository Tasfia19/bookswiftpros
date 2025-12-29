import React from 'react';
import Image from 'next/image';

const brands = [
  { src: 'excelsheet.png', width: 120, height: 58 },
  { src: 'xero.svg', width: 160, height: 48 },
  { src: 'zoho.svg', width: 160, height: 48 },
  { src: 'excelsheet.png', width: 120, height: 58 },
  { src: 'xero.svg', width: 160, height: 48 },
  { src: 'zoho.svg', width: 160, height: 48 },
];

const BrandImages = () => (
  <div className="animate-loop-scroll flex flex-shrink-0 items-center justify-center space-x-8 pt-[60px] pr-16 md:space-x-16">
        {[...brands, ...brands].map((brand, index) => (
        <div key={index} className="flex items-center justify-center flex-shrink-0 ">
      <Image
        key={index}
        src={`/brands/${brand.src}`}
        alt="brand"
        width={brand.width}
        height={brand.height}
         />
        </div>  
    ))}
  </div>
);

const Brands = () => {
  return (
    <section className="w-full overflow-hidden py-10 text-center">
      <p className="mb-6 text-gray-600">
        Join 10k+ Users, 35+ Solo Practitioners and 60+ Businesses all over the
        World
      </p>

      <div className="flex overflow-hidden">
        <BrandImages />
        <BrandImages aria-hidden="true" />
      </div>
    </section>
  );
};

export default Brands;
