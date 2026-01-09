'use client';
import Brands from './components/sections/Home/Brands';
import Feedback from './components/sections/Home/Feedback';
import HeroSection from './components/sections/Home/HeroSection';
import OurPromise from './components/sections/Home/OurPromise';
import KeyValuePropositions from './components/sections/Home/Propositions';
import Services from './components/sections/Home/Services';
import Serve from './components/sections/Home/Serve';

export default function Home() {
  return (
    <div className="w-full">
      <section className="container mx-auto mt-[150px] w-full pt-11 pb-16">
        <HeroSection />
        <div className="mt-40">
          <Brands />
        </div>
        <div className="mt-10">
          <OurPromise />
        </div>
        <div className="mt-16">
          <KeyValuePropositions />
        </div>
        <div className="mt-16">
          <Services />
        </div>
        <div className="mt-16">
          <Serve />
        </div>
        <div className="mt-16">
          <Feedback />
        </div>
      </section>
    </div>
  );
}
