import Image from 'next/image';
import React from 'react';

const Team = () => {
  return (
    <section className="bg-white py-20">
      {/* Heading */}
      <h2 className="mb-16 text-center font-serif text-5xl font-normal text-gray-900">
        Meet the Team
      </h2>

      {/* Cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-3">
        {/* Card 1 */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-xl">
          <div className="relative mb-6 h-[220px] w-full overflow-hidden rounded-xl">
            <Image
              src="/AboutUS/team1.png"
              alt="Dain Miller"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-sm text-gray-700">Dain Miller, CPA</p>
          <h3 className="mt-2 text-lg font-semibold text-gray-900">
            Certified Professionals
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            ACCA, CPA, CIPFA, QuickBooks ProAdvisor, Xero Certified.
          </p>
        </div>

        {/* Card 2 (Highlighted) */}
        <div className="rounded-2xl border border-gray-300 bg-white p-6 shadow-lg ring-2 ring-gray-300 transition hover:shadow-2xl">
          <div className="relative mb-6 h-[220px] w-full overflow-hidden rounded-xl">
            <Image
              src="/AboutUS/team2.png"
              alt="David Chen"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-sm text-gray-700">David Chen, Senior Analyst</p>
          <h3 className="mt-2 text-lg font-semibold text-gray-900">
            Global Perspective
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            Experience across USA, UK, EU, Middle East, Australia & Asia.
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-xl">
          <div className="relative mb-6 h-[220px] w-full overflow-hidden rounded-xl">
            <Image
              src="/AboutUS/team3.png"
              alt="Emily Rodriguez"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-sm text-gray-700">
            Emily Rodriguez, Industry Specialist
          </p>
          <h3 className="mt-2 text-lg font-semibold text-gray-900">
            Industry Specialists
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            Teams dedicated to E-commerce, SaaS, Non-profits, Real Estate, and
            Construction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
