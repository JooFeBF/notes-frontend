import { useState } from 'react'
import login from '../services/login'
import Toggleable from './toggleable'

const LoginForm = ({ setUser }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleUsernameChange = (e) => {
    e.preventDefault()
    setUsername(e.target.value)
  }
  const handlePasswordChange = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newUser = {
      username,
      password
    }

    if (newUser.username && newUser.password) {
      login(newUser).then(userData => {
        if (userData?.error) return setError(true)
        setUser(userData)
        window.localStorage.setItem('userInfo', JSON.stringify(userData))
        console.log(JSON.parse(window.localStorage.getItem('userInfo')))
      }).catch((e) => console.log(e))
    }
  }

  return (
    <Toggleable buttonLabel={'Show login'}>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleUsernameChange} value={username} placeholder={'Username'}/>
        <input type="password" onChange={handlePasswordChange} value={password} placeholder={'Password'}/>
        <button>
          Login
        </button>
        {
          error ? <p style={{ color: 'red' }}>Password or username is incorrect</p> : null
        }
      </form>
    </Toggleable>
  )
}

export default LoginForm
