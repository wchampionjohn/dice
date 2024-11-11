import { createSlice } from '@reduxjs/toolkit'

const initGameResult = {
  dices: [],
  bs: '',
  number: 0,
  betAmount: 0,
  profit: 0,
  won_items: [],
}

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    gameState: 'betting',
    gameResult: initGameResult,
    nonTripleRounds: 0,
    records: [],
    minBetAmount: 0,
  },
  reducers: {
    roll(state, action) {
      state.gameState = 'rolled'
      state.gameResult = action.payload
    },
    nextRound(state) {
      state.gameState = 'betting'
      state.betAmount = 0

      if (state.gameResult.bs !== '-') {
        state.nonTripleRounds += 1
      } else {
        state.nonTripleRounds = 0
      }

      state.records = [state.gameResult].concat(state.records).slice(0, 5)
      state.gameResult = initGameResult
    },
  },
})

export const gameActions = gameSlice.actions
export const isGameRolled = (state) => state.game.gameState === 'rolled'
export const isItemWon = (state, code) => {
  return state.game.gameResult.won_items.map((item) => item.code).includes(code)
}
export default gameSlice
