import { useState } from 'react'
import logo from './tic-tac-toe.png'
import './App.css'
import {Board} from './components/Board/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>TIC TAC TOE</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <Board/>
      </header>
    </div>
  )
}

export default App
