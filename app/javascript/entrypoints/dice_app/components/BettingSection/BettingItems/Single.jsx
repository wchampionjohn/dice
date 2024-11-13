import React from 'react'
import PropTypes from 'prop-types'
import Dice from '../../Dice'
import { numberToWord } from '../../../lib/utils/stringHelper'
import BetChip from '../../BetChips'
import BettingItem from './BettingItem'

function Single(props) {
  const { number, code } = props
  return (
    <BettingItem
      code={code}
      className='item'
    >
      <div className='txt'>{numberToWord(number)}</div>
      <Dice
        size='xl'
        dot={number}
      />
      {props.betAmount > 0 && <BetChip amount={props.betAmount} />}
    </BettingItem>
  )
}

Single.propTypes = {
  number: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']).isRequired,
  code: PropTypes.string.isRequired,
  betAmount: PropTypes.number,
}

Single.defaultProps = {
  betAmount: 0,
}

export default Single
