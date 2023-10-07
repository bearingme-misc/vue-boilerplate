import About from "./About.vue";

describe("<About />", () => {
  beforeEach(() => {
    cy.mount(About);
  });

  it("should render", () => {
    cy.get("h1").should("contain", "About");
  });
});
