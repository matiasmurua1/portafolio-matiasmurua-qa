import { useEffect, useState } from 'react';
import {
  ArrowDown, ArrowRight, BriefcaseBusiness, CheckCircle2, Copy, Download,
  ExternalLink, GitBranch, Mail, MapPin, ShieldCheck,
} from 'lucide-react';
import { portfolio, hasRealLink } from './data/portfolio';
import { Header } from './components/Header';
import { Icon } from './components/Icon';
import { SectionHeading } from './components/SectionHeading';
import { CaseStudyCard } from './components/CaseStudyCard';
import { EvidenceCard } from './components/EvidenceCard';

const copy = {
  en: {
    skip: 'Skip to main content', home: 'home', mainNavigation: 'Main navigation', toggleNavigation: 'Toggle navigation', languageSelector: 'Language selector', contact: 'Contact', cvShort: 'CV',
    projects: 'View my projects', cv: 'Download CV', linkedinPending: 'LinkedIn · Pending', explore: 'Explore profile', years: 'years in QA', layers: 'testing layers', remoteReady: 'remote ready', releaseSignal: 'Release signal', riskVisible: 'Risk made visible.',
    aboutKicker: 'Approach', profileSnapshot: 'Profile snapshot', base: 'Based in', lookingFor: 'Looking for', languages: 'Languages', collaboration: 'Collaboration', collaborative: 'Cross-functional · Remote',
    skillsKicker: 'QA expertise', skillsTitle: 'Coverage shaped around product risk.', skillsDescription: 'A practical mix of analysis, execution, automation, data validation, and communication — without arbitrary proficiency scores.',
    stackKicker: 'Technology stack', stackTitle: 'Tools used with purpose.', stackDescription: 'The stack supports a traceable workflow: plan, execute, automate, investigate, report, and release.',
    experienceKicker: 'Professional experience', experienceTitle: 'Experience across products where quality has real business impact.', engagement: 'Engagement', focus: 'Primary focus',
    caseKicker: 'Selected work', caseTitle: 'Case studies built around decisions, not vanity metrics.', caseDescription: 'Public-safe summaries of responsibilities and testing decisions. No confidential client details, credentials, or proprietary code are exposed.', challenge: 'Quality challenge', contribution: 'My contribution', tools: 'Tools and methods', noClientData: 'Client-safe summary',
    evidenceKicker: 'QA artifacts', evidenceTitle: 'Evidence that makes the work inspectable.', evidenceDescription: 'Every card is ready for a real public artifact. Missing URLs remain visibly marked as pending and are never fabricated.',
    educationKicker: 'Formation', educationTitle: 'Engineering foundation.', languagesKicker: 'Languages', languagesTitle: 'Communication for local and international teams.',
    contactKicker: 'Contact', contactTitle: 'Looking for a QA professional who connects risk, evidence, and delivery?', contactText: 'I am open to remote QA Engineer, Manual Tester, Automation Engineer, Functional Analyst, and Software Tester roles in Argentina, Latin America, and international teams.',
    emailPending: 'Professional email pending', linkedInPending: 'LinkedIn URL pending', githubPending: 'GitHub URL pending', addDetails: 'Add this link in src/data/portfolio.js', copyLocation: 'Copy location', copied: 'Location copied', contactButton: 'Review contact details', contactReady: 'Contact links will activate as soon as the real URLs are added to the central profile file.',
    footerNote: 'Designed and tested with the same care I bring to product quality.', availability: 'Available for remote work',
  },
  es: {
    skip: 'Ir al contenido principal', home: 'inicio', mainNavigation: 'Navegación principal', toggleNavigation: 'Abrir o cerrar navegación', languageSelector: 'Selector de idioma', contact: 'Contacto', cvShort: 'CV',
    projects: 'Ver mis proyectos', cv: 'Descargar CV', linkedinPending: 'LinkedIn · Pendiente', explore: 'Explorar perfil', years: 'años en QA', layers: 'capas de prueba', remoteReady: 'modalidad remota', releaseSignal: 'Señal de release', riskVisible: 'Riesgo visible.',
    aboutKicker: 'Enfoque', profileSnapshot: 'Resumen profesional', base: 'Ubicación', lookingFor: 'Búsqueda', languages: 'Idiomas', collaboration: 'Colaboración', collaborative: 'Multidisciplinaria · Remota',
    skillsKicker: 'Competencias de QA', skillsTitle: 'Cobertura definida por el riesgo del producto.', skillsDescription: 'Una combinación práctica de análisis, ejecución, automatización, validación de datos y comunicación, sin porcentajes arbitrarios.',
    stackKicker: 'Stack tecnológico', stackTitle: 'Herramientas utilizadas con propósito.', stackDescription: 'El stack acompaña un flujo trazable: planificar, ejecutar, automatizar, investigar, reportar y liberar.',
    experienceKicker: 'Experiencia profesional', experienceTitle: 'Experiencia en productos donde la calidad tiene impacto real en el negocio.', engagement: 'Proyecto', focus: 'Foco principal',
    caseKicker: 'Trabajo seleccionado', caseTitle: 'Casos de estudio centrados en decisiones, no en métricas decorativas.', caseDescription: 'Resúmenes públicos y seguros sobre responsabilidades y decisiones de prueba. No se exponen datos confidenciales, credenciales ni código propietario.', challenge: 'Desafío de calidad', contribution: 'Mi contribución', tools: 'Herramientas y métodos', noClientData: 'Resumen sin datos de cliente',
    evidenceKicker: 'Artefactos de QA', evidenceTitle: 'Evidencias que hacen visible el trabajo.', evidenceDescription: 'Cada tarjeta está preparada para un artefacto público real. Las URLs faltantes quedan marcadas como pendientes y nunca se inventan.',
    educationKicker: 'Formación', educationTitle: 'Base de ingeniería.', languagesKicker: 'Idiomas', languagesTitle: 'Comunicación para equipos locales e internacionales.',
    contactKicker: 'Contacto', contactTitle: '¿Buscás un profesional de QA que conecte riesgos, evidencia y entrega?', contactText: 'Estoy disponible para posiciones remotas como QA Engineer, QA Manual Tester, QA Automation Engineer, Analista Funcional QA y Software Tester en Argentina, Latinoamérica o equipos internacionales.',
    emailPending: 'Email profesional pendiente', linkedInPending: 'URL de LinkedIn pendiente', githubPending: 'URL de GitHub pendiente', addDetails: 'Agregá este enlace en src/data/portfolio.js', copyLocation: 'Copiar ubicación', copied: 'Ubicación copiada', contactButton: 'Revisar datos de contacto', contactReady: 'Los enlaces de contacto se activarán al agregar las URLs reales en el archivo central del perfil.',
    footerNote: 'Diseñado y probado con el mismo criterio que aplico a la calidad de producto.', availability: 'Disponible para trabajo remoto',
  },
};

function App() {
  const [language, setLanguage] = useState(portfolio.settings.defaultLanguage);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactNotice, setContactNotice] = useState(false);
  const [copied, setCopied] = useState(false);
  const t = copy[language];
  const localize = (value) => value[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === 'en'
      ? 'Matías Murua · QA Engineer | Manual & Automation'
      : 'Matías Murua · QA Engineer | Testing Manual y Automation';
  }, [language]);

  const copyLocation = async () => {
    try {
      await navigator.clipboard.writeText(portfolio.personal.location);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">{t.skip}</a>
      <Header language={language} setLanguage={setLanguage} menuOpen={menuOpen} setMenuOpen={setMenuOpen} personal={portfolio.personal} navigation={portfolio.navigation} text={t} />

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="availability"><span aria-hidden="true" />{localize(portfolio.personal.availability)}</div>
            <p className="eyebrow">{localize(portfolio.hero.eyebrow)}</p>
            <h1 id="hero-title" data-cy="hero-name">{portfolio.personal.name}</h1>
            <p className="professional-title" data-cy="hero-title">{localize(portfolio.personal.title)}</p>
            <p className="hero-intro">{localize(portfolio.hero.intro)}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects" data-cy="view-projects">{t.projects}<ArrowRight aria-hidden="true" /></a>
              <a className="button button-secondary" href={`${import.meta.env.BASE_URL}${portfolio.personal.cv}`} download data-cy="cv-download">{t.cv}<Download aria-hidden="true" /></a>
              {hasRealLink(portfolio.personal.linkedin)
                ? <a className="button button-ghost" href={portfolio.personal.linkedin} target="_blank" rel="noreferrer"><BriefcaseBusiness aria-hidden="true" />LinkedIn</a>
                : <span className="button button-ghost is-disabled" aria-disabled="true" title={t.linkedInPending}><BriefcaseBusiness aria-hidden="true" />{t.linkedinPending}</span>}
            </div>
            <div className="hero-meta" aria-label="Professional highlights">
              <span><b>{portfolio.personal.yearsOfExperience}</b>{t.years}</span>
              <span><b>Web · API · SQL</b>{t.layers}</span>
              <span><b>{portfolio.personal.location}</b>{t.remoteReady}</span>
            </div>
          </div>

          <aside className="quality-console" aria-label={language === 'en' ? 'Quality trace overview' : 'Resumen de trazabilidad de calidad'}>
            <div className="console-header"><span>quality_trace.yml</span><span className="console-status"><CheckCircle2 aria-hidden="true" /> verified</span></div>
            <div className="trace-line"><span>01</span><p><b>requirement</b><em>business rule mapped</em></p></div>
            <div className="trace-line"><span>02</span><p><b>risk</b><em>critical path identified</em></p></div>
            <div className="trace-line active"><span>03</span><p><b>test</b><em>manual + automation</em></p></div>
            <div className="trace-line"><span>04</span><p><b>evidence</b><em>UI ↔ API ↔ database</em></p></div>
            <div className="console-result"><span>{t.releaseSignal}</span><strong>{t.riskVisible}</strong></div>
          </aside>
          <a className="scroll-cue" href="#about"><ArrowDown aria-hidden="true" /><span>{t.explore}</span></a>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="about-intro">
            <div>
              <p className="section-kicker">{t.aboutKicker}</p>
              <h2 id="about-title">{localize(portfolio.about.title)}</h2>
            </div>
            <div className="about-copy">
              {portfolio.about.paragraphs.map((paragraph) => <p key={paragraph.en}>{localize(paragraph)}</p>)}
            </div>
          </div>
          <div className="process-grid" aria-label={language === 'en' ? 'QA working process' : 'Proceso de trabajo de QA'}>
            {portfolio.about.process.map((step) => (
              <article className="process-card" key={step.number}>
                <div className="process-top"><span>{step.number}</span><Icon name={step.icon} /></div>
                <h3>{localize(step.title)}</h3><p>{localize(step.text)}</p>
              </article>
            ))}
          </div>
          <aside className="profile-strip">
            <span className="profile-strip__title">{t.profileSnapshot}</span>
            <dl>
              <div><dt>{t.base}</dt><dd><MapPin aria-hidden="true" />{portfolio.personal.location}</dd></div>
              <div><dt>{t.lookingFor}</dt><dd>{localize(portfolio.personal.remotePreference)}</dd></div>
              <div><dt>{t.languages}</dt><dd>ES · Native / EN · B1 → B2</dd></div>
              <div><dt>{t.collaboration}</dt><dd>{t.collaborative}</dd></div>
            </dl>
          </aside>
        </section>

        <section className="section skills-section" id="skills" aria-labelledby="skills-title">
          <SectionHeading id={'skills-title'} kicker={t.skillsKicker} title={t.skillsTitle} description={t.skillsDescription} />
          <div className="skills-grid">
            {portfolio.skillGroups.map((group) => (
              <article className="skill-card" key={group.title.en}>
                <Icon name={group.icon} className="skill-card__icon" />
                <h3>{localize(group.title)}</h3><p>{localize(group.description)}</p>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section stack-section" id="stack" aria-labelledby="stack-title">
          <SectionHeading id={'stack-title'} kicker={t.stackKicker} title={t.stackTitle} description={t.stackDescription} />
          <div className="stack-table">
            {portfolio.stack.map((group, index) => (
              <div className="stack-row" key={group.label.en}>
                <span className="stack-index">0{index + 1}</span>
                <h3>{localize(group.label)}</h3>
                <div className="stack-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience" aria-labelledby="experience-title">
          <SectionHeading id={'experience-title'} kicker={t.experienceKicker} title={t.experienceTitle} description={localize(portfolio.experience.intro)} />
          <div className="engagement-list">
            {portfolio.experience.engagements.map((item, index) => (
              <article className="engagement" key={item.code}>
                <span className="engagement-code">{item.code}</span>
                <div><small>{t.engagement} 0{index + 1}</small><h3>{localize(item.sector)}</h3></div>
                <div><small>{t.focus}</small><strong>{localize(item.focus)}</strong><p>{localize(item.detail)}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects" aria-labelledby="projects-title">
          <SectionHeading id={'projects-title'} kicker={t.caseKicker} title={t.caseTitle} description={t.caseDescription} />
          <div className="case-list" data-cy="projects-list">
            {portfolio.caseStudies.map((study) => <CaseStudyCard key={study.id} study={study} language={language} labels={t} />)}
          </div>
        </section>

        <section className="section evidence-section" id="evidence" aria-labelledby="evidence-title">
          <SectionHeading id={'evidence-title'} kicker={t.evidenceKicker} title={t.evidenceTitle} description={t.evidenceDescription} />
          <div className="evidence-grid">
            {portfolio.evidence.map((item) => <EvidenceCard key={item.title.en} item={item} language={language} />)}
          </div>
        </section>

        <section className="section credentials-grid" aria-label={language === 'en' ? 'Education and languages' : 'Formación e idiomas'}>
          <article className="credential-panel" id="education" aria-labelledby="education-title">
            <p className="section-kicker">{t.educationKicker}</p><h2 id="education-title">{t.educationTitle}</h2>
            <div className="education-record"><Icon name="bookOpen" /><div><strong>{localize(portfolio.education.title)}</strong><p>{localize(portfolio.education.detail)}</p></div></div>
          </article>
          <article className="credential-panel" id="languages" aria-labelledby="languages-title">
            <p className="section-kicker">{t.languagesKicker}</p><h2 id="languages-title">{t.languagesTitle}</h2>
            <div className="language-records">{portfolio.languages.map((item) => <div key={item.code}><span>{item.code}</span><strong>{localize(item.name)}</strong><small>{localize(item.level)}</small></div>)}</div>
          </article>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-main">
            <p className="section-kicker">{t.contactKicker}</p><h2 id="contact-title">{t.contactTitle}</h2><p>{t.contactText}</p>
            <div className="contact-actions">
              {portfolio.personal.email
                ? <a className="button button-primary" href={`mailto:${portfolio.personal.email}`} data-cy="contact-button"><Mail aria-hidden="true" />{portfolio.personal.email}</a>
                : <button className="button button-primary" type="button" onClick={() => setContactNotice(true)} data-cy="contact-button"><Mail aria-hidden="true" />{t.emailPending}</button>}
              <button className="button button-secondary" type="button" onClick={copyLocation}><Copy aria-hidden="true" />{copied ? t.copied : t.copyLocation}</button>
            </div>
            {contactNotice && <output className="contact-notice" data-cy="contact-notice">{t.contactReady}</output>}
          </div>
          <div className="contact-links">
            <ContactLink icon={Mail} label="Email" value={portfolio.personal.email} pending={t.emailPending} hint={t.addDetails} />
            <ContactLink icon={BriefcaseBusiness} label="LinkedIn" value={portfolio.personal.linkedin} pending={t.linkedInPending} hint={t.addDetails} external />
            <ContactLink icon={GitBranch} label="GitHub" value={portfolio.personal.github} pending={t.githubPending} hint={t.addDetails} external />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div><span className="brand-mark" aria-hidden="true">MM</span><p>{t.footerNote}</p></div>
        <div><ShieldCheck aria-hidden="true" /><span>{t.availability}</span><small>© {new Date().getFullYear()} {portfolio.personal.shortName}</small></div>
      </footer>
    </div>
  );
}

function ContactLink({ icon: ContactIcon, label, value, pending, hint, external = false }) {
  const isEmail = label === 'Email';
  const valid = isEmail ? Boolean(value) : hasRealLink(value);
  if (valid) {
    return <a className="contact-link" href={isEmail ? `mailto:${value}` : value} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}><ContactIcon aria-hidden="true" /><span><small>{label}</small><strong>{value}</strong></span><ExternalLink aria-hidden="true" /></a>;
  }
  return <div className="contact-link contact-link--pending"><ContactIcon aria-hidden="true" /><span><small>{label}</small><strong>{pending}</strong><em>{hint}</em></span></div>;
}

export default App;
