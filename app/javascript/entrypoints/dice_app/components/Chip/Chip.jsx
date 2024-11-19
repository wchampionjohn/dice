import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { isGameRolled } from '../../store/game-slice'

import { COLOR_MAPPING } from '../../lib/utils/numberHelper'

function Chip(props) {
  const isBetDisabled = useSelector(isGameRolled)
  const { selected, value, amount, handleChipSelect, remainingBalance } = props

  return (
    <div
      className={clsx('chip', COLOR_MAPPING[value], {
        selected,
        disabled: (remainingBalance < value) || isBetDisabled,
      })}
      onClick={handleChipSelect}
    >
      {value}
      <span className='current-amount'>{amount}</span>
    </div>
  )
}

Chip.propTypes = {
  value: PropTypes.oneOf(Object.keys(COLOR_MAPPING)).isRequired,
  amount: PropTypes.number,
  handleChipSelect: PropTypes.func,
  selected: PropTypes.bool,
  remainingBalance: PropTypes.number,
}

Chip.defaultProps = {
  amount: 0,
  handleChipSelect: () => {},
  selected: false,
  remainingBalance: 0,
}

export default Chip
