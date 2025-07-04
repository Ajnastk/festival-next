import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Onakkodi - Pre-book Your Perfect Onam Dress',
  description: 'Skip the last-minute rush! Pre-book your perfect Onam traditional dress from our curated collection. Early bird benefits and exclusive designs await.',
  keywords: 'Onam, Kerala dress, traditional wear, pre-booking, Onakkodi, festival dress',
  openGraph: {
    title: 'Onakkodi - Pre-book Your Perfect Onam Dress',
    description: 'Skip the last-minute rush! Pre-book your perfect Onam traditional dress from our curated collection.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}