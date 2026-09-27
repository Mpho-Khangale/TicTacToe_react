function GameStatus({ winner, isDraw, currentPlayer }) {
  let message

  if (winner) {
    message = `Winner: ${winner}`
  } else if (isDraw) {
    message = 'Draw!'
  } else {
    message = `Next Player: ${currentPlayer}`
  }

  return <h2 className="status">{message}</h2>
}

export default GameStatus