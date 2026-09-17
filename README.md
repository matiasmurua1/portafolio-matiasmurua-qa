# Matías Murua · QA Engineer Portfolio

A bilingual, responsive portfolio for QA Manual & Automation roles. It presents professional positioning, testing expertise, tool stack, public-safe case studies, QA evidence placeholders, education, languages, contact paths, and a downloadable CV.

The interface starts in English and includes a visible English/Spanish switch. It was designed for recruiters, hiring managers, and QA Leads evaluating remote candidates in Latin America and international teams.

## Stack

- React 19 and Vite 8
- JavaScript only (no TypeScript)
- Reusable components and centralized content data
- Maintainable CSS with responsive and reduced-motion support
- Lucide icons
- Cypress end-to-end tests with Cucumber and Page Object Model
- GitHub Actions deployment to GitHub Pages

## Local setup

Requirements: Node.js 20.19+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run static code validation |
| `npm run test:content` | Check required content, URLs, and the CV asset |
| `npm run build` | Generate SEO files and create the production build |
| `npm run preview` | Serve the production build locally |
| `npm run test:e2e` | Run Cypress against an already running preview server |
| `npm run test:e2e:open` | Open Cypress interactively |
| `npm run test:ci` | Start the preview and run Cypress automatically |
| `npm run validate` | Run lint, content checks, and production build |
| `npm run cv:generate` | Regenerate the public-safe PDF CV |
| `npm run cv:verify` | Render the PDF to PNG files for visual review |

Run the full local quality flow with:

```bash
npm run validate
npm run test:ci
```

## Editing professional content

All website profile data is centralized in [`src/data/portfolio.js`](src/data/portfolio.js). Update that file to change:

- Name, title, summary, location, and availability
- Email, LinkedIn, and GitHub
- Experience positioning and sectors
- Skills and technology stack
- Case studies and evidence links
- Education and language levels
- CV filename and canonical site URL

URLs are intentionally empty until real links are supplied. The UI renders an explicit pending state instead of inventing destinations.

The downloadable CV is a public-safe draft generated from `scripts/create-cv.mjs`. After adding verified contact and employment information, update that script and run:

```bash
npm run cv:generate
npm run cv:verify
```

## Cypress coverage

The automated suite verifies initial load, professional identity, in-page navigation, language switching, case-study visibility, contact behavior, PDF availability, and basic mobile responsiveness. Tests live in [`cypress/e2e/portfolio.cy.js`](cypress/e2e/portfolio.cy.js).

## Publish free with GitHub Pages

1. Create an empty GitHub repository.
2. Push this project to its `main` branch.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, select **GitHub Actions** as the source.
5. Wait for the `Validate and deploy portfolio` workflow in the **Actions** tab.
6. Open the public URL shown in the deployment summary. It normally follows `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME/`.

The Vite base path is derived automatically from `GITHUB_REPOSITORY`, so every asset works under the repository path. Deployment runs only after linting, content validation, build, and Cypress tests succeed.

If you use a custom domain, set `portfolio.settings.siteUrl` to the final absolute URL before building.

## Information still required before public outreach

- Professional email address
- LinkedIn profile URL
- GitHub profile URL
- Public automation repository and QA evidence URLs
- Employer or client-safe company names and employment dates, if approved
- Education institution, exact qualification status, and dates
- Final review of the generated CV before sending it to recruiters
- Optional repository name and final public URL in the central settings

No certifications, employers, private client names, metrics, credentials, or proprietary code have been fabricated.

## Project structure

```text
src/
  components/          Reusable UI components
  data/portfolio.js    Single editable content source
  styles/global.css    Design system and responsive styles
cypress/e2e/           End-to-end QA suite
public/                Favicon, manifest, 404, CV, robots, sitemap
scripts/               Content, SEO, and CV utilities
.github/workflows/     Validation and GitHub Pages deployment
```
