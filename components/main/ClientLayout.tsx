"use client";

import Navigation from "@/components/main/Navigation";
import Footer from "@/components/main/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const handleWhatsAppContact = () => {
    window.open(
      "https://wa.me/+917736724315?text=Hi! I would like to book an Onam dress.",
      "_blank"
    );
  };

  return (
    <>
      <Navigation onWhatsAppContact={handleWhatsAppContact} />
      
      <main className="min-h-screen">
        {children}
      </main>
      
      <Footer onWhatsAppContact={handleWhatsAppContact} />
      <FloatingWhatsApp onWhatsAppContact={handleWhatsAppContact} />
    </>
  );
}