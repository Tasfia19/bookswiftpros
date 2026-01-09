import React from 'react';
import { IndustryServe } from '../../data/IndustryServe';
import ServeCard from './ServeCard';

const Serve = () => {
  return (
    <section className="mx-auto">
      <h2 className="mb-12 text-center text-4xl font-semibold text-gray-900">
        Industries We Serve
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {IndustryServe.map((item, index) => (
          <ServeCard
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

export default Serve;
