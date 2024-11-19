import React from 'react'
import PropTypes from 'prop-types'
import { numberToWord } from '../../lib/utils/stringHelper'

function Dice(props) {
  const dot = numberToWord(props.dot)

  return (
    <div
      className={`dice-box ${props.size}`}
      {...props}
    >
      <div className={`dice-face ${dot}`} />
    </div>
  )
}

Dice.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']).isRequired,
  dot: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']).isRequired,
}

Dice.defaultProps = {}

export default Dice
