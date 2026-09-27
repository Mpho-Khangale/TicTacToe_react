import{ useState } from 'react'
import './App.css'
import Board from './components/Board'
import GameStatus from './components/GameStatus'
import { calculateWinner } from './utility/calculateWinner'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const[currentPlayer, setCurrentPlayer] = useState('X')

  const winner = calculateWinner(board)
  const isDraw = !winner && board.every((square) => square !== null)

  function handleSquareClick(index) {
    if (board[index] || winner) {
      return
    }
    
    const newBoard = [...board]
    newBoard[index] = currentPlayer
    setBoard(newBoard)
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
  }

  return (
    <main className="game">
      <h1>Tic Tac Toe</h1>
      <GameStatus winner={winner} isDraw={isDraw} currentPlayer={currentPlayer} />
      <Board board={board} onSquareClick={handleSquareClick} />
    </main>
  )
}

export default App
