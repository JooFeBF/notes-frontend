import { useEffect, useContext, useState } from 'react'
import '../App.css'
import notesService from '../services/notesService'
import PostNote from '../components/postNoteForm'
import Context from '../context/noteContext'
import LoginForm from '../components/loginForm'
import ListOfNotes from '../components/listOfNotes'

function Home () {
  const { notes, setNotes } = useContext(Context)
  const [user, setUser] = useState({})

  useEffect(() => {
    if (JSON.parse(window.localStorage.getItem('userInfo'))?.token) setUser(JSON.parse(window.localStorage.getItem('userInfo')))
  }, [])

  useEffect(() => {
    notesService.getNotes().then(data => setNotes(data))
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    setUser({})
    window.localStorage.removeItem('userInfo')
  }

  return (
    <div className='App'>
      <h1>Notes</h1>
      {
        user.token ? <> <p>{user.username}</p> <button onClick={handleClick}>Logout</button> <PostNote /> </> : <LoginForm setUser={setUser} />
      }
      <ListOfNotes notes={notes} />
    </div>
  )
}

export default Home
