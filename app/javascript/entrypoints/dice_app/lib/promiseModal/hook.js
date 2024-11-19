import { useState, useCallback, useRef } from 'react'

export const usePromiseModal = (promiseResolve) => {
  const [open, setOpen] = useState(true)
  const isClicked = useRef(false)

  const closing = useCallback(() => {
    if (isClicked.current) return false

    isClicked.current = true
    setOpen(false)
    return true
  }, [])

  const onCancel = (e, result = false) => {
    if (e && e.preventDefault) e.preventDefault()
    if (closing()) promiseResolve(result)
  }

  const onConfirm = (e, result = true) => {
    if (e && e.preventDefault) e.preventDefault()
    if (closing()) promiseResolve(result)
  }

  return {
    open,
    setOpen,
    onCancel,
    onConfirm,
  }
}
