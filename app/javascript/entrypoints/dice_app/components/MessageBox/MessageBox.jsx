/* eslint-disable no-unused-expressions */

import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

import useTimeout from '../../lib/hooks/useTimeout'

function MessageBox({
  type,
  message,
  messageAppend,
  // props from promise modal
  open,
  onConfirm,
  onCancel,
  wrapper,
  autoClose,
}) {
  Modal.setAppElement(wrapper)

  useTimeout(() => {
    if (autoClose) {
      onCancel()
    }
  }, autoClose)

  return (
    <Modal
      overlayClassName='message-box-overlay'
      className={`message-box ${type}`}
      isOpen={open}
      onRequestClose={onConfirm}
      contentLabel='Modal'
      shouldReturnFocusAfterClose={false}
      parentSelector={() => document.querySelector('#root')}
    >
      <div className='base-modal-container'>
        <div className='content-text'>{message}</div>
        {typeof messageAppend === 'function'
          ? messageAppend({ onConfirm, onCancel })
          : null}
      </div>
    </Modal>
  )
}

MessageBox.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warning']),
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  messageAppend: PropTypes.func,
  open: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  wrapper: PropTypes.object.isRequired,
  autoClose: PropTypes.number,
}

MessageBox.defaultProps = {
  type: 'success',
  message: undefined,
  messageAppend: undefined,
  autoClose: undefined,
}

export default MessageBox
