"use client";

import { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Impact from "@/app/components/Impact";
import SDGs from "@/app/components/SDGs";
import Footer from "@/app/components/Footer";

export default function ImpactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [backToTopVisible, setBackToTopVisible] = useState(false);

  useEffect(() => {
    // Scroll-reveal nav logic
    let lastScroll = 0;
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > 300 && y > lastScroll) {
        setMobileMenuOpen(false);
      }

      if (y > 400) {
        setBackToTopVisible(true);
      } else {
        setBackToTopVisible(false);
      }
      lastScroll = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Intersection Observer for fade-up animations
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    document
      .querySelectorAll(
        ".impact-card, .sdg-panel, .au-card"
      )
      .forEach((el) => {
        (el as HTMLElement).style.opacity = "0";
        (el as HTMLElement).style.transform = "translateY(20px)";
        (el as HTMLElement).style.transition = "opacity 0.55s ease, transform 0.55s ease";
        obs.observe(el);
      });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      
      <main style={{ paddingTop: "100px" }}>
        <Impact />
        <SDGs />
      </main>
      
      <Footer 
        backToTopVisible={backToTopVisible} 
        scrollToTop={scrollToTop} 
      />
    </>
  );
}
