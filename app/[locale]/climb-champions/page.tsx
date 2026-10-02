"use client";

import { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function ClimbChampionsPage() {
  const t = useTranslations("Champions");
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
      { threshold: 0.08 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(20px)";
      (el as HTMLElement).style.transition =
        "opacity 0.55s ease, transform 0.55s ease";
      obs.observe(el);
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fellowStats = [
    {
      num: t("stat_climate_num"),
      label: t("stat_climate_label"),
      iconClass: "blue",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
        </svg>
      ),
    },
    {
      num: t("stat_agri_num"),
      label: t("stat_agri_label"),
      iconClass: "orange",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22V12" />
          <path d="M12 12C12 7 8 4 3 3c0 5 3 9 9 9" />
          <path d="M12 12c0-5 4-8 9-9-1 5-4 9-9 9" />
        </svg>
      ),
    },
    {
      num: t("stat_health_num"),
      label: t("stat_health_label"),
      iconClass: "yellow",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
  ];

  const components = [
    {
      num: t("c1_num"),
      title: t("c1_title"),
      desc: t("c1_desc"),
      tag: t("c1_tag"),
      iconClass: "blue",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      num: t("c2_num"),
      title: t("c2_title"),
      desc: t("c2_desc"),
      tag: t("c2_tag"),
      iconClass: "orange",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
    {
      num: t("c3_num"),
      title: t("c3_title"),
      desc: t("c3_desc"),
      tag: t("c3_tag"),
      iconClass: "yellow",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      num: t("c4_num"),
      title: t("c4_title"),
      desc: t("c4_desc"),
      tag: t("c4_tag"),
      iconClass: "blue",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
      ),
    },
  ];

  const infrastructure = [
    {
      num: t("infra_1_num"),
      title: t("infra_1_title"),
      desc: t("infra_1_desc"),
      iconClass: "blue",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
        </svg>
      ),
    },
    {
      num: t("infra_2_num"),
      title: t("infra_2_title"),
      desc: t("infra_2_desc"),
      iconClass: "orange",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="2" />
          <path d="M4.93 4.93a10 10 0 0 1 14.14 0" />
          <path d="M7.76 7.76a6 6 0 0 1 8.48 0" />
        </svg>
      ),
    },
    {
      num: t("infra_3_num"),
      title: t("infra_3_title"),
      desc: t("infra_3_desc"),
      iconClass: "yellow",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
    },
  ];

  const milestones = [
    {
      date: t("milestone_1_date"),
      title: t("milestone_1_title"),
      desc: t("milestone_1_desc"),
      iconClass: "blue",
    },
    {
      date: t("milestone_2_date"),
      title: t("milestone_2_title"),
      desc: t("milestone_2_desc"),
      iconClass: "orange",
    },
    {
      date: t("milestone_3_date"),
      title: t("milestone_3_title"),
      desc: t("milestone_3_desc"),
      iconClass: "yellow",
    },
    {
      date: t("milestone_4_date"),
      title: t("milestone_4_title"),
      desc: t("milestone_4_desc"),
      iconClass: "blue",
    },
  ];

  const partners = [
    {
      name: "WACREN",
      fullName: "West and Central African Research and Education Network",
      url: "https://wacren.net",
      icon: <img src="/wacren.png" alt="WACREN" loading="lazy" decoding="async" style={{ height: "90px", width: "auto", objectFit: "contain" }} />,
    },
    {
      name: "GEO",
      fullName: "Group on Earth Observations",
      url: "https://earthobservations.org",
      icon: <img src="/geo_logo_white.svg" alt="GEO" loading="lazy" decoding="async" style={{ height: "55px", width: "auto", objectFit: "contain", filter: "brightness(0) opacity(0.8)" }} />,
    },
    {
      name: "AfriGEO",
      fullName: "African Group on Earth Observations",
      url: "https://www.afrigeo.org",
      icon: <img src="/afrigeo.png" alt="AfriGEO" loading="lazy" decoding="async" style={{ height: "80px", width: "auto", objectFit: "contain" }} />,
    },
    {
      name: "WASCAL",
      fullName: "West African Science Service Centre on Climate Change",
      url: "https://wascal.org",
      icon: <img src="/wascal.png" alt="WASCAL" loading="lazy" decoding="async" style={{ height: "110px", width: "auto", objectFit: "contain" }} />,
    },
  ];

  const alignments = [
    {
      title: t("align_1_title"),
      desc: t("align_1_desc"),
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
        </svg>
      ),
    },
    {
      title: t("align_2_title"),
      desc: t("align_2_desc"),
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <line x1="20" y1="8" x2="20" y2="14" />
          <line x1="23" y1="11" x2="17" y2="11" />
        </svg>
      ),
    },
    {
      title: t("align_3_title"),
      desc: t("align_3_desc"),
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <main>
        {/* HERO SECTION - exact match to homepage hero */}
        <div className="hero">
          <div className="hero-canvas"></div>
          <div className="hero-noise"></div>
          <div className="hero-content">
            <div>
              <h1 className="reveal" style={{ maxWidth: "1100px" }}>
                {t("hero_title")}
              </h1>
              <p className="hero-desc reveal" style={{ maxWidth: "960px", marginBottom: "32px" }}>
                {t("hero_lead")}
              </p>
              <div className="hero-actions reveal" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a href="https://indico.wacren.net/event/288/registrations/209/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  {t("join_cta")}
                </a>
                <a href="#why" className="btn" style={{ backgroundColor: "rgba(255, 255, 255, 0.15)", color: "white", backdropFilter: "blur(10px)" }}>
                  {t("hero_delivers_btn")}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 1: CLOSING THE GAP */}
        <section id="why" style={{ background: "white" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "36px", alignItems: "center" }}>
              <div className="reveal">
                <div className="section-label">{t("gap_label")}</div>
                <h2 className="section-title">{t("gap_title")}</h2>

                <p className="why-text">{t("gap_p1")}</p>
                <p className="why-text">
                  {t.rich("gap_p2", {
                    bold: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>
              </div>

              {/* AfriGEO Launch Card - using project standard challenge-card */}
              <div className="reveal">
                <div className="challenge-card" style={{ padding: "32px" }}>

                  <div>
                    <div className="section-label" style={{ marginBottom: "6px" }}>{t("launch_card_meta")}</div>
                    <div className="challenge-title" style={{ fontSize: "19px", marginBottom: "8px" }}>
                      {t("launch_card_title")}
                    </div>
                    <p style={{ fontStyle: "italic", color: "var(--navy)", fontWeight: 600, fontSize: "14px", marginBottom: "12px" }}>
                      {t("launch_card_theme")}
                    </p>
                    <div className="challenge-desc" style={{ fontSize: "14px", lineHeight: "1.7" }}>
                      {t("launch_card_desc")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE NETWORK & WHAT IT DELIVERS */}
        <section style={{ background: "var(--light)" }}>
          <div className="container">
            <div className="section-label">{t("network_label")}</div>
            <h2 className="section-title">{t("network_title")}</h2>
            <p className="section-lead">{t("network_lead")}</p>

            {/* 3 Fellows Stat Cards */}
            <div className="challenge-cards reveal" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", marginBottom: "48px" }}>
              {fellowStats.map((item, idx) => (
                <div key={idx} style={{ 
                  display: "flex", 
                  flexDirection: "row", 
                  alignItems: "center", 
                  justifyContent: "flex-start",
                  padding: "28px 36px",
                  backgroundColor: "white",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "16px",
                  gap: "20px"
                }}>
                  <div style={{ 
                    fontSize: "44px", 
                    fontWeight: 800, 
                    color: item.iconClass === 'orange' ? '#16a34a' : item.iconClass === 'yellow' ? '#e11d48' : 'var(--teal)', 
                    lineHeight: 1, 
                    letterSpacing: "-1px" 
                  }}>
                    {item.num}
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: 800, color: "var(--navy)", display: "flex", flexDirection: "column", lineHeight: 1.3 }}>
                    <span>{item.label.split(" ").slice(0, 2).join(" ")}</span>
                    <span>{item.label.split(" ").slice(2).join(" ")}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Subheading: Four components */}
            <div className="section-label" style={{ marginTop: "40px", marginBottom: "24px", letterSpacing: "2.5px" }}>
              {t("components_title")}
            </div>

            {/* 4 Component Cards matching provided design */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
              {components.map((c, idx) => (
                <div key={idx} style={{ 
                  display: "flex", 
                  flexDirection: "row", 
                  gap: "24px",
                  padding: "40px",
                  backgroundColor: "white",
                  border: "1px solid rgba(0,0,0,0.06)",
                  borderRadius: "16px",
                  height: "100%"
                }}>
                  <div style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    border: "2px solid #f97316", // orange
                    color: "#ea580c",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    fontWeight: 700,
                    flexShrink: 0
                  }}>
                    {c.num}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3 style={{ margin: "0 0 16px 0", fontSize: "20px", fontWeight: 800, color: "var(--navy)" }}>{c.title}</h3>
                    <p style={{ color: "var(--muted)", lineHeight: "1.6", fontSize: "15px", margin: "0 0 24px 0", fontWeight: 400 }}>
                      {c.desc}
                    </p>
                    <div style={{ marginTop: "auto" }}>
                      <span style={{ 
                        display: "inline-block", 
                        fontWeight: 700, 
                        color: "var(--muted)", 
                        fontSize: "11px", 
                        textTransform: "uppercase", 
                        padding: "6px 16px", 
                        backgroundColor: "rgba(0,0,0,0.05)", 
                        borderRadius: "100px", 
                        letterSpacing: "1px" 
                      }}>
                        {c.tag}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: THE INFRASTRUCTURE */}
        <section style={{ background: "white" }}>
          <div className="container">
            <div className="section-label">{t("infra_label")}</div>
            <h2 className="section-title">{t("infra_title")}</h2>
            <p className="section-lead">{t("infra_lead")}</p>

            <div className="challenge-cards reveal" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
              {infrastructure.map((item, idx) => (
                <div key={idx} className="challenge-card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div className={`challenge-icon ${item.iconClass}`}>
                      {item.icon}
                    </div>
                    <span style={{ fontSize: "18px", fontWeight: 800, color: "var(--teal)" }}>
                      {item.num}
                    </span>
                  </div>
                  <div>
                    <div className="challenge-title">{item.title}</div>
                    <div className="challenge-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: GOVERNANCE & TIMELINE */}
        <section style={{ background: "var(--light)" }}>
          <div className="container">
            <div className="section-label">{t("gov_label")}</div>
            <h2 className="section-title">{t("gov_title")}</h2>
            <p className="section-lead">{t("gov_lead")}</p>

            <div className="challenge-cards reveal">
              {milestones.map((m, idx) => (
                <div key={idx} className="challenge-card">
                  <div className="section-label" style={{ marginBottom: "0", fontSize: "11px" }}>
                    {m.date}
                  </div>
                  <div>
                    <div className="challenge-title">{m.title}</div>
                    <div className="challenge-desc">{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="reveal" style={{ marginTop: "60px", paddingTop: "40px", borderTop: "1px solid rgba(0,0,0,0.05)", display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", justifyContent: "center" }}>
              <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "var(--text-muted)", fontWeight: 600, width: "100%", textAlign: "center", marginBottom: "8px" }}>
                {t("partners_title")}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "center", justifyContent: "center" }}>
                {partners.map((p, idx) => (
                  <a key={idx} href={p.url} target="_blank" rel="noopener noreferrer" style={{ opacity: 0.8, textDecoration: "none" }} className="hover:opacity-100 transition-opacity cursor-pointer">
                    <div>{p.icon}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: STRATEGIC ALIGNMENT */}
        <section style={{ background: "var(--light)" }}>
          <div className="container">
            <div className="section-label">{t("align_label")}</div>
            <h2 className="section-title">{t("align_title")}</h2>
            <p className="section-lead">{t("align_lead")}</p>

            <div className="au-grid reveal" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
              {alignments.map((a, idx) => (
                <div key={idx} className="au-card">
                  <div className="au-card-icon">
                    {a.icon}
                  </div>
                  <div className="au-card-title">{a.title}</div>
                  <div className="au-card-text">{a.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>


      </main>

      <Footer backToTopVisible={backToTopVisible} scrollToTop={scrollToTop} />
    </>
  );
}
