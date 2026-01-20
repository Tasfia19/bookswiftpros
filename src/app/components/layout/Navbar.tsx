'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'SERVICES', href: '/services' },
  { name: 'PRICING', href: '/pricing' },
  { name: 'FAQ', href: '/faq' },
  { name: 'CONTACT', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-[99999] w-full">
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
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(link.href));

              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`relative font-medium transition ${
                      isActive
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {link.name}

                    {isActive && (
                      <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-blue-600"></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
