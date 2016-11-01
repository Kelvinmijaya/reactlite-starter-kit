import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers/rootReducer'
import DevTools from '../containers/DevTools'

const configureStore = preloadedState => {

  const middleware = [thunk]
  const enhancers = []
  if (process.env.NODE_ENV === 'development') {
    middleware.push(createLogger())
    enhancers.push(DevTools.instrument())
  }
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/rootReducer', () => {
      const nextRootReducer = require('../reducers/rootReducer').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
