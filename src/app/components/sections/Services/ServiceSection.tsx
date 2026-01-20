import React from 'react';
import ServiceCard from './ServiceCard';
import { serviceData } from './ServiceData/Data';

const ServicesSection = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {serviceData.map((service, index) => {
          const isLastSingle =
            serviceData.length % 2 === 1 && index === serviceData.length - 1;

          return (
            <div
              key={service.id}
              className={
                isLastSingle ? 'flex justify-center md:col-span-2' : ''
              }
            >
              <ServiceCard
                title={service.title}
                subtitle={service.subtitle}
                items={service.items}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;


