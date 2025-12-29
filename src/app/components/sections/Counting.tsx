'use client';
import { useEffect, useState } from 'react';

export default function StatsSection() {
  const [companies, setCompanies] = useState(0);
  const [projects, setProjects] = useState(0);
  const [hours, setHours] = useState(0);

  // Count-up effect
  useEffect(() => {
    let c = 0,
      p = 0,
      h = 0;

    const interval = setInterval(() => {
      if (c < 60) setCompanies(++c);
      if (p < 120) setProjects(++p);
      if (h < 70000) setHours((h += 500)); 
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-[#CDE5FA] to-[#58B4F7] pt-10 pb-20 text-center">
      <h2 className="mb-12 text-4xl font-semibold text-black md:text-5xl">
        For Past 10 Years We Have Served
      </h2>

      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-20">
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <div className="rounded-xl bg-white px-10 py-6 text-4xl font-semibold shadow-xl">
            {companies}
          </div>
          <p className="mt-4 text-xl font-medium">Companies</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <div className="rounded-xl bg-white px-10 py-6 text-4xl font-semibold shadow-xl">
            {projects}
          </div>
          <p className="mt-4 text-xl font-medium">Projects</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <div className="rounded-xl bg-white px-10 py-6 text-4xl font-semibold shadow-xl">
            {hours}
          </div>
          <p className="mt-4 text-xl font-medium">Hours</p>
        </div>
      </div>
    </section>
  );
}
