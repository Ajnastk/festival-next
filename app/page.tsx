"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/button";
import { Progress } from "@/components/progress";
import ProductShowcase from "@/components/products";
import banner from "@/public/images/bannerimg.png";
import {
  MessageCircle,
  Calendar,
  Star,
  Zap,
  Clock,
  Users,
  Sparkles,
  Heart,
  X,
} from "lucide-react";

export default function Home() {
  const [bookingProgress, setBookingProgress] = useState(20);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppContact = () => {
    window.open(
      "https://wa.me/919876543210?text=Hi! I would like to book an Onam dress.",
      "_blank"
    );
  };

  const handleBookNow = () => {
    window.open(
      "https://wa.me/919876543210?text=I want to book my Onam dress for ₹99!",
      "_blank"
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-emerald-50 to-amber-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-emerald-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-emerald-800 font-medium">
            Loading Onam Collection...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-emerald-50 to-amber-100">
      {/* Navigation - Move outside hero for better structure */}
     <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-200">
  <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
    <div className="flex justify-between items-center h-14 sm:h-16">
      <div className="flex items-center space-x-1 sm:space-x-2">
        <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-emerald-600" />
        <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
          Onakkodi
        </span>
      </div>
      <Button
        onClick={handleWhatsAppContact}
        className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base"
      >
        <MessageCircle className="h-4 w-4 mr-1 sm:mr-2" />
        <span className="hidden xs:inline">Contact Us</span>
        <span className="xs:hidden">Contact</span>
      </Button>
    </div>
  </div>
</nav>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(${banner.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center py-12 sm:py-16 md:py-20">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 md:mb-12 bg-gradient-to-r from-emerald-800 to-amber-700 bg-clip-text text-transparent leading-tight">
            Onam Dress Selection
            <br />
            <span className="text-red-600">Chaos?</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
            Skip the last-minute rush! Pre-book your perfect Onam dress from our
            curated collection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button
              onClick={handleBookNow}
              className="bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 whitespace-nowrap w-full sm:w-auto"
            >
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              Book Now for ₹99 per Person
            </Button>
            <div className="flex items-center text-emerald-700">
              <Star className="h-5 w-5 text-amber-500 mr-1" />
              <span className="text-amber-200 font-medium text-sm sm:text-base">
                4.9/5 from 1,200+ customers
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="collections">
        <ProductShowcase />
      </div>

      {/* Collection Launch Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-800 via-emerald-700 to-amber-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col justify-center text-center">
            <h4 className="text-xl md:text-2xl font-semibold mb-8 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              Collection Launches August 1st
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              Early Bird Benefits
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="bg-white/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                  <Clock className="h-8 w-8 mx-auto text-amber-300 group-hover:text-amber-200" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Priority Delivery
                </h3>
                <p className="text-amber-100">Get your dress first</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="bg-white/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                  <Sparkles className="h-8 w-8 mx-auto text-amber-300 group-hover:text-amber-200" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Exclusive Designs
                </h3>
                <p className="text-amber-100">Limited collection access</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="bg-white/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                  <Heart className="h-8 w-8 mx-auto text-amber-300 group-hover:text-amber-200" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
                <p className="text-amber-100">Early bird discounts</p>
              </div>
            </div>

            <div className="max-w-lg mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-amber-200">
                    Bookings Progress
                  </span>
                  <span className="text-sm font-bold text-white bg-amber-600 px-3 py-1 rounded-full">
                    {bookingProgress}% of 500
                  </span>
                </div>

                {/* Enhanced Progress Bar */}
                <div className="relative">
                  <Progress
                    value={bookingProgress}
                    className="h-4 bg-emerald-900/50 border  border-emerald-700/50 shadow-inner"
                  />
                  {/* Glow effect */}
                  <div
                    className="absolute top-0 left-0 h-4 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 rounded-full shadow-lg shadow-amber-300/50 transition-all duration-500 "
                    style={{
                      width: `${bookingProgress}%`,
                      boxShadow:
                        "0 0 20px rgba(251, 191, 36, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                    }}
                  />
                  {/* Animated shine effect */}
                  <div
                    className="absolute top-0 left-0 h-4 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full animate-pulse"
                    style={{ width: `${bookingProgress}%` }}
                  />
                </div>

                <div className="flex items-center justify-center mt-4 space-x-2">
                  <Users className="h-5 w-5 text-amber-300" />
                  <p className="text-amber-200 font-medium">
                    {Math.floor(bookingProgress * 5)} Schools already booked!
                  </p>
                </div>

                {/* Urgency indicator */}
                <div className="mt-4 text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-200 border border-red-400/30">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
                    Limited Time Offer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-8 w-8 text-amber-400" />
            <span className="text-2xl font-bold">Onakkodi</span>
          </div>
          <p className="text-amber-200 mb-4">
            Making Onam shopping stress-free, one dress at a time
          </p>
          <div className="flex justify-center space-x-6">
            <Button
              variant="ghost"
              onClick={handleWhatsAppContact}
              className="text-amber-200 hover:text-white"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={handleWhatsAppContact}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg animate-pulse"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
