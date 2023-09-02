describe("Pizza App", () => {
  // [x]  SANITY CHECK //////
  it("sanity check", () => {
    cy.visit("http://localhost:3000");
    expect(1 + 2).to.equal(3);
  });

  // [x] HELPERS ///////
  const logo = () => cy.get("#logo");
  const homeLink = () => cy.get("#home-link");
  const orderLink = () => cy.get("#order-link");
  const welcomeModal = () => cy.get("#welcome-modal");
  const slogan = () => cy.get("#slogan");
  const orderBtn = () => cy.get("button[id='order-pizza'");
  const pizzaForm = () => cy.get("#pizza-form");
  const name = () => cy.get("input[name=name]");
  const nameErr = () => cy.get("#name-error");
  const size = () => cy.get("select[name=size]");
  const sizeErr = () => cy.get("#size-error");
  const sauce = () => cy.get("input[name=sauce]");
  const pepperoni = () => cy.get("input[name=pepperoni]");
  const sausage = () => cy.get("input[name=sausage]");
  const bacon = () => cy.get("input[name=bacon]");
  const spicy = () => cy.get("input[name=spicy]");
  const chicken = () => cy.get("input[name=chicken]");
  const peppers = () => cy.get("input[name=peppers]");
  const olives = () => cy.get("input[name=olives]");
  const pineapple = () => cy.get("input[name=pineapple]");
  const instructions = () => cy.get("textarea[name=special]");
  const submitBtn = () => cy.get("button[id='order-button'");
  const tyModal = () => cy.get("#ty-modal");

  describe("Home Page", () => {
    // [x] PROPER ELEMENTS ARE SHOWING ///
    it("Proper Elements are Showing", () => {
      cy.visit("http://localhost:3000");
      logo().should("exist");
      homeLink().should("exist");
      orderLink().should("exist");
      welcomeModal().should("exist");
      slogan().should("exist");
      orderBtn().should("exist");
    });
  });

  describe("Form Page", () => {
    // [x] PROPER ELEMENTS ARE SHOWING ///
    beforeEach(() => {
      cy.visit("http://localhost:3000/pizza");
    });
    it("Proper Elements are Showing", () => {
      pizzaForm().should("exist");
      submitBtn().should("exist");
    });

    // [x] MVP - ADD TEXT TO NAME INPUT /////
    it("Submit button starts disabled", () => {
      submitBtn().should("be.disabled");
    });

    // [x] MVP - SELECT MULTIPLE TOPPINGS ////
    it("Can type in the text inputs", () => {
      name()
        .should("have.value", "")
        .type("Justin Byrd")
        .should("have.value", "Justin Byrd");
      instructions()
        .should("have.value", "")
        .type("Special instructions entered")
        .should("have.value", "Special instructions entered");
    });
    it("Can select multiple toppings", () => {
      cy.visit("http://localhost:3000/pizza");
      pepperoni().should("not.be.checked").check().should("be.checked");
      sausage().should("not.be.checked").check().should("be.checked");
      bacon().should("not.be.checked").check().should("be.checked");
      spicy().should("not.be.checked").check().should("be.checked");
      chicken().should("not.be.checked").check().should("be.checked");
      peppers().should("not.be.checked").check().should("be.checked");
      olives().should("not.be.checked").check().should("be.checked");
      pineapple().should("not.be.checked").check().should("be.checked");
    });

    // [ ] MVP - SUBMITTING FORM DATA //////
    it("Can submit pizza form data", () => {
      name().type("Justin");
      size().select('10"');
      sauce().check("red");
      submitBtn().click();
      cy.url().should("include", "/confirmation");
    });
  });
  describe("Confirmation Page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/confirmation");
    });
    it("Thank you Modal Exists", () => {
      tyModal().should("exist");
    });
    it("User can go back to home page", () => {
      logo().click();
      cy.url().should("eq", "http://localhost:3000/");
      cy.visit("http://localhost:3000/confirmation");
      homeLink().click();
      cy.url().should("eq", "http://localhost:3000/");
    });
    it("User can go back to the order form", () => {
      orderLink().click();
      cy.url().should("include", "/pizza");
      name().should("have.value", "");
      size().should("have.value", "");
      sauce().should("not.be.checked");
      pepperoni().should("not.be.checked");
      sausage().should("not.be.checked");
      bacon().should("not.be.checked");
      spicy().should("not.be.checked");
      chicken().should("not.be.checked");
      peppers().should("not.be.checked");
      olives().should("not.be.checked");
      pineapple().should("not.be.checked");
      instructions().should("have.value", "");
    });
  });

  // [ ] CAN ONLY SELECT ONE SAUCE

  // [ ] ERROR HANDLING /////

  // [ ] SUBMITTING FORM DATA //////
});
