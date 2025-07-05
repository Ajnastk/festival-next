"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Heart, ShoppingBag, Eye, Share2,Check,Download } from 'lucide-react';
import { StaticImageData } from 'next/image';
import onam1 from '@/public/images/onamImage-1.jpg';
import onam2 from '@/public/images/onamImage-2.jpg';
import onam3 from '@/public/images/onamImage-3.jpg';
import onam4 from '@/public/images/onamImage-4.jpg';
import onam5 from '@/public/images/onamImage-5.jpg';

interface Product {
  id: number;
  title: string;
  price?: number;
  originalPrice?: number;
  image: string;
  category: string;
  width: number;
  height: number;
  description?: string;
}

const sampleProducts: Product[] = [
    {
    id: 1,
    title:'oname image-1',
    image: onam1,
    width: 400,
    height: 500,
  },
  {
    id: 2,
    title:'oname image-2',
    image: onam2,
    width: 400,
    height: 500,
  },
  {
    id: 3,
    title:'oname image-3',
    image: onam3,
    width: 400,
    height: 500,
  },
  {
    id: 4,
    title:'oname image-4',
    image: onam4,
    width: 400,
    height: 500,
  },
  {
    id: 5,
    title:'oname image-5',
    image: onam5,
    width: 400,
    height: 500,
  },
];

const ProductShowcase: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [likedProducts, setLikedProducts] = useState<Set<number>>(new Set());
  const [downloadingProducts, setDownloadingProducts ] = useState<Set<number>>(new Set());
  const [downloadedProducts, setDownloadedProducts] = useState<Set<number>>(new Set());

  useEffect(() => {
    setProducts(sampleProducts);
  }, []);

  const toggleLike = (productId: number) => {
    setLikedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const downloadImage = async (product :Product)=>{
    setDownloadingProducts(prev=>new Set(prev).add(product.id));

    try{
            // Create a higher quality image URL for download
      let downloadUrl = product.image;

          if (typeof product.image === 'string') {
        // Try different patterns for Unsplash URLs
        if (product.image.includes('w=400&h=500')) {
          downloadUrl = product.image.replace('w=400&h=500', 'w=1200&h=1500');
        } else if (product.image.includes('w=400&h=600')) {
          downloadUrl = product.image.replace('w=400&h=600', 'w=1200&h=1800');
        } else if (product.image.includes('w=400&h=550')) {
          downloadUrl = product.image.replace('w=400&h=550', 'w=1200&h=1650');
        } else if (product.image.includes('w=400&h=400')) {
          downloadUrl = product.image.replace('w=400&h=400', 'w=1200&h=1200');
        } else if (product.image.includes('w=400&h=480')) {
          downloadUrl = product.image.replace('w=400&h=480', 'w=1200&h=1440');
        } else if (product.image.includes('w=400&h=580')) {
          downloadUrl = product.image.replace('w=400&h=580', 'w=1200&h=1740');
        } else if (product.image.includes('w=400')) {
          // Generic fallback for any w=400 parameter
          downloadUrl = product.image.replace('w=400', 'w=1200');
        }
      }

      //Fetch the image here
        const response = await fetch(downloadUrl, {
          method: 'GET',
          mode: 'cors',
          credentials: 'omit',
          headers: {
            'Origin': window.location.origin
          }
        });

      const blob = await response.blob();

      //Create download link here
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;

      //Generate file name with product details
      const filename = `${product.title.replace(/[^a-zA-Z0-9]/g, '_')}_${product.id}.jpg`;
      link.download = filename;

      //Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      //Clean up
      window.URL.revokeObjectURL(url);

      //Update states
      setDownloadedProducts(prev=>new Set(prev).add(product.id));

      //Show success state briefly
      setTimeout(()=>{
        setDownloadedProducts(prev=>{
          const newSet = new Set(prev);
          newSet.delete(product.id);
          return newSet;
        })
      },2000)
    }catch(error){
      console.error('Downloaded failed:',error);
    }finally{
      setDownloadingProducts(prev=>{
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      })
    }
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-amber-50 via-emerald-50 to-amber-100">
      {/* Header */}
      <div className=" border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Discover Amazing Products
          </h1>
          <p className="text-gray-600 text-center mt-2">
            Curated collection of premium items just for you
          </p>
        </div>
      </div>

      {/* Masonry grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 gap-4">
          {products.map(product => (
            <div
              key={product.id}
              className="break-inside-avoid mb-4 group cursor-pointer relative"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                {/* Image */}
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={product.width}
                    height={product.height}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Floating buttons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <button
                      onClick={e => {
                        e.stopPropagation();
                        toggleLike(product.id);
                      }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-md ${
                        likedProducts.has(product.id)
                          ? 'bg-red-500 text-white shadow-lg'
                          : 'bg-white/90 text-gray-700 hover:bg-white shadow-md'
                      }`}
                    >
                      <Heart
                        size={18}
                        fill={likedProducts.has(product.id) ? 'currentColor' : 'none'}
                      />
                    </button>
                     <button
                      onClick={e => {
                        e.stopPropagation();
                        downloadImage(product);
                      }}
                      disabled={downloadingProducts.has(product.id)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-md ${
                        downloadedProducts.has(product.id)
                          ? 'bg-green-500 text-white shadow-lg'
                          : downloadingProducts.has(product.id)
                          ? 'bg-blue-500 text-white shadow-lg'
                          : 'bg-white/90 text-gray-700 hover:bg-white shadow-md'
                      }`}
                    >
                      {downloadedProducts.has(product.id) ? (
                        <Check size={18} />
                      ) : downloadingProducts.has(product.id) ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Download size={18} />
                      )}
                    </button>
                  </div>

                  {/* Download status indicator */}
                  {downloadingProducts.has(product.id) && (
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg backdrop-blur-md">
                        Downloading...
                      </div>
                    </div>
                  )}

                  {downloadedProducts.has(product.id) && (
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg backdrop-blur-md flex items-center gap-1">
                        <Check size={12} />
                        Downloaded
                      </div>
                    </div>
                  )}

                    {/* <button className="w-10 h-10 rounded-full bg-white/90 text-gray-700 hover:bg-white transition-all duration-200 flex items-center justify-center shadow-md backdrop-blur-md">
                      <Eye size={18} />
                    </button> */}
                    {/* <button className="w-10 h-10 rounded-full bg-white/90 text-gray-700 hover:bg-white transition-all duration-200 flex items-center justify-center shadow-md backdrop-blur-md">
                      <Share2 size={18} />
                    </button> */}
                  </div>

                  {/* Category badge */}
                  {/* <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="px-3 py-1 bg-white/95 rounded-full text-xs font-semibold text-gray-800 shadow-md backdrop-blur-md">
                      {product.category}
                    </span>
                  </div> */}

                  {/* Sale badge */}
                  {/* {product.originalPrice && product.price && (
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg">
                        {Math.round(
                          ((product.originalPrice - product.price) /
                            product.originalPrice) *
                            100
                        )}
                        % OFF
                      </span>
                    </div>
                  )} */}
                </div>

                {/* Info overlay */}
                {/* <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0"> */}
                  {/* <h3 className="font-bold text-lg mb-2 line-clamp-2">
                    {product.title}
                  </h3> */}

                  {/* {product.description && (
                    <p className="text-sm text-gray-200 mb-3 line-clamp-2">
                      {product.description}
                    </p>
                  )} */}

                  {/* {product.price && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold">
                          {formatPrice(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-300 line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div> 
                       <button className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors duration-200 flex items-center gap-1">
                        <ShoppingBag size={16} />
                        Add
                      </button>
                    </div>
                  )} */}
                {/* </div> */}
              </div>
          ))}
        </div>
      </div>

      {/* Load more */}
      <div className="text-center pb-12">
        <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200 shadow-lg">
          Load More Products
        </button>
      </div>
    </div>
  );
};

export default ProductShowcase;