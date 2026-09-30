import { useTranslations } from "next-intl";

export default function Flagship() {
  const t = useTranslations("Flagship");

  const activities = [
    { num: "I", title: t("a1_title"), desc: t("a1_desc"), tag: t("a1_tag") },
    { num: "II", title: t("a2_title"), desc: t("a2_desc"), tag: t("a2_tag") },
    { num: "III", title: t("a3_title"), desc: t("a3_desc"), tag: t("a3_tag") },
    { num: "IV", title: t("a4_title"), desc: t("a4_desc"), tag: t("a4_tag") },
  ];

  return (
    <section id="flagship">
      <div className="container">
        <div className="section-label">{t("section_label")}</div>
        <h2 className="section-title">{t("section_title")}</h2>
        <p className="section-lead">{t("section_lead")}</p>
        <div className="flagship-list">
          {activities.map((f, i) => (
            <div key={i} className="flagship-item">
              <div className="flagship-num">{f.num}</div>
              <div>
                <div className="flagship-title">{f.title}</div>
                <div className="flagship-desc">{f.desc}</div>
              </div>
              <div className="flagship-tag">{f.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
