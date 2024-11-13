import React from 'react'
import PropTypes from 'prop-types'
import { toChips, COLOR_MAPPING } from '../../lib/utils/numberHelper'

function BetChip(props) {
  const { amount } = props

  const chips = toChips(amount)
  const sortedChipsArray = Object.entries(chips).reverse()

  let bottomPosition = 0

  return (
    <div className='bet-chip'>
      <div className='bet-chip-container'>
        <div className='chip-group'>
          {sortedChipsArray.map((chip) => {
            // eslint-disable-next-line no-shadow
            const [value, amount] = chip
            const elements = []

            for (let i = 0; i < amount && i <= 3; i += 1) {
              bottomPosition += 5
              elements.push(
                <div
                  key={`bet-chip-${value}-${i}`}
                  className={`chips ${COLOR_MAPPING[value]}`}
                  style={{ bottom: `${bottomPosition}px` }}
                >
                  {value}
                </div>,
              )
            }
            return elements
          })}
        </div>

        <div className='balance'>{amount}</div>
      </div>
    </div>
  )
}

BetChip.propTypes = { amount: PropTypes.number.isRequired }

BetChip.defaultProps = {}

export default BetChip
