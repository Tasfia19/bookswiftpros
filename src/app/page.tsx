'use client';
import Brands from './components/sections/Brands';
import Feedback from './components/sections/Feedback';
import HeroSection from './components/sections/HeroSection';
import Navbar from './components/sections/Navbar';
import OurPromise from './components/sections/OurPromise';
import KeyValuePropositions from './components/sections/Propositions';
import Serve from './components/sections/Serve';
import Services from './components/sections/Services';
import Footer from './components/sections/Footer';

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
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
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
