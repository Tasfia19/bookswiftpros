import React from 'react';
import AboutHeading from '../components/sections/AboutUs/AboutHeading';
import OurStory from '../components/sections/AboutUs/OurStory';
import OurValues from '../components/sections/AboutUs/OurValues';
import Team from '../components/sections/AboutUs/Team';

const page = () => {
  return (
    <div className="mx-auto w-full max-w-[1280px]">
      <div className="pt-6px">
        <section className="text-center">
          <AboutHeading />
          < OurStory />
          <OurValues/>
          <Team/>
        </section>
      </div>
    </div>
  );
};

export default page;
