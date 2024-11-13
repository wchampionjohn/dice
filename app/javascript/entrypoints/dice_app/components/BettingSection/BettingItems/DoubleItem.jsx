import React from 'react'
import PropTypes from 'prop-types'
import Dice from '../../Dice'
import BetChip from '../../BetChips'
import BettingItem from './BettingItem'

function DoubleItem(props) {
  const { number, code } = props
  return (
    <BettingItem
      code={code}
      className='dice-item'
    >
      <Dice
        size='lg'
        dot={number}
      />
      <Dice
        size='lg'
        dot={number}
      />
      {props.betAmount > 0 && <BetChip amount={props.betAmount} />}
    </BettingItem>
  )
}

DoubleItem.propTypes = {
  number: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']).isRequired,
  betAmount: PropTypes.number,
  code: PropTypes.string.isRequired,
}

DoubleItem.defaultProps = {
  betAmount: 0,
}

export default DoubleItem
