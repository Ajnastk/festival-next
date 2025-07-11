import './globals.css';
import type { Metadata } from 'next';
import { Unbounded } from "next/font/google";
import ClientLayout from "@/components/main/ClientLayout";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
});

export const metadata = {
  title: "Onakkodi",
  description: "Pre-book your Onam dress",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={unbounded.variable}>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}