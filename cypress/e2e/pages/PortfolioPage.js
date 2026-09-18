class PortfolioPage {
  selectors = {
    contactButton: '[data-cy="contact-button"]',
    cvDownload: '[data-cy="cv-download"]',
    heroName: '[data-cy="hero-name"]',
    heroTitle: '[data-cy="hero-title"]',
    languageSwitch: '[data-cy="language-switch"]',
    menuButton: '[data-cy="menu-button"]',
    navigation: '#primary-navigation',
    projectCard: '[data-cy="project-card"]',
    projectsButton: '[data-cy="view-projects"]',
    projectsSection: '#projects',
    semanticSection: 'section[aria-labelledby]',
  };

  visit() {
    cy.visit('/');
  }

  heroName() {
    return cy.get(this.selectors.heroName);
  }

  heroTitle() {
    return cy.get(this.selectors.heroTitle);
  }

  selectProjects() {
    cy.get(this.selectors.projectsButton).click();
  }

  projectsSection() {
    return cy.get(this.selectors.projectsSection);
  }

  projectCards() {
    return cy.get(this.selectors.projectCard);
  }

  semanticSections() {
    return cy.get(this.selectors.semanticSection);
  }

  switchToSpanish() {
    cy.get(
      `${this.selectors.languageSwitch} button[aria-label="Español"]`,
    ).click();
  }

  contactButton() {
    return cy.get(this.selectors.contactButton);
  }

  cvDownload() {
    return cy.get(this.selectors.cvDownload);
  }

  menuButton() {
    return cy.get(this.selectors.menuButton);
  }

  navigation() {
    return cy.get(this.selectors.navigation);
  }

  openMobileMenu() {
    this.menuButton().should('be.visible').click();
  }

  hasNoHorizontalOverflow() {
    cy.document().then((document) => {
      expect(document.documentElement.scrollWidth).to.be.at.most(
        document.documentElement.clientWidth + 1,
      );
    });
  }
}

export const portfolioPage = new PortfolioPage();
