import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    balance: 0,
  },
  reducers: {
    newBalance(state, action) {
      state.balance = action.payload
    },
  },
})

export const userActions = userSlice.actions

export default userSlice
