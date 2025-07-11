"use client";

import { useState, useEffect } from "react";
import ProductShowcase from "@/components/main/Products";
import banner from "@/public/images/bannerimg.png";

// Import our new components
import HeroSection from "@/components/main/HeroSection";
import CollectionLaunch from "@/components/main/CollectionLaunch";
import Loading from "@/components/ui/Loading";


export default function Home() {
  const [bookingProgress, setBookingProgress] = useState(15);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleBookNow = () => {
    window.open(
      "https://wa.me/+917736724315?text=I would like to book an Onam dress.",
      "_blank"
    );
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-gradient-to-br from-amber-50 via-emerald-50 to-amber-100">
      <HeroSection 
        bannerImageSrc={banner.src} 
        onBookNow={handleBookNow} 
      />

      <div className="collections">
        <ProductShowcase />
      </div>

      <CollectionLaunch bookingProgress={bookingProgress} />
    </div>
  );
}