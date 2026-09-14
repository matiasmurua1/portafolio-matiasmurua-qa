import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { portfolio, hasRealLink } from '../src/data/portfolio.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const requiredSections = ['about', 'skills', 'experience', 'projects', 'evidence'];

if (!portfolio.personal.name) errors.push('Missing professional name.');
if (portfolio.caseStudies.length < 4) errors.push('Expected four public-safe case studies.');
if (portfolio.skillGroups.length < 4) errors.push('Expected the four core QA skill groups.');
if (portfolio.languages.length !== 2) errors.push('Expected Spanish and English language records.');
if (!fs.existsSync(path.join(root, 'public', portfolio.personal.cv))) errors.push('Downloadable CV file is missing.');

const ids = new Set(portfolio.navigation.map((item) => item.id));
for (const id of requiredSections) if (!ids.has(id)) errors.push(`Navigation is missing #${id}.`);

for (const [name, value] of Object.entries({ linkedin: portfolio.personal.linkedin, github: portfolio.personal.github })) {
  if (value && !hasRealLink(value)) errors.push(`${name} must be empty or a valid absolute URL.`);
}
if (portfolio.personal.email && !/^\S+@\S+\.\S+$/.test(portfolio.personal.email)) errors.push('Email must be empty or valid.');
for (const item of portfolio.evidence) if (item.url && !hasRealLink(item.url)) errors.push(`Invalid evidence URL: ${item.title.en}.`);

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

const pendingCount = portfolio.evidence.filter((item) => !item.url).length;
console.log(`Content validated. ${pendingCount} evidence links remain intentionally pending.`);
