import * as types from '../action/types'

const initState = {
}

const store = (state = initState, action) => {
  switch (action.type) {
    case types.UPDATE_STORE: {
      return {
        ...state,
        ...action.store,
      }
    }
    default:
      return state
  }
}

export default store
