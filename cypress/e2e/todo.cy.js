
describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:8080/')
  })

  it('checks the resolution and window size', () => {
    cy.contains('resolution is below')
    cy.contains('window is below')
  })


  it('sets view port and checks the resolution and window size', () => {
    cy.viewport(1900, 1050)
    cy.contains('resolution is below')
    cy.contains('window is above')
  })
})
