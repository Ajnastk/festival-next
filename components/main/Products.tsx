"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Heart, ShoppingBag, Eye, Share2, Check, Download, Sparkles } from 'lucide-react';
import onam1 from '@/public/images/onamImage-1.jpg';
import onam2 from '@/public/images/onamImage-2.jpg';
import onam3 from '@/public/images/onamImage-3.jpg';
import onam4 from '@/public/images/onamImage-4.jpg';
import onam5 from '@/public/images/onamImage-5.jpg';
import onam6 from '@/public/images/onamImage-6.png'

interface Product {
  id: number;
  title: string;
  price?: number;
  originalPrice?: number;
  image: string | StaticImageData;
  category?: string;
  width: number;
  height: number;
  description?: string;
}

const sampleProducts: Product[] = [
  {
    id: 1,
    title: 'onam image-1',
    image: onam1,
    width: 400,
    height: 500,
  },
  {
    id: 2,
    title: 'onam image-2',
    image: onam2,
    width: 400,
    height: 500,
  },
  {
    id: 3,
    title: 'onam image-3',
    image: onam3,
    width: 400,
    height: 500,
  },
  {
    id: 4,
    title: 'onam image-4',
    image: onam4,
    width: 400,
    height: 500,
  },
  {
    id: 5,
    title: 'onam image-5',
    image: onam5,
    width: 400,
    height: 500,
  },
  {
    id: 6,
    title: 'onam image-6',
    image: onam6,
    width: 400,
    height: 500,
  },
];

const ProductShowcase: React.FC = () => {
  // Mobile slideshow state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const [likedProducts, setLikedProducts] = useState<Set<number>>(new Set());
  const [downloadingProducts, setDownloadingProducts] = useState<Set<number>>(new Set());
  const [downloadedProducts, setDownloadedProducts] = useState<Set<number>>(new Set());

  // Memoize products to prevent unnecessary re-renders
  const products = useMemo(() => sampleProducts, []);

  // Optimize slideshow with useCallback
  const advanceSlide = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sampleProducts.length - 1 ? 0 : prevIndex + 1
      );
      setFade(true);
    }, 300); // Reduced from 500ms to 300ms for snappier transitions
  }, []);

  // Auto-advance slideshow (mobile only) - optimized
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(advanceSlide, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, advanceSlide]);

  // Optimize toggle like with useCallback
  const toggleLike = useCallback((productId: number) => {
    setLikedProducts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  }, []);

  // Optimize download function
  const downloadImage = useCallback(async (product: Product) => {
    setDownloadingProducts((prev) => new Set(prev).add(product.id));

    try {
      let downloadUrl: string;

      if (typeof product.image === 'string') {
        downloadUrl = product.image;
        // URL replacements for higher resolution
        if (downloadUrl.includes('w=400&h=500')) {
          downloadUrl = downloadUrl.replace('w=400&h=500', 'w=1200&h=1500');
        } else if (downloadUrl.includes('w=400&h=600')) {
          downloadUrl = downloadUrl.replace('w=400&h=600', 'w=1200&h=1800');
        } else if (downloadUrl.includes('w=400&h=550')) {
          downloadUrl = downloadUrl.replace('w=400&h=550', 'w=1200&h=1650');
        } else if (downloadUrl.includes('w=400&h=400')) {
          downloadUrl = downloadUrl.replace('w=400&h=400', 'w=1200&h=1200');
        } else if (downloadUrl.includes('w=400&h=480')) {
          downloadUrl = downloadUrl.replace('w=400&h=480', 'w=1200&h=1440');
        } else if (downloadUrl.includes('w=400&h=580')) {
          downloadUrl = downloadUrl.replace('w=400&h=580', 'w=1200&h=1740');
        } else if (downloadUrl.includes('w=400')) {
          downloadUrl = downloadUrl.replace('w=400', 'w=1200');
        }
      } else {
        downloadUrl = product.image.src;
      }

      const response = await fetch(downloadUrl, {
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
        headers: {
          Origin: window.location.origin,
        },
      });

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;

      const filename = `${product.title.replace(/[^a-zA-Z0-9]/g, '_')}_${product.id}.jpg`;
      link.download = filename;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);

      setDownloadedProducts((prev) => new Set(prev).add(product.id));

      setTimeout(() => {
        setDownloadedProducts((prev) => {
          const newSet = new Set(prev);
          newSet.delete(product.id);
          return newSet;
        });
      }, 2000);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setDownloadingProducts((prev) => {
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      });
    }
  }, []);

  const handleBookNow = useCallback(() => {
    window.open(
      "https://wa.me/919876543210?text=I want to book my Onam dress for ₹99!",
      "_blank"
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 via-emerald-50 to-amber-100 justify-center gap-[30px] md:gap-[10px]">
      {/* Header */}
      <div className="text-center mt-5">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="h-8 w-8 text-emerald-600" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-800 to-amber-700 bg-clip-text text-transparent">
              Onam 2025
            </h1>
            <Sparkles className="h-8 w-8 text-amber-600" />
          </div>
        </div>
      </div>

      {/* Mobile Layout - Slideshow (visible only on mobile) */}
      <div className="md:hidden px-4 pb-8">
        <div className="relative bg-gradient-to-br from-amber-50 via-emerald-50 to-amber-100 rounded-3xl overflow-hidden shadow-2xl max-w-sm mx-auto">
          {/* Image Container */}
          <div className="relative overflow-hidden">
            <Image
              src={sampleProducts[currentIndex].image}
              alt={sampleProducts[currentIndex].title}
              width={sampleProducts[currentIndex].width}
              height={sampleProducts[currentIndex].height}
              className={`w-full h-auto object-cover transition-opacity duration-300 ${
                fade ? 'opacity-100' : 'opacity-0'
              }`}
              priority={currentIndex === 0}
              loading={currentIndex === 0 ? 'eager' : 'lazy'}
              quality={85}
            />
          </div>
        </div>
      </div>

      {/* Masonry grid (hidden on mobile, visible on md and above) - OPTIMIZED */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 py-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isLiked={likedProducts.has(product.id)}
              isDownloading={downloadingProducts.has(product.id)}
              isDownloaded={downloadedProducts.has(product.id)}
              onToggleLike={toggleLike}
              onDownload={downloadImage}
            />
          ))}
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="text-center pb-12">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Book Your Perfect Onam Dress?
          </h3>
          <p className="text-gray-600 mb-6">
            Don&apos;t wait until the last minute! Secure your favorite design today with our early bird offer.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={handleBookNow}
              className="bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700 text-white px-3 xs:px-4 sm:px-8 py-3 xs:py-4 sm:py-6 text-sm sm:text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 whitespace-nowrap flex items-center justify-center">
              <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
              Book Your Collection Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Separate ProductCard component to prevent unnecessary re-renders
const ProductCard = React.memo(({ 
  product, 
  isLiked, 
  isDownloading, 
  isDownloaded, 
  onToggleLike, 
  onDownload 
}: {
  product: Product;
  isLiked: boolean;
  isDownloading: boolean;
  isDownloaded: boolean;
  onToggleLike: (id: number) => void;
  onDownload: (product: Product) => void;
}) => {
  const handleLikeClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleLike(product.id);
  }, [product.id, onToggleLike]);

  const handleDownloadClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onDownload(product);
  }, [product, onDownload]);

  return (
    <div className="break-inside-avoid mb-4 group cursor-pointer relative">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
        {/* Image */}
        <div className="relative overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            width={product.width}
            height={product.height}
            className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            quality={85}
          />

          {/* Simplified overlay - removed backdrop blur for better performance */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Floating buttons - simplified animations */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handleLikeClick}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                isLiked
                  ? 'bg-red-500 text-white shadow-lg'
                  : 'bg-white/90 text-gray-700 hover:bg-white shadow-md'
              }`}
            >
              <Heart
                size={18}
                fill={isLiked ? 'currentColor' : 'none'}
              />
            </button>
            <button
              onClick={handleDownloadClick}
              disabled={isDownloading}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
                isDownloaded
                  ? 'bg-green-500 text-white shadow-lg'
                  : isDownloading
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white/90 text-gray-700 hover:bg-white shadow-md'
              }`}
            >
              {isDownloaded ? (
                <Check size={18} />
              ) : isDownloading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Download size={18} />
              )}
            </button>
          </div>

          {/* Status indicators */}
          {isDownloading && (
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                Downloading...
              </div>
            </div>
          )}

          {isDownloaded && (
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg flex items-center gap-1">
                <Check size={12} />
                Downloaded
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductShowcase;