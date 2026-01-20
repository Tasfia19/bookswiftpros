import React from 'react';

const ContactBox = () => {
  return (
    <div>
      <div className="text-3xl">Contact US</div>
      <div className="my-16">
        {/*Name & Email */}
        <div className="flex flex-row items-center justify-center gap-x-32">
          <div className="flex flex-col text-left">
            <label className="mb-2 ml-2 text-base font-bold">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-[300px] rounded-xl border border-[#EEF4FA] bg-[#EEF4FA] px-4 py-2 outline-none focus:border-gray-400"
            />
          </div>
          <div className="flex flex-col text-left">
            <label className="mb-2 ml-2 text-base font-bold">Email</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-[300px] rounded-xl border border-[#EEF4FA] bg-[#EEF4FA] px-4 py-2 outline-none focus:border-gray-400"
            />
          </div>
        </div>
        {/*Comapny & Email */}
        <div className="mt-6 flex flex-row items-center justify-center gap-x-32">
          <div className="flex flex-col text-left">
            <label className="mb-2 ml-2 text-base font-bold">Company</label>
            <input
              type="text"
              placeholder="Enter Your Company Name"
              className="w-[300px] rounded-xl border border-[#EEF4FA] bg-[#EEF4FA] px-4 py-2 outline-none focus:border-gray-400"
            />
          </div>
          <div className="flex flex-col text-left">
            <label className="mb-2 ml-2 text-base font-bold">
              Service Needed
            </label>
            <select className="w-[300px] rounded-lg border border-[#EEF4FA] bg-[#EEF4FA] px-4 py-3 text-sm outline-none focus:border-gray-400">
              <option>Select</option>
              <option>Bookkeeping</option>
              <option>Tax Preparation</option>
              <option>Payroll</option>
              <option>Consulting</option>
            </select>
          </div>
        </div>
        {/*Message */}
        <div className="flex flex-col items-center justify-center mt-20">
          <label className="mb-2 text-base font-semibold">Message</label>
          <textarea
            placeholder="Message"
            rows={5}
            className="w-[500px] rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm outline-none focus:border-gray-400"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-2 mt-10 flex justify-center">
          <button className="w-[220px] rounded-lg bg-[#EEF2F7] py-3 text-sm font-medium text-black transition hover:bg-[#E5E7EB]">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;
