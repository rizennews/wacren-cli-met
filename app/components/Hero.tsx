"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("Hero");

  const slides = [
    {
      title: t("slide1_title"),
      description: t("slide1_desc"),
      image: "/slider-image-1.jpg"
    },
    {
      title: t("slide2_title"),
      description: t("slide2_desc"),
      image: "/slider-image-2.jpg"
    },
    {
      title: t("slide3_title"),
      description: t("slide3_desc"),
      image: "/slider-image-3.jpg"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="hero" id="home">
      <div className="hero-canvas"></div>
      <div className="hero-noise"></div>
      
      <div className="hero-content" style={{ padding: "60px 24px 20px", maxWidth: "1240px", margin: "0 auto" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            
            {/* Stack texts using CSS Grid so parent height matches the tallest slide automatically */}
            <div className="grid">
              {slides.map((slide, i) => (
                <div 
                  key={i} 
                  className="row-start-1 col-start-1 transition-opacity duration-1000 ease-in-out flex flex-col justify-center"
                  style={{ 
                    opacity: currentSlide === i ? 1 : 0, 
                    pointerEvents: currentSlide === i ? "auto" : "none",
                    zIndex: currentSlide === i ? 10 : 0 
                  }}
                >
                  <h1>
                    {slide.title.split(" ").map((word, j) => {
                      const lower = word.toLowerCase();
                      if (lower.includes("connected") || lower.includes("open") || lower.includes("resilient") || lower.includes("digital") || lower.includes("infrastructure")) {
                        return <span key={j} className="h1-accent">{word} </span>;
                      }
                      return word + " ";
                    })}
                  </h1>
                  <p className="hero-desc mt-4">
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Slider Controls */}
            <div className="flex items-center gap-4 mt-8 z-20 relative">
              <button 
                onClick={prevSlide} 
                className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 text-gray-400 hover:text-[var(--teal)] hover:border-[var(--teal)] transition-colors" 
                aria-label="Previous slide"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-[var(--teal)] w-8" : "bg-gray-400 opacity-50 hover:opacity-100"}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextSlide} 
                className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 text-gray-400 hover:text-[var(--teal)] hover:border-[var(--teal)] transition-colors" 
                aria-label="Next slide"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] rounded-2xl overflow-hidden shadow-2xl">
            {slides.map((slide, i) => (
              <div 
                key={i} 
                className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                style={{ 
                  opacity: currentSlide === i ? 1 : 0,
                  zIndex: currentSlide === i ? 10 : 0
                }}
              >
                <Image 
                  src={slide.image} 
                  alt={slide.title}
                  fill
                  priority={i === 0}
                  loading={i === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  quality={85}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[15000ms] ease-out ${currentSlide === i ? 'scale-110' : 'scale-100'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--navy)]/40 to-transparent pointer-events-none"></div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}
