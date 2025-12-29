'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="w-full">
   {/* LEFT CONTENT */}
      <div></div>
  {/* RIGHT CONTENT */ }
  <div></div>
    </section>
  );
};

export default HeroSection;
// {/* LEFT CONTENT */}
// <div className="flex w-1/2 flex-col  justify-center">
//   <h1 className="text-4xl leading-normal font-bold text-gray-900">
//     Numbers Made Simple Decisions Made Smarter
//   </h1>

//   <p className="mt-6 text-lg text-gray-600">
//     We take care of your books, and finances — so you can focus on
//     building your business and achieving lasting growth.
//   </p>

//   <div className="mt-10 flex gap-4">
//     <button className="rounded-xl bg-[#EEF4FA] px-6 py-3 font-medium text-black">
//       Book a Free Consultation
//     </button>

//     <button className="rounded-xl border border-black px-6 py-3 font-medium text-black">
//       Explore Pricing Plans
//     </button>
//   </div>
// </div>

// {/* RIGHT IMAGE STACK */}
// <div className="relative flex w-1/2 justify-end">
//   {/* Back Image */}
//   <div className="absolute top-4 right-40 z-0 w-[260px] overflow-hidden rounded-2xl shadow-lg">
//     <Image
//       src="/images/accounting-1.jpg"
//       alt="Accounting"
//       width={260}
//       height={360}
//       className="object-cover"
//     />
//   </div>

//   {/* Middle Image */}
//   <div className="absolute top-20 right-20 z-20 w-[300px] overflow-hidden rounded-2xl shadow-xl">
//     <Image
//       src="/images/accounting-2.jpg"
//       alt="Bookkeeping"
//       width={300}
//       height={400}
//       className="object-cover"
//     />
//   </div>

//   {/* Front Image */}
//   <div className="relative z-30 w-[340px] overflow-hidden rounded-2xl shadow-2xl">
//     <Image
//       src="/images/accounting-3.jpg"
//       alt="Finance"
//       width={340}
//       height={440}
//       className="object-cover"
//     />
//   </div>

//   {/* Dots */}
//   <div className="absolute right-32 bottom-[-40px] flex gap-3">
//     <span className="h-3 w-3 rounded-full border border-gray-300"></span>
//     <span className="h-3 w-3 rounded-full border border-gray-300"></span>
//     <span className="h-3 w-3 rounded-full bg-gray-300"></span>
//   </div>
// </div>
