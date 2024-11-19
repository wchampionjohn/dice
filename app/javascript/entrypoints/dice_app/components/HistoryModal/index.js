import HistoryModal from './HistoryModal'
import promisableModal from '../../lib/promiseModal'

import './style.scss'

const historyModal = (props = {}) => promisableModal(HistoryModal, props)

export default historyModal
