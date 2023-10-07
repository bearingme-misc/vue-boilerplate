import Home from "./Home.vue";

describe("<Home />", () => {
  beforeEach(() => {
    cy.mount(Home);
  });

  it("should render", () => {
    cy.get("h1").should("contain", "Home");
  });
});
