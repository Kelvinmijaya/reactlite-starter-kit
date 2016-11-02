import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

export default class Root extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired,
    store: PropTypes.object.isRequired
  };

  get content () {
    return (
        <Router history={this.props.history}>
          {this.props.routes}
        </Router>
    )
  }

  get devTools () {
    if (process.env.NODE_ENV === 'production') {
      return ''
    } else {
      const DevTools = require('./DevTools').default
      return <DevTools />
    }
  }

  render () {
    return (
        <Provider store={this.props.store}>
          <div style={{ height: '100%' }}>
            {this.content}
            {this.devTools}
          </div>
        </Provider>
    )
  }
}

