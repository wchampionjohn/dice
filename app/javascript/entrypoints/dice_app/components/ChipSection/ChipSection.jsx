import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {bettingActions} from '../../store/betting-slice'
import {userActions} from '../../store/user-slice'
import {historyActions} from '../../store/history-slice'
import Chip from '../Chip'
import BtnGroup from './BtnGroup'
import {CHIP_VALUES, toChips} from '../../lib/utils/numberHelper'
import {showNotification} from '../../lib/utils/notification'
import {newGame, useCreateGame} from '../../store/game-actions'
import {isGameRolled} from '../../store/game-slice'
import MessageBox from '../MessageBox'
import GameResult from '../GameResult'

function ChipSection() {
  const dispatch = useDispatch()
  const {minBetAmount, gameResult} = useSelector((state) => state.game)
  const createGame = useCreateGame()
  const {selectedChip, selectedItem, betAmount, betChipToItem} = useSelector((state) => state.betting)
  const isBetDisabled = useSelector(isGameRolled)
  const balance = useSelector((state) => state.user.balance)
  const [chips, setChips] = useState(CHIP_VALUES.reduce((accumulator, value) => {
    accumulator[value] = 0
    return accumulator
  }, {}))

  const [isSettled, setIsSettled] = useState(false)

  useEffect(() => {
    const newChips = toChips(balance - betAmount)
    setChips(newChips)
  }, [betAmount])

  const onBet = (value) => {
    if (!value) {
      showNotification({
        type: 'warning', message: '請先選擇押注籌碼',
      })
      return
    }
    if (!selectedItem) {
      showNotification({
        type: 'warning', message: '請先選擇押注項目',
      })
      return
    }
    const payload = {amount: parseInt(value, 10)}
    dispatch(bettingActions.bet(payload))
  }


  const handleClickChip = (value) => {
    if (isBetDisabled) return

    if (remainingBalance() < value) {
      showNotification({
        type: 'warning', message: '籌碼不足，請選擇其他籌碼',
      })
      return
    }

    if (selectedItem) {
      if (value === selectedChip || selectedChip === '') {
        onBet(value)
      }
    }

    const newSelectedChip = selectedChip === value && selectedItem === '' ? '' : value

    dispatch(bettingActions.selectChip(newSelectedChip))
  }

  useEffect(() => {
    if (selectedChip > remainingBalance()) {
      dispatch(bettingActions.selectChip(''))
    }
  }, [chips])

  const onClearSingleBet = () => {
    if (!selectedItem || selectedItem === '') {
      showNotification({
        type: 'warning', message: '未選擇押注項目或籌碼',
      })
      return
    }
    dispatch(bettingActions.clear())
    dispatch(bettingActions.selectItem(''))
  }

  const onClearAllBet = () => {
    dispatch(bettingActions.selectItem(''))
    dispatch(bettingActions.selectChip(''))
    dispatch(bettingActions.clearAllBet())
  }

  const onRoll = async () => {
    if (betAmount < minBetAmount) {
      showNotification({
        type: 'warning', message: `最低押注金額為 ${minBetAmount}，請重新押注`,
      })
      return
    }

    const placedItems = Object.keys(betChipToItem).map((code) => {
      return {
        bet_amount: betChipToItem[code], bet_item_code: code
      }
    })

    await dispatch(bettingActions.selectItem(''))
    await dispatch(bettingActions.selectChip(''))
    const result = await createGame(placedItems)

    await MessageBox({
      message: (<GameResult
        size='lg'
        {...result.game}
      />),
    })

    await dispatch(userActions.newBalance(result.balance))
    setIsSettled(true)
    setChips(toChips(result.balance))
  }

  const onNewGame = async () => {
    setIsSettled(false)
    await dispatch(bettingActions.resetBetAmount())
    await dispatch(historyActions.addRecord({
      bs: gameResult.bs, number: gameResult.number, dices: gameResult.dices,
    }))
    await dispatch(newGame())
    onClearAllBet()
  }

  const getChipAttributes = (value) => {
    return {
      value: value.toString(),
      amount: chips[value],
      handleChipSelect: () => handleClickChip(value),
      selected: selectedChip === value,
      remainingBalance: remainingBalance(),
    }
  }

  const remainingBalance = () => {
    return balance - betAmount
  }

  const showingBalance = () => {
    if (isSettled) {
      return balance
    }
    return remainingBalance()
  }

  return (<div className='chip-section'>
    <div className='chip-group'>
      <Chip {...getChipAttributes(1)} />
      <Chip {...getChipAttributes(5)} />
      <Chip {...getChipAttributes(10)} />
      <Chip {...getChipAttributes(100)} />
      <Chip {...getChipAttributes(500)} />
      <div className='remaining-balance'>
        <h3>剩餘籌碼</h3>
        <p>{showingBalance()}</p>
      </div>
    </div>
    <BtnGroup
      selectedChip={selectedChip}
      onBet={() => onBet(selectedChip)}
      onClearSingleBet={onClearSingleBet}
      onClearAllBet={onClearAllBet}
      onRoll={onRoll}
      onNewGame={onNewGame}
    />
  </div>)
}

export default ChipSection
