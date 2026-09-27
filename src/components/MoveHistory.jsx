function MoveHistory({ history, onJump }) {
  return (
    <div className="move-history">
      <h2>Move History</h2>

      <div className="history-buttons">
        {history.map((board, index) => (
          <button key={index} onClick={() => onJump(index)}>
            {index === 0 ? 'Go to game start' : `Go to move #${index}`}
          </button>
        ))}
        </div>
    </div>
  )
}
export default MoveHistory