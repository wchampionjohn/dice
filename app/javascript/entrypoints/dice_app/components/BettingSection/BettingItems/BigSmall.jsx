import React from 'react'
import PropTypes from 'prop-types'
import BetChip from '../../BetChips'
import BettingItem from './BettingItem'

const mapping = {
  big: {
    title: 'BIG',
    numberFrom: 10,
    numberTo: 17,
  },
  small: {
    title: 'SMALL',
    numberFrom: 4,
    numberTo: 9,
  },
}

function BigSmall(props) {
  const { betAmount, bs, code } = props
  const { title, numberFrom, numberTo } = mapping[bs]

  return (
    <BettingItem
      code={code}
      className='item big-small'
    >
      <h1>{title}</h1>
      <h2>ARE NUMBERS</h2>
      <h3>
        <strong>{`${numberFrom} `}</strong>
        to
        <strong>{` ${numberTo}`}</strong>
      </h3>
      <h3>
        <strong>1 wins 1</strong>
      </h3>
      <h4>LOSE IF ANY</h4>
      <h4>TRIPLE APEARS</h4>
      {betAmount > 0 && <BetChip amount={betAmount} />}
    </BettingItem>
  )
}

BigSmall.propTypes = {
  bs: PropTypes.oneOf(['big', 'small']).isRequired,
  betAmount: PropTypes.number,
  code: PropTypes.string.isRequired,
}

BigSmall.defaultProps = {
  betAmount: 0,
}

export default BigSmall
