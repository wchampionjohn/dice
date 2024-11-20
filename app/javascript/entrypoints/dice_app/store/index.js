import { configureStore } from '@reduxjs/toolkit'

import logger from 'redux-logger'
import bettingSlice from './betting-slice'
import gameSlice from './game-slice'
import historySlice from './history-slice'

const store = configureStore({
  reducer: { betting: bettingSlice.reducer, game: gameSlice.reducer, history: historySlice.reducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store
