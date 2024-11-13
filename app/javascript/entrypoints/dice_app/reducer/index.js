/* eslint-disable no-underscore-dangle, no-lonely-if */

import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducer'

const configureAppStore = (preloadedState) => {
  const middlewares = [thunk]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  return configureStore({
    reducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
    devTools: process.env.NODE_ENV !== 'production',
  })
}

export default configureAppStore
