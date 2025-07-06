import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

interface FooterProps {
  onWhatsAppContact: () => void;
}

export default function Footer({ onWhatsAppContact }: FooterProps) {
  return (
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
            onClick={onWhatsAppContact}
            className="text-amber-200 hover:text-white"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            WhatsApp
          </Button>
        </div>
      </div>
    </footer>
  );
}