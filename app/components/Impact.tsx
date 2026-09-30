import { useTranslations } from "next-intl";

export default function Impact() {
  const t = useTranslations("Impact");

  const impacts = [
    { title: t("i1_title"), text: t("i1_text"), icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg> },
    { title: t("i2_title"), text: t("i2_text"), icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg> },
    { title: t("i3_title"), text: t("i3_text"), icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0" /></svg> },
    { title: t("i4_title"), text: t("i4_text"), icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg> },
  ];

  return (
    <section id="impact">
      <div className="container">
        <div className="section-label">{t("section_label")}</div>
        <h2 className="section-title">{t("section_title")}</h2>
        <p className="section-lead">{t("section_lead")}</p>
        <div className="impact-grid">
          {impacts.map((im, i) => (
            <div key={i} className="impact-card">
              <div className="impact-card-icon">{im.icon}</div>
              <div className="impact-card-title">{im.title}</div>
              <div className="impact-card-text">{im.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
