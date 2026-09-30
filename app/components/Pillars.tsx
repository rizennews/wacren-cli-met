import { useTranslations } from "next-intl";

export default function Pillars() {
  const t = useTranslations("Pillars");

  const pillars = [
    {
      num: "01",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>,
      title: t("p1_title"),
      points: [
        t("p1_pt1"),
        t("p1_pt2"),
        t("p1_pt3"),
      ],
      className: "p1",
    },
    {
      num: "02",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>,
      title: t("p2_title"),
      points: [
        t("p2_pt1"),
        t("p2_pt2"),
        t("p2_pt3"),
      ],
      className: "p2",
    },
    {
      num: "03",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" /><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" /><circle cx="12" cy="12" r="2" /><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" /><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" /></svg>,
      title: t("p3_title"),
      points: [
        t("p3_pt1"),
        t("p3_pt2"),
        t("p3_pt3"),
        t("p3_pt4"),
      ],
      className: "p3",
    },
    {
      num: "04",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
      title: t("p4_title"),
      points: [
        t("p4_pt1"),
        t("p4_pt2"),
        t("p4_pt3"),
      ],
      className: "p4",
    },
    {
      num: "05",
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>,
      title: t("p5_title"),
      points: [
        t("p5_pt1"),
        t("p5_pt2"),
        t("p5_pt3"),
        t("p5_pt4"),
      ],
      className: "p5",
    },
  ];

  return (
    <section id="pillars">
      <div className="container">
        <div className="section-label">{t("section_label")}</div>
        <h2 className="section-title">{t("section_title")}</h2>
        <p className="section-lead">{t("section_lead")}</p>
        <div className="pillars-grid">
          {pillars.map((p, i) => (
            <div key={i} className={`pillar-card ${p.className}`}>
              <div className="pillar-num">{p.num}</div>
              <div className="pillar-icon">{p.icon}</div>
              <div className="pillar-title">{p.title}</div>
              <ul className="pillar-points">
                {p.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
