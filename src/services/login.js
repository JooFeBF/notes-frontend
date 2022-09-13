const ENDPOINT = 'http://localhost:3001/api/login'

const login = ({ username, password }) => {
  console.log(username, password)
  return fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
    .then(response => response.json())
}

export default login
