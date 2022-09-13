import { useEffect, useContext, useState } from 'react'
import '../App.css'
import getNotes from '../services/getNotes'
import AllNotes from '../components/notes'
import PostNote from '../components/postNoteForm'
import Context from '../context/noteContext'
import LoginForm from '../components/loginForm'

function Home () {
  const { notes, setNotes } = useContext(Context)
  const [user, setUser] = useState({})

  useEffect(() => {
    if (JSON.parse(window.localStorage.getItem('userInfo'))?.token) setUser(JSON.parse(window.localStorage.getItem('userInfo')))
  }, [])

  useEffect(() => {
    getNotes().then(data => setNotes(data))
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
      <AllNotes notes={notes} />
    </div>
  )
}

export default Home
