import { useRef, useCallback, useEffect } from 'react'
import throttle from 'lodash/throttle'

const useThrottle = (callback, delay) => {
  const options = { leading: true, trailing: false } // add custom lodash options
  const callbackRef = useRef(callback)
  // use mutable ref to make useCallback/throttle not depend on `callbackRef` dep
  useEffect(() => { callbackRef.current = callback })

  return useCallback(
    throttle((...args) => callbackRef.current(...args), delay, options),
    [delay],
  )
}

export default useThrottle
