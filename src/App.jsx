import{ useReducer  } from 'react'
import './App.css'
import Board from './components/Board'
import GameStatus from './components/GameStatus'
import { gameReducer, initialState } from './reducer/gameReducer'
import MoveHistory from './components/MoveHistory'

function App() {
  const [state, dispatch] = useReducer(gameReducer, initialState)

  function handleSquareClick(index) {
    dispatch({ type: 'MAKE_MOVE', payload: index })
  }

  function handleJump(moveIndex) {
  dispatch({
    type: 'JUMP_TO',
    payload: moveIndex,
  })
}

  return (
    <main className="game">
      <h1>Tic Tac Toe</h1>
      <GameStatus winner={state.winner} isDraw={state.isDraw} currentPlayer={state.currentPlayer} />
      <Board board={state.board} onSquareClick={handleSquareClick} />
      <MoveHistory history={state.history} onJump={handleJump} />
      <button className="reset-button" onClick={() => dispatch({ type: 'RESET_GAME' })}>
        Reset Game
      </button>
    </main>
  )
}

export default App
