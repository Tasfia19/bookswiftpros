import  Image  from 'next/image';
import React from 'react';
import { HiOutlineDocumentText, HiOutlineEye } from 'react-icons/hi';

const OurStory = () => {
  return (
    <section className="w-full bg-white py-24">
      {/* Our Story */}
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h1 className="mb-8 text-4xl font-normal">Our Story</h1>

        <p className="mx-auto max-w-4xl text-base leading-relaxed text-gray-700">
          `Founded with a vision to simplify financial management, we started
          our journey to help businesses focus on growth while we handle the
          numbers. From small startups to established companies, we’ve partnered
          with organizations across industries, delivering accurate bookkeeping,
          insightful advisory, and compliant financial solutions. Over the
          years, we’ve combined expertise, technology, and personalized service
          to create a trusted financial partner for our clients. Our story is
          driven by a commitment to clarity, reliability, and empowering
          businesses with the insights they need to thrive. We don’t just manage
          numbers — we transform them into actionable insights, helping
          businesses plan, grow, and succeed with confidence.`
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="mx-auto mt-20 max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Mission */}
          <div>
            <h2 className="mb-6 text-center text-2xl font-bold">Our Mission</h2>

            <div className="h-[491px] w-[500px] rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:shadow-2xl">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/AboutUS/Mission.svg"
                  alt=""
                  width={64}
                  height={64}
                />
              </div>

              <h3 className="mb-4 text-lg font-semibold">Our Mission</h3>

              <p className="text-sm leading-relaxed text-gray-600">
                To empower businesses with clarity, accuracy, and actionable
                financial insights that drive growth and confidence. We aim to
                simplify complex financial processes, ensure compliance, and
                provide strategic guidance — so our clients can focus on what
                they do best: growing their business. Through technology,
                expertise, and personalized service, our mission is to be a
                trusted partner that transforms numbers into meaningful insights
                and enables smarter, data-driven decisions.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div>
            <h2 className="mb-6 text-center text-2xl font-semibold">Our Vision</h2>

            <div className="h-[491px] w-[500px] rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:shadow-2xl">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/AboutUS/Vision.svg"
                  alt=""
                  width={64}
                  height={64}
                />
              </div>

              <h3 className="mb-4 text-lg font-semibold">Our Vision</h3>

              <p className="text-sm leading-relaxed text-gray-600">
                To be the leading partner for businesses worldwide, delivering
                innovative, accurate, and reliable financial solutions. We
                envision a world where businesses of all sizes have access to
                clear insights, smart advisory, and seamless financial
                management — enabling sustainable growth and confident
                decision-making. Through a combination of expertise, technology,
                and personalized service, our vision is to transform the way
                businesses manage their finances, making accounting and advisory
                not just accurate, but truly empowering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
