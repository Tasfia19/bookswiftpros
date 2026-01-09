import React from 'react';
import { keyValuePropositions } from '../../data/PropositionsData';
import Card from './Card';

const KeyValuePropositions = () => {
  return (
    <section className="mx-auto">
      <h2 className="mb-12 text-center text-4xl font-semibold text-gray-900">
        Key Value Propositions
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {keyValuePropositions.map((item, index) => (
          <Card
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

export default KeyValuePropositions;
