import { ArrowUpRight, LockKeyhole } from 'lucide-react';
import { Icon } from './Icon';

export function EvidenceCard({ item, language }) {
  const content = (
    <>
      <span className="evidence-icon"><Icon name={item.icon} /></span>
      <span className="evidence-copy"><strong>{item.title[language]}</strong><small>{item.detail[language]}</small></span>
      {item.url ? <ArrowUpRight className="evidence-action" aria-hidden="true" /> : <LockKeyhole className="evidence-action" aria-hidden="true" />}
      {!item.url && <span className="pending-badge">{item.status[language]}</span>}
    </>
  );

  return item.url ? <a className="evidence-card" href={item.url} target="_blank" rel="noreferrer">{content}</a> : <div className="evidence-card evidence-card--pending" aria-label={`${item.title[language]}: ${item.status[language]}`}>{content}</div>;
}
