import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from './lib/utils';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'BookSwiftPros | Modern Bookkeeping Solutions',
    template: '%s | BookSwiftPros',
  },
  description:
    'Professional bookkeeping and accounting services for fast-moving businesses.',
  metadataBase: new URL('https://bookswiftpros.com'),
  openGraph: {
    title: 'BookSwiftPros',
    description: 'Professional bookkeeping for pros.',
    url: 'https://bookswiftpros.com',
    siteName: 'BookSwiftPros',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          'bg-background min-h-screen font-sans antialiased',
          inter.variable,
        )}
      >
        {/* Persistent Navbar */}
        <Navbar />

        {/* Page content */}
        <main className="mt-[150px]">{children}</main>

        {/* Persistent Footer */}
        <Footer />
      </body>
    </html>
  );
}
