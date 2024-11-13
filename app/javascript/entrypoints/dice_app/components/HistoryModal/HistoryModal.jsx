import React from 'react'
import PropTypes from 'prop-types'
import ReactModal from '../ReactModal'
import GameResult from '../GameResult/GameResult'

function HistoryModal({
 records, open, onConfirm, onCancel, wrapper,
}) {
  return (
    <ReactModal
      className='history-box'
      closeTimeoutMS={300}
      contentLabel='Modal'
      isOpen={open}
      onRequestClose={onCancel}
      wrapper={wrapper}
      overlayClassName='history-overlay'
    >
      <div className='history-container'>
        <div className='history-header'>
          <div className='history-title'>最近結果</div>
          <div
            className='history-close'
            onClick={onCancel}
          >
            X
          </div>
        </div>
        <div className='history-content text-monospace'>
          {records.map((record) => (
            <GameResult
              size='sm'
              {...record}
              key={record.id}
            />
          ))}
        </div>
        <div className='actions'>
          <button
            type='button'
            className='btn btn-sm btn-secondary'
            onClick={onConfirm}
          >
            關閉
          </button>
        </div>
      </div>
    </ReactModal>
  )
}

HistoryModal.propTypes = {
  records: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      time: PropTypes.string,
      profit: PropTypes.number,
      result: PropTypes.object,
      betAmount: PropTypes.number,
    })
  ),

  open: PropTypes.bool,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  wrapper: PropTypes.object.isRequired,
}

HistoryModal.defaultProps = {
  records: [],
  open: false,
  onConfirm: () => {},
  onCancel: () => {},
}

export default HistoryModal
