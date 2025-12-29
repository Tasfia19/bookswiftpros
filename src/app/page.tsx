'use client';
import Brands from './components/sections/Brands';
import Counting from './components/sections/Counting';
import HeroSection from './components/sections/HeroSection';
import Navbar from './components/sections/Navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mx-auto">
      <Navbar />
      <HeroSection />
    </main>
  );
}
