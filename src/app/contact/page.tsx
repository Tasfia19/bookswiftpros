import React from 'react';
import ContactHeading from '../components/sections/Contact/ContactHeading';
import ContactBox from '../components/sections/Contact/ContactBox';

const page = () => {
  return (
    <div className="mx-auto w-full max-w-[1280px]">
      <div className="pt-6px">
        <section className="text-center">
          <ContactHeading />
          <ContactBox/>
        </section>
      </div>
    </div>
  );
};

export default page;
