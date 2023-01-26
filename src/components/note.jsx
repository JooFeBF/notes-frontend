import { useState } from 'react'
import notesService from '../services/notesService'
const Note = ({ id, title, content, important }) => {
  const [importance, setImportance] = useState(important)

  const handleClick = (e) => {
    e.preventDefault()
    notesService.updateNote(title, content, !importance, id)
      .then(res => setImportance(res.important))
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={handleClick}>
        {
          importance ? 'Make non important' : 'Make important'
        }
      </button>
    </div>
  )
}

export default Note
