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

export default postNote
