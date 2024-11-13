import React from 'react'
import PropTypes from 'prop-types'

function Double(props) {
  return (
    <div className='item double'>
      <div className='txt'>Each double 1 wins 11</div>
      <div className='dice-group'>{props.children}</div>
    </div>
  )
}

Double.propTypes = {
  children: PropTypes.node.isRequired,
}

Double.defaultProps = {}

export default Double
