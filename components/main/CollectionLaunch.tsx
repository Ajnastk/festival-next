import { Progress } from "@/components/ui/progress";
import { Clock, Sparkles, Heart, Users } from "lucide-react";

interface CollectionLaunchProps {
  bookingProgress: number;
}

export default function CollectionLaunch({ bookingProgress }: CollectionLaunchProps) {
  return (
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
  );
}