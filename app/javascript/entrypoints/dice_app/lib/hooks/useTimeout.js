import { useEffect, useRef } from 'react'

const useTimeout = (callback, delay = 0) => {
  const timer = useRef()
  const savedCallback = useRef(callback)

  useEffect(() => {
    setTimeout(() => {
      savedCallback.current()
    }, delay)

    return () => clearTimeout(timer.current)
  }, [])

  return timer
}

export default useTimeout
