import { createContext, useState } from 'react'

const Context = createContext({})

export const NoteContext = ({ children }) => {
  const [notes, setNotes] = useState([])
  return (
    <Context.Provider value={{ notes, setNotes }}>
      {children}
    </Context.Provider>
  )
}

export default Context
