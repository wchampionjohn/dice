import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import Dice from '../Dice'
import { bsToText, bsToClassName } from '../../lib/utils/gameHelper'
import { randomString } from '../../lib/utils/stringHelper'

function DiceGroup({ dices, size }) {
  return (
    <div className='dice-group'>
      {dices.map((dice) => (
        <Dice
          key={`dice-${randomString()}`}
          size={size}
          dot={`${dice}`}
        />
      ))}
    </div>
  )
}

DiceGroup.propTypes = {
  dices: PropTypes.array.isRequired,
  size: PropTypes.string,
}
DiceGroup.defaultProps = {
  size: 'sm',
}

function Record(props) {
  const { bs, number, dices, size } = props
  return (
    <div className={clsx('record', size)}>
      <DiceGroup
        dices={dices}
        size={size}
      />
      <div className='number'>
        <span className='small'>{number}</span>
      </div>
      <div className='big-small'>
        <span className={bsToClassName(bs)}>{bsToText(bs)}</span>
      </div>
    </div>
  )
}

Record.propTypes = {
  bs: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  dices: PropTypes.array.isRequired,
  size: PropTypes.string,
}

Record.defaultProps = {
  size: 'sm',
}

export default Record
