import React from 'react';

const ServiceEnd = () => {
  return (
    <div className="my-20 flex justify-center">
      <div className="w-[1200px] rounded-xl border border-[#D7D7D7] p-10">
        {/* Title */}
        <h1 className="mb-12 text-center text-4xl font-normal">
          Request a Quote
        </h1>

        {/* Form Grid */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-8 text-left">
          {/* Name */}
          <div className="flex flex-col">
            <label className="mb-2 text-base font-semibold">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm outline-none focus:border-gray-400"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-2 text-base font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm outline-none focus:border-gray-400"
            />
          </div>

          {/* Company Name */}
          <div className="flex flex-col">
            <label className="mb-2 text-base font-semibold">Company Name</label>
            <input
              type="text"
              placeholder="Enter your company name"
              className="rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm outline-none focus:border-gray-400"
            />
          </div>

          {/* Interested Services */}
          <div className="flex flex-col">
            <label className="mb-2 text-base font-semibold">
              Interested Services
            </label>
            <select className="rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm outline-none focus:border-gray-400">
              <option>Select</option>
              <option>Bookkeeping</option>
              <option>Tax Preparation</option>
              <option>Payroll</option>
              <option>Consulting</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="mb-2 text-base font-semibold">Message</label>
            <textarea
              placeholder="Message"
              rows={5}
              className="rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm outline-none focus:border-gray-400"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2 mt-6 flex justify-center">
            <button className="w-[220px] rounded-lg bg-[#EEF2F7] py-3 text-sm font-medium text-black transition hover:bg-[#E5E7EB]">
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceEnd;
