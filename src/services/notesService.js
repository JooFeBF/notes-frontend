const ENDPOINT = 'http://localhost:3001/api/notes'

const postNote = (title, content, important = null, token) => {
  return fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      title,
      content,
      important
    })
  })
    .then(response => response.json())
}

const getNotes = () => {
  return fetch(ENDPOINT)
    .then(response => response.json())
}

const updateNote = (title, content, important, id) => {
  return fetch(ENDPOINT.concat(`/${id}`), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title,
      content,
      important
    })
  })
    .then(response => response.json())
}

export default { postNote, updateNote, getNotes }
