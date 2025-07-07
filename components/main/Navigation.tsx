import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

interface NavigationProps {
  onWhatsAppContact: () => void;
}

// Optimized Logo Component
const OnakodiaLogo = ({ className = "" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 280 60" 
    className={`h-12 w-auto md:h-16 ${className}`}
    aria-label="Onakodi Logo"
  >
    {/* Flower/Star Symbol */}
    <g transform="translate(30,30)">
      <path 
        d="M0,-15 C5,-15 10,-7.5 0,0 C-10,-7.5 -5,-15 0,-15" 
        fill="#10b981" 
        transform="rotate(0)"
      />
      <path 
        d="M0,-15 C5,-15 10,-7.5 0,0 C-10,-7.5 -5,-15 0,-15" 
        fill="#3b82f6" 
        transform="rotate(60)"
      />
      <path 
        d="M0,-15 C5,-15 10,-7.5 0,0 C-10,-7.5 -5,-15 0,-15" 
        fill="#10b981" 
        transform="rotate(120)"
      />
      <path 
        d="M0,-15 C5,-15 10,-7.5 0,0 C-10,-7.5 -5,-15 0,-15" 
        fill="#3b82f6" 
        transform="rotate(180)"
      />
      <path 
        d="M0,-15 C5,-15 10,-7.5 0,0 C-10,-7.5 -5,-15 0,-15" 
        fill="#f59e0b" 
        transform="rotate(240)"
      />
      <path 
        d="M0,-15 C5,-15 10,-7.5 0,0 C-10,-7.5 -5,-15 0,-15" 
        fill="#06d6a0" 
        transform="rotate(300)"
      />
    </g>
    
    {/* Text */}
    <text 
      x="55" 
      y="40" 
      fontSize="24"  
      fontWeight="600"
      fill="currentColor"
      className="fill-gray-800"
    >
      Onakodi
      <tspan fontSize="14" dy="-8" className="fill-gray-500">®</tspan>
    </text>
  </svg>
);

export default function Navigation({ onWhatsAppContact }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <OnakodiaLogo />
          </Link>
          
          <Button
            onClick={onWhatsAppContact}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base transition-colors"
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