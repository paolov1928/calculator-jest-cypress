/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Navigation', () => {
  // it('should navigate to the about page', () => {
  //   // Start from the index page
  //   cy.visit('http://localhost:3000/');

  //   // Find a link with an href attribute containing "about" and click it
  //   cy.get('a[href*="about"]').click();

  //   // The new url should include "/about"
  //   cy.url().should('include', '/about');

  //   // The new page should contain an h1 with "About page"
  //   cy.get('h1').contains('About Page');
  // });

  it('should allow inputs to calculate', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid=num1]').type('Mango');
    cy.get('[data-testid=num2]').type('14');
    cy.get('[data-testid=num3]').type('18');

    cy.get('[data-testid=add]').click();

    cy.get('[data-testid=fetched').contains('Mango')
  })
});

// it("adds numbers", () => {
//   render(<Home />);
//   // check if adds properly
//   const num1input = screen.getByTestId("num1");
//   const num2input = screen.getByTestId("num2");
//   const addButton = screen.getByTestId("add");
//   const resultArea = screen.getByTestId("result");
//   fireEvent.change(num1input, { target: { value: 5 } });
//   fireEvent.change(num2input, { target: { value: 8 } });
//   addButton.click();
//   expect(resultArea).toHaveTextContent("13");
// });
