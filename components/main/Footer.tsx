import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

interface FooterProps {
  onWhatsAppContact: () => void;
}

export default function Footer({ onWhatsAppContact }: FooterProps) {
  return (
    <footer className="bg-emerald-900 text-white py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400" />
            <span className="text-xl sm:text-2xl font-bold">Onakkodi</span>
          </div>
          <p className="text-amber-200 text-sm sm:text-base mb-6">
            Making Onam shopping stress-free, one dress at a time
          </p>

          {/* WhatsApp Button - Uncomment if needed */}
          {/* <div className="flex justify-center">
            <Button
              variant="ghost"
              onClick={onWhatsAppContact}
              className="text-amber-200 hover:text-white hover:bg-emerald-800 transition-colors"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp
            </Button>
          </div> */}
        </div>

        {/* Divider */}
        <div className="border-t border-emerald-800 mb-8"></div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Phone */}
          <div className="flex items-start space-x-3 sm:text-left">
            <Phone className="h-5 w-5 text-amber-200 mt-1 flex-shrink-0 mx-auto sm:mx-0" />
            <div className="flex-1">
              <h3 className="text-amber-200 font-medium text-xs sm:text-sm mb-2 tracking-wide">
                PHONE
              </h3>
              <p className="text-white text-sm break-all">+91 7736724315</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-3 sm:text-left">
            <Mail className="h-5 w-5 text-amber-200 mt-1 flex-shrink-0 mx-auto sm:mx-0" />
            <div className="flex-1">
              <h3 className="text-amber-200 font-medium text-xs sm:text-sm mb-2 tracking-wide">
                EMAIL
              </h3>
              <p className="text-white text-sm break-all">
                onakodi.com@gmail.com
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start space-x-3 sm:text-left">
            <MapPin className="h-5 w-5 text-amber-200 mt-1 flex-shrink-0 mx-auto sm:mx-0" />
            <div className="flex-1">
              <h3 className="text-amber-200 font-medium text-xs sm:text-sm mb-2 tracking-wide">
                ADDRESS
              </h3>
              <p className="text-white text-sm leading-relaxed">
                HiLite Business Park
                <br />
                Calicut, Kerala, India
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex items-start space-x-3  sm:text-left">
            <Clock className="h-5 w-5 text-amber-200 mt-1 flex-shrink-0 mx-auto sm:mx-0" />
            <div className="flex-1">
              <h3 className="text-amber-200 font-medium text-xs sm:text-sm mb-2 tracking-wide">
                OPENING HOURS
              </h3>
              <p className="text-white text-sm leading-relaxed">
                Mon to Sat: 9.00am - 8.30pm
                <br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section - Optional */}
        <div className="border-t border-emerald-800 mt-8 pt-6 text-center">
          <p className="text-amber-200 text-xs sm:text-sm">
            © 2025 Onakkodi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
