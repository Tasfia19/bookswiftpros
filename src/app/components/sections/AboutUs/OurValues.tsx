import React from 'react';
import { Values } from '../../data/value';
import ValueCard from './ValueCard';

const OurValues = () => {
  return (
    <section className="mx-auto">
      <h2 className="mb-12 text-center text-4xl font-semibold text-gray-900">
        Our Values
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Values.map((item, index) => (
          <ValueCard
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

export default OurValues;
