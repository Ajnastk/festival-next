import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface FloatingWhatsAppProps {
  onWhatsAppContact: () => void;
}

export default function FloatingWhatsApp({ onWhatsAppContact }: FloatingWhatsAppProps) {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        onClick={onWhatsAppContact}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg animate-pulse"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
}