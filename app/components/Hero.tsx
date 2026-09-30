import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <div className="hero" id="home">
      <div className="hero-canvas"></div>
      <div className="hero-noise"></div>
      <div className="hero-content">
        <div>
          <h1 className="fade-up delay-1">
            {t.rich("title", {
              accent: (chunks) => <span className="h1-accent">{chunks}</span>
            })}
          </h1>
          <p className="hero-desc fade-up delay-2">
            {t("description")}
          </p>
          <div className="hero-actions fade-up delay-3">
            <Link href="/contact" className="btn btn-primary">{t("cta")}</Link>
          </div>
        </div>


      </div>
    </div>
  );
}
