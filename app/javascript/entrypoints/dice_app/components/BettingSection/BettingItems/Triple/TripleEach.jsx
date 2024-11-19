import React from 'react'
import PropTypes from 'prop-types'

function TripleEach(props) {
  return (
    <div className='triple-item'>
      <div className='txt'>
        <p>Each triple</p>
        <p>1 wins 180</p>
      </div>
      <div className='dice-group'>{props.children}</div>
    </div>
  )
}

TripleEach.propTypes = {
  children: PropTypes.node.isRequired,
}

TripleEach.defaultProps = {}

export default TripleEach
