import React from 'react'
import PropTypes from 'prop-types'

import BetChip from '../../BetChips'
import BettingItem from './BettingItem'

function Number(props) {
  const { number, wins, code } = props

  return (
    <BettingItem
      code={code}
      className='item big-small'
    >
      <p className='number'>{number}</p>
      <p>{`1 wins ${wins}`}</p>
      {props.betAmount > 0 && <BetChip amount={props.betAmount} />}
    </BettingItem>
  )
}

Number.propTypes = {
  number: PropTypes.number.isRequired,
  wins: PropTypes.number.isRequired,
  code: PropTypes.string.isRequired,
  betAmount: PropTypes.number,
}

Number.defaultProps = {
  betAmount: 0,
}

export default Number
