import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { bettingActions } from '../../../store/betting-slice'
import { isGameRolled, isItemWon } from '../../../store/game-slice'

function BettingItem(props) {
  const { className, code } = props
  const isBetDisabled = useSelector(isGameRolled)

  const dispatch = useDispatch()
  const { selectedChip, selectedItem } = useSelector((state) => state.betting)
  const isSelected = () => {
    return selectedItem === code
  }

  const isWon = useSelector((state) => isItemWon(state, code))
  const handleItemClick = () => {
    if (isBetDisabled) return

    const isTriggerBet = selectedChip && (selectedItem === '' || isSelected())
    dispatch(bettingActions.selectItem(code))

    if (selectedChip && isTriggerBet) {
      const payload = { amount: parseInt(selectedChip, 10) }
      dispatch(bettingActions.bet(payload))
    }
  }
  return (
    <div
      onClick={handleItemClick}
      className={clsx('bet-item', className, {
        selected: isSelected(),
        disabled: isBetDisabled,
        won: isBetDisabled && isWon,
        lost: isBetDisabled && !isWon,
      })}
    >
      {props.children}
    </div>
  )
}

BettingItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  code: PropTypes.string.isRequired,
}

BettingItem.defaultProps = {
  className: '',
}

export default BettingItem
