import React from 'react';
import FaqHeading from '../components/sections/FAQ/FaqHeading';
import FaqQA from '../components/sections/FAQ/FaqQA';

const page = () => {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="pt-6px">
        <section className="text-center">
          <FaqHeading />
        </section>
      </div>
    </div>
  );
};

export default page;
