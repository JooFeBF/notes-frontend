const ENDPOINT = 'http://localhost:3001/api/notes'

const getNotes = () => {
  return fetch(ENDPOINT)
    .then(response => response.json())
}

export default getNotes
