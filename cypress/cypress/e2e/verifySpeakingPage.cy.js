/// <reference types="cypress" />

describe("Automation Panda Test Case", () => {
    let testData;
  
    // Load fixture data before running the test
    before(() => {
      cy.fixture("testData").then((data) => {
        testData = data;
      });
    });
  
    // Before each test, visit the URL
    beforeEach(() => {
      cy.visit(testData.baseUrl);
    });
  
    it("Validates the homepage title", () => {
      
       cy.title().should("eq", testData.expectedTitle);
    });
  
    it("Clicks on 'Speaking' and verifies the title", () => {
      cy.contains(testData.speakingLink).click();
      cy.title().should("eq", testData.speakingTitle);
    });
  
    it("Verifies 'Keynote Address' is present and checks text", () => {
      cy.contains(testData.speakingLink).click();
      
      // Check if Keynote Address is present
      cy.get(testData.keynoteSelector)
        .contains(testData.keynoteText)
        .should("be.visible");
    });
  });
  