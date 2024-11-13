/* eslint-disable no-underscore-dangle, no-lonely-if */

import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'

import reducer from './reducer'

const configureStore = (preloadedState) => {
  const middlewares = [
    thunk,
  ]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  let composeEnhancers = (arg) => (arg)
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  } else {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        'Please install redux-devtools-extension!',
        'https://github.com/zalmoxisus/redux-devtools-extension#installation',
      )
    }
  }

  return createStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares)),
  )
}

export default configureStore
