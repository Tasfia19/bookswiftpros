import React from 'react';
import ServicesCard from './ServicesCard';
import { Service } from '../data/Services';

const Services = () => {
  return (
    <section className="mx-auto">
      <h2 className="mb-12 text-center text-4xl font-semibold text-gray-900">
        Snapshot of Services
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Service.map((item, index) => (
          <ServicesCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
