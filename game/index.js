import {Map} from 'immutable'


  const board = Map()

  const MOVE = 'MOVE'

export const move = (player, coord) => ({
  type: MOVE,
  player,
  coord
})

export default function reducer(state = { board, turn: 'X' }, action) {
  switch (action.type) {
    case MOVE:
      if (state.turn === 'X') { 
        return { board: state.board.setIn(action.coord, state.turn), turn: 'O'}
      } else {
        return { board: state.board.setIn(action.coord, state.turn), turn: 'X'}
      }
    default:
      return state
  }
}

export const winner = (board) => {

}