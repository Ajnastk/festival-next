import React, { useState, useEffect } from 'react';
import { Heart, ShoppingBag, Eye, Share2 } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  price?: number;
  originalPrice?: number;
  image: string;
  category: string;
  isLiked?: boolean;
  width: number;
  height: number;
  description?: string;
}

const ProductShowcase: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [likedProducts, setLikedProducts] = useState<Set<number>>(new Set());

  // Sample products matching the Pinterest layout from your image
  const sampleProducts: Product[] = [
    {
      id: 1,
      title: "Fashion Portrait Collection",
      price: 89.99,
      originalPrice: 120.00,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=500&fit=crop",
      category: "Fashion",
      width: 300,
      height: 400,
      description: "Elegant fashion photography collection"
    },
    {
      id: 2,
      title: "Nature's Beauty",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
      category: "Nature",
      width: 300,
      height: 500,
      description: "Captivating nature photography"
    },
    {
      id: 3,
      title: "Minimalist Portrait",
      price: 65.00,
      image: "https://images.unsplash.com/photo-1494790108755-2616c7e5008b?w=400&h=480&fit=crop",
      category: "Portrait",
      width: 300,
      height: 380,
      description: "Clean minimalist portrait style"
    },
    {
      id: 4,
      title: "Street Style Fashion",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=550&fit=crop",
      category: "Fashion",
      width: 300,
      height: 450,
      description: "Urban street fashion photography"
    },
    {
      id: 5,
      title: "Outdoor Adventure",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop",
      category: "Adventure",
      width: 300,
      height: 500,
      description: "Outdoor lifestyle photography"
    },
    {
      id: 6,
      title: "Luxury Texture",
      price: 125.00,
      originalPrice: 175.00,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=480&fit=crop",
      category: "Luxury",
      width: 300,
      height: 380,
      description: "Premium luxury textures"
    },
    {
      id: 7,
      title: "Modern Minimalism",
      price: 78.00,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=550&fit=crop",
      category: "Modern",
      width: 300,
      height: 450,
      description: "Contemporary minimalist design"
    },
    {
      id: 8,
      title: "Vintage Charm",
      price: 92.50,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop",
      category: "Vintage",
      width: 300,
      height: 500,
      description: "Classic vintage photography"
    },
    {
      id: 9,
      title: "Artistic Expression",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop",
      category: "Art",
      width: 300,
      height: 320,
      description: "Creative artistic photography"
    },
    {
      id: 10,
      title: "Black & White Classic",
      price: 55.00,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=580&fit=crop",
      category: "Classic",
      width: 300,
      height: 480,
      description: "Timeless black and white photography"
    }
  ];

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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-emerald-50 to-amber-100">
      {/* Header */}
      <div className="bg-white sticky top-0 z-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Discover Amazing Products
          </h1>
          <p className="text-gray-600 text-center mt-2">
            Curated collection of premium items just for you
          </p>
        </div>
      </div>

      {/* Pinterest-style Masonry Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="break-inside-avoid mb-4 group cursor-pointer"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ aspectRatio: `${product.width}/${product.height}` }}
                  />
                  
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating action buttons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(product.id);
                      }}
                      className={`w-10 h-10 rounded-full backdrop-blur-md transition-all duration-200 flex items-center justify-center ${
                        likedProducts.has(product.id)
                          ? 'bg-red-500 text-white shadow-lg'
                          : 'bg-white/90 text-gray-700 hover:bg-white shadow-md'
                      }`}
                    >
                      <Heart size={18} fill={likedProducts.has(product.id) ? 'currentColor' : 'none'} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-gray-700 hover:bg-white transition-all duration-200 flex items-center justify-center shadow-md">
                      <Eye size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-gray-700 hover:bg-white transition-all duration-200 flex items-center justify-center shadow-md">
                      <Share2 size={18} />
                    </button>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-xs font-semibold text-gray-800 shadow-md">
                      {product.category}
                    </span>
                  </div>

                  {/* Sale badge */}
                  {product.originalPrice && (
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg">
                        {Math.round(((product.originalPrice - product.price!) / product.originalPrice) * 100)}% OFF
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">
                    {product.title}
                  </h3>
                  
                  {product.description && (
                    <p className="text-sm text-gray-200 mb-3 line-clamp-2">
                      {product.description}
                    </p>
                  )}

                  {product.price && (
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
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More Button */}
      <div className="text-center pb-12">
        <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200 shadow-lg">
          Load More Products
        </button>
      </div>
    </div>
  );
};

export default ProductShowcase;