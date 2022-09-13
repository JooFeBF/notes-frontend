import Home from './pages/home'
import { NoteContext } from './context/noteContext'
function App () {
  return (
    <div className='App'>
      <NoteContext>
        <Home />
      </NoteContext>
    </div>
  )
}

export default App
