import promisableModal from './promiseReactModal'

/**
  * @desc promisableModal use to wrap Component to promise function
  * @param (Component: React component, props: object)
  *
  * @Using_Setp_1 make your confirm modal and compose component by your self
  *   -> const confirmBox = (props = {}) => promisableModal(ConfirmBox, props)
  *
  * @Using_Setp_2 using component like promise chain
  *   -> confirmBox({ title: "Are you sure?" }).then((result) => { // do your stuff })
*/
export default promisableModal
