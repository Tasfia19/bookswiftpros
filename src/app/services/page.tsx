import React from 'react';
import ServiceHeading from '../components/sections/Services/ServiceHeading';
import ServicesSection from '../components/sections/Services/ServiceSection';
import ServiceEnd from '../components/sections/Services/ServiceEnd';

const page = () => {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="pt-6px">
        <section className="text-center">
          <ServiceHeading />
          <ServicesSection />
          <ServiceEnd />
        </section>
      </div>
    </div>
  );
};

export default page;
