import "./App.css";
import { Board } from "./components/Board/Board";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>TIC TAC TOE</p>

        <Board />
      </header>
    </div>
  );
}

export default App;
