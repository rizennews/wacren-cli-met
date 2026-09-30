import { useTranslations } from "next-intl";

export default function SDGs() {
  const t = useTranslations("SDGs");

  const sdgs = [
    { badge: "SDG 2", color: "#D97706", text: t("sdg2") },
    { badge: "SDG 6", color: "#2563EB", text: t("sdg6") },
    { badge: "SDG 7", color: "#D97706", text: t("sdg7") },
    { badge: "SDG 13", color: "#16A34A", text: t("sdg13") },
    { badge: "SDG 17", color: "#7C3AED", text: t("sdg17") },
  ];

  const auItems = [
    { badge: "DTS", text: t("au1") },
    { badge: "CAADP", text: t("au2") },
    { badge: "PACJA", text: t("au3") },
  ];

  const partners = [
    { title: t("p1_title"), text: t("p1_text"), icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
    { title: t("p2_title"), text: t("p2_text"), icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg> },
  ];

  return (
    <section id="sdgs">
      <div className="sdgs-bg-pattern"></div>
      <div className="container sdgs-inner">
        <div className="section-label sdgs-section-label">{t("section_label")}</div>
        <h2 className="section-title sdgs-title">{t("section_title")}</h2>
        <p className="section-lead sdgs-lead">{t("section_lead")}</p>

        <div className="sdgs-layout" style={{ gap: "40px" }}>
          <div className="sdg-panel" style={{ flex: "1" }}>
            <div className="sdg-panel-header">
              <div className="sdg-panel-icon" style={{ background: "var(--navy)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
              </div>
              <div>
                <div className="sdg-panel-title">{t("un_title")}</div>
                <div className="sdg-panel-subtitle">{t("un_subtitle")}</div>
              </div>
            </div>
            <div className="sdg-items">
              {sdgs.map((s, i) => (
                <div key={i} className="sdg-item" style={{ padding: "16px 0", borderBottom: i < sdgs.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}>
                  <div className="sdg-badge" style={{ background: s.color, color: "white", marginBottom: "8px" }}>{s.badge}</div>
                  <div className="sdg-item-text" style={{ fontSize: "14.5px" }}>
                    <strong>{s.text.split(".")[0]}.</strong>{s.text.split(".").slice(1).join(".")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ flex: "1" }}>
            <div className="sdg-panel" style={{ marginBottom: "30px" }}>
              <div className="sdg-panel-header">
                <div className="sdg-panel-icon" style={{ background: "var(--gold)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                </div>
                <div>
                  <div className="sdg-panel-title">{t("au_title")}</div>
                  <div className="sdg-panel-subtitle">{t("au_subtitle")}</div>
                </div>
              </div>
              <div className="sdg-items">
                {auItems.map((s, i) => (
                  <div key={i} className="sdg-item" style={{ padding: "12px 0" }}>
                    <div className="sdg-badge" style={{ background: "rgba(217, 119, 6, 0.1)", color: "#B45309", fontSize: "11px" }}>{s.badge}</div>
                    <div className="sdg-item-text" style={{ fontSize: "14px" }}>
                      <strong>{s.text.split(".")[0]}.</strong>{s.text.split(".").slice(1).join(".")}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="au-grid" style={{ gridTemplateColumns: "1fr", gap: "15px" }}>
              {partners.map((a, i) => (
                <div key={i} className="au-card" style={{ padding: "20px", display: "flex", alignItems: "flex-start", gap: "15px" }}>
                  <div className="au-card-icon" style={{ marginTop: "3px", flexShrink: 0 }}>{a.icon}</div>
                  <div>
                    <div className="au-card-title" style={{ fontSize: "14px", fontWeight: "700", marginBottom: "4px" }}>{a.title}</div>
                    <div className="au-card-text" style={{ fontSize: "13px", lineHeight: "1.5" }}>{a.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
