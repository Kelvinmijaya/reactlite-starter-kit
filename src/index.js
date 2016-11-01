import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import makeRoutes from './routes'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)
const routes = makeRoutes(store)
render(
  <Root store={store} routes={routes} history={history} />,
  document.getElementById('root')
)
