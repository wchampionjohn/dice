import React from 'react'
import PropTypes from 'prop-types'
import Dice from '../../../Dice'
import BetChips from '../../../BetChips'
import BettingItem from '../BettingItem'

function TripleItem(props) {
  const { number, code } = props
  return (
    <BettingItem
      code={code}
      className='dice-item'
    >
      <Dice
        size='md'
        dot={number}
      />
      <Dice
        size='md'
        dot={number}
      />
      <Dice
        size='md'
        dot={number}
      />
      {props.betAmount > 0 && <BetChips amount={props.betAmount} />}
    </BettingItem>
  )
}

TripleItem.propTypes = {
  number: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']).isRequired,
  betAmount: PropTypes.number,
  code: PropTypes.string.isRequired,
}

TripleItem.defaultProps = {
  betAmount: 0,
}

export default TripleItem
