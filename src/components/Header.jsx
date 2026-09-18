import { useEffect, useRef } from 'react';
import { Download, Globe2, Menu, X } from 'lucide-react';

export function Header({ language, setLanguage, menuOpen, setMenuOpen, personal, navigation, text }) {
  const headerRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [setMenuOpen]);

  return (
    <header className="site-header" ref={headerRef}>
      <a className="brand" href="#top" aria-label={`${personal.shortName}, ${text.home}`}>
        <span className="brand-mark" aria-hidden="true">MM</span>
        <span>{personal.shortName}</span>
      </a>

      <nav id="primary-navigation" className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label={text.mainNavigation}>
        {navigation.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>{item.label[language]}</a>
        ))}
        <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>{text.contact}</a>
      </nav>

      <div className="header-actions">
        <a className="header-cv" href={`${import.meta.env.BASE_URL}${personal.cv}`} download data-cy="header-cv">
          <Download aria-hidden="true" /> <span>{text.cvShort}</span>
        </a>
        <fieldset className="language-switch" data-cy="language-switch">
          <legend className="sr-only">{text.languageSelector}</legend>
          <Globe2 aria-hidden="true" />
          {['en', 'es'].map((lang) => (
            <button key={lang} type="button" className={language === lang ? 'active' : ''} aria-pressed={language === lang} aria-label={lang === 'en' ? 'English' : 'Español'} onClick={() => setLanguage(lang)}>
              {lang.toUpperCase()}
            </button>
          ))}
        </fieldset>
        <button className="menu-button" type="button" aria-label={text.toggleNavigation} aria-controls="primary-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((current) => !current)} data-cy="menu-button">
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
