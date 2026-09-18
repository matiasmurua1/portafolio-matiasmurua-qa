Feature: QA portfolio
  As a recruiter or hiring manager
  I want to explore Matías Murua's QA portfolio
  So that I can assess his professional profile and contact him

  Background:
    Given the visitor opens the QA portfolio

  Scenario: Professional identity is visible on load
    Then the professional name and QA title are visible
    And the page title identifies Matías Murua
    And the page has no horizontal overflow

  Scenario: Main sections have accessible names
    Then every labelled section references a visible heading

  Scenario: Navigate to case studies
    When the visitor selects View my projects
    Then the case studies section is visible

  Scenario: Switch the interface to Spanish
    When the visitor changes the language to Spanish
    Then the document language is Spanish
    And the Spanish QA title is visible
    And the Spanish skills heading is visible

  Scenario: Review the public-safe projects
    Then four project cards are visible
    And the API Testing Demo project is visible

  Scenario: Contact Matías by email
    Then the contact action opens the professional email address

  Scenario: Download the CV
    Then the CV download points to a PDF file

  Scenario: Use the core content on mobile
    When the visitor uses a mobile viewport
    Then the professional name is visible on mobile
    And the navigation menu can be opened
    And the menu button controls the main navigation
    And the mobile page has no horizontal overflow
