import React from 'react'
import PropTypes from 'prop-types'
import Record from '../Record'
import historyModal from '../HistoryModal'
import { apiGetGames } from '../../api-request/games'

function History(props) {
  const { records } = props

  const handleClickMore = async () => {
    const { payload } = await apiGetGames()
    console.log(payload)
    await historyModal({
      records: payload.games,
    })
  }

  return (
    <div className='item records'>
      <h3 className='title'>歷史紀錄</h3>
      <div className='record-group'>
        {records.map((record) => (
          <Record
            key={record.id}
            {...record}
          />
        ))}
      </div>
      <h3 className='date-selector'>
        <button
          className='date-selector-btn previous'
          type='button'
        >
          ▲
        </button>
        <button
          className='date-selector-btn more'
          type='button'
          onClick={handleClickMore}
        >
          更多
        </button>
        <button
          className='date-selector-btn next'
          type='button'
        >
          ▲
        </button>
      </h3>
    </div>
  )
}

History.propTypes = {
  records: PropTypes.array,
}

History.defaultProps = {
  records: [],
}

export default History
