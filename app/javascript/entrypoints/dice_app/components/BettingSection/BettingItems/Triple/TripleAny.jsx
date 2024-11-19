import React from 'react'
import PropTypes from 'prop-types'

function TripleAny(props) {
  return (
    <div className='triple-item win30'>
      <div className='txt'>
        <p>1 wins 30</p>
      </div>
      {props.children}
    </div>
  )
}

TripleAny.propTypes = {
  children: PropTypes.node.isRequired,
}

TripleAny.defaultProps = {}

export default TripleAny
