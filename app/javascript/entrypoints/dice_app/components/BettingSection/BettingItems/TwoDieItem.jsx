import React from 'react'
import PropTypes from 'prop-types'
import Dice from '../../Dice'
import BetChip from '../../BetChips'
import BettingItem from './BettingItem'

function TwoDieItem(props) {
  const { betAmount, number1, number2, code } = props

  return (
    <BettingItem
      code={code}
      className='item big-small'
    >
      <Dice
        size='lg'
        dot={number1}
      />
      <p>{`${number1} & ${number2}`}</p>
      <Dice
        size='lg'
        dot={number2}
      />
      {betAmount > 0 && <BetChip amount={betAmount} />}
    </BettingItem>
  )
}

TwoDieItem.propTypes = {
  number1: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']).isRequired,
  number2: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']).isRequired,
  code: PropTypes.string.isRequired,
  betAmount: PropTypes.number,
}

TwoDieItem.defaultProps = {
  betAmount: 0,
}

export default TwoDieItem
