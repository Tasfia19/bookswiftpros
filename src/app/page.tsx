'use client';
import Brands from './components/sections/Brands';
import HeroSection from './components/sections/HeroSection';
import Navbar from './components/sections/Navbar';

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <section className="container mx-auto mt-[150px] w-full pt-11 pb-16">
        <HeroSection />
        <div className="mt-40">
          <Brands />
        </div>
      </section>
    </div>
  );
}

