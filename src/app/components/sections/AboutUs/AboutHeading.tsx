import React from 'react';

const AboutHeading = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="h-[120px] w-[716px] text-5xl leading-normal font-normal">
          More Than Accountants Partners in Your Success
        </h1>
        <p className="mt-14 text-base leading-normal font-normal">
          At Financia, we're more than just number crunchers. We're your
          dedicated partners, committed to helping your business thrive. With a
          team of experienced professionals, we provide comprehensive
          bookkeeping solutions tailored to your unique needs. Our goal is to
          empower you with accurate financial insights, so you can make informed
          decisions and achieve your business objectives.
        </p>
        <div className="mt-16">
          <button className="rounded-xl bg-[#EEF4FA] px-20 py-5 font-bold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutHeading;
