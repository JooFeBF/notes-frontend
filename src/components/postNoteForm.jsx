import React, { useState, useContext, useRef } from 'react'
import notesService from '../services/notesService'
import Context from '../context/noteContext'
import Toggleable from './toggleable'

const PostNote = () => {
  const { setNotes } = useContext(Context)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const toggleRef = useRef()
  const handleChangeTitle = event => {
    setTitle(event.target.value)
  }

  const handleChangeContent = event => {
    setContent(event.target.value)
  }
  const handleSubmit = event => {
    event.preventDefault()
    if (JSON.parse(window.localStorage.getItem('userInfo'))?.token) {
      const token = JSON.parse(window.localStorage.getItem('userInfo'))?.token
      notesService.postNote(title, content, null, token)
        .then(note => { if (note) setNotes(prevNotes => [...prevNotes, note]) })
        .catch(error => console.log(error))
      setTitle('')
      setContent('')
      toggleRef.current.handleToggleVisibility()
    }
  }

  return (
    <Toggleable buttonLabel={'Write a note'} ref={toggleRef}>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' value={title} onChange={handleChangeTitle} placeholder='Here goes your title' />
          <input type='text' value={content} onChange={handleChangeContent} placeholder='Here goes your content' />
          <button type='submit'>Add</button>
        </form>
      </div>
    </Toggleable>
  )
}

export default PostNote
