const pending = {
  en: 'Pending real link',
  es: 'Enlace real pendiente',
};

export const portfolio = {
  settings: {
    defaultLanguage: 'en',
    siteUrl: '',
    repositoryName: '',
  },
  personal: {
    name: 'Matías Nahuel Murua Martínez',
    shortName: 'Matías Murua',
    title: {
      en: 'QA Engineer | Manual & Automation',
      es: 'QA Engineer | Testing Manual y Automation',
    },
    summary: {
      en: 'Software Engineer and Manual & Automation QA professional with 4+ years of experience across e-commerce, SaaS platforms, telecommunications, and enterprise dashboards.',
      es: 'Software Engineer y profesional de QA Manual & Automation con más de 4 años de experiencia en e-commerce, plataformas SaaS, telecomunicaciones y dashboards empresariales.',
    },
    location: 'Córdoba, Argentina',
    remotePreference: {
      en: 'Remote roles in Argentina, Latin America, or international teams',
      es: 'Posiciones remotas para Argentina, Latinoamérica o equipos internacionales',
    },
    availability: {
      en: 'Open to remote opportunities',
      es: 'Disponible para oportunidades remotas',
    },
    yearsOfExperience: '4+',
    email: 'muruamatias.96@gmail.com',
    linkedin: 'https://www.linkedin.com/in/matiasmurua/',
    github: 'https://github.com/matiasmurua1',
    cv: 'cv-matias-murua.pdf',
  },
  navigation: [
    { id: 'about', label: { en: 'About', es: 'Perfil' } },
    { id: 'skills', label: { en: 'Expertise', es: 'Competencias' } },
    { id: 'experience', label: { en: 'Experience', es: 'Experiencia' } },
    { id: 'projects', label: { en: 'Case studies', es: 'Casos de estudio' } },
    { id: 'evidence', label: { en: 'Evidence', es: 'Evidencias' } },
  ],
  hero: {
    eyebrow: {
      en: 'Software quality, end to end',
      es: 'Calidad de software, de punta a punta',
    },
    intro: {
      en: 'I turn requirements into testable evidence, uncover risk early, and help teams ship reliable software across web, API, and data layers.',
      es: 'Transformo requerimientos en evidencia verificable, detecto riesgos temprano y ayudo a entregar software confiable en web, API y datos.',
    },
  },
  about: {
    title: { en: 'Quality is a system, not a final checkpoint.', es: 'La calidad es un sistema, no un control final.' },
    paragraphs: [
      {
        en: 'My work begins before execution: I analyze requirements, clarify acceptance criteria, map risk, and shape test scenarios that connect business intent with observable behavior.',
        es: 'Mi trabajo comienza antes de la ejecución: analizo requerimientos, clarifico criterios de aceptación, mapeo riesgos y diseño escenarios que conectan la intención del negocio con comportamientos observables.',
      },
      {
        en: 'I combine exploratory depth with repeatable automation, validating the full path from interface to API and database. I collaborate with developers, Product Owners, and stakeholders throughout the development lifecycle.',
        es: 'Combino profundidad exploratoria con automatización repetible, validando el recorrido completo desde la interfaz hasta la API y la base de datos. Colaboro con developers, Product Owners y stakeholders durante todo el ciclo de desarrollo.',
      },
    ],
    process: [
      { number: '01', icon: 'search', title: { en: 'Understand', es: 'Entender' }, text: { en: 'Requirements, users, business rules, and risk.', es: 'Requerimientos, usuarios, reglas de negocio y riesgos.' } },
      { number: '02', icon: 'route', title: { en: 'Design', es: 'Diseñar' }, text: { en: 'Scenarios, data, coverage, and traceability.', es: 'Escenarios, datos, cobertura y trazabilidad.' } },
      { number: '03', icon: 'play', title: { en: 'Validate', es: 'Validar' }, text: { en: 'UI, API, integrations, and database evidence.', es: 'Evidencia en UI, API, integraciones y base de datos.' } },
      { number: '04', icon: 'message', title: { en: 'Communicate', es: 'Comunicar' }, text: { en: 'Clear defects, impact, retesting, and release signals.', es: 'Defectos claros, impacto, retesting y señales de release.' } },
    ],
  },
  skillGroups: [
    {
      icon: 'scan',
      title: { en: 'Functional quality', es: 'Calidad funcional' },
      description: { en: 'Business-focused coverage from requirements through acceptance.', es: 'Cobertura orientada al negocio desde requerimientos hasta aceptación.' },
      items: ['Functional Testing', 'Exploratory Testing', 'Regression Testing', 'Smoke Testing', 'Integration Testing', 'End-to-End Testing', 'User Acceptance Testing'],
    },
    {
      icon: 'fileCheck',
      title: { en: 'Test analysis & design', es: 'Análisis y diseño de pruebas' },
      description: { en: 'Test assets built around risk, clarity, and traceability.', es: 'Activos de prueba basados en riesgo, claridad y trazabilidad.' },
      items: ['Requirements Analysis', 'Acceptance Criteria Validation', 'Test Scenario Design', 'Test Case Design', 'Risk-based Testing', 'BDD'],
    },
    {
      icon: 'bug',
      title: { en: 'Defect lifecycle', es: 'Ciclo de defectos' },
      description: { en: 'Actionable reporting and disciplined follow-through.', es: 'Reportes accionables y seguimiento disciplinado.' },
      items: ['Defect Reporting', 'Evidence Capture', 'Impact Analysis', 'Retesting', 'Regression Scope', 'Stakeholder Communication'],
    },
    {
      icon: 'workflow',
      title: { en: 'Automation strategy', es: 'Estrategia de automatización' },
      description: { en: 'Maintainable checks for stable, high-value workflows.', es: 'Validaciones mantenibles para flujos estables y de alto valor.' },
      items: ['Cypress', 'Selenium WebDriver', 'Page Object Model', 'Data-driven Testing', 'Cucumber', 'Behave'],
    },
  ],
  stack: [
    { label: { en: 'Automation', es: 'Automatización' }, items: ['Cypress', 'JavaScript', 'Selenium WebDriver', 'Python', 'Behave', 'Cucumber', 'Page Object Model'] },
    { label: { en: 'API & data', es: 'API y datos' }, items: ['Postman', 'Newman', 'REST APIs', 'Oracle SQL', 'DBeaver', 'UI ↔ API ↔ DB validation'] },
    { label: { en: 'Delivery', es: 'Entrega' }, items: ['Git', 'GitHub', 'Bitbucket', 'GitHub Actions', 'Jenkins'] },
    { label: { en: 'Management & reporting', es: 'Gestión y reportes' }, items: ['Jira', 'Confluence', 'Xray', 'QMetry', 'TestRail', 'Allure', 'Mochawesome'] },
  ],
  experience: {
    intro: {
      en: 'More than four years contributing to quality across complex digital products. Client names, company names, and exact dates are intentionally not published until Matías provides the approved public version.',
      es: 'Más de cuatro años contribuyendo a la calidad de productos digitales complejos. Los nombres de clientes, empresas y fechas exactas no se publican hasta que Matías defina la versión pública aprobada.',
    },
    engagements: [
      { code: 'ECOM', sector: { en: 'E-commerce', es: 'E-commerce' }, focus: { en: 'Transactional flows', es: 'Flujos transaccionales' }, detail: { en: 'Catalog, promotions, cart, checkout, orders, APIs, and data consistency.', es: 'Catálogo, promociones, carrito, checkout, órdenes, APIs y consistencia de datos.' } },
      { code: 'SAAS', sector: { en: 'Incentive SaaS', es: 'SaaS de incentivos' }, focus: { en: 'Business rules', es: 'Reglas de negocio' }, detail: { en: 'Campaigns, segmentation, points, bonuses, goals, and activation states.', es: 'Campañas, segmentación, puntos, bonos, metas y estados de activación.' } },
      { code: 'TELCO', sector: { en: 'Telecommunications', es: 'Telecomunicaciones' }, focus: { en: 'Integrated systems', es: 'Sistemas integrados' }, detail: { en: 'Cross-layer validation and collaboration in complex delivery environments.', es: 'Validación entre capas y colaboración en entornos complejos de entrega.' } },
      { code: 'BI', sector: { en: 'Enterprise dashboards', es: 'Dashboards empresariales' }, focus: { en: 'Data integrity', es: 'Integridad de datos' }, detail: { en: 'Permissions, filters, rankings, alerts, heatmaps, REST endpoints, and Oracle.', es: 'Permisos, filtros, rankings, alertas, mapas de calor, endpoints REST y Oracle.' } },
    ],
  },
  caseStudies: [
    {
      id: 'ecommerce', number: '01', icon: 'shoppingCart',
      title: { en: 'E-commerce & shopping cart', es: 'E-commerce y carrito de compras' },
      summary: { en: 'Quality coverage for a purchase journey where pricing, promotions, integrations, and order data must remain consistent.', es: 'Cobertura de calidad para un recorrido de compra donde precios, promociones, integraciones y datos de órdenes deben ser consistentes.' },
      challenge: { en: 'Protect the revenue-critical path across catalog, cart, checkout, API, and database layers.', es: 'Proteger el flujo crítico de ingresos entre catálogo, carrito, checkout, API y base de datos.' },
      responsibilities: {
        en: ['Validated catalog, cart, promotions, pricing, and checkout behavior.', 'Designed and executed functional, integration, and regression tests.', 'Validated cart and order APIs plus Oracle SQL data.', 'Built automation with Python, Selenium, and Behave.', 'Reported, tracked, retested, and closed defects with evidence.'],
        es: ['Validé catálogo, carrito, promociones, precios y checkout.', 'Diseñé y ejecuté pruebas funcionales, de integración y regresión.', 'Validé APIs de carrito y órdenes, junto con datos en Oracle SQL.', 'Construí automatizaciones con Python, Selenium y Behave.', 'Reporté, seguí, revalidé y cerré defectos con evidencia.'],
      },
      tools: ['Python', 'Selenium', 'Behave', 'REST API', 'Oracle SQL'],
    },
    {
      id: 'saas', number: '02', icon: 'layers',
      title: { en: 'Incentive SaaS platform', es: 'Plataforma SaaS de incentivos' },
      summary: { en: 'Validation of configurable campaigns where segmentation and business rules determine points, bonuses, and goals.', es: 'Validación de campañas configurables donde la segmentación y las reglas de negocio determinan puntos, bonos y metas.' },
      challenge: { en: 'Make complex campaign rules observable and protect critical configurations through repeatable regression.', es: 'Hacer observables reglas complejas de campañas y proteger configuraciones críticas mediante regresiones repetibles.' },
      responsibilities: {
        en: ['Validated campaign creation, activation, and segmentation.', 'Tested points, bonus, and target business rules.', 'Automated critical scenarios with Cypress, JavaScript, and Cucumber.', 'Tested APIs in Postman and verified data through SQL and logs.', 'Executed smoke and regression suites for release feedback.'],
        es: ['Validé creación, activación y segmentación de campañas.', 'Probé reglas de negocio de puntos, bonos y metas.', 'Automaticé escenarios críticos con Cypress, JavaScript y Cucumber.', 'Probé APIs con Postman y verifiqué datos mediante SQL y logs.', 'Ejecuté suites de smoke y regresión para aportar feedback de release.'],
      },
      tools: ['Cypress', 'JavaScript', 'Cucumber', 'Postman', 'SQL'],
    },
    {
      id: 'dashboard', number: '03', icon: 'chart',
      title: { en: 'Call center & survey dashboard', es: 'Dashboard de call center y encuestas' },
      summary: { en: 'Role-aware dashboard testing with a strong focus on filter behavior and the integrity of analytical data.', es: 'Pruebas de dashboard por roles con foco en el comportamiento de filtros y la integridad de datos analíticos.' },
      challenge: { en: 'Confirm that each profile sees the right insights and that every number traces back to its API and Oracle source.', es: 'Confirmar que cada perfil vea la información correcta y que cada dato sea trazable hasta su API y fuente Oracle.' },
      responsibilities: {
        en: ['Validated permission-based profiles and restricted views.', 'Tested dashboards, heatmaps, rankings, alerts, dates, and regional filters.', 'Exercised REST endpoints and compared UI, API, and Oracle results.', 'Automated business-critical scenarios with Cypress and Cucumber.'],
        es: ['Validé perfiles basados en permisos y vistas restringidas.', 'Probé tableros, mapas de calor, rankings, alertas, fechas y filtros regionales.', 'Ejecuté pruebas sobre endpoints REST y comparé resultados de UI, API y Oracle.', 'Automaticé escenarios críticos de negocio con Cypress y Cucumber.'],
      },
      tools: ['Cypress', 'Cucumber', 'REST API', 'Oracle SQL', 'Role-based testing'],
    },
    {
      id: 'api-demo', number: '04', icon: 'braces',
      title: { en: 'API Testing Demo', es: 'Demo de API Testing' },
      summary: { en: 'Personal testing project designed around a public API and a complete, reproducible validation flow.', es: 'Proyecto personal de pruebas sobre una API pública con un flujo de validación completo y reproducible.' },
      challenge: { en: 'Demonstrate API coverage from test design through automated execution and reporting.', es: 'Demostrar cobertura de API desde el diseño de pruebas hasta la ejecución automatizada y el reporte.' },
      responsibilities: {
        en: ['Covered complete CRUD behavior.', 'Designed positive, negative, and boundary cases.', 'Validated HTTP status codes, schemas, headers, and response bodies.', 'Prepared a Postman collection with Newman execution and result reporting.'],
        es: ['Cubrí el comportamiento CRUD completo.', 'Diseñé casos positivos, negativos y de borde.', 'Validé códigos HTTP, schemas, headers y cuerpos de respuesta.', 'Preparé una colección de Postman con ejecución en Newman y reporte de resultados.'],
      },
      tools: ['Postman', 'Newman', 'REST API', 'JSON Schema', 'Reporting'],
    },
  ],
  evidence: [
    { icon: 'github', title: { en: 'Automation repositories', es: 'Repositorios de automatización' }, detail: { en: 'Cypress and Selenium reference projects.', es: 'Proyectos de referencia con Cypress y Selenium.' }, url: '', status: pending },
    { icon: 'listChecks', title: { en: 'Test case samples', es: 'Ejemplos de casos de prueba' }, detail: { en: 'Structured scenarios with preconditions and expected results.', es: 'Escenarios estructurados con precondiciones y resultados esperados.' }, url: '', status: pending },
    { icon: 'clipboard', title: { en: 'Test plans', es: 'Planes de prueba' }, detail: { en: 'Scope, approach, risk, environment, and exit criteria.', es: 'Alcance, enfoque, riesgos, ambiente y criterios de salida.' }, url: '', status: pending },
    { icon: 'bug', title: { en: 'Bug reports', es: 'Reportes de bugs' }, detail: { en: 'Clear reproduction, evidence, impact, and context.', es: 'Reproducción clara, evidencia, impacto y contexto.' }, url: '', status: pending },
    { icon: 'send', title: { en: 'Postman collections', es: 'Colecciones de Postman' }, detail: { en: 'Positive and negative API coverage with assertions.', es: 'Cobertura positiva y negativa de API con assertions.' }, url: '', status: pending },
    { icon: 'database', title: { en: 'SQL queries', es: 'Consultas SQL' }, detail: { en: 'Cross-layer data validation examples.', es: 'Ejemplos de validación de datos entre capas.' }, url: '', status: pending },
    { icon: 'chart', title: { en: 'Execution reports', es: 'Reportes de ejecución' }, detail: { en: 'Allure, Mochawesome, and Newman outputs.', es: 'Resultados de Allure, Mochawesome y Newman.' }, url: '', status: pending },
    { icon: 'workflow', title: { en: 'GitHub Actions pipelines', es: 'Pipelines de GitHub Actions' }, detail: { en: 'Automated build, quality gates, tests, and deployment.', es: 'Build, controles de calidad, pruebas y despliegue automatizados.' }, url: '', status: pending },
    { icon: 'bookOpen', title: { en: 'Technical documentation', es: 'Documentación técnica' }, detail: { en: 'Testing strategy and reusable project guidance.', es: 'Estrategia de pruebas y guías reutilizables de proyecto.' }, url: '', status: pending },
  ],
  education: {
    title: { en: 'Software Engineering', es: 'Ingeniería de Software' },
    detail: { en: 'Institution, degree status, and dates pending confirmation.', es: 'Institución, estado del título y fechas pendientes de confirmación.' },
  },
  languages: [
    { code: 'ES', name: { en: 'Spanish', es: 'Español' }, level: { en: 'Native', es: 'Nativo' } },
    { code: 'EN', name: { en: 'English', es: 'Inglés' }, level: { en: 'B1 · progressing toward B2', es: 'B1 · avanzando hacia B2' } },
  ],
};

export const hasRealLink = (value) => typeof value === 'string' && /^https?:\/\//.test(value);
