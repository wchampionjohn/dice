import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import Record from '../Record'

function GameResult(props) {
  const {
 time, dices, number, bs, bet_amount, profit, size,
} = props

  return (
    <div className='game-result-item'>
      <div className={clsx('game-result-content', size)}>
        <Record
          bs={bs}
          number={number}
          dices={dices}
          size={size}
        />
        <p>押注：{bet_amount}</p>
        <p>獲利：{profit}</p>
        {time && <p className='time'>{time}</p>}
      </div>
    </div>
  )
}

GameResult.propTypes = {
  time: PropTypes.string,
  profit: PropTypes.number.isRequired,
  bs: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  dices: PropTypes.array.isRequired,
  bet_amount: PropTypes.number.isRequired,
  size: PropTypes.string,
}

GameResult.defaultProps = {
  time: undefined,
  size: '',
}

export default GameResult
