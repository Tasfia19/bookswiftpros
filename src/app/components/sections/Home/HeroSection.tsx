'use client';

import HeroImageSlider from './HeroImageSlider';

const HeroSection = () => {
  return (
    <section className="flex w-full items-center justify-between">
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl leading-normal font-bold text-gray-900 md:text-5xl">
            Numbers Made Simple Decisions Made Smarter
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            We take care of your books and finances — so you can focus on
            building your business and achieving lasting growth.
          </p>
        </div>
        <div className="mt-8 flex items-center justify-center gap-10">
          <button className="rounded-xl bg-[#EEF4FA] px-12 py-4 hover:bg-blue-100">
            Book a Free Consultation
          </button>
          <button className="rounded-xl border px-12 py-4 hover:bg-blue-100">
            Explore Pricing Plans
          </button>
        </div>
      </div>
      <div className="ml-10">
        <HeroImageSlider />
      </div>{' '}
    </section>
  );
};
export default HeroSection;
