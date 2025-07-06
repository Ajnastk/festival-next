import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";

interface NavigationProps {
  onWhatsAppContact: () => void;
}

export default function Navigation({ onWhatsAppContact }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <Link href="/">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-emerald-600" />
              <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                Onakkodi
              </span>
            </div>
          </Link>
          <Button
            onClick={onWhatsAppContact}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base"
          >
            <MessageCircle className="h-4 w-4 mr-1 sm:mr-2" />
            <span className="hidden xs:inline">Contact Us</span>
            <span className="xs:hidden">Contact</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
