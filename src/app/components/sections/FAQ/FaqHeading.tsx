'use client';
import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

const faqs = [
  {
    question: 'Do you work internationally?',
    answer:'Yes — we serve clients across USA, UK, EU, Canada, Australia & Asia.',
  },
  {
    question: 'What software do you use?',
    answer:'QuickBooks, Xero, Wave, Zoho, AppFolio, integrated with Shopify, Amazon, Stripe, PayPal & more.',
  },
  {
    question: 'How do you ensure data security?',
    answer:
      'We use encrypted systems, NDAs, and GDPR-compliant data handling practices.',
  },
  {
    question: 'What industries do you specialize in?',
    answer:
      'E-commerce, SaaS, Non-profits, Real Estate, Construction, Agencies, Startups.',
  },
];

const FaqHeading = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-20 text-center text-4xl">Frequently Asked Questions</h2>

      <div className="border-t border-[#E5E8EB] my-20">
        {faqs.map((faq, index) => ( 
          <div key={index} className="border-b border-[#E5E8EB] py-5">
            <button
              onClick={() => toggleFaq(index)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="font-medium">Q: {faq.question}</span>

              <RiArrowDropDownLine
                size={28}
                className={`transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            {openIndex === index && (
              <p className="mt-3 text-[#61758A] text-left">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqHeading;
