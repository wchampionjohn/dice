import {
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react'
import debounce from 'lodash/debounce'

import useUpdatedEffect from './useUpdatedEffect'

export const useDebounceValue = (value, onChange, delay = 500) => {
  const [deboundedValue, setDeboundedValue] = useState(value)

  const timeout = useRef()
  const deboundedOnChange = useCallback((v) => {
    setDeboundedValue(v)

    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      onChange(v)
    }, delay)
  }, [onChange])

  useUpdatedEffect(() => {
    setDeboundedValue(value)
    clearTimeout(timeout.current)
  }, [value])

  return [deboundedValue, deboundedOnChange]
}

const useDebounce = (callback, delay, options = { leading: true, trailing: false }) => {
  const mergeOptions = {
    leading: true,
    trailing: false,
    ...options,
  }
  const callbackRef = useRef(callback)

  useEffect(() => { callbackRef.current = callback })

  return useCallback(
    debounce((...args) => callbackRef.current(...args), delay, mergeOptions),
    [delay],
  )
}

export default useDebounce
