import { useDispatch, useSelector } from 'react-redux'
import { apiCreateGame } from '../api-request/games'
import { gameActions, isItemWon } from './game-slice'

export const useCreateGame = () => {
  const dispatch = useDispatch()

  return async () => {
    const { payload } = await apiCreateGame()
    await dispatch(gameActions.roll(payload))
    return payload
  }
}

export const newGame = () => {
  return async (dispatch) => {
    dispatch(gameActions.nextRound())
  }
}

export const useIsItemWon = (code) => {
  return useSelector((state) => isItemWon(state, code))
}
