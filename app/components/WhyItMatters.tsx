import { useTranslations } from "next-intl";

export default function WhyItMatters() {
  const t = useTranslations("WhyItMatters");

  return (
    <section id="why">
      <div className="container">
        <div className="why-content">
          <h2 className="section-title">{t("title")}</h2>
          
          <div className="rationale-section">
            <p className="why-text">{t("p1")}</p>
            <p className="why-text">{t("p2")}</p>
            <p className="why-text">{t("p3")}</p>
          </div>

          <div className="why-problem-section">
            <div className="section-label" style={{ marginBottom: "24px" }}>{t("problem_label")}</div>
            <div className="challenge-cards">
              <div className="challenge-card">
                <div className="challenge-icon red">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>
                </div>
                <div>
                  <div className="challenge-title">{t("c1_title")}</div>
                  <div className="challenge-desc">{t("c1_desc")}</div>
                </div>
              </div>
              <div className="challenge-card">
                <div className="challenge-icon orange">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
                </div>
                <div>
                  <div className="challenge-title">{t("c2_title")}</div>
                  <div className="challenge-desc">{t("c2_desc")}</div>
                </div>
              </div>
              <div className="challenge-card">
                <div className="challenge-icon yellow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                </div>
                <div>
                  <div className="challenge-title">{t("c3_title")}</div>
                  <div className="challenge-desc">{t("c3_desc")}</div>
                </div>
              </div>
              <div className="challenge-card">
                <div className="challenge-icon blue">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22V12" />
                    <path d="M12 12C12 7 8 4 3 3c0 5 3 9 9 9" />
                    <path d="M12 12c0-5 4-8 9-9-1 5-4 9-9 9" />
                  </svg>
                </div>
                <div>
                  <div className="challenge-title">{t("c4_title")}</div>
                  <div className="challenge-desc">{t("c4_desc")}</div>
                </div>
              </div>
            </div>

            <div className="opportunity-box">
              <div className="opportunity-label">{t("opportunity_label")}</div>
              <p className="opportunity-quote">{t("opportunity_quote")}</p>
              <p className="opportunity-text">{t("opportunity_text")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
