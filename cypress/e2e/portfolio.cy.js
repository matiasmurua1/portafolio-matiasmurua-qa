describe('QA portfolio', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads the page with the professional identity', () => {
    cy.get('[data-cy="hero-name"]').should('contain', 'Matías Nahuel Murua Martínez');
    cy.get('[data-cy="hero-title"]').should('contain', 'QA Engineer | Manual & Automation');
    cy.title().should('contain', 'Matías Murua');
    cy.document().then((document) => {
      expect(document.documentElement.scrollWidth).to.be.at.most(document.documentElement.clientWidth + 1);
    });
  });

  it('navigates to the case studies section', () => {
    cy.get('[data-cy="view-projects"]').click();
    cy.location('hash').should('eq', '#projects');
    cy.get('#projects').should('be.visible');
  });

  it('switches the complete interface to Spanish', () => {
    cy.get('[data-cy="language-switch"] button[aria-label="Español"]').click();
    cy.get('html').should('have.attr', 'lang', 'es');
    cy.get('[data-cy="hero-title"]').should('contain', 'Testing Manual y Automation');
    cy.contains('h2', 'Cobertura definida por el riesgo del producto.').should('exist');
  });

  it('shows all public-safe projects', () => {
    cy.get('[data-cy="project-card"]').should('have.length', 4).and('be.visible');
    cy.contains('[data-cy="project-card"]', 'API Testing Demo').should('be.visible');
  });

  it('provides a working contact action without fabricating an email', () => {
    cy.get('[data-cy="contact-button"]').click();
    cy.get('[data-cy="contact-notice"]').should('be.visible').and('contain', 'Contact links will activate');
  });

  it('provides a downloadable PDF CV', () => {
    cy.get('[data-cy="cv-download"]').should('have.attr', 'download');
    cy.get('[data-cy="cv-download"]').then(($link) => {
      cy.request($link[0].getAttribute('href')).its('headers.content-type').should('include', 'application/pdf');
    });
  });

  it('keeps core content usable at a mobile viewport', () => {
    cy.viewport(390, 844);
    cy.get('[data-cy="hero-name"]').should('be.visible');
    cy.get('[data-cy="menu-button"]').should('be.visible').click();
    cy.contains('nav a', 'About').should('be.visible');
    cy.document().then((document) => {
      expect(document.documentElement.scrollWidth).to.be.at.most(document.documentElement.clientWidth + 1);
    });
  });
});
