import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

export function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Product slides - admin can easily update these
  const productSlides = [
    {
  image: "https://images.unsplash.com/photo-1605559424843-9e4c92c6d0c7?w=1200&h=800&fit=crop",
  title: "Ceramic Coating",
  subtitle: "Ultimate Paint Protection",
  description: "Long-lasting ceramic coating for unmatched gloss and durability",
  badge: "Best Seller",
},
{
  image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=1200&h=800&fit=crop",
  title: "Premium Car Wash",
  subtitle: "Safe • pH Neutral",
  description: "Deep-clean formula that protects paint and clear coat",
  badge: "New Arrival",
},
{
  image: "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?w=1200&h=800&fit=crop",
  title: "Interior Detailing",
  subtitle: "Luxury Cabin Care",
  description: "Professional-grade interior cleaner for leather, fabric & trim",
  badge: "Featured",
}

  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [productSlides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? productSlides.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % productSlides.length);
  };

  return (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-900 group">
      {/* Slides */}
      <div className="relative w-full h-full">
        {productSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Subtle gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center px-8 md:px-12 lg:px-16">
              <div className="max-w-2xl space-y-3 md:space-y-5">
                {/* Badge */}
                <span className="inline-block px-4 py-1.5 bg-white/95 text-gray-900 text-sm md:text-base font-semibold rounded-full shadow-lg">
                  {slide.badge}
                </span>
                
                {/* Title */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  {slide.title}
                </h2>
                
                {/* Subtitle */}
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 font-light">
                  {slide.subtitle}
                </p>
                
                {/* Description */}
                <p className="text-base md:text-lg lg:text-xl text-gray-200">
                  {slide.description}
                </p>
                
                {/* CTA Button
                <button className="mt-4 md:mt-6 inline-flex items-center gap-2 px-7 py-3.5 md:px-8 md:py-4 bg-white text-gray-900 font-semibold text-base md:text-lg rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 active:scale-95 shadow-xl">
                  {slide.cta}
                  <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-3 md:p-3.5 transition-all opacity-0 group-hover:opacity-100 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-gray-900" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-3 md:p-3.5 transition-all opacity-0 group-hover:opacity-100 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-gray-900" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {productSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 md:h-3 rounded-full transition-all ${
              index === currentSlide 
                ? "w-10 md:w-12 bg-white" 
                : "w-2.5 md:w-3 bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}