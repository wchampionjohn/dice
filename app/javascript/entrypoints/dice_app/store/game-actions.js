import {useDispatch, useSelector} from 'react-redux'
import {apiCreateGame} from '../api-request/games'
import {gameActions, isItemWon} from './game-slice'

export const useCreateGame = () => {
  const dispatch = useDispatch()

  return async (placedItems) => {
    const {payload} = await apiCreateGame(placedItems)
    await dispatch(gameActions.create(payload))
    return {
      balance: payload.user.balance,
      game : {
        dices: payload.game.dices,
        bs: payload.game.bs,
        number: payload.game.number,
        bet_amount: payload.game.bet_amount,
        profit: payload.game.profit,
      }
    }
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
