import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import PDFDocument from 'pdfkit';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDir = path.join(root, 'output', 'pdf');
const outputPath = path.join(outputDir, 'cv-matias-murua.pdf');
const publicPath = path.join(root, 'public', 'cv-matias-murua.pdf');
fs.mkdirSync(outputDir, { recursive: true });

const colors = { ink: '#102323', muted: '#516563', teal: '#0A806B', pale: '#EAF6F2', line: '#CBDBD7', white: '#FFFFFF' };
const doc = new PDFDocument({ size: 'A4', margins: { top: 58, bottom: 22, left: 52, right: 52 }, info: { Title: 'Matias Murua - QA Engineer CV', Author: 'Matias Nahuel Murua Martinez', Subject: 'QA Manual and Automation professional profile' } });
const fileStream = fs.createWriteStream(outputPath);
doc.pipe(fileStream);

function pageHeader() {
  const width = doc.page.width;
  doc.save().rect(0, 0, width, 45).fill(colors.ink).fillColor(colors.white).font('Helvetica-Bold').fontSize(8).text('MATIAS MURUA  /  QA ENGINEER', 52, 19, { lineBreak: false }).fillColor('#B8D8D1').font('Helvetica').fontSize(7).text('PUBLIC-SAFE CV  /  CONTACT LINKS PENDING', width - 260, 20, { width: 208, align: 'right', lineBreak: false }).restore();
  doc.x = 52;
  doc.y = 58;
}

function pageFooter(pageNumber) {
  const savedX = doc.x;
  const savedY = doc.y;
  const y = doc.page.height - 34;
  doc.save().strokeColor(colors.line).lineWidth(.6).moveTo(52, y - 5).lineTo(doc.page.width - 52, y - 5).stroke().fillColor(colors.muted).font('Helvetica').fontSize(7).text('Cordoba, Argentina  |  Open to remote opportunities', 52, y + 3, { lineBreak: false }).text(`Page ${pageNumber}`, doc.page.width - 100, y + 3, { width: 48, align: 'right', lineBreak: false }).restore();
  doc.x = savedX;
  doc.y = savedY;
}

function title(text) {
  doc.moveDown(.8).fillColor(colors.teal).font('Helvetica-Bold').fontSize(8).text(text.toUpperCase(), { characterSpacing: 1.1 }).moveDown(.65);
}

function rule() {
  const y = doc.y;
  doc.strokeColor(colors.line).lineWidth(.6).moveTo(52, y).lineTo(doc.page.width - 52, y).stroke().moveDown(.8);
}

pageHeader();
doc.moveDown(.8).fillColor(colors.ink).font('Helvetica-Bold').fontSize(27).text('Matias Nahuel Murua Martinez', { lineGap: 1 });
doc.moveDown(.25).fillColor(colors.teal).font('Helvetica-Bold').fontSize(13).text('QA ENGINEER  /  MANUAL & AUTOMATION TESTING');
doc.moveDown(.7).fillColor(colors.ink).font('Helvetica').fontSize(9.7).text('Software Engineer and QA professional with 4+ years of experience in e-commerce, SaaS platforms, telecommunications, and enterprise dashboards. I uncover product risk early and connect requirements with clear evidence across web, API, integration, and database layers.', { lineGap: 4 });
doc.moveDown(.8).fillColor(colors.muted).font('Helvetica').fontSize(7.2).text('CORDOBA, ARGENTINA  /  REMOTE: ARGENTINA · LATAM · INTERNATIONAL');

title('Professional focus');
const focusTop = doc.y;
const focusWidth = 163;
const focusHeight = 104;
const focuses = [
  ['FUNCTIONAL QUALITY', 'Functional, exploratory, regression, smoke, integration, E2E, UAT, requirements analysis, acceptance criteria, and risk-based testing.'],
  ['AUTOMATION', 'Cypress, JavaScript, Selenium WebDriver, Python, Behave, Cucumber, Page Object Model, and data-driven testing.'],
  ['API & DATA', 'Postman, Newman, REST APIs, Oracle SQL, DBeaver, and validation between UI, service, and database layers.'],
];
focuses.forEach(([heading, body], index) => {
  const x = 52 + index * focusWidth;
  doc.save().rect(x, focusTop, focusWidth, focusHeight).fillAndStroke(colors.pale, colors.line).restore();
  doc.fillColor(colors.ink).font('Helvetica-Bold').fontSize(9).text(heading, x + 10, focusTop + 13, { width: focusWidth - 20 });
  doc.fillColor(colors.muted).font('Helvetica').fontSize(7.5).text(body, x + 10, focusTop + 34, { width: focusWidth - 20, lineGap: 2 });
});
doc.y = focusTop + focusHeight;

title('How I work');
const steps = [
  ['01  UNDERSTAND', 'Analyze requirements, business rules, users, acceptance criteria, and risk.'],
  ['02  DESIGN', 'Build test scenarios, cases, data, scope, and traceability around critical behavior.'],
  ['03  VALIDATE', 'Execute exploratory and repeatable checks across UI, APIs, integrations, and data.'],
  ['04  COMMUNICATE', 'Report defects with evidence, clarify impact, retest fixes, and inform release decisions.'],
];
for (const [heading, body] of steps) {
  const y = doc.y;
  doc.fillColor(colors.ink).font('Helvetica-Bold').fontSize(8.4).text(heading, 54, y, { width: 125 });
  doc.fillColor(colors.muted).font('Helvetica').fontSize(7.8).text(body, 180, y, { width: 359, lineGap: 1 });
  doc.y = Math.max(doc.y + 7, y + 27);
  rule();
}

title('Toolbox');
doc.fillColor(colors.teal).font('Helvetica-Bold').fontSize(6.8).text('CYPRESS · JAVASCRIPT · SELENIUM · PYTHON · BEHAVE · CUCUMBER · POSTMAN · NEWMAN · REST · ORACLE SQL · DBEAVER · GIT · GITHUB · BITBUCKET · GITHUB ACTIONS · JENKINS · JIRA · CONFLUENCE · XRAY · QMETRY · TESTRAIL · ALLURE · MOCHAWESOME', { lineGap: 4 });
doc.moveDown(.9);
title('Experience domains');
doc.fillColor(colors.ink).font('Helvetica-Bold').fontSize(8.2).text('E-COMMERCE & SHOPPING CART  ·  INCENTIVE SAAS  ·  TELECOMMUNICATIONS  ·  CALL CENTER & SURVEY DASHBOARDS  ·  API TESTING DEMO');
doc.moveDown(.75);
const noteY = doc.y;
doc.save().roundedRect(52, noteY, 489, 44, 4).fillAndStroke(colors.pale, colors.line).restore();
doc.fillColor(colors.muted).font('Helvetica').fontSize(7.5).text('Contact email, LinkedIn, GitHub, employer names, and exact employment dates are intentionally left out because they were not supplied. Add them before sending this CV to recruiters.', 62, noteY + 11, { width: 469, lineGap: 2 });
pageFooter(1);

doc.end();
await new Promise((resolve, reject) => fileStream.on('finish', resolve).on('error', reject));
fs.copyFileSync(outputPath, publicPath);
console.log(outputPath);
