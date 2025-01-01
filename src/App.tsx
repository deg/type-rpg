import { useState } from 'react'
import './App.css'
import CharacterCreator from './components/CharacterCreator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CharacterCreator />
    </div>

  )
}

export default App
