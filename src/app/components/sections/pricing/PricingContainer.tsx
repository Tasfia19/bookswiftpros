import React from 'react';
import { addOns, pricingPlans } from './PricingData';
import { BiCheck } from 'react-icons/bi';
import Image from 'next/image';

const PricingContainer = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl">Transparent Flexible No hidden fees</h1>
      </div>
      {/* Pricing Cards */}
      <div className="my-20 grid grid-cols-1 gap-8 md:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="h-[420px] w-[400px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 ease-in-out hover:bg-blue-200 hover:shadow-2xl"
          >
            <div className="mt-4">
              <p className="text-xl font-bold text-gray-700">{plan.tag}</p>

              <h3 className="mt-4 font-semibold">{plan.title}</h3>

              <p className="mt-2 text-3xl font-semibold">
                {plan.price}
                {plan.period && (
                  <span className="text-base font-normal">{plan.period}</span>
                )}
              </p>

              <button className="mt-6 w-full rounded-md bg-gray-100 py-2 text-sm font-medium">
                {plan.buttonText}
              </button>

              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <BiCheck size={24} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Add-ons */}
      <h3 className="mb-10 text-center text-3xl font-semibold">
        Custom Add-Ons
      </h3>

      <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        {addOns.map((addon, index) => (
          <div
            key={index}
            className="flex h-[80px] w-[350px] items-center justify-center gap-5 rounded-xl border border-gray-200 shadow-sm transition-colors duration-300 ease-in-out hover:bg-blue-100"
          >
            <Image src={addon.icon} alt="addon" width={60} height={60} />
            <p className="font-medium">{addon.title}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="my-20 text-center">
        <button className="rounded-xl bg-[#EEF4FA] px-6 py-4 text-base font-semibold">
          Request Custom Quote
        </button>
      </div>
    </div>
  );
};

export default PricingContainer;
