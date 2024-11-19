import promisableModal from '../../lib/promiseModal'

import MessageBox from './MessageBox'
import './style.scss'

const messageBox = (props = {}) => promisableModal(MessageBox, props)

export default messageBox
