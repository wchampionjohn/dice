/* eslint-disable camelcase */

import {combineReducers} from 'redux'
import bettingSlice from '../store/betting-slice';
import gameSlice from '../store/game-slice';
import userSlice from '../store/user-slice';
import historySlice from '../store/history-slice';


const reducer = combineReducers({
  info: (state = {}) => state, // data from init state
  betting: bettingSlice.reducer, game: gameSlice.reducer, user: userSlice.reducer, history: historySlice.reducer
})

export default reducer
