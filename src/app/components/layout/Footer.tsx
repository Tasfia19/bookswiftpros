import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import SocialMedia from '../sections/Home/SocialMedia';

const Footer = () => {
  return (
    <footer className="bg-[#0c2b3a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Logo & Newsletter */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Link href="/">
                <Image
                  src="/books_swift_pros_logo.png"
                  alt="BookSwiftPros"
                  width={200}
                  height={45}
                  priority
                />
              </Link>
            </div>

            <p className="mb-6 max-w-md text-sm text-gray-300">
              Enter your Email and receive information in your inbox
            </p>

            <div className="flex max-w-md gap-4">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full rounded-md bg-white px-4 py-3 text-gray-800 focus:outline-none"
              />
              <button className="rounded-md bg-white px-6 py-3 font-medium text-gray-900 transition hover:bg-gray-200">
                Send
              </button>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-4 font-semibold tracking-wide">ABOUT</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="cursor-pointer hover:text-white">Our Story</li>
              <li className="cursor-pointer hover:text-white">Our Mission</li>
              <li className="cursor-pointer hover:text-white">Our Values</li>
              <li className="cursor-pointer hover:text-white">Meet the Team</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold tracking-wide">CONTACT</h4>
            <p className="mb-2 text-sm text-gray-300">
              Email: info@yourdomain.com
            </p>
            <p className="text-sm text-gray-300">+880 xxx xxx xxxx</p>
            <div className="mt-6">
              <p className="mb-4">Follow Us</p>
              <SocialMedia />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-500/40"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-300 md:flex-row">
          <p>2025 All rights reserved</p>

          <div className="flex gap-6 text-sm">
            <span className="cursor-pointer hover:text-white">
              privacy policy
            </span>
            <span className="cursor-pointer hover:text-white">
              Terms of services
            </span>
            <span className="cursor-pointer hover:text-white">About</span>
            <span className="cursor-pointer hover:text-white">FAQs</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
