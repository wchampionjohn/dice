import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { randomString } from '../../../lib/utils/stringHelper'

function DoubleTripleContainer(props) {
  const { txt, isWrapDiceGroup } = props
  const classes = clsx('txt', { lost: props.isLost })

  return (
    <div className={props.className}>
      <div className={classes}>
        {typeof txt === 'string' ? (
          <p>{txt}</p>
        ) : (
          txt.map((item) => <p key={randomString()}>{item}</p>)
        )}
      </div>
      {isWrapDiceGroup ? (
        <div className={clsx('dice-group')}>{props.children}</div>
      ) : (
        props.children
      )}
    </div>
  )
}

DoubleTripleContainer.propTypes = {
  txt: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  className: PropTypes.string,
  isWrapDiceGroup: PropTypes.bool,
  children: PropTypes.node.isRequired,
  isLost: PropTypes.bool,
}

DoubleTripleContainer.defaultProps = {
  className: '',
  txt: undefined,
  isLost: false,
  isWrapDiceGroup: true,
}

export default DoubleTripleContainer
