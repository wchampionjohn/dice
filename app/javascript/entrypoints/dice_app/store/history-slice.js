import { createSlice } from '@reduxjs/toolkit'

const historySlice = createSlice({
  name: 'history',
  initialState: {
    records: [],
  },
  reducers: {
    addRecord(state, action) {
      state.records = [action.payload].concat(state.records).slice(0, 5)
    }
  },
})

export const historyActions = historySlice.actions

export default historySlice
