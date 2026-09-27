import {calculateWinner} from '../utility/calculateWinner'

export const initialState = {
  board: Array(9).fill(null),
  currentPlayer: 'X',
  winner: null,
  isDraw: false,
  history: [Array(9).fill(null)],
}

export function gameReducer(state, action) {
    switch (action.type) {
        case 'MAKE_MOVE': {
            const index = action.payload
            if (state.board[index] || state.winner|| state.isDraw) {
                return state
            }

            const newBoard = [...state.board]
            newBoard[index] = state.currentPlayer
            const winner = calculateWinner(newBoard)
            const isDraw = !winner && newBoard.every((square) => square !== null)
            
            return {
                ...state,
                board: newBoard,
                currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
                winner,
                isDraw,
                history: [...state.history, newBoard],
            }
        }

        case 'RESET_GAME': {
            return initialState
        }

        default:
            return state
    }
}