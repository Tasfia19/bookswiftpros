import Image from 'next/image';
import React from 'react';

const ContactHeading = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-5xl">Let’s Build Financial Clarity Together</h1>
        <p className="mt-10 h-[48] w-[700px] text-base font-semibold">
          We’d love to hear from you. Whether you need clean books, strategic
          advice, or full CFO support — let’s talk.
        </p>
      </div>
      <div className="mt-20 flex items-center justify-center">
        <Image
          src="/contact/contact.png"
          alt="Contact"
          width={973}
          height={546}
        />
      </div>

      {/*Boxes */}
      <div className="flex flex-row items-center justify-center gap-14 my-20">
        <div className="h-[90px] w-[266px] rounded-xl bg-[#EEF4FA] p-5">
          <p>Global HQ</p>
          <p>Dhaka, Bangladesh</p>
        </div>
        <div className="h-[90px] w-[266px] rounded-xl bg-[#EEF4FA] p-5">
          <p>Email</p>
          <p>info@[yourdomain].com</p>
        </div>
        <div className="h-[90px] w-[266px] rounded-xl bg-[#EEF4FA] p-5">
          <p>Phone/WhatsApp</p>
          <p>+880 xxx xxx xxxx</p>
        </div>
      </div>
    </div>
  );
};

export default ContactHeading;
