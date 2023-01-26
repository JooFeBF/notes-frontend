describe('when you visit the page for the first time', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173')
  })

  it('user can login', () => {
    cy.contains('Show login').click()
    cy.get('[placeholder=Username]').type('tester')
    cy.get('[placeholder=Password]').type('123456')
    cy.contains('Login').click()
    cy.contains('Write a note').click()
    cy.get('[placeholder="Here goes your title"]')
  })

  it('user views an error message when credentials are wrong', () => {
    cy.contains('Show login').click()
    cy.get('[placeholder=Username]').type('tester')
    cy.get('[placeholder=Password]').type('1234567')
    cy.contains('Login').click()
    cy.contains('Password or username is incorrect')
  })
})
describe('when user is logged', () => {
  beforeEach(() => {
    cy.request('POST', 'http://localhost:3001/api/test')
    const testUser = {
      username: 'tester',
      name: 'master',
      password: '123456'
    }
    cy.request('POST', 'http://localhost:3001/api/users', testUser)
    cy.login({ username: 'tester', password: '123456' })
    cy.visit('http://127.0.0.1:5173')
  })

  it('user can write a note', () => {
    cy.contains('Write a note').click()
    cy.get('[placeholder="Here goes your title"]').type('Test')
    cy.get('[placeholder="Here goes your content"]').type('This is a test note')
    cy.contains('Add').click()
    cy.contains('Test')
    cy.contains('This is a test note')
  })

  it('user can logout', () => {
    cy.contains('Logout').click()
    cy.contains('Show login').click()
    cy.get('[placeholder=Username]')
  })
})
describe.only('When there is some notes', () => {
  beforeEach(() => {
    cy.request('POST', 'http://localhost:3001/api/test')
    const testUser = {
      username: 'tester',
      name: 'master',
      password: '123456'
    }
    const testNote = {
      title: 'Test',
      content: 'This is a test note',
      important: false
    }
    cy.request('POST', 'http://localhost:3001/api/users', testUser)
    cy.login({ username: 'tester', password: '123456' })
    cy.visit('http://127.0.0.1:5173')
    cy.createNote(testNote)
  })

  it('User can mark or unmark important notes', () => {
    cy.contains('Make important').as('theNote').first().click()
    cy.get('@theNote').should('contain', 'Make non important').click()
    cy.get('@theNote').should('contain', 'Make important')
  })
})
