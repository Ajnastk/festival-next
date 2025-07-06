import { Button } from "@/components/ui/button";
import { Star, Zap } from "lucide-react";

interface HeroSectionProps {
  bannerImageSrc: string;
  onBookNow: () => void;
}

export default function HeroSection({ bannerImageSrc, onBookNow }: HeroSectionProps) {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(${bannerImageSrc})`,
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
            onClick={onBookNow}
            className="bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 whitespace-nowrap w-full sm:w-auto"
          >
            <Zap className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            Book Now for ₹99 per Person
          </Button>
          <div className="flex items-center text-emerald-700">
            <Star className="h-5 w-5 text-amber-500 mr-1" />
            <span className="text-amber-200 font-medium text-sm sm:text-base">
              4.9/5 from 720+ customers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}