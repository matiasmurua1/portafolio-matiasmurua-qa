class PortfolioPage {
  selectors = { heroName: '[data-cy="hero-name"]', heroTitle: '[data-cy="hero-title"]', projectsButton: '[data-cy="view-projects"]', projectsSection: '#projects', projectCard: '[data-cy="project-card"]', languageSwitch: '[data-cy="language-switch"]', contactButton: '[data-cy="contact-button"]', cvDownload: '[data-cy="cv-download"]', menuButton: '[data-cy="menu-button"]' };
  visit() { cy.visit('/'); }
  heroName() { return cy.get(this.selectors.heroName); }
  heroTitle() { return cy.get(this.selectors.heroTitle); }
  selectProjects() { cy.get(this.selectors.projectsButton).click(); }
  projectsSection() { return cy.get(this.selectors.projectsSection); }
  projectCards() { return cy.get(this.selectors.projectCard); }
  switchToSpanish() { cy.get(`${this.selectors.languageSwitch} button[aria-label="Español"]`).click(); }
  contactButton() { return cy.get(this.selectors.contactButton); }
  cvDownload() { return cy.get(this.selectors.cvDownload); }
  openMobileMenu() { cy.get(this.selectors.menuButton).should('be.visible').click(); }
  hasNoHorizontalOverflow() { cy.document().then((document) => { expect(document.documentElement.scrollWidth).to.be.at.most(document.documentElement.clientWidth + 1); }); }
}
export const portfolioPage = new PortfolioPage();