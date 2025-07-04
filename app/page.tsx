"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import ProductShowcase from '@/components/ui/products';
import { 
  Filter, 
  MessageCircle, 
  Calendar, 
  Star, 
  Zap,
  Clock,
  Users,
  Sparkles,
  Heart,
  X
} from 'lucide-react';

const dressImages = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&fit=crop',
    title: 'Traditional Kerala Kasavu Saree',
    style: 'Traditional',
    color: 'Ivory',
    occasion: 'Festival',
    price: '₹2,999'
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/5704851/pexels-photo-5704851.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
    title: 'Emerald Green Pavada Set',
    style: 'Traditional',
    color: 'Green',
    occasion: 'Wedding',
    price: '₹3,499'
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/5704853/pexels-photo-5704853.jpeg?auto=compress&cs=tinysrgb&w=500&h=800&fit=crop',
    title: 'Golden Tissue Lehenga',
    style: 'Contemporary',
    color: 'Gold',
    occasion: 'Party',
    price: '₹4,999'
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/5704855/pexels-photo-5704855.jpeg?auto=compress&cs=tinysrgb&w=500&h=650&fit=crop',
    title: 'Burgundy Silk Saree',
    style: 'Traditional',
    color: 'Burgundy',
    occasion: 'Festival',
    price: '₹3,299'
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/5704857/pexels-photo-5704857.jpeg?auto=compress&cs=tinysrgb&w=500&h=700&fit=crop',
    title: 'Ivory Chanderi Salwar',
    style: 'Contemporary',
    color: 'Ivory',
    occasion: 'Casual',
    price: '₹2,499'
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/5704859/pexels-photo-5704859.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
    title: 'Forest Green Anarkali',
    style: 'Contemporary',
    color: 'Green',
    occasion: 'Party',
    price: '₹3,799'
  },
  {
    id: 7,
    url: 'https://images.pexels.com/photos/5704861/pexels-photo-5704861.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&fit=crop',
    title: 'Golden Banarasi Saree',
    style: 'Traditional',
    color: 'Gold',
    occasion: 'Wedding',
    price: '₹5,999'
  },
  {
    id: 8,
    url: 'https://images.pexels.com/photos/5704863/pexels-photo-5704863.jpeg?auto=compress&cs=tinysrgb&w=500&h=650&fit=crop',
    title: 'Maroon Georgette Dress',
    style: 'Contemporary',
    color: 'Burgundy',
    occasion: 'Party',
    price: '₹2,799'
  }
];

export default function Home() {
  
  const [bookingProgress, setBookingProgress] = useState(67);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/919876543210?text=Hi! I would like to book an Onam dress.', '_blank');
  };

  const handleBookNow = () => {
    window.open('https://wa.me/919876543210?text=I want to book my Onam dress for ₹99!', '_blank');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-emerald-50 to-amber-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-emerald-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-emerald-800 font-medium">Loading Onam Collection...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-emerald-50 to-amber-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-emerald-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                Onakkodi
              </span>
            </div>
            <Button 
              onClick={handleWhatsAppContact}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-amber-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-800 to-amber-700 bg-clip-text text-transparent">
              Onam Dress Selection
              <br />
              <span className="text-red-600">Chaos?</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Skip the last-minute rush! Pre-book your perfect Onam dress from our curated collection
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handleBookNow}
                className="bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Zap className="h-5 w-5 mr-2" />
                Book Now for ₹99
              </Button>
              <div className="flex items-center text-emerald-700">
                <Star className="h-5 w-5 text-amber-500 mr-1" />
                <span className="font-medium">4.9/5 from 1,200+ customers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='collections'>
        <ProductShowcase />
      </div>

      {/* Collection Launch Section */}
      <section className="py-12 bg-gradient-to-r from-emerald-800 to-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-white text-emerald-800 text-lg px-4 py-2 mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              Collection Launches August 1st
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Early Bird Benefits
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Clock className="h-12 w-12 mx-auto mb-3 text-amber-300" />
                <h3 className="text-xl font-semibold mb-2">Priority Delivery</h3>
                <p className="text-amber-100">Get your dress first</p>
              </div>
              <div className="text-center">
                <Sparkles className="h-12 w-12 mx-auto mb-3 text-amber-300" />
                <h3 className="text-xl font-semibold mb-2">Exclusive Designs</h3>
                <p className="text-amber-100">Limited collection access</p>
              </div>
              <div className="text-center">
                <Heart className="h-12 w-12 mx-auto mb-3 text-amber-300" />
                <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
                <p className="text-amber-100">Early bird discounts</p>
              </div>
            </div>
            <div className="max-w-md mx-auto">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-amber-200">Bookings Progress</span>
                <span className="text-sm text-amber-200">{bookingProgress}% of 500</span>
              </div>
              <Progress value={bookingProgress} className="h-3 bg-emerald-900" />
              <p className="text-center text-amber-200 mt-2">
                <Users className="h-4 w-4 inline mr-1" />
                {Math.floor(bookingProgress * 5)} families already booked!
              </p>
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