import React from 'react'
import PropTypes from 'prop-types'
import Dice from '../../../Dice'
import BettingItem from '../BettingItem'
import BetChip from '../../../BetChips'

function TripleTwo(props) {
  const { code, betAmount } = props

  return (
    <BettingItem
      code={code}
      className='dice-group'
    >
      <div className='dice-item'>
        <Dice
          size='sm'
          dot='1'
        />
        <Dice
          size='sm'
          dot='1'
        />
        <Dice
          size='sm'
          dot='1'
        />
      </div>
      <div className='dice-item'>
        <Dice
          size='sm'
          dot='2'
        />
        <Dice
          size='sm'
          dot='2'
        />
        <Dice
          size='sm'
          dot='2'
        />
      </div>
      <div className='dice-item'>
        <Dice
          size='sm'
          dot='3'
        />
        <Dice
          size='sm'
          dot='3'
        />
        <Dice
          size='sm'
          dot='3'
        />
      </div>
      <div className='dice-item'>
        <Dice
          size='sm'
          dot='4'
        />
        <Dice
          size='sm'
          dot='4'
        />
        <Dice
          size='sm'
          dot='4'
        />
      </div>
      <div className='dice-item'>
        <Dice
          size='sm'
          dot='5'
        />
        <Dice
          size='sm'
          dot='5'
        />
        <Dice
          size='sm'
          dot='5'
        />
      </div>
      <div className='dice-item'>
        <Dice
          size='sm'
          dot='6'
        />
        <Dice
          size='sm'
          dot='6'
        />
        <Dice
          size='sm'
          dot='6'
        />
      </div>
      {betAmount > 0 && <BetChip amount={betAmount} />}
    </BettingItem>
  )
}

TripleTwo.propTypes = {
  code: PropTypes.string.isRequired,
  betAmount: PropTypes.number,
}

TripleTwo.defaultProps = {
  betAmount: 0,
}

export default TripleTwo
