import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import { isGameRolled } from '../../store/game-slice'

function BtnGroup(props) {
  const isBetDisabled = useSelector(isGameRolled)
  const {
 onBet, onClearSingleBet, onClearAllBet, onNewGame, onRoll, 
} = props
  return (
    <div className='btn-group'>
      <button
        type='button'
        className={clsx('btn', 'clear', { disabled: isBetDisabled })}
        onClick={onClearSingleBet}
      >
        <p>清除</p>
        <p>單一押注</p>
      </button>
      <button
        type='button'
        className={clsx('btn', 'clear', { disabled: isBetDisabled })}
        onClick={onClearAllBet}
      >
        <p>清除</p>
        <p>全部押注</p>
      </button>
      <button
        type='button'
        className={clsx('btn', 'repeat', { disabled: isBetDisabled })}
        onClick={onBet}
      >
        <p>押注</p>
      </button>
      {isBetDisabled ? (
        <button
          type='button'
          className='btn submit'
          onClick={onNewGame}
        >
          <p>下一局</p>
        </button>
      ) : (
        <button
          type='button'
          className='btn submit'
          onClick={onRoll}
        >
          <p>開骰</p>
        </button>
      )}
    </div>
  )
}

BtnGroup.propTypes = {
  onBet: PropTypes.func.isRequired,
  onClearSingleBet: PropTypes.func.isRequired,
  onClearAllBet: PropTypes.func.isRequired,
  onRoll: PropTypes.func.isRequired,
  onNewGame: PropTypes.func.isRequired,
}

BtnGroup.defaultProps = {}

export default BtnGroup
