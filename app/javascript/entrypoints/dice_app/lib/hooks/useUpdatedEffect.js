import { useEffect, useRef } from 'react'

const useUpdatedEffect = (callback, deps) => {
  const firstTime = useRef(false)
  useEffect(() => {
    if (!firstTime.current) {
      firstTime.current = true
      return undefined
    }
    return callback()
  }, deps)
}

export default useUpdatedEffect
