import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

function ReactModal(props) {
  const {
 isOpen, onRequestClose, children, wrapper, ...restProps
} = props
  Modal.setAppElement(wrapper)

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick
      shouldReturnFocusAfterClose={false}
      parentSelector={() => document.querySelector('#app-mount')}
      {...restProps}
    >
      <div className='base-modal-container'>{children}</div>
    </Modal>
  )
}

ReactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  wrapper: PropTypes.object.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

ReactModal.defaultProps = {}

export default ReactModal
