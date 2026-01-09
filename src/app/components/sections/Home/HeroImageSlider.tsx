'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/accounting-1.jpg',
  '/images/accounting-2.jpg',
  '/images/accounting-3.jpg',
];

const HeroImageSlider = () => {
  const [active, setActive] = useState(0);

  // Auto-loop effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[360px] w-[420px]">
      {/* Image Cards */}
      {images.map((img, index) => {
        const position = (index - active + images.length) % images.length;

        return (
          <div
            key={index}
            className="absolute inset-0 transition-all duration-500 ease-out"
            style={{
              transform: `
                translateX(${position * 60}px)
                translateY(${-position * 30}px)
                scale(${1 - position * 0.03})
              `,
              zIndex: 60 - position,
              opacity: position < 0 ? 0 : 1,
            }}
          >
            <Image
              src={img}
              alt="Accounting Service"
              width={388}
              height={262}
              className="h-full w-full rounded-3xl object-cover shadow-xl"
              priority={index === active}
            />
          </div>
        );
      })}

      {/* Scrollable Dots */}
      <div className="absolute -bottom-10 left-1/2 w-[180px] -translate-x-1/2 overflow-x-auto">
        <div className="relative mx-auto flex w-max items-center gap-3 px-2 py-2">
          {/* Animated indicator */}
          <span
            className="absolute top-1/2 left-2 h-3 w-3 -translate-y-1/2 rounded-full bg-gray-800 transition-all duration-500 ease-out"
            style={{
              transform: `translate(${active * 24}px, -50%)`,
            }}
          />

          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative z-10 h-3 w-3 rounded-full transition-all duration-300 ${
                i === active ? 'scale-125' : 'bg-gray-300 hover:scale-110'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroImageSlider;
