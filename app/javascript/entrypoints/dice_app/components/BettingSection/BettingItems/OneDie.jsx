import React from 'react'
import PropTypes from 'prop-types'

function OneDie(props) {
  const { multiple } = props
  return <div className='item'>{`${multiple}:1 on one die`}</div>
}

OneDie.propTypes = {
  multiple: PropTypes.number.isRequired,
}

OneDie.defaultProps = {}

export default OneDie
