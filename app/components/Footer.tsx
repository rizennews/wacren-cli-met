"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface FooterProps {
  backToTopVisible: boolean;
  scrollToTop: (e: React.MouseEvent) => void;
}

export default function Footer({ backToTopVisible, scrollToTop }: FooterProps) {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navigation");

  return (
    <>
      <footer id="contact">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="logo-block" style={{ marginBottom: "0", display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/wacren.png" alt="WACREN Logo" style={{ height: "64px", width: "auto", objectFit: "contain" }} />
              <div>
                <div className="logo-name">WACREN</div>
                <span className="logo-tag">{t("logo_tag")}</span>
              </div>
            </div>
            <p className="footer-about">{t("about")}</p>
            <div className="footer-attribution">
              {t("attribution")}
            </div>

            <div className="footer-social">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/west-and-central-african-research-and-education-network/" target="_blank" rel="noopener" className="footer-social-link" aria-label="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/WACRENinfo" target="_blank" rel="noopener" className="footer-social-link" aria-label="Facebook">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              {/* Bluesky */}
              <a href="https://bsky.app/profile/wacren.bsky.social" target="_blank" rel="noopener" className="footer-social-link" aria-label="Bluesky">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.204-.659-.299-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z" /></svg>
              </a>
              {/* Mastodon */}
              <a href="https://mastodon.social/@WACREN" target="_blank" rel="noopener" className="footer-social-link" aria-label="Mastodon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.193 7.879c0-5.206-3.411-6.732-3.411-6.732C18.062.357 15.108.025 12.041 0h-.076c-3.068.025-6.02.357-7.74 1.147 0 0-3.411 1.526-3.411 6.732 0 1.192-.023 2.613 0 4.04.08 4.791.936 9.507 4.565 10.961 1.834.734 3.655.939 5.308.991 3.486.109 6.529-.395 6.529-.395l-.092-2.207s-2.577.745-6.528.531c-3.948-.213-4.141-2.025-4.214-3.419-.011-.202-.015-.39-.015-.553l15.485.011c.066-2.991.047-6.727-.06-8.182zm-4.93 9.182h-2.461v-6.574c0-1.352-.57-2.037-1.707-2.037-1.257 0-1.886.812-1.886 2.431v3.587h-2.425v-3.587c0-1.619-.629-2.431-1.886-2.431-1.137 0-1.706.685-1.706 2.037v6.574H3.729V9.308c0-1.353.344-2.433 1.035-3.241.71-.83 1.637-1.255 2.783-1.255 1.332 0 2.34.513 3.027 1.542l.62 1.059.62-1.059c.687-1.029 1.695-1.542 3.027-1.542 1.146 0 2.074.425 2.783 1.255.69.808 1.036 1.888 1.036 3.241v7.753z" /></svg>
              </a>
              {/* X / Twitter */}
              <a href="https://twitter.com/wacren" target="_blank" rel="noopener" className="footer-social-link" aria-label="X (Twitter)">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">{t("programme")}</div>
            <ul className="footer-links">
              <li><Link href="/#home">{tNav("climet")}</Link></li>
              <li><Link href="/activities">{tNav("activities")}</Link></li>
              <li><Link href="/community">{tNav("community")}</Link></li>
              <li><Link href="/climb-champions">{tNav("champions")}</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">{t("alignment")}</div>
            <ul className="footer-links">
              <li><Link href="/#alignment">{t("alignment")}</Link></li>
              <li><a href="https://africaconnect4.wacren.net/" target="_blank" rel="noopener">AfricaConnect4</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">{t("get_involved")}</div>
            <ul className="footer-links">
              <li><Link href="/contact">{tNav("partner")}</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">
            <span>{t("copyright")}</span>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <a 
        href="#" 
        className={`back-to-top ${backToTopVisible ? "visible" : ""}`} 
        id="backToTop" 
        aria-label="Back to top"
        onClick={scrollToTop}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </a>
    </>
  );
}
