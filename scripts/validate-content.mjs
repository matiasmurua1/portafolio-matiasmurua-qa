import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { hasRealLink, portfolio } from '../src/data/portfolio.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const supportedLanguages = ['en', 'es'];
const requiredSections = ['about', 'skills', 'experience', 'projects', 'evidence'];

function validateLocalized(label, value) {
  for (const language of supportedLanguages) {
    const translation = value?.[language];
    if (typeof translation !== 'string' || !translation.trim()) {
      errors.push(`${label} is missing the ${language} translation.`);
    }
  }
}

function validateUnique(label, values) {
  const duplicates = values.filter(
    (value, index) => values.indexOf(value) !== index,
  );

  for (const duplicate of new Set(duplicates)) {
    errors.push(`${label} contains a duplicate value: ${duplicate}.`);
  }
}

if (!supportedLanguages.includes(portfolio.settings.defaultLanguage)) {
  errors.push('Default language must be either en or es.');
}

if (!portfolio.personal.name?.trim()) {
  errors.push('Missing professional name.');
}

validateLocalized('Professional title', portfolio.personal.title);
validateLocalized('Professional summary', portfolio.personal.summary);

if (portfolio.caseStudies.length < 4) {
  errors.push('Expected at least four public-safe case studies.');
}

if (portfolio.skillGroups.length < 4) {
  errors.push('Expected at least four core QA skill groups.');
}

if (portfolio.languages.length !== 2) {
  errors.push('Expected Spanish and English language records.');
}

const cvFilename = portfolio.personal.cv;
if (
  typeof cvFilename !== 'string'
  || !cvFilename.toLowerCase().endsWith('.pdf')
) {
  errors.push('The downloadable CV must be a PDF file.');
} else if (!fs.existsSync(path.join(root, 'public', cvFilename))) {
  errors.push('Downloadable CV file is missing.');
}

const navigationIds = portfolio.navigation.map((item) => item.id);
validateUnique('Navigation', navigationIds);

for (const item of portfolio.navigation) {
  if (!/^[a-z][a-z0-9-]*$/.test(item.id)) {
    errors.push(`Invalid navigation id: ${item.id}.`);
  }
  validateLocalized(`Navigation item #${item.id}`, item.label);
}

for (const id of requiredSections) {
  if (!navigationIds.includes(id)) {
    errors.push(`Navigation is missing #${id}.`);
  }
}

validateUnique(
  'Case studies',
  portfolio.caseStudies.map((study) => study.id),
);

for (const study of portfolio.caseStudies) {
  validateLocalized(`Case study ${study.id} title`, study.title);
  validateLocalized(`Case study ${study.id} summary`, study.summary);
  validateLocalized(`Case study ${study.id} challenge`, study.challenge);
}

for (const [name, value] of Object.entries({
  github: portfolio.personal.github,
  linkedin: portfolio.personal.linkedin,
})) {
  if (value && !hasRealLink(value)) {
    errors.push(`${name} must be empty or a valid absolute HTTP(S) URL.`);
  }
}

if (
  portfolio.personal.email
  && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(portfolio.personal.email)
) {
  errors.push('Email must be empty or valid.');
}

for (const item of portfolio.evidence) {
  validateLocalized(`Evidence ${item.title?.en || 'without title'} title`, item.title);
  validateLocalized(`Evidence ${item.title?.en || 'without title'} detail`, item.detail);
  validateLocalized(`Evidence ${item.title?.en || 'without title'} status`, item.status);

  if (item.url && !hasRealLink(item.url)) {
    errors.push(`Invalid evidence URL: ${item.title.en}.`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

const pendingCount = portfolio.evidence.filter((item) => !item.url).length;
console.log(
  `Content validated. ${pendingCount} evidence links remain intentionally pending.`,
);
