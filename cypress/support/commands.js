Cypress.Commands.add('login', ({ username, password }) => {
  cy.request('POST', 'http://localhost:3001/api/login', { username, password })
    .then(res => window.localStorage.setItem('userInfo', JSON.stringify(res.body)))
})

Cypress.Commands.add('createNote', ({ title, content, important }) => {
  cy.request({
    url: 'http://localhost:3001/api/notes',
    method: 'POST',
    body: JSON.stringify({ title, content, important }),
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${JSON.parse(window.localStorage.getItem('userInfo')).token}`
    }
  })
})
