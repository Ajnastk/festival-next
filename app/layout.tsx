import './globals.css';
import type { Metadata } from 'next';

import { Unbounded } from "next/font/google";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
});

export const metadata: Metadata = {
  title: 'Onakkodi - Pre-book Your Perfect Onam Dress',
  description: 'Skip the last-minute rush! Pre-book your perfect Onam traditional dress from our curated collection. Early bird benefits and exclusive designs await.',
  keywords: 'Onam, Kerala dress, traditional wear, pre-booking, Onakkodi, festival dress',
  openGraph: {
    title: 'Onakkodi - Pre-book Your Perfect Onam Dress',
    description: 'Skip the last-minute rush! Pre-book your perfect Onam traditional dress from our curated collection.',
    type: 'website',
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={unbounded.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}