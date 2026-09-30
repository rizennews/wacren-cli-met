"use client";

import { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import { useTranslations } from "next-intl";

export default function PrecursorPage() {
  const t = useTranslations("Precursor");
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

    document.querySelectorAll(".reveal").forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(30px)";
      (el as HTMLElement).style.transition = "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
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
      title: t("p1_title"),
      description: t("p1_desc"),
      url: "https://wacren.net/en/newsletter/wacren-climate-programme-catalysing-climate-solutions/",
    },
    {
      title: t("p2_title"),
      description: t("p2_desc"),
      url: "https://indico.wacren.net/event/207/contributions/1729/subcontributions/38/attachments/686/977/REGIONAL%20ACTIVITIES%20OF%20THE%20WACREN-ICTP%20PROGRAMME%20.pdf",
    },
    {
      title: t("p3_title"),
      description: t("p3_desc"),
      url: "https://indico.wacren.net/event/160/",
    },
    {
      title: t("p4_title"),
      description: t("p4_desc"),
      url: "https://indico.ictp.it/event/10787/overview",
    },
  ];

  return (
    <>
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main className="precursor-page" style={{ paddingTop: "100px", minHeight: "100vh", background: "var(--bg-white)" }}>
        {/* Content Section */}
        <section style={{ padding: "100px 0" }}>
          <div className="container">
            <div className="section-label" style={{ marginBottom: "12px" }}>{t("section_label")}</div>
            <h2 className="section-title" style={{ marginBottom: "8px" }}>{t("section_title")}</h2>
            <p className="section-lead" style={{ width: "100%", margin: "0 0 30px 0", textAlign: "left" }}>
              {t("section_lead")}
            </p>
            <div className="precursor-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(280px, 1fr))", gap: "32px" }}>
              {precursorLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="precursor-card reveal"
                  style={{
                    padding: "40px",
                    backgroundColor: "white",
                    borderRadius: "24px",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
                    border: "1px solid rgba(0,0,0,0.03)",
                    transition: "transform 0.3s ease",
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px", color: "var(--navy)" }}>{item.title}</h3>
                    <p style={{ color: "var(--text-gray)", lineHeight: "1.6" }}>{item.description}</p>
                  </div>
                  <div style={{ marginTop: "26px" }}>
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
                      {t("learn_more")}
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
