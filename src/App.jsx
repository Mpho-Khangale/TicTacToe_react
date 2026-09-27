import{ useReducer  } from 'react'
import './App.css'
import Board from './components/Board'
import GameStatus from './components/GameStatus'
import { gameReducer, initialState } from './reducer/gameReducer'

function App() {
  const [state, dispatch] = useReducer(gameReducer, initialState)

  function handleSquareClick(index) {
    dispatch({ type: 'MAKE_MOVE', payload: index })
  }

  return (
    <main className="game">
      <h1>Tic Tac Toe</h1>
      <GameStatus winner={state.winner} isDraw={state.isDraw} currentPlayer={state.currentPlayer} />
      <Board board={state.board} onSquareClick={handleSquareClick} />
      <button className="reset-button" onClick={() => dispatch({ type: 'RESET_GAME' })}>
        Reset Game
      </button>
    </main>
  )
}

export default App
