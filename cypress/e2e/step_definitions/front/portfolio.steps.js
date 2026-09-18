import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { portfolio } from '../../../../src/data/portfolio';
import { portfolioPage } from '../../pages/PortfolioPage';

Given('the visitor opens the QA portfolio', () => {
  portfolioPage.visit();
});

Then('the professional name and QA title are visible', () => {
  portfolioPage.heroName().should('contain', portfolio.personal.name);
  portfolioPage.heroTitle().should('contain', portfolio.personal.title.en);
});

Then('the page title identifies Matías Murua', () => {
  cy.title().should('contain', portfolio.personal.shortName);
});

Then('the page has no horizontal overflow', () => {
  portfolioPage.hasNoHorizontalOverflow();
});

Then('every labelled section references a visible heading', () => {
  portfolioPage.semanticSections().each(($section) => {
    cy.wrap($section)
      .invoke('attr', 'aria-labelledby')
      .then((headingId) => {
        expect(headingId).to.be.a('string');
        expect(headingId).not.to.equal('');
        cy.get(`#${headingId}`).should('be.visible');
      });
  });
});

When('the visitor selects View my projects', () => {
  portfolioPage.selectProjects();
});

Then('the case studies section is visible', () => {
  cy.location('hash').should('eq', '#projects');
  portfolioPage.projectsSection().should('be.visible');
});

When('the visitor changes the language to Spanish', () => {
  portfolioPage.switchToSpanish();
});

Then('the document language is Spanish', () => {
  cy.get('html').should('have.attr', 'lang', 'es');
});

Then('the Spanish QA title is visible', () => {
  portfolioPage.heroTitle().should('contain', portfolio.personal.title.es);
});

Then('the Spanish skills heading is visible', () => {
  cy.contains(
    'h2',
    'Cobertura definida por el riesgo del producto.',
  ).should('be.visible');
});

Then('four project cards are visible', () => {
  portfolioPage
    .projectCards()
    .should('have.length', portfolio.caseStudies.length)
    .and('be.visible');
});

Then('the API Testing Demo project is visible', () => {
  cy.contains('[data-cy="project-card"]', 'API Testing Demo').should(
    'be.visible',
  );
});

Then('the contact action opens the professional email address', () => {
  portfolioPage
    .contactButton()
    .should('have.attr', 'href', `mailto:${portfolio.personal.email}`);
});

Then('the CV download points to a PDF file', () => {
  portfolioPage.cvDownload().should('have.attr', 'download');
  portfolioPage
    .cvDownload()
    .invoke('attr', 'href')
    .then((href) => {
      cy.request(href)
        .its('headers.content-type')
        .should('include', 'application/pdf');
    });
});

When('the visitor uses a mobile viewport', () => {
  cy.viewport(390, 844);
});

Then('the professional name is visible on mobile', () => {
  portfolioPage.heroName().should('be.visible');
});

Then('the navigation menu can be opened', () => {
  portfolioPage.openMobileMenu();
  portfolioPage.navigation().should('be.visible');
});

Then('the menu button controls the main navigation', () => {
  portfolioPage
    .menuButton()
    .should('have.attr', 'aria-controls', 'primary-navigation')
    .and('have.attr', 'aria-expanded', 'true');
});

Then('the mobile page has no horizontal overflow', () => {
  portfolioPage.hasNoHorizontalOverflow();
});
