"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("Contact");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [backToTopVisible, setBackToTopVisible] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSubmitStatus("success");
      setFormState({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      
      <main className="contact-page">
        <div className="container">
          <div className="contact-grid">
            {/* Left Column: Info */}
            <div className="contact-info">
              <div className="contact-info-header">
                <h1 className="contact-title">{t("title")}</h1>
                <p className="contact-subtitle">
                  {t("subtitle")}
                </p>
              </div>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <h3>{t("accra")}</h3>
                  <p>{t("wacren")}</p>
                  <p><span className="label">{t("address")}</span> <a href="https://www.google.com/maps?sca_esv=df890eccffbfa804&aep=1&prmd=ivns&sxsrf=ANbL-n6VizXt2phx2HBO7wpgIw0HEcgfPA:1773331859691&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3jljrY5CkLlk8Dq3IvwBz-R5R-93bnJN-gfJetFY0A5M6NANLPFEQzj1dcFq3LKKBXHVoOgyWf6JqUwGOohIri1ZbKlIdZIYLCoWCcgdvvLUCGHg9yRK_YDxJ9L6Z2ZB_2aQaHCOnhTyYCnPFqsoOfSnoVwLX5ZQJDHa7zyZ3qmdVvO99Q&biw=1536&bih=742&dpr=1.25&um=1&ie=UTF-8&fb=1&gl=gh&sa=X&geocode=KZfUp8nwm98PMY5U-qS4GZJg&daddr=VCG+Office+Complex,+IPS+Rd,+Accra" target="_blank" rel="noopener" style={{ color: 'inherit', textDecoration: 'underline' }}>VCG Office Complex, IPS Rd, Accra</a></p>
                  <p>
                    <span className="label">{t("phone")}</span>{" "}
                    {showPhone ? (
                      <a href={`tel:${['030', '294', '2873'].join('')}`} style={{ color: 'var(--navy)', fontWeight: '600' }}>
                        {['030', '294', '2873'].join(' ')}
                      </a>
                    ) : (
                      <button 
                        onClick={() => setShowPhone(true)} 
                        style={{ border: 'none', background: 'rgba(0,102,204,0.1)', color: 'var(--navy)', padding: '2px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}
                      >
                        {t("click_phone")}
                      </button>
                    )}
                  </p>
                  <p>
                    <span className="label">{t("email")}</span>{" "}
                    {showEmail ? (
                      <a href={`mailto:${['climet', 'wacren.net'].join('@')}`} style={{ color: 'var(--navy)', fontWeight: '600' }}>
                        {['climet', 'wacren.net'].join('@')}
                      </a>
                    ) : (
                      <button 
                        onClick={() => setShowEmail(true)} 
                        style={{ border: 'none', background: 'rgba(0,102,204,0.1)', color: 'var(--navy)', padding: '2px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}
                      >
                        {t("click_email")}
                      </button>
                    )}
                  </p>
                </div>

              </div>
            </div>

            {/* Right Column: Form */}
            <div className="contact-form-card">
              <form onSubmit={handleSubmit}>
                <div className="form-alert">
                  <div className="form-alert-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                  </div>
                  <p className="form-alert-text">
                    {t("alert")}
                  </p>
                </div>

                <div className="form-group">
                  <label htmlFor="name">{t("name_label")}</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder={t("name_ph")} 
                    className="form-input"
                    value={formState.name}
                    onChange={handleChange}
                    disabled
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t("email_label")}</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder={t("email_ph")} 
                    className="form-input"
                    value={formState.email}
                    onChange={handleChange}
                    disabled
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">{t("phone_label")}</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder={t("phone_ph")} 
                    className="form-input"
                    value={formState.phone}
                    onChange={handleChange}
                    disabled
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">{t("company_label")}</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    placeholder={t("company_ph")} 
                    className="form-input"
                    value={formState.company}
                    onChange={handleChange}
                    disabled
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '32px' }}>
                  <label htmlFor="message">{t("message_label")}</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    placeholder={t("message_ph")} 
                    className="form-input form-textarea"
                    value={formState.message}
                    onChange={handleChange}
                    disabled
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                  {t("submit")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer 
        backToTopVisible={backToTopVisible} 
        scrollToTop={scrollToTop} 
      />
    </>
  );
}
