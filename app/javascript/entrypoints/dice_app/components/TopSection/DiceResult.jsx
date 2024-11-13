import React from 'react'
import PropTypes from 'prop-types'
import Dice from '../Dice'
import { randomString } from '../../lib/utils/stringHelper'
import { randomInt } from '../../lib/utils/numberHelper'

const positionsSample = [
  [
    {
      top: 30,
      left: 31,
    },
    {
      top: 70,
      left: 20,
    },
    {
      top: 60,
      left: 80,
    },
  ],
  [
    {
      top: 40,
      left: 31,
    },
    {
      top: 85,
      left: 25,
    },
    {
      top: 70,
      left: 80,
    },
  ],
  [
    {
      top: 40,
      left: 77,
    },
    {
      top: 45,
      left: 25,
    },
    {
      top: 80,
      left: 60,
    },
  ],
  [
    {
      top: 30,
      left: 80,
    },
    {
      top: 35,
      left: 15,
    },
    {
      top: 90,
      left: 60,
    },
  ],
]

function DiceResult(props) {
  const { dices } = props
  const positions =
    positionsSample[Math.floor(Math.random() * positionsSample.length)]
  return (
    <div className='dice-result'>
      {dices.map((dice, index) => (
        <Dice
          key={`dice-result -${randomString()}`}
          dot={`${dice}`}
          size='lg'
          style={{
            top: `${positions[index].top + randomInt(5)}px`,
            left: `${positions[index].left + randomInt(5)}px`,
            transform: `rotate(${randomInt(360)}deg)`,
          }}
        />
      ))}
    </div>
  )
}

DiceResult.propTypes = {
  dices: PropTypes.array.isRequired,
}

DiceResult.defaultProps = {}

export default DiceResult
