import { createSlice } from '@reduxjs/toolkit'

const initGameResult = {
  dices: [],
  bs: '',
  number: 0,
  betAmount: 0,
  profit: 0,
  wonItems: [],
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
    create(state, action) {
      state.gameState = 'rolled'
      state.gameResult = {
        dices: action.payload.game.dices,
        bs: action.payload.game.bs,
        number: action.payload.game.number,
        betAmount: action.payload.game.bet_amount,
        profit: action.payload.game.profit,
        wonItems: action.payload.won_items,
      }
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
  return state.game.gameResult.wonItems.map((item) => item.code).includes(code)
}
export default gameSlice
