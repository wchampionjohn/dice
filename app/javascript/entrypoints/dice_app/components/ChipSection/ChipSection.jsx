import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { bettingActions } from '../../store/betting-slice'
import Chip from '../Chip'
import BtnGroup from './BtnGroup'
import { CHIP_VALUES, toChips } from '../../lib/utils/numberHelper'
import { showNotification } from '../../lib/utils/notification'
import { newGame, useCreateGame } from '../../store/game-actions'
import { isGameRolled } from '../../store/game-slice'
import MessageBox from '../MessageBox'
import GameResult from '../GameResult'

function ChipSection(props) {
  const dispatch = useDispatch()
  const { minBetAmount } = useSelector((state) => state.game)
  const { selectedChip, selectedItem, betAmount } = useSelector(
    (state) => state.betting
  )
  const isBetDisabled = useSelector(isGameRolled)

  const [balance, setBalance] = useState(props.balance)
  const [chips, setChips] = useState(
    CHIP_VALUES.reduce((accumulator, value) => {
      accumulator[value] = 0
      return accumulator
    }, {})
  )
  const createGame = useCreateGame()

  useEffect(() => {
    setBalance(() => {
      const newBalance = props.balance - betAmount

      const newChips = toChips(newBalance)
      setChips(newChips)

      return newBalance
    })
  }, [betAmount])

  const onBet = (value) => {
    if (!value) {
      showNotification({
        type: 'warning',
        message: '請先選擇押注籌碼',
      })
      return
    }
    if (!selectedItem) {
      showNotification({
        type: 'warning',
        message: '請先選擇押注項目',
      })
      return
    }
    const payload = { amount: parseInt(value, 10) }
    dispatch(bettingActions.bet(payload))
  }

  const handleClickChip = (value) => {
    if (isBetDisabled) return

    if (!chips[value] || chips[value] <= 0) {
      showNotification({
        type: 'warning',
        message: '籌碼不足或為選擇籌碼，請選擇其他籌碼',
      })
      return
    }

    if (selectedItem) {
      if (value === selectedChip || selectedChip === '') {
        onBet(value)
      }
    }

    const newSelectedChip =
      selectedChip === value && selectedItem === '' ? '' : value

    dispatch(bettingActions.selectChip(newSelectedChip))
  }

  useEffect(() => {
    if (!chips[selectedChip] || chips[selectedChip] <= 0) {
      dispatch(bettingActions.selectChip(''))
    }
  }, [chips])

  const onClearSingleBet = () => {
    if (!selectedItem || selectedItem === '') {
      showNotification({
        type: 'warning',
        message: '未選擇押注項目或籌碼',
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
        type: 'warning',
        message: `最低押注金額為 ${minBetAmount}，請重新押注`,
      })
      return
    }

    const gameResult = await createGame()
    await dispatch(bettingActions.selectItem(''))
    await dispatch(bettingActions.selectChip(''))

    await MessageBox({
      message: (
        <GameResult
          size='lg'
          {...gameResult}
        />
      ),
    })
  }

  const onNewGame = () => {
    dispatch(bettingActions.clearAllBet())
    dispatch(newGame())
    onClearAllBet()
  }

  const getChipAttributes = (value) => {
    return {
      value: value.toString(),
      amount: chips[value],
      handleChipSelect: () => handleClickChip(value),
      selected: selectedChip === value,
    }
  }

  return (
    <div className='chip-section'>
      <div className='chip-group'>
        <Chip {...getChipAttributes(1)} />
        <Chip {...getChipAttributes(5)} />
        <Chip {...getChipAttributes(10)} />
        <Chip {...getChipAttributes(100)} />
        <Chip {...getChipAttributes(500)} />
        <div className='remaining-balance'>
          <h3>剩餘籌碼</h3>
          <p>{balance}</p>
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
    </div>
  )
}

ChipSection.propTypes = {
  balance: PropTypes.number,
}

ChipSection.defaultProps = {
  balance: 0,
}

export default ChipSection
