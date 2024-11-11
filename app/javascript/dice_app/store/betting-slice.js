import { createSlice } from '@reduxjs/toolkit'

const bettingSlice = createSlice({
  name: 'betting',
  initialState: {
    selectedItem: '',
    betAmount: 0,
    betChipToItem: {},
    selectedChip: '',
  },
  reducers: {
    bet(state, action) {
      const itemCode = state.selectedItem
      const amount = parseInt(action.payload.amount, 10)

      state.betChipToItem[itemCode] = (state.betChipToItem[itemCode] || 0) + amount
      state.betAmount += amount
    },
    clear(state) {
      const amount = state.betChipToItem[state.selectedItem] || 0
      state.betAmount -= amount
      state.betChipToItem = {
        ...state.betChipToItem,
        [state.selectedItem]: 0,
      }
    },
    selectItem(state, action) {
      state.selectedItem = action.payload
    },
    selectChip(state, action) {
      state.selectedChip = action.payload
    },
    clearAllBet(state) {
      state.betAmount = 0
      state.betChipToItem = {}
    },
  },
})

export const bettingActions = bettingSlice.actions

export default bettingSlice
