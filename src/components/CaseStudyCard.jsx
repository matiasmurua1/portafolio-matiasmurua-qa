import { ArrowUpRight, Check } from 'lucide-react';
import { Icon } from './Icon';

export function CaseStudyCard({ study, language, labels }) {
  return (
    <article className="case-card" data-cy="project-card">
      <header className="case-card__header">
        <span className="case-number">CASE / {study.number}</span>
        <Icon name={study.icon} className="case-icon" />
      </header>
      <div className="case-card__body">
        <div>
          <h3>{study.title[language]}</h3>
          <p className="case-summary">{study.summary[language]}</p>
          <div className="case-challenge">
            <span>{labels.challenge}</span>
            <p>{study.challenge[language]}</p>
          </div>
        </div>
        <div>
          <p className="mini-label">{labels.contribution}</p>
          <ul className="responsibility-list">
            {study.responsibilities[language].map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}
          </ul>
        </div>
      </div>
      <footer className="case-card__footer">
        <div className="tag-list" aria-label={labels.tools}>{study.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
        <span className="confidential-note"><ArrowUpRight aria-hidden="true" />{labels.noClientData}</span>
      </footer>
    </article>
  );
}
