import React, { useState, useContext, useRef } from 'react'
import postNote from '../services/setNote'
import Context from '../context/noteContext'
import Toggleable from './toggable'

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
      postNote(title, content, null, token).then(note => { if (note) setNotes(prevNotes => [...prevNotes, note]) }).catch(error => console.log(error))
      setTitle('')
      setContent('')
      toggleRef.current.handleToggleVisibility()
    }
  }

  return (
    <Toggleable buttonLabel={'Write a note'} ref={toggleRef}>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' value={title} onChange={handleChangeTitle} placeholder='here goes your title' />
          <input type='text' value={content} onChange={handleChangeContent} placeholder='here goes your content' />
          <button type='submit'>Add</button>
        </form>
      </div>
    </Toggleable>
  )
}

export default PostNote
