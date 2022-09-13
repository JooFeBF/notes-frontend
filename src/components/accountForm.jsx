import { useState } from 'react'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [user, setUser] = useState({})

  const handleUsernameChange = (e) => {
    e.preventDefault()
    setUsername(e.target.value)
  }
  const handlePasswordChange = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
  }
  const handleNameChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newUser = {
      username,
      name,
      password
    }
    setUser(newUser)
    console.log(user)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleUsernameChange} value={username} placeholder={'Username'}/>
      <input type="text" onChange={handleNameChange} value={name} placeholder={'Name'}/>
      <input type="password" onChange={handlePasswordChange} value={password} placeholder={'Password'}/>
      <button>
        Create account
      </button>
    </form>
  )
}

export default LoginForm
