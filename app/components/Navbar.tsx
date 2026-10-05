"use client";

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';

interface NavbarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen }: NavbarProps) {
  const pathname = usePathname();
  const t = useTranslations('Navigation');
  const locale = useLocale();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Helper to determine active state
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <div className="header-outer">
        <header>
          {/* Logo */}
          <Link href="/" className="logo-block" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src="/wacren.png" alt="WACREN Logo" style={{ height: "64px", width: "auto", objectFit: "contain" }} />
            <div className="logo-text-wrap">
              <span className="logo-name">WACREN</span>
              <span className="logo-tag">CLI-MET</span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <nav aria-label="Main navigation" className="nav-desktop">
            <ul className="nav-links">
              <li><Link href="/#home" className={isActive('/') ? 'active' : ''}>{t('climet')}</Link></li>
              <li><Link href="/activities" className={isActive('/activities') ? 'active' : ''}>{t('activities')}</Link></li>
              <li><Link href="/community" className={isActive('/community') ? 'active' : ''}>{t('community')}</Link></li>
              <li><Link href="/climb-champions" className={isActive('/climb-champions') ? 'active' : ''}>{t('champions')}</Link></li>
            </ul>
          </nav>

          <div className="nav-actions">
            <div className="language-switcher hidden md:flex" style={{ gap: '8px', marginRight: '16px', alignItems: 'center' }}>
              <Link href={pathname} locale="en" style={{ textDecoration: 'none', opacity: locale === 'en' ? 1 : 0.4, transition: 'opacity 0.2s' }}>
                <img src="https://flagcdn.com/w40/gb.png" srcSet="https://flagcdn.com/w80/gb.png 2x" width="24" height="16" alt="English" decoding="async" style={{ borderRadius: '2px', display: 'block' }} />
              </Link>
              <Link href={pathname} locale="fr" style={{ textDecoration: 'none', opacity: locale === 'fr' ? 1 : 0.4, transition: 'opacity 0.2s' }}>
                <img src="https://flagcdn.com/w40/fr.png" srcSet="https://flagcdn.com/w80/fr.png 2x" width="24" height="16" alt="Français" decoding="async" style={{ borderRadius: '2px', display: 'block' }} />
              </Link>
              <Link href={pathname} locale="pt" style={{ textDecoration: 'none', opacity: locale === 'pt' ? 1 : 0.4, transition: 'opacity 0.2s' }}>
                <img src="https://flagcdn.com/w40/pt.png" srcSet="https://flagcdn.com/w80/pt.png 2x" width="24" height="16" alt="Português" decoding="async" style={{ borderRadius: '2px', display: 'block' }} />
              </Link>
            </div>
            <Link href="/contact" className="nav-cta">{t('partner')}</Link>
            <button 
              className="nav-hamburger" 
              id="hamburger" 
              aria-label="Open menu" 
              aria-expanded={mobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>

        </header>
      </div>

      {/* Mobile menu dropdown */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-menu-links">
          <Link href="/#home" className={`mobile-menu-link ${isActive('/') ? 'active' : ''}`} onClick={closeMobileMenu}>{t('climet')}</Link>
          <Link href="/activities" className={`mobile-menu-link ${isActive('/activities') ? 'active' : ''}`} onClick={closeMobileMenu}>{t('activities')}</Link>
          <Link href="/community" className={`mobile-menu-link ${isActive('/community') ? 'active' : ''}`} onClick={closeMobileMenu}>{t('community')}</Link>
          <Link href="/climb-champions" className={`mobile-menu-link ${isActive('/climb-champions') ? 'active' : ''}`} onClick={closeMobileMenu}>{t('champions')}</Link>
        </div>
        <div className="mobile-menu-footer">
          <div className="language-switcher-mobile" style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '16px', alignItems: 'center' }}>
              <Link href={pathname} locale="en" onClick={closeMobileMenu} style={{ textDecoration: 'none', opacity: locale === 'en' ? 1 : 0.4, transition: 'opacity 0.2s' }}>
                <img src="https://flagcdn.com/w40/gb.png" srcSet="https://flagcdn.com/w80/gb.png 2x" width="28" height="19" alt="English" decoding="async" style={{ borderRadius: '3px', display: 'block' }} />
              </Link>
              <Link href={pathname} locale="fr" onClick={closeMobileMenu} style={{ textDecoration: 'none', opacity: locale === 'fr' ? 1 : 0.4, transition: 'opacity 0.2s' }}>
                <img src="https://flagcdn.com/w40/fr.png" srcSet="https://flagcdn.com/w80/fr.png 2x" width="28" height="19" alt="Français" decoding="async" style={{ borderRadius: '3px', display: 'block' }} />
              </Link>
              <Link href={pathname} locale="pt" onClick={closeMobileMenu} style={{ textDecoration: 'none', opacity: locale === 'pt' ? 1 : 0.4, transition: 'opacity 0.2s' }}>
                <img src="https://flagcdn.com/w40/pt.png" srcSet="https://flagcdn.com/w80/pt.png 2x" width="28" height="19" alt="Português" decoding="async" style={{ borderRadius: '3px', display: 'block' }} />
              </Link>
          </div>
          <Link href="/contact" className="mobile-menu-cta" onClick={closeMobileMenu}>
            {t('partner')}
          </Link>
        </div>
      </div>
    </>
  );
}

