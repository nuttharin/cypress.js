describe("test1", () => {
  beforeEach(() => {
    cy.visit(
      "https://www.idtecresume.com/cover-letter-samples-english-version/167-sample-cover-letter-it-support.html"
    );
  });
  it("step1", () => {
    cy.visit(
      "https://www.idtecresume.com/cover-letter-samples-english-version/167-sample-cover-letter-it-support.html"
    );
  });
  it("check-text", () => {
    cy.get("h2.art-postheader").should(
      "have.text",
      "ตัวอย่างจดหมายสมัครงานฝ่ายไอที (ภาษาอังกฤษ)"
    );
  });
  it("test click", () => {
    // Find the <a> element within the <div> containing the specified text
    cy.contains("div", "รับเขียนเรซูเม่ (Resume) ภาษาอังกฤษ").find("a").click();
    // Assert that the URL has changed to the expected URL after clicking the link
    cy.url().should("include", "/products/resume-en.html");
  });
});
