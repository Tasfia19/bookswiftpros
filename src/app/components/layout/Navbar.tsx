'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'SERVICES', href: '/services' },
  { name: 'PRICING', href: '/pricing' },
  { name: 'FAQ', href: '/faq' },
  { name: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('HOME');

  return (
    <header className="fixed top-0 z-99999 w-full">

      {/* ===== Main Navbar ===== */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/books_swift_pros_logo.png"
              alt="BookSwiftPros"
              width={180}
              height={45}
              priority
            />
          </Link>

          {/* Menu */}
          <ul className="items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setActive(link.name)}
                  className={`relative font-medium transition ${
                    active === link.name
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.name}

                  {active === link.name && (
                    <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-blue-600"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
