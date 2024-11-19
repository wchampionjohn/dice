import { usePromiseModal } from './hook'

const PromiseModal = ({ resolve, children }) => {
  const {
    open,
    setOpen,
    onCancel,
    onConfirm,
  } = usePromiseModal(resolve)

  return children({
    open,
    setOpen,
    onCancel,
    onConfirm,
  })
}

export default PromiseModal // render props component
