import { useState } from 'react'
import logo from './tic-tac-toe.png'
import './App.css'
import {Board} from './components/Board/Board'

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>TIC TAC TOE</p>
    
        <Board/>
      </header>
    </div>
  )
}

export default App
