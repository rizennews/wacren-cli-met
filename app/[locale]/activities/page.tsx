"use client";

import { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Flagship from "@/app/components/Flagship";
import Footer from "@/app/components/Footer";
import { useTranslations } from "next-intl";

export default function ActivitiesPage() {
  const tPrecursor = useTranslations("Precursor");
  const tNav = useTranslations("Navigation");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [backToTopVisible, setBackToTopVisible] = useState(false);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > 300 && y > lastScroll) {
        setMobileMenuOpen(false);
      }
      setBackToTopVisible(y > 400);
      lastScroll = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

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
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal, .flagship-item").forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(30px)";
      (el as HTMLElement).style.transition =
        "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
      obs.observe(el);
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const precursorLinks = [
    {
      title: tPrecursor("p1_title"),
      description: tPrecursor("p1_desc"),
      url: "https://wacren.net/en/newsletter/wacren-climate-programme-catalysing-climate-solutions/",
      num: "01",
      className: "p1",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>,
    },
    {
      title: tPrecursor("p2_title"),
      description: tPrecursor("p2_desc"),
      url: "https://indico.wacren.net/event/207/contributions/1729/subcontributions/38/attachments/686/977/REGIONAL%20ACTIVITIES%20OF%20THE%20WACREN-ICTP%20PROGRAMME%20.pdf",
      num: "02",
      className: "p2",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>,
    },
    {
      title: tPrecursor("p3_title"),
      description: tPrecursor("p3_desc"),
      url: "https://indico.wacren.net/event/160/",
      num: "03",
      className: "p3",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" /><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" /><circle cx="12" cy="12" r="2" /><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" /><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" /></svg>,
    },
    {
      title: tPrecursor("p4_title"),
      description: tPrecursor("p4_desc"),
      url: "https://indico.ictp.it/event/10787/overview",
      num: "04",
      className: "p4",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
    },
  ];

  return (
    <>
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <main style={{ minHeight: "100vh" }}>
        {/* Activities Hero */}
        <div className="hero" style={{ minHeight: "auto", display: "flex", alignItems: "center", paddingTop: "120px", paddingBottom: "40px" }}>
          <div className="hero-canvas"></div>
          <div className="hero-noise"></div>
          <div className="hero-content">
            <div>
              <h1 className="fade-up delay-1 capitalize" style={{ fontSize: "clamp(40px, 6vw, 64px)", lineHeight: 1.1, textTransform: "capitalize" }}>
                {tNav("activities").toLowerCase()}
              </h1>
              <p className="hero-desc fade-up delay-2" style={{ marginTop: "24px", fontSize: "1.1rem", opacity: 0.85 }}>
                Explore our flagship and precursor initiatives.
              </p>
            </div>
          </div>
        </div>

        {/* Exactly Flagship Activities UI */}
        <Flagship />

        {/* Exactly Precursor Section UI */}
        <section id="precursor" style={{ padding: "100px 0", background: "var(--bg-white, white)" }}>
          <div className="container">
            <div className="section-label" style={{ marginBottom: "12px" }}>
              {tPrecursor("section_label")}
            </div>
            <h2 className="section-title" style={{ marginBottom: "8px" }}>
              {tPrecursor("section_title")}
            </h2>
            <p className="section-lead" style={{ width: "100%", margin: "0 0 30px 0", textAlign: "left" }}>
              {tPrecursor("section_lead")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {precursorLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`pillar-card ${item.className} reveal`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <div className="pillar-num">{item.num}</div>
                    <div className="pillar-icon">{item.icon}</div>
                    <h3 className="pillar-title" style={{ margin: 0 }}>{item.title}</h3>
                    <p style={{ color: "var(--muted)", lineHeight: "1.6", fontSize: "14px", margin: 0, fontWeight: 300 }}>
                      {item.description}
                    </p>
                  </div>
                  <div style={{ marginTop: "16px" }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        fontWeight: 600,
                        color: "var(--teal)",
                        fontSize: "14px",
                      }}
                    >
                      {tPrecursor("learn_more")}
                      <span aria-hidden="true">↗</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer backToTopVisible={backToTopVisible} scrollToTop={scrollToTop} />
    </>
  );
}
