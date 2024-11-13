import React from 'react'
import PropTypes from 'prop-types'

function Triple(props) {
  return <div className='item triple'>{props.children}</div>
}

Triple.propTypes = {
  children: PropTypes.node.isRequired,
}

Triple.defaultProps = {}

export default Triple
